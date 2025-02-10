// // "use client"

// // import { useState } from "react"
// // import { useRouter } from "next/navigation"
// // import Link from "next/link"

// // export default function Login() {
// //   const [email, setEmail] = useState("")
// //   const [password, setPassword] = useState("")
// //   const [error, setError] = useState("")
// //   const router = useRouter()

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setError("")

// //     try {
// //       const res = await fetch("/api/auth/login", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email, password }),
// //       })

// //       if (res.ok) {
// //         const data = await res.json()
// //         // Store user data in localStorage
// //         localStorage.setItem("user", JSON.stringify(data))
// //         // Set a flag to indicate the user is logged in
// //         localStorage.setItem("isLoggedIn", "true")
// //         router.push("/dashboard")
// //       } else {
// //         const data = await res.json()
// //         setError(data.error || "Invalid email or password")
// //       }
// //     } catch (error) {
// //       setError("An error occurred during login")
// //     }
// //   }

// //   return (
// //     <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
// //       <h1 className="text-3xl font-bold mb-6 text-blue-800">Login</h1>
// //       {error && <p className="text-red-500 mb-4">{error}</p>}
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label htmlFor="email" className="block mb-1 text-blue-600">
// //             Email
// //           </label>
// //           <input
// //             type="email"
// //             id="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="password" className="block mb-1 text-blue-600">
// //             Password
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
// //         >
// //           Login
// //         </button>
// //       </form>
// //       <p className="mt-4 text-center text-blue-600">
// //         Don't have an account?{" "}
// //         <Link href="/signup" className="text-blue-800 hover:underline">
// //           Sign Up
// //         </Link>
// //       </p>
// //     </div>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import Link from "next/link"

// export default function Login() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const router = useRouter()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setError("")

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       })

//       if (res.ok) {
//         const data = await res.json()
//         localStorage.setItem("user", JSON.stringify(data))
//         localStorage.setItem("isLoggedIn", "true")
//         router.push("/dashboard")
//       } else {
//         const data = await res.json()
//         setError(data.error || "Invalid email or password")
//       }
//     } catch (error) {
//       setError("An error occurred during login")
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-50">
//       <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold mb-6 text-blue-800 text-center">Login</h1>
//         {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block mb-1 text-blue-600">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block mb-1 text-blue-600">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-blue-600">
//           Don't have an account?{" "}
//           <Link href="/signup" className="text-blue-800 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (res.ok) {
        const data = await res.json()
        localStorage.setItem("user", JSON.stringify(data))
        localStorage.setItem("isLoggedIn", "true")
        router.push("/dashboard")
      } else {
        const data = await res.json()
        setError(data.error || "Invalid email or password")
      }
    } catch (error) {
      setError("An error occurred during login")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="max-w-md w-full bg-white bg-opacity-20 p-8 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">Login</h1>
        {error && <p className="text-red-300 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-full bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-white placeholder-opacity-70"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-full bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-white placeholder-opacity-70"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-blue-600 py-3 rounded-full hover:bg-blue-100 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-white">
          Don't have an account?{" "}
          <Link href="/signup" className="text-white hover:underline font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

