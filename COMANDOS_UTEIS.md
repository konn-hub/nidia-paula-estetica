# 🛠️ Comandos Úteis

## 📦 NPM - Gerenciamento de Pacotes

### Instalação
```bash
# Instalar todas as dependências
npm install

# Instalar dependência de produção
npm install nome-do-pacote

# Instalar dependência de desenvolvimento
npm install -D nome-do-pacote

# Instalar versão específica
npm install nome-do-pacote@1.2.3

# Atualizar dependências
npm update

# Verificar pacotes desatualizados
npm outdated
```

### Desinstalação
```bash
# Remover pacote
npm uninstall nome-do-pacote

# Remover e atualizar package.json
npm uninstall --save nome-do-pacote
```

## 🚀 Scripts do Projeto

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento (porta 5173)
npm run dev

# Iniciar em porta específica
npm run dev -- --port 3000

# Iniciar e expor na rede local
npm run dev -- --host
```

### Build
```bash
# Build de produção
npm run build

# Preview do build
npm run preview

# Build e preview
npm run build && npm run preview
```

### Qualidade de Código
```bash
# Executar linter
npm run lint

# Corrigir problemas automaticamente
npm run lint -- --fix
```

## 🎨 shadcn/ui - Componentes

### Instalação de Componentes
```bash
# Sintaxe básica
npx shadcn@latest add [component-name]

# Com confirmação automática
npx shadcn@latest add [component-name] --yes

# Múltiplos componentes
npx shadcn@latest add button card input
```

### Componentes Populares
```bash
# Formulários
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group
npx shadcn@latest add switch
npx shadcn@latest add slider
npx shadcn@latest add label

# Layout
npx shadcn@latest add card
npx shadcn@latest add separator
npx shadcn@latest add aspect-ratio
npx shadcn@latest add scroll-area

# Navegação
npx shadcn@latest add navigation-menu
npx shadcn@latest add tabs
npx shadcn@latest add breadcrumb
npx shadcn@latest add pagination

# Overlays
npx shadcn@latest add dialog
npx shadcn@latest add sheet
npx shadcn@latest add popover
npx shadcn@latest add tooltip
npx shadcn@latest add dropdown-menu
npx shadcn@latest add context-menu
npx shadcn@latest add menubar
npx shadcn@latest add alert-dialog

# Feedback
npx shadcn@latest add toast
npx shadcn@latest add alert
npx shadcn@latest add progress
npx shadcn@latest add skeleton
npx shadcn@latest add badge

# Dados
npx shadcn@latest add table
npx shadcn@latest add data-table
npx shadcn@latest add calendar
npx shadcn@latest add date-picker
npx shadcn@latest add command
npx shadcn@latest add combobox

# Outros
npx shadcn@latest add avatar
npx shadcn@latest add accordion
npx shadcn@latest add collapsible
npx shadcn@latest add hover-card
npx shadcn@latest add toggle
npx shadcn@latest add toggle-group
```

### Atualizar Componentes
```bash
# Reinstalar componente (atualiza)
npx shadcn@latest add [component-name] --overwrite
```

## 🎯 Git - Controle de Versão

### Configuração Inicial
```bash
# Inicializar repositório
git init

# Configurar usuário
git config user.name "Seu Nome"
git config user.email "seu@email.com"

# Adicionar remote
git remote add origin https://github.com/usuario/repo.git
```

### Commits
```bash
# Ver status
git status

# Adicionar arquivos
git add .
git add arquivo.txt

# Commit
git commit -m "Mensagem do commit"

# Commit rápido (add + commit)
git commit -am "Mensagem"

# Ver histórico
git log
git log --oneline
```

### Branches
```bash
# Criar branch
git branch nome-da-branch

# Mudar de branch
git checkout nome-da-branch

# Criar e mudar (atalho)
git checkout -b nome-da-branch

# Listar branches
git branch

# Deletar branch
git branch -d nome-da-branch
```

### Sincronização
```bash
# Push
git push origin main

# Pull
git pull origin main

# Clone
git clone https://github.com/usuario/repo.git
```

## 🔧 TypeScript

### Verificação de Tipos
```bash
# Verificar tipos sem compilar
npx tsc --noEmit

# Watch mode
npx tsc --watch
```

## 🎨 Tailwind CSS

### Gerar Configuração Completa
```bash
npx tailwindcss init --full
```

### Build CSS (standalone)
```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

## 📊 Análise e Otimização

### Analisar Bundle
```bash
# Instalar plugin
npm install -D rollup-plugin-visualizer

# Adicionar ao vite.config.ts:
# import { visualizer } from 'rollup-plugin-visualizer'
# plugins: [react(), visualizer()]

# Build e ver análise
npm run build
```

### Verificar Tamanho
```bash
# Ver tamanho do build
du -sh dist/

# Ver tamanho detalhado
du -h dist/* | sort -h
```

## 🧪 Testes (se adicionar)

### Vitest
```bash
# Instalar
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Executar testes
npm run test

# Watch mode
npm run test -- --watch

# Coverage
npm run test -- --coverage
```

## 🚀 Deploy

### Vercel
```bash
# Instalar CLI
npm install -g vercel

# Deploy
vercel

# Deploy de produção
vercel --prod
```

### Netlify
```bash
# Instalar CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy de produção
netlify deploy --prod
```

### Build Manual
```bash
# Build
npm run build

# A pasta dist/ está pronta para deploy
# Upload para seu servidor/CDN
```

## 🔍 Debugging

### Vite
```bash
# Debug mode
npm run dev -- --debug

# Limpar cache
rm -rf node_modules/.vite
```

### Node Modules
```bash
# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install

# Verificar integridade
npm audit

# Corrigir vulnerabilidades
npm audit fix
```

## 📱 Responsividade

### Testar em Diferentes Tamanhos
```bash
# Iniciar dev server
npm run dev

# Abrir em:
# Desktop: http://localhost:5173
# Mobile (rede local): http://[seu-ip]:5173

# Ver IP local
hostname -I  # Linux
ipconfig     # Windows
```

## 🎓 Aprendizado

### Documentação
```bash
# Abrir docs do Vite
npx vite --help

# Abrir docs do TypeScript
npx tsc --help
```

### Exemplos shadcn/ui
Visite: https://ui.shadcn.com/examples

## 💡 Dicas Rápidas

```bash
# Limpar terminal
clear  # ou Ctrl+L

# Parar servidor
Ctrl+C

# Ver versões instaladas
npm list --depth=0

# Ver versão do Node
node --version

# Ver versão do npm
npm --version

# Abrir projeto no VS Code
code .

# Instalar extensões recomendadas do VS Code
# - Tailwind CSS IntelliSense
# - ESLint
# - Prettier
# - TypeScript Vue Plugin (Volar)
```

## 🔗 Links Úteis

- **Vite:** https://vitejs.dev
- **React:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org
- **Tailwind CSS:** https://tailwindcss.com
- **shadcn/ui:** https://ui.shadcn.com
- **Lucide Icons:** https://lucide.dev
- **Radix UI:** https://www.radix-ui.com

---

**Última atualização:** 08/01/2026

