"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="bg-secondary-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm tracking-[0.4em] uppercase text-muted-text mb-10 block font-medium">
              The Art of Slowing Down
            </span>
            <h2 className="mb-12 max-w-lg leading-snug">
              Design for silence. <br />
              Built for serenity.
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-foreground">
              In a world that never stops, we believe the most radical act is to pause. 
              Our studio is more than a space; it is a philosophy of intentional living.
            </p>
            <p className="mb-16 text-muted-text leading-relaxed font-light">
              Every detail of Lumina has been curated to reduce visual noise and mental clutter. 
              From the warmth of our natural oak floors to the soft, diffused light, we provide 
              the space you need to reconnect with your breath and rediscover your balance.
            </p>
            <button className="btn-secondary text-sm tracking-[0.2em] uppercase py-4 px-10">
              Read Our Story
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[650px] rounded-[24px] overflow-hidden"
          >
            <Image
              src="/images/detail.png"
              alt="The Art of Mindful Practice"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

