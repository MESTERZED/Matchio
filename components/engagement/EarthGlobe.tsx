'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { plantingRegions, type PlantingRegion } from '@/lib/data/eco-stats';
import { formatNumber } from '@/lib/utils';

const EARTH_RADIUS = 2;
const TILT = 0.41; // 23.5° en radians
const ROTATION_PERIOD = 60; // 1 tour en 60 s

// Conversion lat/lng → position 3D sur la sphère
function latLngTo3D(lat: number, lng: number, radius: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}

/**
 * Texture Terre japandi générée à la volée via Canvas 2D.
 * Océans matcha-deep, continents matcha-soft, accents clay.
 */
function createEarthTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Océans : dégradé matcha-deep
  const ocean = ctx.createRadialGradient(1024, 512, 200, 1024, 512, 1300);
  ocean.addColorStop(0, '#0E3B2E');
  ocean.addColorStop(0.6, '#082218');
  ocean.addColorStop(1, '#051811');
  ctx.fillStyle = ocean;
  ctx.fillRect(0, 0, 2048, 1024);

  // Parallèles/méridiens clay très subtils
  ctx.strokeStyle = 'rgba(201, 162, 126, 0.06)';
  ctx.lineWidth = 1;
  for (let i = 1; i < 8; i++) {
    const y = (i / 8) * 1024;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(2048, y);
    ctx.stroke();
  }
  for (let i = 1; i < 16; i++) {
    const x = (i / 16) * 2048;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 1024);
    ctx.stroke();
  }

  // Continents : silhouettes simplifiées en matcha-soft
  ctx.fillStyle = '#A8C6A1';

  const drawPolygon = (points: Array<[number, number]>) => {
    ctx.beginPath();
    points.forEach(([lat, lng], i) => {
      const x = ((lng + 180) / 360) * 2048;
      const y = ((90 - lat) / 180) * 1024;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
  };

  // EURASIE
  drawPolygon([
    [70, -10], [72, 30], [78, 80], [75, 140], [65, 180], [50, 165], [35, 140],
    [25, 120], [10, 100], [5, 110], [10, 80], [25, 60], [25, 45], [35, 30],
    [40, 25], [45, 5], [50, -8], [60, -8], [70, -10],
  ]);

  // AFRIQUE
  drawPolygon([
    [37, -8], [35, 10], [30, 30], [15, 38], [5, 45], [-5, 40], [-15, 35],
    [-30, 30], [-35, 25], [-32, 15], [-25, 12], [-15, 10], [-5, 8], [5, 0],
    [10, -15], [20, -18], [30, -10], [37, -8],
  ]);

  // AMÉRIQUE DU NORD
  drawPolygon([
    [70, -160], [75, -100], [72, -70], [60, -60], [50, -55], [40, -70],
    [30, -85], [25, -100], [20, -110], [25, -120], [40, -125], [55, -135],
    [65, -145], [70, -160],
  ]);

  // AMÉRIQUE DU SUD
  drawPolygon([
    [12, -75], [10, -50], [0, -45], [-15, -38], [-25, -45], [-40, -60],
    [-50, -70], [-55, -75], [-40, -80], [-25, -80], [-10, -80], [0, -80], [12, -75],
  ]);

  // OCÉANIE (Australie)
  drawPolygon([
    [-10, 130], [-15, 145], [-25, 152], [-35, 148], [-38, 140], [-35, 125],
    [-25, 115], [-18, 120], [-10, 130],
  ]);

  // GROENLAND
  drawPolygon([[80, -45], [78, -15], [70, -25], [62, -45], [70, -55], [80, -45]]);

  // Îles principales
  const islands: Array<[number, number, number]> = [
    [36, 138, 18], // Honshu
    [33, 130, 12], // Kyushu
    [0, 105, 18], // Sumatra
    [-7, 110, 14], // Java
    [50, -2, 12], // UK
    [-22, 47, 16], // Madagascar
    [20, -78, 10], // Cuba
    [-42, 172, 12], // NZ
    [65, 18, 10], // Scandinavie
  ];
  islands.forEach(([lat, lng, r]) => {
    const x = ((lng + 180) / 360) * 2048;
    const y = ((90 - lat) / 180) * 1024;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

interface MarkerProps {
  region: PlantingRegion;
  delay: number;
  onHover: (region: PlantingRegion | null) => void;
  isActive: boolean;
}

function Marker({ region, delay, onHover, isActive }: MarkerProps) {
  const haloRef = useRef<THREE.Mesh>(null);
  const position = useMemo(
    () => latLngTo3D(region.lat, region.lng, EARTH_RADIUS + 0.04),
    [region],
  );
  const [scale, setScale] = useState(0);

  const quaternion = useMemo(() => {
    const up = new THREE.Vector3(0, 1, 0);
    const normal = new THREE.Vector3(...position).normalize();
    return new THREE.Quaternion().setFromUnitVectors(up, normal);
  }, [position]);

  useEffect(() => {
    const start = performance.now() + delay;
    let raf: number;
    const animate = () => {
      const elapsed = performance.now() - start;
      if (elapsed < 0) {
        raf = requestAnimationFrame(animate);
        return;
      }
      const t = Math.min(1, elapsed / 1200);
      const eased = 1 - Math.pow(1 - t, 3);
      setScale(eased);
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [delay]);

  useFrame((state) => {
    if (haloRef.current) {
      const t = state.clock.getElapsedTime();
      const pulse = 1 + Math.sin(t * 2 + delay * 0.001) * 0.18;
      haloRef.current.scale.setScalar(pulse * scale);
    }
  });

  return (
    <group
      position={position}
      quaternion={quaternion}
      scale={scale}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(region);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        onHover(null);
        document.body.style.cursor = '';
      }}
    >
      <mesh position={[0, 0.07, 0]}>
        <coneGeometry args={[0.045, 0.14, 12]} />
        <meshStandardMaterial
          color={isActive ? '#C9A27E' : '#3A6B4F'}
          roughness={0.45}
          emissive={isActive ? '#C9A27E' : '#000'}
          emissiveIntensity={isActive ? 0.5 : 0}
        />
      </mesh>
      <mesh ref={haloRef} position={[0, 0.002, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.055, 0.095, 32]} />
        <meshBasicMaterial color="#C9A27E" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

interface EarthSpinningProps {
  paused: boolean;
  onHover: (region: PlantingRegion | null) => void;
  activeRegion: PlantingRegion | null;
}

function EarthSpinning({ paused, onHover, activeRegion }: EarthSpinningProps) {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useMemo(() => createEarthTexture(), []);

  useFrame((_, delta) => {
    if (!groupRef.current || paused) return;
    groupRef.current.rotation.y += delta * ((Math.PI * 2) / ROTATION_PERIOD);
  });

  useEffect(() => () => texture.dispose(), [texture]);

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[EARTH_RADIUS, 96, 96]} />
        <meshStandardMaterial map={texture} roughness={0.85} metalness={0.04} />
      </mesh>
      {/* Halo atmosphère */}
      <mesh scale={1.03}>
        <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
        <meshBasicMaterial color="#A8C6A1" transparent opacity={0.09} side={THREE.BackSide} />
      </mesh>
      {/* Markers : ils tournent avec la Terre car ils sont enfants du même groupe */}
      {plantingRegions.map((region, i) => (
        <Marker
          key={region.id}
          region={region}
          delay={i * 200}
          onHover={onHover}
          isActive={activeRegion?.id === region.id}
        />
      ))}
    </group>
  );
}

export function EarthGlobe() {
  const [activeRegion, setActiveRegion] = useState<PlantingRegion | null>(null);

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ touchAction: 'none' }}
      >
        <ambientLight intensity={0.45} color="#F5F1E8" />
        <directionalLight position={[5, 3, 5]} intensity={1.2} color="#FFFCF2" />
        <directionalLight position={[-4, -2, -2]} intensity={0.25} color="#A8C6A1" />

        {/* Tilt axial appliqué une seule fois sur le wrapper */}
        <group rotation={[TILT, 0, 0]}>
          <EarthSpinning
            paused={Boolean(activeRegion)}
            onHover={setActiveRegion}
            activeRegion={activeRegion}
          />
        </group>
      </Canvas>

      {/* Tooltip overlay HTML */}
      {activeRegion && (
        <div className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 z-10 w-72 max-w-[85%]">
          <div className="bg-cream/95 backdrop-blur-sm border border-matcha-deep/15 p-5 shadow-2xl">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-clay">
              {activeRegion.country}
            </p>
            <p className="mt-1 font-display italic text-2xl text-matcha-deep leading-tight">
              {activeRegion.name}
            </p>
            <div className="mt-4 pt-4 border-t border-cream-dark">
              <p className="font-mono text-2xl text-matcha-deep">
                {formatNumber(activeRegion.count)}{' '}
                <span className="text-sm text-ink-soft font-sans normal-case">
                  {activeRegion.unit}
                </span>
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-clay">
                {activeRegion.partner}
              </p>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                {activeRegion.action}
              </p>
            </div>
          </div>
        </div>
      )}

      {!activeRegion && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-cream/45 pointer-events-none">
          ✦ Survolez un marqueur
        </div>
      )}
    </div>
  );
}
