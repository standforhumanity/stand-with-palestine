"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function CreateUserPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "contentEditor",
    permissions: [] as string[],
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  // Available permissions
  const availablePermissions = [
    { id: "create_news", label: "Create News Articles" },
    { id: "edit_news", label: "Edit News Articles" },
    { id: "delete_news", label: "Delete News Articles" },
    { id: "create_blog", label: "Create Blog Posts" },
    { id: "edit_blog", label: "Edit Blog Posts" },
    { id: "delete_blog", label: "Delete Blog Posts" },
    { id: "create_events", label: "Create Events" },
    { id: "edit_events", label: "Edit Events" },
    { id: "delete_events", label: "Delete Events" },
    { id: "approve_content", label: "Approve Content" },
    { id: "manage_products", label: "Manage Products" },
    { id: "manage_users", label: "Manage Users" },
  ]

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Handle role change
  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }))

    // Set default permissions based on role
    let defaultPermissions: string[] = []
    switch (value) {
      case "superAdmin":
        defaultPermissions = availablePermissions.map((p) => p.id)
        break
      case "contentEditor":
        defaultPermissions = ["create_news", "edit_news", "create_blog", "edit_blog", "create_events", "edit_events"]
        break
      case "moderator":
        defaultPermissions = ["approve_content"]
        break
      case "viewer":
        defaultPermissions = []
        break
    }
    setFormData((prev) => ({ ...prev, permissions: defaultPermissions }))
  }

  // Handle permission toggle
  const handlePermissionToggle = (permissionId: string) => {
    setFormData((prev) => {
      const newPermissions = prev.permissions.includes(permissionId)
        ? prev.permissions.filter((id) => id !== permissionId)
        : [...prev.permissions, permissionId]
      return { ...prev, permissions: newPermissions }
    })
  }

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (formData.permissions.length === 0) {
      newErrors.permissions = "At least one permission is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      alert("User created successfully!")
      router.push("/admin/users")
    }, 1500)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-palestine-green">Create New User</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`border-palestine-green/30 focus-visible:ring-palestine-green ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`border-palestine-green/30 focus-visible:ring-palestine-green ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`border-palestine-green/30 focus-visible:ring-palestine-green ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`border-palestine-green/30 focus-visible:ring-palestine-green ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
            />
            {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Role</Label>
          <RadioGroup value={formData.role} onValueChange={handleRoleChange} className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="superAdmin" id="superAdmin" />
              <Label htmlFor="superAdmin">Super Admin</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="contentEditor" id="contentEditor" />
              <Label htmlFor="contentEditor">Content Editor</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="moderator" id="moderator" />
              <Label htmlFor="moderator">Moderator</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="viewer" id="viewer" />
              <Label htmlFor="viewer">Viewer</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label className={errors.permissions ? "text-red-500" : ""}>Permissions</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-4 border rounded-md border-palestine-green/30">
            {availablePermissions.map((permission) => (
              <div key={permission.id} className="flex items-center space-x-2">
                <Checkbox
                  id={permission.id}
                  checked={formData.permissions.includes(permission.id)}
                  onCheckedChange={() => handlePermissionToggle(permission.id)}
                />
                <Label htmlFor={permission.id} className="text-sm">
                  {permission.label}
                </Label>
              </div>
            ))}
          </div>
          {errors.permissions && <p className="text-sm text-red-500">{errors.permissions}</p>}
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/users")}
            className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className="bg-palestine-green hover:bg-palestine-green/90 flex items-center gap-2"
          >
            {loading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            Create User
          </Button>
        </div>
      </form>
    </div>
  )
}
