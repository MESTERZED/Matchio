'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

export function CircularLoop() {
  const groupRef = useRef<THREE.Group>(null);
  const heritageRef = useRef<THREE.Group>(null);
  const refillRef = useRef<THREE.Group>(null);
  const dosesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
    }
    // 3 objets en orbite décalée
    if (heritageRef.current) {
      heritageRef.current.position.x = Math.cos(t * 0.4) * 1.2;
      heritageRef.current.position.z = Math.sin(t * 0.4) * 1.2;
      heritageRef.current.rotation.y = t * 0.3;
    }
    if (refillRef.current) {
      refillRef.current.position.x = Math.cos(t * 0.4 + (Math.PI * 2) / 3) * 1.2;
      refillRef.current.position.z = Math.sin(t * 0.4 + (Math.PI * 2) / 3) * 1.2;
      refillRef.current.rotation.y = t * 0.3;
    }
    if (dosesRef.current) {
      dosesRef.current.position.x = Math.cos(t * 0.4 + (Math.PI * 4) / 3) * 1.2;
      dosesRef.current.position.z = Math.sin(t * 0.4 + (Math.PI * 4) / 3) * 1.2;
      dosesRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cercle de matcha au sol */}
      <mesh position={[0, -0.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.0, 1.4, 64]} />
        <meshStandardMaterial color="#3A6B4F" transparent opacity={0.25} />
      </mesh>

      {/* Heritage Box */}
      <group ref={heritageRef}>
        <RoundedBox args={[0.55, 0.2, 0.45]} radius={0.015} smoothness={3} castShadow>
          <meshStandardMaterial color="#F5F1E8" roughness={0.9} />
        </RoundedBox>
        {/* Couvercle */}
        <RoundedBox args={[0.56, 0.05, 0.46]} radius={0.01} position={[0, 0.13, 0]} castShadow>
          <meshStandardMaterial color="#F5F1E8" roughness={0.9} />
        </RoundedBox>
        <mesh position={[0, 0.155, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.2, 0.04]} />
          <meshStandardMaterial color="#D4B57E" metalness={0.6} roughness={0.35} />
        </mesh>
      </group>

      {/* Refill Pack */}
      <group ref={refillRef}>
        <RoundedBox args={[0.34, 0.46, 0.075]} radius={0.008} smoothness={3} castShadow>
          <meshStandardMaterial color="#C2A47C" roughness={0.95} />
        </RoundedBox>
        {/* Bandeau matcha en bas */}
        <RoundedBox args={[0.345, 0.13, 0.08]} radius={0.005} position={[0, -0.165, 0]} castShadow>
          <meshStandardMaterial color="#0E3B2E" roughness={0.85} />
        </RoundedBox>
      </group>

      {/* Dose individuelle (sachet petite) */}
      <group ref={dosesRef}>
        <RoundedBox args={[0.18, 0.22, 0.05]} radius={0.005} smoothness={3} castShadow>
          <meshStandardMaterial color="#C2A47C" roughness={0.95} />
        </RoundedBox>
      </group>

      {/* Orbe central matcha */}
      <Cylinder args={[0.18, 0.18, 0.04, 32]} position={[0, -0.4, 0]} castShadow>
        <meshStandardMaterial color="#3A6B4F" roughness={0.55} />
      </Cylinder>
      <Cylinder args={[0.16, 0.16, 0.01, 32]} position={[0, -0.375, 0]}>
        <meshStandardMaterial color="#5B8C42" roughness={0.7} />
      </Cylinder>
    </group>
  );
}
