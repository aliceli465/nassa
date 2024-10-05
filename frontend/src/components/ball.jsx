// src/Ball.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SphereGeometry } from "three";

const Ball = ({ size }) => {
  return (
    <mesh>
      <sphereGeometry args={[size, 32, 32]} /> {/* Change to sphereGeometry */}
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const Scene = ({ size }) => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Ball size={size} />
      <OrbitControls />
    </>
  );
};

export default function BallScene({ size }) {
  return (
    <Canvas style={{ height: "400px" }}>
      <Scene size={size} />
    </Canvas>
  );
}
