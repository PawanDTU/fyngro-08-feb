"use client"

import { useState, useEffect } from "react"
import ThreeDBackground from "../../components/ThreeDBackground"

interface NewsItem {
  title: string
  description: string
  url: string
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    // Simulating API call to fetch financial news
    const fetchNews = async () => {
      // In a real application, you would fetch this data from an actual API
      const mockNews: NewsItem[] = [
        {
          title: "Stock Market Hits New High",
          description: "The S&P 500 reached a record high today, signaling strong economic growth.",
          url: "#",
        },
        {
          title: "Federal Reserve Announces Interest Rate Decision",
          description:
            "The Federal Reserve has decided to maintain current interest rates, citing stable economic conditions.",
          url: "#",
        },
        {
          title: "Tech Giants Report Strong Quarterly Earnings",
          description: "Major technology companies have reported better-than-expected earnings for the latest quarter.",
          url: "#",
        },
      ]
      setNews(mockNews)
    }

    fetchNews()
  }, [])

  return (
    <div className="relative min-h-screen bg-blue-50 p-8">
      <ThreeDBackground color="#3B82F6" />
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Financial News</h1>
        <div className="space-y-6">
          {news.map((item, index) => (
            <div key={index} className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h2>
              <p className="mb-4 text-blue-600">{item.description}</p>
              <a href={item.url} className="text-blue-600 hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

