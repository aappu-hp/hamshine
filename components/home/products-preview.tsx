import Link from "next/link"
import OptimizedImage from "@/components/optimized-image"

// Product data (would be fetched from reference sites in production)
const products = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bCZee3Z4zdmTowFWoHICCyerNhya1u.png",
    name: "Solar Power Packs",
    description: "Complete solar power solutions with various capacities for residential and commercial applications.",
    category: "Solar Power Pack",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3tGShjpctB6xneErk1H9DWi5fcrnk1.png",
    name: "LED Solar Street Lights",
    description: "Energy-efficient LED street lights powered by solar energy with lithium or tubular battery options.",
    category: "LED Solar Street Light",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2PcWoHD0XnjLgJPIuLu5KQc4VqSjA0.png",
    name: "Solar Water Heaters",
    description: "Efficient solar water heating systems with various capacities for residential and commercial use.",
    category: "Solar Water Heater System",
  },
  {
    id: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2ojBXLAYfukUnYux5DiLodztwwArn.png",
    name: "Garden & Home Lighting",
    description: "Solar-powered lighting solutions for gardens, homes, and outdoor spaces.",
    category: "Garden Lighting System",
  },
]

export default function ProductsPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Products</h2>
        <p className="section-subtitle">
          Discover our range of high-quality solar products designed for efficiency and durability
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products?category=${encodeURIComponent(product.category)}`}
              className="block h-full"
            >
              <div className="card h-full hover:translate-y-[-5px]">
                <div className="relative h-48 w-full">
                  <OptimizedImage
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 line-clamp-2">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/products" className="btn-primary">
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}

