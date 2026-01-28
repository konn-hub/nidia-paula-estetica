# Projeto Vite + React + TypeScript + Tailwind CSS + shadcn/ui

Este é um projeto base configurado com as melhores práticas e ferramentas modernas para desenvolvimento web.

> 📚 **[Ver Índice Completo da Documentação](./INDICE_DOCUMENTACAO.md)**

## 🚀 Tecnologias

- **Vite** - Build tool ultra rápido
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes reutilizáveis de alta qualidade
- **ESLint** - Linter para qualidade de código

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Instalar dependências adicionais do shadcn
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate
npm install lucide-react
```

## 🛠️ Comandos Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Executar linter
npm run lint
```

## 🎨 shadcn/ui

Para adicionar componentes do shadcn/ui:

```bash
# Exemplo: adicionar botão
npx shadcn@latest add button

# Exemplo: adicionar card
npx shadcn@latest add card

# Exemplo: adicionar input
npx shadcn@latest add input
```

Os componentes serão instalados em `src/components/ui/`

## 📁 Estrutura do Projeto

```
default-project/
├── src/
│   ├── components/     # Componentes React
│   │   └── ui/        # Componentes shadcn/ui
│   ├── lib/           # Utilitários e helpers
│   ├── App.tsx        # Componente principal
│   ├── main.tsx       # Ponto de entrada
│   └── index.css      # Estilos globais com Tailwind
├── public/            # Arquivos estáticos
├── index.html         # HTML base
├── vite.config.ts     # Configuração do Vite
├── tailwind.config.js # Configuração do Tailwind
├── tsconfig.json      # Configuração do TypeScript
└── components.json    # Configuração do shadcn/ui
```

## 🎯 Próximos Passos

1. Personalize o tema no `tailwind.config.js`
2. Adicione componentes do shadcn/ui conforme necessário
3. Crie seus componentes customizados em `src/components/`
4. Configure rotas com React Router (se necessário)
5. Adicione gerenciamento de estado (Zustand, Redux, etc.)

## 📝 Notas

- Path aliases configurados: `@/` aponta para `./src/`
- CSS variables configuradas para temas (light/dark)
- ESLint configurado com regras recomendadas
- TypeScript em modo strict

## 🤝 Contribuindo

Sinta-se livre para contribuir com melhorias!

## 📄 Licença

MIT

