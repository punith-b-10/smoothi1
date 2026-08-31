import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei/core/Float";
import { ContactShadows } from "@react-three/drei/core/ContactShadows";
import * as THREE from "three";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const FRUIT_COLORS = ["#ED4F8C", "#8B5CF6", "#FFC94A", "#2F8F5B", "#FF7A33"];

function Bowl() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={ref}>
      {/* Bowl base */}
      <mesh position={[0, -0.4, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1.6, 48, 48, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#F6EEDD" roughness={0.35} metalness={0.05} />
      </mesh>
      {/* Smoothie fill */}
      <mesh position={[0, -0.08, 0]}>
        <cylinderGeometry args={[1.52, 1.3, 0.3, 48]} />
        <meshStandardMaterial color="#ED4F8C" roughness={0.25} metalness={0.1} />
      </mesh>
      {/* Rim highlight */}
      <mesh position={[0, 0.02, 0]}>
        <torusGeometry args={[1.6, 0.05, 16, 64]} />
        <meshStandardMaterial color="#20291E" roughness={0.4} />
      </mesh>
    </group>
  );
}

function FloatingFruit({
  position,
  color,
  shape,
  speed,
}: {
  position: [number, number, number];
  color: string;
  shape: "sphere" | "icosahedron" | "torus";
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
  });

  return (
    <Float speed={speed * 1.4} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={ref} position={position} castShadow>
        {shape === "sphere" && <sphereGeometry args={[0.26, 24, 24]} />}
        {shape === "icosahedron" && <icosahedronGeometry args={[0.22, 0]} />}
        {shape === "torus" && <torusGeometry args={[0.22, 0.09, 16, 32]} />}
        <meshStandardMaterial color={color} roughness={0.45} metalness={0.05} />
      </mesh>
    </Float>
  );
}

function Seeds() {
  const positions = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 1.3;
      pts.push([Math.cos(angle) * radius, 0.08 + Math.random() * 0.05, Math.sin(angle) * radius]);
    }
    return pts;
  }, []);

  return (
    <group>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.025, 6, 6]} />
          <meshStandardMaterial color={i % 3 === 0 ? "#FFC94A" : "#20291E"} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  const fruitPositions: { position: [number, number, number]; shape: "sphere" | "icosahedron" | "torus" }[] = [
    { position: [-2.3, 1.2, -0.5], shape: "sphere" },
    { position: [2.4, 0.8, -0.8], shape: "icosahedron" },
    { position: [-1.9, -0.5, 1.6], shape: "sphere" },
    { position: [2.2, -0.6, 1.4], shape: "torus" },
    { position: [0, 2.1, -1.2], shape: "icosahedron" },
    { position: [-2.6, -1.3, -0.6], shape: "sphere" },
  ];

  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-4, 2, -3]} intensity={0.45} color="#FFC94A" />
      <pointLight position={[3, -2, 2]} intensity={0.4} color="#8B5CF6" />
      <pointLight position={[0, 3, 4]} intensity={0.5} color="#FBF5E9" />

      <Bowl />
      <Seeds />

      {fruitPositions.map((f, i) => (
        <FloatingFruit
          key={i}
          position={f.position}
          shape={f.shape}
          color={FRUIT_COLORS[i % FRUIT_COLORS.length]}
          speed={0.6 + (i % 3) * 0.2}
        />
      ))}

      <ContactShadows position={[0, -1.35, 0]} opacity={0.35} scale={8} blur={2.4} far={2} />
    </>
  );
}

export default function HeroScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        shadows
        dpr={[1, reducedMotion ? 1 : 1.75]}
        camera={{ position: [0, 1.6, 6], fov: 40 }}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
