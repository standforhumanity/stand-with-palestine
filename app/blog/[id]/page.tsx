"use client"

import { useLanguage } from "@/components/language-selector"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ShareButton from "@/components/share-button"

// Sample blog data
const blogPosts = {
  "humanitarian-crisis": {
    title: "The Ongoing Humanitarian Crisis in Gaza",
    content: `
      <p>The humanitarian situation in Gaza continues to deteriorate as essential supplies dwindle and infrastructure remains damaged. International aid organizations are struggling to meet the growing needs of the population.</p>
      
      <p>According to recent reports from the United Nations, over 80% of Gaza's population is now dependent on humanitarian assistance. The blockade has severely restricted the flow of essential goods, including food, medicine, and construction materials needed to rebuild damaged infrastructure.</p>
      
      <p>Water and sanitation systems have been particularly hard hit, with many facilities operating at reduced capacity or not at all. This has led to concerns about waterborne diseases and other public health issues.</p>
      
      <h2>Impact on Civilians</h2>
      
      <p>Civilians bear the brunt of this crisis. Families are struggling to meet basic needs, with many facing food insecurity and limited access to healthcare. Children are especially vulnerable, with malnutrition rates rising and educational opportunities severely limited.</p>
      
      <p>Healthcare facilities are overwhelmed and undersupplied. Doctors report shortages of essential medications and equipment, making it difficult to provide adequate care to patients.</p>
      
      <h2>International Response</h2>
      
      <p>The international community has called for increased humanitarian access to Gaza and an end to restrictions that impede the delivery of aid. Several countries have pledged additional funding for humanitarian assistance, but aid workers report that much more is needed to address the scale of the crisis.</p>
      
      <p>Humanitarian organizations continue to work under difficult conditions to provide assistance to those in need. Their efforts include distributing food and clean water, providing medical care, and supporting education and psychosocial services.</p>
      
      <h2>How You Can Help</h2>
      
      <p>There are several ways individuals can support humanitarian efforts in Gaza:</p>
      
      <ul>
        <li>Donate to reputable humanitarian organizations working in the region</li>
        <li>Raise awareness about the situation through social media and community events</li>
        <li>Advocate for policies that support humanitarian access and address the root causes of the crisis</li>
        <li>Support Palestinian businesses and artisans</li>
      </ul>
      
      <p>Every contribution, no matter how small, can make a difference in the lives of those affected by this ongoing crisis.</p>
    `,
    image: "/placeholder.svg?height=500&width=1000&text=Humanitarian+Crisis",
    date: "April 5, 2025",
    author: "Sarah Ahmed",
    authorBio:
      "Sarah Ahmed is a humanitarian worker with over 10 years of experience in conflict zones. She has worked with several international organizations providing aid in Gaza and the West Bank.",
  },
  "medical-shortages": {
    title: "Medical Shortages Affecting Palestinian Hospitals",
    content: `
      <p>Hospitals across Palestine are facing critical shortages of medical supplies, equipment, and medications. Healthcare workers are doing their best with limited resources to treat patients.</p>
      
      <p>The ongoing restrictions on imports have severely impacted the healthcare system, with many essential medications and specialized equipment unavailable or in critically short supply. Surgeries are being postponed, treatments interrupted, and in some cases, patients are being turned away due to lack of resources.</p>
      
      <h2>Critical Shortages</h2>
      
      <p>Among the most critically needed items are:</p>
      
      <ul>
        <li>Anesthetics and pain management medications</li>
        <li>Antibiotics and other essential drugs</li>
        <li>Surgical supplies and equipment</li>
        <li>Diagnostic equipment and spare parts</li>
        <li>Dialysis supplies</li>
        <li>Cancer treatments</li>
      </ul>
      
      <p>These shortages are particularly devastating for patients with chronic conditions who require ongoing treatment, such as cancer patients, those with kidney disease, and individuals with diabetes.</p>
      
      <h2>Impact on Healthcare Workers</h2>
      
      <p>Healthcare professionals are working under extreme pressure, often with inadequate resources. Many report working double shifts due to staff shortages, and the psychological toll of being unable to provide adequate care to patients is significant.</p>
      
      <p>Dr. Khalid Rahman, a surgeon at Al-Shifa Hospital, describes the situation: "We are forced to make impossible choices every day. We have to prioritize which patients receive treatment based on the limited supplies we have, not based on medical need. It's heartbreaking."</p>
      
      <h2>International Medical Aid</h2>
      
      <p>Several international organizations are working to address these shortages by sending medical supplies and equipment. However, getting these items into Palestine remains challenging due to restrictions and bureaucratic obstacles.</p>
      
      <p>Medical aid organizations report that even when supplies are approved for entry, delays at checkpoints can result in temperature-sensitive medications being rendered unusable.</p>
      
      <h2>How You Can Help</h2>
      
      <p>There are several ways to support Palestinian healthcare:</p>
      
      <ul>
        <li>Donate to medical aid organizations specifically working to provide supplies to Palestinian hospitals</li>
        <li>Support advocacy efforts calling for unrestricted access for medical supplies</li>
        <li>Raise awareness about the healthcare crisis among medical professionals in your community</li>
        <li>If you are a healthcare professional, consider volunteering with medical missions to the region</li>
      </ul>
    `,
    image: "/placeholder.svg?height=500&width=1000&text=Medical+Shortages",
    date: "April 2, 2025",
    author: "Dr. Mohammed Khalil",
    authorBio:
      "Dr. Mohammed Khalil is a physician who has worked in hospitals throughout Gaza and the West Bank. He currently divides his time between clinical practice and advocacy for improved healthcare access.",
  },
  "education-disruption": {
    title: "Education Disrupted for Palestinian Children",
    content: `
      <p>Thousands of Palestinian children are unable to attend school due to the ongoing conflict. Educational facilities have been damaged, and many children are dealing with trauma that affects their ability to learn.</p>
      
      <p>According to UNICEF, over 60% of schools in Gaza have been damaged or destroyed in recent conflicts. Even those that remain standing often lack basic facilities such as clean water, functioning toilets, and electricity. Many schools are operating in shifts to accommodate displaced students, resulting in shortened school days and reduced instructional time.</p>
      
      <h2>Psychological Impact</h2>
      
      <p>Beyond the physical disruption to education, the psychological impact of the conflict on children is profound. Teachers report that many students exhibit symptoms of trauma, including difficulty concentrating, heightened anxiety, and behavioral issues. These psychological challenges further impede learning and development.</p>
      
      <p>Child psychologist Nadia Hamdan explains: "Children cannot learn effectively when they are in a constant state of stress or fear. Their brains are focused on survival, not on absorbing new information or developing skills."</p>
      
      <h2>Remote Learning Challenges</h2>
      
      <p>Attempts to implement remote learning have faced significant obstacles. Frequent power outages, limited internet access, and a shortage of devices make online education inaccessible for many families. Additionally, parents struggling with their own trauma and economic hardship often lack the capacity to support their children's learning at home.</p>
      
      <h2>Educational Initiatives</h2>
      
      <p>Despite these challenges, several initiatives are working to support education for Palestinian children:</p>
      
      <ul>
        <li>Community-based learning centers that provide safe spaces for children to study</li>
        <li>Psychosocial support programs integrated into educational activities</li>
        <li>Teacher training on trauma-informed education</li>
        <li>Distribution of educational materials that can be used without electricity or internet</li>
        <li>Scholarship programs for older students</li>
      </ul>
      
      <h2>Long-term Consequences</h2>
      
      <p>Education experts warn that the disruption to education will have long-lasting consequences. Children who miss significant periods of schooling often struggle to catch up, leading to higher dropout rates and reduced economic opportunities later in life.</p>
      
      <p>"We're not just talking about a temporary setback," says education specialist Omar Farid. "We're potentially looking at a generation of children whose educational and economic futures are being compromised."</p>
      
      <h2>How You Can Help</h2>
      
      <p>There are several ways to support education for Palestinian children:</p>
      
      <ul>
        <li>Donate to organizations that provide educational support in Palestine</li>
        <li>Support initiatives that provide school supplies and learning materials</li>
        <li>Advocate for the protection of educational facilities during conflict</li>
        <li>If you are an educator, consider volunteering your expertise or participating in teacher exchange programs</li>
        <li>Support advocacy for children's right to education in conflict zones</li>
      </ul>
      
      <p>Every child deserves access to quality education, regardless of where they live or the circumstances they face. By supporting educational initiatives, we can help ensure that Palestinian children have the opportunity to learn, grow, and build a better future.</p>
    `,
    image: "/placeholder.svg?height=500&width=1000&text=Education+Disruption",
    date: "March 28, 2025",
    author: "Layla Nasser",
    authorBio:
      "Layla Nasser is an education specialist who has worked with various NGOs to develop and implement educational programs for children in conflict zones throughout the Middle East.",
  },
}

export default function BlogPostPage() {
  const { t } = useLanguage()
  const params = useParams()
  const postId = params.id as string

  // Get the blog post data or redirect if not found
  const post = blogPosts[postId as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link href="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

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
            <Link href="/" className="text-sm font-medium hover:text-palestine-green">
              {t("home")}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-palestine-green">
              {t("about")}
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-palestine-green text-palestine-green">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-palestine-green">
              {t("contact")}
            </Link>
          </nav>
        </div>
      </header>

      <div className="bg-gradient-to-r from-palestine-black via-palestine-green to-palestine-red h-2"></div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/blog" className="text-palestine-green hover:underline flex items-center gap-2">
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
                className="lucide lucide-arrow-left"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-palestine-green">{post.title}</h1>

          <div className="flex items-center gap-4 text-gray-600 mb-8">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
            <div className="ml-auto">
              <ShareButton />
            </div>
          </div>

          <div className="relative w-full h-[400px] mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
          </div>

          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-2">About the Author</h3>
            <p className="text-gray-700">{post.authorBio}</p>
          </div>

          <div className="mt-12 flex justify-between items-center">
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
              >
                Back to All Articles
              </Button>
            </Link>
            <ShareButton />
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
