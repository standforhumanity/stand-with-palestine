"use client"

import { useLanguage } from "@/components/language-selector"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

// Sample news categories
const categories = ["All", "Humanitarian", "Politics", "Media", "International", "Resistance", "Culture"]

// Sample news data
const newsArticles = [
  {
    id: "gaza-humanitarian-crisis",
    title: "Humanitarian Crisis in Gaza Worsens as Aid Deliveries Blocked",
    excerpt:
      "The humanitarian situation in Gaza continues to deteriorate as essential supplies are blocked from entering the territory. UN agencies warn of imminent famine if aid deliveries are not resumed immediately.",
    content: `
      <p>The humanitarian situation in Gaza has reached catastrophic levels as essential supplies continue to be blocked from entering the territory. United Nations agencies have issued urgent warnings about the imminent risk of famine if aid deliveries are not resumed immediately.</p>
      
      <p>According to the latest reports from the World Food Programme (WFP), over 90% of Gaza's population is now facing severe food insecurity. The blockade has severely restricted the flow of food, medicine, and fuel needed to power hospitals and water treatment facilities.</p>
      
      <p>"We are witnessing a humanitarian catastrophe unfolding before our eyes," said the WFP Director in a statement released yesterday. "Without immediate access for humanitarian aid, we will see widespread starvation in a matter of weeks."</p>
      
      <h2>Critical Shortages</h2>
      
      <p>Hospitals are reporting critical shortages of medical supplies, including anesthetics, antibiotics, and surgical equipment. Many healthcare facilities are operating at minimal capacity, relying on generators that are running out of fuel.</p>
      
      <p>Water and sanitation systems have also been severely impacted, with most water treatment plants non-operational due to damage or lack of fuel. This has led to concerns about waterborne diseases spreading among the population, particularly among children and the elderly.</p>
      
      <h2>International Response</h2>
      
      <p>The international community has called for immediate and unhindered access for humanitarian aid to Gaza. Several countries have pledged additional funding for relief efforts, but aid workers report that the main obstacle is not funding but access.</p>
      
      <p>Humanitarian organizations continue to call for a ceasefire and the opening of all crossing points to allow aid to reach those in need. They emphasize that the current situation constitutes a violation of international humanitarian law, which requires all parties to a conflict to allow and facilitate rapid and unimpeded passage of humanitarian relief.</p>
      
      <h2>Impact on Civilians</h2>
      
      <p>The blockade is having devastating effects on civilians, with children being particularly vulnerable. UNICEF reports that cases of malnutrition among children have increased by 230% since the beginning of the crisis.</p>
      
      <p>Families are resorting to desperate measures to survive, including reducing meal sizes, skipping meals entirely, and consuming less nutritious food. Many are relying on contaminated water sources, increasing the risk of disease outbreaks.</p>
      
      <p>As the situation continues to deteriorate, humanitarian organizations are warning that without immediate action, the death toll from hunger and disease could soon exceed that from direct violence.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Gaza+Humanitarian+Crisis",
    date: "April 10, 2025",
    author: "Sarah Ahmed",
    category: "Humanitarian",
    featured: true,
  },
  {
    id: "un-resolution-palestine",
    title: "UN General Assembly Passes Resolution Supporting Palestinian Rights",
    excerpt:
      "The United Nations General Assembly has passed a resolution affirming Palestinian rights and calling for an end to the occupation. The resolution received overwhelming support despite opposition from some Western countries.",
    content: `
      <p>The United Nations General Assembly has passed a resolution affirming Palestinian rights and calling for an end to the occupation. The resolution, which was adopted with 143 votes in favor, 9 against, and 27 abstentions, represents a significant show of international support for the Palestinian cause.</p>
      
      <p>The resolution calls for an immediate ceasefire, unhindered humanitarian access to Gaza, and the implementation of previous UN resolutions regarding Palestinian rights and statehood. It also condemns violations of international humanitarian law and calls for accountability for all violations.</p>
      
      <h2>International Support</h2>
      
      <p>The overwhelming support for the resolution demonstrates the growing international consensus on the need to address the Palestinian situation. Representatives from countries across Africa, Asia, and Latin America spoke strongly in favor of the resolution, emphasizing the importance of upholding international law and human rights.</p>
      
      <p>"This resolution sends a clear message that the international community stands with the Palestinian people in their struggle for justice and self-determination," said the representative of South Africa during the debate.</p>
      
      <h2>Opposition and Abstentions</h2>
      
      <p>The resolution faced opposition from a small number of countries, including the United States and Israel. The US representative argued that the resolution was "one-sided" and did not adequately address security concerns.</p>
      
      <p>Several European countries abstained from the vote, citing concerns about specific language in the resolution. However, many European nations that traditionally align with the US on such matters voted in favor, signaling a potential shift in international dynamics.</p>
      
      <h2>Implications</h2>
      
      <p>While General Assembly resolutions are not legally binding, they carry significant political weight and reflect the views of the international community. The resolution increases diplomatic pressure and could influence future negotiations and peace processes.</p>
      
      <p>Palestinian representatives welcomed the resolution as an important step toward justice. "This vote demonstrates that the world recognizes our rights and the illegality of the occupation," said the Palestinian Ambassador to the UN.</p>
      
      <p>Human rights organizations have also praised the resolution, calling it a necessary affirmation of international law in the face of ongoing violations. They emphasize that the next step must be implementation and accountability.</p>
      
      <p>As international pressure continues to mount, observers are watching closely to see how this resolution might impact diplomatic efforts to address the Palestinian situation and whether it will lead to concrete changes on the ground.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=UN+Resolution",
    date: "April 8, 2025",
    author: "Mohammed Khalil",
    category: "Politics",
  },
  {
    id: "media-coverage-bias",
    title: "Study Reveals Systematic Bias in Western Media Coverage of Palestine",
    excerpt:
      "A comprehensive study by media watchdog organizations has documented systematic bias in how Western media outlets cover the Palestinian situation. The research analyzed thousands of articles and broadcasts over a five-year period.",
    content: `
      <p>A comprehensive study by media watchdog organizations has documented systematic bias in how Western media outlets cover the Palestinian situation. The research, conducted by the Media Monitoring Project in collaboration with several academic institutions, analyzed over 10,000 articles and broadcasts from major Western news outlets over a five-year period.</p>
      
      <p>The study found significant disparities in how Palestinian and Israeli casualties are reported, with Israeli casualties receiving more prominent coverage, humanizing details, and follow-up stories. Palestinian casualties, by contrast, were often reported in aggregate numbers and with less contextual information.</p>
      
      <h2>Language and Framing</h2>
      
      <p>The research also documented consistent patterns in language and framing. Israeli actions were frequently described using passive voice or justified as "responses" to Palestinian actions, while Palestinian actions were more likely to be described using active voice and terms associated with aggression.</p>
      
      <p>"The language used to describe the same actions differs dramatically depending on who is performing them," explained Dr. Amina Rashid, one of the lead researchers. "For example, when Israelis are killed, the headlines use words like 'murdered' or 'slaughtered,' but when Palestinians are killed, we see terms like 'died' or 'were killed in clashes.'"</p>
      
      <h2>Source Selection</h2>
      
      <p>Another key finding was the disparity in source selection. Israeli official sources were quoted approximately three times more frequently than Palestinian official sources. Israeli civilians were interviewed about their experiences at twice the rate of Palestinian civilians, despite Palestinians suffering higher casualty rates.</p>
      
      <p>The study also found that Western media outlets rarely consulted Palestinian academic experts or human rights organizations, instead relying heavily on Western or Israeli analysts to provide context and interpretation.</p>
      
      <h2>Historical Context</h2>
      
      <p>The research highlighted a consistent lack of historical context in reporting on the Palestinian situation. Key factors such as the occupation, settlement expansion, and the blockade of Gaza were mentioned in less than 30% of articles about violence in the region.</p>
      
      <p>"Without this context, audiences cannot fully understand the events they're reading about," said media analyst James Wilson. "It's like starting a story in the middle and expecting readers to understand the plot."</p>
      
      <h2>Response from Media Organizations</h2>
      
      <p>Several media organizations have responded to the study, with some acknowledging the need for more balanced coverage. The Association of Journalists for Ethical Reporting has called for newsrooms to review their guidelines and provide additional training for reporters covering the region.</p>
      
      <p>However, other outlets have defended their coverage, arguing that they face unique challenges in reporting from the region, including access restrictions and security concerns.</p>
      
      <p>The researchers behind the study emphasize that their goal is not to accuse journalists of deliberate bias but to highlight systemic patterns that may be unconscious. They recommend specific changes to improve coverage, including more diverse source selection, consistent language standards, and greater inclusion of historical context.</p>
      
      <p>As media literacy continues to grow in importance, studies like this one provide valuable tools for audiences to critically evaluate the news they consume and seek out more balanced sources of information.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Media+Coverage+Bias",
    date: "April 5, 2025",
    author: "Layla Nasser",
    category: "Media",
  },
  {
    id: "international-solidarity-movement",
    title: "Global Solidarity Movement for Palestine Gains Momentum",
    excerpt:
      "The international solidarity movement for Palestine is growing rapidly, with demonstrations in major cities worldwide and increasing support from labor unions, student groups, and civil society organizations.",
    content: `
      <p>The international solidarity movement for Palestine is experiencing unprecedented growth, with massive demonstrations taking place in major cities worldwide and increasing support from labor unions, student groups, and civil society organizations.</p>
      
      <p>Last weekend saw coordinated protests in over 100 cities across six continents, with particularly large turnouts in London, Paris, New York, Johannesburg, and Sydney. Organizers estimate that more than two million people participated globally, making it one of the largest coordinated international protests in recent history.</p>
      
      <h2>Diverse Coalition</h2>
      
      <p>What distinguishes the current solidarity movement is the diverse coalition it has assembled. Traditional peace activists have been joined by labor unions, faith groups, student organizations, and professional associations, creating a broad-based movement that crosses demographic and political lines.</p>
      
      <p>"We're seeing unprecedented unity across different sectors of society," said Omar Barghouti, co-founder of the Boycott, Divestment, and Sanctions (BDS) movement. "People who have never been politically active before are taking to the streets because they recognize the fundamental injustice of the situation."</p>
      
      <h2>Campus Activism</h2>
      
      <p>University campuses have become particularly active centers of the solidarity movement. Student groups at over 200 universities in the United States alone have established encampments and organized teach-ins, demanding that their institutions divest from companies profiting from the occupation.</p>
      
      <p>At several prestigious universities, students have successfully pressured their administrations to review investment policies and consider divestment options. Faculty members have also become increasingly vocal, with thousands signing open letters supporting Palestinian rights and calling for academic boycotts of Israeli institutions complicit in the occupation.</p>
      
      <h2>Labor Movement Support</h2>
      
      <p>The labor movement has emerged as a powerful ally in the solidarity campaign. Dock workers in several countries have refused to unload Israeli cargo, while teachers' unions, healthcare workers, and public sector employees have passed resolutions supporting Palestinian rights and calling for an end to military aid to Israel.</p>
      
      <p>"Working people around the world recognize the struggle of Palestinians as part of the broader fight for justice and human dignity," said Maria Gonzalez, president of the International Workers' Alliance. "The labor movement has a long history of international solidarity, and we're seeing that tradition continue today."</p>
      
      <h2>Digital Activism</h2>
      
      <p>Social media has played a crucial role in amplifying Palestinian voices and circumventing traditional media gatekeepers. Hashtags related to Palestine regularly trend globally, while citizen journalists provide real-time documentation of events on the ground.</p>
      
      <p>Digital campaigns have also targeted corporations complicit in the occupation, leading to several high-profile companies reconsidering their operations in Israel and the occupied territories. Consumer boycotts organized through social media have had measurable impacts on sales of targeted products.</p>
      
      <h2>Political Impact</h2>
      
      <p>The growing solidarity movement is beginning to have political impacts in several countries. Elected officials who have traditionally avoided criticism of Israel are facing increased pressure from constituents to take stronger positions on Palestinian rights.</p>
      
      <p>In several European countries, parliaments have held votes on recognizing Palestinian statehood, while in the United States, progressive lawmakers have introduced legislation to condition military aid to Israel on human rights compliance.</p>
      
      <p>As the movement continues to grow, organizers emphasize that their goal is not just to express solidarity but to create concrete political change. "Demonstrations are important for raising awareness," said activist Leila Khaled, "but the real measure of our success will be policy changes that end complicity in the occupation and support Palestinian self-determination."</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Global+Solidarity",
    date: "April 3, 2025",
    author: "Ahmed Mahmoud",
    category: "International",
  },
  {
    id: "palestinian-cultural-resistance",
    title: "Palestinian Artists Use Culture as a Form of Resistance",
    excerpt:
      "Palestinian artists are using music, film, literature, and visual arts as forms of cultural resistance. Their work preserves Palestinian identity and brings attention to the struggle for justice and freedom.",
    content: `
      <p>Palestinian artists are increasingly turning to music, film, literature, and visual arts as powerful forms of cultural resistance. In the face of occupation and displacement, these creative expressions serve to preserve Palestinian identity, document lived experiences, and bring international attention to the struggle for justice and freedom.</p>
      
      <p>From the vibrant street art adorning the separation wall to poetry that has been passed down through generations, cultural resistance has become an integral part of the Palestinian liberation movement.</p>
      
      <h2>Visual Arts</h2>
      
      <p>Visual artists are creating powerful works that document the Palestinian experience and challenge dominant narratives. The separation wall has become a canvas for both Palestinian and international artists, transforming a symbol of oppression into a platform for resistance.</p>
      
      <p>"Art allows us to reclaim our narrative and show the world our humanity," explains Dalia Hamoudi, a visual artist from Gaza whose installations using rubble from destroyed buildings have been exhibited internationally. "When our voices are silenced in political forums, our art speaks for us."</p>
      
      <h2>Music and Performance</h2>
      
      <p>Palestinian musicians are blending traditional forms with contemporary styles to create music that resonates both locally and globally. Hip-hop has emerged as a particularly powerful medium, with artists like DAM and Shadia Mansour using rap to address the realities of occupation and discrimination.</p>
      
      <p>Traditional dabke dance troupes continue to perform at cultural events worldwide, preserving cultural heritage while also serving as ambassadors for the Palestinian cause. "Every performance is an act of resistance," says Ibrahim Musa, director of the Al-Quds Dabke Troupe. "We're showing the world that despite everything, our culture survives and thrives."</p>
      
      <h2>Literature and Poetry</h2>
      
      <p>Palestinian literature has gained increasing international recognition, with authors like Susan Abulhawa and Ghassan Kanafani being translated into dozens of languages. Poetry remains especially significant, building on a rich tradition that includes renowned poets like Mahmoud Darwish and Fadwa Tuqan.</p>
      
      <p>"Poetry is in our blood," says contemporary poet Rafeef Ziadah, whose spoken word performances have millions of views online. "It's how we've preserved our stories through generations of displacement and exile."</p>
      
      <h2>Film and Digital Media</h2>
      
      <p>Palestinian filmmakers are creating documentaries and feature films that provide nuanced portrayals of life under occupation. Directors like Elia Suleiman and Hany Abu-Assad have received international acclaim, with their films screening at prestigious festivals and winning major awards.</p>
      
      <p>Digital media has opened new avenues for cultural resistance, allowing Palestinians to share their stories directly with global audiences. YouTube channels, podcasts, and social media accounts dedicated to Palestinian culture have amassed significant followings.</p>
      
      <h2>Cultural Preservation</h2>
      
      <p>Beyond creating new works, many artists and cultural institutions are focused on preserving Palestinian heritage that is at risk of being erased. The Palestinian Museum in Birzeit documents and displays cultural artifacts, while digital archives preserve oral histories, traditional music, and folklore.</p>
      
      <p>"Our cultural heritage is constantly under threat," explains Dr. Adel Yahya, director of the Palestinian Heritage Center. "When villages are demolished, it's not just homes that are lost but centuries of cultural knowledge and tradition."</p>
      
      <h2>International Impact</h2>
      
      <p>Palestinian cultural resistance has resonated internationally, inspiring solidarity and raising awareness about the Palestinian cause. Collaborations between Palestinian artists and their international counterparts have produced powerful works that reach diverse audiences.</p>
      
      <p>Cultural boycott campaigns, modeled after the cultural boycott of apartheid South Africa, have also gained traction, with many international artists refusing to perform in Israel as part of the broader Boycott, Divestment, and Sanctions movement.</p>
      
      <p>As Palestinian artist Sliman Mansour notes, "Art cannot liberate land, but it can liberate minds." Through their creative work, Palestinian artists continue to assert their identity, document their history, and envision a future of freedom and justice.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Cultural+Resistance",
    date: "March 30, 2025",
    author: "Fatima Abbas",
    category: "Culture",
  },
  {
    id: "palestinian-resistance-history",
    title: "The Evolution of Palestinian Resistance: From Armed Struggle to Popular Resistance",
    excerpt:
      "The Palestinian resistance movement has evolved significantly over decades, shifting from primarily armed struggle to diverse forms of popular resistance including nonviolent protest, boycotts, and international advocacy.",
    content: `
      <p>The Palestinian resistance movement has undergone significant evolution over the decades, transforming from primarily armed struggle in its early phases to a diverse range of resistance strategies that include nonviolent protest, economic boycotts, legal challenges, and international advocacy.</p>
      
      <p>This evolution reflects both changing global political contexts and strategic reassessments within the Palestinian liberation movement itself. Understanding this history provides important context for current resistance efforts and possible future directions.</p>
      
      <h2>Early Armed Resistance (1960s-1980s)</h2>
      
      <p>Following the Nakba (catastrophe) of 1948 and the further occupation of Palestinian territories in 1967, armed resistance emerged as the dominant strategy. The Palestine Liberation Organization (PLO) and various factions conducted armed operations, viewing military resistance as the only viable path to liberation in an era when many colonized peoples were engaging in armed struggles for independence.</p>
      
      <p>"The international community had failed to uphold Palestinian rights through diplomatic channels," explains historian Dr. Rashid Khalidi. "In this context, armed resistance was seen as the only option for a people facing military occupation and dispossession."</p>
      
      <h2>The First Intifada (1987-1993)</h2>
      
      <p>The First Intifada marked a significant shift toward mass popular resistance. While not entirely nonviolent, it was characterized by widespread civil disobedience, general strikes, tax resistance, and stone-throwing rather than armed operations.</p>
      
      <p>This uprising demonstrated the power of popular mobilization and brought international attention to the Palestinian cause. It also led to the Madrid Conference and eventually the Oslo Accords, though many Palestinians view these diplomatic outcomes as having failed to deliver justice or end the occupation.</p>
      
      <h2>Post-Oslo Period and Second Intifada</h2>
      
      <p>The failure of the Oslo process and continued expansion of settlements led to the Second Intifada (2000-2005), which was more militarized than the first. However, this period also saw the growth of nonviolent resistance strategies, particularly in villages affected by the construction of the separation wall.</p>
      
      <p>Weekly protests in villages like Bil'in and Ni'lin brought together Palestinians, Israeli activists, and international supporters in nonviolent demonstrations against land confiscation. These protests, while focused on specific local issues, represented a strategic shift toward resistance methods that could garner international support.</p>
      
      <h2>Rise of the BDS Movement</h2>
      
      <p>In 2005, Palestinian civil society organizations launched the Boycott, Divestment, and Sanctions (BDS) movement, explicitly modeling their approach on the anti-apartheid movement in South Africa. This strategy focuses on applying economic, cultural, and academic pressure rather than direct confrontation.</p>
      
      <p>"BDS represents a strategic choice to engage global civil society in the Palestinian struggle," says Omar Barghouti, co-founder of the movement. "It's a rights-based approach that appeals to international law and universal principles of human rights."</p>
      
      <p>The movement has gained significant traction internationally, with numerous companies, artists, and academic institutions joining various forms of boycott or divestment.</p>
      
      <h2>Legal Resistance</h2>
      
      <p>Another evolving form of resistance involves legal challenges in international forums. The Palestinian Authority's accession to the International Criminal Court (ICC) and various UN bodies has opened new avenues for challenging the occupation through legal mechanisms.</p>
      
      <p>Palestinian and international human rights organizations have documented violations of international law and filed cases in various courts, including domestic courts in third countries under universal jurisdiction principles.</p>
      
      <h2>Cultural and Academic Resistance</h2>
      
      <p>Cultural resistance has become increasingly prominent, with Palestinian artists, writers, filmmakers, and academics using their work to preserve Palestinian identity and challenge dominant narratives. Universities in Palestine have become important centers of knowledge production and resistance to intellectual colonization.</p>
      
      <p>"Sumud" (steadfastness) – the determination to remain on the land despite hardship – has also emerged as a form of everyday resistance. Farmers continuing to cultivate their land despite restrictions, families rebuilding homes after demolitions, and students persisting in their education despite checkpoints all embody this principle.</p>
      
      <h2>Current Landscape</h2>
      
      <p>Today's Palestinian resistance landscape is diverse and multifaceted. Different strategies coexist, sometimes in tension with each other but often complementary. Armed resistance continues primarily in Gaza, while popular resistance, BDS campaigns, legal challenges, and cultural resistance are prominent in the West Bank and among Palestinian citizens of Israel and the diaspora.</p>
      
      <p>This diversity reflects both tactical considerations and philosophical differences within the Palestinian movement. Some argue that a diversity of resistance methods strengthens the overall struggle, while others advocate for more unified strategic direction.</p>
      
      <p>As the occupation continues and diplomatic solutions appear increasingly remote, Palestinians continue to adapt their resistance strategies to changing circumstances while maintaining their fundamental demands for freedom, justice, and equality.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Palestinian+Resistance",
    date: "March 25, 2025",
    author: "Khalid Rahman",
    category: "Resistance",
  },
]

export default function NewsPage() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter news based on selected category
  const filteredNews =
    activeCategory === "All" ? newsArticles : newsArticles.filter((article) => article.category === activeCategory)

  // Get featured article
  const featuredArticle = newsArticles.find((article) => article.featured)

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <div className="bg-gradient-to-r from-palestine-black via-palestine-green to-palestine-red h-2"></div>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-palestine-green">Latest News</h1>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <div className="relative h-[400px] w-full">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <Badge className="mb-2 bg-palestine-red">{featuredArticle.category}</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{featuredArticle.title}</h2>
                  <p className="text-sm md:text-base mb-4">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">{featuredArticle.date}</span>
                    <span className="text-sm">By {featuredArticle.author}</span>
                  </div>
                  <Link href={`/news/${featuredArticle.id}`} className="mt-4 inline-block">
                    <Button className="bg-palestine-green hover:bg-palestine-green/90">Read Full Story</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-palestine-green">Filter by Category</h2>
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredNews
            .filter((article) => !article.featured)
            .map((article) => (
              <div
                key={article.id}
                className="border border-palestine-green/20 rounded-lg overflow-hidden hover:border-palestine-green transition-colors"
              >
                <div className="relative h-48 w-full">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <Badge className="mb-2 bg-gray-100 text-palestine-green border-palestine-green/30">
                    {article.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 text-palestine-green">{article.title}</h3>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {article.date} • {article.author}
                    </div>
                    <Link href={`/news/${article.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-palestine-green text-center">Stay Informed</h2>
          <p className="text-center mb-6">
            Subscribe to our newsletter to receive the latest news and updates about the situation in Palestine.
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

      <SiteFooter />
    </div>
  )
}
