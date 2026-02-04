import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Abstract 3D fabric knot used in the hero area.
const FabricMesh: React.FC = () => {
  const meshRef = React.useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.2, 0.4, 160, 12]} />
        <meshPhysicalMaterial
          color="#f4e7cf"
          roughness={0.2}
          metalness={0.6}
          clearcoat={0.7}
        />
      </mesh>
    </Float>
  );
};

export const ThreeHero: React.FC = () => {
  return (
    <div className="relative h-[420px] w-full">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 4]} intensity={1.4} />
        <directionalLight position={[-4, -2, -2]} intensity={0.6} />
        <FabricMesh />
      </Canvas>
      <div className="absolute inset-0 rounded-[40px] bg-gold-gradient pointer-events-none" />
    </div>
  );
};
