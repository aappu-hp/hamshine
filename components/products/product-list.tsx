"use client"

import { useState, useCallback, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { MessageCircle, Info } from "lucide-react"
import QuoteForm from "@/components/quote-form"
import ProductSearch from "@/components/products/product-search"
import { Suspense } from "react"
import { motion } from "framer-motion"

// Product data (would be fetched from reference sites in production)
const allProducts = [
  // Solar Power Pack Category
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bCZee3Z4zdmTowFWoHICCyerNhya1u.png",
    name: "1.1 KVA Solar Power Pack",
    description:
      "Complete solar power solution with 400W solar module and tubular battery for reliable power generation.",
    category: "Solar Power Pack",
    features: [
      "Solar Module: 400W",
      "Tubular Battery: 120-200Ah",
      "Power Generation: 2.2 KW/day",
      "Power Storage: 2 KW",
      "Power Output: 1.1 KVA",
      "Product Code: HPP11400TB",
    ],
    moq: "25 Sets",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bCZee3Z4zdmTowFWoHICCyerNhya1u.png",
    name: "2.2 KVA Solar Power Pack",
    description:
      "Higher capacity solar power pack with 1300W solar module and dual battery configuration for increased power needs.",
    category: "Solar Power Pack",
    features: [
      "Solar Module: 1300W",
      "Tubular Battery: 12V 200Ah X 2",
      "Power Generation: 7.15 KW/day",
      "Protection against short circuit",
      "Supports up to 3 no-sunshine days",
      "Ideal for urban and rural offices, banks, and residences",
    ],
    moq: "25 Sets",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bCZee3Z4zdmTowFWoHICCyerNhya1u.png",
    name: "3.5 KVA Solar Power Pack",
    description:
      "High-capacity solar power solution with 1300W solar module and quad battery configuration for substantial power requirements.",
    category: "Solar Power Pack",
    features: [
      "Solar Module: 1300W",
      "Tubular Battery: 12V 200Ah X 4",
      "Power Generation: 7.15 KW/day",
      "Suitable for commercial applications",
      "Reliable power backup solution",
      "CE Certified",
    ],
    moq: "25 Sets",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  // Garden Lighting Systems
  {
    id: 4,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2ojBXLAYfukUnYux5DiLodztwwArn.png",
    name: "10 Garden Lighting System",
    description:
      "Comprehensive garden lighting solution powered by solar energy with lithium battery storage.",
    category: "Garden Lighting System",
    features: [
      "Solar Module: 100W",
      "Lithium Battery: 12.8V 50Ah",
      "Power Generation: 550W/day",
      "Power Storage: 640Whr",
      "Power Output: 160W at 220V",
      "Product Code: HGL1050LB",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2ojBXLAYfukUnYux5DiLodztwwArn.png",
    name: "4 Garden Lighting System",
    description:
      "Compact garden lighting system with solar power and lithium battery for smaller garden areas.",
    category: "Garden Lighting System",
    features: [
      "Solar Module: 40W",
      "Lithium Battery: 12.8V 30Ah",
      "Power Generation: 220W/day",
      "Energy efficient LED lights",
      "Weather resistant design",
      "Easy installation",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  // Solar Home Lighting Systems
  {
    id: 6,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aYU49SHKDYd8AJAUHtHyjYWdUevbVl.png",
    name: "Solar Home 4 Lighting System",
    description:
      "Complete home lighting solution powered by solar energy with lithium battery storage for 4 light points.",
    category: "Solar Home Lighting System",
    features: [
      "Solar Module: 40W",
      "Lithium Battery: 12.8V 30Ah",
      "Power Generation: 220W/day",
      "Power Storage: 384W",
      "Power Output: 80W at 220V",
      "Product Code: HEL0430LB",
    ],
    moq: "25 Pack",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 7,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aYU49SHKDYd8AJAUHtHyjYWdUevbVl.png",
    name: "Solar Home 8 Lighting System",
    description:
      "Enhanced home lighting system with solar power and lithium battery for 8 light points.",
    category: "Solar Home Lighting System",
    features: [
      "Solar Module: 80W",
      "Lithium Battery: 12.8V 60Ah",
      "Power Generation: 440W/day",
      "Supports 8 light points",
      "Mobile charging capability",
      "Long battery life",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  // Solar Water Heater Systems
  {
    id: 8,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2PcWoHD0XnjLgJPIuLu5KQc4VqSjA0.png",
    name: "125 LPD Solar Water Heater System",
    description:
      "Efficient solar water heating system with 125 liters per day capacity, ideal for small households.",
    category: "Solar Water Heater System",
    features: [
      "Capacity: 125 LPD (Liters Per Day)",
      "CE Certified",
      "Weight: 10-100 kg",
      "Color: Grey",
      "Evacuated tube collector technology",
      "Minimal maintenance required",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2PcWoHD0XnjLgJPIuLu5KQc4VqSjA0.png",
    name: "250 LPD Solar Water Heater System",
    description:
      "Medium capacity solar water heating system with 250 liters per day output for medium-sized households.",
    category: "Solar Water Heater System",
    features: [
      "Capacity: 250 LPD (Liters Per Day)",
      "CE Certified",
      "Weight: 100-200 kg",
      "Color: Grey",
      "High efficiency heat transfer",
      "Durable stainless steel tank",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 10,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2PcWoHD0XnjLgJPIuLu5KQc4VqSjA0.png",
    name: "350 LPD Solar Water Heater System",
    description:
      "High capacity solar water heating system with 350 liters per day output for larger households or small commercial applications.",
    category: "Solar Water Heater System",
    features: [
      "Capacity: 350 LPD (Liters Per Day)",
      "CE Certified",
      "Weight: 10-100 kg",
      "Color: Grey",
      "Pressurized system available",
      "Year-round hot water supply",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  // LED Solar Street Lights with Lithium Battery
  {
    id: 11,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3tGShjpctB6xneErk1H9DWi5fcrnk1.png",
    name: "9 Watt LED Solar Street Light with Lithium Battery",
    description:
      "Energy-efficient 9W LED street light powered by solar energy with lithium battery storage.",
    category: "LED Solar Street Light",
    features: [
      "Solar LED Light: 9 Watt",
      "Battery Capacity: 12.8V 15Ah Lithium",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 30W",
      "Product Code: HST0009LB",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 12,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3tGShjpctB6xneErk1H9DWi5fcrnk1.png",
    name: "12 Watt LED Solar Street Light with Lithium Battery",
    description:
      "12W LED street light with solar power and lithium battery for enhanced illumination.",
    category: "LED Solar Street Light",
    features: [
      "Solar LED Light: 12 Watt",
      "Battery Capacity: 12.8V 25Ah Lithium",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 40W",
      "Product Code: HST0012LB",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 13,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3tGShjpctB6xneErk1H9DWi5fcrnk1.png",
    name: "18 Watt LED Solar Street Light with Lithium Battery",
    description:
      "18W LED street light powered by solar energy with lithium battery for brighter illumination.",
    category: "LED Solar Street Light",
    features: [
      "Solar LED Light: 18 Watt",
      "Battery Capacity: 12.8V 30Ah Lithium",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 60W",
      "Product Code: HST0018LB",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 14,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3tGShjpctB6xneErk1H9DWi5fcrnk1.png",
    name: "24 Watt LED Solar Street Light with Lithium Battery",
    description:
      "24W LED street light with solar power and lithium battery for wider area illumination.",
    category: "LED Solar Street Light",
    features: [
      "Solar LED Light: 24 Watt",
      "Battery Capacity: 12.8V 40Ah Lithium",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 100W",
      "Product Code: HST0024LB",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 15,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3tGShjpctB6xneErk1H9DWi5fcrnk1.png",
    name: "30 Watt LED Solar Street Light with Lithium Battery",
    description:
      "30W LED street light powered by solar energy with lithium battery for commercial applications.",
    category: "LED Solar Street Light",
    features: [
      "Solar LED Light: 30 Watt",
      "Battery Capacity: 12.8V 50Ah Lithium",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 125W",
      "Product Code: HST0030LB",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 16,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3tGShjpctB6xneErk1H9DWi5fcrnk1.png",
    name: "50 Watt LED Solar Street Light with Lithium Battery",
    description:
      "High-power 50W LED street light with solar energy and lithium battery for major roads and highways.",
    category: "LED Solar Street Light",
    features: [
      "Solar LED Light: 50 Watt",
      "Battery Capacity: 12.8V 80Ah Lithium",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 150W",
      "Product Code: HST0050LB",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  // LED Solar Street Lights with Tubular Battery
  {
    id: 17,
    image: "/placeholder.svg?height=400&width=400",
    name: "9 Watt LED Solar Street Light with Tubular Battery",
    description:
      "9W LED street light powered by solar energy with tubular battery for reliable operation.",
    category: "LED Solar Street Light",
    features: [
      "Solar LED Light: 9 Watt",
      "Battery Capacity: 12V 30Ah Tubular",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 40W",
      "Product Code: HST0009TB",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 18,
    image: "/placeholder.svg?height=400&width=400",
    name: "12 Watt LED Solar Street Light with Tubular Battery",
    description:
      "12W LED street light with solar power and tubular battery for enhanced durability.",
    category: "LED Solar Street Light",
    features: [
      "Solar LED Light: 12 Watt",
      "Battery Capacity: 12V 40Ah Tubular",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 40W",
      "Product Code: HST0012TB",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 19,
    image: "/placeholder.svg?height=400&width=400",
    name: "18 Watt LED Solar Street Light with Tubular Battery",
    description:
      "18W LED street light powered by solar energy with tubular battery for long-lasting performance.",
    category: "LED Solar Street Light",
    features: [
      "Solar LED Light: 18 Watt",
      "Battery Capacity: 12V 60Ah Tubular",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 50W",
      "Product Code: HST0018TB",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 20,
    image: "/placeholder.svg?height=400&width=400",
    name: "30 Watt LED Solar Street Light with Tubular Battery",
    description:
      "30W LED street light with solar power and tubular battery for commercial applications.",
    category: "LED Solar Street Light",
    features: [
      "Solar LED Light: 30 Watt",
      "Battery Capacity: 12V 90Ah Tubular",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 100W",
      "Product Code: HST0030TB",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 21,
    image: "/placeholder.svg?height=400&width=400",
    name: "50 Watt LED Solar Street Light with Tubular Battery",
    description:
      "High-power 50W LED street light with solar energy and tubular battery for major roads and highways.",
    category: "LED Solar Street Light",
    features: [
      "Solar LED Light: 50 Watt",
      "Battery Capacity: 12V 150Ah Tubular",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 150W",
      "Product Code: HST0050TB",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 22,
    image: "/placeholder.svg?height=400&width=400",
    name: "100 Watt LED Solar Street Light with Tubular Battery",
    description:
      "Ultra-high power 100W LED street light with solar energy and tubular battery for highways and large areas.",
    category: "LED Solar Street Light",
    features: [
      "Solar LED Light: 100 Watt",
      "Battery Capacity: 12V 300Ah Tubular",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 250W",
      "Product Code: HST00100T",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  // Petrol Pump Solar Power Packs
  {
    id: 23,
    image: "/placeholder.svg?height=400&width=400",
    name: "5 KVA Petrol Pump Solar Power Pack with Lithium Battery",
    description:
      "5 KVA solar power solution specifically designed for petrol pumps with lithium battery storage.",
    category: "Petrol Pump Solar Power Pack",
    features: [
      "Solar Module: 2600W",
      "Lithium Battery: 48V 150Ah",
      "Power Generation: 27 KW/day",
      "Power Storage: 7.2 KW",
      "Power Output: 5 KVA",
      "Product Code: HEP5260LB",
    ],
    moq: "25 Sets",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 24,
    image: "/placeholder.svg?height=400&width=400",
    name: "7.5 KVA Petrol Pump Solar Power Pack with Lithium Battery",
    description:
      "7.5 KVA solar power solution for petrol pumps with enhanced lithium battery capacity.",
    category: "Petrol Pump Solar Power Pack",
    features: [
      "Solar Module: 4875W",
      "Lithium Battery: 120V 200Ah",
      "Power Generation: 27 KW/day",
      "Power Storage: 24 KW",
      "Power Output: 7.5 KVA",
      "Product Code: HEP75487LB",
    ],
    moq: "25 Sets",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 25,
    image: "/placeholder.svg?height=400&width=400",
    name: "10 KVA Petrol Pump Solar Power Pack with Lithium Battery",
    description:
      "High-capacity 10 KVA solar power solution for petrol pumps with lithium battery storage.",
    category: "Petrol Pump Solar Power Pack",
    features: [
      "Solar Module: 6500W",
      "Lithium Battery: 120V 200Ah",
      "Power Generation: 35.75 KW/day",
      "Power Storage: 24 KW",
      "Power Output: 10 KVA",
      "Product Code: HEP10487LB",
    ],
    moq: "25 Sets",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 26,
    image: "/placeholder.svg?height=400&width=400",
    name: "5 KVA Petrol Pump Solar Power Pack with Tubular Battery",
    description:
      "5 KVA solar power solution for petrol pumps with tubular battery configuration.",
    category: "Petrol Pump Solar Power Pack",
    features: [
      "Solar Module: 2600W",
      "Tubular Battery: 12V 150Ah X 4",
      "Power Generation: 27 KW/day",
      "Power Storage: 7.2 KW",
      "Power Output: 5 KVA",
      "Product Code: HEP5260TB",
    ],
    moq: "25 Sets",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 27,
    image: "/placeholder.svg?height=400&width=400",
    name: "7.5 KVA Petrol Pump Solar Power Pack with Tubular Battery",
    description:
      "7.5 KVA solar power solution for petrol pumps with tubular battery storage.",
    category: "Petrol Pump Solar Power Pack",
    features: [
      "Solar Module: 4875W",
      "Tubular Battery: 12V 200Ah X 10",
      "Power Generation: 27 KW/day",
      "Power Storage: 24 KW",
      "Power Output: 7.5 KVA",
      "Product Code: HEP75487TB",
    ],
    moq: "25 Sets",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 28,
    image: "/placeholder.svg?height=400&width=400",
    name: "10 KVA Petrol Pump Solar Power Pack with Tubular Battery",
    description:
      "High-capacity 10 KVA solar power solution for petrol pumps with tubular battery configuration.",
    category: "Petrol Pump Solar Power Pack",
    features: [
      "Solar Module: 6500W",
      "Tubular Battery: 12V 200Ah X 12",
      "Power Generation: 35.75 KW/day",
      "Power Storage: 28.8 KW",
      "Power Output: 10 KVA",
      "Product Code: HEP10650TB",
    ],
    moq: "25 Sets",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  // Other Products
  {
    id: 29,
    image: "/placeholder.svg?height=400&width=400",
    name: "Solar Lantern",
    description:
      "Portable solar-powered lantern with LED light for emergency lighting and off-grid use.",
    category: "Other Products",
    features: [
      "Solar Lantern: 3W LED Light",
      "Battery Capacity: 4.7Ah",
      "Battery Voltage: 6 Volts",
      "Colors Available: Red, Yellow",
      "Serving Time When Battery Full Charged: 4 Hours",
      "Solar Module: 10W",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 30,
    image: "/placeholder.svg?height=400&width=400",
    name: "Solar PWM Charger",
    description:
      "Pulse Width Modulation solar charge controller for efficient battery charging in solar systems.",
    category: "Other Products",
    features: [
      "Country of Origin: India",
      "Certification: CE Certified",
      "Voltage: 110V",
      "Condition: New",
      "Power: 1-3 kW",
      "Power Source: Solar",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 31,
    image: "/placeholder.svg?height=400&width=400",
    name: "Solar LED Indoor Lights",
    description:
      "Energy-efficient LED lights for indoor use powered by solar energy.",
    category: "Other Products",
    features: [
      "Material: Aluminium",
      "Certification: CE Certified",
      "Weight: 100-250g",
      "Color: Grey",
      "Feature: Durable, High Performance",
      "Voltage: 220V",
      "Power Type: AC, DC",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 32,
    image: "/placeholder.svg?height=400&width=400",
    name: "Fuel Cell Educational Kit",
    description:
      "Educational kit for demonstrating fuel cell technology and principles.",
    category: "Other Products",
    features: [
      "Type: Educational Kits",
      "Material: Metal",
      "Feature: Auto Controller, Dipped In Epoxy Resin",
      "Voltage: 110V",
      "Power Type: AC",
      "Operating Temperature: -25 to +85 deg C",
    ],
    moq: "25 Sets",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 33,
    image: "/placeholder.svg?height=400&width=400",
    name: "Solar Hostel Lighting System",
    description:
      "Comprehensive lighting solution for hostels powered by solar energy.",
    category: "Other Products",
    features: [
      "Country of Origin: India",
      "Size: Standard",
      "Type: Solar Lighting System",
      "Multiple light points",
      "Battery backup",
      "Low maintenance",
    ],
    moq: "25 Sets",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
  {
    id: 34,
    image: "/placeholder.svg?height=400&width=400",
    name: "Control Sensor Automatic Street Light Lighting Switch",
    description:
      "Automatic light sensor switch for controlling street lights based on ambient light levels.",
    category: "Other Products",
    features: [
      "Voltage: 230V AC",
      "Frequency: 50 Hz",
      "Current Rating: 6 Amp",
      "Shape: Rectangular",
      "Power Source: Electrical",
      "Automatic operation",
    ],
    moq: "25 Pieces",
    businessType: "Manufacturer, Exporter, Supplier",
    location: "India (Karnataka only) & All other countries",
  },
];

function ProductListContent() {
  const [selectedProduct, setSelectedProduct] = useState<null | number>(null)
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [products, setProducts] = useState(allProducts)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null)
  const searchParams = useSearchParams()

  // Unique categories
  const categories = [
    "All",
    "Solar Power Pack",
    "Garden Lighting System",
    "Solar Home Lighting System",
    "Solar Water Heater System",
    "LED Solar Street Light",
    "Petrol Pump Solar Power Pack",
    "Other Products",
  ]

  // On mount: check for category in URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category")
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl)
      if (categoryFromUrl !== "All") {
        const filteredProducts = allProducts.filter((product) => product.category === categoryFromUrl)
        setProducts(filteredProducts)
      }
      setTimeout(() => {
        const productsSection = document.getElementById("products-section")
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
    }
  }, [searchParams])

  const handleRequestQuote = (productId: number) => {
    setSelectedProduct(productId)
    setShowQuoteForm(true)
  }

  // Filter products based on search query
  const filterProducts = useCallback(
    (query: string) => {
      if (!query) {
        if (selectedCategory === "All") {
          setProducts(allProducts)
        } else {
          setProducts(allProducts.filter((product) => product.category === selectedCategory))
        }
        return
      }
      const lowercaseQuery = query.toLowerCase()
      const filtered = allProducts.filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(lowercaseQuery) ||
          product.description.toLowerCase().includes(lowercaseQuery)
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
        return matchesSearch && matchesCategory
      })
      setProducts(filtered)
    },
    [selectedCategory],
  )

  // Filter products by category
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === "All") {
      setProducts(allProducts)
    } else {
      const filteredProducts = allProducts.filter((product) => product.category === category)
      setProducts(filteredProducts)
      const productsSection = document.getElementById("products-section")
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const toggleProductExpand = (productId: number) => {
    if (expandedProduct === productId) {
      setExpandedProduct(null)
    } else {
      setExpandedProduct(productId)
    }
  }

  return (
    <>
      {/* Search Component */}
      <ProductSearch onSearch={filterProducts} />

      {/* Category Filter */}
      <section className="py-6 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Product Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-amber-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 bg-white" id="products-section">
        <div className="container-custom">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No products found matching your search criteria.</h3>
              <p className="mt-2 text-gray-500">Try a different search term or browse all our products.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg?height=400&width=600"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-2">MOQ:</span>
                      <span className="font-medium">{product.moq}</span>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => toggleProductExpand(product.id)}
                        className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                      >
                        <Info size={16} className="mr-2" />
                        Details
                      </button>
                      <button
                        onClick={() => handleRequestQuote(product.id)}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                      >
                        <MessageCircle size={16} className="mr-2" />
                        Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Product Detail Modal */}
          {expandedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
              <motion.div
                className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                {(() => {
                  const product = products.find((p) => p.id === expandedProduct)
                  if (!product) return null

                  return (
                    <div className="relative">
                      <button
                        onClick={() => setExpandedProduct(null)}
                        className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full z-10"
                      >
                        ✕
                      </button>

                      <div className="p-6 border-b border-gray-200 flex items-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-03-12_232050-removebg-preview-5vSmP90mAdiWt3q3VrlvThyyjbW6qj.png"
                          alt="Hamshine Logo"
                          width={120}
                          height={40}
                          className="mr-auto"
                        />
                        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded">
                          {product.category}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 p-6">
                        <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg?height=400&width=600"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h2 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h2>
                          <p className="text-gray-600 mb-6">{product.description}</p>

                          <div className="flex flex-wrap gap-4 mb-6">
                            <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
                              MOQ: {product.moq}
                            </div>
                            <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
                              {product.businessType}
                            </div>
                          </div>

                          <h3 className="font-semibold text-lg mb-4 text-gray-800">Key Features:</h3>
                          <ul className="space-y-2 mb-6">
                            {product.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <button
                            onClick={() => {
                              handleRequestQuote(product.id)
                              setExpandedProduct(null)
                            }}
                            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                          >
                            <MessageCircle size={18} className="mr-2" />
                            Request a Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </div>
          )}

          {/* Quote Form Modal */}
          {showQuoteForm && <QuoteForm productId={selectedProduct} onClose={() => setShowQuoteForm(false)} />}
        </div>
      </section>
    </>
  )
}

// Export the default component wrapped in Suspense
export default function ProductList() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-amber-500 rounded-full animate-spin"></div>
        </div>
      }
    >
      <ProductListContent />
    </Suspense>
  )
}
