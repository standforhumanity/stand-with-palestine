"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PaymentMethodFilterProps {
  methods: string[]
  onMethodChange?: (activeMethods: string[]) => void
}

export default function PaymentMethodFilter({ methods, onMethodChange }: PaymentMethodFilterProps) {
  const [activePaymentMethods, setActivePaymentMethods] = useState<string[]>([])

  const togglePaymentMethod = (method: string) => {
    const newMethods = activePaymentMethods.includes(method)
      ? activePaymentMethods.filter((m) => m !== method)
      : [...activePaymentMethods, method]

    setActivePaymentMethods(newMethods)

    // Call the callback if provided
    if (onMethodChange) {
      onMethodChange(newMethods)
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {methods.map((method) => (
        <Button
          key={method}
          variant={activePaymentMethods.includes(method) ? "default" : "outline"}
          size="sm"
          onClick={() => togglePaymentMethod(method)}
          className={`h-8 ${
            activePaymentMethods.includes(method)
              ? "bg-palestine-green text-white hover:bg-palestine-green/90"
              : "border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white"
          }`}
        >
          {method}
        </Button>
      ))}
    </div>
  )
}
