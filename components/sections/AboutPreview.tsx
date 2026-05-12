"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Section, Heading, Button } from "@/components/ui";

export default function AboutPreview() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] rounded-[32px] overflow-hidden shadow-soft"
        >
          <Image
            src="/images/detail.png"
            alt="The Lumina Story"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 2.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2"
        >
          <Heading level={2} subtitle="Our Sanctuary">
            A space built for conscious stillness.
          </Heading>
          
          <p className="text-xl text-muted-text font-light leading-relaxed mb-10">
            Lumina was born from a simple realization: that in our pursuit of more, we often lose sight of what is essential. 
          </p>
          <p className="text-muted-text font-light leading-relaxed mb-16">
            Our studio is built on the principles of minimalist design and mindful movement. We believe that by simplifying our external environment, we create the necessary space for internal clarity.
          </p>
          <Button variant="secondary" href="/about" className="min-w-[240px]">
            Read Our Story
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
