"use client"

import { useLanguage } from "@/components/language-selector"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

// Sample product database
const productDatabase = [
  {
    id: "sabra",
    name: "Sabra",
    category: "Food",
    subcategory: "Hummus & Dips",
    status: "Israeli",
    details:
      "Sabra is co-owned by PepsiCo and the Israeli company Strauss Group, which has provided support to the Israeli military.",
    alternatives: ["Cedar's", "Tribe", "Local brands"],
    image: "/placeholder.svg?height=200&width=200&text=Sabra",
  },
  {
    id: "sodastream",
    name: "SodaStream",
    category: "Household",
    subcategory: "Kitchen Appliances",
    status: "Israeli",
    details:
      "SodaStream is an Israeli company that was previously headquartered in an illegal settlement in the West Bank. It was acquired by PepsiCo in 2018.",
    alternatives: ["Drinkmate", "Aarke", "Manual soda makers"],
    image: "/placeholder.svg?height=200&width=200&text=SodaStream",
  },
  {
    id: "ahava",
    name: "AHAVA",
    category: "Beauty",
    subcategory: "Skincare",
    status: "Israeli",
    details:
      "AHAVA is an Israeli cosmetics company that sources minerals from the Dead Sea in the occupied West Bank and has facilities in illegal settlements.",
    alternatives: ["Lush", "The Ordinary", "Local natural skincare brands"],
    image: "/placeholder.svg?height=200&width=200&text=AHAVA",
  },
  {
    id: "wix",
    name: "Wix",
    category: "Technology",
    subcategory: "Website Building",
    status: "Israeli",
    details: "Wix is an Israeli technology company that provides web development services.",
    alternatives: ["WordPress", "Squarespace", "Webflow"],
    image: "/placeholder.svg?height=200&width=200&text=Wix",
  },
  {
    id: "fiverr",
    name: "Fiverr",
    category: "Technology",
    subcategory: "Freelance Services",
    status: "Israeli",
    details: "Fiverr is an Israeli online marketplace for freelance services.",
    alternatives: ["Upwork", "Freelancer", "Local freelance networks"],
    image: "/placeholder.svg?height=200&width=200&text=Fiverr",
  },
  {
    id: "teva",
    name: "Teva Pharmaceuticals",
    category: "Healthcare",
    subcategory: "Pharmaceuticals",
    status: "Israeli",
    details:
      "Teva is an Israeli multinational pharmaceutical company and one of the largest generic drug manufacturers in the world.",
    alternatives: ["Consult with healthcare provider for generic alternatives"],
    image: "/placeholder.svg?height=200&width=200&text=Teva",
  },
  {
    id: "puma",
    name: "Puma",
    category: "Clothing",
    subcategory: "Sportswear",
    status: "Complicit",
    details:
      "Puma is the main sponsor of the Israel Football Association, which includes teams from illegal settlements in the occupied Palestinian territories.",
    alternatives: ["Adidas", "Nike", "New Balance", "Local brands"],
    image: "/placeholder.svg?height=200&width=200&text=Puma",
  },
  {
    id: "hp",
    name: "HP (Hewlett-Packard)",
    category: "Technology",
    subcategory: "Computers & Printers",
    status: "Complicit",
    details:
      "HP has provided technology and services to the Israeli military and for the ID card system used at Israeli military checkpoints.",
    alternatives: ["Dell", "Lenovo", "Epson", "Brother"],
    image: "/placeholder.svg?height=200&width=200&text=HP",
  },
  {
    id: "caterpillar",
    name: "Caterpillar",
    category: "Construction",
    subcategory: "Heavy Equipment",
    status: "Complicit",
    details:
      "Caterpillar provides bulldozers and other heavy equipment used in the demolition of Palestinian homes and construction of illegal settlements.",
    alternatives: ["Komatsu", "Hitachi", "Volvo"],
    image: "/placeholder.svg?height=200&width=200&text=Caterpillar",
  },
  {
    id: "airbnb",
    name: "Airbnb",
    category: "Travel",
    subcategory: "Accommodation",
    status: "Complicit",
    details:
      "Despite a brief policy change, Airbnb continues to list properties in illegal Israeli settlements in the occupied Palestinian territories.",
    alternatives: ["Booking.com (with caution)", "Local hotels", "Direct bookings"],
    image: "/placeholder.svg?height=200&width=200&text=Airbnb",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    category: "Food",
    subcategory: "Beverages",
    status: "Complicit",
    details:
      "Coca-Cola operates a bottling facility in an Israeli industrial zone and has been a target of boycott campaigns for its investments in Israel.",
    alternatives: ["Local beverage brands", "Water", "Homemade drinks"],
    image: "/placeholder.svg?height=200&width=200&text=Coca-Cola",
  },
  {
    id: "mcdonalds",
    name: "McDonald's",
    category: "Food",
    subcategory: "Fast Food",
    status: "Complicit",
    details:
      "McDonald's Israel has provided free meals to Israeli soldiers and has branches in illegal settlements. Note that McDonald's franchises vary by country.",
    alternatives: ["Local restaurants", "Independent fast food chains"],
    image: "/placeholder.svg?height=200&width=200&text=McDonald's",
  },
]

// Categories for filtering
const categories = [
  "All",
  "Food",
  "Beauty",
  "Technology",
  "Household",
  "Healthcare",
  "Clothing",
  "Travel",
  "Construction",
]

export default function VerifyProductsPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchResults, setSearchResults] = useState<typeof productDatabase>([])
  const [hasSearched, setHasSearched] = useState(false)

  // Handle search
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([])
      setHasSearched(false)
      return
    }

    const filteredResults = productDatabase.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = activeCategory === "All" || product.category === activeCategory
      return matchesSearch && matchesCategory
    })

    setSearchResults(filteredResults)
    setHasSearched(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <div className="bg-gradient-to-r from-palestine-black via-palestine-green to-palestine-red h-2"></div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-palestine-green">Verify Products</h1>
          <p className="mb-8">
            Use this tool to check if products or companies are Israeli-owned or complicit in the occupation of
            Palestine. This database is regularly updated with information from the Boycott, Divestment, and Sanctions
            (BDS) movement and other reliable sources.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4 text-palestine-green">Search for a Product or Company</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter product or company name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-palestine-green/30 focus-visible:ring-palestine-green"
                />
              </div>
              <div>
                <Button
                  onClick={handleSearch}
                  className="w-full md:w-auto bg-palestine-green hover:bg-palestine-green/90"
                >
                  Search
                </Button>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className={`h-8 ${
                      activeCategory === category
                        ? "bg-palestine-green text-white hover:bg-palestine-green/90"
                        : "border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Search Results */}
          {hasSearched && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4 text-palestine-green">Search Results</h2>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      className="border border-palestine-green/20 rounded-lg overflow-hidden hover:border-palestine-green transition-colors"
                    >
                      <div className="flex p-4">
                        <div className="relative w-24 h-24 flex-shrink-0">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold text-palestine-green">{product.name}</h3>
                            <Badge
                              className={`${
                                product.status === "Israeli"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-orange-100 text-orange-800"
                              }`}
                            >
                              {product.status}
                            </Badge>
                          </div>
                          <div className="text-xs text-gray-500 mb-2">
                            {product.category} &gt; {product.subcategory}
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{product.details}</p>
                          <div>
                            <span className="text-xs font-semibold">Alternatives: </span>
                            <span className="text-xs text-gray-600">{product.alternatives.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">No products found matching your search criteria.</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Try a different search term or category, or{" "}
                    <Link href="/contact" className="text-palestine-green hover:underline">
                      contact us
                    </Link>{" "}
                    to suggest adding a product to our database.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* About the Boycott */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-palestine-green">About the Boycott</h2>
            <div className="prose max-w-none">
              <p>
                The Boycott, Divestment, and Sanctions (BDS) movement is a Palestinian-led campaign promoting various
                forms of boycott against Israel until it meets its obligations under international law. The movement was
                inspired by the South African anti-apartheid movement.
              </p>
              <p>The BDS movement calls for:</p>
              <ul>
                <li>
                  <strong>Boycotts</strong> of Israeli companies and international companies involved in violations of
                  Palestinian rights
                </li>
                <li>
                  <strong>Divestment</strong> from companies complicit in the violation of Palestinian rights
                </li>
                <li>
                  <strong>Sanctions</strong> against Israel until it complies with international law
                </li>
              </ul>
              <p>
                Consumer boycotts target products and services from Israeli companies as well as international companies
                that contribute to Israel's violations of international law and Palestinian rights.
              </p>
              <p>
                By choosing to boycott these products, consumers can make a personal statement against the occupation
                and contribute to a larger movement for justice and human rights.
              </p>
            </div>
          </div>

          {/* Categories of Boycotted Products */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-palestine-green">Categories of Boycotted Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-palestine-green">Israeli Products</h3>
                <p className="text-sm text-gray-700 mb-4">
                  These are products from companies that are based in Israel or have significant Israeli ownership.
                  Boycotting these products directly impacts the Israeli economy.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Products labeled "Made in Israel"</li>
                  <li>• Products from Israeli-owned companies</li>
                  <li>• Products from companies with significant operations in Israel</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-palestine-green">Settlement Products</h3>
                <p className="text-sm text-gray-700 mb-4">
                  These are products produced in illegal Israeli settlements in the occupied Palestinian territories.
                  These settlements are considered illegal under international law.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Agricultural products from settlement farms</li>
                  <li>• Products manufactured in settlement industrial zones</li>
                  <li>• Services provided by businesses operating in settlements</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-palestine-green">Complicit International Companies</h3>
                <p className="text-sm text-gray-700 mb-4">
                  These are international companies that provide support for or profit from Israel's occupation and
                  violations of Palestinian rights.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Companies providing equipment or services to the Israeli military</li>
                  <li>• Companies operating in or supporting illegal settlements</li>
                  <li>• Companies exploiting Palestinian natural resources</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-palestine-green">Cultural and Academic Boycott</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Beyond consumer products, the BDS movement also calls for boycotting Israeli cultural and academic
                  institutions that are complicit in maintaining the occupation.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Israeli academic institutions with ties to the military</li>
                  <li>• Cultural events sponsored by the Israeli government</li>
                  <li>• Sports teams representing Israel in international competitions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Identify Israeli Products */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-palestine-green">How to Identify Israeli Products</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="prose max-w-none">
                <p>Here are some ways to identify products that may be subject to boycott:</p>
                <ul>
                  <li>
                    <strong>Barcode:</strong> Products made in Israel have barcodes that start with 729. However, not
                    all products with these barcodes are made in Israel, and not all Israeli products use these
                    barcodes.
                  </li>
                  <li>
                    <strong>Country of origin:</strong> Check the label for "Made in Israel" or "Product of Israel."
                    Note that some settlement products may be mislabeled as "Product of Israel" despite being produced
                    in occupied Palestinian territories.
                  </li>
                  <li>
                    <strong>Company research:</strong> Research the companies behind the products you buy. Many
                    companies try to obscure their connections to Israel or the occupation.
                  </li>
                  <li>
                    <strong>BDS lists:</strong> Consult updated lists from the BDS movement and other organizations that
                    track companies complicit in the occupation.
                  </li>
                  <li>
                    <strong>Mobile apps:</strong> Several apps have been developed to help consumers identify products
                    to boycott, though these may not be available in all regions.
                  </li>
                </ul>
                <p>
                  Remember that the goal of consumer boycotts is not just to avoid certain products but to raise
                  awareness about the occupation and pressure companies to end their complicity.
                </p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-palestine-green">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-palestine-green">Official BDS Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://bdsmovement.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-palestine-green hover:underline flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      BDS Movement Official Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        alert("This would link to the BDS consumer boycott guide")
                      }}
                      className="text-palestine-green hover:underline flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      Consumer Boycott Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        alert("This would link to the BDS company database")
                      }}
                      className="text-palestine-green hover:underline flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
                        <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
                        <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h14.8" />
                      </svg>
                      Complete Company Database
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-palestine-green">Mobile Apps</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        alert("This would link to the Boycott App")
                      }}
                      className="text-palestine-green hover:underline flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                        <path d="M12 18h.01" />
                      </svg>
                      Boycott App (Android & iOS)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        alert("This would link to the Barcode Scanner App")
                      }}
                      className="text-palestine-green hover:underline flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                        <line x1="8" x2="8" y1="7" y2="17" />
                        <line x1="12" x2="12" y1="7" y2="17" />
                        <line x1="16" x2="16" y1="7" y2="17" />
                      </svg>
                      Barcode Scanner for Boycott
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-gradient-to-r from-palestine-green via-palestine-red to-palestine-black h-2"></div>

      <SiteFooter />
    </div>
  )
}
