"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Schedule", href: "/schedule" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

import { Button } from "@/components/ui";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-in-out">
        {/* Navigation */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className={`transition-all duration-1000 ease-in-out py-6 md:py-8 px-6 md:px-12 ${
            scrolled 
              ? "bg-[#FDFCFB]/95 backdrop-blur-xl shadow-soft py-4 md:py-5" 
              : "bg-transparent"
          }`}
        >
          <nav className="flex items-center justify-between w-full max-w-[1280px] mx-auto">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-heading tracking-[0.3em] text-foreground z-[60] transition-opacity hover:opacity-70"
              aria-label="Lumina Home"
            >
              LUMINA
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`relative text-[10px] tracking-[0.4em] uppercase transition-all duration-700 hover:text-sage group ${
                    pathname === link.href ? "text-foreground font-bold" : "text-muted-text font-bold"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-sage transition-all duration-1000 group-hover:w-full ${
                    pathname === link.href ? "w-full" : ""
                  }`} />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button href="/contact" className="min-h-[50px] px-10 text-[9px]">
                Book Your Class
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden z-[60] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
            </button>
          </nav>
        </motion.header>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#FDFCFB] z-[55] flex flex-col items-center justify-center gap-12"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-heading tracking-[0.2em] uppercase transition-all duration-1000 ${
                    pathname === link.href ? "text-sage" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 w-full px-12 max-w-sm"
            >
              <Button 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                Book Your First Class
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
