"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import ThreeDBackground from "../components/ThreeDBackground"

const accountSections = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Profile", href: "/account/profile" },
  { title: "Settings", href: "/account/settings" },
]

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)

    if (loggedIn) {
      const userData = localStorage.getItem("user")
      if (userData) {
        setUser(JSON.parse(userData))
      }
    } else {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
    setUser(null)
    router.push("/")
  }

  if (!isLoggedIn || !user) {
    return <div>Loading...</div>
  }

  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">My Account</h1>
        <p className="text-blue-600 mb-4">Welcome, {user.name}!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accountSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="block p-6 bg-white bg-opacity-80 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-700">{section.title}</h2>
              <p className="text-blue-600">Manage your {section.title.toLowerCase()}</p>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="block p-6 bg-red-100 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-red-600">Logout</h2>
            <p className="text-red-600">Click to log out of your account</p>
          </button>
        </div>
      </div>
    </div>
  )
}

