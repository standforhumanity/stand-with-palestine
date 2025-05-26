"use client"

import { useLanguage } from "@/components/language-selector"
import BlogCard from "@/components/blog-card"

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
  {
    id: "water-crisis",
    title: "Water Crisis Deepens in Gaza",
    excerpt:
      "Access to clean water has become increasingly difficult for residents of Gaza. Damaged infrastructure and limited resources have led to a severe water crisis that threatens public health.",
    image: "/placeholder.svg?height=300&width=600&text=Water+Crisis",
    date: "March 25, 2025",
    author: "Ahmed Mahmoud",
  },
  {
    id: "mental-health",
    title: "Mental Health Challenges Among Palestinians",
    excerpt:
      "The ongoing conflict has taken a significant toll on the mental health of Palestinians, particularly children. Trauma, anxiety, and depression are widespread, but mental health services are limited.",
    image: "/placeholder.svg?height=300&width=600&text=Mental+Health",
    date: "March 20, 2025",
    author: "Dr. Fatima Abbas",
  },
  {
    id: "aid-workers",
    title: "Aid Workers Face Challenges in Delivering Assistance",
    excerpt:
      "Humanitarian aid workers are facing numerous obstacles in their efforts to deliver assistance to Palestinians in need. Security concerns, access restrictions, and logistical challenges complicate their mission.",
    image: "/placeholder.svg?height=300&width=600&text=Aid+Workers",
    date: "March 15, 2025",
    author: "James Wilson",
  },
]

export default function BlogPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="palestine-flag">
              <div className="palestine-flag-black"></div>
              <div className="palestine-flag-white"></div>
              <div className="palestine-flag-green"></div>
              <div className="palestine-flag-triangle"></div>
            </div>
            <h1 className="text-xl font-bold text-palestine-green">Stand With Palestine</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-palestine-green">
              {t("home")}
            </a>
            <a href="/about" className="text-sm font-medium hover:text-palestine-green">
              {t("about")}
            </a>
            <a href="/blog" className="text-sm font-medium hover:text-palestine-green text-palestine-green">
              Blog
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-palestine-green">
              {t("contact")}
            </a>
          </nav>
        </div>
      </header>

      <div className="bg-gradient-to-r from-palestine-black via-palestine-green to-palestine-red h-2"></div>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-palestine-green">Blog & Updates</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </main>

      <div className="bg-gradient-to-r from-palestine-green via-palestine-red to-palestine-black h-2"></div>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 mb-4">
            © {new Date().getFullYear()} Stand With Palestine. All rights reserved.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/about" className="text-sm text-palestine-green hover:underline">
              {t("about")}
            </a>
            <a href="/contact" className="text-sm text-palestine-green hover:underline">
              {t("contact")}
            </a>
            <a href="/privacy" className="text-sm text-palestine-green hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
