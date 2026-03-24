import { Zap, GitMerge, Code2, Shield, Cpu, Package, TrendingUp, Timer, LucideIcon } from "lucide-react";

interface GoAdvantage {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export const goAdvantagesData: GoAdvantage[] = [
  {
    icon: Zap,
    title: "Alto Desempenho",
    description: "Linguagem compilada com desempenho próximo ao C/C++, ideal para sistemas que exigem velocidade de execução.",
    iconColor: "text-yellow-600",
  },
  {
    icon: GitMerge,
    title: "Concorrência Nativa",
    description: "Goroutines e canais tornam a programação concorrente simples e eficiente, aproveitando múltiplos núcleos de CPU.",
    iconColor: "text-blue-600",
  },
  {
    icon: Code2,
    title: "Sintaxe Simples",
    description: "Linguagem minimalista com curva de aprendizado baixa. Código limpo e legível que facilita a manutenção.",
    iconColor: "text-green-600",
  },
  {
    icon: Shield,
    title: "Tipagem Estática",
    description: "Sistema de tipos robusto que detecta erros em tempo de compilação, reduzindo bugs em produção.",
    iconColor: "text-purple-600",
  },
  {
    icon: Cpu,
    title: "Gerenciamento de Memória",
    description: "Garbage collector eficiente que gerencia memória automaticamente com baixa latência e pausas mínimas.",
    iconColor: "text-orange-600",
  },
  {
    icon: Package,
    title: "Biblioteca Padrão Rica",
    description: "Extensa biblioteca padrão que cobre HTTP, criptografia, I/O, testes e muito mais sem dependências externas.",
    iconColor: "text-teal-600",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Projetado para sistemas distribuídos e microsserviços. Usado por Google, Uber, Docker e Kubernetes.",
    iconColor: "text-red-600",
  },
  {
    icon: Timer,
    title: "Compilação Rápida",
    description: "Tempo de build extremamente rápido mesmo em projetos grandes, aumentando a produtividade do desenvolvedor.",
    iconColor: "text-indigo-600",
  },
];
