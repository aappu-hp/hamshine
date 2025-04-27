"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { MessageCircle, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import QuoteForm from "@/components/quote-form"
import ProductSchema from "@/components/seo/product-schema"

// Update the products array with the actual products from Hamshine Electronics
const products = [
  {
    id: "1",
    name: "1.1 KVA Solar Power Pack",
    image: "/placeholder.svg?height=600&width=600",
    description:
      "Complete solar power solution with 400W solar module and tubular battery for reliable power generation.",
    longDescription:
      "The 1.1 KVA Solar Power Pack is a comprehensive solar energy solution designed for homes, small offices, and commercial establishments. It features a 400W solar module that efficiently converts sunlight into electricity, paired with a high-capacity tubular battery for reliable energy storage. This system generates approximately 2.2 KW of power per day and can store up to 2 KW, ensuring a consistent power supply even during cloudy days. The power pack includes built-in protection against short circuits and is designed to support up to 3 no-sunshine days, making it ideal for both urban and rural applications.",
    features: [
      "Solar Module: 400W",
      "Tubular Battery: 120-200Ah",
      "Power Generation: 2.2 KW/day",
      "Power Storage: 2 KW",
      "Power Output: 1.1 KVA",
      "Product Code: HPP11400TB",
    ],
    specifications: [
      { name: "Solar Module", value: "400W" },
      { name: "Tubular Battery", value: "120-200Ah" },
      { name: "Power Generation", value: "2.2 KW/day" },
      { name: "Power Storage", value: "2 KW" },
      { name: "Power Output", value: "1.1 KVA" },
      { name: "Protection", value: "Short circuit protection" },
      { name: "Backup Duration", value: "Up to 3 no-sunshine days" },
      { name: "Product Code", value: "HPP11400TB" },
    ],
    applications: [
      "Urban and Rural Offices",
      "Banks",
      "Residential Buildings",
      "Small Commercial Establishments",
      "Remote Locations with Limited Grid Access",
    ],
    relatedProducts: [2, 3, 23],
  },
  {
    id: "2",
    name: "2.2 KVA Solar Power Pack",
    image: "/placeholder.svg?height=600&width=600",
    description:
      "Higher capacity solar power pack with 1300W solar module and dual battery configuration for increased power needs.",
    longDescription:
      "The 2.2 KVA Solar Power Pack is a medium-capacity solar energy solution designed for larger homes, offices, and commercial establishments with higher power requirements. It features a powerful 1300W solar module array that efficiently converts sunlight into electricity, paired with two 12V 200Ah tubular batteries for substantial energy storage. This system generates approximately 7.15 KW of power per day, ensuring a reliable power supply for various applications. The power pack includes comprehensive protection features and is engineered to provide consistent performance even during periods of limited sunlight.",
    features: [
      "Solar Module: 1300W",
      "Tubular Battery: 12V 200Ah X 2",
      "Power Generation: 7.15 KW/day",
      "Protection against short circuit",
      "Supports up to 3 no-sunshine days",
      "Ideal for urban and rural offices, banks, and residences",
    ],
    specifications: [
      { name: "Solar Module", value: "1300W" },
      { name: "Tubular Battery", value: "12V 200Ah X 2" },
      { name: "Power Generation", value: "7.15 KW/day" },
      { name: "Protection", value: "Short circuit protection" },
      { name: "Backup Duration", value: "Up to 3 no-sunshine days" },
      { name: "Installation", value: "Professional installation required" },
      { name: "Warranty", value: "Standard manufacturer warranty" },
      { name: "Certification", value: "CE Certified" },
    ],
    applications: [
      "Medium to Large Residential Buildings",
      "Commercial Offices",
      "Banks and Financial Institutions",
      "Small Industrial Units",
      "Educational Institutions",
    ],
    relatedProducts: [1, 3, 24],
  },
  {
    id: "3",
    name: "3.5 KVA Solar Power Pack",
    image: "/placeholder.svg?height=600&width=600",
    description:
      "High-capacity solar power solution with 1300W solar module and quad battery configuration for substantial power requirements.",
    longDescription:
      "The 3.5 KVA Solar Power Pack is a high-capacity solar energy solution designed for large residential complexes, commercial buildings, and industrial applications with significant power demands. It features a robust 1300W solar module array combined with four 12V 200Ah tubular batteries, providing extensive energy storage capacity. This system generates approximately 7.15 KW of power per day and offers reliable performance even during extended periods of limited sunlight. With its substantial power output and storage capabilities, this power pack is ideal for applications requiring consistent and dependable power supply.",
    features: [
      "Solar Module: 1300W",
      "Tubular Battery: 12V 200Ah X 4",
      "Power Generation: 7.15 KW/day",
      "Suitable for commercial applications",
      "Reliable power backup solution",
      "CE Certified",
    ],
    specifications: [
      { name: "Solar Module", value: "1300W" },
      { name: "Tubular Battery", value: "12V 200Ah X 4" },
      { name: "Power Generation", value: "7.15 KW/day" },
      { name: "Power Output", value: "3.5 KVA" },
      { name: "Protection", value: "Comprehensive circuit protection" },
      { name: "Installation", value: "Professional installation required" },
      { name: "Warranty", value: "Standard manufacturer warranty" },
      { name: "Certification", value: "CE Certified" },
    ],
    applications: [
      "Large Residential Complexes",
      "Commercial Buildings",
      "Small to Medium Industries",
      "Hospitals and Healthcare Facilities",
      "Educational Institutions",
    ],
    relatedProducts: [1, 2, 25],
  },
  {
    id: "4",
    name: "10 Garden Lighting System",
    image: "/placeholder.svg?height=600&width=600",
    description: "Comprehensive garden lighting solution powered by solar energy with lithium battery storage.",
    longDescription:
      "The 10 Garden Lighting System is a complete solar-powered lighting solution designed specifically for gardens, pathways, and outdoor spaces. It features a 100W solar module that efficiently captures sunlight during the day, paired with a 12.8V 50Ah lithium battery for reliable energy storage. This system generates approximately 550W of power per day and can store up to 640Whr, providing sufficient energy to power multiple garden lights throughout the night. With its weather-resistant design and easy installation, this lighting system offers an eco-friendly and cost-effective way to illuminate outdoor spaces without the need for grid electricity.",
    features: [
      "Solar Module: 100W",
      "Lithium Battery: 12.8V 50Ah",
      "Power Generation: 550W/day",
      "Power Storage: 640Whr",
      "Power Output: 160W at 220V",
      "Product Code: HGL1050LB",
    ],
    specifications: [
      { name: "Solar Module", value: "100W" },
      { name: "Lithium Battery", value: "12.8V 50Ah" },
      { name: "Power Generation", value: "550W/day" },
      { name: "Power Storage", value: "640Whr" },
      { name: "Power Output", value: "160W at 220V" },
      { name: "Number of Light Points", value: "10" },
      { name: "Weather Resistance", value: "IP65 rated" },
      { name: "Product Code", value: "HGL1050LB" },
    ],
    applications: [
      "Residential Gardens",
      "Pathways and Walkways",
      "Landscape Lighting",
      "Outdoor Entertainment Areas",
      "Security Lighting for Perimeters",
    ],
    relatedProducts: [5, 6, 7],
  },
  {
    id: "5",
    name: "4 Garden Lighting System",
    image: "/placeholder.svg?height=600&width=600",
    description: "Compact garden lighting system with solar power and lithium battery for smaller garden areas.",
    longDescription:
      "The 4 Garden Lighting System is a compact solar-powered lighting solution ideal for smaller gardens, patios, and outdoor spaces. It features a 40W solar module that efficiently captures sunlight during the day, combined with a 12.8V 30Ah lithium battery for reliable energy storage. This system generates approximately 220W of power per day, providing sufficient energy to power four garden lights throughout the night. The system is designed for easy installation and minimal maintenance, offering an environmentally friendly lighting solution that operates independently of the electrical grid.",
    features: [
      "Solar Module: 40W",
      "Lithium Battery: 12.8V 30Ah",
      "Power Generation: 220W/day",
      "Energy efficient LED lights",
      "Weather resistant design",
      "Easy installation",
    ],
    specifications: [
      { name: "Solar Module", value: "40W" },
      { name: "Lithium Battery", value: "12.8V 30Ah" },
      { name: "Power Generation", value: "220W/day" },
      { name: "Number of Light Points", value: "4" },
      { name: "LED Efficiency", value: "High-efficiency LEDs" },
      { name: "Weather Resistance", value: "IP65 rated" },
      { name: "Installation", value: "DIY installation possible" },
      { name: "Warranty", value: "Standard manufacturer warranty" },
    ],
    applications: [
      "Small Gardens",
      "Patios and Decks",
      "Entrance Pathways",
      "Small Landscape Features",
      "Balconies and Terraces",
    ],
    relatedProducts: [4, 6, 7],
  },
  {
    id: "8",
    name: "125 LPD Solar Water Heater System",
    image: "/placeholder.svg?height=600&width=600",
    description: "Efficient solar water heating system with 125 liters per day capacity, ideal for small households.",
    longDescription:
      "The 125 LPD Solar Water Heater System is an efficient and eco-friendly solution for providing hot water in small households. Using evacuated tube collector technology, this system harnesses solar energy to heat water without consuming electricity or gas. With a daily capacity of 125 liters, it can meet the hot water needs of a small family for bathing, washing, and other domestic purposes. The system features a durable stainless steel tank with high-quality insulation to maintain water temperature for extended periods. CE certified and requiring minimal maintenance, this solar water heater offers significant long-term energy savings while reducing carbon footprint.",
    features: [
      "Capacity: 125 LPD (Liters Per Day)",
      "CE Certified",
      "Weight: 10-100 kg",
      "Color: Grey",
      "Evacuated tube collector technology",
      "Minimal maintenance required",
    ],
    specifications: [
      { name: "Capacity", value: "125 LPD (Liters Per Day)" },
      { name: "Certification", value: "CE Certified" },
      { name: "Weight", value: "10-100 kg" },
      { name: "Color", value: "Grey" },
      { name: "Tank Material", value: "Stainless Steel" },
      { name: "Collector Type", value: "Evacuated Tube" },
      { name: "Number of Tubes", value: "Varies by model" },
      { name: "Insulation", value: "PUF Insulation" },
    ],
    applications: [
      "Small Households (2-3 people)",
      "Apartments",
      "Small Guesthouses",
      "Domestic Hot Water Supply",
      "Small Offices",
    ],
    relatedProducts: [9, 10, 4],
  },
  {
    id: "11",
    name: "9 Watt LED Solar Street Light with Lithium Battery",
    image: "/placeholder.svg?height=600&width=600",
    description: "Energy-efficient 9W LED street light powered by solar energy with lithium battery storage.",
    longDescription:
      "The 9 Watt LED Solar Street Light with Lithium Battery is a self-contained lighting solution ideal for streets, pathways, and outdoor areas. It features a 9W high-efficiency LED light that provides bright illumination with a lumen output of 120 lumens per watt. Powered by a 30W solar module and equipped with a 12.8V 15Ah lithium battery, this street light operates from dusk to dawn without requiring connection to the electrical grid. The system is designed for mounting at heights of 5-5.5 meters and above, making it suitable for various outdoor lighting applications. With its durable construction and reliable performance, this solar street light offers an eco-friendly and cost-effective lighting solution.",
    features: [
      "Solar LED Light: 9 Watt",
      "Battery Capacity: 12.8V 15Ah Lithium",
      "Lumen Output: 120/Watt",
      "Operation: Dusk to Dawn",
      "Light Mounting Height: 5m-5.5m and Above",
      "Solar Module: 30W",
      "Product Code: HST0009LB",
    ],
    specifications: [
      { name: "LED Power", value: "9 Watt" },
      { name: "Battery Type", value: "Lithium" },
      { name: "Battery Capacity", value: "12.8V 15Ah" },
      { name: "Lumen Output", value: "120 lumens/Watt" },
      { name: "Solar Module", value: "30W" },
      { name: "Operation", value: "Automatic Dusk to Dawn" },
      { name: "Mounting Height", value: "5m-5.5m and Above" },
      { name: "Product Code", value: "HST0009LB" },
    ],
    applications: [
      "Residential Streets",
      "Pathways and Walkways",
      "Parks and Gardens",
      "Parking Areas",
      "Remote Areas without Grid Access",
    ],
    relatedProducts: [12, 13, 17],
  },
  {
    id: "23",
    name: "5 KVA Petrol Pump Solar Power Pack with Lithium Battery",
    image: "/placeholder.svg?height=600&width=600",
    description: "5 KVA solar power solution specifically designed for petrol pumps with lithium battery storage.",
    longDescription:
      "The 5 KVA Petrol Pump Solar Power Pack with Lithium Battery is a specialized solar energy solution designed to meet the specific power requirements of petrol pumps and fuel stations. It features a robust 2600W solar module array paired with a 48V 150Ah lithium battery system for efficient energy storage. This system generates approximately 27 KW of power per day and can store up to 7.2 KW, providing reliable power for fuel dispensers, lighting, and other essential equipment. With its high-quality components and durable construction, this power pack ensures consistent operation of petrol pump facilities while significantly reducing electricity costs and carbon footprint.",
    features: [
      "Solar Module: 2600W",
      "Lithium Battery: 48V 150Ah",
      "Power Generation: 27 KW/day",
      "Power Storage: 7.2 KW",
      "Power Output: 5 KVA",
      "Product Code: HEP5260LB",
    ],
    specifications: [
      { name: "Solar Module", value: "2600W" },
      { name: "Battery Type", value: "Lithium" },
      { name: "Battery Capacity", value: "48V 150Ah" },
      { name: "Power Generation", value: "27 KW/day" },
      { name: "Power Storage", value: "7.2 KW" },
      { name: "Power Output", value: "5 KVA" },
      { name: "Installation", value: "Professional installation required" },
      { name: "Product Code", value: "HEP5260LB" },
    ],
    applications: [
      "Petrol Pumps and Fuel Stations",
      "Fuel Dispensers",
      "Lighting Systems",
      "CCTV and Security Systems",
      "Office Equipment at Fuel Stations",
    ],
    relatedProducts: [24, 25, 26],
  },
  {
    id: "29",
    name: "Solar Lantern",
    image: "/placeholder.svg?height=600&width=600",
    description: "Portable solar-powered lantern with LED light for emergency lighting and off-grid use.",
    longDescription:
      "The Solar Lantern is a compact and portable lighting solution powered entirely by solar energy. It features a 3W LED light that provides bright illumination for up to 4 hours when fully charged. The lantern is equipped with a 6V 4.7Ah battery that efficiently stores energy captured by the 10W solar module. Available in red and yellow colors, this lantern is designed for versatility and ease of use. It's an ideal lighting solution for areas without reliable electricity, during power outages, for outdoor activities, or as an emergency light source. The durable construction and simple operation make it suitable for various applications in both rural and urban settings.",
    features: [
      "Solar Lantern: 3W LED Light",
      "Battery Capacity: 4.7Ah",
      "Battery Voltage: 6 Volts",
      "Colors Available: Red, Yellow",
      "Serving Time When Battery Full Charged: 4 Hours",
      "Solar Module: 10W",
    ],
    specifications: [
      { name: "LED Power", value: "3W" },
      { name: "Battery Capacity", value: "4.7Ah" },
      { name: "Battery Voltage", value: "6 Volts" },
      { name: "Operating Time", value: "4 Hours when fully charged" },
      { name: "Solar Module", value: "10W" },
      { name: "Available Colors", value: "Red, Yellow" },
      { name: "Charging Time", value: "6-8 hours in direct sunlight" },
      { name: "Weight", value: "Lightweight, portable design" },
    ],
    applications: [
      "Emergency Lighting",
      "Rural Areas without Electricity",
      "Outdoor Activities and Camping",
      "Power Outage Backup",
      "Reading and Study Light",
    ],
    relatedProducts: [6, 7, 31],
  },
  // Add more products as needed
]

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState(null)
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const fetchProduct = () => {
      setLoading(true)
      setTimeout(() => {
        const foundProduct = products.find((p) => p.id === params.id)
        setProduct(foundProduct || null)
        setLoading(false)
      }, 500)
    }

    fetchProduct()
  }, [params.id])

  if (loading) {
    return (
      <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="pt-32 pb-16 min-h-screen">
        <div className="container-custom text-center">
          <h1 className="mb-4">Product Not Found</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The product you are looking for does not exist or has been removed.
          </p>
          <Link href="/products" className="btn-primary">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Product Detail */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center text-blue-600 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>

              <h2 className="text-xl font-bold mb-3">Key Features</h2>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button onClick={() => setShowQuoteForm(true)} className="btn-primary w-full md:w-auto">
                <MessageCircle className="mr-2 h-5 w-5" />
                Request a Quote
              </button>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <a
                  href="#description"
                  className="border-blue-600 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                >
                  Description
                </a>
                <a
                  href="#specifications"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                >
                  Specifications
                </a>
                <a
                  href="#applications"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                >
                  Applications
                </a>
              </nav>
            </div>

            {/* Description */}
            <div id="description" className="py-8">
              <h2 className="text-2xl font-bold mb-4">Product Description</h2>
              <p className="text-gray-600 mb-4">{product.longDescription}</p>
            </div>

            {/* Specifications */}
            <div id="specifications" className="py-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-200">
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{spec.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications */}
            <div id="applications" className="py-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Applications</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.applications.map((app, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Products */}
          {product.relatedProducts && product.relatedProducts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.relatedProducts.map((relatedId) => {
                  const relatedProduct = products.find((p) => p.id === relatedId.toString())
                  if (!relatedProduct) return null

                  return (
                    <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="block h-full">
                      <div className="card h-full hover:translate-y-[-5px]">
                        <div className="relative h-48 w-full">
                          <Image
                            src={relatedProduct.image || "/placeholder.svg"}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover rounded-t-2xl"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-lg mb-2">{relatedProduct.name}</h3>
                          <p className="text-gray-600 line-clamp-2">{relatedProduct.description}</p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quote Form Modal */}
      {showQuoteForm && <QuoteForm productId={Number.parseInt(product.id)} onClose={() => setShowQuoteForm(false)} />}
      {/* Product Schema */}
      {product && (
        <ProductSchema
          name={product.name}
          description={product.description}
          image={product.image}
          price={Number.parseFloat(product.id) * 100} // Just for demo purposes
          sku={product.id}
          availability="InStock"
        />
      )}
    </>
  )
}

