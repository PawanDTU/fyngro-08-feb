import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import GlobalHeader from "./components/GlobalHeader"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fyngro",
  description: "Learn, Explore, and Manage Your Finances",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Conditionally render the GlobalHeader based on the current route */}
        {/* This is a client-side check, so we'll need to make GlobalHeader a client component */}
        <GlobalHeader />
        {children}
      </body>
    </html>
  )
}

