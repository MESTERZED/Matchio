'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FallingLeavesProps {
  count?: number;
  area?: number;
  color?: string;
}

export function FallingLeaves({
  count = 35,
  area = 8,
  color = '#A8C6A1',
}: FallingLeavesProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const leaves = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * area,
      y: Math.random() * area,
      z: (Math.random() - 0.5) * area * 0.5,
      rotationX: Math.random() * Math.PI,
      rotationY: Math.random() * Math.PI,
      rotationZ: Math.random() * Math.PI,
      speedY: 0.15 + Math.random() * 0.25,
      speedRotX: (Math.random() - 0.5) * 0.5,
      speedRotZ: (Math.random() - 0.5) * 0.4,
      driftX: (Math.random() - 0.5) * 0.3,
      scale: 0.6 + Math.random() * 0.5,
    }));
  }, [count, area]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    leaves.forEach((leaf, i) => {
      leaf.y -= delta * leaf.speedY;
      leaf.x += Math.sin(t * 0.5 + i) * leaf.driftX * delta;
      leaf.rotationX += delta * leaf.speedRotX;
      leaf.rotationZ += delta * leaf.speedRotZ;
      if (leaf.y < -area / 2) {
        leaf.y = area / 2;
        leaf.x = (Math.random() - 0.5) * area;
      }
      dummy.position.set(leaf.x, leaf.y, leaf.z);
      dummy.rotation.set(leaf.rotationX, leaf.rotationY, leaf.rotationZ);
      dummy.scale.setScalar(leaf.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  // Forme de feuille lancéolée approximée par un plan ovale
  const leafGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.2);
    shape.bezierCurveTo(0.08, 0.18, 0.12, 0.05, 0, -0.2);
    shape.bezierCurveTo(-0.12, 0.05, -0.08, 0.18, 0, 0.2);
    return new THREE.ShapeGeometry(shape);
  }, []);

  return (
    <instancedMesh ref={meshRef} args={[leafGeometry, undefined, count]} castShadow>
      <meshStandardMaterial
        color={color}
        side={THREE.DoubleSide}
        roughness={0.9}
        transparent
        opacity={0.85}
      />
    </instancedMesh>
  );
}
