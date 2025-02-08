import Link from "next/link"
import ThreeDBackground from "../components/ThreeDBackground"

const topics = [
  { title: "Basics of Personal Finance", href: "/learn/basics" },
  { title: "Investing", href: "/learn/investing" },
  { title: "Entrepreneurship", href: "/learn/entrepreneurship" },
  { title: "Taxation", href: "/learn/taxation" },
]

export default function Learn() {
  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Learn</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="block p-6 bg-white bg-opacity-80 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-700">{topic.title}</h2>
              <p className="text-blue-600">Click to start learning about {topic.title.toLowerCase()}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

