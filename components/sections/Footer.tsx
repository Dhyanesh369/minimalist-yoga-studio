"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border-studio py-32 px-6 md:px-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-heading tracking-[0.2em] text-foreground mb-10 block">
              LUMINA
            </Link>
            <p className="max-w-sm text-muted-text font-light leading-relaxed">
              A minimalist sanctuary for conscious movement and inner stillness. 
              Designed to help you reconnect with what is essential.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase mb-10 font-bold text-sage">The Studio</h4>
            <ul className="space-y-6">
              <li><Link href="/classes" className="text-sm text-muted-text hover:text-foreground transition-all duration-700 font-light">Classes</Link></li>
              <li><Link href="/schedule" className="text-sm text-muted-text hover:text-foreground transition-all duration-700 font-light">Schedule</Link></li>
              <li><Link href="/about" className="text-sm text-muted-text hover:text-foreground transition-all duration-700 font-light">Our Story</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-text hover:text-foreground transition-all duration-700 font-light">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase mb-10 font-bold text-sage">Connect</h4>
            <ul className="space-y-6">
              <li><a href="#" className="text-sm text-muted-text hover:text-foreground transition-all duration-700 font-light">Instagram</a></li>
              <li><a href="#" className="text-sm text-muted-text hover:text-foreground transition-all duration-700 font-light">Journal</a></li>
              <li><a href="#" className="text-sm text-muted-text hover:text-foreground transition-all duration-700 font-light">Spotify</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border-studio gap-8">
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-text font-medium italic">© 2026 Lumina Yoga Studio.</span>
          <div className="flex gap-12">
            <Link href="/privacy" className="text-[10px] tracking-[0.2em] uppercase text-muted-text hover:text-foreground transition-all duration-700 font-medium">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] tracking-[0.2em] uppercase text-muted-text hover:text-foreground transition-all duration-700 font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

