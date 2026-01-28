import { useInViewAnimation } from '../../lib/useInViewAnimation'

export function Hero() {
  const { ref, isVisible } = useInViewAnimation()

  return (
    <section
      id="hero"
      ref={ref}
      className={`bg-[#FFEED7] pt-4 md:pt-14 lg:pt-20 pb-10 md:pb-16 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="max-w-md mx-auto lg:max-w-7xl">
          {/* Container Principal - Mobile: vertical, Desktop: 2 colunas */}
          <div className="flex flex-col lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-14 xl:gap-16">
            
            {/* COLUNA ESQUERDA - Textos, Botão e Prova Social */}
            <div className="order-2 lg:order-1 lg:max-w-[640px]">
              {/* Título Principal */}
              <h1 className="text-center lg:text-left font-alt font-semibold text-[18px] md:text-3xl lg:text-[48px] leading-snug lg:leading-[1.1] lg:tracking-tight mb-3 lg:mb-5 text-balance">
                {/* Versão Mobile */}
                <span className="lg:hidden">
                  Estética <span className="text-[#E59D0D] font-semibold">facial e corporal</span> no Gama
                  <br />
                  cuidado de verdade, resultado e autoestima
                </span>
                <span className="hidden lg:inline">
                  Estética{' '}
                  <span className="text-[#E59D0D] font-semibold">facial e corporal</span>
                  {' '}no Gama - Cuidado de verdade,
                  <br />
                  <span className="text-[#E59D0D] font-semibold">resultado e autoestima</span>
                </span>
              </h1>

              {/* Texto Secundário */}
              <p className="text-center lg:text-left font-alt text-[11px] md:text-base lg:text-[16px] lg:max-w-[560px] lg:mx-0 mx-auto text-foreground/80 leading-snug md:leading-relaxed mb-4 lg:mb-6">
                {/* Versão Mobile */}
                <span className="lg:hidden">
                  Atendimento com horário marcado. Me chama no WhatsApp
                  <br />
                  e eu te indico o melhor procedimento pra sua pele/corpo
                </span>
                <span className="hidden lg:inline">
                  Atendimento com horário marcado. Me chama no WhatsApp
                  <br />
                  e eu te indico o melhor procedimento pra sua pele/corpo
                </span>
              </p>

              {/* Botão CTA */}
              <div className="flex justify-center lg:justify-start mb-4 lg:mb-6">
                <a
                  href="https://api.whatsapp.com/send?phone=5561985464083&text=Olá%20*Nídia%20Paula*%20desejo%20agendar%20meu%20procedimento!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[90%] lg:w-auto lg:max-w-[360px] lg:px-8 lg:py-3 lg:text-lg rounded-full py-4 px-6 text-white font-alt font-semibold text-base md:text-lg text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E59D0D] focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:opacity-90 active:opacity-80"
                  style={{ backgroundColor: '#E59D0D' }}
                >
                  Agendar agora
                </a>
              </div>

              {/* Prova Social */}
              <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-3">
                {/* Coluna Esquerda: 10+ anos */}
                <div className="flex flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <span className="text-[#E59D0D] font-alt font-extrabold text-[28px] md:text-4xl lg:text-4xl leading-none">
                      10
                    </span>
                    <span className="text-[#E59D0D] font-alt font-extrabold text-xs md:text-sm lg:text-sm -mt-1">
                      anos
                    </span>
                  </div>
                  <span className="text-[#E59D0D] font-alt font-extrabold text-[28px] md:text-4xl lg:text-4xl leading-none self-start">
                    +
                  </span>
                </div>

                {/* Coluna Direita: Texto */}
                <div className="flex-shrink-0 lg:max-w-[340px]">
                  <p className="font-alt font-medium text-sm md:text-base lg:text-base leading-relaxed text-center" style={{ color: '#553800' }}>
                    Transformando vidas e
                    <br />
                    realançando sua beleza
                  </p>
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA - Imagem */}
            <div className="order-1 lg:order-2 flex justify-center items-center mb-8 lg:mb-0" style={{ minHeight: '420px', maxHeight: '680px' }}>
              <img
                src="/img/img-hero.png"
                alt="Profissional de estética sorrindo"
                className="h-full w-auto object-contain"
                style={{ maxHeight: '680px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
