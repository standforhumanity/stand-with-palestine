"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-selector"

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  author: string
}

export default function BlogCard({ id, title, excerpt, image, date, author }: BlogCardProps) {
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden border-palestine-green/20 hover:border-palestine-green transition-colors">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="p-4">
        <div className="text-sm text-gray-500 mb-2">
          {date} • {author}
        </div>
        <h3 className="text-xl font-bold text-palestine-green">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-700 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/blog/${id}`}>
          <Button
            variant="outline"
            className="border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
          >
            {t("read_more")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
