import Image from "next/image"
import { Award, Shield, CheckCircle } from "lucide-react"

// Client data (would be fetched from legacy site in production)
const clients = [
  {
    id: 1,
    name: "Azim Premji University",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gmNjCdYsg9IvyTyDiJ8OO1lrCSwh3o.png",
  },
  {
    id: 2,
    name: "Bharat Petroleum",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yK8mCLQzyO2bt8D3VYmMvu1N7SmGX0.png",
  },
  {
    id: 3,
    name: "ESSAR",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F48kDHGE87RAAvGQC4ubZX4bYMJRN7.png",
  },
  {
    id: 4,
    name: "Hindustan Petroleum",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pmz5KGlLTXqF4Gkuf36PESJGo4DVn6.png",
  },
  {
    id: 5,
    name: "Indian Oil",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-phCyAjmwT27xVMGpnEmC9UTeI4tFbc.png",
  },
  {
    id: 6,
    name: "Rajeev Institute of Technology",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EB0uw68PRgR0uqHW0kv2jmch83zyOO.png",
  },
  { id: 7, name: "Client 7", logo: "/placeholder.svg?height=80&width=160" },
  { id: 8, name: "Client 8", logo: "/placeholder.svg?height=80&width=160" },
]

// Certification data with the provided images
const certifications = [
  {
    id: 1,
    name: "Azim Premji Foundation Recognition",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20230410-QfC8DQQax88UTuJT5Ssz9Tx4IJ346T.png",
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    description: "Recognition for implementing Computer Aided Learning in Rural Elementary Schools in India",
    year: "2004",
  },
  {
    id: 2,
    name: "KREDL Special Prize",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20230439-ruLhn0vYyAkjA33gTacH2xBt1ASLJx.png",
    icon: <Award className="h-6 w-6 text-green-600" />,
    description: "Special Prize for Solar Lighting Systems Installed For A Complete Village In Record Time",
    year: "1996-2004",
  },
  {
    id: 3,
    name: "India 5000 Best MSME Award Nomination",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20230501-z6kBquPXTJPRgl4aWQYgIq08gF77xI.png",
    icon: <CheckCircle className="h-6 w-6 text-orange-600" />,
    description: "Nominated for India 5000 Best MSME Award for Quality Excellence",
    year: "2018",
  },
  {
    id: 4,
    name: "Udyog Aadhar Registration",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20230539-KbNmz0Sri3juAN0pg84n1U0dWveb3o.png",
    icon: <Shield className="h-6 w-6 text-purple-600" />,
    description: "Official manufacturing credentials and business registration",
    year: "Current",
  },
]

export default function ClientsCertifications() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title mb-16">Our Clients & Certifications</h2>

        {/* Clients Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10">Trusted by Leading Organizations</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 items-center">
            {clients.slice(0, 6).map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-xl shadow-sm p-6 md:p-8 flex items-center justify-center h-28 md:h-36 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={200}
                  height={100}
                  className="object-contain max-h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10">Industry Certifications & Awards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((certification) => (
              <div
                key={certification.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-4 border-b border-gray-100 flex items-center justify-center bg-gray-50 h-48 relative">
                  <Image
                    src={certification.logo || "/placeholder.svg"}
                    alt={certification.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-3">{certification.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{certification.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{certification.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">
                    {certification.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

