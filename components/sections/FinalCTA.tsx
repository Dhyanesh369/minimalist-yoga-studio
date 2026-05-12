"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button, Heading } from "@/components/ui";

export default function FinalCTA() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Heading level={2} center>
            Make time for <br />
            <span className="italic font-normal">yourself again.</span>
          </Heading>
          <p className="text-xl text-muted-text mb-16 font-light">
            Start with one calming session this week.
          </p>
          <Button href="/contact" className="min-w-[280px]">
            Book Your First Class
          </Button>
        </motion.div>
      </div>

      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/final_cta.png"
          alt="Begin your wellness journey"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>
    </section>
  );
}
