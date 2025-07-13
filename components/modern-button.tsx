"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type ReactNode, useEffect, useRef } from "react"

interface ModernButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  icon?: ReactNode
}

export function ModernButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  icon,
}: ModernButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      button.style.setProperty("--mouse-x", `${x}px`)
      button.style.setProperty("--mouse-y", `${y}px`)
    }

    button.addEventListener("mousemove", handleMouseMove)
    return () => button.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <Button
      ref={buttonRef}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        "after:absolute after:inset-0 after:rounded-full after:opacity-0 hover:after:opacity-100",
        "after:bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.1),transparent_50%)]",
        "after:transition-opacity after:duration-300",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>}
        {children}
      </span>
    </Button>
  )
}
