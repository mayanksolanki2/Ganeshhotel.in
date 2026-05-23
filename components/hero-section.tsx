import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-end pb-8 md:pb-12">
      {/* Background Image - Full visibility with proper centering */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Ganesh Hotel Building"
          fill
          className="object-cover object-center md:object-center"
          style={{ objectPosition: "50% 30%" }}
          priority
        />
        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent md:via-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          {/* Left Content - Centered on mobile */}
          <div className="text-white text-center md:text-left">
            <p className="text-gold text-sm md:text-base tracking-[0.3em] mb-4 font-medium">
              WELCOME TO GANESH HOTEL
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="italic">Where Luxury</span>
              <br />
              <span className="italic text-gold">Meets Divinity</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-md mb-8 leading-relaxed mx-auto md:mx-0">
              A premium stay with elegant rooms, fine dining, and unforgettable hospitality in the heart of the city.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="#rooms"
                className="px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-semibold text-sm rounded hover:bg-cream transition-colors"
              >
                EXPLORE ROOMS
              </Link>
              <Link
                href="#contact"
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-semibold text-sm rounded hover:bg-white/10 transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-4 pb-4">
          {/* Google Rating */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <span className="text-white text-xs font-medium">Google</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-white text-xl md:text-2xl font-bold ml-2">4.8/5</span>
              </div>
              <span className="text-white/70 text-xs md:text-sm">700+ Happy Guests</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <div className="w-8 h-12 md:w-10 md:h-14 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="text-[10px] md:text-xs tracking-widest mt-2">SCROLL TO EXPLORE</span>
          </div>

          {/* Location */}
          <div className="flex items-center md:items-start gap-2 md:gap-3">
            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-gold mt-0.5" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-gold text-sm md:text-base font-semibold">Prime Location</span>
              <span className="text-white/70 text-xs md:text-sm">Easy Access to City</span>
              <span className="text-white/70 text-xs md:text-sm">Attractions & Business Hubs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
