"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-selector"

export default function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600 mb-4">
          © {new Date().getFullYear()} Stand With Palestine. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/about" className="text-sm text-palestine-green hover:underline">
            {t("about")}
          </Link>
          <Link href="/news" className="text-sm text-palestine-green hover:underline">
            News
          </Link>
          <Link href="/blog" className="text-sm text-palestine-green hover:underline">
            Blog
          </Link>
          <Link href="/events" className="text-sm text-palestine-green hover:underline">
            Events
          </Link>
          <Link href="/resources" className="text-sm text-palestine-green hover:underline">
            Resources
          </Link>
          <Link href="/verify-products" className="text-sm text-palestine-green hover:underline">
            Verify Products
          </Link>
          <Link href="/donate" className="text-sm text-palestine-green hover:underline">
            {t("donate")}
          </Link>
          <Link href="/contact" className="text-sm text-palestine-green hover:underline">
            {t("contact")}
          </Link>
          <Link href="/privacy" className="text-sm text-palestine-green hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
