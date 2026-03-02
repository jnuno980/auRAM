import { Section } from "../layout/Section";

export function Ethical() {
  return (
    <Section id="ethics">
      <div className="space-y-10">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Compromisso Ético
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            A única coisa que queremos guardar é a sua confiança.
          </h2>
          <p className="text-pretty text-sm leading-relaxed text-slate-300 md:text-base">
            A auRAM existe para{" "}
            <span className="text-slate-100">
              aumentar a sua memória, não para explorá-la
            </span>
            . Por isso desenhámos uma garantia ética simples, direta e sem
            letras pequenas.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-black/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-auram-blue">
              01 · Dados
            </p>
            <p className="mt-3 text-sm font-medium text-slate-50">
              Nenhuma memória vira produto.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Não vendemos, alugamos ou partilhamos qualquer traço de
              utilização. Não há tracking invisível. Ponto.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-black/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-auram-blue">
              02 · Algoritmos
            </p>
            <p className="mt-3 text-sm font-medium text-slate-50">
              A sua aura não treina modelos.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              O que passa pela sua auRAM não alimenta sistemas de recomendação
              ou IA externas. Nada sai do seu controlo.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-black/60 p-5 md:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-auram-blue">
              03 · Transparência
            </p>
            <p className="mt-3 text-sm font-medium text-slate-50">
              Se mudar, avisamos primeiro.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Qualquer alteração à nossa ética vem sempre antes de qualquer
              atualização de produto. Se não concordar, não atualiza. Simples.
            </p>
          </div>
        </div>

        <p className="text-[11px] text-slate-500">
          Esta é a Garantia Ética auRAM. Se algum dia a quebrarmos, devolvemos
          o seu investimento e encerramos o produto. A memória humana não é
          negociável.
        </p>
      </div>
    </Section>
  );
}

