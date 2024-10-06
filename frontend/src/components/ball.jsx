// src/Ball.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import { interpolateColor } from "../utils/colorUtils";
import { EffectComposer, Bloom } from "@react-three/postprocessing"; // For bloom effect

const Ball = ({ size, heat }) => {
  const meshRef = useRef();

  useFrame(() => {
    // Set the color of the sun based on heat
    meshRef.current.material.color.set(interpolateColor(heat)); // Update sun color based on heat
  });
  return (
    <>
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

const OrbitingBall = ({ radius, size, speed }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // Adjust position based on the radius for orbit
    meshRef.current.position.x = radius * Math.cos(time * speed);
    meshRef.current.position.z = radius * Math.sin(time * speed);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 16, 16]} /> {/* Orbiting sphere size */}
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

const Scene = ({ size, orbitingSize, orbitRadius, orbitSpeed, heat }) => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024} // Increase shadow resolution
        shadow-mapSize-height={1024} // Increase shadow resolution
        shadow-bias={-0.001}
      />
      <Ball size={size} heat={heat} />
      <OrbitingBall
        radius={orbitRadius}
        size={orbitingSize}
        speed={orbitSpeed}
      />{" "}
      {/* Adjust orbitRadius */}
      <OrbitControls />
    </>
  );
};

export default function BallScene({
  size,
  orbitingSize,
  orbitRadius,
  orbitSpeed,
  heat,
}) {
  return (
    <Canvas style={{ height: "400px" }}>
      <Scene
        size={size}
        orbitingSize={orbitingSize}
        orbitRadius={orbitRadius}
        orbitSpeed={orbitSpeed}
        heat={heat}
      />
    </Canvas>
  );
}
