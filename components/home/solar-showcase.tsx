import Image from "next/image"
import Link from "next/link"

export default function SolarShowcase() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">Solar Energy in Action</h2>
        <p className="section-subtitle">
          Explore how our solar solutions are transforming homes and businesses across India
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Main Image */}
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.04%20PM%20%281%29-ramawjiZ6r2tUafDiF5sOqJoY0urI8.jpeg"
              alt="Solar Panel Installation"
              fill
              className="object-cover"
            />
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[180px] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.09%20PM-P4sG42BABwy5l2qM7CgONHrIPvMavD.jpeg"
                alt="Residential Solar Installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <h4 className="text-white font-medium text-sm">Residential Solutions</h4>
              </div>
            </div>

            <div className="relative h-[180px] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.01%20PM-2PzClVId7fxq05BJ0GPgOvKv1kuxan.jpeg"
                alt="Commercial Solar Installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <h4 className="text-white font-medium text-sm">Commercial Projects</h4>
              </div>
            </div>

            <div className="relative h-[180px] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.07%20PM-csGHlwxkHBOJqmKRnxOw458hApRKlp.jpeg"
                alt="Solar Panel Closeup"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <h4 className="text-white font-medium text-sm">Panel Technology</h4>
              </div>
            </div>

            <div className="relative h-[180px] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%209.26.04%20PM-8saBHwHQhuhw0XQx0eiVcK8XWbtnMh.jpeg"
                alt="Solar Energy Storage"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <h4 className="text-white font-medium text-sm">Energy Storage</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/gallery" className="btn-secondary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
