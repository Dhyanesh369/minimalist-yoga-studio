"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Plus, Minus } from "lucide-react";

const classes = [
  {
    title: "Morning Flow",
    description: "Start your day with gentle movement and focused intention. A perfect yoga class for early risers.",
    duration: "60 min",
    difficulty: "All Levels",
    benefit: "Vitality & Focus",
    image: "/images/class_morning.png",
  },
  {
    title: "Beginner Yoga",
    description: "Build a strong foundation in a welcoming and safe environment. Ideal for those new to yoga classes.",
    duration: "75 min",
    difficulty: "Beginner",
    benefit: "Foundation & Confidence",
    image: "/images/hero.png",
  },
  {
    title: "Deep Stretch",
    description: "A slow practice focusing on deep release and restoration. Great for physical stress relief.",
    duration: "60 min",
    difficulty: "All Levels",
    benefit: "Release & Flexibility",
    image: "/images/detail.png",
  },
  {
    title: "Meditation & Breathwork",
    description: "Cultivate inner clarity through guided mindfulness practices. Essential meditation classes for busy lives.",
    duration: "45 min",
    difficulty: "All Levels",
    benefit: "Clarity & Calm",
    image: "/images/class_meditation.png",
  },
  {
    title: "Evening Reset",
    description: "Unwind from the day with restful poses and calm breathing. A restorative yoga experience.",
    duration: "60 min",
    difficulty: "All Levels",
    benefit: "Rest & Recovery",
    image: "/images/class_evening.png",
  },
  {
    title: "Slow Flow",
    description: "A rhythmic, slow-paced practice to build graceful strength and improve wellness routines.",
    duration: "60 min",
    difficulty: "Intermediate",
    benefit: "Strength & Grace",
    image: "/images/hero_split.png",
  },
];

const instructors = [
  {
    name: "Elena Vance",
    role: "Founding Teacher",
    bio: "Elena specializes in Vinyasa and the art of mindful alignment.",
    exp: "12 Years",
    image: "/images/instructor_elena.png",
  },
  {
    name: "Marcus Thorne",
    role: "Mindfulness Lead",
    bio: "Marcus focuses on meditation and the science of breathwork.",
    exp: "10 Years",
    image: "/images/instructor_marcus.png",
  },
];

const faqs = [
  {
    question: "Is this studio beginner friendly?",
    answer: "Absolutely. Many of our practitioners started their journey with us. We offer dedicated beginner yoga classes and all our instructors are trained to provide modifications.",
  },
  {
    question: "What should I bring?",
    answer: "We provide high-quality mats and props. Simply bring comfortable clothing and a water bottle. We have changing rooms and filtered water available.",
  },
  {
    question: "How early should I arrive?",
    answer: "We recommend arriving 10-15 minutes before your session begins. This gives you time to check in, put away your belongings, and settle onto your mat.",
  },
  {
    question: "What if I'm not flexible?",
    answer: "That is exactly why you practice. Yoga is not about touching your toes; it is about what you learn on the way down. Our classes focus on safe, gradual progression.",
  },
  {
    question: "Can I book classes online?",
    answer: "Yes, all classes can be reserved through our website or mobile app. We recommend booking in advance as our sessions are kept small for a premium experience.",
  },
];

import { Section, Heading, Card, Button } from "@/components/ui";

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

export default function ClassesClient() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <Section bg="ivory" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Heading level={1} center subtitle="The Practice">
            Beginner Yoga and Meditation <br />
            <span className="italic font-normal">classes for every body.</span>
          </Heading>
          <p className="text-xl text-muted-text max-w-2xl mx-auto font-light leading-relaxed">
            Whether you're beginning your wellness journey or deepening your practice, our yoga classes in Stockholm meet you where you are.
          </p>
        </motion.div>
      </Section>

      {/* Intro Text Block */}
      <Section>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-10 italic">
              "Our sessions are designed to feel supportive, approachable, and grounding."
            </p>
            <div className="space-y-4 text-muted-text tracking-[0.4em] uppercase text-[10px] font-bold">
              <p>No pressure.</p>
              <p>No competition.</p>
              <p>Just intentional movement and mindful guidance.</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Featured Classes Grid */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-32">
          {classes.map((cls, index) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative h-[550px] rounded-[32px] overflow-hidden mb-10 shadow-soft">
                <Image
                  src={cls.image}
                  alt={`${cls.title} yoga session at Lumina`}
                  fill
                  className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute top-8 right-8 bg-background/80 backdrop-blur-sm px-6 py-2 rounded-full text-[9px] tracking-[0.2em] uppercase font-bold text-foreground shadow-sm">
                  {cls.benefit}
                </div>
              </div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl italic font-normal mb-3 group-hover:text-sage transition-colors duration-1000">{cls.title}</h3>
                  <div className="flex gap-6 text-[10px] tracking-[0.3em] uppercase font-bold text-muted-text">
                    <span>{cls.duration}</span>
                    <span>{cls.difficulty}</span>
                  </div>
                </div>
                <Link href="/contact" className="text-[10px] tracking-[0.3em] uppercase font-bold border-b border-border-studio pb-2 hover:border-sage transition-all duration-1000">
                  Book Now
                </Link>
              </div>
              <p className="text-muted-text font-light leading-relaxed max-w-lg">
                {cls.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Class Experience Section */}
      <Section bg="ivory">
        <div className="flex flex-col lg:flex-row items-center gap-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 relative h-[700px] rounded-[32px] overflow-hidden shadow-soft"
          >
            <Image
              src="/images/class_experience.png"
              alt="Mindful class experience at Lumina Yoga Stockholm"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2"
          >
            <Heading level={2} subtitle="The Atmosphere">
              What a wellness session feels like.
            </Heading>
            <p className="text-xl text-muted-text font-light leading-relaxed mb-10">
              Each class is designed to help you slow down, reconnect with your breath, and leave feeling lighter than when you arrived.
            </p>
            <p className="text-muted-text font-light leading-relaxed mb-16">
              From the soft morning light to our custom-built white oak equipment, every detail is considered to support your journey back to yourself in our Stockholm sanctuary.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Instructor Guidance Section */}
      <Section>
        <Heading center subtitle="Our Guides">
          Grounded by wisdom.
        </Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {instructors.map((ins, index) => (
            <motion.div
              key={ins.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group text-center"
            >
              <div className="relative h-[600px] rounded-[32px] overflow-hidden mb-10 grayscale group-hover:grayscale-0 transition-all duration-[2000ms] shadow-soft">
                <Image
                  src={ins.image}
                  alt={`${ins.name} - Yoga Instructor Stockholm`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <h3 className="text-3xl mb-3 font-normal italic">{ins.name}</h3>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-sage mb-6">{ins.role}</p>
              <p className="text-muted-text font-light leading-relaxed max-w-sm mx-auto mb-4">{ins.bio}</p>
              <span className="text-[10px] tracking-[0.1em] uppercase text-muted-text font-medium italic opacity-60">Experience: {ins.exp}</span>
            </motion.div>
          ))}
        </div>
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
      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Heading level={2} center>
            Start with one <br />
            <span className="italic font-normal">calm session.</span>
          </Heading>
          <p className="text-xl text-muted-text mb-16 font-light">
            You don't need experience to begin your wellness routine.
          </p>
          <Button href="/contact" className="min-w-[280px]">
            Book Your First Class
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}
