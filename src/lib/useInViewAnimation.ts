import { useEffect, useRef, useState } from 'react'

type ElementRef = HTMLElement | null

interface UseInViewAnimationOptions extends IntersectionObserverInit {
  /**
   * Se true, a animação roda apenas uma vez.
   * Depois que o elemento aparece, permanece visível.
   */
  once?: boolean
}

export function useInViewAnimation(options: UseInViewAnimationOptions = {}) {
  const { once = true, threshold = 0.15, root = null, rootMargin } = options

  const ref = useRef<ElementRef>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') {
      // Fallback: se não houver IntersectionObserver (ou durante SSR),
      // consideramos como visível para evitar layout quebrado.
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [once, threshold, root, rootMargin])

  return { ref, isVisible }
}

