"use client";

import { motion } from "framer-motion";

export function RamCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto flex aspect-[4/3] max-w-md items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-black to-black shadow-auram-glow"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.45),_transparent_60%)]" />

      <div className="pointer-events-none absolute inset-10 rounded-3xl border border-auram-gold/40" />

      <div className="relative flex flex-col items-center gap-3 text-center">
        <span className="text-[0.6rem] uppercase tracking-[0.35em] text-auram-white/60">
          Série Fundadora
        </span>
        <span className="bg-gradient-to-r from-auram-gold via-auram-white to-auram-gold bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
          auRAM Prime
        </span>
        <span className="text-[0.65rem] uppercase tracking-[0.25em] text-auram-white/40">
          Memória para Humanos. Não para Algoritmos.
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-8 bottom-6 flex justify-between text-[0.55rem] uppercase tracking-[0.2em] text-auram-white/35">
        <span>Low Noise</span>
        <span>Human‑First</span>
        <span>Gold Line</span>
      </div>
    </motion.div>
  );
}

