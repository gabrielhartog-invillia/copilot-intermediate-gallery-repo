import { Hero, SectionContainer, SectionTitle } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Galeria de Fotos & Portfólio",
  description:
    "Conheça a trajetória, visão e propósito por trás da nossa vitrine de inovação.",
};

export default function AboutPage() {
  return (
    <div className="page-gradient">
      <Hero
        title="Sobre"
        description="Conheça a trajetória, visão e propósito por trás da nossa vitrine de inovação."
      />

      <SectionContainer>
        <SectionTitle title="Nossa história" />

        <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur rounded-xl p-6 md:p-8 shadow-sm">
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Bem-vindo à nossa vitrine de inovação. Este Photo Gallery &amp;
            Portfolio é o registro visual da trajetória da AI/R
            company-Invillia. Mais do que projetos, apresentamos aqui anos de
            dedicação, tecnologia de ponta e soluções que transformaram o
            mercado. Explore o legado que estamos construindo, um pixel por vez.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer bgColor="bg-white/30 dark:bg-slate-800/30">
        <SectionTitle title="O que você encontra aqui" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Projetos e entregas
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Uma curadoria visual do que construímos, com foco em impacto e
              qualidade.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Tecnologia
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Soluções modernas, consistência de UI e performance para web.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Legado
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              A evolução ao longo do tempo — &quot;um pixel por vez&quot;.
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
