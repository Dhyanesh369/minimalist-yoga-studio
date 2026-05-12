"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const classes = [
  {
    title: "Morning Flow",
    description: "Start your day with gentle movement and focused intention.",
    image: "/images/class_morning.png",
  },
  {
    title: "Beginner Yoga",
    description: "Build a strong foundation in a welcoming and safe environment.",
    image: "/images/hero.png",
  },
  {
    title: "Deep Stretch",
    description: "A slow practice focusing on deep release and restoration.",
    image: "/images/detail.png",
  },
  {
    title: "Meditation & Breathwork",
    description: "Cultivate inner clarity through guided mindfulness practices.",
    image: "/images/class_meditation.png",
  },
];

import { Section, Heading, Button } from "@/components/ui";

export default function ClassGrid() {
  return (
    <Section bg="ivory">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-12">
        <Heading level={2} subtitle="The Practice" className="mb-0 max-w-2xl">
          Featured Classes
        </Heading>
        <Link href="/classes" className="text-xs tracking-[0.3em] uppercase text-muted-text border-b border-border-studio pb-3 hover:text-sage hover:border-sage transition-all duration-700 font-bold">
          View All Classes
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {classes.map((cls, index) => (
          <motion.div
            key={cls.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group cursor-pointer"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-[32px] overflow-hidden mb-10 shadow-soft">
              <Image
                src={cls.image}
                alt={cls.title}
                fill
                className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-1000" />
            </div>
            <h3 className="text-3xl mb-4 italic font-normal group-hover:text-sage transition-colors duration-500">{cls.title}</h3>
            <p className="text-muted-text font-light tracking-wide">{cls.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
