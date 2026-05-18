'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

interface ProductBoxProps {
  boxColor: string;
  sleeveColor: string;
  foilColor: string;
  name: string;
  rotationSpeed?: number;
  float?: boolean;
  hovered?: boolean;
}

export function ProductBox({
  boxColor,
  sleeveColor,
  foilColor,
  name,
  rotationSpeed = 0.25,
  float = true,
  hovered = false,
}: ProductBoxProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * (hovered ? 0.05 : rotationSpeed);
    if (float) {
      const t = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(t * 0.7) * 0.06;
    }
  });

  // Determine sub-line text color (foreground on sleeve)
  const sleeveDark = ['#0E3B2E', '#1A1A1A', '#3A6B4F', '#A88561'].includes(sleeveColor);
  const sleeveTextColor = sleeveDark ? '#F5F1E8' : '#0E3B2E';

  // Box dimensions: 110×85×70 mm => 1.1 × 1.6 × 0.7 (we use a more realistic vertical box)
  const W = 0.95;
  const H = 1.55;
  const D = 0.55;

  return (
    <group ref={groupRef}>
      {/* Boîte principale */}
      <RoundedBox
        args={[W, H, D]}
        radius={0.012}
        smoothness={6}
        creaseAngle={0.4}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={boxColor}
          roughness={0.78}
          metalness={0.02}
        />
      </RoundedBox>

      {/* Sleeve carton recyclé qui couvre la moitié basse */}
      <mesh position={[0, -H / 2 + 0.32, 0]} castShadow>
        <boxGeometry args={[W + 0.012, 0.62, D + 0.012]} />
        <meshStandardMaterial
          color={sleeveColor}
          roughness={0.92}
          metalness={0}
        />
      </mesh>

      {/* Bord supérieur sleeve avec ombre */}
      <mesh position={[0, -H / 2 + 0.62, 0]}>
        <boxGeometry args={[W + 0.014, 0.005, D + 0.014]} />
        <meshStandardMaterial color="#000000" opacity={0.3} transparent />
      </mesh>

      {/* Wordmark "matchio" (foil) sur la face avant haute */}
      <Text
        position={[0, 0.28, D / 2 + 0.001]}
        fontSize={0.13}
        color={foilColor}
        anchorX="center"
        anchorY="middle"
        material-toneMapped={false}
      >
        matchio
      </Text>

      {/* Symbole feuille subtil */}
      <mesh position={[0, 0.5, D / 2 + 0.002]} rotation={[0, 0, -0.314]}>
        <planeGeometry args={[0.13, 0.16]} />
        <meshStandardMaterial
          color={foilColor}
          roughness={0.4}
          metalness={0.55}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Sous-titre sur la boîte */}
      <Text
        position={[0, 0.13, D / 2 + 0.001]}
        fontSize={0.028}
        color={foilColor}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.25}
      >
        MATCHA + L-THÉANINE
      </Text>

      {/* Nom du produit sur le sleeve */}
      <Text
        position={[0, -H / 2 + 0.42, D / 2 + 0.007]}
        fontSize={0.085}
        color={sleeveTextColor}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.3}
      >
        {name}
      </Text>

      {/* Sub-line sur le sleeve */}
      <Text
        position={[0, -H / 2 + 0.28, D / 2 + 0.007]}
        fontSize={0.028}
        color={sleeveTextColor}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.22}
        fillOpacity={0.7}
      >
        30 CAPSULES · 52,5 G
      </Text>

      {/* Wordmark sur le côté gauche (pour quand on tourne) */}
      <group rotation={[0, -Math.PI / 2, 0]} position={[-W / 2 - 0.001, 0.28, 0]}>
        <Text
          fontSize={0.085}
          color={foilColor}
          anchorX="center"
          anchorY="middle"
          rotation={[0, 0, Math.PI / 2]}
        >
          matchio
        </Text>
      </group>

      {/* Verso : code-barres simulé */}
      <mesh position={[0, -H / 2 + 0.5, -D / 2 - 0.001]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[0.3, 0.15]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      {Array.from({ length: 14 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            -0.13 + i * 0.02,
            -H / 2 + 0.5,
            -D / 2 - 0.002,
          ]}
          rotation={[0, Math.PI, 0]}
        >
          <planeGeometry args={[i % 2 === 0 ? 0.005 : 0.003, 0.12]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      ))}
    </group>
  );
}
