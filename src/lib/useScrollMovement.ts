import { useEffect, useRef, useState } from 'react'

interface UseScrollMovementOptions {
  /** Intensidade do movimento (0.03 = bem leve, 0.08 = mais perceptível) */
  speed?: number
  /** Limite máximo em pixels do deslocamento (evita exagero) */
  maxOffset?: number
}

export function useScrollMovement(options: UseScrollMovementOptions = {}) {
  const { speed = 0.05, maxOffset = 24 } = options
  const ref = useRef<HTMLDivElement | null>(null)
  const [translateY, setTranslateY] = useState(0)
  const rafId = useRef<number>()

  useEffect(() => {
    const onScroll = () => {
      rafId.current = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return

        const rect = el.getBoundingClientRect()
        const viewportCenter = window.innerHeight / 2
        const sectionCenter = rect.top + rect.height / 2
        // Distância do centro da seção ao centro da viewport
        const distance = viewportCenter - sectionCenter
        let offset = distance * speed
        offset = Math.max(-maxOffset, Math.min(maxOffset, offset))
        setTranslateY(offset)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // valor inicial

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [speed, maxOffset])

  return {
    ref,
    style: { transform: `translateY(${translateY}px)` },
  }
}
