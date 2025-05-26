"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Mock user data
const mockUsers = [
  {
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
    createdAt: new Date("2023-01-01"),
    status: "active",
  },
  {
    id: "2",
    name: "Sarah Ahmed",
    email: "sarah@example.com",
    role: "contentEditor",
    permissions: ["create_news", "edit_news", "create_blog", "edit_blog", "create_events", "edit_events"],
    createdAt: new Date("2023-03-15"),
    status: "active",
  },
  {
    id: "3",
    name: "Mohammed Khalil",
    email: "mohammed@example.com",
    role: "contentEditor",
    permissions: ["create_news", "edit_news", "create_blog", "edit_blog"],
    createdAt: new Date("2023-05-20"),
    status: "active",
  },
  {
    id: "4",
    name: "Layla Nasser",
    email: "layla@example.com",
    role: "moderator",
    permissions: ["approve_content"],
    createdAt: new Date("2023-07-10"),
    status: "active",
  },
  {
    id: "5",
    name: "Ahmed Mahmoud",
    email: "ahmed@example.com",
    role: "contentEditor",
    permissions: ["create_news", "edit_news", "create_events", "edit_events"],
    createdAt: new Date("2023-09-05"),
    status: "inactive",
  },
]

export default function UsersPage() {
  const [users, setUsers] = useState<typeof mockUsers>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading users
    setTimeout(() => {
      setUsers(mockUsers)
      setLoading(false)
    }, 1000)
  }, [])

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Function to get badge color based on role
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "superAdmin":
        return "bg-purple-100 text-purple-800"
      case "contentEditor":
        return "bg-blue-100 text-blue-800"
      case "moderator":
        return "bg-green-100 text-green-800"
      case "viewer":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Function to get badge color based on status
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-palestine-green">Users</h1>
        <Link href="/admin/users/create">
          <Button className="bg-palestine-green hover:bg-palestine-green/90">Add User</Button>
        </Link>
      </div>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search users by name, email, or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-palestine-green/30 focus-visible:ring-palestine-green"
        />
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 border-4 border-palestine-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading users...</p>
        </div>
      ) : filteredUsers.length > 0 ? (
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
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
                  Created
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
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className={getRoleBadgeColor(user.role)}>{user.role}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className={getStatusBadgeColor(user.status)}>{user.status}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.createdAt.toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/admin/users/${user.id}`}
                      className="text-palestine-green hover:text-palestine-green/80 mr-4"
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/users/${user.id}/edit`}
                      className="text-palestine-green hover:text-palestine-green/80 mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        if (confirm("Are you sure you want to delete this user?")) {
                          // Delete user logic would go here
                          alert("User deleted")
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
          <p className="text-gray-500">No users found matching your search criteria.</p>
        </div>
      )}
    </div>
  )
}
