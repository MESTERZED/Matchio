'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

interface RefillPackProps {
  rotationSpeed?: number;
}

export function RefillPack({ rotationSpeed = 0.3 }: RefillPackProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * rotationSpeed;
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Sachet kraft principal (légèrement bombé) */}
      <RoundedBox
        args={[0.85, 1.25, 0.22]}
        radius={0.018}
        smoothness={5}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#C2A47C" roughness={0.95} metalness={0} />
      </RoundedBox>

      {/* Pli supérieur (rabat plié) */}
      <mesh position={[0, 0.65, 0]} castShadow>
        <boxGeometry args={[0.86, 0.05, 0.12]} />
        <meshStandardMaterial color="#A88561" roughness={0.95} />
      </mesh>
      <mesh position={[0, 0.62, 0]}>
        <boxGeometry args={[0.86, 0.005, 0.23]} />
        <meshStandardMaterial color="#000" opacity={0.25} transparent />
      </mesh>

      {/* Symbole feuille en haut */}
      <mesh position={[0, 0.28, 0.114]} rotation={[0, 0, -0.314]}>
        <planeGeometry args={[0.12, 0.15]} />
        <meshStandardMaterial color="#0E3B2E" roughness={0.85} />
      </mesh>

      {/* Wordmark "matchio" en vert sur le sachet */}
      <Text
        position={[0, 0.08, 0.114]}
        fontSize={0.14}
        color="#0E3B2E"
        anchorX="center"
        anchorY="middle"
      >
        matchio
      </Text>

      {/* "REFILL PACK" */}
      <Text
        position={[0, -0.05, 0.114]}
        fontSize={0.04}
        color="#0E3B2E"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.25}
      >
        REFILL PACK · 30 DOSES
      </Text>

      {/* Variante */}
      <Text
        position={[0, -0.13, 0.114]}
        fontSize={0.028}
        color="#0E3B2E"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.3}
        fillOpacity={0.55}
      >
        FOCUS
      </Text>

      {/* Sleeve carton matcha en bas */}
      <RoundedBox
        args={[0.87, 0.36, 0.24]}
        radius={0.005}
        position={[0, -0.45, 0]}
        castShadow
      >
        <meshStandardMaterial color="#0E3B2E" roughness={0.85} />
      </RoundedBox>

      {/* Texte sur sleeve bas */}
      <Text
        position={[0, -0.4, 0.124]}
        fontSize={0.04}
        color="#C9A27E"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.3}
      >
        ZÉRO DÉCHET
      </Text>
      <Text
        position={[0, -0.5, 0.124]}
        fontSize={0.026}
        color="#C9A27E"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.2}
        fillOpacity={0.6}
      >
        COMPOSTABLE · OK COMPOST HOME
      </Text>

      {/* Wordmark dos */}
      <Text
        position={[0, 0.08, -0.114]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.12}
        color="#0E3B2E"
        anchorX="center"
        anchorY="middle"
        fillOpacity={0.6}
      >
        matchio
      </Text>
    </group>
  );
}
