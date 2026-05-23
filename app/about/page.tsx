import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Bed, Utensils, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <span className="text-primary font-medium tracking-wider text-sm uppercase">About Us</span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6 leading-tight text-balance">
                A Legacy of Warmth, Comfort & Hospitality
              </h1>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Ganesh Hotel, we believe hospitality is more than just a service - it&apos;s a tradition.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                For years, we have been dedicated to creating unforgettable experiences with personalized care, modern comfort, and warm, welcoming ambiance.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Right Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/corridor.jpg"
                  alt="Hotel Corridor"
                  width={600}
                  height={450}
                  className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                />
              </div>
              {/* Rooted in Tradition Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-bottom-8 lg:right-8 bg-card border border-border rounded-xl px-6 py-4 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 10L15 9C15 6.24 12.76 4 10 4V6C11.66 6 13 7.34 13 9V22H15V16H17V22H19V9H21Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-foreground font-semibold">Rooted in Tradition</h4>
                  <p className="text-sm text-muted-foreground">Inspired by values. Driven by excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "trophy", number: "15+", label: "Years of Hospitality", desc: "A legacy built on trust and quality service." },
              { icon: "bed", number: "25+", label: "Premium Rooms", desc: "Elegantly designed rooms for a perfect stay." },
              { icon: "utensils", number: "2", label: "Restaurant & Bar", desc: "Delight in multi-cuisine food & premium drinks." },
              { icon: "users", number: "10K+", label: "Happy Guests", desc: "Thousands of smiles and memorable stays." },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon === "trophy" && (
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                  {stat.icon === "bed" && <Bed className="w-7 h-7 text-primary" />}
                  {stat.icon === "utensils" && <Utensils className="w-7 h-7 text-primary" />}
                  {stat.icon === "users" && (
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                </div>
                <div className="font-serif text-3xl md:text-4xl text-primary font-bold mb-1">{stat.number}</div>
                <div className="font-medium text-foreground mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Images */}
            <div className="grid gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/restaurant-neon.jpg"
                  alt="Rainbow Lounge"
                  width={500}
                  height={300}
                  className="w-full h-[200px] md:h-[250px] object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/dining-art.jpg"
                    alt="Dining Area"
                    width={240}
                    height={180}
                    className="w-full h-[150px] md:h-[180px] object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/lobby-arches.jpg"
                    alt="Lobby"
                    width={240}
                    height={180}
                    className="w-full h-[150px] md:h-[180px] object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div>
              <span className="text-primary font-medium tracking-wider text-sm uppercase">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-6 leading-tight">
                Where Every Guest Feels Like Family
              </h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ganesh Hotel was founded with a simple promise - to offer guests a peaceful, comfortable, and memorable stay.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From our thoughtfully designed rooms to our fine dining experiences, every detail is crafted with care to make you feel at home.
              </p>
              
              {/* Features */}
              <div className="space-y-6">
                {[
                  { icon: Heart, title: "Warm & Friendly Service", desc: "Our team is dedicated to providing personalized service with a smile." },
                  { icon: Bed, title: "Comfort Redefined", desc: "Spacious rooms, modern amenities and a peaceful ambiance for your relaxation." },
                  { icon: Utensils, title: "Food that Delights", desc: "Savor a wide range of cuisines and handcrafted drinks at our restaurant & bar." },
                  { icon: MapPin, title: "Perfect Location", desc: "Located in the heart of the city, close to major attractions and business hubs." },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Bed className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground">Experience Luxury. Feel at Home.</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Join thousands of satisfied guests who have made Ganesh Hotel their first choice for comfort, luxury and memorable experiences.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                href="/rooms"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium whitespace-nowrap"
              >
                Book Your Stay
              </Link>
              <Link
                href="/contact"
                className="border border-border text-foreground px-6 py-3 rounded-md hover:bg-accent transition-colors font-medium whitespace-nowrap flex items-center gap-2"
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
