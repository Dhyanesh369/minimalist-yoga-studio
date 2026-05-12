"use client";

import { motion } from "framer-motion";
import { Wind, Activity, Heart } from "lucide-react";

const benefits = [
  {
    title: "Reduce Stress",
    description: "Find clarity and calm amidst the noise through guided breathwork and the simple practice of presence.",
    icon: Wind,
  },
  {
    title: "Improve Flexibility",
    description: "A rhythmic movement practice synchronized with the breath, designed to build physical grace.",
    icon: Activity,
  },
  {
    title: "Feel More Energized",
    description: "Rejuvenate your body and mind, leaving each session with a sense of renewed vitality and purpose.",
    icon: Heart,
  },
];

import { Section, Heading, Card } from "@/components/ui";

export default function Benefits() {
  return (
    <Section>
      <Heading center subtitle="Our Purpose">
        Feel better inside <br /><span className="italic font-normal">and out.</span>
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {benefits.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="text-center">
              <item.icon className="mx-auto mb-12 text-sage stroke-[0.5px]" size={48} />
              <h3 className="mb-8 text-3xl group-hover:italic transition-all duration-1000">{item.title}</h3>
              <p className="text-muted-text leading-relaxed font-light text-lg">
                {item.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
