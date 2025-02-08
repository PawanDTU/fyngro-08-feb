"use client"

import { useState } from "react"

const modules = [
  { id: 1, title: "Budgeting Basics", lessons: 5, completed: 3 },
  { id: 2, title: "Saving Strategies", lessons: 4, completed: 2 },
  { id: 3, title: "Understanding Credit", lessons: 6, completed: 0 },
  { id: 4, title: "Investing 101", lessons: 5, completed: 0 },
  { id: 5, title: "Taxes and You", lessons: 3, completed: 0 },
]

export default function BasicsOfPersonalFinance() {
  const [currentModule, setCurrentModule] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-blue-50 p-8 pt-24">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Basics of Personal Finance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <div key={module.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">{module.title}</h2>
            <p className="text-gray-600 mb-4">
              {module.completed} / {module.lessons} lessons completed
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${(module.completed / module.lessons) * 100}%` }}
              ></div>
            </div>
            <button
              onClick={() => setCurrentModule(module.id)}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              {module.completed === 0 ? "Start" : "Continue"}
            </button>
          </div>
        ))}
      </div>
      {currentModule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Quiz</h2>
            <p className="mb-4">This is where the quiz for module {currentModule} would go.</p>
            <button
              onClick={() => setCurrentModule(null)}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

