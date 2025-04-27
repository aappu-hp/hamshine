"use client"

import { useState, useEffect } from "react"

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export default function useResponsive() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("lg")
  const [width, setWidth] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Set mounted state after hydration
    setIsMounted(true)

    // Only run on client side
    if (typeof window === "undefined") return

    const handleResize = () => {
      const currentWidth = window.innerWidth
      setWidth(currentWidth)

      if (currentWidth < 640) {
        setBreakpoint("xs")
      } else if (currentWidth < 768) {
        setBreakpoint("sm")
      } else if (currentWidth < 1024) {
        setBreakpoint("md")
      } else if (currentWidth < 1280) {
        setBreakpoint("lg")
      } else if (currentWidth < 1536) {
        setBreakpoint("xl")
      } else {
        setBreakpoint("2xl")
      }
    }

    // Set initial values
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Use consistent values for server-side rendering
  const isMobile = isMounted ? breakpoint === "xs" || breakpoint === "sm" : false
  const isTablet = isMounted ? breakpoint === "md" : false
  const isDesktop = isMounted ? breakpoint === "lg" || breakpoint === "xl" || breakpoint === "2xl" : true

  // Fix by ensuring we're not using the hook's state during server-side rendering:
  return {
    breakpoint: isMounted ? breakpoint : "lg",
    width: isMounted ? width : 0,
    isMobile: isMounted ? breakpoint === "xs" || breakpoint === "sm" : false,
    isTablet: isMounted ? breakpoint === "md" : false,
    isDesktop: isMounted ? breakpoint === "lg" || breakpoint === "xl" || breakpoint === "2xl" : true,
    isMounted,
  }
}

