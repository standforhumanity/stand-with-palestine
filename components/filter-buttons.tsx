"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface FilterButtonsProps {
  filters: string[]
  onFilterChange?: (activeFilters: string[]) => void
}

export default function FilterButtons({ filters, onFilterChange }: FilterButtonsProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    const newFilters = activeFilters.includes(filter)
      ? activeFilters.filter((f) => f !== filter)
      : [...activeFilters, filter]

    setActiveFilters(newFilters)

    // Call the callback if provided
    if (onFilterChange) {
      onFilterChange(newFilters)
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilters.includes(filter) ? "default" : "outline"}
          size="sm"
          onClick={() => toggleFilter(filter)}
          className={`h-8 ${
            activeFilters.includes(filter)
              ? "bg-palestine-green text-white hover:bg-palestine-green/90"
              : "border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
          }`}
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}
