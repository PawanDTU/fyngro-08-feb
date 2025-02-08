"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const navItems = [
  { title: "Learn", items: ["Basics of Personal Finance", "Investing", "Entrepreneurship", "Taxation"] },
  { title: "Explore", items: ["Calculator", "News", "Budget", "Trading"] },
  { title: "My Account", items: ["Dashboard", "Profile", "Settings", "Logout"] },
]

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true")
  }, [])

  const showNavItems = isLoggedIn && pathname !== "/"

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-600 shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image src="/finance-logo.png" alt="Finance Logo" width={40} height={40} className="mr-2" />
            <span className="text-2xl font-bold text-white">Fyngro</span>
          </Link>
          {showNavItems && (
            <nav className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <div key={item.title} className="relative group">
                  <Link
                    href={`/${item.title.toLowerCase().replace(" ", "-")}`}
                    className="text-white hover:text-blue-200 transition duration-300"
                  >
                    {item.title}
                  </Link>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        href={`/${item.title.toLowerCase().replace(" ", "-")}/${subItem.toLowerCase().replace(" ", "-")}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar

