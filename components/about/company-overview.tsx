import Image from "next/image"
import { Calendar, Users, Globe, IndianRupee } from "lucide-react"

export default function CompanyOverview() {
  const companyStats = [
    {
      icon: <Calendar className="h-6 w-6 text-green-600" />,
      label: "Established",
      value: "1982",
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      label: "Employees",
      value: "29",
    },
    {
      icon: <Globe className="h-6 w-6 text-green-600" />,
      label: "Market Coverage",
      value: "Worldwide",
    },
    {
      icon: <IndianRupee className="h-6 w-6 text-green-600" />,
      label: "Annual Turnover",
      value: "₹50 Lakhs",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hamshine Electronics & Energy Systems, founded in 1982, is a leading manufacturer and trader of
                comprehensive solar energy solutions. We specialize in Solar Power Packs, Garden Lighting Systems, Solar
                Home Lighting Systems, LED Solar Street Lights, and other innovative products.
              </p>
              <p>
                We manufacture our products using high-quality raw materials sourced from recognized marketplace
                vendors. Our commitment to competitive pricing and timely delivery has made us a trusted name in the
                industry.
              </p>
              <p>
                Our state-of-the-art facility is equipped with all necessary equipment, machinery, and technologies to
                deliver a wide variety of high-quality products. We maintain stringent quality control measures,
                verifying our complete range against predefined factors such as design, quality, and finish.
              </p>
            </div>
          </div>

          {/* Factory Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VXeQol8icoOma3bx6ZEWtWYbypO36P.png"
              alt="Hamshine Electronics & Energy Systems Factory"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companyStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

