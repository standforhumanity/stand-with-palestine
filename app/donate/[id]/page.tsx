"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-selector"
import SiteHeader from "@/components/site-header"

// Sample organizations data (in a real app, this would come from a database)
const organizations = [
  {
    id: "pcrf",
    name: "Palestine Children's Relief Fund",
    logo: "/placeholder.svg?height=70&width=140&text=PCRF",
    categories: ["Humanitarian", "Medical", "Children"],
    description:
      "PCRF provides life-saving medical care to injured and sick children. They send medical missions, provide treatment abroad, and deliver humanitarian aid to children and their families.",
    longDescription: `The Palestine Children's Relief Fund (PCRF) is a non-political, non-profit organization dedicated to healing the wounds of war and occupation in the Middle East. PCRF was established in 1991 by concerned people in the U.S. to address the medical and humanitarian crisis facing Palestinian youths in the Middle East.

    PCRF has since expanded to provide free medical care, surgery, and treatment to tens of thousands of children suffering from physical deformities, injuries, burns, and illnesses. They identify children who cannot be adequately treated in their homeland and arrange for them to receive the necessary care abroad.
    
    In addition to direct medical care, PCRF also:
    - Sends volunteer medical teams to the Middle East to provide treatment and training
    - Builds pediatric medical facilities
    - Trains local doctors and nurses
    - Provides essential medicines and supplies
    - Implements humanitarian projects to improve the lives of children and their communities`,
    impact: "Helped over 10,000 children receive medical treatment in the past year.",
    transparency: "95% of donations go directly to programs.",
    donateUrl: "https://www.pcrf.net/donate",
    websiteUrl: "https://www.pcrf.net",
    donationMethods: [
      {
        method: "Credit Card",
        description: "Secure online donation through their website",
        link: "https://www.pcrf.net/donate",
      },
      {
        method: "Bank Transfer",
        description: "Direct bank transfer to PCRF account",
        details: "Account Name: Palestine Children's Relief Fund\nBank: Example Bank\nIBAN: XX00 0000 0000 0000",
      },
      {
        method: "Check",
        description: "Mail a check to their headquarters",
        details: "Palestine Children's Relief Fund\nP.O. Box 1926\nKent, OH 44240",
      },
    ],
    projects: [
      {
        name: "Medical Missions",
        description: "Volunteer medical teams providing specialized surgeries",
        image: "/placeholder.svg?height=200&width=300&text=Medical+Missions",
      },
      {
        name: "Gaza Children's Fund",
        description: "Emergency relief for children in Gaza",
        image: "/placeholder.svg?height=200&width=300&text=Gaza+Children's+Fund",
      },
      {
        name: "Pediatric Cancer Department",
        description: "Building specialized cancer treatment facilities",
        image: "/placeholder.svg?height=200&width=300&text=Cancer+Department",
      },
    ],
  },
  {
    id: "map",
    name: "Medical Aid for Palestinians",
    logo: "/placeholder.svg?height=70&width=140&text=MAP",
    categories: ["Medical", "Humanitarian"],
    description:
      "MAP works for the health and dignity of Palestinians living under occupation and as refugees. They provide immediate medical aid to those in need, while also developing local capacity and skills.",
    longDescription: `Medical Aid for Palestinians (MAP) works for the health and dignity of Palestinians living under occupation and as refugees. MAP delivers health and medical care to those worst affected by conflict, occupation and displacement.

    Founded in 1984, MAP is one of the largest and most established British charities working in the Palestinian territories. They work in partnership with local health providers and hospitals, community groups and other non-governmental organizations to address a wide range of health issues and challenges faced by the Palestinian people.
    
    MAP's work focuses on:
    - Emergency response during crises
    - Primary healthcare development
    - Women and children's health
    - Mental health and psychosocial support
    - Disability rehabilitation
    - Capacity building of local health workers`,
    impact: "Supported 40 hospitals and clinics across Palestine.",
    transparency: "90% of donations go directly to programs.",
    donateUrl: "https://www.map.org.uk/donate/donate",
    websiteUrl: "https://www.map.org.uk",
    donationMethods: [
      {
        method: "Online Donation",
        description: "Secure online donation through their website",
        link: "https://www.map.org.uk/donate/donate",
      },
      {
        method: "Regular Giving",
        description: "Set up a monthly donation to provide sustained support",
        link: "https://www.map.org.uk/donate/regular-giving",
      },
      {
        method: "Phone",
        description: "Donate by phone",
        details: "Call +44 (0)20 7226 4114",
      },
    ],
    projects: [
      {
        name: "Emergency Response",
        description: "Providing essential medical supplies during crises",
        image: "/placeholder.svg?height=200&width=300&text=Emergency+Response",
      },
      {
        name: "Women's Health",
        description: "Supporting maternal and women's health services",
        image: "/placeholder.svg?height=200&width=300&text=Women's+Health",
      },
      {
        name: "Mental Health",
        description: "Psychological support for trauma survivors",
        image: "/placeholder.svg?height=200&width=300&text=Mental+Health",
      },
    ],
  },
  {
    id: "unrwa",
    name: "UNRWA",
    logo: "/placeholder.svg?height=70&width=140&text=UNRWA",
    categories: ["Humanitarian", "Education", "Food & Water"],
    description:
      "The United Nations Relief and Works Agency provides assistance and protection for Palestine refugees. They deliver essential services including education, healthcare, and emergency assistance.",
    longDescription: `The United Nations Relief and Works Agency for Palestine Refugees (UNRWA) was established by the UN General Assembly in 1949 following the 1948 Arab-Israeli conflict. UNRWA is mandated to provide assistance and protection to registered Palestine refugees in its five fields of operation: Jordan, Lebanon, Syria, the West Bank (including East Jerusalem), and the Gaza Strip.

    UNRWA services encompass education, healthcare, relief and social services, camp infrastructure and improvement, microfinance, and emergency assistance, including in times of armed conflict. The Agency currently serves over 5.7 million Palestine refugees.
    
    UNRWA is funded almost entirely by voluntary contributions from UN Member States, with some support from the Regular Budget of the United Nations.`,
    impact: "Provides education to over 500,000 Palestinian children.",
    transparency: "UN-audited financial reports available publicly.",
    donateUrl: "https://www.unrwa.org/donate",
    websiteUrl: "https://www.unrwa.org",
    donationMethods: [
      {
        method: "Online Donation",
        description: "Donate through the UNRWA website",
        link: "https://www.unrwa.org/donate",
      },
      {
        method: "Bank Transfer",
        description: "Direct bank transfer to UNRWA account",
        details: "Account details available on their website",
      },
      {
        method: "Partner Organizations",
        description: "Donate through UNRWA national committees and representative offices",
        link: "https://www.unrwa.org/how-you-can-help/how-donate",
      },
    ],
    projects: [
      {
        name: "Education Program",
        description: "Providing quality education to refugee children",
        image: "/placeholder.svg?height=200&width=300&text=Education+Program",
      },
      {
        name: "Health Program",
        description: "Primary healthcare services for refugees",
        image: "/placeholder.svg?height=200&width=300&text=Health+Program",
      },
      {
        name: "Emergency Response",
        description: "Humanitarian assistance during crises",
        image: "/placeholder.svg?height=200&width=300&text=Emergency+Response",
      },
    ],
  },
  {
    id: "prcs",
    name: "Palestine Red Crescent Society",
    logo: "/placeholder.svg?height=70&width=140&text=PRCS",
    categories: ["Medical", "Emergency Relief"],
    description:
      "PRCS provides emergency medical services, disaster management, and humanitarian assistance. Their teams work on the ground to provide immediate relief to those affected by the crisis.",
    longDescription: `The Palestine Red Crescent Society (PRCS) is a national humanitarian organization that is part of the International Red Cross and Red Crescent Movement. Established in 1968, PRCS operates in the Palestinian territories and Palestinian refugee communities in the diaspora.

    PRCS provides emergency medical services, disaster management, and humanitarian assistance. Their emergency medical technicians, paramedics, and volunteers work on the front lines to provide immediate relief to those affected by conflict and crises.
    
    The organization operates:
    - A network of ambulances and emergency response teams
    - Hospitals and medical centers
    - Blood banks
    - Disaster management units
    - Psychosocial support programs
    - Youth and volunteer programs`,
    impact: "Operates 100+ ambulances and emergency response teams.",
    transparency: "International Red Cross/Red Crescent oversight.",
    donateUrl: "https://www.palestinercs.org/en/donation",
    websiteUrl: "https://www.palestinercs.org",
    donationMethods: [
      {
        method: "Online Donation",
        description: "Donate through their website",
        link: "https://www.palestinercs.org/en/donation",
      },
      {
        method: "Bank Transfer",
        description: "Direct bank transfer to PRCS account",
        details:
          "Bank: Arab Bank\nAccount Name: Palestine Red Crescent Society\nAccount Number: Example Account Number\nSwift Code: ARABPS22",
      },
      {
        method: "International Partners",
        description: "Donate through partner Red Cross/Red Crescent societies",
        link: "https://www.palestinercs.org/en/donation",
      },
    ],
    projects: [
      {
        name: "Emergency Medical Services",
        description: "Ambulance services and emergency response",
        image: "/placeholder.svg?height=200&width=300&text=Emergency+Medical",
      },
      {
        name: "Disaster Management",
        description: "Preparedness and response to disasters",
        image: "/placeholder.svg?height=200&width=300&text=Disaster+Management",
      },
      {
        name: "Psychosocial Support",
        description: "Mental health support for trauma survivors",
        image: "/placeholder.svg?height=200&width=300&text=Psychosocial+Support",
      },
    ],
  },
  {
    id: "anera",
    name: "Anera",
    logo: "/placeholder.svg?height=70&width=140&text=Anera",
    categories: ["Humanitarian", "Food & Water", "Education"],
    description:
      "Anera delivers humanitarian and development assistance to the people of Palestine. They provide emergency relief, healthcare, education and sustainable development projects.",
    longDescription: `American Near East Refugee Aid (Anera) is a non-profit organization that provides humanitarian and development assistance to refugees and vulnerable communities in Palestine, Lebanon, and Jordan. Founded in 1968 in response to the 1967 Arab-Israeli War, Anera has been working for over five decades to help people in need.

    Anera's work spans multiple sectors:
    - Emergency relief during crises
    - Healthcare and medical donations
    - Education and youth development
    - Water, sanitation, and infrastructure
    - Agriculture and food security
    - Community and economic development
    
    Anera works closely with local partners and communities to ensure that their programs are responsive to local needs and sustainable in the long term.`,
    impact: "Delivered over $100 million in aid to Palestinians.",
    transparency: "Platinum rating on GuideStar for transparency.",
    donateUrl: "https://www.anera.org/donate/",
    websiteUrl: "https://www.anera.org",
    donationMethods: [
      {
        method: "Online Donation",
        description: "One-time or monthly donations through their website",
        link: "https://www.anera.org/donate/",
      },
      {
        method: "Stock Gifts",
        description: "Donate appreciated securities",
        details: "Contact Anera for transfer instructions",
      },
      {
        method: "Planned Giving",
        description: "Include Anera in your estate planning",
        link: "https://www.anera.org/ways-to-give/",
      },
    ],
    projects: [
      {
        name: "Water Projects",
        description: "Improving access to clean water",
        image: "/placeholder.svg?height=200&width=300&text=Water+Projects",
      },
      {
        name: "Medical Aid",
        description: "Delivering essential medicines and supplies",
        image: "/placeholder.svg?height=200&width=300&text=Medical+Aid",
      },
      {
        name: "Early Childhood Development",
        description: "Supporting education for young children",
        image: "/placeholder.svg?height=200&width=300&text=Early+Childhood",
      },
    ],
  },
  {
    id: "btselem",
    name: "B'Tselem",
    logo: "/placeholder.svg?height=70&width=140&text=B'Tselem",
    categories: ["Human Rights"],
    description:
      "B'Tselem is an Israeli human rights organization that documents human rights violations in the Palestinian territories and works to end the occupation.",
    longDescription: `B'Tselem - The Israeli Information Center for Human Rights in the Occupied Territories was established in 1989 to document human rights violations in the West Bank (including East Jerusalem) and the Gaza Strip, and to advocate for policy changes to end the Israeli occupation.

    The organization's name, B'Tselem (בצלם), is the Hebrew biblical phrase "in the image of," reflecting the Jewish and universal moral principle that all human beings are created in the image of God and are therefore entitled to respect and protection.
    
    B'Tselem's work includes:
    - Documenting human rights violations through field research
    - Publishing reports and analyses
    - Video documentation through their camera project
    - Advocacy at national and international levels
    - Public education and awareness-raising`,
    impact: "Published over 100 reports on human rights violations.",
    transparency: "Financial reports available on website.",
    donateUrl: "https://www.btselem.org/donate",
    websiteUrl: "https://www.btselem.org",
    donationMethods: [
      {
        method: "Online Donation",
        description: "Donate through their website",
        link: "https://www.btselem.org/donate",
      },
      {
        method: "Bank Transfer",
        description: "Direct bank transfer to B'Tselem account",
        details: "Contact B'Tselem for bank details",
      },
      {
        method: "Tax-Deductible Donations",
        description: "For US taxpayers through the New Israel Fund",
        link: "https://www.btselem.org/donate",
      },
    ],
    projects: [
      {
        name: "Documentation Project",
        description: "Field research and documentation of human rights violations",
        image: "/placeholder.svg?height=200&width=300&text=Documentation",
      },
      {
        name: "Camera Project",
        description: "Providing cameras to Palestinians to document violations",
        image: "/placeholder.svg?height=200&width=300&text=Camera+Project",
      },
      {
        name: "Advocacy",
        description: "International advocacy for human rights",
        image: "/placeholder.svg?height=200&width=300&text=Advocacy",
      },
    ],
  },
]

export default function DonationDetailPage() {
  const { t } = useLanguage()
  const params = useParams()
  const router = useRouter()
  const [organization, setOrganization] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    const org = organizations.find((org) => org.id === params.id)
    if (org) {
      setOrganization(org)
    } else {
      // Redirect to donate page if organization not found
      router.push("/donate")
    }
    setLoading(false)
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <SiteHeader />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (!organization) {
    return null // This should not render as we redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <div className="bg-gradient-to-r from-palestine-black via-palestine-green to-palestine-red h-2"></div>

      <main className="container mx-auto px-4 py-12">
        {/* Organization Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-xs w-full">
              <div className="flex items-center justify-center h-32 mb-6">
                <Image
                  src={organization.logo || "/placeholder.svg"}
                  alt={`${organization.name} logo`}
                  width={180}
                  height={90}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-wrap gap-1 mb-4 justify-center">
                {organization.categories.map((category: string) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="bg-gray-100 border-palestine-green/30 text-palestine-green"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-2">
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
                    className="text-palestine-green mt-1"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <p className="text-sm text-gray-600">{organization.impact}</p>
                </div>
                <div className="flex items-start gap-2">
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
                    className="text-palestine-green mt-1"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                  <p className="text-sm text-gray-600">{organization.transparency}</p>
                </div>
              </div>
              <div className="space-y-3">
                <a href={organization.donateUrl} target="_blank" rel="noopener noreferrer" className="w-full block">
                  <Button className="w-full bg-palestine-green hover:bg-palestine-green/90">
                    {t("donate")} {t("now")}
                  </Button>
                </a>
                <a href={organization.websiteUrl} target="_blank" rel="noopener noreferrer" className="w-full block">
                  <Button variant="outline" className="w-full border-palestine-green text-palestine-green">
                    {t("visit")} {t("website")}
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-palestine-green">{organization.name}</h1>
            <div className="prose max-w-none">
              <p className="text-lg mb-6">{organization.description}</p>
              {organization.longDescription.split("\n\n").map((paragraph: string, index: number) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="donate" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="donate">How to Donate</TabsTrigger>
            <TabsTrigger value="projects">Current Projects</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>

          {/* Donation Methods Tab */}
          <TabsContent value="donate" className="p-6 border rounded-md mt-2">
            <h2 className="text-2xl font-bold mb-6 text-palestine-green">Donation Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organization.donationMethods.map((method: any, index: number) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-palestine-green">{method.method}</h3>
                  <p className="text-sm text-gray-700 mb-4">{method.description}</p>
                  {method.details && (
                    <div className="bg-white p-3 rounded border text-xs font-mono mb-4 whitespace-pre-line">
                      {method.details}
                    </div>
                  )}
                  {method.link && (
                    <a href={method.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-palestine-green hover:bg-palestine-green/90">
                        Donate via this method
                      </Button>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="p-6 border rounded-md mt-2">
            <h2 className="text-2xl font-bold mb-6 text-palestine-green">Current Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {organization.projects.map((project: any, index: number) => (
                <div key={index} className="bg-white border rounded-lg overflow-hidden">
                  <div className="h-48 relative">
                    <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-palestine-green">{project.name}</h3>
                    <p className="text-sm text-gray-700">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="p-6 border rounded-md mt-2">
            <h2 className="text-2xl font-bold mb-6 text-palestine-green">Our Impact</h2>
            <div className="prose max-w-none">
              <p>
                {organization.name} has been making a significant impact in Palestine through various humanitarian
                efforts. Here are some key achievements:
              </p>
              <ul>
                <li>{organization.impact}</li>
                <li>Provided essential services to communities in need across Palestine.</li>
                <li>Worked with local partners to ensure sustainable development.</li>
                <li>Advocated for the rights and dignity of Palestinians at international forums.</li>
              </ul>
              <p>
                Your donation helps sustain these efforts and expand our reach to more communities in need. With your
                support, we can continue to make a difference in the lives of Palestinians.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-palestine-green">Transparency</h3>
                <p>{organization.transparency}</p>
                <p>
                  We are committed to transparency and accountability in all our operations. Detailed financial reports
                  and program evaluations are available on our website.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="bg-palestine-green/10 p-8 rounded-lg text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-palestine-green">Make a Difference Today</h2>
          <p className="text-lg mb-6">
            Your support can help provide essential aid, medical care, and hope to Palestinians in need. Every donation,
            no matter the size, makes a real impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={organization.donateUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-palestine-green hover:bg-palestine-green/90">
                {t("donate")} {t("now")}
              </Button>
            </a>
            <Link href="/donate">
              <Button size="lg" variant="outline" className="border-palestine-green text-palestine-green">
                See Other Organizations
              </Button>
            </Link>
          </div>
        </div>

        {/* Related Organizations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-palestine-green">Other Organizations You May Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {organizations
              .filter((org: any) => org.id !== organization.id)
              .slice(0, 3)
              .map((org: any) => (
                <div
                  key={org.id}
                  className="border rounded-lg overflow-hidden hover:border-palestine-green transition-colors"
                >
                  <div className="p-4 flex items-center justify-center h-24">
                    <Image
                      src={org.logo || "/placeholder.svg"}
                      alt={`${org.name} logo`}
                      width={140}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4 border-t">
                    <h3 className="text-lg font-semibold mb-2 text-palestine-green">{org.name}</h3>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">{org.description}</p>
                    <Link href={`/donate/${org.id}`} className="w-full block">
                      <Button variant="outline" className="w-full border-palestine-green text-palestine-green">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
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
    </div>
  )
}
