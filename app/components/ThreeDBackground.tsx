"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function AnimatedShape({ position, rotation, scale, color }: any) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {Math.random() > 0.6 ? (
        <sphereGeometry args={[1, 32, 32]} />
      ) : Math.random() > 0.3 ? (
        <boxGeometry args={[1, 1, 1]} />
      ) : (
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
      )}
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default function ThreeDBackground({ color = "#3B82F6" }) {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {Array.from({ length: 20 }).map((_, i) => (
          <AnimatedShape
            key={i}
            position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 5 - 10]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            scale={[Math.random() * 0.5 + 0.1, Math.random() * 0.5 + 0.1, Math.random() * 0.5 + 0.1]}
            color={color}
          />
        ))}
      </Canvas>
    </div>
  )
}

