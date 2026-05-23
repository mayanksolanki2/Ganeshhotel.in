"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/rooms", label: "ROOMS" },
  { href: "/restaurant", label: "RESTAURANT & BAR" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/contact", label: "CONTACT" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Enlarged and prominent */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Ganesh Hotel Logo"
              width={180}
              height={80}
              className="w-32 h-14 sm:w-40 sm:h-16 md:w-48 md:h-20 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs xl:text-sm font-medium transition-colors tracking-wide ${
                  isScrolled 
                    ? "text-foreground/80 hover:text-gold" 
                    : "text-white/90 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle />
            <Link
              href="/rooms"
              className="hidden sm:inline-flex px-4 md:px-6 py-2 md:py-2.5 bg-gold text-primary-foreground text-xs md:text-sm font-semibold rounded hover:bg-gold-dark transition-colors tracking-wide"
            >
              BOOK NOW
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-sm rounded-b-lg">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors py-2 px-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/rooms"
                onClick={() => setIsMenuOpen(false)}
                className="sm:hidden mt-2 px-6 py-2.5 bg-gold text-primary-foreground text-sm font-semibold rounded hover:bg-gold-dark transition-colors text-center mx-2"
              >
                BOOK NOW
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
