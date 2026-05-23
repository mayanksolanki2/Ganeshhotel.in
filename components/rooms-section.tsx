"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, BedDouble, Wifi, ChevronLeft, ChevronRight, Tv, Bath, Coffee } from "lucide-react"
import { useState } from "react"

const rooms = [
  {
    name: "Deluxe Room",
    image: "/images/room-1.jpg",
    guests: 2,
    bed: "King Bed",
    wifi: true,
    price: "2,499",
    description: "Comfortable room with modern amenities",
  },
  {
    name: "Executive Room",
    image: "/images/room-2.jpg",
    guests: 2,
    bed: "King Bed",
    wifi: true,
    price: "3,499",
    description: "Spacious room with premium furnishing",
  },
  {
    name: "Suite Room",
    image: "/images/room-3.webp",
    guests: 2,
    bed: "King Bed",
    wifi: true,
    price: "4,999",
    description: "Luxurious suite with seating area",
  },
]

export function RoomsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % rooms.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length)
  }

  return (
    <section id="rooms" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <div className="text-center md:text-left">
            <p className="text-gold text-sm tracking-[0.2em] mb-2 font-medium">OUR ROOMS</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="italic">Stay in Comfort & Style</span>
              <span className="hidden md:inline-block ml-4 w-12 md:w-20 h-px bg-gold align-middle"></span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md text-sm md:text-base mx-auto md:mx-0">
              Choose from our selection of premium rooms designed for your comfort and luxury.
            </p>
          </div>
          <Link
            href="#rooms"
            className="self-center md:self-auto px-6 py-2.5 border-2 border-foreground text-foreground text-sm font-semibold rounded hover:bg-foreground hover:text-background transition-colors"
          >
            VIEW ALL ROOMS
          </Link>
        </div>

        {/* Rooms Grid */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {rooms.map((room) => (
              <div
                key={room.name}
                className="group bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Price tag */}
                  <div className="absolute top-4 right-4 bg-gold text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    ₹{room.price}/night
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {room.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{room.description}</p>
                  
                  {/* Amenities */}
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs md:text-sm mb-5 pb-5 border-b border-border">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-gold" />
                      <span>{room.guests} Guests</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-4 h-4 text-gold" />
                      <span>{room.bed}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="w-4 h-4 text-gold" />
                      <span>Free WiFi</span>
                    </div>
                  </div>

                  {/* Additional amenities icons */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Tv className="w-5 h-5 text-gold" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Bath className="w-5 h-5 text-gold" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Coffee className="w-5 h-5 text-gold" />
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Link
                    href="#booking"
                    className="block w-full py-3 bg-gold text-primary-foreground text-sm font-semibold rounded-lg hover:bg-gold-dark transition-colors text-center"
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-32 -translate-x-2 md:-translate-x-5 w-10 h-10 md:w-12 md:h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors z-10"
            aria-label="Previous room"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-32 translate-x-2 md:translate-x-5 w-10 h-10 md:w-12 md:h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors z-10"
            aria-label="Next room"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}
