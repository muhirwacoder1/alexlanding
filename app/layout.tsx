import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "../styles/animations.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NEEM - Saving Limbs. Restoring Lives.",
  description: "Smart insole technology preventing diabetic amputations",
  generator: 'v0.dev',
  icons: {
    icon: '/logo neem.png',
    apple: '/logo neem.png',
    shortcut: '/logo neem.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
