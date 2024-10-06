// src/Ball.js
import React, { useRef, useMemo } from "react";
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

  gl_FragColor = mix(baseColor, waterColor, blend);
}
`;

const Ball = ({ size, heat }) => {
  const meshRef = useRef();
  const sunTexture = useLoader(TextureLoader, sunImage);

  useFrame(() => {
    // Set the color of the sun based on heat
    meshRef.current.material.color.set(interpolateColor(heat)); // Update sun color based on heat
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

export const OrbitingBall = ({ radius, size, speed, waterCoverage }) => {
  const meshRef = useRef();
  const ringRef = useRef();
  const planetTexture = useLoader(TextureLoader, planetImage);
  const normalTexture = useLoader(TextureLoader, normalImage);
  const waterTexture = useLoader(TextureLoader, waterImage);

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        baseTexture: { value: planetTexture },
        waterTexture: { value: waterTexture },
        coverage: { value: waterCoverage / 100 }, // Normalize the coverage value
      },
    });
  }, [planetTexture, waterTexture, waterCoverage]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // Adjust position based on the radius for orbit
    meshRef.current.position.x = radius * Math.cos(time * speed);
    meshRef.current.position.z = radius * Math.sin(time * speed);
  });

  return (
    <>
      {/* Orbit Path */}
      <mesh ref={ringRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.01, radius + 0.01, 64]} />{" "}
        {/* Inner and outer radius */}
        <meshStandardMaterial color="white" side={DoubleSide} />
      </mesh>
      {/* Orbiting Planet */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[size, 16, 16]} /> {/* Orbiting sphere size */}
        <primitive object={shaderMaterial} attach="material" />{" "}
      </mesh>
    </>
  );
};

const Scene = ({ sunSize, planetSize, orbitRadius, orbitSpeed, heat }) => {
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
        tilt={0}
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
        />
      </Canvas>
    </div>
  );
}
