"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import ThreeDBackground from "../../components/ThreeDBackground"

export default function Logout() {
  const router = useRouter()

  useEffect(() => {
    // Simulate logout process
    localStorage.removeItem("isLoggedIn")
    // Redirect to landing page after logout
    router.push("/")
  }, [router])

  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Logging out...</h1>
        <p className="text-blue-600">You are being logged out and redirected to the landing page.</p>
      </div>
    </div>
  )
}

