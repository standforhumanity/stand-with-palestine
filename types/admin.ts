export type UserRole = "superAdmin" | "contentEditor" | "moderator" | "viewer"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  permissions: Permission[]
  createdAt: Date
  updatedAt: Date
}

export type Permission =
  | "manage_users"
  | "create_news"
  | "edit_news"
  | "delete_news"
  | "create_blog"
  | "edit_blog"
  | "delete_blog"
  | "create_events"
  | "edit_events"
  | "delete_events"
  | "approve_content"
  | "manage_products"

export interface ContentItem {
  id: string
  title: string
  status: "draft" | "pending" | "published" | "archived"
  createdBy: string
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
}

export interface NewsItem extends ContentItem {
  excerpt: string
  content: string
  category: string
  image: string
  author: string
  authorBio: string
  featured: boolean
  relatedArticles: string[]
}

export interface BlogPost extends ContentItem {
  excerpt: string
  content: string
  image: string
  author: string
}

export interface Event extends ContentItem {
  date: string
  time: string
  location: string
  description: string
  image: string
  organizer: string
  type: "In-Person" | "Virtual"
}

export interface Product {
  id: string
  name: string
  category: string
  subcategory: string
  status: "Israeli" | "Complicit" | "Safe"
  details: string
  alternatives: string[]
  image: string
  createdBy: string
  createdAt: Date
  updatedAt: Date
}
