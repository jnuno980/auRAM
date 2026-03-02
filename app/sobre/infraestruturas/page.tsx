"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const spaces = [
    {
        title: "Laboratório de Integração SMT",
        subtitle: "Surface Mount Technology",
        description:
            "Área de acesso restrito equipada com estações de soldadura de precisão e microscópios digitais para a montagem dos chips DRAM nos PCBs personalizados. Ambiente com controlo de estática e humidade para garantir a longevidade dos semicondutores.",
        icon: "🔬",
    },
    {
        title: "Bancada de Certificação e Stress-Testing",
        subtitle: "Quality Assurance",
        description:
            "Zona equipada com sistemas de diagnóstico avançados (como o MemTest86 Pro) onde cada módulo é submetido a 24 horas de testes contínuos antes de ser selado para venda.",
        icon: "⚡",
    },
    {
        title: "Centro de Experiência e Retoma",
        subtitle: "Atendimento ao Cliente",
        description:
            "Balcão de atendimento frontal onde os clientes podem trazer os seus computadores para diagnóstico, realizar o levantamento de encomendas ou entregar hardware antigo para o programa de reciclagem.",
        icon: "🤝",
    },
    {
        title: "Armazém Logístico Inteligente",
        subtitle: "Supply Chain",
        description:
            "Espaço de armazenamento de componentes com controlo rigoroso de inventário para prevenir a fuga de stock para canais de revenda não autorizados.",
        icon: "📦",
    },
];

export default function InfraestruturaPage() {
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
                        <span className="text-auram-white/60">Infraestruturas</span>
                    </div>

                    {/* Header */}
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-auram-gold/70">08 — Sobre Nós</p>
                        <h1 className="text-4xl font-semibold tracking-tight text-auram-white md:text-5xl">
                            Infraestruturas &<br />
                            <span className="text-auram-gold">Localização Estratégica</span>
                        </h1>
                        <p className="text-sm leading-relaxed text-auram-white/60 max-w-xl">
                            A sede da auRAM está localizada no{" "}
                            <span className="text-auram-white font-medium">Santarém Business Center</span>, com excelentes acessos logísticos e proximidade a instituições de ensino técnico.
                        </p>
                    </div>

                    {/* Spaces */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {spaces.map((space, i) => (
                            <motion.div
                                key={space.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2 hover:border-auram-gold/30 transition-colors"
                            >
                                <span className="text-2xl">{space.icon}</span>
                                <div>
                                    <h3 className="text-sm font-semibold text-auram-white">{space.title}</h3>
                                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-auram-gold/60 mt-0.5">{space.subtitle}</p>
                                </div>
                                <p className="text-sm leading-relaxed text-auram-white/60">{space.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Nav */}
                    <div className="flex items-center justify-between pt-8 border-t border-white/10">
                        <Link href="/sobre/cronograma" className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors">
                            <span>←</span> Cronograma
                        </Link>
                        <Link href="/" className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors">
                            Início <span>→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
