import { useState, useRef, useEffect } from 'react'
import { useInViewAnimation } from '../../lib/useInViewAnimation'

interface Review {
  id: string
  name: string
  text: string
  stars: number
  avatarUrl?: string
}

const reviews: Review[] = [
  {
    id: 'fran',
    name: 'Fran Araujo',
    stars: 5,
    text:
      'Paulinha é uma excelente profissional! Sempre discreta e exerce sua profissão com amor. Parabéns flor pelo seu atendimento. Sempre que vou aí saio sempre agradecida!',
    avatarUrl: '/img/feedback-fran.png',
  },
  {
    id: 'thaina',
    name: 'Thaina Mota',
    stars: 5,
    text:
      'Sem dúvidas o melhor lugar pra depilação. Faço lá há muitos anos , confio demais na Paula ela é uma excelente profissional ,muito ética, comunicativa e cuidadosa. Super recomendo!',
    avatarUrl: '/img/feedback-thaina.png',
  },
  {
    id: 'deyse',
    name: 'Deyse Gois',
    stars: 5,
    text:
      'Atendimento nota 10000, sempre bem atenciosa, cuidado com higiene,  cuida bem dos seus clientes, sempre explicando o procedimento que está sendo feito e como profissional é excelente. Recomendo sua clinica...',
    avatarUrl: '/img/feedback-deyse.png',
  },
  {
    id: 'cintia',
    name: 'Cintia Lima',
    stars: 5,
    text:
      'Profissional excelente, atenciosa lugar aconchegante e tranquilo! Amei o atendimento,  sempre que possível retornarei!!!',
    avatarUrl: '/img/feedback-cintia.png',
  },
  {
    id: 'rita',
    name: 'Rita Fontenele',
    stars: 5,
    text:
      'Profissional muito competente, serviço de primeira qualidade. Amo fazer procedimentos com ela❤️',
    avatarUrl: '/img/feedback-rita.png',
  },
]

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-1 justify-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < stars ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Nídia+Paula+%7C+Estética/@-16.0196151,-48.0664318,1621m/data=!3m1!1e3!4m10!1m2!2m1!1sclinica+estetica+gama!3m6!1s0x935981c4ebbdc887:0x7f05670b5a38e55a!8m2!3d-16.0196151!4d-48.0616682!15sChVjbGluaWNhIGVzdGV0aWNhIGdhbWFaFyIVY2xpbmljYSBlc3RldGljYSBnYW1hkgEKYmVhdXRpY2lhbpoBJENoZERTVWhOTUc5blMwVkpRMEZuVFVSUmMyTjJhblJuUlJBQuABAPoBBAgAECY!16s%2Fg%2F11sscf4vdw?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"

export function Feedbacks() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const visualIndexRef = useRef<number>(reviews.length) // Inicia no meio (segundo bloco)
  const autoplayIntervalRef = useRef<number | null>(null)
  const resumeTimeoutRef = useRef<number | null>(null)
  const isScrollingRef = useRef(false)
  const lastScrollLeftRef = useRef(0)
  const scrollTimeoutRef = useRef<number | null>(null)
  const activeIndexTimeoutRef = useRef<number | null>(null)
  const { ref, isVisible } = useInViewAnimation()

  // Detectar se é desktop
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // Duplicar reviews para loop infinito suave
  const duplicatedReviews = [...reviews, ...reviews]

  // Calcular posição de scroll para um índice visual
  const getScrollPosition = (index: number): number => {
    if (!carouselRef.current) return 0
    
    const container = carouselRef.current
    const firstCard = container.querySelector('.review-card') as HTMLElement
    if (!firstCard) return 0
    
    const cardWidth = firstCard.offsetWidth
    const gap = window.innerWidth >= 1024 ? 24 : 16
    return index * (cardWidth + gap)
  }

  // Reset invisível quando sair da zona segura
  const checkAndReset = () => {
    if (!carouselRef.current || isScrollingRef.current) return
    
    const currentVisualIndex = visualIndexRef.current
    const totalCards = reviews.length * 2
    
    // Se passou do fim do segundo bloco (zona perigosa - último card do segundo bloco)
    if (currentVisualIndex >= totalCards - 1) {
      isScrollingRef.current = true
      // Resetar para o início do segundo bloco (mesmo card lógico)
      visualIndexRef.current = reviews.length
      const resetPosition = getScrollPosition(visualIndexRef.current)
      carouselRef.current.scrollTo({ left: resetPosition, behavior: 'auto' })
      setActiveIndex(0)
      setTimeout(() => {
        isScrollingRef.current = false
      }, 50)
      return
    }
    
    // Se voltou demais (antes do início do primeiro bloco - zona perigosa)
    if (currentVisualIndex < 0) {
      isScrollingRef.current = true
      // Resetar para o fim do segundo bloco (mesmo card lógico)
      visualIndexRef.current = reviews.length * 2 - 1
      const resetPosition = getScrollPosition(visualIndexRef.current)
      carouselRef.current.scrollTo({ left: resetPosition, behavior: 'auto' })
      setActiveIndex(reviews.length - 1)
      setTimeout(() => {
        isScrollingRef.current = false
      }, 50)
      return
    }
  }

  // Detectar card ativo baseado no scroll
  const updateActiveIndex = () => {
    if (!carouselRef.current) return

    const container = carouselRef.current
    const cards = container.querySelectorAll('.review-card') as NodeListOf<HTMLElement>
    if (cards.length === 0) return

    const containerRect = container.getBoundingClientRect()
    const containerCenter = containerRect.left + containerRect.width / 2

    let closestCard = 0
    let closestDistance = Infinity

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect()
      const cardCenter = cardRect.left + cardRect.width / 2
      const distance = Math.abs(containerCenter - cardCenter)

      if (distance < closestDistance) {
        closestDistance = distance
        closestCard = index
      }
    })

    // Atualizar visualIndex e activeIndex
    visualIndexRef.current = closestCard
    const realIndex = closestCard % reviews.length
    setActiveIndex(realIndex)
    
    // Verificar se precisa resetar
    checkAndReset()
  }

  // Posicionar scroll inicialmente no meio (segundo bloco)
  useEffect(() => {
    if (!carouselRef.current) return
    
    // Pequeno delay para garantir que os cards estejam renderizados
    const timer = setTimeout(() => {
      if (carouselRef.current) {
        const firstCard = carouselRef.current.querySelector('.review-card') as HTMLElement
        if (firstCard) {
          // Iniciar no meio (segundo bloco) para permitir loop infinito
          visualIndexRef.current = reviews.length
          const startPosition = getScrollPosition(reviews.length)
          carouselRef.current.scrollTo({ left: startPosition, behavior: 'auto' })
          // Atualizar activeIndex inicial (0, pois reviews.length % reviews.length = 0)
          setActiveIndex(0)
          // Garantir que o autoplay está ativo
          setIsPaused(false)
          setIsInteracting(false)
        }
      }
    }, 200)
    
    return () => clearTimeout(timer)
  }, [])

  // Detectar scroll manual do usuário (swipe/arraste) e atualizar activeIndex
  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    const handleScroll = () => {
      const currentScroll = container.scrollLeft
      const scrollDiff = Math.abs(currentScroll - lastScrollLeftRef.current)
      
      // Limpar timeouts anteriores
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      if (activeIndexTimeoutRef.current) {
        clearTimeout(activeIndexTimeoutRef.current)
      }
      
      // Se a diferença for significativa e não for scroll programático, é interação manual
      if (scrollDiff > 10 && !isScrollingRef.current) {
        setIsPaused(true)
        setIsInteracting(true)
        
        // Retomar após 2.5s de inatividade
        scrollTimeoutRef.current = setTimeout(() => {
          setIsInteracting(false)
          setIsPaused(false)
        }, 2500)
      }
      
      // Atualizar activeIndex com debounce (mais rápido para swipe)
      activeIndexTimeoutRef.current = setTimeout(() => {
        if (!isScrollingRef.current) {
          updateActiveIndex()
        }
      }, 100)
      
      lastScrollLeftRef.current = currentScroll
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      container.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      if (activeIndexTimeoutRef.current) {
        clearTimeout(activeIndexTimeoutRef.current)
      }
    }
  }, [])

  // Função para calcular a próxima posição de scroll
  const scrollToNext = () => {
    if (!carouselRef.current || isPaused || isInteracting) return

    isScrollingRef.current = true
    
    // Avançar visualIndex
    visualIndexRef.current += 1
    
    // Verificar se precisa resetar
    const totalCards = reviews.length * 2
    if (visualIndexRef.current >= totalCards) {
      // Resetar para o início do segundo bloco
      visualIndexRef.current = reviews.length
    }
    
    // Atualizar activeIndex
    const newActiveIndex = visualIndexRef.current % reviews.length
    setActiveIndex(newActiveIndex)
    
    // Scroll suave para a próxima posição
    const nextPosition = getScrollPosition(visualIndexRef.current)
    carouselRef.current.scrollTo({ left: nextPosition, behavior: 'smooth' })
    
    setTimeout(() => {
      isScrollingRef.current = false
    }, 600)
  }

  // Autoplay
  useEffect(() => {
    // Limpar intervalo anterior se existir
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current)
      autoplayIntervalRef.current = null
    }

    // Se estiver pausado ou interagindo, não iniciar autoplay
    if (isPaused || isInteracting) {
      return
    }

    // Iniciar autoplay
    autoplayIntervalRef.current = setInterval(() => {
      scrollToNext()
    }, 3500)

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
        autoplayIntervalRef.current = null
      }
    }
  }, [isPaused, isInteracting])

  // Pausar no hover (desktop)
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  // Pausar no toque/arraste (mobile)
  const handlePointerDown = () => {
    setIsInteracting(true)
    setIsPaused(true)
    
    // Limpar timeout de resume anterior se existir
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }
  }

  const handlePointerUp = () => {
    // Retomar após 1.5s
    resumeTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false)
      setIsPaused(false)
    }, 1500)
  }

  // Limpar timeouts ao desmontar
  useEffect(() => {
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      if (activeIndexTimeoutRef.current) {
        clearTimeout(activeIndexTimeoutRef.current)
      }
    }
  }, [])

  // Navegação manual
  const scrollPrev = () => {
    if (!carouselRef.current) return
    
    setIsPaused(true)
    isScrollingRef.current = true
    
    // Voltar visualIndex
    visualIndexRef.current -= 1
    
    // Verificar se precisa resetar antes de fazer scroll
    if (visualIndexRef.current < 0) {
      // Resetar para o fim do segundo bloco
      visualIndexRef.current = reviews.length * 2 - 1
    }
    
    // Atualizar activeIndex
    const newActiveIndex = visualIndexRef.current % reviews.length
    setActiveIndex(newActiveIndex)
    
    const prevPosition = getScrollPosition(visualIndexRef.current)
    carouselRef.current.scrollTo({ left: prevPosition, behavior: 'smooth' })
    
    setTimeout(() => {
      isScrollingRef.current = false
    }, 600)
    
    // Retomar após 2s
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 2000)
  }

  const scrollNext = () => {
    if (!carouselRef.current) return
    
    setIsPaused(true)
    isScrollingRef.current = true
    
    // Avançar visualIndex
    visualIndexRef.current += 1
    
    // Verificar se precisa resetar antes de fazer scroll
    const totalCards = reviews.length * 2
    if (visualIndexRef.current >= totalCards) {
      // Resetar para o início do segundo bloco
      visualIndexRef.current = reviews.length
    }
    
    // Atualizar activeIndex
    const newActiveIndex = visualIndexRef.current % reviews.length
    setActiveIndex(newActiveIndex)
    
    const nextPosition = getScrollPosition(visualIndexRef.current)
    carouselRef.current.scrollTo({ left: nextPosition, behavior: 'smooth' })
    
    setTimeout(() => {
      isScrollingRef.current = false
    }, 600)
    
    // Retomar após 2s
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 2000)
  }

  // Handler para botão Google
  const handleGoogleReviewsClick = () => {
    window.open(GOOGLE_REVIEWS_URL, '_blank', 'noopener,noreferrer')
  }

  // Pausar quando card recebe foco (acessibilidade)
  const handleCardFocus = () => {
    setIsPaused(true)
  }

  const handleCardBlur = () => {
    setIsPaused(false)
  }

  return (
    <section
      id="feedbacks"
      ref={ref}
      className={`bg-white py-8 md:py-12 lg:py-20 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="px-6 md:px-8">
        {/* Título */}
        <h2 className="font-alt font-semibold text-[24px] lg:text-[32px] text-center text-black mb-8 md:mb-10 lg:mb-6 leading-none" style={{ fontWeight: 600, lineHeight: '100%' }}>
          Feedbacks
        </h2>

        {/* Container do carrossel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Botões de navegação (desktop) */}
          <button
            onClick={scrollPrev}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20"
            aria-label="Avaliação anterior"
          >
            <svg
              className="w-5 h-5 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20"
            aria-label="Próxima avaliação"
          >
            <svg
              className="w-5 h-5 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carrossel */}
          <div
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 lg:gap-6 scroll-smooth items-stretch"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="review-card flex-none snap-center w-[90%] max-w-[320px] lg:w-[420px] lg:max-w-none bg-white rounded-2xl md:rounded-3xl shadow-sm p-2 lg:p-5 relative overflow-hidden min-h-[360px] lg:min-h-[420px] focus:outline-none focus:ring-2 focus:ring-foreground/20"
                tabIndex={0}
                onFocus={handleCardFocus}
                onBlur={handleCardBlur}
              >
                {/* Aspas decorativas no background */}
                <div
                  className="absolute top-3 left-3 lg:top-4 lg:left-4 text-foreground/5 text-8xl md:text-9xl font-serif leading-none pointer-events-none"
                  aria-hidden="true"
                >
                  "
                </div>

                {/* Conteúdo do card - flex flex-col justify-between */}
                <div className="relative z-10 h-full flex flex-col justify-between text-center px-2">
                  {/* Topo: Estrelas + Texto */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    {/* Estrelas */}
                    <div className="mb-4">
                      <StarRating stars={review.stars} />
                    </div>

                    {/* Texto da avaliação */}
                    <p 
                      className="font-alt text-black whitespace-normal break-words"
                      style={{
                        fontWeight: 500,
                        fontSize: isDesktop ? '28px' : '24px',
                        lineHeight: '120%',
                        letterSpacing: '7%',
                      }}
                    >
                      {review.text}
                    </p>
                  </div>

                  {/* Rodapé: Pílula com avatar + nome (apenas desktop) */}
                  <div className="hidden lg:flex justify-center mt-4">
                    <div className="text-white rounded-full px-3 py-2 flex items-center gap-2 shadow-sm" style={{ backgroundColor: '#E59D0D' }}>
                      {/* Avatar */}
                      <div className="w-7 h-7 rounded-full ring-2 ring-white ring-offset-0 overflow-hidden bg-muted flex-shrink-0">
                        {review.avatarUrl ? (
                          <img
                            src={review.avatarUrl}
                            alt={review.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = '/img/avatar-placeholder.png'
                              target.onerror = null
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white font-alt font-semibold text-xs">
                            {review.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      {/* Nome */}
                      <span className="text-sm font-medium whitespace-nowrap">
                        {review.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA + Avatares sincronizados (apenas mobile) */}
          <div className="mt-6 flex flex-col items-center lg:hidden">
            {/* Texto "Feedback feito por" */}
            <p 
              className="font-alt text-center"
              style={{
                fontWeight: 500,
                fontSize: '13px',
                lineHeight: '100%',
                letterSpacing: '7%',
                color: '#969696',
              }}
            >
              Feedback feito por
            </p>

            {/* Pílula dourada + Avatares preview */}
            <div className="mt-2 flex items-center gap-2">
              {/* Pílula dourada com avatar + nome do autor ativo */}
              <div className="text-white rounded-full px-4 py-2 flex items-center gap-3 shadow-sm" style={{ backgroundColor: '#E59D0D' }}>
                {/* Avatar do autor ativo */}
                <div className="w-8 h-8 rounded-full ring-2 ring-white ring-offset-0 overflow-hidden bg-muted flex-shrink-0">
                  {reviews[activeIndex].avatarUrl ? (
                    <img
                      src={reviews[activeIndex].avatarUrl}
                      alt={reviews[activeIndex].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/img/avatar-placeholder.png'
                        target.onerror = null // Prevenir loop infinito
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white font-alt font-semibold text-sm">
                      {reviews[activeIndex].name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                {/* Nome do autor ativo */}
                <span className="text-sm font-medium whitespace-nowrap">
                  {reviews[activeIndex].name}
                </span>
              </div>

              {/* Avatares preview (próximos 2) */}
              <div className="flex items-center -space-x-2">
                {[1, 2].map((offset) => {
                  const nextIndex = (activeIndex + offset) % reviews.length
                  const review = reviews[nextIndex]
                  return (
                    <div
                      key={nextIndex}
                      className="relative z-0 w-6 h-6 rounded-full ring-2 ring-white ring-offset-0 overflow-hidden bg-muted"
                    >
                      {review.avatarUrl ? (
                        <img
                          src={review.avatarUrl}
                          alt={review.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = '/img/avatar-placeholder.png'
                            target.onerror = null // Prevenir loop infinito
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-foreground/60 font-alt font-semibold text-[10px]">
                          {review.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Botão "Ver avaliações no Google" */}
            <button
              onClick={handleGoogleReviewsClick}
              className="mt-5 bg-white border-2 border-black rounded-full px-6 py-3 font-alt text-center hover:bg-foreground/5 transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20"
              style={{
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                minWidth: '280px',
                width: 'auto',
              }}
            >
              Ver avaliações no{' '}
              <span className="font-semibold inline-flex">
                <span className="text-blue-600">G</span>
                <span className="text-red-600">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-600">g</span>
                <span className="text-green-600">l</span>
                <span className="text-red-600">e</span>
              </span>
            </button>
          </div>

          {/* Botão "Ver avaliações no Google" (desktop) */}
          <div className="hidden lg:flex justify-center mt-6">
            <button
              onClick={handleGoogleReviewsClick}
              className="bg-white border-2 border-black rounded-full px-6 py-3 font-alt text-center hover:bg-foreground/5 transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20"
              style={{
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                minWidth: '320px',
                width: 'auto',
              }}
            >
              Ver avaliações no{' '}
              <span className="font-semibold inline-flex">
                <span className="text-blue-600">G</span>
                <span className="text-red-600">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-600">g</span>
                <span className="text-green-600">l</span>
                <span className="text-red-600">e</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Estilos para esconder scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Feedbacks
