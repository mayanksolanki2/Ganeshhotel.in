import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const contactItems = [
  { icon: MapPin, label: "Address", value: "123 Ganesh Road, City Center, India" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@ganeshhotel.in" },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto rounded-[2rem] border border-border bg-card p-8 shadow-2xl">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div>
                <span className="text-primary font-medium tracking-wider text-sm uppercase">Contact</span>
                <h1 className="font-serif text-4xl sm:text-5xl text-foreground mt-4 mb-6">
                  We’re here to help you plan the perfect stay.
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Have a question about reservations, group bookings, or hotel amenities? Reach out and our team
                  will respond as soon as possible.
                </p>

                <div className="grid gap-4">
                  {contactItems.map((item, index) => (
                    <div key={index} className="rounded-3xl border border-border bg-background p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">{item.label}</span>
                      </div>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-primary/5 p-8">
                <div className="mb-8">
                  <h2 className="font-serif text-3xl text-foreground mb-4">Need help right away?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Call us directly or send an email and we’ll take care of the rest. We’re available 24/7
                    for quick assistance and reservation support.
                  </p>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/rooms"
                    className="block w-full rounded-xl bg-primary px-5 py-3 text-center text-primary-foreground font-medium hover:bg-primary/95"
                  >
                    Book a Room
                  </Link>
                  <Link
                    href="/"
                    className="block w-full rounded-xl border border-border px-5 py-3 text-center text-foreground font-medium hover:bg-accent"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
