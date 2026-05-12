"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="container-custom relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl"
        >
          <span className="text-sm tracking-[0.4em] uppercase text-muted-text mb-10 block font-medium">
            Find your center
          </span>
          <h1 className="mb-14 leading-[1.1]">
            A sanctuary for <br />
            <span className="italic">conscious stillness.</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-20 text-xl md:text-2xl text-muted-text font-light leading-relaxed">
            Release the weight of the day and reconnect with your inner rhythm. 
            Lumina is a space designed for you to slow down, breathe, and simply be.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            <button className="btn-primary min-w-[240px] text-base tracking-widest uppercase py-5">
              Begin Your Practice
            </button>
            <button className="btn-secondary min-w-[240px] text-base tracking-widest uppercase py-5">
              Explore The Studio
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/hero.png"
          alt="Lumina Yoga Studio Sanctuary"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      <div className="absolute inset-0 -z-5 bg-background/30" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}


