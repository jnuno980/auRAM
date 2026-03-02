"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const phases = [
    {
        month: "Mês 1",
        title: "Prospeção & Protótipos",
        description:
            "Fase de prospeção de fornecedores de semicondutores DRAM e desenvolvimento de protótipos de PCBs exclusivos.",
        status: "Fundação",
    },
    {
        month: "Mês 2",
        title: "Laboratório & Certificação",
        description:
            "Implementação da unidade de ensaios laboratoriais e certificação técnica em Santarém.",
        status: "Infraestrutura",
    },
    {
        month: "Mês 3",
        title: "Plataforma Online & Pré-encomendas",
        description:
            "Lançamento da plataforma de comércio eletrónico e abertura do período de pré-encomendas para utilizadores singulares.",
        status: "Lançamento",
    },
    {
        month: "Mês 4",
        title: "Distribuição & Marketing",
        description:
            "Início da distribuição física e execução das campanhas de marketing de proximidade.",
        status: "Operação",
    },
];

export default function CronogramaPage() {
    return (
        <section className="relative min-h-screen px-6 py-24 bg-auram-black">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.15),_transparent_55%)]" />

            <div className="relative z-10 mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="space-y-12"
                >
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-auram-white/40">
                        <Link href="/" className="hover:text-auram-gold transition-colors">Início</Link>
                        <span>/</span>
                        <span className="text-auram-white/60">Cronograma</span>
                    </div>

                    {/* Header */}
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-auram-gold/70">07 — Sobre Nós</p>
                        <h1 className="text-4xl font-semibold tracking-tight text-auram-white md:text-5xl">
                            Cronograma<br />
                            <span className="text-auram-gold">Operacional 2025–2026</span>
                        </h1>
                    </div>

                    {/* Timeline */}
                    <div className="relative space-y-0">
                        {/* Vertical line */}
                        <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-auram-gold/20" />

                        {phases.map((phase, i) => (
                            <motion.div
                                key={phase.month}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.15 }}
                                className="relative flex gap-8 pb-10"
                            >
                                {/* Month bubble */}
                                <div className="relative z-10 flex h-14 w-14 flex-shrink-0 flex-col items-center justify-center rounded-full border border-auram-gold/40 bg-auram-black text-center">
                                    <span className="text-[0.55rem] uppercase tracking-[0.15em] text-auram-gold/60">Mês</span>
                                    <span className="text-lg font-semibold text-auram-gold leading-none">{i + 1}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 space-y-1.5 hover:border-auram-gold/30 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-semibold text-auram-white">{phase.title}</h3>
                                        <span className="rounded-full border border-auram-gold/30 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.15em] text-auram-gold/60">
                                            {phase.status}
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-auram-white/60">{phase.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Nav */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <Link href="/sobre/etica" className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors">
                            <span>←</span> Ética
                        </Link>
                        <Link href="/sobre/infraestruturas" className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors">
                            Infraestruturas <span>→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
