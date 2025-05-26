"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-selector"

export default function HeroBanner() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/placeholder.svg?height=600&width=1200&text=Support+Palestine",
      title: t("support_palestine"),
      subtitle: "Stand with Palestine in their time of need",
    },
    {
      image: "/placeholder.svg?height=600&width=1200&text=Humanitarian+Aid",
      title: "Humanitarian Crisis",
      subtitle: "Help provide essential supplies to those affected",
    },
    {
      image: "/placeholder.svg?height=600&width=1200&text=Medical+Support",
      title: "Medical Support",
      subtitle: "Support medical teams working in difficult conditions",
    },
  ]

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">{slide.title}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">{slide.subtitle}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-palestine-green hover:bg-palestine-green/90">
                {t("donate")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"} transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Video play button (for demonstration) */}
      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-4 backdrop-blur-sm transition-colors"
        onClick={() => alert("This would play a video about the humanitarian situation")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </button>
    </div>
  )
}
