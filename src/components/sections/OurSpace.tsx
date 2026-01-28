import { useInViewAnimation } from '../../lib/useInViewAnimation'

export function OurSpace() {
  const { ref, isVisible } = useInViewAnimation()
  const handleOpenMaps = () => {
    const mapsUrl = 'https://www.google.com/maps/place/Nídia+Paula+%7C+Estética/@-16.0196151,-48.0616682,807m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935981c4ebbdc887:0x7f05670b5a38e55a!8m2!3d-16.0196151!4d-48.0616682!16s%2Fg%2F11sscf4vdw?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D'
    window.open(mapsUrl, '_blank', 'noopener,noreferrer')
  }

  // Imagens do espaço
  const spaceImages = [
    '/img/espaco1-desc.jpeg',
    '/img/espaco2-desc.jpeg',
    '/img/espaco3-desc.jpeg',
    '/img/espaco4-desc.jpeg',
  ]

  // Endereço (2 linhas normais)
  const addressInfo = [
    {
      icon: '/img/icone-local.png',
      text: 'Setor Central, Lotes 24/25 — Gama/DF',
    },
    {
      icon: '/img/icone-referencia.png',
      text: 'Órion Mall — Loja 31 térreo — Lado Leste',
    },
  ]

  // URL do embed do Google Maps
  // Coordenadas: -16.0196151, -48.0616682
  const mapsEmbedUrl = 'https://www.google.com/maps?q=-16.0196151,-48.0616682&hl=pt-BR&z=15&output=embed'

  // Função para obter border-radius específico por posição no grid
  const getBorderRadius = (index: number) => {
    switch (index) {
      case 0: // TOP-LEFT
        return {
          borderTopLeftRadius: '22px',
          borderTopRightRadius: '22px',
          borderBottomLeftRadius: '22px',
          borderBottomRightRadius: '50px', // interno, canto do meio
        }
      case 1: // TOP-RIGHT
        return {
          borderTopLeftRadius: '22px',
          borderTopRightRadius: '22px',
          borderBottomLeftRadius: '50px', // interno, canto do meio
          borderBottomRightRadius: '22px',
        }
      case 2: // BOTTOM-LEFT
        return {
          borderTopLeftRadius: '22px',
          borderTopRightRadius: '50px', // interno, canto do meio
          borderBottomLeftRadius: '22px',
          borderBottomRightRadius: '22px',
        }
      case 3: // BOTTOM-RIGHT
        return {
          borderTopLeftRadius: '50px', // interno, canto do meio
          borderTopRightRadius: '22px',
          borderBottomLeftRadius: '22px',
          borderBottomRightRadius: '22px',
        }
      default:
        return {
          borderTopLeftRadius: '22px',
          borderTopRightRadius: '22px',
          borderBottomLeftRadius: '22px',
          borderBottomRightRadius: '22px',
        }
    }
  }

  return (
    <section
      id="espaco"
      ref={ref}
      className={`bg-white py-12 md:py-16 lg:py-20 lg:pt-24 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[340px] lg:max-w-[1200px] mx-auto">
          {/* Título */}
          <h2 
            className="text-center font-alt font-semibold text-[24px] lg:text-[32px] leading-[100%] mb-6 lg:mb-16"
            style={{ color: '#000000' }}
          >
            Nosso Espaço
          </h2>

          {/* Layout Responsivo: Mobile (coluna) | Desktop (2 colunas) */}
          <div className="flex flex-col lg:grid lg:grid-cols-[440px_1fr] lg:gap-x-16 lg:items-center">
            
            {/* COLUNA ESQUERDA: Infos + Botão + Mapa */}
            <div className="order-2 lg:order-1 w-full lg:w-[440px] lg:self-center">
              {/* Endereço (2 linhas normais) */}
              <div className="flex flex-col gap-3 mb-4 lg:mb-6">
                {addressInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <img
                      src={info.icon}
                      alt=""
                      className="flex-shrink-0 w-[18px] h-[18px] object-contain mt-[2px]"
                      aria-hidden="true"
                    />
                    <p 
                      className="font-alt font-medium text-base leading-tight"
                      style={{ color: '#000000' }}
                    >
                      {info.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chips de Horário */}
              <div className="flex flex-col gap-2 mb-6 lg:mb-0">
                {/* Primeira linha: Seg–Sex + 08h–18h */}
                <div className="flex flex-wrap gap-2">
                  <div
                    className="flex items-center gap-2 rounded-full border px-3 py-2 whitespace-nowrap"
                    style={{
                      borderColor: 'rgba(0, 0, 0, 0.2)',
                      borderWidth: '1px',
                    }}
                  >
                    <img
                      src="/img/icone-calendario-espaco.png"
                      alt=""
                      className="flex-shrink-0 w-[16px] h-[16px] object-contain"
                      aria-hidden="true"
                    />
                    <span 
                      className="font-alt font-medium text-sm leading-tight"
                      style={{ color: '#000000' }}
                    >
                      Seg–Sex
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 rounded-full border px-3 py-2 whitespace-nowrap"
                    style={{
                      borderColor: 'rgba(0, 0, 0, 0.2)',
                      borderWidth: '1px',
                    }}
                  >
                    <img
                      src="/img/icone-relogio.png"
                      alt=""
                      className="flex-shrink-0 w-[16px] h-[16px] object-contain"
                      aria-hidden="true"
                    />
                    <span 
                      className="font-alt font-medium text-sm leading-tight"
                      style={{ color: '#000000' }}
                    >
                      08h–18h
                    </span>
                  </div>
                </div>

                {/* Segunda linha: Sáb + 08h–12h */}
                <div className="flex flex-wrap gap-2">
                  <div
                    className="flex items-center gap-2 rounded-full border px-3 py-2 whitespace-nowrap"
                    style={{
                      borderColor: 'rgba(0, 0, 0, 0.2)',
                      borderWidth: '1px',
                    }}
                  >
                    <img
                      src="/img/icone-calendario-espaco.png"
                      alt=""
                      className="flex-shrink-0 w-[16px] h-[16px] object-contain"
                      aria-hidden="true"
                    />
                    <span 
                      className="font-alt font-medium text-sm leading-tight"
                      style={{ color: '#000000' }}
                    >
                      Sáb
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 rounded-full border px-3 py-2 whitespace-nowrap"
                    style={{
                      borderColor: 'rgba(0, 0, 0, 0.2)',
                      borderWidth: '1px',
                    }}
                  >
                    <img
                      src="/img/icone-relogio.png"
                      alt=""
                      className="flex-shrink-0 w-[16px] h-[16px] object-contain"
                      aria-hidden="true"
                    />
                    <span 
                      className="font-alt font-medium text-sm leading-tight"
                      style={{ color: '#000000' }}
                    >
                      08h–12h
                    </span>
                  </div>
                </div>
              </div>

              {/* Botão "Abrir no Maps" */}
              <div className="flex justify-center lg:justify-start mt-6 lg:mt-6 mb-6 lg:mb-0">
                <button
                  onClick={handleOpenMaps}
                  className="w-full lg:w-full max-w-[340px] lg:max-w-none rounded-full py-3 px-6 bg-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E59D0D] focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:bg-foreground/5 active:bg-foreground/10"
                  style={{
                    border: '2px solid #000000',
                  }}
                >
                  <span className="font-alt font-semibold text-[18px] leading-[100%] text-center">
                    Abrir no Maps
                  </span>
                </button>
              </div>

              {/* Preview do Mapa */}
              <div className="rounded-3xl overflow-hidden shadow-sm w-full mt-8 lg:mt-8" style={{ height: '260px' }}>
                <iframe
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do espaço"
                />
              </div>
            </div>

            {/* COLUNA DIREITA: Grid de Fotos 2x2 */}
            <div className="order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="grid grid-cols-2 gap-4">
                {spaceImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden bg-neutral-200"
                    style={getBorderRadius(index)}
                  >
                    <img
                      src={image}
                      alt={`Espaço ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
