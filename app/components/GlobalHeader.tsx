"use client"

import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"

const navItems = [
  {
    name: "Learn",
    href: "/learn",
    subItems: [
      { name: "Basics of Personal Finance", href: "/learn/basics" },
      { name: "Investing", href: "/learn/investing" },
      { name: "Entrepreneurship", href: "/learn/entrepreneurship" },
      { name: "Taxation", href: "/learn/taxation" },
    ],
  },
  {
    name: "Explore",
    href: "/explore",
    subItems: [
      { name: "Calculator", href: "/explore/calculator" },
      { name: "News", href: "/explore/news" },
      { name: "Budget", href: "/explore/budget" },
      { name: "Trading", href: "/explore/trading" },
    ],
  },
]

export default function GlobalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)
  }, [])

  const handleLogout = useCallback(() => {
    localStorage.removeItem("user")
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
    router.push("/")
  }, [router])

  // Don't render the header on the home page
  if (pathname === "/") {
    return null
  }

  const accountItems = isLoggedIn
    ? [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Profile", href: "/account/profile" },
        { name: "Settings", href: "/account/settings" },
        { name: "Logout", href: "#", onClick: handleLogout },
      ]
    : [
        { name: "Login", href: "/login" },
        { name: "Sign Up", href: "/signup" },
      ]

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="text-2xl font-bold">
          Fyngro
        </Link>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link href={item.href} className="hover:text-blue-200 transition duration-300">
                {item.name}
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 whitespace-nowrap"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="relative group">
            <Link
              href={isLoggedIn ? "/account" : "/login"}
              className="hover:text-blue-200 transition duration-300 cursor-pointer"
            >
              {isLoggedIn ? "My Account" : "Account"}
            </Link>
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
              {accountItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={item.onClick}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <button className="md:hidden text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-700 shadow-lg z-50">
          {navItems.map((item) => (
            <div key={item.name} className="px-4 py-2">
              <Link href={item.href} className="block py-2 text-blue-600 hover:text-blue-800 transition duration-300">
                {item.name}
              </Link>
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          ))}
          {accountItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={item.onClick}
              className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

