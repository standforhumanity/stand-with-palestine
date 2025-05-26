"use client"

import BlogCard from "@/components/blog-card"
import { useLanguage } from "@/components/language-selector"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Sample blog data
const blogPosts = [
  {
    id: "humanitarian-crisis",
    title: "The Ongoing Humanitarian Crisis in Gaza",
    excerpt:
      "The humanitarian situation in Gaza continues to deteriorate as essential supplies dwindle and infrastructure remains damaged. International aid organizations are struggling to meet the growing needs of the population.",
    image: "/placeholder.svg?height=300&width=600&text=Humanitarian+Crisis",
    date: "April 5, 2025",
    author: "Sarah Ahmed",
  },
  {
    id: "medical-shortages",
    title: "Medical Shortages Affecting Palestinian Hospitals",
    excerpt:
      "Hospitals across Palestine are facing critical shortages of medical supplies, equipment, and medications. Healthcare workers are doing their best with limited resources to treat patients.",
    image: "/placeholder.svg?height=300&width=600&text=Medical+Shortages",
    date: "April 2, 2025",
    author: "Dr. Mohammed Khalil",
  },
  {
    id: "education-disruption",
    title: "Education Disrupted for Palestinian Children",
    excerpt:
      "Thousands of Palestinian children are unable to attend school due to the ongoing conflict. Educational facilities have been damaged, and many children are dealing with trauma that affects their ability to learn.",
    image: "/placeholder.svg?height=300&width=600&text=Education+Disruption",
    date: "March 28, 2025",
    author: "Layla Nasser",
  },
]

export default function BlogSection() {
  const { t } = useLanguage()

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-palestine-green">{t("latest_news")}</h2>
        <Link href="/blog">
          <Button variant="link" className="text-palestine-green">
            View All
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  )
}
