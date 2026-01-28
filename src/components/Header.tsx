import { useEffect, useCallback } from 'react'
import { useState } from 'react'

const MENU_ITEMS = [
  { label: 'Procedimentos mais buscados', href: '#procedimentos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Quem te atende', href: '#quem-te-atende' },
  { label: 'Antes e Depois', href: '#antes-depois' },
  { label: 'Feedbacks', href: '#feedbacks' },
  { label: 'Dúvidas frequentes', href: '#duvidas' },
  { label: 'Agendar', href: '#agendar' },
] as const

const DESKTOP_NAV_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Quem te atende', href: '#quem-te-atende' },
  { label: 'Antes e Depois', href: '#antes-depois' },
  { label: 'Feedbacks', href: '#feedbacks' },
  { label: 'Dúvidas frequentes', href: '#duvidas' },
  { label: 'Agendar', href: '#agendar' },
] as const

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    },
    [closeMenu],
  )

  // Bloquear scroll do body quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.style.overflow = originalOverflow
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, handleKeyDown])

  const handleMenuItemClick = () => {
    closeMenu()
  }

  return (
    <header className="relative w-full bg-[#FFEED7] border-b border-border">
      <div className="flex items-center justify-between py-3 px-6 lg:px-12 lg:max-w-7xl lg:mx-auto">
        {/* Logo */}
        <a href="#hero" className="flex items-center flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#FFEED7] flex items-center justify-center overflow-hidden">
            <img
              src="/img/logo-nidia.png"
              alt="Logo Nídia Paula"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget
                target.style.display = 'none'
              }}
            />
            <span className="sr-only">Ir para o topo</span>
          </div>
        </a>

        {/* Navegação Desktop - visível apenas em lg (≥1024px) */}
        <nav className="hidden lg:flex items-center gap-6 flex-shrink-0">
          {DESKTOP_NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-normal text-foreground hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botão hambúrguer - visível apenas em mobile/tablet (<1024px) */}
        <button
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="menu-drawer"
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden relative flex items-center justify-center w-11 h-11 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col justify-between w-6 h-4" aria-hidden="true">
            <span className="block h-[2px] rounded-full bg-foreground" />
            <span className="block h-[2px] rounded-full bg-foreground" />
            <span className="block h-[2px] rounded-full bg-foreground" />
          </div>
        </button>
      </div>

      {/* Backdrop e Drawer - renderizados apenas quando aberto (mobile/tablet) */}
      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/40"
            onClick={closeMenu}
            aria-hidden="true"
          />
            <aside
            id="menu-drawer"
            role="dialog"
            aria-modal="true"
            className="lg:hidden fixed inset-y-0 right-0 z-50 w-4/5 max-w-xs bg-[#FFEED7] shadow-xl border-l border-border transform transition-transform duration-200 ease-out translate-x-0"
          >
            <div className="flex items-center justify-end h-20 px-6">
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Fechar menu"
                className="flex items-center justify-center w-10 h-10 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="sr-only">Fechar</span>
                <span className="relative block w-5 h-5" aria-hidden="true">
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rotate-45 rounded-full bg-foreground" />
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 -rotate-45 rounded-full bg-foreground" />
                </span>
              </button>
            </div>

            <nav className="px-6 pb-10 space-y-4">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleMenuItemClick}
                  className="block text-base font-medium text-foreground py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>
        </>
      )}
    </header>
  )
}

