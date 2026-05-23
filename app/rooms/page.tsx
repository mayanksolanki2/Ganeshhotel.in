import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Users, Bed, Wifi, Tv, Bath, Coffee, Utensils, Wind, Car, Phone, Calendar, ArrowRight, Check, Shield, Clock, Headphones } from "lucide-react"

const rooms = [
  {
    name: "Deluxe Room",
    image: "/images/room-deluxe.webp",
    guests: 2,
    bed: "King Bed",
    wifi: true,
    description: "A cozy and elegant room ideal for couples and solo travelers.",
    originalPrice: 2000,
    price: 1800,
  },
  {
    name: "Executive Room",
    image: "/images/room-executive.webp",
    guests: 2,
    bed: "King Bed",
    wifi: true,
    description: "Spacious room with modern amenities for a comfortable stay.",
    originalPrice: 2500,
    price: 2200,
  },
  {
    name: "Suite Room",
    image: "/images/room-suite.webp",
    guests: 2,
    bed: "King Bed",
    wifi: true,
    description: "Luxury suite with extra space and premium facilities for a perfect stay.",
    originalPrice: 3500,
    price: 3000,
  },
]

const amenities = [
  { icon: Utensils, title: "Food & Drinks", desc: "Delicious veg & non-veg food with a wide menu" },
  { icon: Wind, title: "Rooftop Lounge", desc: "Rooftop seating with scenic city views" },
  { icon: Coffee, title: "Rainbow Bar", desc: "Enjoy a variety of drinks in our premium bar" },
  { icon: Phone, title: "Room Service", desc: "24/7 in-room dining & housekeeping" },
  { icon: Wifi, title: "Free WiFi", desc: "High-speed internet throughout the hotel" },
  { icon: Car, title: "Parking", desc: "Secure parking for all guests" },
]

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <span className="text-primary font-medium tracking-wider text-sm uppercase">Our Rooms</span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6 leading-tight">
                Stay in Comfort & Elegance
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Experience a perfect blend of luxury, comfort and warm hospitality. Our rooms are designed to make your stay relaxing and memorable.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Bed className="w-4 h-4 text-primary" />
                  <span>Comfortable Stay</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Tv className="w-4 h-4 text-primary" />
                  <span>Modern Amenities</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Warm Hospitality</span>
                </div>
              </div>
              <Link 
                href="#rooms"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                <Calendar className="w-4 h-4" />
                Check Availability
              </Link>
            </div>
            
            {/* Right Image with Price */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/room-suite.webp"
                  alt="Suite Room"
                  width={600}
                  height={450}
                  className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                />
              </div>
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-lg px-4 py-3 shadow-lg">
                <span className="text-xs uppercase tracking-wider block mb-1">Best Price</span>
                <div className="text-sm line-through opacity-70">Rs.2,000</div>
                <div className="font-serif text-2xl font-bold">Rs.1,800</div>
                <span className="text-xs">per room / night</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase">Our Premium Rooms</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-4">
              Comfort Designed For You
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each room is thoughtfully designed to provide a relaxing ambiance and a memorable stay with all modern amenities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="relative h-[220px]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-foreground mb-3">{room.name}</h3>
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{room.guests} Guests</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4 text-primary" />
                      <span>{room.bed}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-4 h-4 text-primary" />
                      <span>Free WiFi</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground line-through">Rs.{room.originalPrice.toLocaleString()}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-2xl text-primary font-bold">Rs.{room.price.toLocaleString()}</span>
                        <span className="text-sm text-muted-foreground">/night</span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md hover:bg-primary/90 transition-colors font-medium text-sm"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase">More Than Just A Stay</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-4">
              Facilities & Amenities
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{amenity.title}</h4>
                <p className="text-xs text-muted-foreground">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Hall & Banquet Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image & Info */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/dining-art.jpg"
                  alt="Banquet Hall"
                  width={600}
                  height={400}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-primary text-primary-foreground rounded-xl p-6">
                <span className="text-xs uppercase tracking-wider opacity-80">Perfect for Every Celebration</span>
                <h3 className="font-serif text-xl md:text-2xl mt-2 mb-4">Party Hall & Banquet</h3>
                <p className="text-sm opacity-90 mb-4">
                  Host your special events, celebrations, and corporate gatherings in our elegant banquet hall.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  {["Birthday Parties", "Engagements", "Anniversaries", "Corporate Events", "Family Functions", "Get Together"].map((event, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      {event}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
              <h3 className="font-serif text-2xl text-foreground mb-6">Pre-Register for Your Event</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="">Event Type</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    placeholder="Date of Event"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <input
                    type="number"
                    placeholder="Number of Guests"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <textarea
                  placeholder="Message / Requirements"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
              
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                {[
                  { title: "Affordable Packages", desc: "Customized for your budget" },
                  { title: "Delicious Catering", desc: "Veg & Non-Veg Options" },
                  { title: "Best Ambience", desc: "Memorable Experience" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <h5 className="font-semibold text-foreground text-sm">{item.title}</h5>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Best Price Guarantee", desc: "Get the best rates when you book direct" },
              { icon: Clock, title: "Easy Cancellation", desc: "Flexible cancellation up to 24 hours" },
              { icon: Check, title: "Secure Booking", desc: "Your booking is safe and encrypted" },
              { icon: Headphones, title: "24/7 Support", desc: "Our team is always here to assist you" },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-primary-foreground">Ready for a Comfortable Stay?</h3>
              <p className="text-primary-foreground/80 text-sm md:text-base">
                Book now and enjoy a memorable experience at Ganesh Hotel.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-background text-foreground px-6 py-3 rounded-md hover:bg-background/90 transition-colors font-medium whitespace-nowrap"
              >
                Book Your Stay
              </Link>
              <Link
                href="/contact"
                className="border border-primary-foreground text-primary-foreground px-6 py-3 rounded-md hover:bg-primary-foreground/10 transition-colors font-medium whitespace-nowrap flex items-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
