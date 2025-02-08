import ThreeDBackground from "../../components/ThreeDBackground"

export default function BasicsOfPersonalFinance() {
  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Basics of Personal Finance</h1>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Introduction to Personal Finance</h2>
          <p className="mb-4 text-blue-600">
            Personal finance is the management of your money and financial decisions. It includes budgeting, saving,
            investing, and planning for your financial future.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">Key Concepts:</h3>
          <ul className="list-disc pl-5 mb-4 text-blue-600">
            <li>Budgeting</li>
            <li>Saving and Emergency Funds</li>
            <li>Debt Management</li>
            <li>Investing Basics</li>
            <li>Insurance and Risk Management</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

