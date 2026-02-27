"use client";

import { motion } from "framer-motion";

type ProductSectionProps = {
  id: string;
  label: string;
  size: string;
  price: string;
  focus: string;
  description: string;
  note?: string;
  index: number;
};

export function ProductSection({
  id,
  label,
  size,
  price,
  focus,
  description,
  note,
  index
}: ProductSectionProps) {
  return (
    <section
      id={id}
      className="auram-section relative flex h-screen items-center bg-auram-black px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-auram-radial-gold opacity-70" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center gap-16 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
          className="flex-1 space-y-10"
        >
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-auram-white/50">
            <span className="h-px w-10 bg-auram-gold/60" />
            <span>{`Série ${index + 1}`}</span>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              <span className="block text-auram-white/60">{label}</span>
              <span className="block text-auram-gold">{size}</span>
            </h2>
            <p className="max-w-md text-[0.7rem] uppercase tracking-[0.25em] text-auram-white/45">
              {focus}
            </p>
            <p className="max-w-md text-sm leading-relaxed text-auram-white/70">
              {description}
            </p>
            {note && (
              <p className="max-w-md text-xs leading-relaxed text-auram-white/50 italic">
                {note}
              </p>
            )}
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-baseline gap-2">
              <span className="text-xs uppercase tracking-[0.25em] text-auram-white/40">
                Preço auRAM
              </span>
              <span className="text-2xl font-medium text-auram-gold">
                {price}
              </span>
            </div>

            <button className="relative overflow-hidden rounded-full border border-auram-bronze px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-auram-white/90 transition-all duration-300 bg-gradient-to-r from-auram-gold to-[#F9E076] hover:brightness-110 hover:shadow-auram-glow">
              <span>Reservar módulo</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="flex-1"
        >
          <div className="relative mx-auto flex aspect-[4/5] max-w-sm items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-black to-black shadow-auram-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.35),_transparent_55%)]" />
            <div className="relative flex flex-col items-center gap-3 text-center">
              <span className="text-[0.6rem] uppercase tracking-[0.35em] text-auram-white/60">
                auRAM {label}
              </span>
              <span className="text-3xl font-semibold text-auram-gold">
                {size}
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-auram-white/40">
                Human‑Tuned Memory Architecture
              </span>
            </div>
            <div className="pointer-events-none absolute inset-x-6 bottom-6 flex justify-between text-[0.55rem] uppercase tracking-[0.2em] text-auram-white/35">
              <span>Latency Locked</span>
              <span>Ethical Firmware</span>
              <span>Gold Binned</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

