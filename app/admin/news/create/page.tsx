"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function CreateNewsPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    image: "",
    author: "",
    authorBio: "",
    featured: false,
    status: "draft",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  // Available categories
  const categories = [
    "Humanitarian",
    "Politics",
    "Media",
    "International",
    "Resistance",
    "Culture",
    "Economics",
    "Education",
    "Health",
    "Technology",
    "Environment",
    "Sports",
  ]

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  // Handle checkbox change
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.excerpt.trim()) {
      newErrors.excerpt = "Excerpt is required"
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required"
    }

    if (!formData.category) {
      newErrors.category = "Category is required"
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required"
    }

    if (!formData.authorBio.trim()) {
      newErrors.authorBio = "Author bio is required"
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
      alert("News article created successfully!")
      router.push("/admin/news")
    }, 1500)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-palestine-green">Create News Article</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`border-palestine-green/30 focus-visible:ring-palestine-green ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className={`border-palestine-green/30 focus-visible:ring-palestine-green ${
              errors.excerpt ? "border-red-500" : ""
            }`}
            rows={3}
          />
          {errors.excerpt && <p className="text-sm text-red-500">{errors.excerpt}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full h-10 px-3 rounded-md border border-palestine-green/30 focus:outline-none focus:ring-2 focus:ring-palestine-green ${
                errors.category ? "border-red-500" : ""
              }`}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="URL to the article image"
              className="border-palestine-green/30 focus-visible:ring-palestine-green"
            />
            <p className="text-xs text-gray-500">
              Leave empty to use a placeholder. For production, upload images to the media library.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className={`border-palestine-green/30 focus-visible:ring-palestine-green ${
                errors.author ? "border-red-500" : ""
              }`}
            />
            {errors.author && <p className="text-sm text-red-500">{errors.author}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full h-10 px-3 rounded-md border border-palestine-green/30 focus:outline-none focus:ring-2 focus:ring-palestine-green"
            >
              <option value="draft">Draft</option>
              <option value="pending">Pending Approval</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="authorBio">Author Bio</Label>
          <Textarea
            id="authorBio"
            name="authorBio"
            value={formData.authorBio}
            onChange={handleChange}
            className={`border-palestine-green/30 focus-visible:ring-palestine-green ${
              errors.authorBio ? "border-red-500" : ""
            }`}
            rows={3}
          />
          {errors.authorBio && <p className="text-sm text-red-500">{errors.authorBio}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className={`border-palestine-green/30 focus-visible:ring-palestine-green ${
              errors.content ? "border-red-500" : ""
            }`}
            rows={15}
          />
          {errors.content && <p className="text-sm text-red-500">{errors.content}</p>}
          <p className="text-xs text-gray-500">
            HTML formatting is supported. Use &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, etc. for formatting.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="featured"
            checked={formData.featured}
            onCheckedChange={(checked) => handleCheckboxChange("featured", checked as boolean)}
          />
          <Label htmlFor="featured">Feature this article on the homepage</Label>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/news")}
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
            {formData.status === "published" ? "Publish Article" : "Save Article"}
          </Button>
        </div>
      </form>
    </div>
  )
}
