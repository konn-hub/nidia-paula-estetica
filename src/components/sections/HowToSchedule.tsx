import { useInViewAnimation } from '../../lib/useInViewAnimation'

const steps = [
  {
    icon: '/img/icone-whatsapp.png',
    text: 'Você chama no\nWhatsApp',
  },
  {
    icon: '/img/icone-triagem.png',
    text: 'Avaliação/\ntriagem rápida',
  },
  {
    icon: '/img/icone-calendario.png',
    text: 'Sessão marcada\ne orientações',
  },
]

export function HowToSchedule() {
  const { ref, isVisible } = useInViewAnimation()

  const handleSchedule = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=5561985464083&text=Olá%20*Nídia%20Paula*%20desejo%20agendar%20meu%20procedimento!',
      '_blank'
    )
  }

  return (
    <section
      id="agendar"
      ref={ref}
      className={`bg-white py-16 md:py-20 lg:py-24 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-[360px] lg:max-w-6xl mx-auto">
          {/* Título */}
          <h2 
            className="text-center font-alt font-semibold text-[24px] lg:text-[32px] leading-[100%] mb-8 md:mb-10 lg:mb-16"
            style={{ color: '#000000' }}
          >
            Como agendar
          </h2>

          {/* Passos */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 items-center lg:justify-items-center space-y-12 md:space-y-14 lg:space-y-0 lg:gap-x-32">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Círculo com ícone */}
                <div
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#F5E6D3' }}
                >
                  <img
                    src={step.icon}
                    alt=""
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                    aria-hidden="true"
                  />
                </div>
                
                {/* Texto */}
                <p
                  className="text-center font-alt font-normal text-[20px] leading-[100%] mt-4 whitespace-pre-line"
                  style={{ color: '#000000' }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Botão CTA */}
          <div className="flex justify-center mt-12 md:mt-14 lg:mt-16">
            <button
              onClick={handleSchedule}
              className="w-full max-w-[320px] lg:w-[280px] lg:max-w-none h-12 md:h-14 rounded-full border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#553800] focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:bg-[#553800]/10 active:bg-[#553800]/20"
              style={{
                borderColor: '#553800',
              }}
            >
              <span 
                className="font-alt font-semibold text-[18px] leading-[100%] text-center"
                style={{ color: '#553800' }}
              >
                Agendar agora
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
