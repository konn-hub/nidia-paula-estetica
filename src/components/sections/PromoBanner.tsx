import { useInViewAnimation } from '../../lib/useInViewAnimation'

export function PromoBanner() {
  const { ref, isVisible } = useInViewAnimation()
  const handleSchedule = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=5561985464083&text=Olá%20*Nídia%20Paula*%20desejo%20agendar%20meu%20procedimento!',
      '_blank'
    )
  }

  return (
    <section
      ref={ref}
      className={`w-full bg-white py-8 md:py-12 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="mx-auto px-6 md:px-0">
        {/* Card principal */}
        <div 
          className="p-6 md:p-10 transition-all duration-200 hover:shadow-lg mx-auto w-full max-w-[382px] h-auto min-h-[188px] md:max-w-[1242px] md:h-[367px]"
          style={{ 
            background: 'linear-gradient(to right, #E59D0D, #E28400)',
            borderRadius: '39px'
          }}
        >
          {/* Conteúdo alinhado à esquerda */}
          <div className="flex flex-col h-full justify-center">
            {/* Linha 1: LAZER DAY */}
            <h2 
              className="text-white font-sans font-bold leading-none whitespace-nowrap text-[40px] md:text-[96px] mb-2 md:mb-4"
            >
              LAZER DAY
            </h2>

            {/* Linha 2: Clientes do site tem 5% OFF */}
            <p 
              className="text-white font-sans font-light leading-none whitespace-nowrap text-[20px] md:text-[48px] mb-6 md:mb-8"
            >
              Clientes do site tem{' '}
              <span 
                className="font-bold text-[20px] md:text-[48px]" 
                style={{ color: '#553800' }}
              >
                5% OFF
              </span>
            </p>

            {/* Botão CTA - Pill branco */}
            <button
              onClick={handleSchedule}
              className="group relative w-full max-w-[280px] md:max-w-md h-14 bg-white rounded-full flex items-center pl-5 md:pl-6 pr-14 md:pr-20 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E59D0D]"
              aria-label="Agendar agora com promoção"
            >
              {/* Texto alinhado à esquerda */}
              <span 
                className="font-alt font-extrabold leading-none whitespace-nowrap text-[14px] md:text-[24px]"
                style={{ color: '#E59D0D' }}
              >
                Agendar agora
              </span>

              {/* Círculo end cap com seta à direita */}
              <div 
                className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full border-[3px] border-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-[calc(50%+2px)]"
                style={{ backgroundColor: '#E59D0D' }}
              >
                <svg
                  className="w-4 h-4 md:w-4 md:h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4M12 4H6M12 4V10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
