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

const Scene = ({ sunSize, planetSize, orbitRadius, orbitSpeed }) => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Ball size={sunSize} />
      <OrbitingBall
        radius={orbitRadius}
        size={planetSize}
        speed={orbitSpeed}
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
}) {
  return (
    <Canvas style={{ height: "400px" }}>
      <Scene
        sunSize={sunSize}
        planetSize={planetSize}
        orbitRadius={orbitRadius}
        orbitSpeed={orbitSpeed}
      />
    </Canvas>
  );
}
