import { useState } from 'react'
import { useInViewAnimation } from '../../lib/useInViewAnimation'
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'

const services = [
  'Design de sobrancelha',
  'Depilação a laser',
  'Depilação com cera negra',
  'Drenagem pós-operatório',
  'Hidrolipoclasia',
  'Liberação miofascial',
  'Limpeza de pele',
  'Lipo enzimática',
  'Taping (pós operatório)',
  'Drenagem Linfática',
  'Massagem Drenoredutora',
  'Massagem Relaxante',
  'Ventosaterapia',
  'PEIM (para microcravos)',
  'Pump UP',
  'Peellings',
  'Skinbooster',
  'Microagulhamento',
  'Dermaplanig',
]

const protocols = [
  'Redução de Medidas',
  'Flacidez',
  'Celulite',
  'Gordura Localizada',
  'Emagrecimento',
]

export function AllServices() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const { ref, isVisible } = useInViewAnimation()

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section
      id="servicos"
      ref={ref}
      className={`bg-white py-8 md:py-12 lg:py-16 lg:overflow-x-hidden transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Container principal - mobile centralizado, desktop com grid */}
        <div className="max-w-4xl mx-auto lg:max-w-7xl">
          {/* Título - centralizado sempre */}
          <h2 className="font-alt font-semibold text-[24px] lg:text-[32px] text-center text-[#000000] mb-5 md:mb-6 lg:mb-8">
            Todos os nossos serviços
          </h2>

          {/* Grid 2 colunas no desktop */}
          <div className="lg:grid lg:grid-cols-[420px_1fr] lg:gap-16 lg:items-start">
            {/* Coluna Esquerda - Lista */}
            <div className="lg:w-full">
              {/* Lista de Serviços */}
              <div className="mb-6 md:mb-8">
                <div className="flex flex-col gap-3 md:gap-3.5">
                  {/* Primeiros 7 itens - sempre visíveis */}
                  {services.slice(0, 7).map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 md:gap-3"
                      style={{
                        opacity: 1,
                        transition: 'opacity 0.3s ease-in-out',
                      }}
                    >
                      <ChevronRight
                        className="w-4 h-4 md:w-5 md:h-5 text-[#E59D0D] flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-alt font-semibold text-[16px] text-[#000000]">
                        {service}
                      </span>
                    </div>
                  ))}

                  {/* Item Teaser (8º item com opacity baixa quando recolhido) */}
                  {!isExpanded && services.length > 7 && (
                    <div
                      className="flex items-center gap-2 md:gap-3"
                      style={{
                        opacity: 0.35,
                        transition: 'opacity 0.3s ease-in-out',
                        pointerEvents: 'none',
                      }}
                    >
                      <ChevronRight
                        className="w-4 h-4 md:w-5 md:h-5 text-[#E59D0D] flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-alt font-semibold text-[16px] text-[#000000]">
                        {services[7]}
                      </span>
                    </div>
                  )}

                  {/* Itens adicionais (do 8º em diante) - apenas quando expandido */}
                  {isExpanded && services.length > 7 && (
                    <div
                      className="flex flex-col gap-3 md:gap-3.5"
                      style={{
                        animation: 'fadeIn 0.3s ease-in-out',
                      }}
                    >
                      {services.slice(7).map((service, index) => (
                        <div
                          key={index + 7}
                          className="flex items-center gap-2 md:gap-3"
                          style={{
                            opacity: 1,
                            transition: 'opacity 0.3s ease-in-out',
                          }}
                        >
                          <ChevronRight
                            className="w-4 h-4 md:w-5 md:h-5 text-[#E59D0D] flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="font-alt font-semibold text-[16px] text-[#000000]">
                            {service}
                          </span>
                        </div>
                      ))}

                      {/* Subseção: Protocolos para */}
                      <div className="mt-2 md:mt-3">
                        <h3 className="font-alt font-semibold text-[16px] text-[#000000] mb-3 md:mb-3.5">
                          Protocolos para
                        </h3>
                        <div className="flex flex-col gap-3 md:gap-3.5 pl-4 md:pl-5">
                          {protocols.map((protocol, index) => (
                            <div
                              key={`protocol-${index}`}
                              className="flex items-center gap-2 md:gap-3"
                              style={{
                                opacity: 1,
                                transition: 'opacity 0.3s ease-in-out',
                              }}
                            >
                              <ChevronRight
                                className="w-4 h-4 md:w-5 md:h-5 text-[#E59D0D] flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="font-alt font-semibold text-[16px] text-[#000000]">
                                {protocol}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Button - centralizado no mobile, pode ficar centralizado na coluna no desktop */}
              <div className="flex flex-col items-center gap-2 lg:items-center">
                <button
                  onClick={toggleExpand}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleExpand()
                    }
                  }}
                  aria-expanded={isExpanded}
                  aria-label={isExpanded ? 'Recolher serviços' : 'Expandir todos os serviços'}
                  className="font-sans font-semibold text-[14px] text-[#E59D0D] uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E59D0D] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded transition-all duration-200 hover:opacity-80 active:opacity-70"
                  style={{
                    transition: 'opacity 0.2s ease-in-out',
                  }}
                >
                  {isExpanded ? 'RECOLHER SERVIÇOS' : 'EXPANDIR TODOS OS SERVIÇOS'}
                </button>

                {/* Ícone de Seta */}
                <div
                  className="transition-transform duration-300 ease-in-out"
                  style={{
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                  aria-hidden="true"
                >
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-[#E59D0D]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#E59D0D]" />
                  )}
                </div>
              </div>
            </div>

            {/* Coluna Direita - Imagens sobrepostas (apenas desktop) */}
            <div className="hidden lg:block lg:relative lg:w-full lg:min-h-[560px] lg:mt-8">
              {/* Wrapper sticky para manter o conjunto de imagens estável ao rolar/expandir */}
              <div className="lg:sticky lg:top-[calc(50vh-240px)] lg:flex lg:justify-center lg:items-center">
                <div className="lg:relative lg:w-full lg:max-w-[640px] lg:h-[560px] lg:overflow-visible">
                  {imageError ? (
                    <div className="w-full h-full flex items-center justify-center rounded-[36px] bg-neutral-200">
                      <span className="text-neutral-400 text-lg font-alt">Imagem</span>
                    </div>
                  ) : (
                    <>
                      {/* Imagem de trás */}
                      <img
                        src="/img/todo-servico-2.jpg"
                        alt="Serviços estéticos - referência"
                        className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:w-[52%] lg:h-[85%] lg:rounded-[32px] lg:overflow-hidden lg:rotate-[6deg] lg:shadow-lg lg:object-cover lg:z-10"
                        style={{
                          objectPosition: '50% 12%',
                        }}
                        onError={() => setImageError(true)}
                      />

                      {/* Imagem da frente */}
                      <img
                        src="/img/img-todo-servico.jpg"
                        alt="Todos os nossos serviços de estética"
                        className="hidden lg:block lg:absolute lg:left-0 lg:top-10 lg:w-[52%] lg:h-[85%] lg:rounded-[32px] lg:overflow-hidden lg:rotate-[-6deg] lg:shadow-lg lg:object-cover lg:z-20"
                        style={{
                          objectPosition: '50% 12%',
                        }}
                        onError={() => setImageError(true)}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos para animação e reduzir movimento */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}

export default AllServices
