"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OrganizacaoPage() {
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
                        <span className="text-auram-white/60">Organização</span>
                    </div>

                    {/* Header */}
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-auram-gold/70">02 — Sobre Nós</p>
                        <h1 className="text-4xl font-semibold tracking-tight text-auram-white md:text-5xl">
                            Descrição da<br />
                            <span className="text-auram-gold">Organização</span>
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 border-l border-auram-gold/20 pl-8">
                        <p className="text-sm leading-relaxed text-auram-white/75">
                            A <span className="text-auram-white font-medium">auRAM</span> constitui-se como uma entidade tecnológica sediada em{" "}
                            <span className="text-auram-white">Santarém</span>, dedicada à montagem e distribuição ética de componentes de hardware, especificamente memórias RAM.
                        </p>
                        <p className="text-sm leading-relaxed text-auram-white/75">
                            A génese desta organização fundamenta-se na análise das atuais contingências do mercado, onde a ascensão da{" "}
                            <span className="text-auram-gold">Inteligência Artificial (IA)</span> tem provocado o desvio sistemático da produção de semicondutores, resultando na inflação acentuada dos preços para o utilizador doméstico e profissional.
                        </p>
                        <p className="text-sm leading-relaxed text-auram-white/75">
                            A auRAM emerge com o propósito de mitigar esta assimetria, adotando uma{" "}
                            <span className="text-auram-white">política de venda restritiva</span> que exclui grandes conglomerados de IA e entidades especulativas, assegurando assim que o tecido académico, a comunidade de entusiastas e os profissionais locais usufruam de hardware de alto desempenho a custos de produção otimizados.
                        </p>

                        {/* Key values */}
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {[
                                { label: "Sede", value: "Santarém, Portugal" },
                                { label: "Setor", value: "Hardware & Semicondutores" },
                                { label: "Foco", value: "Utilizadores Singulares" },
                            ].map((item) => (
                                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-[0.65rem] uppercase tracking-[0.25em] text-auram-white/40 mb-1">{item.label}</p>
                                    <p className="text-sm font-medium text-auram-white">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nav between pages */}
                    <div className="flex items-center justify-between pt-8 border-t border-white/10">
                        <Link
                            href="/sobre/identidade"
                            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors"
                        >
                            <span>←</span>
                            Identidade
                        </Link>
                        <Link
                            href="/sobre/equipa"
                            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-auram-white/50 hover:text-auram-gold transition-colors"
                        >
                            Equipa
                            <span>→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
