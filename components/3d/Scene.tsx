'use client';

import { Suspense, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';

interface SceneProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  fov?: number;
  interactive?: boolean;
  autoRotate?: boolean;
  shadows?: boolean;
  background?: 'transparent' | string;
}

export function Scene({
  children,
  cameraPosition = [0, 0.4, 2.6],
  fov = 35,
  interactive = false,
  autoRotate = false,
  shadows = true,
  background = 'transparent',
}: SceneProps) {
  return (
    <Canvas
      shadows={shadows}
      camera={{ position: cameraPosition, fov }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: background === 'transparent' }}
      style={{
        background: background === 'transparent' ? 'transparent' : background,
        touchAction: 'none',
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[3, 4.5, 2.5]}
          intensity={0.9}
          castShadow={shadows}
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-2, 1.5, -2]} intensity={0.35} color="#DCE8DA" />
        <Environment preset="apartment" background={false} />
        {children}
        <ContactShadows
          position={[0, -0.55, 0]}
          opacity={0.35}
          scale={5}
          blur={2.4}
          far={1.6}
        />
        {interactive && (
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={1.6}
            maxDistance={4}
            autoRotate={autoRotate}
            autoRotateSpeed={0.6}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 3.2}
          />
        )}
      </Suspense>
    </Canvas>
  );
}
