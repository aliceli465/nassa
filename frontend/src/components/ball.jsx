// src/Ball.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Ball = ({ size }) => {
  return (
    <mesh>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const OrbitingBall = ({ radius, size }) => {
  const meshRef = useRef();
  const speed = 0.5; // Speed of orbiting

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

const Scene = ({ size, orbitingSize, orbitRadius }) => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Ball size={size} />
      <OrbitingBall radius={orbitRadius} size={orbitingSize} />{" "}
      {/* Adjust orbitRadius */}
      <OrbitControls />
    </>
  );
};

export default function BallScene({ size, orbitingSize, orbitRadius }) {
  return (
    <Canvas style={{ height: "400px" }}>
      <Scene
        size={size}
        orbitingSize={orbitingSize}
        orbitRadius={orbitRadius}
      />
    </Canvas>
  );
}
