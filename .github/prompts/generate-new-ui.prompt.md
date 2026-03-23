---
agent: true
description: "Gerar um novo componente de UI seguindo os padrões do projeto"
tools: ["codebase", "editFiles"]
---

# Criar Novo Componente de UI

## Contexto

Gere um novo componente de UI para a aplicação Galeria de Fotos & Portfólio seguindo padrões e convenções estabelecidos.

## Padrões do Projeto a Seguir

- Usar TypeScript com interfaces rigorosas
- Seguir o padrão de layout SectionContainer/SectionTitle
- Implementar design responsivo com Tailwind CSS
- Incluir suporte a dark mode
- Adicionar animações Framer Motion quando apropriado
- Usar ícones Lucide React
- Seguir boas práticas de acessibilidade

## Requisitos do Componente

1. Criar interface TypeScript para props
2. Usar classes Tailwind apropriadas com variantes de dark mode
3. Incluir comentários JSDoc
4. Exportar componente e tipos
5. Seguir convenções de nomenclatura (PascalCase para componentes)
6. Implementar padrões de design responsivo

## Estrutura de Arquivos

Coloque os componentes nos diretórios apropriados:

- Componentes de layout: `src/components/ui/layout/`
- Componentes de funcionalidade: `src/components/gallery/` ou `src/components/upload/`
- UI genérico: `src/components/ui/`

## Padrão de Uso de Exemplo

```tsx
<SectionContainer>
  <SectionTitle title="Nome do Componente" />
  {/* Conteúdo do componente */}
</SectionContainer>
```

Crie o componente seguindo estes padrões e inclua exemplos de uso.
