"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }
  }
};

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`section-snap relative flex min-h-screen items-center justify-center px-4 py-28 md:px-6 lg:px-8 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />
      <div className="pointer-events-auto relative mx-auto flex w-full max-w-6xl flex-col">
        {children}
      </div>
    </motion.section>
  );
}

