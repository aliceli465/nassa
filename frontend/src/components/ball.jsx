// src/Ball.js
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import { interpolateColor } from "../utils/colorUtils";
import { ShaderMaterial } from "three";
import * as THREE from "three";
import { TextureLoader, DoubleSide } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing"; // For bloom effect
import sunImage from "../assets/sun.jpg";
import planetImage from "../assets/planet.jpg";
import normalImage from "../assets/normal.jpg";
import waterImage from "../assets/wataa.webp";
import atmosImage from "../assets/atmos.jpg";

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D baseTexture;
uniform sampler2D waterTexture;
uniform float coverage;
uniform float opacity;
varying vec2 vUv;

// Function to generate pseudo-random numbers based on coordinates
float random(vec2 st) {
    return fract(sin(dot(st.xy ,vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec4 baseColor = texture2D(baseTexture, vUv);
  vec4 waterColor = texture2D(waterTexture, vUv);
  
  // Generate noise to create random water coverage
  float noise = random(vUv * 10.0); // Scale for larger chunks

  // Determine the blend based on the coverage value and noise
  float blend = smoothstep(0.0, 1.0, (noise - (1.0 - coverage)) * (1.0 / coverage));

  vec4 mixedColor = mix(baseColor, waterColor, blend);
  gl_FragColor = vec4(mixedColor.rgb, mixedColor.a * opacity); // Multiply by opacity to adjust alpha

}
`;

const Ball = ({ size, heat }) => {
  const meshRef = useRef();
  const sunTexture = useLoader(TextureLoader, sunImage);

  useFrame(() => {
    // Set the color of the sun based on heat
    const clampedHeat = Math.max(0, heat); // Clamp heat value
    meshRef.current.material.color.set(interpolateColor(clampedHeat));
  });
  return (
    <>
      <mesh ref={meshRef} castShadow receiveShadow position={[0, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={sunTexture} />
      </mesh>
    </>
  );
};
const getOpacityFromAtmosphere = (atmosphere) => {
  switch (atmosphere) {
    case 0:
      return 1;
    case 25:
      return 0.7;
    case 50:
      return 0.5;
    case 75:
      return 0.4;
    case 100:
      return 0.2;
    default:
      return 1; // Fallback value if needed
  }
};
export const OrbitingBall = ({
  radius,
  size,
  speed,
  waterCoverage,
  atmosphere,
  magnetosphere,
}) => {
  const meshRef = useRef();
  const ringRef = useRef();
  const planetTexture = useLoader(TextureLoader, planetImage);
  const normalTexture = useLoader(TextureLoader, normalImage);
  const waterTexture = useLoader(TextureLoader, waterImage);
  const atmosphereTexture = useLoader(TextureLoader, atmosImage);

  const shaderMaterial = useMemo(() => {
    const opacity = getOpacityFromAtmosphere(atmosphere);
    console.log("opacity is: ", opacity);
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        baseTexture: { value: planetTexture },
        waterTexture: { value: waterTexture },
        coverage: { value: waterCoverage / 100 }, // Normalize the coverage value
        coverageAtmosphere: { value: atmosphere / 100 },
        opacity: { value: opacity }, // Add opacity as a uniform
      },
      transparent: true,
    });
  }, [
    planetTexture,
    waterTexture,
    waterCoverage,
    atmosphere,
    atmosphereTexture,
  ]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // Adjust position based on the radius for orbit
    meshRef.current.position.x = radius * Math.cos(time * speed);
    meshRef.current.position.z = radius * Math.sin(time * speed);
  });

  const createMagneticRings = () => {
    const lines = [];
    const baseLineWidth = magnetosphere === 10 ? 1 : 0.5; // Increase thickness for weak fields
    const baseLineCount =
      magnetosphere === 10 ? 2 : Math.floor(magnetosphere / 10); // More lines for weak field
    const lineColor = magnetosphere === 10 ? 0x66ffff : 0x00ffff; // Brighter color for weak fields

    for (let i = 0; i < baseLineCount; i++) {
      const lineRadius = size + (i + 1) * 0.5;
      const curve = new THREE.EllipseCurve(
        0,
        0,
        lineRadius,
        lineRadius * 0.8,
        0,
        2 * Math.PI,
        false,
        Math.random() * Math.PI
      );
      const points = curve.getPoints(50);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      lines.push(
        <line key={i}>
          <bufferGeometry attach="geometry" {...geometry} />
          <lineBasicMaterial color={lineColor} linewidth={baseLineWidth} />{" "}
          {/* Adjusted line thickness and color */}
        </line>
      );
    }
    return lines;
  };
  return (
    <>
      {/* Orbit Path */}
      <mesh ref={ringRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.01, radius + 0.01, 64]} />{" "}
        <meshStandardMaterial color="white" side={DoubleSide} />
      </mesh>
      {/* Orbiting Planet  + rings*/}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[size, 16, 16]} /> {/* Orbiting sphere size */}
        <primitive object={shaderMaterial} attach="material" />{" "}
        {createMagneticRings()}
      </mesh>
    </>
  );
};

const Scene = ({
  sunSize,
  planetSize,
  orbitRadius,
  orbitSpeed,
  heat,
  waterCoverage,
  atmosphere,
  magnetosphere,
}) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 0, 0]}
        intensity={19}
        castShadow
        shadow-mapSize-width={1024} // Increase shadow resolution
        shadow-mapSize-height={1024} // Increase shadow resolution
        shadow-bias={-0.001}
      />
      <Ball size={sunSize} heat={heat} />
      <OrbitingBall
        radius={orbitRadius}
        size={planetSize}
        speed={orbitSpeed}
        waterCoverage={waterCoverage}
        atmosphere={atmosphere}
        magnetosphere={magnetosphere}
      />{" "}
      {/* Adjust orbitRadius */}
      <OrbitControls />
    </>
  );
};

export default function BallScene({
  sunSize,
  planetSize,
  orbitRadius,
  orbitSpeed,
  heat,
  waterCoverage,
  atmosphere,
  magnetosphere,
}) {
  return (
    <div style={{ marginTop: "100px" }}>
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <Scene
          sunSize={sunSize}
          planetSize={planetSize}
          orbitRadius={orbitRadius}
          orbitSpeed={orbitSpeed}
          heat={heat}
          waterCoverage={waterCoverage}
          atmosphere={atmosphere}
          magnetosphere={magnetosphere}
        />
      </Canvas>
    </div>
  );
}
