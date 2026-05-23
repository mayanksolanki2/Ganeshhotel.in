import { Bed, UtensilsCrossed, ConciergeBell, MapPin } from "lucide-react"

const features = [
  {
    icon: Bed,
    title: "Luxury Rooms",
    description: "Spacious & premium rooms for a relaxing stay.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description: "Multi-cuisine restaurant & rooftop bar.",
  },
  {
    icon: ConciergeBell,
    title: "Room Service",
    description: "24/7 in-room dining & housekeeping.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Located in the heart of the city.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center relative"
            >
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gold/30" />
              )}
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-4">
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-gold stroke-[1.5]" />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 md:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
