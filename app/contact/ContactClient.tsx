"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "Do I need experience?",
    answer: "No experience is necessary. We have yoga classes specifically designed for beginners in Stockholm.",
  },
  {
    question: "What should I wear?",
    answer: "Wear comfortable, breathable clothing that allows you to move freely. We practice barefoot, so no special footwear is required.",
  },
  {
    question: "Can I book online?",
    answer: "Yes, all our classes can be easily booked through our website or mobile app. We recommend booking in advance to ensure your spot.",
  },
  {
    question: "When should I arrive?",
    answer: "We suggest arriving 10-15 minutes before your class starts to settle in, put away your belongings, and find your space on the mat.",
  },
  {
    question: "Do you provide mats?",
    answer: "Yes, we provide high-quality mats and all necessary props (blocks, bolsters, and straps) at no additional cost.",
  },
];

import { Section, Heading, Button } from "@/components/ui";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = question.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className="border-b border-border-studio">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${id}`}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-xl md:text-2xl font-body font-light tracking-wide group-hover:text-sage transition-colors duration-1000">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {isOpen ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-content-${id}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-muted-text font-light leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactClient() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section bg="ivory" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Heading level={1} center subtitle="Get in Touch">
            Visit our Stockholm <br />
            <span className="italic font-normal">Yoga Studio.</span>
          </Heading>
          <p className="text-xl text-muted-text max-w-2xl mx-auto font-light leading-relaxed">
            Reach out with questions about our beginner yoga classes, meditation sessions, or anything you'd like to know.
          </p>
        </motion.div>
      </Section>

      {/* Contact Introduction */}
      <Section>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed italic">
              "Whether you're completely new to yoga or returning to your practice, we're happy to help you feel comfortable before you arrive at our Nordic sanctuary."
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section>
        <div className="flex flex-col lg:flex-row gap-32">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-3/5"
          >
            <form className="space-y-10 md:space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <label htmlFor="name" className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-text">Name</label>
                  <input 
                    id="name"
                    type="text" 
                    className="w-full bg-secondary-bg/30 border-b border-border-studio py-4 px-0 focus:border-sage transition-all duration-1000 outline-none font-body font-light text-lg"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="email" className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-text">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full bg-secondary-bg/30 border-b border-border-studio py-4 px-0 focus:border-sage transition-all duration-1000 outline-none font-body font-light text-lg"
                    placeholder="hello@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label htmlFor="phone" className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-text">Phone (Optional)</label>
                <input 
                  id="phone"
                  type="tel" 
                  className="w-full bg-secondary-bg/30 border-b border-border-studio py-4 px-0 focus:border-sage transition-all duration-1000 outline-none font-body font-light text-lg"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="message" className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-text">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-secondary-bg/30 border-b border-border-studio py-4 px-0 focus:border-sage transition-all duration-1000 outline-none font-body font-light text-lg resize-none"
                  placeholder="How can we assist you with your wellness journey?"
                  required
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-2/5 space-y-20"
          >
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-12 h-12 rounded-full bg-secondary-bg flex items-center justify-center text-sage">
                  <MapPin size={20} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-text mb-2">Location</h4>
                  <p className="text-xl font-light">
                    42 Serenity Lane<br />
                    Nordic District, Stockholm
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-12 h-12 rounded-full bg-secondary-bg flex items-center justify-center text-sage">
                  <Phone size={20} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-text mb-2">Phone</h4>
                  <p className="text-xl font-light">+46 8 123 45 67</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-12 h-12 rounded-full bg-secondary-bg flex items-center justify-center text-sage">
                  <Mail size={20} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-text mb-2">Email</h4>
                  <p className="text-xl font-light">hello@luminastudio.com</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-12 h-12 rounded-full bg-secondary-bg flex items-center justify-center text-sage">
                  <Clock size={20} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-text mb-2">Hours</h4>
                  <p className="text-xl font-light">
                    Mon — Fri: 06:30 – 21:00<br />
                    Sat — Sun: 08:00 – 18:00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[600px] w-full rounded-[32px] overflow-hidden border border-border-studio shadow-soft group"
        >
          <Image
            src="/images/studio_story.png"
            alt="Lumina Yoga Stockholm Location Map"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] opacity-50"
          />
          <div className="absolute inset-0 bg-sage/5 flex items-center justify-center">
            <div className="bg-background/90 backdrop-blur-md px-10 py-6 rounded-full shadow-soft border border-sage/20 flex items-center gap-4">
              <MapPin className="text-sage" size={24} />
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-foreground">Find Our Stockholm Studio</span>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* FAQ Section */}
      <Section bg="ivory">
        <div className="max-w-4xl mx-auto">
          <Heading center subtitle="Guidance">
            Common Inquiries
          </Heading>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="relative h-[80vh] flex items-center justify-center overflow-hidden text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Heading level={2} center>
            Begin your <br />
            <span className="italic font-normal">wellness journey.</span>
          </Heading>
          <p className="text-xl text-muted-text mb-16 font-light">
            We're here to help you get started comfortably at our Stockholm yoga studio.
          </p>
          <Button href="/contact" className="min-w-[280px]">
            Book Your First Class
          </Button>
        </motion.div>

        {/* Background Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src="/images/final_cta.png"
            alt="Wellness journey starts at Lumina Stockholm"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/40" />
        </motion.div>
      </Section>
    </div>
  );
}
