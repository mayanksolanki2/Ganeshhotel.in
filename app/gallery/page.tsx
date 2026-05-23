import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

const galleryImages = [
  { src: "/images/hero.png", alt: "Ganesh Hotel Exterior", label: "Hotel Exterior" },
  { src: "/images/lobby-arches.jpg", alt: "Hotel Lobby", label: "Lobby" },
  { src: "/images/corridor.jpg", alt: "Hotel Corridor", label: "Corridor" },
  { src: "/images/room-deluxe.webp", alt: "Deluxe Room", label: "Deluxe Room" },
  { src: "/images/room-executive.webp", alt: "Executive Room", label: "Executive Room" },
  { src: "/images/room-suite.webp", alt: "Suite Room", label: "Suite Room" },
  { src: "/images/bamboo-dining.jpg", alt: "Dining Area", label: "Dining" },
  { src: "/images/restaurant-day.jpg", alt: "Restaurant", label: "Restaurant" },
  { src: "/images/restaurant-neon.jpg", alt: "Rainbow Lounge", label: "Rainbow Lounge" },
  { src: "/images/dining-art.jpg", alt: "Banquet Hall", label: "Banquet Hall" },
  { src: "/images/reception.jpg", alt: "Reception", label: "Reception" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-medium tracking-wider text-sm uppercase">Our Gallery</span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-4 leading-tight">
            A Visual Tour
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore the beauty and elegance of Ganesh Hotel through our gallery of rooms, dining spaces, and facilities.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-md border border-border group relative"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <span className="text-white text-sm font-medium px-4 py-3">{image.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
