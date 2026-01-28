# 📁 Estrutura do Projeto

## 🌳 Árvore de Diretórios

```
default-project/
│
├── 📄 Arquivos de Configuração
│   ├── package.json              # Dependências e scripts
│   ├── package-lock.json         # Lock de dependências
│   ├── tsconfig.json             # Configuração TypeScript
│   ├── tsconfig.node.json        # TypeScript para Node
│   ├── vite.config.ts            # Configuração Vite
│   ├── tailwind.config.js        # Configuração Tailwind
│   ├── postcss.config.js         # Configuração PostCSS
│   ├── components.json           # Configuração shadcn/ui
│   ├── .eslintrc.cjs             # Configuração ESLint
│   └── .gitignore                # Arquivos ignorados pelo Git
│
├── 📚 Documentação
│   ├── README.md                 # Documentação principal
│   ├── TESTE_INSTALACAO.md       # Relatório de testes
│   ├── EXEMPLOS_USO.md           # Exemplos de código
│   └── ESTRUTURA_PROJETO.md      # Este arquivo
│
├── 🌐 HTML Base
│   └── index.html                # HTML principal
│
├── 📦 Public (Arquivos Estáticos)
│   └── vite.svg                  # Logo do Vite
│
├── 💻 Source (src/)
│   ├── main.tsx                  # Entry point da aplicação
│   ├── App.tsx                   # Componente principal
│   ├── App.css                   # Estilos do App
│   ├── index.css                 # Estilos globais + Tailwind
│   │
│   ├── 🧩 components/
│   │   └── ui/                   # Componentes shadcn/ui
│   │       ├── button.tsx        # Componente Button
│   │       ├── card.tsx          # Componente Card
│   │       └── input.tsx         # Componente Input
│   │
│   └── 🔧 lib/
│       └── utils.ts              # Utilitários (função cn)
│
├── 🏗️ Build Output (dist/)
│   ├── index.html                # HTML otimizado
│   └── assets/                   # JS e CSS minificados
│
└── 📦 node_modules/              # Dependências instaladas
```

## 📋 Descrição dos Arquivos Principais

### Configuração

#### `package.json`
Gerencia dependências e scripts do projeto:
- **Scripts:**
  - `npm run dev` - Inicia servidor de desenvolvimento
  - `npm run build` - Gera build de produção
  - `npm run preview` - Preview do build
  - `npm run lint` - Executa linter

#### `vite.config.ts`
Configuração do Vite com:
- Plugin React
- Path alias (`@/` → `./src/`)

#### `tailwind.config.js`
Configuração do Tailwind com:
- Tema customizado para shadcn/ui
- CSS variables
- Animações
- Plugin tailwindcss-animate

#### `components.json`
Configuração do shadcn/ui:
- Estilo: default
- TypeScript: habilitado
- Aliases de paths
- Localização dos componentes

#### `tsconfig.json`
Configuração TypeScript:
- Target: ES2020
- Strict mode habilitado
- Path mapping para `@/*`
- JSX: react-jsx

### Source Code

#### `src/main.tsx`
Entry point que:
- Renderiza o componente App
- Configura React.StrictMode
- Monta na div#root

#### `src/App.tsx`
Componente principal que demonstra:
- Uso de componentes shadcn/ui
- Integração com Tailwind
- Estrutura de layout

#### `src/index.css`
Estilos globais:
- Diretivas Tailwind (@tailwind)
- CSS variables para temas
- Configurações base

#### `src/lib/utils.ts`
Utilitários:
- Função `cn()` para mesclar classes
- Usa clsx + tailwind-merge

#### `src/components/ui/`
Componentes shadcn/ui instalados:
- Totalmente customizáveis
- TypeScript tipado
- Acessíveis (baseados em Radix UI)

## 🎯 Fluxo de Desenvolvimento

### 1. Desenvolvimento Local
```bash
npm run dev
```
- Vite inicia servidor em http://localhost:5173
- Hot Module Replacement ativo
- Erros exibidos no navegador

### 2. Adicionar Componentes
```bash
npx shadcn@latest add [component-name]
```
- Componente instalado em `src/components/ui/`
- Dependências adicionadas automaticamente
- Pronto para importar e usar

### 3. Build de Produção
```bash
npm run build
```
- TypeScript compilado
- Assets otimizados e minificados
- Output em `dist/`
- Pronto para deploy

### 4. Preview do Build
```bash
npm run preview
```
- Testa o build localmente
- Simula ambiente de produção

## 📦 Dependências

### Produção
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "class-variance-authority": "latest",
  "clsx": "latest",
  "tailwind-merge": "latest",
  "lucide-react": "latest"
}
```

### Desenvolvimento
```json
{
  "@types/react": "^18.3.5",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "typescript": "^5.5.4",
  "vite": "^5.4.2",
  "tailwindcss": "^3.4.13",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.47",
  "eslint": "^8.57.0",
  "tailwindcss-animate": "latest"
}
```

## 🔄 Workflow Recomendado

1. **Planejamento**
   - Defina os componentes necessários
   - Liste as páginas/rotas

2. **Instalação de Componentes**
   - Instale componentes shadcn conforme necessário
   - Customize em `src/components/ui/`

3. **Desenvolvimento**
   - Crie componentes em `src/components/`
   - Use Tailwind para estilização
   - Importe componentes shadcn/ui

4. **Testes**
   - Teste no navegador (npm run dev)
   - Valide responsividade
   - Teste dark mode (se aplicável)

5. **Build e Deploy**
   - Execute `npm run build`
   - Teste com `npm run preview`
   - Deploy da pasta `dist/`

## 🎨 Customização

### Adicionar Novos Componentes Próprios
```
src/components/
├── ui/              # shadcn/ui (não editar estrutura)
├── Header.tsx       # Seus componentes
├── Footer.tsx
└── Layout.tsx
```

### Adicionar Páginas (com React Router)
```
src/
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   └── Contact.tsx
└── App.tsx          # Configurar rotas aqui
```

### Adicionar Utilitários
```
src/lib/
├── utils.ts         # shadcn utils
├── api.ts           # Funções de API
└── helpers.ts       # Helpers customizados
```

## 📊 Tamanho do Build

Build otimizado (exemplo):
- **HTML:** ~0.5 KB
- **CSS:** ~11 KB (gzipped: ~3 KB)
- **JS:** ~176 KB (gzipped: ~56 KB)

Total: ~187 KB (gzipped: ~59 KB)

## 🚀 Próximos Passos Sugeridos

1. **Roteamento**
   ```bash
   npm install react-router-dom
   ```

2. **Gerenciamento de Estado**
   ```bash
   npm install zustand
   # ou
   npm install @tanstack/react-query
   ```

3. **Formulários**
   ```bash
   npm install react-hook-form zod
   npx shadcn@latest add form
   ```

4. **Ícones**
   ```bash
   # lucide-react já instalado
   # Veja: https://lucide.dev
   ```

5. **Mais Componentes shadcn**
   ```bash
   npx shadcn@latest add dialog
   npx shadcn@latest add dropdown-menu
   npx shadcn@latest add toast
   ```

---

**Estrutura criada em:** 08/01/2026
**Versão do projeto:** 0.0.0

