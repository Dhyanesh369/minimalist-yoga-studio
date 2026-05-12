"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button, Heading } from "@/components/ui";

export default function HeroSplit() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-background">
      {/* Left: Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 md:px-12 lg:px-24 pt-40 pb-20 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-center lg:text-left"
        >
          <Heading level={1} subtitle="Elevate your wellbeing">
            Find calm in the <br />
            <span className="italic font-normal">middle of a busy life.</span>
          </Heading>
          
          <p className="mb-12 md:mb-16 text-lg md:text-xl text-muted-text font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
            Gentle yoga classes designed to help you move better, breathe deeper, and feel lighter after every session.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 md:gap-12">
            <Button href="/contact" className="min-w-[260px]">
              Book Your First Class
            </Button>
            <Link href="/classes" className="text-xs tracking-[0.3em] uppercase font-bold text-muted-text hover:text-sage transition-all duration-700">
              Explore Classes
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right: Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-1/2 h-[600px] lg:h-screen relative overflow-hidden"
      >
        <Image
          src="/images/hero_main.png"
          alt="Cinematic yoga session at Lumina Studio"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-background/10" />
      </motion.div>
    </section>
  );
}
