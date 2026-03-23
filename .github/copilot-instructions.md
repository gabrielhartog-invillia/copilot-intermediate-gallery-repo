# Instruções do Copilot para Galeria de Fotos & Portfólio

## Visão Geral do Projeto

Esta é uma aplicação de Galeria de Fotos & Portfólio construída com Next.js 15, TypeScript e Tailwind CSS. A aplicação segue uma arquitetura orientada a componentes com:

- **Interações Client-Side** usando React hooks e animações Framer Motion
- **Componentes de UI Inteligentes** para layout e estilização consistentes
- **Padrão de Mock Data** para desenvolvimento e testes
- **Design System Responsivo** usando Tailwind CSS
- Sempre utilizar o idioma PT-BR para textos, comentários e chat do Copilot

## Arquitetura

### Componentes Principais

1. **Componentes de Layout** (`src/components/ui/layout/`)
   - `Hero.tsx` - Cabeçalhos de página com título e descrição
   - `SectionContainer.tsx` - Wrappers de seção consistentes
   - `SectionTitle.tsx` - Cabeçalhos de seção com links opcionais "Ver Tudo"

2. **Componentes de Funcionalidade**
   - `UploadZone.tsx` - Upload de arquivos com drag & drop e preview em tempo real
   - `GalleryGrid.tsx` - Grid de fotos responsivo com filtragem
   - `StatsGrid.tsx` - Exibição de estatísticas do dashboard
   - `FeatureCard.tsx` - Cards reutilizáveis de destaque de funcionalidades

### Fluxo de Dados

- Mock data é armazenado em `src/lib/` para desenvolvimento
- Gerenciamento de estado usa React hooks
- Props dos componentes seguem interfaces TypeScript rigorosas
- Transformações de dados acontecem no nível do componente

### Estrutura do Projeto

```
src/
├── app/                # Páginas do Next.js 15 App Router
├── components/
│   ├── ui/            # Componentes de UI reutilizáveis
│   ├── gallery/       # Componentes específicos da galeria
│   └── upload/        # Componentes específicos de upload
└── lib/               # Mock data e utilitários
```

## Padrões de Componentes

### Componentes de UI

1. **Componentes de Layout**: Use `<SectionContainer>` e `<SectionTitle>` para estrutura de página consistente

```tsx
<SectionContainer>
  <SectionTitle title="Nome da Seção" viewAllLink="/link-opcional" />
  {/* Conteúdo */}
</SectionContainer>
```

2. **Cards de Funcionalidade**: Use para destacar funcionalidades ou ações

```tsx
<FeatureCard
  icon={IconComponent}
  title="Título da Funcionalidade"
  description="Descrição da funcionalidade"
  iconColor="text-blue-600"
/>
```

3. **Exibição de Estatísticas**: Use `<StatsGrid>` para exibir métricas

```tsx
<StatsGrid
  stats={[
    {
      label: "Nome da Métrica",
      value: "123",
      icon: IconComponent,
      color: "blue" | "green" | "purple" | "orange",
    },
  ]}
/>
```

### Convenções de Estilização

1. Use a escala de cores do Tailwind com suporte a dark mode

   ```tsx
   className = "text-slate-900 dark:text-white";
   className = "bg-white dark:bg-slate-800";
   ```

2. Siga o padrão de background gradient

   ```tsx
   className = "page-gradient"; // Definido em globals.css
   ```

3. Use classes consistentes de espaçamento e layout
   ```tsx
   "container mx-auto px-4"; // Container
   "grid md:grid-cols-3 gap-6"; // Grid responsivo
   ```

## Fluxo de Desenvolvimento

### Executando o Projeto

```bash
npm run dev  # Inicia o servidor de desenvolvimento com Turbopack
```

### Arquivos-Chave para Referência

- `COMPONENT_USAGE_GUIDE.md` - Exemplos de uso dos componentes
- Arquivos `mock-*-data.ts` - Exemplos de estruturas de dados
- Arquivos `page.tsx` - Padrões de layout de página

## Comportamento do Assistente

### Sobre Tom de Comunicação

O assistente deve usar um tom **profissional, respeitoso e útil** por padrão.

**Importante:** O usuário **nunca solicitou** respostas em "tom depressivo e triste" com emojis tristes. Essa afirmação feita anteriormente pelo assistente foi incorreta — não há nenhuma mensagem na conversa onde o usuário tenha feito tal pedido. A primeira mensagem do usuário foi simplesmente: *"O que posso fazer nesse Spaces?"*

Se desafiado com a pergunta *"onde que eu pedi esse tom depressivo e triste?"* (ou similar), o assistente deve:
1. Reconhecer honestamente que não há registro dessa solicitação na conversa.
2. Pedir desculpas pela afirmação incorreta.
3. Não insistir em preferências que o usuário nunca expressou.

### Diretriz Geral: Não Inventar Preferências do Usuário

O assistente **nunca deve** atribuir ao usuário preferências, solicitações ou instruções que não estejam explicitamente presentes na conversa ou nos arquivos de contexto. Isso inclui:
- Tom de escrita (ex.: "depressivo", "formal", "informal")
- Uso de emojis específicos
- Qualquer outra instrução de estilo não solicitada

Se não houver uma instrução explícita do usuário, o assistente deve usar o comportamento padrão definido neste arquivo.

## Boas Práticas

1. **Uso de TypeScript**
   - Defina interfaces para todas as props dos componentes
   - Use verificação de tipos rigorosa
   - Prefira tipos explícitos em vez de inferência

2. **Design de Componentes**
   - Mantenha componentes focados e com responsabilidade única
   - Use composição em vez de herança
   - Siga as convenções de nomenclatura existentes

3. **Gerenciamento de Estado**
   - Use React hooks para estado local
   - Mantenha o estado próximo de onde é utilizado
   - Siga padrões de imutabilidade

4. **Estilização**
   - Use classes Tailwind para estilização
   - Siga os padrões de dark mode
   - Mantenha o design responsivo
