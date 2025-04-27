import HeroCarousel from "@/components/home/hero-carousel"
import WhyChooseUs from "@/components/home/why-choose-us"
import ProductsPreview from "@/components/home/products-preview"
import CustomerFeedback from "@/components/home/customer-feedback"
import ClientsCertifications from "@/components/home/clients-certifications"
import CtaSection from "@/components/home/cta-section"
import SolarShowcase from "@/components/home/solar-showcase"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroCarousel />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Solar Showcase (replacing Installation Preview) */}
      <SolarShowcase />

      {/* Products Preview */}
      <ProductsPreview />

      {/* Customer Feedback */}
      <CustomerFeedback />

      {/* Clients & Certifications */}
      <ClientsCertifications />

      {/* Call to Action */}
      <CtaSection />
    </>
  )
}

