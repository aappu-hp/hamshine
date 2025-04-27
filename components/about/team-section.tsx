import { Users, Award, Shield } from "lucide-react"

export default function TeamSection() {
  const teamHighlights = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Expert Team",
      description:
        "Our skilled workforce stays current with modern production techniques and ideas, ensuring the highest quality standards.",
      color: "bg-blue-600",
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Quality Control",
      description:
        "Our dedicated quality control unit verifies all products against stringent standards for design, quality, and finish.",
      color: "bg-green-600",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Installation & Service",
      description:
        "Our specialists carry out installation and servicing procedures, testing manufactured items to ensure exceptional quality.",
      color: "bg-orange-500",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Led by our CEO Mr. Hamsraj H. J., our team of trained and informed professionals ensures excellence in every
            aspect of our operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {teamHighlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className={`w-12 h-12 ${highlight.color} rounded-lg flex items-center justify-center mb-4`}>
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

