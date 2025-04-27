import AboutHeader from "@/components/about/about-header"
import CompanyOverview from "@/components/about/company-overview"
import MissionVision from "@/components/about/mission-vision"
import TeamSection from "@/components/about/team-section"
import Certifications from "@/components/about/certifications"
import ClientsSection from "@/components/about/clients-section"
import ContactSection from "@/components/about/contact-section"

export default function AboutPage() {
  return (
    <>
      {/* Header Section */}
      <AboutHeader />

      {/* Company Overview */}
      <CompanyOverview />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Team Section */}
      <TeamSection />

      {/* Certifications */}
      <Certifications />

      {/* Clients Section */}
      <ClientsSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}

