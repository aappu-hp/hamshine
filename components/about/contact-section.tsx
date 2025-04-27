import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  // Updated contact information
  const contactInfo = {
    address: "NO 7A1 B.KATIHALLI INDUSTRIAL AREA, Karnataka 573201, India",
    phone: "+91-9741229150",
    email: "hamshine@gmail.com",
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any inquiries about our products and services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-600 text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">
                  Mobile: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600 text-sm">
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

