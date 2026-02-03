import { useInViewAnimation } from '@/lib/useInViewAnimation'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
}

/**
 * Envolve o conteúdo da seção com animação leve ao entrar na viewport.
 * Usa opacity + translateY para movimento suave e performático no mobile.
 * Não aplica transform no estado final que quebre botões (translateY(0) é seguro).
 */
export function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  const { ref, isVisible } = useInViewAnimation({ once: true, threshold: 0.08 })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-anim ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
