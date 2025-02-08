"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const ScrollDownButton = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToBottom}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-all duration-300 animate-bounce"
      aria-label="Scroll down"
    >
      <ChevronDown size={24} />
    </button>
  )
}

export default ScrollDownButton

