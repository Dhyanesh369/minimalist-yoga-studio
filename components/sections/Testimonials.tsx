"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Lumina has completely changed my relationship with stress. The atmosphere alone makes me feel lighter the moment I walk in.",
    author: "Sarah Jenkins",
    role: "Studio Member",
  },
  {
    quote: "The most beautiful yoga studio I've ever visited. The attention to detail and the quality of instruction are world-class.",
    author: "Michael Chen",
    role: "Creative Director",
  },
  {
    quote: "A true sanctuary in the city. The classes are thoughtful, grounding, and exactly what I need to balance my busy schedule.",
    author: "Emma Thorne",
    role: "Professional Athlete",
  },
];

import { Section, Heading } from "@/components/ui";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Section bg="ivory">
      <div className="text-center">
        <Heading center subtitle="Community Stories" className="mb-0" />

        <div className="relative max-w-4xl mx-auto min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <p className="text-4xl md:text-5xl font-heading leading-tight mb-16 italic font-normal text-foreground">
                "{testimonials[index].quote}"
              </p>
              <div>
                <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-sage mb-3">
                  {testimonials[index].author}
                </h4>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-text font-bold italic opacity-60">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-10 mt-16 md:mt-24">
            <button 
              onClick={prev}
              className="w-16 h-16 rounded-full border border-border-studio text-muted-text hover:text-sage hover:border-sage transition-all duration-1000 shadow-soft flex items-center justify-center active:scale-95 bg-background/50 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} strokeWidth={1} />
            </button>
            <button 
              onClick={next}
              className="w-16 h-16 rounded-full border border-border-studio text-muted-text hover:text-sage hover:border-sage transition-all duration-1000 shadow-soft flex items-center justify-center active:scale-95 bg-background/50 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
