"use client"

import Image from "next/image"
import { Check, Phone } from "lucide-react"
import { useState } from "react"

const benefits = [
  "Best Price Guarantee",
  "Free Cancellation",
  "Exclusive Offers",
]

export function BookingSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="booking" className="relative py-16 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/95 to-amber-800/90">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop"
          alt="Hotel interior"
          fill
          className="object-cover mix-blend-overlay opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <p className="text-gold text-sm tracking-[0.2em] mb-3 font-medium">BOOK YOUR STAY</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="italic">Your Perfect Stay</span>
              <br />
              <span className="italic">Awaits You</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-md text-sm md:text-base leading-relaxed">
              Book directly with us for the best prices and exclusive benefits.
            </p>
            
            {/* Benefits */}
            <div className="space-y-3 md:space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-gold" />
                  </div>
                  <span className="text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Send Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="checkIn"
                  placeholder="Check-in Date"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  required
                />
                <input
                  type="date"
                  name="checkOut"
                  placeholder="Check-out Date"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  required
                >
                  <option value="">Select Room Type</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="executive">Executive Room</option>
                  <option value="suite">Suite Room</option>
                </select>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  required
                >
                  <option value="">Number of Guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>
              
              <textarea
                name="message"
                placeholder="Additional Requests / Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
              />
              
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gold text-primary-foreground font-semibold rounded-lg hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  SEND ENQUIRY
                </button>
                <a
                  href="https://wa.me/911234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-card border-2 border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  WHATSAPP BOOKING
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
