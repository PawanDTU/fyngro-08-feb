import ThreeDBackground from "../../components/ThreeDBackground"

export default function Trading() {
  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Trading</h1>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Introduction to Trading</h2>
          <p className="mb-4 text-blue-600">
            Trading involves buying and selling financial instruments such as stocks, bonds, currencies, and commodities
            with the goal of making a profit. It requires understanding market dynamics, analysis techniques, and risk
            management.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">Key Trading Concepts:</h3>
          <ul className="list-disc pl-5 mb-4 text-blue-600">
            <li>Market analysis</li>
            <li>Technical and fundamental analysis</li>
            <li>Risk management</li>
            <li>Trading strategies</li>
            <li>Order types</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

