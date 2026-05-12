"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[40] w-14 h-14 bg-background border border-border-studio rounded-full flex items-center justify-center text-muted-text hover:text-sage hover:border-sage shadow-soft transition-all duration-700 group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="transition-transform duration-700 group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
