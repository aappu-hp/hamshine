import GalleryHeader from "@/components/gallery/gallery-header"
import GalleryGrid from "@/components/gallery/gallery-grid"
import GalleryCta from "@/components/gallery/gallery-cta"

export default function GalleryPage() {
  return (
    <>
      {/* Header Section */}
      <GalleryHeader />

      {/* Gallery Grid */}
      <GalleryGrid />

      {/* Call to Action */}
      <GalleryCta />
    </>
  )
}

