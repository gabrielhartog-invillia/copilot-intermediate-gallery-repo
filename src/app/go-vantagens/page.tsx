import { Hero, SectionContainer, SectionTitle, FeatureCard } from "@/components/ui";
import { goVantagensData } from "@/lib/mock-go-vantagens-data";

export default function GoVantagensPage() {
  return (
    <div className="page-gradient">
      <Hero
        title="Vantagens da Linguagem Go"
        description="Conheça os principais benefícios do Go (Golang), uma linguagem de programação moderna desenvolvida pelo Google, projetada para escalabilidade, simplicidade e alta performance."
      />

      <SectionContainer>
        <SectionTitle title="Por que escolher Go?" className="mb-8" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {goVantagensData.map((vantagem, index) => (
            <FeatureCard
              key={index}
              icon={vantagem.icon}
              title={vantagem.titulo}
              description={vantagem.descricao}
              iconColor={vantagem.iconColor}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer bgColor="bg-white/30 dark:bg-slate-800/30">
        <SectionTitle title="Go em Números" className="mb-8" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-base p-6 text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              2009
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Ano de lançamento pelo Google
            </p>
          </div>
          <div className="card-base p-6 text-center">
            <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              #7
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Linguagem mais popular no GitHub (2024)
            </p>
          </div>
          <div className="card-base p-6 text-center">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              10x
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Mais rápida que Python em tarefas de CPU
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
