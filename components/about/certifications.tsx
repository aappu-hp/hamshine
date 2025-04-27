import Image from "next/image"
import { Award } from "lucide-react"

// Update the certifications array to use the provided images
const certifications = [
  {
    id: 1,
    name: "Azim Premji Foundation Recognition",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20230410-QfC8DQQax88UTuJT5Ssz9Tx4IJ346T.png",
    description: "Recognition for implementing Computer Aided Learning in Rural Elementary Schools in India",
    year: "2004",
  },
  {
    id: 2,
    name: "KREDL Special Prize",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20230439-ruLhn0vYyAkjA33gTacH2xBt1ASLJx.png",
    description: "Special Prize for Solar Lighting Systems Installed For A Complete Village In Record Time",
    year: "1996-2004",
  },
  {
    id: 3,
    name: "India 5000 Best MSME Award Nomination",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20230501-z6kBquPXTJPRgl4aWQYgIq08gF77xI.png",
    description: "Nominated for India 5000 Best MSME Award for Quality Excellence",
    year: "2018",
  },
  {
    id: 4,
    name: "Udyog Aadhar Registration",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20230539-KbNmz0Sri3juAN0pg84n1U0dWveb3o.png",
    description: "Official manufacturing credentials and business registration",
    year: "Current",
  },
]

export default function Certifications() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Award className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We adhere to the highest industry standards and have received various certifications that reflect our
            commitment to quality and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((certification) => (
            <div
              key={certification.id}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-[300px] w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src={certification.image || "/placeholder.svg"}
                  alt={certification.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">{certification.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{certification.description}</p>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">
                {certification.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

