import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RoomsSection } from "@/components/rooms-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <RoomsSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
