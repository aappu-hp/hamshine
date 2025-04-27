"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Always show splash screen on every reload
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2500) // duration of splash animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-03-12_232050-removebg-preview-5vSmP90mAdiWt3q3VrlvThyyjbW6qj.png"
              alt="Hamshine Electronics & Energy Systems"
              fill
              className="object-contain"
              priority
            />
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 h-1 bg-green-600 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
