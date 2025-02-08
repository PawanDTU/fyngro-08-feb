import Link from "next/link"
import ThreeDBackground from "../components/ThreeDBackground"

const tools = [
  { title: "Calculator", href: "/explore/calculator" },
  { title: "News", href: "/explore/news" },
  { title: "Budget", href: "/explore/budget" },
  { title: "Trading", href: "/explore/trading" },
]

export default function Explore() {
  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Explore</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block p-6 bg-white bg-opacity-80 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-700">{tool.title}</h2>
              <p className="text-blue-600">Click to use the {tool.title.toLowerCase()} tool</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

