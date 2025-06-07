# GioBrands & Co. - Estrutura do Projeto

## 📁 Estrutura de Diretórios

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout raiz
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Cabeçalho da página
│   ├── Hero.tsx           # Seção hero com título e imagem
│   ├── AboutSection.tsx   # Seção sobre a empresa
│   ├── ProjectsSection.tsx # Seção de projetos em destaque
│   ├── ProjectCard.tsx    # Card individual de projeto
│   ├── ViewMoreCard.tsx   # Card especial "Ver Mais"
│   └── index.ts           # Barrel exports
├── data/                  # Dados estáticos
│   └── projects.ts        # Dados dos projetos
├── types/                 # Definições TypeScript
│   └── index.ts           # Interfaces e tipos
└── assets/               # Recursos estáticos
    ├── jpgs/             # Imagens JPEG
    └── svgs/             # Imagens SVG
```

## 🧩 Componentes

### `Header`

- Cabeçalho responsivo com logo e navegação
- Grid de 3 colunas (marca, logo, botão)
- Efeitos de hover no botão

### `Hero`

- Título principal em destaque
- Imagem hero em largura total com margens laterais
- Responsivo com breakpoints

### `AboutSection`

- Linha separadora
- Layout em duas colunas
- Texto sobre a empresa e serviços

### `ProjectsSection`

- Grid 2x2 de projetos em destaque
- Utiliza `ProjectCard` e `ViewMoreCard`
- Gerenciamento de estado para navegação

### `ProjectCard`

- Card reutilizável para projetos
- Efeitos de hover (escurecimento + texto)
- Props tipadas com TypeScript

### `ViewMoreCard`

- Card especial com animação única
- Cards coloridos que se movem no hover
- Botão centralizado

## 🔧 Tecnologias Utilizadas

- **Next.js 14** com App Router
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **React** para componentes

## 📊 Dados

Os dados dos projetos estão centralizados em `src/data/projects.ts`:

- `featuredProjects`: Projetos em destaque na homepage
- `allProjects`: Todos os projetos (para páginas futuras)

## 🎨 Funcionalidades

- **Responsivo**: Layout adaptável para diferentes telas
- **Interativo**: Efeitos de hover e transições suaves
- **Tipado**: TypeScript para maior segurança
- **Modular**: Componentes reutilizáveis e organizados
- **Otimizado**: Next.js Image para carregamento otimizado

## 🚀 Próximos Passos

1. Implementar roteamento para páginas individuais de projetos
2. Adicionar animações com Framer Motion
3. Criar páginas de portfolio completo
4. Implementar sistema de CMS (opcional)
5. Adicionar SEO otimizado
