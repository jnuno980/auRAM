import { Section } from "../layout/Section";

const features = [
  {
    title: "Feita em Santarém",
    body: "Nascemos longe dos grandes centros de dados. Perto de pessoas reais, rotinas reais e memórias que importam."
  },
  {
    title: "RAM com Aura",
    body: "Cada módulo é pensado para trabalhar com os seus ritmos, não contra eles. Mais foco, menos ruído."
  },
  {
    title: "Local First",
    body: "Memória processada no seu dispositivo. Nada na nuvem. Nada a alimentar modelos que nunca pediu."
  },
  {
    title: "Design Minimal",
    body: "Zero adição visual desnecessária. Só o essencial para trabalhar, criar, lembrar e viver melhor."
  }
];

export function Mission() {
  return (
    <Section id="mission">
      <div className="space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
            A Nossa Origem
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            Tecnologia com sotaque de Santarém.
          </h2>
          <p className="text-pretty text-sm leading-relaxed text-slate-300 md:text-base">
            A auRAM começou numa pequena sala com vista para o Tejo. A missão:
            construir{" "}
            <span className="text-slate-100">
              memória aumentada que respeita o corpo, o tempo e a privacidade
            </span>
            . Menos hype. Mais humanidade.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 transition hover:border-auram-blue/70 hover:shadow-glow-blue"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-auram-blue/10 via-transparent to-slate-900/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative space-y-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  {feature.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

