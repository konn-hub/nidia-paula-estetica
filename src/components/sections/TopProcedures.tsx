import { useRef, useState, useEffect } from 'react'
import { Calendar, ArrowRight } from 'lucide-react'
import { useInViewAnimation } from '../../lib/useInViewAnimation'

interface Procedure {
  id: string
  name: string
  image: string
}

const procedures: Procedure[] = [
  {
    id: '1',
    name: 'LIMPEZA DE PELE',
    image: '/img/servico-limpaza-pele.jpg'
  },
  {
    id: '2',
    name: 'PEELING',
    image: '/img/servico-peelling.jpg'
  },
  {
    id: '3',
    name: 'DEPILAÇÃO A LASER',
    image: '/img/servico-laser.jpg'
  },
  {
    id: '4',
    name: 'ALTA FREQUENCIA',
    image: '/img/servico-frequencia.jpg'
  },
  {
    id: '5',
    name: 'MASSAGENS',
    image: '/img/servico-massagem.jpg'
  }
]

export function TopProcedures() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const [imageLoading, setImageLoading] = useState<Set<string>>(
    new Set(procedures.map((p) => p.id))
  )
  const { ref, isVisible } = useInViewAnimation()

  // Inicializa todas as imagens como loading
  useEffect(() => {
    setImageLoading(new Set(procedures.map((p) => p.id)))
  }, [])

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const { scrollLeft, clientWidth, scrollWidth } = container
      const tolerance = 16 // tolerância para evitar erro por arredondamento

      // Verifica se está no final do scroll
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - tolerance

      if (isAtEnd) {
        // Se estiver no final, volta para o início
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
      } else {
        // Caso contrário, avança para o próximo card
        const firstCard = container.querySelector('.snap-start')
        if (firstCard) {
          const cardWidth = firstCard.getBoundingClientRect().width
          const gap = 18 // gap entre cards (gap-4 = 16px, gap-5 = 20px, usando 18px como média)
          const scrollAmount = cardWidth + gap

          container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
          })
        }
      }
    }
  }

  const handleSchedule = (procedure: Procedure) => {
    // Por enquanto, placeholder - pode ser substituído por navegação para WhatsApp
    console.log('Agendar:', procedure.name)
    // window.open(`https://wa.me/...?text=Gostaria de agendar ${procedure.name}`, '_blank')
  }

  return (
    <section
      id="procedimentos"
      ref={ref}
      className={`bg-white pt-8 md:pt-12 pb-8 md:pb-12 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Container padrão seguindo o mesmo padrão das outras seções */}
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="mx-auto">
          {/* Título */}
          <h2 className="font-alt font-semibold text-[24px] lg:text-[32px] text-center text-foreground mb-6 md:mb-8 leading-tight">
            Procedimentos mais buscados
          </h2>

          {/* Container do Carrossel */}
          <div className="relative">
            {/* Carrossel */}
            <div
              ref={scrollContainerRef}
              className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-px-6"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {procedures.map((procedure) => (
                <div
                  key={procedure.id}
                  className="snap-start flex-shrink-0 w-[280px] md:w-[300px] lg:w-[320px] h-[400px] md:h-[450px] rounded-3xl overflow-hidden cursor-pointer group relative"
                  onClick={() => handleSchedule(procedure)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleSchedule(procedure)
                    }
                  }}
                  aria-label={`Agendar ${procedure.name}`}
                >
                  {/* Imagem de Fundo */}
                  <div className="absolute inset-0 bg-neutral-200">
                    {imageErrors.has(procedure.id) ? (
                      <div className="w-full h-full flex items-center justify-center text-foreground/50 font-alt text-lg text-center px-4 bg-gradient-to-br from-neutral-200 to-neutral-300">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-2xl">📷</span>
                          <span>{procedure.name}</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        {imageLoading.has(procedure.id) && (
                          <div className="absolute inset-0 flex items-center justify-center bg-neutral-200">
                            <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground/60 rounded-full animate-spin" />
                          </div>
                        )}
                        <img
                          src={procedure.image}
                          alt={procedure.name}
                          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                            imageLoading.has(procedure.id) ? 'opacity-0' : 'opacity-100'
                          }`}
                          loading="lazy"
                          onLoad={() => {
                            setImageLoading((prev) => {
                              const next = new Set(prev)
                              next.delete(procedure.id)
                              return next
                            })
                          }}
                          onError={(e) => {
                            setImageErrors((prev) => new Set(prev).add(procedure.id))
                            setImageLoading((prev) => {
                              const next = new Set(prev)
                              next.delete(procedure.id)
                              return next
                            })
                            // Previne que o navegador mostre o ícone de imagem quebrada
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                      </>
                    )}
                  </div>

                  {/* Overlay em Degradê */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFEED7] via-[#FFEED7]/80 to-transparent" />

                  {/* Conteúdo do Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="font-sans font-semibold text-[24px] text-foreground mb-2 md:mb-3 uppercase">
                      {procedure.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[#553800] font-alt font-semibold text-[16px]">
                      <Calendar className="w-4 h-4 text-[#553800]" aria-hidden="true" />
                      <span>Agendar horário</span>
                    </div>
                  </div>

                  {/* Efeito de Hover - Sombra */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 shadow-2xl rounded-3xl" />
                  </div>
                </div>
              ))}
            </div>

            {/* Botão de Navegação - Seta (posicionada abaixo dos cards) */}
            <div className="relative mt-4 flex justify-end">
              <button
                onClick={handleNext}
                className="relative p-0 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E59D0D] focus-visible:ring-offset-2 rounded-full z-10"
                style={{
                  top: '6.13px',
                  left: '1.53px',
                }}
                aria-label="Próximos procedimentos"
              >
                <ArrowRight
                  className="text-[#553800]"
                  style={{
                    width: '42.93267822265625px',
                    height: '33.69499588012695px',
                    opacity: 1,
                  }}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Estilo para esconder scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default TopProcedures
