// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import { useRouter } from "next/navigation"
// // // import dynamic from "next/dynamic"
// // // import { Doughnut, Line } from "react-chartjs-2"
// // // import {
// // //   Chart as ChartJS,
// // //   ArcElement,
// // //   Tooltip,
// // //   Legend,
// // //   CategoryScale,
// // //   LinearScale,
// // //   PointElement,
// // //   LineElement,
// // //   Title,
// // // } from "chart.js"
// // // import ThreeDBackground from "../components/ThreeDBackground"

// // // ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title)

// // // const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

// // // export default function Dashboard() {
// // //   const [activeTab, setActiveTab] = useState("overview")
// // //   const [user, setUser] = useState<{ name: string; email: string } | null>(null)
// // //   const router = useRouter()

// // //   useEffect(() => {
// // //     const userData = localStorage.getItem("user")
// // //     if (userData) {
// // //       setUser(JSON.parse(userData))
// // //     } else {
// // //       router.push("/login")
// // //     }
// // //   }, [router])

// // //   const overviewData = {
// // //     balance: 10000,
// // //     investments: 5000,
// // //     monthlyBudget: 2000,
// // //     savings: 3000,
// // //   }

// // //   const investmentData = {
// // //     labels: ["Stocks", "Bonds", "Real Estate", "Crypto"],
// // //     datasets: [
// // //       {
// // //         data: [3000, 1500, 500, 1000],
// // //         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
// // //         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
// // //       },
// // //     ],
// // //   }

// // //   const budgetData = {
// // //     labels: ["Housing", "Food", "Transportation", "Entertainment", "Savings"],
// // //     datasets: [
// // //       {
// // //         data: [800, 400, 200, 100, 500],
// // //         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
// // //         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
// // //       },
// // //     ],
// // //   }

// // //   const savingsData = {
// // //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// // //     datasets: [
// // //       {
// // //         label: "Savings",
// // //         data: [1000, 1500, 2000, 2200, 2700, 3000],
// // //         fill: false,
// // //         borderColor: "rgb(75, 192, 192)",
// // //         tension: 0.1,
// // //       },
// // //     ],
// // //   }

// // //   if (!user) {
// // //     return <div>Loading...</div>
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-blue-50">
// // //       <ThreeDBackground color="#3B82F6" />
// // //       <div className="relative z-10 container mx-auto px-4 py-8">
// // //         <h1 className="text-3xl font-bold mb-6 text-blue-800">Welcome, {user.name}!</h1>
// // //         <div className="flex mb-6 bg-white rounded-lg p-2">
// // //           <button
// // //             className={`mr-4 px-4 py-2 rounded-full ${activeTab === "overview" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
// // //             onClick={() => setActiveTab("overview")}
// // //           >
// // //             Overview
// // //           </button>
// // //           <button
// // //             className={`mr-4 px-4 py-2 rounded-full ${activeTab === "investments" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
// // //             onClick={() => setActiveTab("investments")}
// // //           >
// // //             Investments
// // //           </button>
// // //           <button
// // //             className={`mr-4 px-4 py-2 rounded-full ${activeTab === "budget" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
// // //             onClick={() => setActiveTab("budget")}
// // //           >
// // //             Budget
// // //           </button>
// // //           <button
// // //             className={`px-4 py-2 rounded-full ${activeTab === "savings" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
// // //             onClick={() => setActiveTab("savings")}
// // //           >
// // //             Savings
// // //           </button>
// // //         </div>
// // //         <MotionDiv
// // //           className="bg-white p-6 rounded-lg shadow-md"
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.5 }}
// // //         >
// // //           {activeTab === "overview" && (
// // //             <div>
// // //               <h2 className="text-2xl font-semibold mb-4">Financial Overview</h2>
// // //               <div className="grid grid-cols-2 gap-4">
// // //                 <div className="bg-blue-100 p-4 rounded-lg">
// // //                   <p className="text-lg font-semibold">Current Balance</p>
// // //                   <p className="text-2xl text-blue-600">${overviewData.balance.toLocaleString()}</p>
// // //                 </div>
// // //                 <div className="bg-green-100 p-4 rounded-lg">
// // //                   <p className="text-lg font-semibold">Total Investments</p>
// // //                   <p className="text-2xl text-green-600">${overviewData.investments.toLocaleString()}</p>
// // //                 </div>
// // //                 <div className="bg-yellow-100 p-4 rounded-lg">
// // //                   <p className="text-lg font-semibold">Monthly Budget</p>
// // //                   <p className="text-2xl text-yellow-600">${overviewData.monthlyBudget.toLocaleString()}</p>
// // //                 </div>
// // //                 <div className="bg-purple-100 p-4 rounded-lg">
// // //                   <p className="text-lg font-semibold">Total Savings</p>
// // //                   <p className="text-2xl text-purple-600">${overviewData.savings.toLocaleString()}</p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}
// // //           {activeTab === "investments" && (
// // //             <div>
// // //               <h2 className="text-2xl font-semibold mb-4">Your Investments</h2>
// // //               <div className="w-full max-w-md mx-auto">
// // //                 <Doughnut data={investmentData} />
// // //               </div>
// // //             </div>
// // //           )}
// // //           {activeTab === "budget" && (
// // //             <div>
// // //               <h2 className="text-2xl font-semibold mb-4">Monthly Budget</h2>
// // //               <div className="w-full max-w-md mx-auto">
// // //                 <Doughnut data={budgetData} />
// // //               </div>
// // //             </div>
// // //           )}
// // //           {activeTab === "savings" && (
// // //             <div>
// // //               <h2 className="text-2xl font-semibold mb-4">Savings Growth</h2>
// // //               <div className="w-full max-w-2xl mx-auto">
// // //                 <Line
// // //                   data={savingsData}
// // //                   options={{
// // //                     responsive: true,
// // //                     plugins: {
// // //                       legend: {
// // //                         position: "top" as const,
// // //                       },
// // //                       title: {
// // //                         display: true,
// // //                         text: "Savings Over Time",
// // //                       },
// // //                     },
// // //                   }}
// // //                 />
// // //               </div>
// // //             </div>
// // //           )}
// // //         </MotionDiv>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // "use client"

// // import { useState, useEffect } from "react"
// // import { useRouter } from "next/navigation"
// // import dynamic from "next/dynamic"
// // import { Doughnut, Line, Bar } from "react-chartjs-2"
// // import {
// //   Chart as ChartJS,
// //   ArcElement,
// //   Tooltip,
// //   Legend,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   BarElement,
// //   Title,
// // } from "chart.js"
// // import { Canvas } from "@react-three/fiber"
// // import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

// // ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title)

// // const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

// // function Background() {
// //   return (
// //     <Canvas className="absolute inset-0 -z-10">
// //       <ambientLight intensity={1} />
// //       <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
// //       <Sphere args={[1, 100, 200]} scale={2.5}>
// //         <MeshDistortMaterial color="#2196f3" attach="material" distort={0.3} speed={1.5} roughness={0.5} />
// //       </Sphere>
// //     </Canvas>
// //   )
// // }

// // export default function Dashboard() {
// //   const [activeTab, setActiveTab] = useState("overview")
// //   const [user, setUser] = useState<{ name: string; email: string } | null>(null)
// //   const router = useRouter()

// //   useEffect(() => {
// //     const userData = localStorage.getItem("user")
// //     if (userData) {
// //       setUser(JSON.parse(userData))
// //     } else {
// //       router.push("/login")
// //     }
// //   }, [router])

// //   const overviewData = {
// //     balance: 10000,
// //     investments: 5000,
// //     monthlyBudget: 2000,
// //     savings: 3000,
// //   }

// //   const investmentData = {
// //     labels: ["Stocks", "Bonds", "Real Estate", "Crypto"],
// //     datasets: [
// //       {
// //         data: [3000, 1500, 500, 1000],
// //         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
// //         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
// //       },
// //     ],
// //   }

// //   const budgetData = {
// //     labels: ["Housing", "Food", "Transportation", "Entertainment", "Savings"],
// //     datasets: [
// //       {
// //         data: [800, 400, 200, 100, 500],
// //         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
// //         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
// //       },
// //     ],
// //   }

// //   const savingsData = {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// //     datasets: [
// //       {
// //         label: "Savings",
// //         data: [1000, 1500, 2000, 2200, 2700, 3000],
// //         fill: false,
// //         borderColor: "rgb(75, 192, 192)",
// //         tension: 0.1,
// //       },
// //     ],
// //   }

// //   const expensesData = {
// //     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
// //     datasets: [
// //       {
// //         label: "Daily Expenses",
// //         data: [65, 59, 80, 81, 56, 55, 40],
// //         backgroundColor: "rgba(75, 192, 192, 0.6)",
// //         borderColor: "rgb(75, 192, 192)",
// //         borderWidth: 1,
// //       },
// //     ],
// //   }

// //   if (!user) {
// //     return <div className="min-h-screen bg-blue-100 flex items-center justify-center">Loading...</div>
// //   }

// //   return (
// //     <div className="relative min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 py-8 overflow-hidden">
// //       <Background />
// //       <div className="container mx-auto px-4 relative z-10">
// //         <h1 className="text-5xl font-bold mb-8 text-white text-center shadow-text">Welcome, {user.name}!</h1>
// //         <div className="flex flex-wrap mb-6 bg-white bg-opacity-20 rounded-lg p-2 shadow-lg backdrop-blur-md">
// //           {["overview", "investments", "budget", "savings", "expenses"].map((tab) => (
// //             <button
// //               key={tab}
// //               className={`mr-2 mb-2 px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
// //                 activeTab === tab
// //                   ? "bg-blue-600 text-white shadow-md"
// //                   : "bg-white bg-opacity-50 text-blue-900 hover:bg-blue-100 hover:bg-opacity-70"
// //               }`}
// //               onClick={() => setActiveTab(tab)}
// //             >
// //               {tab.charAt(0).toUpperCase() + tab.slice(1)}
// //             </button>
// //           ))}
// //         </div>
// //         <MotionDiv
// //           className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-md"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           {activeTab === "overview" && (
// //             <div>
// //               <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Financial Overview</h2>
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //                 <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md backdrop-blur-sm">
// //                   <p className="text-xl font-semibold mb-2 text-white shadow-text">Current Balance</p>
// //                   <p className="text-3xl text-white shadow-text">${overviewData.balance.toLocaleString()}</p>
// //                 </div>
// //                 <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md backdrop-blur-sm">
// //                   <p className="text-xl font-semibold mb-2 text-white shadow-text">Total Investments</p>
// //                   <p className="text-3xl text-white shadow-text">${overviewData.investments.toLocaleString()}</p>
// //                 </div>
// //                 <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md backdrop-blur-sm">
// //                   <p className="text-xl font-semibold mb-2 text-white shadow-text">Monthly Budget</p>
// //                   <p className="text-3xl text-white shadow-text">${overviewData.monthlyBudget.toLocaleString()}</p>
// //                 </div>
// //                 <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md backdrop-blur-sm">
// //                   <p className="text-xl font-semibold mb-2 text-white shadow-text">Total Savings</p>
// //                   <p className="text-3xl text-white shadow-text">${overviewData.savings.toLocaleString()}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //           {activeTab === "investments" && (
// //             <div>
// //               <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Your Investments</h2>
// //               <div className="w-full max-w-2xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
// //                 <Doughnut
// //                   data={investmentData}
// //                   options={{
// //                     responsive: true,
// //                     plugins: {
// //                       legend: {
// //                         position: "bottom",
// //                       },
// //                       title: {
// //                         display: true,
// //                         text: "Investment Distribution",
// //                         font: {
// //                           size: 16,
// //                           weight: "bold",
// //                         },
// //                         color: "#1e3a8a",
// //                       },
// //                     },
// //                   }}
// //                 />
// //               </div>
// //             </div>
// //           )}
// //           {activeTab === "budget" && (
// //             <div>
// //               <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Monthly Budget</h2>
// //               <div className="w-full max-w-2xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
// //                 <Doughnut
// //                   data={budgetData}
// //                   options={{
// //                     responsive: true,
// //                     plugins: {
// //                       legend: {
// //                         position: "bottom",
// //                       },
// //                       title: {
// //                         display: true,
// //                         text: "Budget Allocation",
// //                         font: {
// //                           size: 16,
// //                           weight: "bold",
// //                         },
// //                         color: "#1e3a8a",
// //                       },
// //                     },
// //                   }}
// //                 />
// //               </div>
// //             </div>
// //           )}
// //           {activeTab === "savings" && (
// //             <div>
// //               <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Savings Growth</h2>
// //               <div className="w-full max-w-3xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
// //                 <Line
// //                   data={savingsData}
// //                   options={{
// //                     responsive: true,
// //                     plugins: {
// //                       legend: {
// //                         position: "top" as const,
// //                       },
// //                       title: {
// //                         display: true,
// //                         text: "Savings Over Time",
// //                         font: {
// //                           size: 16,
// //                           weight: "bold",
// //                         },
// //                         color: "#1e3a8a",
// //                       },
// //                     },
// //                     scales: {
// //                       y: {
// //                         beginAtZero: true,
// //                         title: {
// //                           display: true,
// //                           text: "Savings Amount ($)",
// //                           color: "#1e3a8a",
// //                         },
// //                       },
// //                       x: {
// //                         title: {
// //                           display: true,
// //                           text: "Month",
// //                           color: "#1e3a8a",
// //                         },
// //                       },
// //                     },
// //                   }}
// //                 />
// //               </div>
// //             </div>
// //           )}
// //           {activeTab === "expenses" && (
// //             <div>
// //               <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Daily Expenses</h2>
// //               <div className="w-full max-w-3xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
// //                 <Bar
// //                   data={expensesData}
// //                   options={{
// //                     responsive: true,
// //                     plugins: {
// //                       legend: {
// //                         position: "top" as const,
// //                       },
// //                       title: {
// //                         display: true,
// //                         text: "Daily Expenses This Week",
// //                         font: {
// //                           size: 16,
// //                           weight: "bold",
// //                         },
// //                         color: "#1e3a8a",
// //                       },
// //                     },
// //                     scales: {
// //                       y: {
// //                         beginAtZero: true,
// //                         title: {
// //                           display: true,
// //                           text: "Amount ($)",
// //                           color: "#1e3a8a",
// //                         },
// //                       },
// //                       x: {
// //                         title: {
// //                           display: true,
// //                           text: "Day of Week",
// //                           color: "#1e3a8a",
// //                         },
// //                       },
// //                     },
// //                   }}
// //                 />
// //               </div>
// //             </div>
// //           )}
// //         </MotionDiv>
// //       </div>
// //     </div>
// //   )
// // }

// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import dynamic from "next/dynamic"
// import { Doughnut, Line, Bar } from "react-chartjs-2"
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
// } from "chart.js"
// import { Canvas } from "@react-three/fiber"
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title)

// const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

// function Background() {
//   return (
//     <Canvas className="absolute inset-0 -z-10">
//       <ambientLight intensity={1} />
//       <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
//       <Sphere args={[1, 100, 200]} scale={2.5}>
//         <MeshDistortMaterial color="#2196f3" attach="material" distort={0.3} speed={1.5} roughness={0.5} />
//       </Sphere>
//     </Canvas>
//   )
// }

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState("overview")
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null)
//   const router = useRouter()

//   useEffect(() => {
//     const userData = localStorage.getItem("user")
//     if (userData) {
//       setUser(JSON.parse(userData))
//     } else {
//       router.push("/login")
//     }
//   }, [router])

//   const overviewData = {
//     balance: 10000,
//     investments: 5000,
//     monthlyBudget: 2000,
//     savings: 3000,
//   }

//   const investmentData = {
//     labels: ["Stocks", "Bonds", "Real Estate", "Crypto"],
//     datasets: [
//       {
//         data: [3000, 1500, 500, 1000],
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
//         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
//       },
//     ],
//   }

//   const budgetData = {
//     labels: ["Housing", "Food", "Transportation", "Entertainment", "Savings"],
//     datasets: [
//       {
//         data: [800, 400, 200, 100, 500],
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
//         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
//       },
//     ],
//   }

//   const savingsData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Savings",
//         data: [1000, 1500, 2000, 2200, 2700, 3000],
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.1,
//       },
//     ],
//   }

//   const expensesData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "Daily Expenses",
//         data: [65, 59, 80, 81, 56, 55, 40],
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//         borderColor: "rgb(75, 192, 192)",
//         borderWidth: 1,
//       },
//     ],
//   }

//   if (!user) {
//     return <div className="min-h-screen bg-blue-100 flex items-center justify-center">Loading...</div>
//   }

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 pt-2 overflow-hidden">
//       <Background />
//       <div className="container mx-auto px-4 relative z-10">
//         <h1 className="text-4xl font-bold my-4 text-white text-left shadow-text">Welcome, {user.name}!</h1>
//         <div className="flex flex-wrap mb-6 bg-white bg-opacity-20 rounded-lg p-2 shadow-lg backdrop-blur-md">
//           {["overview", "investments", "budget", "savings", "expenses"].map((tab) => (
//             <button
//               key={tab}
//               className={`mr-2 mb-2 px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
//                 activeTab === tab
//                   ? "bg-blue-600 text-white shadow-md"
//                   : "bg-white bg-opacity-50 text-blue-900 hover:bg-blue-100 hover:bg-opacity-70"
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>
//         <MotionDiv
//           className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {activeTab === "overview" && (
//             <div>
//               <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Financial Overview</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md backdrop-blur-sm">
//                   <p className="text-xl font-semibold mb-2 text-white shadow-text">Current Balance</p>
//                   <p className="text-3xl text-white shadow-text">${overviewData.balance.toLocaleString()}</p>
//                 </div>
//                 <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md backdrop-blur-sm">
//                   <p className="text-xl font-semibold mb-2 text-white shadow-text">Total Investments</p>
//                   <p className="text-3xl text-white shadow-text">${overviewData.investments.toLocaleString()}</p>
//                 </div>
//                 <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md backdrop-blur-sm">
//                   <p className="text-xl font-semibold mb-2 text-white shadow-text">Monthly Budget</p>
//                   <p className="text-3xl text-white shadow-text">${overviewData.monthlyBudget.toLocaleString()}</p>
//                 </div>
//                 <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md backdrop-blur-sm">
//                   <p className="text-xl font-semibold mb-2 text-white shadow-text">Total Savings</p>
//                   <p className="text-3xl text-white shadow-text">${overviewData.savings.toLocaleString()}</p>
//                 </div>
//               </div>
//             </div>
//           )}
//           {activeTab === "investments" && (
//             <div>
//               <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Your Investments</h2>
//               <div className="w-full max-w-2xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
//                 <Doughnut
//                   data={investmentData}
//                   options={{
//                     responsive: true,
//                     plugins: {
//                       legend: {
//                         position: "bottom",
//                       },
//                       title: {
//                         display: true,
//                         text: "Investment Distribution",
//                         font: {
//                           size: 16,
//                           weight: "bold",
//                         },
//                         color: "#1e3a8a",
//                       },
//                     },
//                   }}
//                 />
//               </div>
//             </div>
//           )}
//           {activeTab === "budget" && (
//             <div>
//               <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Monthly Budget</h2>
//               <div className="w-full max-w-2xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
//                 <Doughnut
//                   data={budgetData}
//                   options={{
//                     responsive: true,
//                     plugins: {
//                       legend: {
//                         position: "bottom",
//                       },
//                       title: {
//                         display: true,
//                         text: "Budget Allocation",
//                         font: {
//                           size: 16,
//                           weight: "bold",
//                         },
//                         color: "#1e3a8a",
//                       },
//                     },
//                   }}
//                 />
//               </div>
//             </div>
//           )}
//           {activeTab === "savings" && (
//             <div>
//               <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Savings Growth</h2>
//               <div className="w-full max-w-3xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
//                 <Line
//                   data={savingsData}
//                   options={{
//                     responsive: true,
//                     plugins: {
//                       legend: {
//                         position: "top" as const,
//                       },
//                       title: {
//                         display: true,
//                         text: "Savings Over Time",
//                         font: {
//                           size: 16,
//                           weight: "bold",
//                         },
//                         color: "#1e3a8a",
//                       },
//                     },
//                     scales: {
//                       y: {
//                         beginAtZero: true,
//                         title: {
//                           display: true,
//                           text: "Savings Amount ($)",
//                           color: "#1e3a8a",
//                         },
//                       },
//                       x: {
//                         title: {
//                           display: true,
//                           text: "Month",
//                           color: "#1e3a8a",
//                         },
//                       },
//                     },
//                   }}
//                 />
//               </div>
//             </div>
//           )}
//           {activeTab === "expenses" && (
//             <div>
//               <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Daily Expenses</h2>
//               <div className="w-full max-w-3xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
//                 <Bar
//                   data={expensesData}
//                   options={{
//                     responsive: true,
//                     plugins: {
//                       legend: {
//                         position: "top" as const,
//                       },
//                       title: {
//                         display: true,
//                         text: "Daily Expenses This Week",
//                         font: {
//                           size: 16,
//                           weight: "bold",
//                         },
//                         color: "#1e3a8a",
//                       },
//                     },
//                     scales: {
//                       y: {
//                         beginAtZero: true,
//                         title: {
//                           display: true,
//                           text: "Amount ($)",
//                           color: "#1e3a8a",
//                         },
//                       },
//                       x: {
//                         title: {
//                           display: true,
//                           text: "Day of Week",
//                           color: "#1e3a8a",
//                         },
//                       },
//                     },
//                   }}
//                 />
//               </div>
//             </div>
//           )}
//         </MotionDiv>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import { Doughnut, Line, Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
} from "chart.js"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title)

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

function Background() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial color="#2196f3" attach="material" distort={0.3} speed={1.5} roughness={0.5} />
      </Sphere>
    </Canvas>
  )
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/login")
    }
  }, [router])

  const overviewData = {
    balance: 10000,
    investments: 5000,
    monthlyBudget: 2000,
    savings: 3000,
  }

  const investmentData = {
    labels: ["Stocks", "Bonds", "Real Estate", "Crypto"],
    datasets: [
      {
        data: [3000, 1500, 500, 1000],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  }

  const budgetData = {
    labels: ["Housing", "Food", "Transportation", "Entertainment", "Savings"],
    datasets: [
      {
        data: [800, 400, 200, 100, 500],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      },
    ],
  }

  const savingsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Savings",
        data: [1000, 1500, 2000, 2200, 2700, 3000],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  const expensesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily Expenses",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  }

  if (!user) {
    return <div className="min-h-screen bg-blue-100 flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
      <Background />
      <div className="container mx-auto px-4 pt-4 relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-white text-left shadow-text">Welcome, {user.name}!</h1>
        <div className="flex flex-wrap mb-6 bg-white bg-opacity-20 rounded-lg p-2 shadow-lg backdrop-blur-md">
          {["overview", "investments", "budget", "savings", "expenses"].map((tab) => (
            <button
              key={tab}
              className={`mr-2 mb-2 px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white bg-opacity-50 text-blue-900 hover:bg-blue-100 hover:bg-opacity-70"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <MotionDiv
          className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "overview" && (
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Financial Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md backdrop-blur-sm">
                  <p className="text-xl font-semibold mb-2 text-white shadow-text">Current Balance</p>
                  <p className="text-3xl text-white shadow-text">${overviewData.balance.toLocaleString()}</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md backdrop-blur-sm">
                  <p className="text-xl font-semibold mb-2 text-white shadow-text">Total Investments</p>
                  <p className="text-3xl text-white shadow-text">${overviewData.investments.toLocaleString()}</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md backdrop-blur-sm">
                  <p className="text-xl font-semibold mb-2 text-white shadow-text">Monthly Budget</p>
                  <p className="text-3xl text-white shadow-text">${overviewData.monthlyBudget.toLocaleString()}</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md backdrop-blur-sm">
                  <p className="text-xl font-semibold mb-2 text-white shadow-text">Total Savings</p>
                  <p className="text-3xl text-white shadow-text">${overviewData.savings.toLocaleString()}</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "investments" && (
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Your Investments</h2>
              <div className="w-full max-w-2xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
                <Doughnut
                  data={investmentData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "bottom",
                      },
                      title: {
                        display: true,
                        text: "Investment Distribution",
                        font: {
                          size: 16,
                          weight: "bold",
                        },
                        color: "#1e3a8a",
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
          {activeTab === "budget" && (
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Monthly Budget</h2>
              <div className="w-full max-w-2xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
                <Doughnut
                  data={budgetData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "bottom",
                      },
                      title: {
                        display: true,
                        text: "Budget Allocation",
                        font: {
                          size: 16,
                          weight: "bold",
                        },
                        color: "#1e3a8a",
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
          {activeTab === "savings" && (
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Savings Growth</h2>
              <div className="w-full max-w-3xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
                <Line
                  data={savingsData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "top" as const,
                      },
                      title: {
                        display: true,
                        text: "Savings Over Time",
                        font: {
                          size: 16,
                          weight: "bold",
                        },
                        color: "#1e3a8a",
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        title: {
                          display: true,
                          text: "Savings Amount ($)",
                          color: "#1e3a8a",
                        },
                      },
                      x: {
                        title: {
                          display: true,
                          text: "Month",
                          color: "#1e3a8a",
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
          {activeTab === "expenses" && (
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-white shadow-text">Daily Expenses</h2>
              <div className="w-full max-w-3xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
                <Bar
                  data={expensesData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "top" as const,
                      },
                      title: {
                        display: true,
                        text: "Daily Expenses This Week",
                        font: {
                          size: 16,
                          weight: "bold",
                        },
                        color: "#1e3a8a",
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        title: {
                          display: true,
                          text: "Amount ($)",
                          color: "#1e3a8a",
                        },
                      },
                      x: {
                        title: {
                          display: true,
                          text: "Day of Week",
                          color: "#1e3a8a",
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
        </MotionDiv>
      </div>
    </div>
  )
}

