import Image from "next/image"

const clients = [
  {
    name: "Azim Premji Foundation",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gmNjCdYsg9IvyTyDiJ8OO1lrCSwh3o.png",
  },
  {
    name: "Bharat Petroleum",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yK8mCLQzyO2bt8D3VYmMvu1N7SmGX0.png",
  },
  {
    name: "ESSAR",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F48kDHGE87RAAvGQC4ubZX4bYMJRN7.png",
  },
  {
    name: "Hindustan Petroleum",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pmz5KGlLTXqF4Gkuf36PESJGo4DVn6.png",
  },
  {
    name: "Indian Oil",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-phCyAjmwT27xVMGpnEmC9UTeI4tFbc.png",
  },
  {
    name: "Rajeev Institute of Technology",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EB0uw68PRgR0uqHW0kv2jmch83zyOO.png",
  },
]

export default function ClientsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are proud to serve some of India's most prestigious organizations across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-20">
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Notable visit: Mr. D. Veerendra Heggadeji, Dharmadhikari of Shree Kshetra Dharmasthala, visited our factory
            on January 25, 2005
          </p>
        </div>
      </div>
    </section>
  )
}

