"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function IdentidadePage() {
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
                        <span className="text-auram-white/60">Identidade Institucional</span>
                    </div>

                    {/* Header */}
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-auram-gold/70">01 — Sobre Nós</p>
                        <h1 className="text-4xl font-semibold tracking-tight text-auram-white md:text-5xl">
                            Identidade<br />
                            <span className="text-auram-gold">Institucional</span>
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="space-y-8 border-l border-auram-gold/20 pl-8">
                        <div className="space-y-3">
                            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-auram-white/50">
                                Designação Social
                            </h2>
                            <p className="text-sm leading-relaxed text-auram-white/75">
                                <span className="text-auram-white font-medium">auRAM</span> — nomenclatura resultante da fusão entre o símbolo químico do ouro,{" "}
                                <em className="text-auram-gold">Au</em>, e o acrónimo tecnológico{" "}
                                <em className="text-auram-gold">Random Access Memory</em>. Um nome que une a raridade do ouro ao coração da computação moderna.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-auram-white/50">
                                Lema Corporativo
                            </h2>
                            <blockquote className="border-l-2 border-auram-gold pl-4 text-lg font-medium italic text-auram-gold/90 leading-snug">
                                "Excelência Tecnológica para a Humanidade,<br />
                                Equidade no Acesso para Todos."
                            </blockquote>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-auram-white/50">
                                Identidade Visual
                            </h2>
                            <p className="text-sm leading-relaxed text-auram-white/75">
                                Representação estilizada de um módulo de memória em tons dourados, circundado por uma barreira geométrica que simboliza a{" "}
                                <span className="text-auram-white">salvaguarda do consumidor</span> e a{" "}
                                <span className="text-auram-white">resistência contra a especulação de mercado</span>. A estética BlackGold reflete poder, confiança e acessibilidade.
                            </p>
                        </div>
                    </div>

                    {/* Nav between pages */}
                    <div className="flex items-center justify-end pt-8 border-t border-white/10">
                        <Link
                            href="/sobre/organizacao"
                            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors"
                        >
                            Organização
                            <span>→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
