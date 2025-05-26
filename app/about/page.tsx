"use client"

import { useLanguage } from "@/components/language-selector"
import LanguageSelector from "@/components/language-selector"
import ShareButton from "@/components/share-button"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
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
            <h1 className="text-xl font-bold text-palestine-green">Stand With Palestine</h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-palestine-green">
                {t("home")}
              </Link>
              <Link href="/about" className="text-sm font-medium text-palestine-green">
                {t("about")}
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-palestine-green">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-palestine-green">
                {t("contact")}
              </Link>
            </nav>
            <LanguageSelector />
            <ShareButton />
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-r from-palestine-black via-palestine-green to-palestine-red h-2"></div>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-palestine-green">About Stand With Palestine</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg">
                Stand With Palestine is a platform created to help people around the world find reliable ways to support
                Palestinians during the ongoing humanitarian crisis. Our mission is to connect donors with verified
                organizations that provide essential aid and services to those in need.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-palestine-green">Our Mission</h2>
              <p>
                We aim to provide a comprehensive resource for individuals looking to support humanitarian efforts in
                Palestine. By curating a list of reputable organizations and detailing their work, we help ensure that
                aid reaches those who need it most.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-palestine-green">How We Verify Organizations</h2>
              <p>All organizations featured on our platform undergo a thorough verification process. We check their:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Legal status and registration</li>
                <li>Financial transparency</li>
                <li>Track record of humanitarian work</li>
                <li>Efficiency in delivering aid</li>
                <li>Reputation among international humanitarian networks</li>
              </ul>
            </div>
          </div>
          <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=400&text=About+Us"
              alt="About Stand With Palestine"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-palestine-green">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128&text=Team+Member"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">Sarah Ahmed</h3>
              <p className="text-sm text-gray-600">Founder & Director</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128&text=Team+Member"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">Mohammed Khalil</h3>
              <p className="text-sm text-gray-600">Humanitarian Coordinator</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128&text=Team+Member"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">Layla Nasser</h3>
              <p className="text-sm text-gray-600">Outreach Specialist</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mt-8 mb-6 text-palestine-green">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-palestine-green/20">
              <h3 className="text-xl font-semibold mb-4 text-palestine-green">Donate</h3>
              <p className="mb-4">
                Financial contributions to verified organizations are one of the most effective ways to support
                Palestinians. These funds help provide essential services, medical care, food, and shelter.
              </p>
              <Link href="/">
                <Button className="bg-palestine-green hover:bg-palestine-green/90">View Organizations</Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg border border-palestine-green/20">
              <h3 className="text-xl font-semibold mb-4 text-palestine-green">Spread Awareness</h3>
              <p className="mb-4">
                Share accurate information about the humanitarian situation in Palestine. Use social media, community
                events, and personal conversations to raise awareness and combat misinformation.
              </p>
              <Link href="/resources">
                <Button className="bg-palestine-green hover:bg-palestine-green/90">View Resources</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-palestine-green">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-4 rounded-lg flex items-center justify-center h-24">
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=Partner+${i}`}
                  alt={`Partner ${i}`}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-palestine-green">Disclaimer</h2>
          <p className="text-gray-700">
            Stand With Palestine does not collect or process donations. We provide information about organizations and
            direct links to their official donation platforms. We do not take any commission or fee from donations made.
          </p>
        </div>
      </main>

      <div className="bg-gradient-to-r from-palestine-green via-palestine-red to-palestine-black h-2"></div>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 mb-4">
            © {new Date().getFullYear()} Stand With Palestine. All rights reserved.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/about" className="text-sm text-palestine-green hover:underline">
              {t("about")}
            </Link>
            <Link href="/blog" className="text-sm text-palestine-green hover:underline">
              Blog
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
    </div>
  )
}
