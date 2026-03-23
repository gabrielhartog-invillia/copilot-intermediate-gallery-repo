import { Zap, GitBranch, Shield, Package, Globe, Code, Server, Wrench, LucideIcon } from "lucide-react";

export interface GoVantagem {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
  iconColor: string;
}

export const goVantagensData: GoVantagem[] = [
  {
    icon: GitBranch,
    titulo: "Concorrência Nativa",
    descricao:
      "Goroutines e channels permitem escrever código concorrente de forma simples e eficiente, sem a complexidade de threads tradicionais.",
    iconColor: "text-blue-600",
  },
  {
    icon: Zap,
    titulo: "Alta Performance",
    descricao:
      "Compilado diretamente para código de máquina, o Go oferece desempenho próximo ao C/C++ com tempo de compilação extremamente rápido.",
    iconColor: "text-yellow-600",
  },
  {
    icon: Shield,
    titulo: "Tipagem Estática e Segura",
    descricao:
      "Sistema de tipos estático com verificação em tempo de compilação reduz bugs em produção e facilita a manutenção do código.",
    iconColor: "text-green-600",
  },
  {
    icon: Package,
    titulo: "Deploy Simplificado",
    descricao:
      "Gera binários estáticos sem dependências externas, tornando o deploy em qualquer ambiente extremamente simples e confiável.",
    iconColor: "text-purple-600",
  },
  {
    icon: Globe,
    titulo: "Multiplataforma",
    descricao:
      "Compila nativamente para Windows, macOS, Linux e diversas arquiteturas, facilitando a portabilidade das aplicações.",
    iconColor: "text-orange-600",
  },
  {
    icon: Code,
    titulo: "Simplicidade e Legibilidade",
    descricao:
      "Sintaxe minimalista e opinativa que favorece a clareza do código, reduzindo a curva de aprendizado e facilitando a colaboração em equipe.",
    iconColor: "text-blue-600",
  },
  {
    icon: Server,
    titulo: "Ideal para Microsserviços",
    descricao:
      "Baixo consumo de memória e inicialização rápida tornam o Go a escolha preferida para microsserviços e APIs de alta escala.",
    iconColor: "text-green-600",
  },
  {
    icon: Wrench,
    titulo: "Biblioteca Padrão Robusta",
    descricao:
      "Biblioteca padrão completa com suporte nativo a HTTP, criptografia, manipulação de arquivos e muito mais, reduzindo dependências externas.",
    iconColor: "text-purple-600",
  },
];
