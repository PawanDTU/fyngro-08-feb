import Link from "next/link"

const historyEvents = [
  {
    year: "Ancient Times",
    title: "Barter System",
    description: "Before the invention of money, people exchanged goods and services directly.",
  },
  {
    year: "600 BCE",
    title: "First Coins",
    description: "The first coins were minted in Lydia, modern-day Turkey.",
  },
  {
    year: "1400s",
    title: "The Medici Bank",
    description: "One of the most prosperous and respected banks in Europe.",
  },
  {
    year: "1602",
    title: "First Stock Exchange",
    description: "The Amsterdam Stock Exchange was established by the Dutch East India Company.",
  },
  {
    year: "1913",
    title: "Federal Reserve System",
    description: "The central banking system of the United States was created.",
  },
  {
    year: "1971",
    title: "End of Gold Standard",
    description: "The US ended the convertibility of the US dollar to gold.",
  },
  {
    year: "2009",
    title: "Bitcoin",
    description: "The first decentralized cryptocurrency was created.",
  },
]

export default function HistoryOfFinance() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">History of Finance</h1>
      <div className="space-y-8">
        {historyEvents.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">
              {event.year}: {event.title}
            </h2>
            <p className="text-gray-600 mb-4">{event.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/learn" className="text-blue-600 hover:underline">
          ← Back to Learn
        </Link>
      </div>
    </div>
  )
}

