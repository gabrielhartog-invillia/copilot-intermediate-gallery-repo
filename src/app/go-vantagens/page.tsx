import { Hero, SectionContainer, SectionTitle, FeatureCard } from "@/components/ui";
import { goAdvantagesData } from "@/lib/mock-go-advantages-data";

export default function GoVantagensPage() {
  return (
    <div className="page-gradient">
      <Hero
        title="Vantagens da Linguagem Go"
        description="Descubra por que o Go (Golang) é uma das linguagens de programação mais populares para sistemas modernos, microsserviços e aplicações de alto desempenho."
      />

      <SectionContainer>
        <SectionTitle title="Por que usar Go?" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goAdvantagesData.map((advantage) => (
            <FeatureCard
              key={advantage.title}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              iconColor={advantage.iconColor}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer bgColor="bg-white/30 dark:bg-slate-800/30">
        <SectionTitle title="Go em Números" />
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="card-base p-8">
            <p className="text-5xl font-bold text-blue-600 mb-2">2009</p>
            <p className="text-slate-600 dark:text-slate-300 text-lg">Ano de criação pelo Google</p>
          </div>
          <div className="card-base p-8">
            <p className="text-5xl font-bold text-green-600 mb-2">#7</p>
            <p className="text-slate-600 dark:text-slate-300 text-lg">No ranking TIOBE 2024</p>
          </div>
          <div className="card-base p-8">
            <p className="text-5xl font-bold text-purple-600 mb-2">~10x</p>
            <p className="text-slate-600 dark:text-slate-300 text-lg">Mais rápido que Python em benchmarks</p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
