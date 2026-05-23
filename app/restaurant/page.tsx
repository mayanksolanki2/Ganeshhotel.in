import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Coffee, Utensils, Star, Sparkles } from "lucide-react"

const restaurantFeatures = [
  { icon: Utensils, title: "Multi-Cuisine Menu", description: "Enjoy local specialties and international favorites prepared fresh daily." },
  { icon: Coffee, title: "Rooftop Bar", description: "Sip handcrafted beverages while you take in the city skyline." },
  { icon: Star, title: "Chef’s Signature", description: "A curated menu designed to deliver elevated comfort dining." },
  { icon: Sparkles, title: "Warm Ambience", description: "Relax in stylish dining rooms with thoughtful lighting and decor." },
]

export default function RestaurantPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="text-primary font-medium tracking-wider text-sm uppercase">Restaurant & Bar</span>
              <h1 className="font-serif text-4xl sm:text-5xl text-foreground mt-4 mb-6">
                Dining experiences crafted to delight every guest.
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ganesh Hotel offers a refined restaurant, lively rooftop bar, and curated dining menu made for unforgettable moments.
              </p>
              <div className="grid gap-5">
                {restaurantFeatures.map((feature, index) => (
                  <div key={index} className="rounded-3xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <feature.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/95"
                >
                  Reserve a Table
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/images/restaurant-neon.jpg"
                alt="Restaurant dining area"
                width={960}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase">Our Menu</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-4">Flavors from sunrise to sunset</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover premium dining options with vegetarian specialties, fresh local produce, and handcrafted beverages.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Signature Platter", description: "A chef-selected spread of our most popular dishes." },
              { title: "Seasonal Thali", description: "Daily fresh preparations with regional favorites." },
              { title: "Cocktail Selection", description: "Classic and modern drinks from the rooftop lounge." },
              { title: "Dessert Delights", description: "Sweet finishes created to satisfy every guest." },
            ].map((item, index) => (
              <div key={index} className="rounded-3xl border border-border bg-background p-8">
                <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
