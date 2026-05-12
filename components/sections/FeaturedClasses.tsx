"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const featuredClasses = [
  {
    title: "Vinyasa Flow",
    description: "A rhythmic movement practice synchronized with the breath, designed to build internal heat and physical grace.",
    duration: "60 min",
    level: "All Levels",
  },
  {
    title: "Yin Yoga",
    description: "A meditative, slow-paced practice focusing on deep release and the gentle restoration of the self.",
    duration: "75 min",
    level: "Restorative",
  },
  {
    title: "Mindful Meditation",
    description: "Find clarity amidst the noise through guided breathwork and the simple practice of presence.",
    duration: "30 min",
    level: "Open to All",
  },
];

export default function FeaturedClasses() {
  return (
    <section>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-sm tracking-[0.4em] uppercase text-muted-text mb-10 block font-medium">
              Curated Offerings
            </span>
            <h2 className="leading-tight">
              Choose your <br />
              <span className="italic">natural rhythm.</span>
            </h2>
          </div>
          <Link href="/classes" className="text-sm tracking-[0.2em] uppercase text-muted-text border-b border-border-studio pb-3 hover:text-sage hover:border-sage transition-all duration-500">
            View All Classes
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredClasses.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="p-12 rounded-[24px] border border-border-studio bg-white hover:bg-secondary-bg transition-all duration-700 group flex flex-col h-full"
            >
              <h3 className="mb-8 group-hover:italic transition-all duration-700 text-3xl">{item.title}</h3>
              <p className="mb-12 text-muted-text leading-relaxed flex-grow font-light">
                {item.description}
              </p>
              <div className="flex justify-between items-center pt-8 border-t border-border-studio">
                <span className="text-xs tracking-[0.2em] uppercase text-muted-text font-medium">{item.duration}</span>
                <span className="text-xs tracking-[0.2em] uppercase text-sage font-semibold">{item.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

