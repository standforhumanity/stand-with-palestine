"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/components/language-selector"
import LanguageSelector from "@/components/language-selector"
import ShareButton from "@/components/share-button"
import Link from "next/link"

export default function ContactPage() {
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
              <Link href="/contact" className="text-sm font-medium text-palestine-green">
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
        <h1 className="text-3xl font-bold mb-6 text-palestine-green">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="mb-6">
              If you have any questions, suggestions, or would like to report an issue with the website, please fill out
              the form below. We appreciate your feedback.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-palestine-green/30 focus-visible:ring-palestine-green"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="border-palestine-green/30 focus-visible:ring-palestine-green"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject of your message"
                  className="border-palestine-green/30 focus-visible:ring-palestine-green"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={6}
                  className="border-palestine-green/30 focus-visible:ring-palestine-green"
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto bg-palestine-green hover:bg-palestine-green/90">
                Send Message
              </Button>
            </form>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-palestine-green">Other Ways to Reach Us</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-palestine-green"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email
                </h3>
                <p className="text-gray-600 mt-1">contact@standwithpalestine.org</p>
              </div>

              <div>
                <h3 className="font-medium flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-palestine-green"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Phone
                </h3>
                <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
              </div>

              <div>
                <h3 className="font-medium flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-palestine-green"
                  >
                    <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Address
                </h3>
                <p className="text-gray-600 mt-1">
                  123 Solidarity Street
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="font-medium">Social Media</h3>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-palestine-green hover:text-palestine-green/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3 .4 3 2z" />
                    </svg>
                  </a>
                  <a href="#" className="text-palestine-green hover:text-palestine-green/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-palestine-green hover:text-palestine-green/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-palestine-green">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">How can I verify that an organization is legitimate?</h3>
              <p className="text-gray-700">
                All organizations featured on our platform have been verified by our team. We check their legal status,
                financial transparency, and track record. You can also research organizations through Charity Navigator,
                GuideStar, or similar charity evaluation services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How can I volunteer to help?</h3>
              <p className="text-gray-700">
                Many organizations listed on our platform have volunteer programs. Visit their websites for more
                information. You can also contact us if you'd like to volunteer for Stand With Palestine directly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                How can I suggest an organization to be added to your platform?
              </h3>
              <p className="text-gray-700">
                You can suggest organizations by filling out our contact form. Please include as much information as
                possible about the organization, including their website, registration details, and the type of work
                they do.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-palestine-green/20">
          <h2 className="text-2xl font-semibold mb-6 text-palestine-green text-center">Join Our Newsletter</h2>
          <p className="text-center mb-6">
            Stay updated on the humanitarian situation in Palestine and ways you can help. We send monthly updates with
            verified information and opportunities to support.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="border-palestine-green/30 focus-visible:ring-palestine-green"
            />
            <Button type="submit" className="bg-palestine-green hover:bg-palestine-green/90">
              Subscribe
            </Button>
          </form>
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
