"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Assuming a utility for class merging exists or I can just use template literals

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
}

export const Button = ({ variant = "primary", href, children, className, ...props }: ButtonProps) => {
  const baseStyles = "px-12 py-5 rounded-full transition-all duration-1000 inline-flex items-center justify-center min-h-[60px] text-center tracking-[0.2em] font-bold text-[10px] uppercase";
  
  const variants = {
    primary: "bg-sage text-white hover:opacity-90 hover:-translate-y-0.5",
    secondary: "border border-border-studio text-foreground hover:bg-secondary-bg hover:-translate-y-0.5",
  };

  const content = (
    <motion.span
      whileHover={{ y: -1 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <div 
      className={`bg-[#FDFCFB] border border-border-studio rounded-[32px] p-10 md:p-16 transition-all duration-1000 ${
        hover ? "hover:shadow-soft hover:-translate-y-1" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "ivory" | "sand" | "white";
  id?: string;
}

export const Section = ({ children, className, bg = "white", id }: SectionProps) => {
  const backgrounds = {
    white: "bg-[#FDFCFB]",
    ivory: "bg-[#F8F6F2]",
    sand: "bg-[#F5F2EE]",
  };

  return (
    <section id={id} className={`${backgrounds[bg]} py-20 md:py-32 lg:py-48 px-6 md:px-12 ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

interface HeadingProps {
  level?: 1 | 2 | 3;
  children?: React.ReactNode;
  className?: string;
  subtitle?: string;
  center?: boolean;
}

export const Heading = ({ level = 2, children, className, subtitle, center = false }: HeadingProps) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  return (
    <div className={`mb-20 md:mb-32 ${center ? "text-center" : ""} ${className}`}>
      {subtitle && (
        <span className="text-[10px] tracking-[0.6em] uppercase text-muted-text mb-8 md:mb-12 block font-bold">
          {subtitle}
        </span>
      )}
      {children && (
        <Tag className={`${level === 1 ? "text-6xl md:text-8xl" : level === 2 ? "text-5xl md:text-7xl" : "text-3xl md:text-4xl"} leading-tight tracking-tight`}>
          {children}
        </Tag>
      )}
    </div>
  );
};
