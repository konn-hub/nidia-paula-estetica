import { useState } from 'react'
interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Como eu sei qual procedimento é o ideal pra mim?',
    answer: 'A gente faz uma avaliação rápida e te orienta pelo seu objetivo e pela sua pele/corpo. Sem empurrar procedimento — é indicação do que faz sentido pra você.',
  },
  {
    question: 'Dói?',
    answer: 'Depende do procedimento. A maioria é bem tranquila e, quando pode incomodar, a gente ajusta intensidade e usa técnicas pra deixar confortável.',
  },
  {
    question: 'Em quantas sessões eu vejo resultado?',
    answer: 'Alguns resultados aparecem já na primeira sessão, mas o melhor costuma vir com constância. Na avaliação a gente te passa uma estimativa realista.',
  },
  {
    question: 'Os procedimentos são seguros?',
    answer: 'Sim. Trabalhamos com higiene, materiais adequados e protocolos corretos. E se algo não for indicado pra você, a gente não faz.',
  },
  {
    question: 'Tem tempo de recuperação? Vou ficar roxa(o)?',
    answer: 'Na maioria dos casos você segue sua rotina normal. Alguns procedimentos podem causar vermelhidão leve ou sensibilidade — tudo é explicado antes.',
  },
  {
    question: 'Posso fazer pós-operatório mesmo sem ter feito cirurgia com vocês?',
    answer: 'Pode sim. Você chega com sua orientação médica e a gente encaixa o protocolo ideal pro seu momento.',
  },
  {
    question: 'Tenho medo de ficar com resultado artificial.',
    answer: 'Nosso foco é resultado natural e harmônico. A ideia é realçar sua beleza, não "mudar seu rosto".',
  },
  {
    question: 'Tem contraindicação?',
    answer: 'Algumas condições exigem cuidado (gestação, inflamações, uso de certos medicamentos, etc.). Por isso a avaliação é importante antes.',
  },
  {
    question: 'Homens podem fazer?',
    answer: 'Sim! Temos atendimentos para homens e mulheres, com protocolos e cuidados ajustados pra cada caso.',
  },
  {
    question: 'Quanto custa e como funciona o pagamento?',
    answer: 'O valor depende do procedimento e do seu objetivo. A gente te passa tudo com clareza na avaliação e você decide sem pressão.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleWhatsApp = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=5561985464083&text=Olá%20*Nídia%20Paula*%20desejo%20agendar%20meu%20procedimento!',
      '_blank'
    )
  }

  return (
    <section
      id="duvidas"
      className="bg-white py-10 md:py-16 lg:py-20"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Container centralizado com max-width menor */}
        <div className="max-w-[520px] lg:max-w-[620px] mx-auto">
          {/* Título */}
          <h2 
            className="font-alt text-center mb-3 lg:mb-4 text-[24px] lg:text-[32px]"
            style={{
              fontFamily: 'Montserrat Alternates',
              fontWeight: 600,
              lineHeight: '100%',
              color: '#000000',
            }}
          >
            Dúvidas frequentes
          </h2>

          {/* Subtítulo */}
          <p 
            className="font-alt font-normal text-[14px] lg:text-[15px] text-center mb-8 lg:mb-12"
            style={{ opacity: 0.7, lineHeight: '1.5' }}
          >
            Respostas rápidas sobre procedimentos e atendimento. Se preferir, chame no WhatsApp.
          </p>

          {/* Accordion - Lista Clean */}
          <div className="mb-8 lg:mb-12">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index
              const isLast = index === faqItems.length - 1

              return (
                <div key={index}>
                  {/* Item do Accordion */}
                  <div>
                    {/* Header da Pergunta */}
                    <button
                      onClick={() => handleToggle(index)}
                      className="w-full flex items-center justify-between py-[18px] lg:py-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      {/* Pergunta */}
                      <span 
                        className="font-alt pr-4 flex-1 text-left"
                        style={{
                          fontFamily: 'Montserrat Alternates',
                          fontWeight: 600,
                          fontSize: '16px',
                          lineHeight: '100%',
                          color: '#000000',
                        }}
                      >
                        {item.question}
                      </span>

                      {/* Ícone Chevron */}
                      <svg
                        className={`flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 text-foreground ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Resposta */}
                    <div
                      id={`faq-answer-${index}`}
                      className={`grid ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-[18px] lg:pb-5 pt-0">
                          <p 
                            className="font-alt font-normal text-[14px] lg:text-[15px] leading-relaxed"
                            style={{ opacity: 0.75 }}
                          >
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider - Linha divisória sutil (exceto no último item) */}
                  {!isLast && (
                    <div 
                      className="border-b"
                      style={{ borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: '1px' }}
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* Caixa "Ainda com dúvida?" */}
          <div className="bg-[#F5E6D3] rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-center">
            <h3 className="font-alt font-semibold text-[18px] lg:text-[20px] text-foreground mb-2 lg:mb-3 leading-none">
              Ainda com dúvida?
            </h3>
            <p className="font-alt font-normal text-[15px] lg:text-[16px] text-foreground mb-6 lg:mb-8 leading-relaxed">
              Chame no WhatsApp e teremos prazer em lhe atender da melhor forma
            </p>
            <button
              onClick={handleWhatsApp}
              className="w-full max-w-[280px] lg:max-w-[320px] mx-auto rounded-full py-3 lg:py-4 px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E59D0D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5E6D3]"
              style={{
                backgroundColor: '#E59D0D',
                color: '#FFFFFF',
              }}
            >
              <span className="font-alt font-semibold text-[16px] lg:text-[18px] leading-none">
                Falar no Whatsapp
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
