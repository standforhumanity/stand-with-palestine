"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

// Mock authentication - in a real app, this would use a proper auth system
const useAuth = () => {
  const [user, setUser] = useState<{
    id: string
    name: string
    email: string
    role: string
    permissions: string[]
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      // Mock user - in a real app, this would come from an auth provider
      setUser({
        id: "1",
        name: "Admin User",
        email: "admin@example.com",
        role: "superAdmin",
        permissions: [
          "manage_users",
          "create_news",
          "edit_news",
          "delete_news",
          "create_blog",
          "edit_blog",
          "delete_blog",
          "create_events",
          "edit_events",
          "delete_events",
          "approve_content",
          "manage_products",
        ],
      })
      setLoading(false)
    }, 1000)
  }, [])

  const logout = () => {
    setUser(null)
  }

  return { user, loading, logout }
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  // If loading, show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-palestine-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  // If not authenticated, redirect to login
  if (!user) {
    // In a real app, this would redirect to a login page
    // For now, we'll just show a message
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="mb-4">You need to be logged in to access the admin area.</p>
          <Button onClick={() => router.push("/")} className="bg-palestine-green hover:bg-palestine-green/90">
            Go to Homepage
          </Button>
        </div>
      </div>
    )
  }

  // Check if the current path is active
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="palestine-flag">
              <div className="palestine-flag-black"></div>
              <div className="palestine-flag-white"></div>
              <div className="palestine-flag-green"></div>
              <div className="palestine-flag-triangle"></div>
            </div>
            <h1 className="text-xl font-bold text-palestine-green">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm">
              Logged in as <span className="font-semibold">{user.name}</span> ({user.role})
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
            >
              Logout
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/")}
              className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
            >
              View Site
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/admin"
                    className={`block p-2 rounded-md ${
                      isActive("/admin") &&
                      !isActive("/admin/users") &&
                      !isActive("/admin/news") &&
                      !isActive("/admin/blog") &&
                      !isActive("/admin/events") &&
                      !isActive("/admin/products")
                        ? "bg-palestine-green text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
                {user.permissions.includes("manage_users") && (
                  <li>
                    <Link
                      href="/admin/users"
                      className={`block p-2 rounded-md ${
                        isActive("/admin/users") ? "bg-palestine-green text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      Users
                    </Link>
                  </li>
                )}
                {(user.permissions.includes("create_news") ||
                  user.permissions.includes("edit_news") ||
                  user.permissions.includes("delete_news")) && (
                  <li>
                    <Link
                      href="/admin/news"
                      className={`block p-2 rounded-md ${
                        isActive("/admin/news") ? "bg-palestine-green text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      News
                    </Link>
                  </li>
                )}
                {(user.permissions.includes("create_blog") ||
                  user.permissions.includes("edit_blog") ||
                  user.permissions.includes("delete_blog")) && (
                  <li>
                    <Link
                      href="/admin/blog"
                      className={`block p-2 rounded-md ${
                        isActive("/admin/blog") ? "bg-palestine-green text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                )}
                {(user.permissions.includes("create_events") ||
                  user.permissions.includes("edit_events") ||
                  user.permissions.includes("delete_events")) && (
                  <li>
                    <Link
                      href="/admin/events"
                      className={`block p-2 rounded-md ${
                        isActive("/admin/events") ? "bg-palestine-green text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      Events
                    </Link>
                  </li>
                )}
                {user.permissions.includes("manage_products") && (
                  <li>
                    <Link
                      href="/admin/products"
                      className={`block p-2 rounded-md ${
                        isActive("/admin/products") ? "bg-palestine-green text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      Products
                    </Link>
                  </li>
                )}
                {user.permissions.includes("approve_content") && (
                  <li>
                    <Link
                      href="/admin/approvals"
                      className={`block p-2 rounded-md ${
                        isActive("/admin/approvals") ? "bg-palestine-green text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      Pending Approvals
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    href="/admin/settings"
                    className={`block p-2 rounded-md ${
                      isActive("/admin/settings") ? "bg-palestine-green text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 bg-white rounded-lg shadow-sm p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
