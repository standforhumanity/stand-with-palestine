"use client"

import { useState, createContext, useContext, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define available languages
export const languages = [
  { code: "EN", name: "English", flag: "🇬🇧" },
  { code: "AR", name: "Arabic", flag: "🇵🇸" },
  { code: "FR", name: "French", flag: "🇫🇷" },
  { code: "ES", name: "Spanish", flag: "🇪🇸" },
  { code: "DE", name: "German", flag: "🇩🇪" },
  { code: "IT", name: "Italian", flag: "🇮🇹" },
  { code: "TR", name: "Turkish", flag: "🇹🇷" },
]

// Create language context
type LanguageContextType = {
  currentLanguage: (typeof languages)[0]
  changeLanguage: (language: (typeof languages)[0]) => void
  t: (key: string) => string
}

const defaultLanguage = languages[0]

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: defaultLanguage,
  changeLanguage: () => {},
  t: (key) => key,
})

// Translation data
const translations: Record<string, Record<string, string>> = {
  EN: {
    home: "Home",
    about: "About",
    contact: "Contact",
    donate: "Donate",
    share: "Share",
    support_palestine: "Support Palestine in the face of humanitarian crisis",
    donate_to_charities: "Donate to verified humanitarian charities providing aid to Palestinians",
    spread_word: "Spread the word by sharing our posts",
    other_ways_to_help: "Other Ways to Help",
    dont_be_silent: "Don't be silent",
    boycott: "Boycott companies supporting occupation",
    resist_propaganda: "Resist propaganda",
    join_advocacy: "Join advocacy groups",
    latest_news: "Latest News & Updates",
    read_more: "Read More",
  },
  AR: {
    home: "الرئيسية",
    about: "حول",
    contact: "اتصل بنا",
    donate: "تبرع",
    share: "شارك",
    support_palestine: "دعم فلسطين في مواجهة الأزمة الإنسانية",
    donate_to_charities: "تبرع للجمعيات الخيرية الإنسانية المعتمدة التي تقدم المساعدة للفلسطينيين",
    spread_word: "انشر الكلمة من خلال مشاركة منشوراتنا",
    other_ways_to_help: "طرق أخرى للمساعدة",
    dont_be_silent: "لا تصمت",
    boycott: "مقاطعة الشركات الداعمة للاحتلال",
    resist_propaganda: "مقاومة الدعاية",
    join_advocacy: "انضم إلى مجموعات المناصرة",
    latest_news: "أحدث الأخبار والتحديثات",
    read_more: "اقرأ المزيد",
  },
  FR: {
    home: "Accueil",
    about: "À propos",
    contact: "Contact",
    donate: "Faire un don",
    share: "Partager",
    support_palestine: "Soutenir la Palestine face à la crise humanitaire",
    donate_to_charities: "Faites un don à des organisations humanitaires vérifiées qui aident les Palestiniens",
    spread_word: "Faites passer le mot en partageant nos publications",
    other_ways_to_help: "Autres façons d'aider",
    dont_be_silent: "Ne restez pas silencieux",
    boycott: "Boycottez les entreprises soutenant l'occupation",
    resist_propaganda: "Résistez à la propagande",
    join_advocacy: "Rejoignez des groupes de défense",
    latest_news: "Dernières nouvelles et mises à jour",
    read_more: "Lire la suite",
  },
  ES: {
    home: "Inicio",
    about: "Acerca de",
    contact: "Contacto",
    donate: "Donar",
    share: "Compartir",
    support_palestine: "Apoyar a Palestina frente a la crisis humanitaria",
    donate_to_charities: "Done a organizaciones humanitarias verificadas que brindan ayuda a los palestinos",
    spread_word: "Difunda la palabra compartiendo nuestras publicaciones",
    other_ways_to_help: "Otras formas de ayudar",
    dont_be_silent: "No guardes silencio",
    boycott: "Boicotear empresas que apoyan la ocupación",
    resist_propaganda: "Resistir la propaganda",
    join_advocacy: "Únete a grupos de defensa",
    latest_news: "Últimas noticias y actualizaciones",
    read_more: "Leer más",
  },
  DE: {
    home: "Startseite",
    about: "Über uns",
    contact: "Kontakt",
    donate: "Spenden",
    share: "Teilen",
    support_palestine: "Unterstützen Sie Palästina angesichts der humanitären Krise",
    donate_to_charities: "Spenden Sie an verifizierte humanitäre Organisationen, die Palästinensern helfen",
    spread_word: "Verbreiten Sie die Nachricht, indem Sie unsere Beiträge teilen",
    other_ways_to_help: "Andere Möglichkeiten zu helfen",
    dont_be_silent: "Schweigen Sie nicht",
    boycott: "Boykottieren Sie Unternehmen, die die Besatzung unterstützen",
    resist_propaganda: "Widerstehen Sie der Propaganda",
    join_advocacy: "Schließen Sie sich Interessengruppen an",
    latest_news: "Neueste Nachrichten und Updates",
    read_more: "Weiterlesen",
  },
  IT: {
    home: "Home",
    about: "Chi siamo",
    contact: "Contatti",
    donate: "Dona",
    share: "Condividi",
    support_palestine: "Sostieni la Palestina di fronte alla crisi umanitaria",
    donate_to_charities: "Dona a organizzazioni umanitarie verificate che forniscono aiuto ai palestinesi",
    spread_word: "Diffondi la voce condividendo i nostri post",
    other_ways_to_help: "Altri modi per aiutare",
    dont_be_silent: "Non restare in silenzio",
    boycott: "Boicotta le aziende che sostengono l'occupazione",
    resist_propaganda: "Resisti alla propaganda",
    join_advocacy: "Unisciti a gruppi di difesa",
    latest_news: "Ultime notizie e aggiornamenti",
    read_more: "Leggi di più",
  },
  TR: {
    home: "Ana Sayfa",
    about: "Hakkında",
    contact: "İletişim",
    donate: "Bağış Yap",
    share: "Paylaş",
    support_palestine: "İnsani kriz karşısında Filistin'i destekleyin",
    donate_to_charities: "Filistinlilere yardım sağlayan doğrulanmış insani yardım kuruluşlarına bağış yapın",
    spread_word: "Gönderilerimizi paylaşarak haberi yayın",
    other_ways_to_help: "Yardım etmenin diğer yolları",
    dont_be_silent: "Sessiz kalmayın",
    boycott: "İşgali destekleyen şirketleri boykot edin",
    resist_propaganda: "Propagandaya direnin",
    join_advocacy: "Savunuculuk gruplarına katılın",
    latest_news: "Son Haberler ve Güncellemeler",
    read_more: "Daha Fazla Oku",
  },
}

// Language provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage)

  const changeLanguage = (language: (typeof languages)[0]) => {
    setCurrentLanguage(language)
    // Set HTML dir attribute for RTL languages
    if (language.code === "AR") {
      document.documentElement.dir = "rtl"
    } else {
      document.documentElement.dir = "ltr"
    }
  }

  // Translation function
  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations["EN"][key] || key
  }

  return <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>{children}</LanguageContext.Provider>
}

// Hook to use language context
export function useLanguage() {
  return useContext(LanguageContext)
}

// Language selector component
export default function LanguageSelector() {
  const { currentLanguage, changeLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1 border-palestine-green text-palestine-green">
          <span className="mr-1">{currentLanguage.flag}</span>
          {currentLanguage.code}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} onClick={() => changeLanguage(language)} className="cursor-pointer">
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
