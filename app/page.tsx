"use client"
import { useLanguage } from "@/components/language-selector"
import OrganizationCard from "@/components/organization-card"
import FilterButtons from "@/components/filter-buttons"
import PaymentMethodFilter from "@/components/payment-method-filter"
import OtherWaysToHelp from "@/components/other-ways-to-help"
import HeroBanner from "@/components/hero-banner"
import BlogSection from "@/components/blog-section"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useState } from "react"

// Sample organization data
const organizations = [
  {
    id: "pcrf",
    name: "Palestine Children's Relief Fund",
    logo: "/placeholder.svg?height=70&width=140&text=PCRF",
    categories: ["Humanitarian", "Medical", "Children"],
    description:
      "PCRF provides life-saving medical care to injured and sick children. They send medical missions, provide treatment abroad, and deliver humanitarian aid to children and their families.",
    paymentMethods: ["IBAN", "Credit Card", "PayPal"],
    donateId: "pcrf-123456",
  },
  {
    id: "map",
    name: "Medical Aid for Palestinians",
    logo: "/placeholder.svg?height=70&width=140&text=MAP",
    categories: ["Medical", "Humanitarian"],
    description:
      "MAP works for the health and dignity of Palestinians living under occupation and as refugees. They provide immediate medical aid to those in need, while also developing local capacity and skills.",
    paymentMethods: ["Credit Card", "PayPal", "Bank Transfer"],
    donateId: "map-789012",
  },
  {
    id: "unrwa",
    name: "UNRWA",
    logo: "/placeholder.svg?height=70&width=140&text=UNRWA",
    categories: ["Humanitarian", "Refugees", "Food & Water"],
    description:
      "The United Nations Relief and Works Agency provides assistance and protection for Palestine refugees. They deliver essential services including education, healthcare, and emergency assistance.",
    paymentMethods: ["IBAN", "Credit Card"],
    donateId: "unrwa-345678",
  },
  {
    id: "prcs",
    name: "Palestine Red Crescent Society",
    logo: "/placeholder.svg?height=70&width=140&text=PRCS",
    categories: ["Medical", "Humanitarian", "Emergency"],
    description:
      "PRCS provides emergency medical services, disaster management, and humanitarian assistance. Their teams work on the ground to provide immediate relief to those affected by the crisis.",
    paymentMethods: ["IBAN", "Credit Card", "PayPal"],
    donateId: "prcs-901234",
  },
  {
    id: "anera",
    name: "Anera",
    logo: "/placeholder.svg?height=70&width=140&text=Anera",
    categories: ["Humanitarian", "Non-government", "Food & Water"],
    description:
      "Anera delivers humanitarian and development assistance to the people of Palestine. They provide emergency relief, healthcare, education and sustainable development projects.",
    paymentMethods: ["Credit Card", "PayPal", "Bitcoin"],
    donateId: "anera-567890",
  },
  {
    id: "btselem",
    name: "B'Tselem",
    logo: "/placeholder.svg?height=70&width=140&text=B'Tselem",
    categories: ["Human Rights", "Non-government"],
    description:
      "B'Tselem is an Israeli human rights organization that documents human rights violations in the Palestinian territories and works to end the occupation.",
    paymentMethods: ["Credit Card", "PayPal"],
    donateId: "btselem-123789",
  },
]

export default function Home() {
  const { t } = useLanguage()
  const [filteredOrgs, setFilteredOrgs] = useState(organizations)
  const [activeCategories, setActiveCategories] = useState<string[]>([])
  const [activePaymentMethods, setActivePaymentMethods] = useState<string[]>([])

  // Filter organizations based on selected categories and payment methods
  const filterOrganizations = () => {
    return organizations.filter((org) => {
      const matchesCategory =
        activeCategories.length === 0 || activeCategories.some((category) => org.categories.includes(category))

      const matchesPayment =
        activePaymentMethods.length === 0 || activePaymentMethods.some((method) => org.paymentMethods.includes(method))

      return matchesCategory && matchesPayment
    })
  }

  // Update filters
  const handleCategoryChange = (categories: string[]) => {
    setActiveCategories(categories)
    setFilteredOrgs(filterOrganizations())
  }

  const handlePaymentMethodChange = (methods: string[]) => {
    setActivePaymentMethods(methods)
    setFilteredOrgs(filterOrganizations())
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <div className="bg-gradient-to-r from-palestine-black via-palestine-green to-palestine-red h-2"></div>

      {/* Hero Banner with Images/Video */}
      <HeroBanner />

      <main className="container mx-auto px-4 py-8">
        <section className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-palestine-green">{t("support_palestine")}</h2>
          <p className="text-lg mb-4">{t("donate_to_charities")}</p>
          <p className="text-lg mb-8">{t("spread_word")}</p>
        </section>

        <section className="mb-12">
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">To</h3>
            <FilterButtons
              filters={[
                "Medical",
                "Humanitarian",
                "Non-government",
                "Refugees",
                "Human Rights",
                "Children",
                "Food & Water",
              ]}
              onFilterChange={handleCategoryChange}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Via</h3>
            <PaymentMethodFilter
              methods={["IBAN", "Credit Card", "PayPal", "Patreon", "Bitcoin", "Bank Transfer"]}
              onMethodChange={handlePaymentMethodChange}
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredOrgs.length > 0 ? (
            filteredOrgs.map((org) => (
              <OrganizationCard
                key={org.id}
                id={org.id}
                name={org.name}
                logo={org.logo}
                categories={org.categories}
                description={org.description}
                paymentMethods={org.paymentMethods}
                donateId={org.donateId}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-lg text-gray-500">
                No organizations match your selected filters. Please try different criteria.
              </p>
            </div>
          )}
        </section>

        {/* Blog Section */}
        <BlogSection />

        {/* Other Ways to Help Section */}
        <OtherWaysToHelp />
      </main>

      <div className="bg-gradient-to-r from-palestine-green via-palestine-red to-palestine-black h-2"></div>

      <SiteFooter />
    </div>
  )
}
