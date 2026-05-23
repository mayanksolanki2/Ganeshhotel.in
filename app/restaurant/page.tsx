import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Utensils, Wine, Clock, Phone, ArrowRight } from "lucide-react"

const menuHighlights = [
  {
    category: "Starters",
    items: ["Veg Spring Rolls", "Paneer Tikka", "Chicken 65", "Crispy Corn"],
  },
  {
    category: "Main Course",
    items: ["Butter Chicken", "Paneer Butter Masala", "Dal Makhani", "Biryani (Veg/Non-Veg)"],
  },
  {
    category: "Beverages",
    items: ["Fresh Juices", "Mocktails", "Premium Cocktails", "Coffee & Tea"],
  },
  {
    category: "Desserts",
    items: ["Gulab Jamun", "Ice Cream", "Kheer", "Brownie with Ice Cream"],
  },
]

const features = [
  {
    icon: Utensils,
    title: "Multi-Cuisine Menu",
    desc: "Enjoy a wide range of Indian, Chinese and Continental dishes crafted by expert chefs.",
  },
  {
    icon: Wine,
    title: "Rainbow Bar",
    desc: "Unwind with premium cocktails, mocktails and a curated selection of beverages.",
  },
  {
    icon: Clock,
    title: "Open All Day",
    desc: "Breakfast, lunch, dinner and late-night bites — we serve meals throughout the day.",
  },
  {
    icon: Phone,
    title: "Room Service",
    desc: "Order your favourite dishes right to your room, available 24/7.",
  },
]

export default function RestaurantPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-medium tracking-wider text-sm uppercase">Dining & Bar</span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6 leading-tight">
                Restaurant &amp; Bar
              </h1>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Indulge in a memorable dining experience at Ganesh Hotel. Our restaurant serves freshly prepared multi-cuisine dishes in an elegant ambiance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From a hearty breakfast to a late-night dinner, enjoy every meal with impeccable service and flavours that delight the palate.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Make a Reservation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/bamboo-dining.jpg"
                  alt="Restaurant at Ganesh Hotel"
                  width={600}
                  height={450}
                  className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase">Dining Ambiance</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-4">A Feast for the Eyes Too</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/restaurant-day.jpg"
                alt="Restaurant interior"
                width={600}
                height={400}
                className="w-full h-[250px] md:h-[320px] object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/restaurant-neon.jpg"
                alt="Rainbow Lounge"
                width={600}
                height={400}
                className="w-full h-[250px] md:h-[320px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase">Our Menu</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-4">Menu Highlights</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {menuHighlights.map((section, index) => (
              <div key={index} className="bg-background rounded-xl p-5 border border-border shadow-sm">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider text-primary">
                  {section.category}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-primary-foreground">
                Ready to Dine With Us?
              </h3>
              <p className="text-primary-foreground/80 text-sm md:text-base">
                Contact us to make a reservation or enquire about group dining packages.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-background text-foreground px-6 py-3 rounded-md hover:bg-background/90 transition-colors font-medium whitespace-nowrap"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
