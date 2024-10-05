// src/Ball.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SphereGeometry } from "three";

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
  const speed = 1.2; // Speed of orbiting

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // Update position based on elapsed time
    meshRef.current.position.x = radius * Math.cos(time * speed);
    meshRef.current.position.z = radius * Math.sin(time * speed);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 16, 16]} /> {/* Smaller sphere */}
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

const Scene = ({ size, orbitingSize }) => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Ball size={size} />
      <OrbitingBall radius={2} size={orbitingSize} />{" "}
      {/* Adjust radius as needed */}
      <OrbitControls />
    </>
  );
};

export default function BallScene({ size, orbitingSize }) {
  return (
    <Canvas style={{ height: "400px" }}>
      <Scene size={size} orbitingSize={orbitingSize} />
    </Canvas>
  );
}
