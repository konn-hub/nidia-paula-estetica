# 📚 Exemplos de Uso - shadcn/ui

## 🎯 Como Usar os Componentes

### Button (Botão)

```tsx
import { Button } from '@/components/ui/button'

// Variantes
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔥</Button>

// Com ícones (usando lucide-react)
import { Mail } from 'lucide-react'

<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login com Email
</Button>
```

### Card (Cartão)

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição do card</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo principal do card</p>
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>
```

### Input (Campo de Entrada)

```tsx
import { Input } from '@/components/ui/input'

// Input básico
<Input type="text" placeholder="Digite seu nome" />

// Input com label
<div className="space-y-2">
  <label htmlFor="email">Email</label>
  <Input id="email" type="email" placeholder="seu@email.com" />
</div>

// Input desabilitado
<Input disabled placeholder="Campo desabilitado" />
```

## 🎨 Personalizando Temas

### Alterando Cores no `src/index.css`

```css
@layer base {
  :root {
    /* Altere estas variáveis para personalizar o tema */
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    /* ... outras variáveis */
  }
}
```

### Usando Dark Mode

```tsx
// Adicione a classe "dark" ao elemento HTML
<html className="dark">
  {/* Seu app */}
</html>

// Ou crie um toggle de tema
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])
  
  return (
    <Button onClick={() => setIsDark(!isDark)}>
      {isDark ? '🌞' : '🌙'}
    </Button>
  )
}
```

## 🔧 Utilitário `cn()`

A função `cn()` combina classes do Tailwind de forma inteligente:

```tsx
import { cn } from '@/lib/utils'

// Mescla classes e resolve conflitos
<div className={cn(
  "text-base",
  "text-lg", // Esta sobrescreve text-base
  isActive && "bg-blue-500",
  className // Props externas
)} />

// Uso em componentes personalizados
interface MyComponentProps {
  className?: string
  variant?: 'default' | 'outline'
}

function MyComponent({ className, variant = 'default' }: MyComponentProps) {
  return (
    <div className={cn(
      "p-4 rounded-lg",
      variant === 'default' && "bg-gray-100",
      variant === 'outline' && "border-2 border-gray-300",
      className
    )}>
      Conteúdo
    </div>
  )
}
```

## 📦 Componentes Recomendados para Instalar

### Formulários
```bash
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group
npx shadcn@latest add switch
npx shadcn@latest add label
```

### Navegação
```bash
npx shadcn@latest add navigation-menu
npx shadcn@latest add tabs
npx shadcn@latest add breadcrumb
```

### Feedback
```bash
npx shadcn@latest add toast
npx shadcn@latest add alert
npx shadcn@latest add progress
npx shadcn@latest add skeleton
```

### Overlays
```bash
npx shadcn@latest add dialog
npx shadcn@latest add sheet
npx shadcn@latest add popover
npx shadcn@latest add tooltip
npx shadcn@latest add dropdown-menu
```

### Dados
```bash
npx shadcn@latest add table
npx shadcn@latest add data-table
npx shadcn@latest add calendar
npx shadcn@latest add date-picker
```

## 🎯 Exemplo Completo: Formulário de Login

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de login
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Bem-vindo de volta</CardTitle>
          <CardDescription>
            Entre com suas credenciais para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Senha
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            
            <Button type="submit" className="w-full">
              Entrar
            </Button>
            
            <Button type="button" variant="outline" className="w-full">
              Criar conta
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginForm
```

## 🔗 Links Úteis

- **Documentação shadcn/ui:** https://ui.shadcn.com
- **Componentes disponíveis:** https://ui.shadcn.com/docs/components
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev
- **Radix UI (base dos componentes):** https://www.radix-ui.com

## 💡 Dicas

1. **Sempre use o utilitário `cn()`** ao combinar classes do Tailwind
2. **Personalize os componentes** editando diretamente os arquivos em `src/components/ui/`
3. **Use CSS variables** para temas consistentes em toda a aplicação
4. **Instale apenas o que precisa** - não instale todos os componentes de uma vez
5. **Explore as variantes** - cada componente tem múltiplas opções de estilo

---

**Pronto para começar a desenvolver! 🚀**

