import type React from "react"
import "./globals.css"
import { JetBrains_Mono, Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import MatrixRain from "./components/MatrixRain"
import SakuraParticles from "./components/SakuraParticles"
import AnimatedCursor from "./components/AnimatedCursor"
import ScrollProgress from "./components/ScrollProgress"
import type { Metadata } from "next"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Richik Chanda | Developer",
  description: "Portfolio of Richik Chanda, an engineer who builds things that matter.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <MatrixRain />
          <SakuraParticles />
          <ScrollProgress />
          <AnimatedCursor />
          <Navbar />
          <main className="pt-navbar-height">{children}</main>
          <footer className="border-t border-border/40 py-6 text-center text-muted-foreground">
            <div className="container mx-auto">
              <p className="font-mono text-sm">© {new Date().getFullYear()} Richik Chanda. All rights reserved.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

