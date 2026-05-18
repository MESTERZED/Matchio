'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Cylinder, Text, Torus } from '@react-three/drei';
import * as THREE from 'three';

interface HeritageBoxProps {
  rotationSpeed?: number;
  open?: boolean;
}

export function HeritageBox({ rotationSpeed = 0.2, open = false }: HeritageBoxProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * rotationSpeed;
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* Base de la boîte cream */}
      <RoundedBox
        args={[1.7, 0.42, 1.25]}
        radius={0.015}
        smoothness={5}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#F5F1E8" roughness={0.88} metalness={0} />
      </RoundedBox>

      {/* Insert intérieur sage subtle */}
      <mesh position={[0, 0.21, 0]}>
        <boxGeometry args={[1.65, 0.005, 1.21]} />
        <meshStandardMaterial color="#A8C6A1" opacity={0.4} transparent />
      </mesh>

      {/* Couvercle (légèrement levé si open) */}
      <RoundedBox
        args={[1.72, 0.1, 1.27]}
        radius={0.015}
        smoothness={5}
        position={[0, open ? 0.62 : 0.27, open ? -0.6 : 0]}
        rotation={[open ? -0.6 : 0, 0, 0]}
        castShadow
      >
        <meshStandardMaterial color="#FAF6ED" roughness={0.88} metalness={0} />
      </RoundedBox>

      {/* Wordmark dorure sur couvercle */}
      <Text
        position={[0, open ? 0.68 : 0.33, open ? -0.85 : 0]}
        rotation={open ? [-Math.PI / 2 - 0.6, 0, 0] : [-Math.PI / 2, 0, 0]}
        fontSize={0.16}
        color="#D4B57E"
        anchorX="center"
        anchorY="middle"
        material-toneMapped={false}
      >
        matchio
      </Text>

      {/* Symbole feuille emboss sur couvercle */}
      <mesh
        position={[0, open ? 0.67 : 0.32, open ? -0.55 : 0.35]}
        rotation={[
          open ? -Math.PI / 2 - 0.6 : -Math.PI / 2,
          0,
          -0.314,
        ]}
      >
        <planeGeometry args={[0.13, 0.16]} />
        <meshStandardMaterial color="#D4B57E" metalness={0.55} roughness={0.4} transparent opacity={0.75} />
      </mesh>

      {/* Mug céramique sage à l'intérieur (creuse) */}
      <group position={[-0.4, 0.22, 0.15]}>
        <Cylinder args={[0.27, 0.21, 0.42, 48]} castShadow>
          <meshStandardMaterial color="#3A6B4F" roughness={0.5} metalness={0.05} />
        </Cylinder>
        {/* Anneau intérieur sombre */}
        <Torus args={[0.26, 0.005, 16, 48]} position={[0, 0.21, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#1F3F2A" roughness={0.6} />
        </Torus>
        {/* Matcha à l'intérieur */}
        <Cylinder args={[0.255, 0.255, 0.015, 48]} position={[0, 0.205, 0]}>
          <meshStandardMaterial color="#5B8C42" roughness={0.85} />
        </Cylinder>
        {/* Wordmark gravé sur le côté */}
        <Text
          position={[0, -0.05, 0.215]}
          fontSize={0.04}
          color="#1F3F2A"
          anchorX="center"
          anchorY="middle"
        >
          matchio
        </Text>
      </group>

      {/* Chasen (fouet bambou) */}
      <group position={[0.32, 0.25, -0.15]} rotation={[0, 0, 0.2]}>
        {/* Manche bas */}
        <Cylinder args={[0.045, 0.045, 0.32, 16]} position={[0, -0.16, 0]} castShadow>
          <meshStandardMaterial color="#C9A27E" roughness={0.85} />
        </Cylinder>
        {/* Anneau du milieu */}
        <Torus args={[0.05, 0.008, 8, 24]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#A88561" roughness={0.7} />
        </Torus>
        {/* Tines (fines lignes en cône inversé) */}
        {Array.from({ length: 32 }).map((_, i) => {
          const angle = (i / 32) * Math.PI * 2;
          const radius = 0.06;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * radius * 0.5, 0.1, Math.sin(angle) * radius * 0.5]}
              rotation={[0, angle, 0]}
            >
              <cylinderGeometry args={[0.0015, 0.0035, 0.18, 4]} />
              <meshStandardMaterial color="#E8DCC5" roughness={0.95} />
            </mesh>
          );
        })}
        {/* Disque suggérant la masse des tines */}
        <Cylinder args={[0.085, 0.05, 0.18, 24]} position={[0, 0.1, 0]}>
          <meshStandardMaterial color="#E8DCC5" roughness={0.92} opacity={0.45} transparent />
        </Cylinder>
      </group>

      {/* Chashaku (doseur) */}
      <group position={[0.5, 0.22, 0.45]} rotation={[0, 0.4, 0.05]}>
        <mesh castShadow>
          <boxGeometry args={[0.42, 0.018, 0.055]} />
          <meshStandardMaterial color="#C9A27E" roughness={0.92} />
        </mesh>
        {/* Cuillère bout */}
        <mesh position={[0.2, 0.005, 0]} castShadow>
          <cylinderGeometry args={[0.035, 0.025, 0.018, 16]} />
          <meshStandardMaterial color="#C9A27E" roughness={0.92} />
        </mesh>
      </group>

      {/* Sachet kraft refill */}
      <RoundedBox
        args={[0.55, 0.07, 0.36]}
        radius={0.008}
        position={[0.18, 0.22, 0.5]}
        rotation={[0, 0.3, 0]}
        castShadow
      >
        <meshStandardMaterial color="#C2A47C" roughness={0.95} />
      </RoundedBox>
      {/* Détail sur sachet : bandeau matcha */}
      <mesh position={[0.18, 0.255, 0.5]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[0.55, 0.005, 0.08]} />
        <meshStandardMaterial color="#0E3B2E" roughness={0.88} />
      </mesh>

      {/* Carte rituel */}
      <mesh position={[-0.05, 0.215, 0.55]} rotation={[0, -0.2, 0]}>
        <boxGeometry args={[0.32, 0.003, 0.22]} />
        <meshStandardMaterial color="#FAF6ED" roughness={0.95} />
      </mesh>
    </group>
  );
}
