// src/Ball.js
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader} from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import { interpolateColor } from "../utils/colorUtils";
import { TextureLoader, DoubleSide } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing"; // For bloom effect
import sunImage from "../assets/sun.jpg";
import planetImage from "../assets/planet.jpg"; 
import normalImage from "../assets/normal.jpg"; 

const Ball = ({ size, heat }) => {
  const meshRef = useRef();
  const sunTexture = useLoader(TextureLoader, sunImage);

  useFrame(() => {
    // Set the color of the sun based on heat
    meshRef.current.material.color.set(interpolateColor(heat)); // Update sun color based on heat
  });
  return (
    <>
      <mesh ref={meshRef} castShadow receiveShadow position={[0,0,0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          map={sunTexture} // Use the texture for the sun
          emissive={interpolateColor(heat)} // Set emissive color based on heat
          emissiveIntensity={0.3} // Lower intensity to not overpower the texture
          transparent={true} 
        />
      </mesh>
    </>
  );
};

const OrbitingBall = ({ radius, size, speed, tilt}) => {
  const meshRef = useRef();
  const ringRef = useRef();
  const planetTexture = useLoader(TextureLoader, planetImage); 
  const normalTexture = useLoader(TextureLoader, normalImage);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // Adjust position based on the radius for orbit
    meshRef.current.position.x = radius * Math.cos(time * speed);
    meshRef.current.position.z = radius * Math.sin(time * speed);

    meshRef.current.rotation.x = tilt * Math.PI; // Tilt between 0 and PI radians
    meshRef.current.rotation.y = time * 2; // Spin on Y-axis
    meshRef.current.rotation.z = tilt * Math.PI; // Additional tilt for visibility
  });

  return (
    <>
      {/* Orbit Path */}
      <mesh ref={ringRef} position={[0, 0, 0]} rotation={[Math.PI/2, 0, 0]}>
        <ringGeometry args={[radius - 0.01, radius + 0.01, 64]} /> {/* Inner and outer radius */}
        <meshStandardMaterial color="white" side={DoubleSide} />
      </mesh>
      {/* Orbiting Planet */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[size, 16, 16]} /> {/* Orbiting sphere size */}
        <meshStandardMaterial map={planetTexture} normalMap={normalTexture} />
      </mesh>
    </>
  );
};

const Scene = ({ sunSize, planetSize, orbitRadius, orbitSpeed, heat }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0,0,0]}
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
        tilt = {0}
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
