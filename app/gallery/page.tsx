import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const galleryItems = [
  { src: "/images/lobby-arches.jpg", alt: "Lobby arches" },
  { src: "/images/room-suite.webp", alt: "Suite room" },
  { src: "/images/restaurant-neon.jpg", alt: "Restaurant interior" },
  { src: "/images/dining-art.jpg", alt: "Dining space" },
  { src: "/images/corridor.jpg", alt: "Hotel corridor" },
  { src: "/images/room-deluxe.webp", alt: "Deluxe room" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase">Gallery</span>
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground mt-4 mb-4">
              A glimpse of the hospitality and elegance we offer.
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse photos of our rooms, dining areas, and signature spaces designed for comfort and style.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-lg">
                <div className="relative h-80">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/95"
            >
              Contact Us for Booking
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
