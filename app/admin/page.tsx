"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalNews: 0,
    totalBlogs: 0,
    totalEvents: 0,
    totalProducts: 0,
    pendingApprovals: 0,
  })

  useEffect(() => {
    // Simulate loading stats
    setTimeout(() => {
      setStats({
        totalUsers: 15,
        totalNews: 42,
        totalBlogs: 28,
        totalEvents: 12,
        totalProducts: 87,
        pendingApprovals: 5,
      })
    }, 1000)
  }, [])

  // Recent activity - would come from an API in a real app
  const recentActivity = [
    {
      id: 1,
      action: "Published news article",
      title: "Humanitarian Crisis in Gaza Worsens",
      user: "Sarah Ahmed",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Updated blog post",
      title: "The Impact of Boycotts on Israeli Economy",
      user: "Mohammed Khalil",
      time: "5 hours ago",
    },
    {
      id: 3,
      action: "Added new event",
      title: "Solidarity March for Palestine",
      user: "Layla Nasser",
      time: "Yesterday",
    },
    {
      id: 4,
      action: "Added new product to database",
      title: "Sabra Hummus",
      user: "Ahmed Mahmoud",
      time: "2 days ago",
    },
    {
      id: 5,
      action: "Created new user account",
      title: "Fatima Abbas (Content Editor)",
      user: "Admin User",
      time: "3 days ago",
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-palestine-green">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-sm font-medium text-gray-500 mb-1">Content</h2>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <p className="text-2xl font-bold text-palestine-green">{stats.totalNews}</p>
              <p className="text-xs text-gray-500">News</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-palestine-green">{stats.totalBlogs}</p>
              <p className="text-xs text-gray-500">Blogs</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-palestine-green">{stats.totalEvents}</p>
              <p className="text-xs text-gray-500">Events</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-sm font-medium text-gray-500 mb-1">Products Database</h2>
          <p className="text-2xl font-bold text-palestine-green">{stats.totalProducts}</p>
          <p className="text-xs text-gray-500">Verified Products</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-sm font-medium text-gray-500 mb-1">Users & Approvals</h2>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-2xl font-bold text-palestine-green">{stats.totalUsers}</p>
              <p className="text-xs text-gray-500">Users</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-palestine-red">{stats.pendingApprovals}</p>
              <p className="text-xs text-gray-500">Pending Approvals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-palestine-green">Quick Actions</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/admin/news/create">
            <Button size="sm" className="bg-palestine-green hover:bg-palestine-green/90">
              Create News Article
            </Button>
          </Link>
          <Link href="/admin/blog/create">
            <Button size="sm" className="bg-palestine-green hover:bg-palestine-green/90">
              Create Blog Post
            </Button>
          </Link>
          <Link href="/admin/events/create">
            <Button size="sm" className="bg-palestine-green hover:bg-palestine-green/90">
              Create Event
            </Button>
          </Link>
          <Link href="/admin/products/create">
            <Button size="sm" className="bg-palestine-green hover:bg-palestine-green/90">
              Add Product
            </Button>
          </Link>
          <Link href="/admin/users/create">
            <Button size="sm" className="bg-palestine-green hover:bg-palestine-green/90">
              Add User
            </Button>
          </Link>
          <Link href="/admin/approvals">
            <Button size="sm" className="bg-palestine-red hover:bg-palestine-red/90">
              Review Pending Approvals ({stats.pendingApprovals})
            </Button>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-palestine-green">Recent Activity</h2>
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="p-4 hover:bg-gray-100">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{activity.user}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
