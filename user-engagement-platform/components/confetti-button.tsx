"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"
import type { ComponentProps } from "react"

export function ConfettiButton({ onClick, children, ...props }: ComponentProps<typeof Button>) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    confetti({
      particleCount: 50,
      spread: 60,
      origin: {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      },
      colors: ["#10b981", "#f97316", "#3b82f6"],
    })

    onClick?.(e)
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
