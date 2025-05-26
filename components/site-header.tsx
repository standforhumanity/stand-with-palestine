"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-selector"
import LanguageSelector from "@/components/language-selector"
import ShareButton from "@/components/share-button"
import { usePathname } from "next/navigation"

export default function SiteHeader() {
  const { t } = useLanguage()
  const pathname = usePathname()

  // Function to check if a path is active
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Palestine flag with triangle */}
          <div className="palestine-flag">
            <div className="palestine-flag-black"></div>
            <div className="palestine-flag-white"></div>
            <div className="palestine-flag-green"></div>
            <div className="palestine-flag-triangle"></div>
          </div>
          <Link href="/" className="text-xl font-bold text-palestine-green">
            Stand With Palestine
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium ${isActive("/") ? "text-palestine-green" : "hover:text-palestine-green"}`}
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium ${
                isActive("/about") ? "text-palestine-green" : "hover:text-palestine-green"
              }`}
            >
              {t("about")}
            </Link>
            <Link
              href="/news"
              className={`text-sm font-medium ${
                pathname.startsWith("/news") ? "text-palestine-green" : "hover:text-palestine-green"
              }`}
            >
              News
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium ${
                pathname.startsWith("/blog") ? "text-palestine-green" : "hover:text-palestine-green"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/events"
              className={`text-sm font-medium ${
                pathname.startsWith("/events") ? "text-palestine-green" : "hover:text-palestine-green"
              }`}
            >
              Events
            </Link>
            <Link
              href="/resources"
              className={`text-sm font-medium ${
                isActive("/resources") ? "text-palestine-green" : "hover:text-palestine-green"
              }`}
            >
              Resources
            </Link>
            <Link
              href="/verify-products"
              className={`text-sm font-medium ${
                isActive("/verify-products") ? "text-palestine-green" : "hover:text-palestine-green"
              }`}
            >
              Verify Products
            </Link>
            <Link
              href="/donate"
              className={`text-sm font-medium ${
                pathname.startsWith("/donate") ? "text-palestine-green" : "hover:text-palestine-green"
              }`}
            >
              {t("donate")}
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium ${
                isActive("/contact") ? "text-palestine-green" : "hover:text-palestine-green"
              }`}
            >
              {t("contact")}
            </Link>
          </nav>
          <LanguageSelector />
          <ShareButton />
        </div>
      </div>
    </header>
  )
}
