import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei/core/Float";
import * as THREE from "three";
import type { Ingredient } from "../../types/menu";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const COLORS = ["#ED4F8C", "#FF7A33", "#8B5CF6", "#2F8F5B", "#FFC94A"];

function IngredientNode({
  ingredient,
  index,
  total,
  active,
  onSelect,
}: {
  ingredient: Ingredient;
  index: number;
  total: number;
  active: boolean;
  onSelect: (i: Ingredient) => void;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const angle = (index / total) * Math.PI * 2;
  const radius = 2.6;
  const position: [number, number, number] = [
    Math.cos(angle) * radius,
    Math.sin(index * 1.7) * 0.6,
    Math.sin(angle) * radius,
  ];

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.5;
    const targetScale = active || hovered ? 1.5 : 1;
    ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh
        ref={ref}
        position={position}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(ingredient);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <icosahedronGeometry args={[0.34, 0]} />
        <meshStandardMaterial
          color={active ? "#20291E" : COLORS[index % COLORS.length]}
          roughness={0.45}
          metalness={0.08}
        />
      </mesh>
    </Float>
  );
}

function RotatingRig({ children, reducedMotion }: { children: React.ReactNode; reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current && !reducedMotion) group.current.rotation.y += delta * 0.12;
  });
  return <group ref={group}>{children}</group>;
}

interface IngredientOrbitProps {
  items: Ingredient[];
  active: Ingredient | null;
  onSelect: (i: Ingredient) => void;
}

export default function IngredientOrbit({ items, active, onSelect }: IngredientOrbitProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas dpr={[1, reducedMotion ? 1 : 1.6]} camera={{ position: [0, 1.4, 7], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 3]} intensity={1.1} />
        <pointLight position={[-3, -1, -3]} intensity={0.45} color="#8B5CF6" />
        <pointLight position={[0, 2, 5]} intensity={0.4} color="#FBF5E9" />
        <RotatingRig reducedMotion={reducedMotion}>
          {items.map((ing, i) => (
            <IngredientNode
              key={ing.id}
              ingredient={ing}
              index={i}
              total={items.length}
              active={active?.id === ing.id}
              onSelect={onSelect}
            />
          ))}
        </RotatingRig>
      </Canvas>
    </div>
  );
}
