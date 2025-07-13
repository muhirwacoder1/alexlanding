"use client"

import { useEffect, useRef } from "react"

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const gsap = (window as any).gsap
    if (!gsap) return

    const elements = containerRef.current?.children
    if (!elements) return

    Array.from(elements).forEach((element, index) => {
      gsap.to(element, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-5, 5)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.2,
      })
    })
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-15"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-600 rounded-full opacity-25"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-400 rounded-full opacity-20"></div>
      <div className="absolute top-60 left-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-30"></div>
      <div className="absolute top-80 right-1/3 w-4 h-4 bg-blue-600 rounded-full opacity-15"></div>
    </div>
  )
}
