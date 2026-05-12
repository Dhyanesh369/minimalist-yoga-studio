"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const instructors = [
  {
    name: "Elena Vance",
    role: "Founding Teacher",
    bio: "Elena specializes in Vinyasa and the art of mindful alignment. She believes that movement is a form of listening.",
    exp: "12 Years",
    image: "/images/instructor_elena.png",
  },
  {
    name: "Marcus Thorne",
    role: "Mindfulness Lead",
    bio: "Marcus focuses on meditation and the science of breathwork. His guidance is rooted in stillness and presence.",
    exp: "10 Years",
    image: "/images/instructor_marcus.png",
  },
];

const values = [
  { title: "Presence", description: "Learning to be fully here, in the body and in the moment." },
  { title: "Balance", description: "Finding the equilibrium between effort and ease in every practice." },
  { title: "Mindful Movement", description: "Every transition is as important as the pose itself." },
  { title: "Sustainability", description: "Building a practice that supports you for a lifetime." },
  { title: "Community", description: "A supportive space where everyone is welcomed and seen." },
];

import { Section, Heading, Button } from "@/components/ui";

export default function AboutClient() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section bg="ivory" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Heading level={1} center subtitle="Our Story">
            A Yoga Studio built around <br />
            <span className="italic font-normal">calm and connection.</span>
          </Heading>
          <p className="text-xl text-muted-text max-w-2xl mx-auto font-light leading-relaxed">
            We created a space where movement feels supportive, welcoming, and sustainable.
          </p>
        </motion.div>
      </Section>

      {/* Studio Story Section */}
      <Section>
        <div className="flex flex-col lg:flex-row items-center gap-32">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 relative h-[750px] rounded-[32px] overflow-hidden shadow-soft"
          >
            <Image
              src="/images/studio_interior.png"
              alt="Lumina Yoga Studio Stockholm Interior - Scandinavian Minimalism"
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
            viewport={{ once: true }}
            transition={{ duration: 2.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2"
          >
            <Heading level={2} subtitle="The Vision">
              Our yoga studio began with a <br /><span className="italic font-normal">simple belief.</span>
            </Heading>
            <p className="text-xl text-muted-text font-light leading-relaxed mb-10">
              Wellness should feel supportive, not intimidating.
            </p>
            <p className="text-muted-text font-light leading-relaxed mb-16">
              We wanted to create a space where people could move, breathe, and reconnect without pressure. Our journey started in 2024, driven by a desire to bring a more human, grounded approach to the modern yoga experience in Stockholm.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto"
          >
            <Heading level={2} center subtitle="Our Philosophy">
              Our approach to wellness.
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left mt-10 md:mt-20">
              <div className="space-y-6">
                <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-sage">Mindful Movement</h4>
                <p className="text-muted-text font-light leading-relaxed">We focus on intentional, slow-paced practices that allow you to fully experience each breath and movement, building a deeper connection to yourself.</p>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-sage">Sustainable Practice</h4>
                <p className="text-muted-text font-light leading-relaxed">Yoga is a lifelong journey. We provide guidance that respects your body's unique needs, ensuring your practice remains supportive and nourishing over time.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Space & Environment Gallery */}
      <Section bg="ivory">
        <Heading center subtitle="The Atmosphere">
          Every detail was designed to <br /><span className="italic font-normal">help you slow down.</span>
        </Heading>

        <div className="grid grid-cols-12 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-7 relative h-[600px] rounded-[32px] overflow-hidden shadow-soft"
          >
            <Image
              src="/images/about_detail_1.png"
              alt="Mindful space at Lumina Yoga Stockholm"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-5 relative h-[450px] rounded-[32px] overflow-hidden lg:mt-32 shadow-soft"
          >
            <Image
              src="/images/about_detail_2.png"
              alt="Natural light in our Stockholm wellness studio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              loading="lazy"
            />
          </motion.div>
        </div>
      </Section>

      {/* Instructor Profiles Section */}
      <Section>
        <Heading center subtitle="Our Guides">
          Grounded by experience.
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
              <div className="relative h-[650px] rounded-[32px] overflow-hidden mb-12 grayscale group-hover:grayscale-0 transition-all duration-[2000ms] shadow-soft">
                <Image
                  src={ins.image}
                  alt={`${ins.name} - ${ins.role} at Lumina Yoga Studio`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <h3 className="text-3xl mb-3 font-normal italic">{ins.name}</h3>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-sage mb-8">{ins.role}</p>
              <p className="text-muted-text font-light leading-relaxed max-w-sm mx-auto mb-6">{ins.bio}</p>
              <span className="text-[10px] tracking-[0.1em] uppercase text-muted-text font-medium italic opacity-60">Experience: {ins.exp}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Wellness Values Section */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-24">
          {values.map((val, index) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-12 border-b border-border-studio pb-12"
            >
              <h3 className="text-4xl md:text-5xl font-heading italic font-normal">{val.title}</h3>
              <p className="text-muted-text font-light leading-relaxed max-w-sm text-lg md:text-xl">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials Highlight */}
      <Section bg="ivory">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-4xl md:text-5xl font-heading italic leading-tight text-foreground mb-16">
              "A true sanctuary in the city. The classes are thoughtful, grounding, and exactly what I need to balance my busy schedule."
            </p>
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-sage">Emma Thorne</span>
          </motion.div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto"
          >
            <Heading level={2} center>
              Your practice begins <br />
              <span className="italic font-normal">with one step.</span>
            </Heading>
            <p className="text-xl text-muted-text mb-16 font-light">
              We're here whenever you're ready.
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
            alt="Start your journey at Lumina Yoga Stockholm"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/40" />
        </motion.div>
      </Section>
    </div>
  );
}
