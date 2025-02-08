import ThreeDBackground from "../../components/ThreeDBackground"

export default function Taxation() {
  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Taxation</h1>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Understanding Taxation</h2>
          <p className="mb-4 text-blue-600">
            Taxation is the process by which governments collect funds from individuals and businesses to finance public
            services and infrastructure. Understanding taxation is crucial for managing your personal finances and
            business operations.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">Key Tax Concepts:</h3>
          <ul className="list-disc pl-5 mb-4 text-blue-600">
            <li>Income tax</li>
            <li>Capital gains tax</li>
            <li>Sales tax</li>
            <li>Property tax</li>
            <li>Tax deductions and credits</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

