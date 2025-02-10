// // "use client"

// // import { useState } from "react"
// // import ThreeDBackground from "../../components/ThreeDBackground"

// // interface BudgetItem {
// //   category: string
// //   amount: number
// // }

// // export default function Budget() {
// //   const [items, setItems] = useState<BudgetItem[]>([])
// //   const [category, setCategory] = useState("")
// //   const [amount, setAmount] = useState("")

// //   const addItem = () => {
// //     if (category && amount) {
// //       setItems([...items, { category, amount: Number.parseFloat(amount) }])
// //       setCategory("")
// //       setAmount("")
// //     }
// //   }

// //   const total = items.reduce((sum, item) => sum + item.amount, 0)

// //   return (
// //     <div className="relative min-h-screen bg-blue-50 p-8">
// //       <ThreeDBackground color="#3B82F6" />
// //       <div className="relative z-10">
// //         <h1 className="text-3xl font-bold mb-6 text-blue-800">Budget Planner</h1>
// //         <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
// //           <div className="mb-4 space-y-2">
// //             <input
// //               type="text"
// //               placeholder="Category"
// //               value={category}
// //               onChange={(e) => setCategory(e.target.value)}
// //               className="w-full p-2 border rounded"
// //             />
// //             <input
// //               type="number"
// //               placeholder="Amount"
// //               value={amount}
// //               onChange={(e) => setAmount(e.target.value)}
// //               className="w-full p-2 border rounded"
// //             />
// //             <button onClick={addItem} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
// //               Add Item
// //             </button>
// //           </div>
// //           <div className="pb-4">
// //             <h2 className="text-xl font-semibold mb-2 text-blue-700">Budget Items</h2>
// //             {items.map((item, index) => (
// //               <div key={index} className="flex justify-between mb-2">
// //                 <span>{item.category}</span>
// //                 <span>${item.amount.toFixed(2)}</span>
// //               </div>
// //             ))}
// //             <div className="border-t pt-2 mt-2">
// //               <strong>Total: ${total.toFixed(2)}</strong>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// "use client"

// import { useState, useEffect } from "react"
// import ThreeDBackground from "../../components/ThreeDBackground"

// interface BudgetItem {
//   category: string
//   amount: number
// }

// export default function Budget() {
//   const [items, setItems] = useState<BudgetItem[]>([])
//   const [category, setCategory] = useState("")
//   const [amount, setAmount] = useState("")
//   const [currentBudget, setCurrentBudget] = useState("")

//   useEffect(() => {
//     // Simulating fetching current budget information
//     const fetchCurrentBudget = async () => {
//       // In a real application, this would be an API call
//       const budgetInfo = `
//         Your current monthly budget stands at $3,500. This budget is allocated across various categories to ensure effective financial management. The largest portion, approximately 30% ($1,050), is dedicated to housing expenses, including rent or mortgage payments and utilities. Transportation costs, including car payments, insurance, and fuel, account for about 15% ($525) of your budget.

//         Food and groceries make up 20% ($700) of your monthly expenses, covering both groceries and occasional dining out. Personal expenses, including entertainment, clothing, and miscellaneous purchases, are allocated 10% ($350) of the budget. Healthcare costs, including insurance premiums and out-of-pocket expenses, are budgeted at 8% ($280).

//         Savings and investments are prioritized at 12% ($420) of your monthly income, helping to build long-term financial security. The remaining 5% ($175) is set aside for unexpected expenses or minor emergencies. This balanced approach to budgeting allows for covering essential needs while also planning for the future and allowing for some flexibility in spending.
//       `
//       setCurrentBudget(budgetInfo)
//     }

//     fetchCurrentBudget()
//   }, [])

//   const addItem = () => {
//     if (category && amount) {
//       setItems([...items, { category, amount: Number.parseFloat(amount) }])
//       setCategory("")
//       setAmount("")
//     }
//   }

//   const total = items.reduce((sum, item) => sum + item.amount, 0)

//   return (
//     <div className="relative min-h-screen bg-blue-50 p-8">
//       <ThreeDBackground color="#3B82F6" />
//       <div className="relative z-10">
//         <h1 className="text-3xl font-bold mb-6 text-blue-800">Budget Planner</h1>
//         <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md mb-8">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-700">Current Budget Overview</h2>
//           <div className="text-blue-600 whitespace-pre-line">{currentBudget}</div>
//         </div>
//         <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-700">Budget Planner Calculator</h2>
//           <div className="mb-4 space-y-2">
//             <input
//               type="text"
//               placeholder="Category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full p-2 border rounded text-blue-800 placeholder-blue-400"
//             />
//             <input
//               type="number"
//               placeholder="Amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full p-2 border rounded text-blue-800 placeholder-blue-400"
//             />
//             <button onClick={addItem} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
//               Add Item
//             </button>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold mb-2 text-blue-700">Budget Items</h3>
//             {items.map((item, index) => (
//               <div key={index} className="flex justify-between mb-2 text-blue-600">
//                 <span>{item.category}</span>
//                 <span>${item.amount.toFixed(2)}</span>
//               </div>
//             ))}
//             <div className="border-t pt-2 mt-2 text-blue-800 font-bold">Total: ${total.toFixed(2)}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import ThreeDBackground from "../../components/ThreeDBackground"

interface BudgetItem {
  category: string
  subcategory: string
  amount: number
  frequency: string
}

interface CategoryTotal {
  [key: string]: number
}

const frequencyOptions = ["Per month", "Per year", "Per week"]

const budgetCategories = [
  {
    name: "Income",
    items: [
      "Pay (after tax)",
      "Income from self-employment",
      "Statutory Sick Pay",
      "Statutory Maternity Pay or Statutory Adoption Pay",
      "Benefits & Tax Credit",
      "Pension",
      "Other income",
    ],
  },
  {
    name: "Household bills",
    items: ["Rent/Mortgage", "Council Tax", "Gas", "Electricity", "Water", "TV license", "Internet", "Phone"],
  },
  {
    name: "Living costs",
    items: ["Groceries", "Clothing", "Personal care", "Healthcare"],
  },
  {
    name: "Finance & insurance",
    items: ["Car insurance", "Home insurance", "Life insurance", "Loan repayments", "Credit card payments"],
  },
  {
    name: "Family & friends",
    items: ["Children's expenses", "Gifts", "Charitable donations"],
  },
  {
    name: "Travel",
    items: ["Public transport", "Fuel", "Car maintenance", "Parking"],
  },
  {
    name: "Leisure",
    items: ["Eating out", "Entertainment", "Hobbies", "Gym/sports", "Holidays"],
  },
]

export default function Budget() {
  const [items, setItems] = useState<BudgetItem[]>([])
  const [category, setCategory] = useState(budgetCategories[0].name)
  const [subcategory, setSubcategory] = useState(budgetCategories[0].items[0])
  const [amount, setAmount] = useState("")
  const [frequency, setFrequency] = useState(frequencyOptions[0])
  const [currentBudget, setCurrentBudget] = useState("")

  useEffect(() => {
    // Simulating fetching current budget information
    const fetchCurrentBudget = async () => {
      // In a real application, this would be an API call
      const budgetInfo = `
        Your current monthly budget stands at $3,500. This budget is allocated across various categories to ensure effective financial management. The largest portion, approximately 30% ($1,050), is dedicated to housing expenses, including rent or mortgage payments and utilities. Transportation costs, including car payments, insurance, and fuel, account for about 15% ($525) of your budget.

        Food and groceries make up 20% ($700) of your monthly expenses, covering both groceries and occasional dining out. Personal expenses, including entertainment, clothing, and miscellaneous purchases, are allocated 10% ($350) of the budget. Healthcare costs, including insurance premiums and out-of-pocket expenses, are budgeted at 8% ($280).

        Savings and investments are prioritized at 12% ($420) of your monthly income, helping to build long-term financial security. The remaining 5% ($175) is set aside for unexpected expenses or minor emergencies. This balanced approach to budgeting allows for covering essential needs while also planning for the future and allowing for some flexibility in spending.
      `
      setCurrentBudget(budgetInfo)
    }

    fetchCurrentBudget()
  }, [])

  const addItem = () => {
    if (category && subcategory && amount && frequency) {
      setItems([...items, { category, subcategory, amount: Number(amount), frequency }])
      setAmount("")
    }
  }

  const calculateMonthlyAmount = (item: BudgetItem) => {
    switch (item.frequency) {
      case "Per year":
        return item.amount / 12
      case "Per week":
        return (item.amount * 52) / 12
      default:
        return item.amount
    }
  }

  const calculateTotals = () => {
    const totals: CategoryTotal = {}
    let totalIncome = 0
    let totalSpending = 0

    items.forEach((item) => {
      const monthlyAmount = calculateMonthlyAmount(item)
      if (item.category === "Income") {
        totalIncome += monthlyAmount
      } else {
        totalSpending += monthlyAmount
      }
      totals[item.category] = (totals[item.category] || 0) + monthlyAmount
    })

    return { categoryTotals: totals, totalIncome, totalSpending }
  }

  const { categoryTotals, totalIncome, totalSpending } = calculateTotals()
  const balance = totalIncome - totalSpending

  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Budget Planner</h1>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Current Budget Overview</h2>
          <div className="text-blue-600 whitespace-pre-line">{currentBudget}</div>
        </div>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Comprehensive Budget Planner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                setSubcategory(budgetCategories.find((cat) => cat.name === e.target.value)?.items[0] || "")
              }}
              className="w-full p-2 border rounded text-blue-800"
            >
              {budgetCategories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
            <select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="w-full p-2 border rounded text-blue-800"
            >
              {budgetCategories
                .find((cat) => cat.name === category)
                ?.items.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </select>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded text-blue-800 placeholder-blue-400"
            />
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full p-2 border rounded text-blue-800"
            >
              {frequencyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button onClick={addItem} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mb-4">
            Add Item
          </button>
          <div className="space-y-4">
            {budgetCategories.map((cat) => (
              <div key={cat.name}>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{cat.name}</h3>
                {items
                  .filter((item) => item.category === cat.name)
                  .map((item, index) => (
                    <div key={index} className="flex justify-between mb-2 text-blue-600">
                      <span>{item.subcategory}</span>
                      <span>
                        £{item.amount} {item.frequency}
                      </span>
                    </div>
                  ))}
                {categoryTotals[cat.name] > 0 && (
                  <div className="font-bold text-blue-800">Total: £{categoryTotals[cat.name].toFixed(2)} per month</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Summary</h2>
          <div className="space-y-2 text-blue-800">
            <div className="flex justify-between">
              <span>Total Income:</span>
              <span>£{totalIncome.toFixed(2)} per month</span>
            </div>
            <div className="flex justify-between">
              <span>Total Spending:</span>
              <span>£{totalSpending.toFixed(2)} per month</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Balance:</span>
              <span className={balance >= 0 ? "text-green-600" : "text-red-600"}>£{balance.toFixed(2)} per month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


