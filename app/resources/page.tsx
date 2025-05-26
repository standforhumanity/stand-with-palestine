"use client"

import { useLanguage } from "@/components/language-selector"
import LanguageSelector from "@/components/language-selector"
import ShareButton from "@/components/share-button"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ResourcesPage() {
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
              <Link href="/about" className="text-sm font-medium hover:text-palestine-green">
                {t("about")}
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-palestine-green">
                Blog
              </Link>
              <Link href="/resources" className="text-sm font-medium text-palestine-green">
                Resources
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
        <h1 className="text-3xl font-bold mb-6 text-palestine-green">Educational Resources</h1>

        <div className="mb-12">
          <p className="text-lg mb-6">
            Education is a powerful tool for change. These resources provide accurate information about the history,
            context, and current situation in Palestine. Understanding the issues is the first step toward meaningful
            action.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-palestine-green/20">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Historical+Context"
                  alt="Historical Context"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold text-palestine-green">Historical Context</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Understanding the historical context of Palestine is essential for comprehending the current
                  situation. These resources provide an overview of key historical events and developments.
                </p>
                <Button
                  variant="outline"
                  className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
                  onClick={() => alert("This would link to historical resources")}
                >
                  View Resources
                </Button>
              </CardContent>
            </Card>

            <Card className="border-palestine-green/20">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Current+Situation"
                  alt="Current Situation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold text-palestine-green">Current Situation</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Stay informed about the current humanitarian situation in Palestine with reliable news sources,
                  reports from human rights organizations, and updates from the ground.
                </p>
                <Button
                  variant="outline"
                  className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
                  onClick={() => alert("This would link to current situation resources")}
                >
                  View Resources
                </Button>
              </CardContent>
            </Card>

            <Card className="border-palestine-green/20">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Legal+Framework"
                  alt="Legal Framework"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold text-palestine-green">Legal Framework</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Learn about international law as it relates to Palestine, including UN resolutions, human rights
                  conventions, and legal analyses of the occupation.
                </p>
                <Button
                  variant="outline"
                  className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
                  onClick={() => alert("This would link to legal resources")}
                >
                  View Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-palestine-green">Educational Materials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-palestine-green">Books</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="relative min-w-[80px] h-[120px]">
                    <Image
                      src="/placeholder.svg?height=120&width=80&text=Book"
                      alt="Book Cover"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Palestine: A History</h4>
                    <p className="text-sm text-gray-600">Author: John Smith</p>
                    <p className="text-sm text-gray-700 mt-2">
                      A comprehensive history of Palestine from ancient times to the present day.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="relative min-w-[80px] h-[120px]">
                    <Image
                      src="/placeholder.svg?height=120&width=80&text=Book"
                      alt="Book Cover"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">The Question of Palestine</h4>
                    <p className="text-sm text-gray-600">Author: Edward Said</p>
                    <p className="text-sm text-gray-700 mt-2">
                      A seminal work examining the Palestinian perspective on the conflict.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="relative min-w-[80px] h-[120px]">
                    <Image
                      src="/placeholder.svg?height=120&width=80&text=Book"
                      alt="Book Cover"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Gaza: An Inquest into Its Martyrdom</h4>
                    <p className="text-sm text-gray-600">Author: Norman Finkelstein</p>
                    <p className="text-sm text-gray-700 mt-2">
                      An examination of the humanitarian crisis in Gaza and its historical context.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-palestine-green">Documentaries</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="relative min-w-[120px] h-[80px]">
                    <Image
                      src="/placeholder.svg?height=80&width=120&text=Documentary"
                      alt="Documentary Thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Five Broken Cameras</h4>
                    <p className="text-sm text-gray-600">Director: Emad Burnat & Guy Davidi</p>
                    <p className="text-sm text-gray-700 mt-2">
                      A documentary about a Palestinian farmer's chronicle of his nonviolent resistance.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="relative min-w-[120px] h-[80px]">
                    <Image
                      src="/placeholder.svg?height=80&width=120&text=Documentary"
                      alt="Documentary Thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">The Occupation of the American Mind</h4>
                    <p className="text-sm text-gray-600">Director: Loretta Alper & Jeremy Earp</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Examines how the Israeli-Palestinian conflict is portrayed in U.S. media.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="relative min-w-[120px] h-[80px]">
                    <Image
                      src="/placeholder.svg?height=80&width=120&text=Documentary"
                      alt="Documentary Thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Gaza Fights For Freedom</h4>
                    <p className="text-sm text-gray-600">Director: Abby Martin</p>
                    <p className="text-sm text-gray-700 mt-2">
                      A documentary about Gaza's Great March of Return protests.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-palestine-green">Advocacy Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-palestine-green/20">
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold text-palestine-green">Social Media Toolkit</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Download our social media toolkit with pre-made graphics, suggested hashtags, and sample posts to
                  raise awareness about the situation in Palestine.
                </p>
                <Button
                  className="w-full bg-palestine-green hover:bg-palestine-green/90"
                  onClick={() => alert("This would download the social media toolkit")}
                >
                  Download Toolkit
                </Button>
              </CardContent>
            </Card>

            <Card className="border-palestine-green/20">
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold text-palestine-green">Advocacy Guide</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Learn effective advocacy strategies, including how to contact elected officials, organize community
                  events, and engage in constructive dialogue about Palestine.
                </p>
                <Button
                  className="w-full bg-palestine-green hover:bg-palestine-green/90"
                  onClick={() => alert("This would download the advocacy guide")}
                >
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="border-palestine-green/20">
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold text-palestine-green">Fact Sheets</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Access printable fact sheets on various aspects of the Palestinian situation, including the
                  humanitarian crisis, legal issues, and historical context.
                </p>
                <Button
                  className="w-full bg-palestine-green hover:bg-palestine-green/90"
                  onClick={() => alert("This would download the fact sheets")}
                >
                  Download Fact Sheets
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-palestine-green text-center">Educational Webinars</h2>
          <p className="text-center mb-8">
            Join our upcoming webinars featuring experts on various aspects of the Palestinian situation. All webinars
            are free and include Q&A sessions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-palestine-green/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-palestine-green">Understanding the Humanitarian Crisis</h3>
                  <p className="text-sm text-gray-600">April 20, 2025 • 2:00 PM EST</p>
                </div>
                <span className="bg-palestine-green/10 text-palestine-green text-xs px-2 py-1 rounded">Upcoming</span>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                This webinar will provide an overview of the current humanitarian situation in Palestine, with a focus
                on Gaza. Experts will discuss the impact of the crisis on civilians and the challenges facing
                humanitarian organizations.
              </p>
              <Button
                className="w-full bg-palestine-green hover:bg-palestine-green/90"
                onClick={() => alert("This would register for the webinar")}
              >
                Register
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg border border-palestine-green/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-palestine-green">International Law and Palestine</h3>
                  <p className="text-sm text-gray-600">May 5, 2025 • 1:00 PM EST</p>
                </div>
                <span className="bg-palestine-green/10 text-palestine-green text-xs px-2 py-1 rounded">Upcoming</span>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Legal experts will discuss international law as it relates to Palestine, including the legal status of
                the occupation, UN resolutions, and the rights of Palestinians under international humanitarian law.
              </p>
              <Button
                className="w-full bg-palestine-green hover:bg-palestine-green/90"
                onClick={() => alert("This would register for the webinar")}
              >
                Register
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button
              variant="outline"
              className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
              onClick={() => alert("This would show past webinar recordings")}
            >
              View Past Webinar Recordings
            </Button>
          </div>
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
            <Link href="/resources" className="text-sm text-palestine-green hover:underline">
              Resources
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
