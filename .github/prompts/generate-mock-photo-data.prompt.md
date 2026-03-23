# Gerar Mock Data de Fotos

Por favor, gere entradas adicionais de mock data de fotos para a aplicação de galeria de fotos. Os dados devem seguir a estrutura existente em `mock-photo-data.ts`.

## Instruções

1. Quantas novas entradas de fotos você gostaria de adicionar ao mock data? (Por favor, especifique um número)

## Referência da Estrutura de Dados

Cada entrada de foto deve incluir:

```typescript
{
  id: string;          // Identificador único
  url: string;         // Caminho para a foto (formato: '/placeholder-{numero}.jpg')
  title: string;       // Título descritivo
  tags: string[];      // Array de tags relevantes
  likes: number;       // Número de curtidas (faixa: 50-500)
  downloads: number;   // Número de downloads (faixa: 20-200)
  views: number;       // Número de visualizações (faixa: 500-5000)
  photographer: string;// Nome do fotógrafo
  dateTaken: string;   // Formato de data ISO (YYYY-MM-DD)
}
```

## Requisitos

- Cada entrada deve ter IDs únicos continuando a partir do último ID nos dados existentes
- URLs devem seguir o padrão '/placeholder-{numero}.jpg'
- Incluir categorias diversas de fotos (paisagem, retrato, arquitetura, natureza, etc.)
- Usar números realistas de engajamento (curtidas, downloads, visualizações)
- Incluir datas dos últimos 6 meses
- Fornecer nomes de fotógrafos variados e realistas
- Incluir 3-5 tags relevantes por foto

## Exemplo de Entrada

```typescript
{
  id: '10',
  url: '/placeholder-10.jpg',
  title: 'Vale com Névoa Matinal',
  tags: ['landscape', 'morning', 'fog', 'nature'],
  likes: 178,
  downloads: 67,
  views: 1843,
  photographer: 'Raquel Costa',
  dateTaken: '2024-01-20'
}
```

Por favor, forneça o número de entradas que deseja gerar e eu ajudarei a criar novos mock data que correspondam a esses requisitos.
