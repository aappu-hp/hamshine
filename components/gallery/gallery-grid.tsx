"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { X, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Define a type for gallery items
interface GalleryItem {
  id: number
  image: string
  category: string
  title?: string
  description?: string
}

// Gallery data with the uploaded images
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.04%20PM%20%281%29-ramawjiZ6r2tUafDiF5sOqJoY0urI8.jpeg",
    category: "Installations",
    title: "Residential Rooftop Installation",
    description: "A 5kW solar installation for a residential property in Bangalore.",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.01%20PM-2PzClVId7fxq05BJ0GPgOvKv1kuxan.jpeg",
    category: "Installations",
    title: "Commercial Solar Array",
    description: "10kW commercial installation for an office building.",
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.06%20PM-XPypdE1wAagsO0hPpfaMdWnrGk1BQy.jpeg",
    category: "Products",
    title: "Solar Panel X1000",
    description: "Our flagship solar panel with 22% efficiency rating.",
  },
  {
    id: 4,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.02%20PM-KxQE85cgmg7d2EomQmxP8rFAMbBbdP.jpeg",
    category: "Products",
    title: "Solar Inverter Pro",
    description: "High-efficiency inverter for residential and commercial use.",
  },
  {
    id: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.04%20PM-8saBHwHQhuhw0XQx0eiVcK8XWbtnMh.jpeg",
    category: "Installations",
    title: "Ground-Mounted Array",
    description: "Large-scale ground-mounted solar installation for a farm.",
  },
  {
    id: 6,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.09%20PM-P4sG42BABwy5l2qM7CgONHrIPvMavD.jpeg",
    category: "Installations",
    title: "Solar Carport",
    description: "Dual-purpose carport with integrated solar panels.",
  },
  {
    id: 7,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.03%20PM-06AHSIEIprvQDj7iWQ84ZksQe2cvJV.jpeg",
    category: "Products",
    title: "Battery Storage System",
    description: "10kWh battery storage system for energy independence.",
  },
  {
    id: 8,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.15%20PM-iRCauJUENpUkh1alwnAb0ROlGmTUFR.jpeg",
    category: "Products",
    title: "Solar Water Heater",
    description: "Energy-efficient solar water heating solution.",
  },
  {
    id: 9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.07%20PM-csGHlwxkHBOJqmKRnxOw458hApRKlp.jpeg",
    category: "Installations",
    title: "Industrial Installation",
    description: "25kW installation for a manufacturing facility.",
  },
  {
    id: 10,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.03%20PM%20%281%29-f1Q6kfrkTAUREMfq6ntnjscamsP4MU.jpeg",
    category: "Installations",
    title: "School Rooftop Project",
    description: "Solar installation for an educational institution.",
  },
]

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Filter gallery items by category
  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-amber-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Staggered Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            // Determine if the image should be larger (featured)
            const isFeatured = index % 5 === 0 || index % 5 === 3

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`${
                  isFeatured ? "md:col-span-2" : ""
                } group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
              >
                <div
                  className={`relative ${isFeatured ? "aspect-[16/9]" : "aspect-square"} w-full cursor-pointer`}
                  onClick={() => setSelectedImage(item)}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title || `Gallery image ${item.id}`}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white bg-opacity-90 p-3 rounded-full" aria-label="View details">
                        <Info className="h-5 w-5 text-amber-500" />
                      </button>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-medium text-lg">{item.title || `Image ${item.id}`}</h3>
                    <p className="text-white/80 text-sm">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Image Detail Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
              <div
                className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-gray-200 flex items-center">
                  <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-03-12_232050-removebg-preview-5vSmP90mAdiWt3q3VrlvThyyjbW6qj.png" alt="Hamshine Logo" width={120} height={40} className="mr-auto" />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                    <Image
                      src={selectedImage.image || "/placeholder.svg"}
                      alt={selectedImage.title || `Gallery image ${selectedImage.id}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">
                      {selectedImage.category}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {selectedImage.title || `Image ${selectedImage.id}`}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {selectedImage.description || "No description available for this image."}
                    </p>

                    <div className="mt-auto">
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded transition-colors duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
