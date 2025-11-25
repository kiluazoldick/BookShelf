import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700", "900"] })

export const metadata: Metadata = {
  title: "BookShelf - Premium E-Books",
  description: "Discover and purchase premium e-books across all genres. Instant digital delivery.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" style={{ "--font-serif": "'Merriweather', serif" } as React.CSSProperties}>
      <body className={`${geist.className} antialiased`} style={{ backgroundColor: "#faf8f3", color: "#1a1a1a" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
