"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { type ReactNode, useEffect, useRef } from "react"

interface AnimatedCardProps {
  children?: ReactNode
  title?: string
  description?: string
  icon?: ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, title, description, icon, className, delay = 0 }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card || typeof window === "undefined") return

    // GSAP animation
    const gsap = (window as any).gsap
    if (!gsap) return

    gsap.fromTo(
      card,
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
        rotateX: 10,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [delay])

  return (
    <Card
      ref={cardRef}
      className={cn(
        "morphing-card group cursor-pointer perspective-1000",
        "hover:shadow-2xl transition-all duration-500",
        className,
      )}
    >
      {(title || description || icon) && (
        <CardHeader className="text-center pb-4">
          {icon && (
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <div className="text-white text-2xl">{icon}</div>
            </div>
          )}
          {title && (
            <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </CardTitle>
          )}
          {description && (
            <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
    </Card>
  )
}
