"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useLanguage } from "@/components/language-selector"

export default function OtherWaysToHelp() {
  const { t } = useLanguage()

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-palestine-green text-center">{t("other_ways_to_help")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-palestine-green/20">
          <CardHeader className="pb-2">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-palestine-green">
              <span className="text-2xl">🗣</span> {t("dont_be_silent")}
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Add banners to your OSS projects and profiles.</li>
              <li>• Protest against the occupation in your city.</li>
              <li>• Demand sanctions and support for Palestine from your leaders.</li>
              <li>• Reach out to Palestinian friends, offer help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-palestine-green/20">
          <CardHeader className="pb-2">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-palestine-green">
              <span className="text-2xl">❌</span> {t("boycott")}
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Cancel subscriptions to companies supporting the occupation.</li>
              <li>• Stop giving your money to companies that fund violence.</li>
              <li>• Research companies' positions before purchasing.</li>
              <li>• Support ethical alternatives and Palestinian businesses.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-palestine-green/20">
          <CardHeader className="pb-2">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-palestine-green">
              <span className="text-2xl">📰</span> {t("resist_propaganda")}
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Educate yourself and others on the Palestinian situation.</li>
              <li>• Read reputable news sources and first-hand accounts.</li>
              <li>• Check out common misbeliefs and misconceptions.</li>
              <li>• Share accurate information on social media.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-palestine-green/20">
          <CardHeader className="pb-2">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-palestine-green">
              <span className="text-2xl">⚔</span> {t("join_advocacy")}
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Join local and international advocacy organizations.</li>
              <li>• Participate in peaceful demonstrations.</li>
              <li>• Support legal efforts to protect Palestinian rights.</li>
              <li>• Volunteer with humanitarian organizations.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
