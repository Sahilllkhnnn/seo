import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Minimal 3D orb to simulate rotating product previews.
const ProductOrb: React.FC<{ color: string }> = ({ color }) => {
  const meshRef = React.useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.4;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.1, 1]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.1}
        metalness={0.7}
        clearcoat={0.8}
        transparent
        opacity={0.95}
      />
    </mesh>
  );
};

export const ProductPreview3D: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className="h-72 w-full rounded-3xl bg-white/70 border border-white/60">
      <Canvas camera={{ position: [0, 0, 3.5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} intensity={1.3} />
        <ProductOrb color={color} />
      </Canvas>
    </div>
  );
};
