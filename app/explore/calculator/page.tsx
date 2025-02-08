"use client"

import { useState } from "react"
import ThreeDBackground from "../../components/ThreeDBackground"

const calculators = [
  { id: "emi", name: "EMI Calculator" },
  { id: "netWorth", name: "Net Worth Calculator" },
  { id: "spending", name: "Spending Calculator" },
  { id: "sip", name: "SIP Calculator" },
  { id: "fd", name: "FD Calculator" },
]

export default function FinancialCalculators() {
  const [activeCalculator, setActiveCalculator] = useState("emi")

  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Financial Calculators</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          {calculators.map((calc) => (
            <button
              key={calc.id}
              onClick={() => setActiveCalculator(calc.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCalculator === calc.id ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-100"
              }`}
            >
              {calc.name}
            </button>
          ))}
        </div>
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
          {activeCalculator === "emi" && <EMICalculator />}
          {activeCalculator === "netWorth" && <NetWorthCalculator />}
          {activeCalculator === "spending" && <SpendingCalculator />}
          {activeCalculator === "sip" && <SIPCalculator />}
          {activeCalculator === "fd" && <FDCalculator />}
        </div>
      </div>
    </div>
  )
}

function EMICalculator() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [time, setTime] = useState("")
  const [emi, setEMI] = useState<number | null>(null)

  const calculateEMI = () => {
    const p = Number.parseFloat(principal)
    const r = Number.parseFloat(rate) / 12 / 100
    const n = Number.parseFloat(time) * 12
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    setEMI(emi)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">EMI Calculator</h2>
      <input
        type="number"
        placeholder="Principal Amount"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <input
        type="number"
        placeholder="Interest Rate (% per annum)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <input
        type="number"
        placeholder="Loan Tenure (in years)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <button
        onClick={calculateEMI}
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Calculate EMI
      </button>
      {emi !== null && <p className="text-xl font-bold text-blue-800">Monthly EMI: ₹{emi.toFixed(2)}</p>}
    </div>
  )
}

function NetWorthCalculator() {
  const [assets, setAssets] = useState("")
  const [liabilities, setLiabilities] = useState("")
  const [netWorth, setNetWorth] = useState<number | null>(null)

  const calculateNetWorth = () => {
    const totalAssets = Number.parseFloat(assets)
    const totalLiabilities = Number.parseFloat(liabilities)
    const worth = totalAssets - totalLiabilities
    setNetWorth(worth)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Net Worth Calculator</h2>
      <input
        type="number"
        placeholder="Total Assets"
        value={assets}
        onChange={(e) => setAssets(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <input
        type="number"
        placeholder="Total Liabilities"
        value={liabilities}
        onChange={(e) => setLiabilities(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <button
        onClick={calculateNetWorth}
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Calculate Net Worth
      </button>
      {netWorth !== null && <p className="text-xl font-bold text-blue-800">Net Worth: ₹{netWorth.toFixed(2)}</p>}
    </div>
  )
}

function SpendingCalculator() {
  const [income, setIncome] = useState("")
  const [expenses, setExpenses] = useState("")
  const [savings, setSavings] = useState<number | null>(null)

  const calculateSavings = () => {
    const totalIncome = Number.parseFloat(income)
    const totalExpenses = Number.parseFloat(expenses)
    const savingsAmount = totalIncome - totalExpenses
    setSavings(savingsAmount)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Spending Calculator</h2>
      <input
        type="number"
        placeholder="Monthly Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <input
        type="number"
        placeholder="Monthly Expenses"
        value={expenses}
        onChange={(e) => setExpenses(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <button
        onClick={calculateSavings}
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Calculate Savings
      </button>
      {savings !== null && <p className="text-xl font-bold text-blue-800">Monthly Savings: ₹{savings.toFixed(2)}</p>}
    </div>
  )
}

function SIPCalculator() {
  const [investment, setInvestment] = useState("")
  const [returnRate, setReturnRate] = useState("")
  const [time, setTime] = useState("")
  const [totalValue, setTotalValue] = useState<number | null>(null)

  const calculateSIP = () => {
    const p = Number.parseFloat(investment)
    const r = Number.parseFloat(returnRate) / 100 / 12
    const n = Number.parseFloat(time) * 12
    const amount = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
    setTotalValue(amount)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">SIP Calculator</h2>
      <input
        type="number"
        placeholder="Monthly Investment"
        value={investment}
        onChange={(e) => setInvestment(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <input
        type="number"
        placeholder="Expected Return Rate (% per annum)"
        value={returnRate}
        onChange={(e) => setReturnRate(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <input
        type="number"
        placeholder="Time Period (in years)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <button
        onClick={calculateSIP}
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Calculate SIP
      </button>
      {totalValue !== null && <p className="text-xl font-bold text-blue-800">Total Value: ₹{totalValue.toFixed(2)}</p>}
    </div>
  )
}

function FDCalculator() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [time, setTime] = useState("")
  const [maturityAmount, setMaturityAmount] = useState<number | null>(null)

  const calculateFD = () => {
    const p = Number.parseFloat(principal)
    const r = Number.parseFloat(rate) / 100
    const t = Number.parseFloat(time)
    const amount = p * Math.pow(1 + r, t)
    setMaturityAmount(amount)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">FD Calculator</h2>
      <input
        type="number"
        placeholder="Principal Amount"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <input
        type="number"
        placeholder="Interest Rate (% per annum)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <input
        type="number"
        placeholder="Time Period (in years)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-800 placeholder:text-blue-400"
      />
      <button
        onClick={calculateFD}
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Calculate FD
      </button>
      {maturityAmount !== null && (
        <p className="text-xl font-bold text-blue-800">Maturity Amount: ₹{maturityAmount.toFixed(2)}</p>
      )}
    </div>
  )
}

// Add these styles to your global CSS file (e.g., globals.css)
/*
@layer utilities {
  .scrollbar-thin {
    scrollbar-width: thin;
  }
  .scrollbar-thumb-blue-500::-webkit-scrollbar-thumb {
    background-color: #3B82F6;
  }
  .scrollbar-track-blue-100::-webkit-scrollbar-track {
    background-color: #DBEAFE;
  }
}
*/

