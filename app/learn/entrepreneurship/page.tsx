import ThreeDBackground from "../../components/ThreeDBackground"

export default function Entrepreneurship() {
  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Entrepreneurship</h1>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Introduction to Entrepreneurship</h2>
          <p className="mb-4 text-blue-600">
            Entrepreneurship is the process of designing, launching, and running a new business. It often involves
            innovation, risk-taking, and the ability to turn ideas into successful ventures.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">Key Aspects of Entrepreneurship:</h3>
          <ul className="list-disc pl-5 mb-4 text-blue-600">
            <li>Identifying business opportunities</li>
            <li>Developing a business plan</li>
            <li>Securing funding</li>
            <li>Managing resources</li>
            <li>Scaling and growth strategies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

