"use client"

import { Phone, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function CustomSolution() {
  // We'll store contact info in state so it only appears on the client
  const [phoneNumber, setPhoneNumber] = useState("")
  const [whatsappNumber, setWhatsappNumber] = useState("")

  useEffect(() => {
    setPhoneNumber("+919741229150")
    setWhatsappNumber("+919741229150")
  }, [])

  const handlePhoneClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = `tel:${phoneNumber}`
    }
  }

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      window.open(`https://wa.me/${whatsappNumber}`, "_blank")
    }
  }

  return (
    <section
      className="section-padding bg-gray-50"
      suppressHydrationWarning // <-- also ignore injected attributes here
    >
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solar Solution?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We understand that every client has unique energy requirements. Our team of experts can design a customized
          solar solution tailored to your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={handlePhoneClick} className="btn-primary">
            <Phone size={20} className="mr-2" />
            Call for Consultation
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="btn-secondary bg-green-500 hover:bg-green-600 text-white border-green-500"
          >
            <MessageCircle size={20} className="mr-2" />
            WhatsApp Us
          </button>
        </div>
      </div>
    </section>
  )
}
