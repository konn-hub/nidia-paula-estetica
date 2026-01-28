import { useState, useEffect, useRef } from 'react'
import { useInViewAnimation } from '../../lib/useInViewAnimation'

export function DidYouKnow() {
  const [unlocked, setUnlocked] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const { ref, isVisible } = useInViewAnimation()

  // Verificar preferência de movimento reduzido
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Carregar estado do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('showSensitivePostOp')
    if (saved === 'true') {
      setUnlocked(true)
    }
  }, [])

  // Sincronizar com localStorage quando unlocked mudar
  useEffect(() => {
    if (unlocked) {
      localStorage.setItem('showSensitivePostOp', 'true')
    } else {
      localStorage.setItem('showSensitivePostOp', 'false')
    }
  }, [unlocked])

  const handleToggle = () => {
    setUnlocked(prev => !prev)
  }

  const images = [
    '/img/pos-operatorio-1.jpg',
    '/img/pos-operatorio-2.jpg',
  ]

  return (
    <section
      ref={ref}
      className={`bg-white py-8 md:py-12 lg:py-20 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="mx-auto">
          {/* Pill "Você sabia?" */}
          <div className="flex justify-center">
            <div
              className="rounded-full border px-4 py-1.5 lg:px-3 lg:py-1 font-alt text-center leading-[100%] tracking-normal text-[12px] lg:text-[13px]"
              style={{
                borderColor: '#E59D0D',
                color: '#E59D0D',
                fontWeight: 600,
              }}
            >
              Você sabia?
            </div>
          </div>

          {/* Título em 2 linhas */}
          <h2
            className="text-center font-sans font-semibold leading-[100%] lg:leading-snug mb-6 lg:mb-0 text-foreground text-[24px] lg:text-[32px] mt-4 lg:mt-4"
          >
            Também fazemos
            <br />
            Pós Operatório
          </h2>

          {/* Área das imagens */}
          <div className="mb-6 md:mb-8 lg:mb-0 mt-6 md:mt-8 lg:mt-10">
            {/* Mobile/Tablet: Carrossel com scroll */}
            <div className="lg:hidden">
              {/* Container do carrossel */}
              <div
                ref={scrollerRef}
                className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-px-6"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {images.map((src, index) => (
                  <div
                    key={index}
                    className={`snap-start flex-shrink-0 relative rounded-[28px] overflow-hidden bg-background transition-all ${
                      isReducedMotion ? '' : 'duration-300'
                    }`}
                    style={{
                      width: unlocked ? '280px' : '210px',
                      height: unlocked ? '400px' : '300px',
                      transform: 'scale(1)',
                    }}
                  >
                      {/* Imagem - blur e filtros aplicados diretamente aqui */}
                      <img
                        src={src}
                        alt={`Resultado pós operatório ${index + 1}`}
                        className={`w-full h-full object-cover transition-all ${
                          isReducedMotion ? '' : 'duration-300'
                        }`}
                        style={{
                          filter: unlocked
                            ? 'none'
                            : 'blur(6px) saturate(0.9) brightness(1.05)',
                          opacity: unlocked ? 1 : 0.45,
                        }}
                      />

                      {/* Overlay bege quente em degradê com backdrop-filter */}
                      <div
                        className={`absolute inset-0 pointer-events-none transition-opacity ${
                          isReducedMotion ? '' : 'duration-300'
                        } ${
                          unlocked ? 'opacity-0' : 'opacity-100'
                        }`}
                        style={{
                          background: `linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(251,234,214,0.88) 55%, rgba(251,234,214,1) 100%)`,
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                        }}
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Desktop: Grid com 2 cards lado a lado */}
            <div className="hidden lg:flex items-center justify-center" style={{ gap: '16px', margin: '0 auto', padding: '0', width: 'fit-content' }}>
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`relative rounded-[28px] overflow-hidden flex-shrink-0 bg-background transition-all ${
                    isReducedMotion ? '' : 'duration-300'
                  }`}
                  style={{
                    width: unlocked ? 'clamp(420px, 44vw, 520px)' : 'clamp(315px, 33vw, 390px)',
                    height: unlocked ? 'clamp(300px, 32vw, 380px)' : 'clamp(225px, 24vw, 285px)',
                    transform: 'scale(1)',
                  }}
                >
                  {/* Imagem - blur e filtros aplicados diretamente aqui */}
                  <img
                    src={src}
                    alt={`Resultado pós operatório ${index + 1}`}
                    className={`w-full h-full object-cover transition-all ${
                      isReducedMotion ? '' : 'duration-300'
                    }`}
                    style={{
                      filter: unlocked
                        ? 'none'
                        : 'blur(6px) saturate(0.9) brightness(1.05)',
                      opacity: unlocked ? 1 : 0.45,
                    }}
                  />

                  {/* Overlay bege quente em degradê com backdrop-filter */}
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity ${
                      isReducedMotion ? '' : 'duration-300'
                    } ${
                      unlocked ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{
                      background: `linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(251,234,214,0.88) 55%, rgba(251,234,214,1) 100%)`,
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA - Texto clicável "Ver fotos" / "Esconder fotos" */}
          <div
            className={`flex justify-center ${
              unlocked ? 'mt-4' : 'mt-0'
            } md:mt-5 lg:mt-6`}
          >
            <div
              onClick={handleToggle}
              className="flex flex-col items-center gap-1 cursor-pointer transition-opacity hover:opacity-85"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleToggle()
                }
              }}
              aria-label={unlocked ? 'Esconder fotos' : 'Ver fotos de conteúdo sensível'}
            >
              {/* Linha 1: "Ver fotos" / "Esconder fotos" */}
              <span
                className="font-sans font-semibold leading-[100%] tracking-normal text-center"
                style={{
                  color: '#E59D0D',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                {unlocked ? 'Esconder fotos' : 'Ver fotos'}
              </span>

              {/* Linha 2: "conteúdo sensível" */}
              <span
                className="font-sans font-semibold leading-[100%] tracking-normal text-center"
                style={{
                  color: '#E59D0D',
                  fontSize: '12px',
                  fontWeight: 600,
                  opacity: 0.65,
                }}
              >
                conteúdo sensível
              </span>

              {/* Linha 3: Ícone seta - muda direção baseado no estado */}
              <img
                src="/img/icone-seta.png"
                alt=""
                width="12"
                height="12"
                className={`object-contain transition-transform ${isReducedMotion ? '' : 'duration-200'}`}
                style={{
                  transform: unlocked ? 'rotate(180deg)' : 'rotate(0deg)',
                  filter: 'brightness(0) saturate(100%) invert(67%) sepia(93%) saturate(1352%) hue-rotate(1deg) brightness(98%) contrast(89%)',
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilo para esconder scrollbar no carrossel */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
