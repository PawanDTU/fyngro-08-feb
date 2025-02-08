"use client"

import { useState } from "react"
import ThreeDBackground from "../../components/ThreeDBackground"

interface BudgetItem {
  category: string
  amount: number
}

export default function Budget() {
  const [items, setItems] = useState<BudgetItem[]>([])
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")

  const addItem = () => {
    if (category && amount) {
      setItems([...items, { category, amount: Number.parseFloat(amount) }])
      setCategory("")
      setAmount("")
    }
  }

  const total = items.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Budget Planner</h1>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
          <div className="mb-4 space-y-2">
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button onClick={addItem} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Add Item
            </button>
          </div>
          <div className="pb-4">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Budget Items</h2>
            {items.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.category}</span>
                <span>${item.amount.toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

