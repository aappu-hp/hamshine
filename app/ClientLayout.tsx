"use client"

import React, { useEffect } from "react"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"
import SplashScreen from "@/components/splash-screen"

// Dynamically import LocalBusinessSchema so it never renders on the server
const LocalBusinessSchema = dynamic(
  () => import("@/components/seo/local-business-schema"),
  { ssr: false }
)

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Example: scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
    <SplashScreen />
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <LocalBusinessSchema />
    </>
  )
}
