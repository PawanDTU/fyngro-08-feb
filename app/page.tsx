"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text, Float } from "@react-three/drei"
import Link from "next/link"
import { useRouter } from "next/navigation"

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Text
          font="/fonts/Geist-Bold.ttf"
          fontSize={3}
          color="#ffffff"
          position-z={-5}
          maxWidth={20}
          textAlign="center"
        >
          Welcome to Fyngro
        </Text>
      </Float>
      <mesh position={[0, -3, -10]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#4299e1" />
      </mesh>
      <mesh position={[-4, 2, -8]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#3182ce" />
      </mesh>
      <mesh position={[4, 2, -8]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color="#2b6cb0" />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

export default function Home() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/login")
  }

  return (
    <div className="relative h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <Canvas className="absolute inset-0">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4 text-center">Fyngro</h1>
        <p className="text-xl mb-8 text-center">Your Journey to Financial Literacy Starts Here</p>
        <div className="w-full max-w-md px-4 flex justify-center">
          <button
            onClick={handleGetStarted}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 text-lg"
          >
            Get Started
          </button>
        </div>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline hover:text-blue-200">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}

