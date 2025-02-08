"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })

      if (res.ok) {
        router.push("/login")
      } else {
        const data = await res.json()
        setError(data.error || "An error occurred during signup")
      }
    } catch (error) {
      setError("An error occurred during signup")
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Sign Up</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-blue-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-blue-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 text-blue-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center text-blue-600">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-800 hover:underline">
          Login
        </Link>
      </p>
    </div>
  )
}

