import { useScrollMovement } from '@/lib/useScrollMovement'

interface ScrollSectionProps {
  children: React.ReactNode
  /** Intensidade do movimento (opcional) */
  speed?: number
}

export function ScrollSection({ children, speed = 0.05 }: ScrollSectionProps) {
  const { ref, style } = useScrollMovement({ speed })

  return (
    <div
      ref={ref}
      style={style}
      className="transition-transform duration-100 ease-out"
    >
      {children}
    </div>
  )
}
