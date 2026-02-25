import Link from "next/link";
import { Section } from "../layout/Section";

export function Hero() {
  return (
    <Section id="hero" className="pt-32">
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-auram-blue">
            Santarém · Tecnologia de Memória Humana
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
            Memória para Humanos. Não para Algoritmos.
          </h1>
          <p className="text-pretty text-sm leading-relaxed text-slate-300 md:text-base">
            A auRAM nasce em Santarém com uma visão simples:{" "}
            <span className="text-slate-100">
              devolver a memória ao seu dono original — você
            </span>
            . Tecnologia de RAM pensada para a sua aura, não para feeds
            infinitos.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#products"
              className="rounded-full bg-auram-blue px-7 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-white shadow-glow-blue transition hover:bg-auram-blue-soft"
            >
              Aumentar memória
            </Link>
            <span className="text-xs text-slate-400">
              Sem rastreio. Sem anúncios. Só mais memória.
            </span>
          </div>
        </div>

        <div className="mt-4 flex w-full max-w-sm flex-col gap-4 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-black/80 p-5 shadow-[0_0_80px_rgba(15,23,42,0.7)] md:mt-0">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-300">
              Painel de Aura
            </span>
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Estável
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Memória Ativa</span>
              <span className="text-xs font-semibold text-slate-100">
                92% livre
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-auram-blue to-auram-blue-soft shadow-glow-blue" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Foco
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-50">+3h</p>
              <p className="mt-1 text-[11px] text-slate-400">
                de atenção contínua
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Lembranças
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-50">+27%</p>
              <p className="mt-1 text-[11px] text-slate-400">
                de retenção diária
              </p>
            </div>
          </div>

          <p className="mt-1 text-[11px] text-slate-500">
            Dados processados localmente. Nenhuma memória treinando
            algoritmos.
          </p>
        </div>
      </div>
    </Section>
  );
}

