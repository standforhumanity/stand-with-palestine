"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-selector"

interface OrganizationCardProps {
  id: string
  name: string
  logo: string
  categories: string[]
  description: string
  paymentMethods: string[]
  donateId: string
  donateUrl?: string
}

export default function OrganizationCard({
  id,
  name,
  logo,
  categories,
  description,
  paymentMethods,
  donateId,
  donateUrl = "#",
}: OrganizationCardProps) {
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden border-palestine-green/20 hover:border-palestine-green transition-colors">
      <CardHeader className="p-6 pb-0">
        <div className="flex items-center justify-center h-24 mb-4">
          <Image
            src={`/placeholder.svg?height=70&width=140&text=${encodeURIComponent(name)}`}
            alt={`${name} logo`}
            width={140}
            height={70}
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-center text-palestine-green">{name}</h3>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-1 mb-4">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="bg-gray-100 border-palestine-green/30 text-palestine-green"
            >
              {category}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-gray-700">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-1 w-full">
          {paymentMethods.map((method) => (
            <Badge key={method} variant="secondary" className="bg-gray-100 text-gray-700">
              {method}
            </Badge>
          ))}
        </div>
        <Link href={`/donate/${id}`} className="w-full">
          <Button className="w-full bg-palestine-green hover:bg-palestine-green/90">{t("donate")}</Button>
        </Link>
        <p className="text-xs text-gray-500 w-full text-center">EDRPOU: {donateId}</p>
      </CardFooter>
    </Card>
  )
}
