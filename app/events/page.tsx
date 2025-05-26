"use client"

import { useLanguage } from "@/components/language-selector"
import LanguageSelector from "@/components/language-selector"
import ShareButton from "@/components/share-button"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample events data
const events = [
  {
    id: "solidarity-march",
    title: "Solidarity March for Palestine",
    date: "April 25, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Washington Square Park, New York, NY",
    description:
      "Join us for a peaceful march to show solidarity with the people of Palestine. We will gather at Washington Square Park and march to Union Square. Bring signs, Palestinian flags, and your voice.",
    image: "/placeholder.svg?height=300&width=600&text=Solidarity+March",
    organizer: "NYC Palestine Solidarity Coalition",
    type: "In-Person",
  },
  {
    id: "humanitarian-fundraiser",
    title: "Humanitarian Aid Fundraiser",
    date: "May 10, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Community Center, 123 Main St, Boston, MA",
    description:
      "A fundraising dinner to support humanitarian aid efforts in Gaza. The event will feature Palestinian cuisine, cultural performances, and speakers from humanitarian organizations working on the ground.",
    image: "/placeholder.svg?height=300&width=600&text=Fundraiser",
    organizer: "Boston Palestine Relief Committee",
    type: "In-Person",
  },
  {
    id: "educational-webinar",
    title: "Understanding the Humanitarian Crisis in Palestine",
    date: "April 20, 2025",
    time: "2:00 PM - 3:30 PM EST",
    location: "Online (Zoom)",
    description:
      "Join experts for a webinar on the current humanitarian situation in Palestine. The session will cover the impact of the crisis on civilians, challenges facing humanitarian organizations, and ways to help.",
    image: "/placeholder.svg?height=300&width=600&text=Educational+Webinar",
    organizer: "Palestine Education Network",
    type: "Virtual",
  },
  {
    id: "art-exhibition",
    title: "Palestinian Art Exhibition: Voices of Resilience",
    date: "May 15-30, 2025",
    time: "10:00 AM - 6:00 PM (Daily)",
    location: "Gallery Space, 456 Art Ave, Chicago, IL",
    description:
      "An exhibition featuring works by Palestinian artists exploring themes of identity, displacement, and resilience. The exhibition aims to raise awareness about Palestinian culture and the impact of the ongoing crisis.",
    image: "/placeholder.svg?height=300&width=600&text=Art+Exhibition",
    organizer: "Chicago Arts for Palestine",
    type: "In-Person",
  },
  {
    id: "panel-discussion",
    title: "Panel Discussion: Media Coverage of Palestine",
    date: "May 5, 2025",
    time: "7:00 PM - 9:00 PM PST",
    location: "University Auditorium, Los Angeles, CA",
    description:
      "A panel discussion featuring journalists, media analysts, and activists examining how the Palestinian situation is portrayed in mainstream media. The discussion will explore bias, challenges in reporting, and alternative media sources.",
    image: "/placeholder.svg?height=300&width=600&text=Panel+Discussion",
    organizer: "Media Justice Coalition",
    type: "In-Person",
  },
  {
    id: "virtual-film-screening",
    title: "Virtual Film Screening: 'Gaza Fights for Freedom'",
    date: "April 30, 2025",
    time: "8:00 PM EST",
    location: "Online (Streaming)",
    description:
      "Join us for a virtual screening of 'Gaza Fights for Freedom,' followed by a Q&A session with the filmmaker. The documentary provides an on-the-ground account of the Great March of Return protests.",
    image: "/placeholder.svg?height=300&width=600&text=Film+Screening",
    organizer: "Palestine Film Collective",
    type: "Virtual",
  },
]

export default function EventsPage() {
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
              <Link href="/events" className="text-sm font-medium text-palestine-green">
                Events
              </Link>
              <Link href="/resources" className="text-sm font-medium hover:text-palestine-green">
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-palestine-green">Events & Activities</h1>
            <p className="text-lg mt-2">
              Join events and activities to support Palestine and raise awareness about the humanitarian situation.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
            >
              All Events
            </Button>
            <Button
              variant="outline"
              className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
            >
              In-Person
            </Button>
            <Button
              variant="outline"
              className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
            >
              Virtual
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden border-palestine-green/20 hover:border-palestine-green transition-colors"
            >
              <div className="relative h-48 w-full">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge
                    className={`${
                      event.type === "Virtual" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                    }`}
                  >
                    {event.type}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4">
                <div className="text-sm text-gray-500 mb-2">
                  {event.date} • {event.time}
                </div>
                <h3 className="text-xl font-bold text-palestine-green">{event.title}</h3>
                <p className="text-sm font-medium text-gray-600 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-palestine-green"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {event.location}
                </p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-700 line-clamp-3">{event.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <span className="text-xs text-gray-500">Organized by: {event.organizer}</span>
                <Link href={`/events/${event.id}`}>
                  <Button
                    variant="outline"
                    className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
                  >
                    Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-palestine-green text-center">Host Your Own Event</h2>
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Interested in organizing an event to support Palestine? We can help you with resources, promotion, and
            guidance. Fill out the form below to get started.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-palestine-green hover:bg-palestine-green/90"
              onClick={() => alert("This would open an event submission form")}
            >
              Submit Your Event
            </Button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-palestine-green/20">
          <h2 className="text-2xl font-bold mb-6 text-palestine-green text-center">Stay Updated on Events</h2>
          <p className="text-center mb-6">
            Subscribe to our events newsletter to receive updates about upcoming events and activities in your area.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-palestine-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-palestine-green"
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
            <Link href="/events" className="text-sm text-palestine-green hover:underline">
              Events
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
