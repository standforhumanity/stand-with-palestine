"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// Mock pending content data
const mockPendingContent = [
  {
    id: "pending-news-1",
    title: "Palestinian Refugees: Current Situation and Future Prospects",
    type: "news",
    category: "Humanitarian",
    author: "Mohammed Khalil",
    submittedAt: new Date("2025-04-11"),
  },
  {
    id: "pending-blog-1",
    title: "The Role of International Law in the Palestinian Struggle",
    type: "blog",
    category: "Politics",
    author: "Sarah Ahmed",
    submittedAt: new Date("2025-04-10"),
  },
  {
    id: "pending-event-1",
    title: "International Conference on Palestinian Rights",
    type: "event",
    category: "International",
    author: "Layla Nasser",
    submittedAt: new Date("2025-04-09"),
  },
  {
    id: "pending-product-1",
    title: "Nestlé Products",
    type: "product",
    category: "Food",
    author: "Ahmed Mahmoud",
    submittedAt: new Date("2025-04-08"),
  },
  {
    id: "pending-news-2",
    title: "Water Crisis in Gaza: Environmental and Health Impacts",
    type: "news",
    category: "Environment",
    author: "Fatima Abbas",
    submittedAt: new Date("2025-04-07"),
  },
]

export default function ApprovalsPage() {
  const [pendingContent, setPendingContent] = useState<typeof mockPendingContent>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading pending content
    setTimeout(() => {
      setPendingContent(mockPendingContent)
      setLoading(false)
    }, 1000)
  }, [])

  // Function to get badge color based on content type
  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "news":
        return "bg-blue-100 text-blue-800"
      case "blog":
        return "bg-green-100 text-green-800"
      case "event":
        return "bg-purple-100 text-purple-800"
      case "product":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Handle approve action
  const handleApprove = (id: string) => {
    if (confirm("Are you sure you want to approve this content?")) {
      // Approve content logic would go here
      setPendingContent((prev) => prev.filter((item) => item.id !== id))
      alert("Content approved and published")
    }
  }

  // Handle reject action
  const handleReject = (id: string) => {
    if (confirm("Are you sure you want to reject this content?")) {
      // Reject content logic would go here
      setPendingContent((prev) => prev.filter((item) => item.id !== id))
      alert("Content rejected")
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-palestine-green">Pending Approvals</h1>

      {loading ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 border-4 border-palestine-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading pending content...</p>
        </div>
      ) : pendingContent.length > 0 ? (
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
                  Type
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
                  Submitted
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
              {pendingContent.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{item.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className={getTypeBadgeColor(item.type)}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className="bg-palestine-green/10 text-palestine-green">{item.category}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.submittedAt.toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/admin/${item.type}/${item.id}`}
                      className="text-palestine-green hover:text-palestine-green/80 mr-4"
                    >
                      View
                    </Link>
                    <button onClick={() => handleApprove(item.id)} className="text-green-600 hover:text-green-800 mr-4">
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(item.id)}
                      className="text-palestine-red hover:text-palestine-red/80"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No pending content awaiting approval.</p>
        </div>
      )}
    </div>
  )
}
