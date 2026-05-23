import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Shield, Award, Heart, Facebook, Instagram, MessageCircle, Youtube } from "lucide-react"

const trustFeatures = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "We are always here to help you",
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Your data is safe with us",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "Get the best rates when you book direct",
  },
  {
    icon: Heart,
    title: "Trusted by Guests",
    description: "Loved by hundreds of happy guests",
  },
]

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Restaurant & Bar", href: "#restaurant" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Trust Features */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Ganesh Hotel Logo"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gold">Ganesh Hotel</span>
                <span className="text-xs text-muted-foreground tracking-wider">Stay Divine. Experience Luxury.</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experience divine hospitality with luxurious rooms, fine dining, and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 12345 67890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@ganeshhotel.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Your Location, City, India</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Ganesh Hotel. All Rights Reserved.</p>
            <p className="flex items-center gap-1">
              Designed with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for a Luxury Experience
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
