"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ProductSectionProps = {
  id: string;
  label: string;
  size: string;
  price: string;
  focus: string;
  description: string;
  note?: string;
  image: string;
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
  image,
  index
}: ProductSectionProps) {
  return (
    <section
      id={id}
      className="auram-section relative flex h-screen items-center bg-auram-black px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.22),_transparent_60%)]" />

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
          <div className="relative mx-auto aspect-[3/5] max-w-sm overflow-hidden rounded-[32px] border border-auram-gold/20 bg-auram-black/90 shadow-auram-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.28),_transparent_70%)]" />
            <Image
              src={image}
              alt={label}
              fill
              className="relative z-10 h-full w-full object-contain"
              sizes="(min-width: 1024px) 320px, 70vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

