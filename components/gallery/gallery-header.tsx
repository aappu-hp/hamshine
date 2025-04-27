"use client"

export default function GalleryHeader() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-amber-50 to-white">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
          Our Gallery
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore our portfolio of solar installations and products that are powering a sustainable future.
        </p>
      </div>
    </section>
  )
}
