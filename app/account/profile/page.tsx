"use client"

import { useState } from "react"
import ThreeDBackground from "../../components/ThreeDBackground"

export default function Profile() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [retypePassword, setRetypePassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle profile update logic here
    console.log("Profile update:", { name, email, newPassword, confirmPassword, retypePassword })
  }

  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <div className="max-w-md mx-auto bg-white bg-opacity-80 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold mb-1">Your Account</div>
            <h2 className="text-2xl leading-tight font-bold text-blue-800 mb-5">Profile Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full border border-blue-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border border-blue-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-blue-700">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full border border-blue-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-blue-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full border border-blue-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="retypePassword" className="block text-sm font-medium text-blue-700">
                  Retype Password
                </label>
                <input
                  type="password"
                  id="retypePassword"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                  className="mt-1 block w-full border border-blue-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

