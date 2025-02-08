import ThreeDBackground from "../../components/ThreeDBackground"

export default function Investing() {
  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Investing</h1>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Introduction to Investing</h2>
          <p className="mb-4 text-blue-600">
            Investing is the process of allocating your money into different assets with the expectation of generating
            returns over time. It's a crucial aspect of building long-term wealth.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">Common Investment Types:</h3>
          <ul className="list-disc pl-5 mb-4 text-blue-600">
            <li>Stocks</li>
            <li>Bonds</li>
            <li>Mutual Funds</li>
            <li>Exchange-Traded Funds (ETFs)</li>
            <li>Real Estate</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

