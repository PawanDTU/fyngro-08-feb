"use client"

import { useState } from "react"
import { Switch } from "@headlessui/react"
import ThreeDBackground from "../../components/ThreeDBackground"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Settings() {
  const [notifications, setNotifications] = useState(true)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [language, setLanguage] = useState("en")
  const [theme, setTheme] = useState("light")
  const [currency, setCurrency] = useState("USD")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle settings update logic here
    console.log("Settings update:", { notifications, twoFactorAuth, language, theme, currency })
  }

  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <div className="max-w-lg mx-auto bg-white bg-opacity-80 rounded-lg shadow-xl overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-blue-800">Account Settings</h3>
            <div className="mt-5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="flex-grow flex flex-col">
                    <span className="text-sm font-medium text-blue-700">Notifications</span>
                    <span className="text-sm text-blue-500">Receive email notifications about account activity</span>
                  </span>
                  <Switch
                    checked={notifications}
                    onChange={setNotifications}
                    className={classNames(
                      notifications ? "bg-blue-600" : "bg-gray-200",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        notifications ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                      )}
                    />
                  </Switch>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex-grow flex flex-col">
                    <span className="text-sm font-medium text-blue-700">Two-factor authentication</span>
                    <span className="text-sm text-blue-500">Add an extra layer of security to your account</span>
                  </span>
                  <Switch
                    checked={twoFactorAuth}
                    onChange={setTwoFactorAuth}
                    className={classNames(
                      twoFactorAuth ? "bg-blue-600" : "bg-gray-200",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        twoFactorAuth ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                      )}
                    />
                  </Switch>
                </div>
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-blue-700">
                    Language
                  </label>
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-gray-900"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="theme" className="block text-sm font-medium text-blue-700">
                    Theme
                  </label>
                  <select
                    id="theme"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-gray-900"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="currency" className="block text-sm font-medium text-blue-700">
                    Preferred Currency
                  </label>
                  <select
                    id="currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-gray-900"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Settings
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

