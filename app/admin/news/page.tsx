"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Mock news data
const mockNews = [
  {
    id: "gaza-humanitarian-crisis",
    title: "Humanitarian Crisis in Gaza Worsens as Aid Deliveries Blocked",
    category: "Humanitarian",
    status: "published",
    featured: true,
    author: "Sarah Ahmed",
    createdAt: new Date("2025-04-10"),
    publishedAt: new Date("2025-04-10"),
  },
  {
    id: "un-resolution-palestine",
    title: "UN General Assembly Passes Resolution Supporting Palestinian Rights",
    category: "Politics",
    status: "published",
    featured: false,
    author: "Mohammed Khalil",
    createdAt: new Date("2025-04-08"),
    publishedAt: new Date("2025-04-08"),
  },
  {
    id: "media-coverage-bias",
    title: "Study Reveals Systematic Bias in Western Media Coverage of Palestine",
    category: "Media",
    status: "published",
    featured: false,
    author: "Layla Nasser",
    createdAt: new Date("2025-04-05"),
    publishedAt: new Date("2025-04-05"),
  },
  {
    id: "international-solidarity-movement",
    title: "Global Solidarity Movement for Palestine Gains Momentum",
    category: "International",
    status: "published",
    featured: false,
    author: "Ahmed Mahmoud",
    createdAt: new Date("2025-04-03"),
    publishedAt: new Date("2025-04-03"),
  },
  {
    id: "palestinian-cultural-resistance",
    title: "Palestinian Artists Use Culture as a Form of Resistance",
    category: "Culture",
    status: "published",
    featured: false,
    author: "Fatima Abbas",
    createdAt: new Date("2025-03-30"),
    publishedAt: new Date("2025-03-30"),
  },
  {
    id: "palestinian-resistance-history",
    title: "The Evolution of Palestinian Resistance: From Armed Struggle to Popular Resistance",
    category: "Resistance",
    status: "published",
    featured: false,
    author: "Khalid Rahman",
    createdAt: new Date("2025-03-25"),
    publishedAt: new Date("2025-03-25"),
  },
  {
    id: "draft-article-1",
    title: "Impact of International Sanctions on Israeli Economy",
    category: "Economics",
    status: "draft",
    featured: false,
    author: "Sarah Ahmed",
    createdAt: new Date("2025-04-12"),
    publishedAt: null,
  },
  {
    id: "pending-article-1",
    title: "Palestinian Refugees: Current Situation and Future Prospects",
    category: "Humanitarian",
    status: "pending",
    featured: false,
    author: "Mohammed Khalil",
    createdAt: new Date("2025-04-11"),
    publishedAt: null,
  },
]

export default function NewsPage() {
  const [news, setNews] = useState<typeof mockNews>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading news
    setTimeout(() => {
      setNews(mockNews)
      setLoading(false)
    }, 1000)
  }, [])

  // Filter news based on search term and status
  const filteredNews = news.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || article.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Function to get badge color based on status
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "archived":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-palestine-green">News Articles</h1>
        <Link href="/admin/news/create">
          <Button className="bg-palestine-green hover:bg-palestine-green/90">Create Article</Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search by title, author, or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-palestine-green/30 focus-visible:ring-palestine-green"
          />
        </div>
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-palestine-green/30 focus:outline-none focus:ring-2 focus:ring-palestine-green"
          >
            <option value="all">All Statuses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="pending">Pending</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 border-4 border-palestine-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading articles...</p>
        </div>
      ) : filteredNews.length > 0 ? (
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Author
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Featured
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredNews.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{article.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className="bg-palestine-green/10 text-palestine-green">{article.category}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{article.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className={getStatusBadgeColor(article.status)}>
                      {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {article.featured ? (
                      <span className="text-palestine-green">✓</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {article.publishedAt
                      ? article.publishedAt.toLocaleDateString()
                      : article.createdAt.toLocaleDateString() + " (Created)"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/admin/news/${article.id}`}
                      className="text-palestine-green hover:text-palestine-green/80 mr-4"
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/news/${article.id}/edit`}
                      className="text-palestine-green hover:text-palestine-green/80 mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        if (confirm("Are you sure you want to delete this article?")) {
                          // Delete article logic would go here
                          alert("Article deleted")
                        }
                      }}
                      className="text-palestine-red hover:text-palestine-red/80"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No articles found matching your search criteria.</p>
        </div>
      )}
    </div>
  )
}
