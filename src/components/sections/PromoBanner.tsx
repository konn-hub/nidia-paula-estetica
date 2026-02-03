/** Ícone de check nítido (igual ao primeiro print) — cor #553800, traço médio */
function CheckIcon() {
  return (
    <span className="inline-flex flex-shrink-0 w-5 h-5 items-center justify-center" aria-hidden>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 10.5L8 15.5L17 4.5"
          stroke="#553800"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

const promoBannerStyles = {
  topRect: {
    backgroundColor: '#553800',
    width: 382,
    height: 328,
    borderRadius: 22,
    fontFamily: "'Montserrat Alternates', sans-serif",
    fontWeight: 500,
    fontSize: 32,
    lineHeight: '100%',
    letterSpacing: '0%',
  },
  bottomRect: {
    backgroundColor: '#E59D0D',
    width: 382,
    height: 445,
    borderRadius: 22,
    fontFamily: "'Montserrat Alternates', sans-serif",
    fontWeight: 600,
    fontSize: 25,
    lineHeight: '100%',
    letterSpacing: '0%',
  },
}

export function PromoBanner() {
  const handleSchedule = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=5561985464083&text=Olá%20*Nídia%20Paula*%20desejo%20agendar%20meu%20procedimento!',
      '_blank'
    )
  }

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="flex flex-col items-center gap-4 md:gap-6 px-[29px] md:px-8">
        {/* Mobile: empilhados. Desktop: lado a lado juntos, border-radius 22px nos 4 cantos do bloco */}
        <div className="flex flex-col md:flex-row w-full max-w-[382px] md:max-w-[788px] gap-0 shrink-0 opacity-100 md:items-stretch">
          {/* Quadrado esquerdo (marrom) — desktop: só cantos esquerdos arredondados */}
          <div
            className="flex flex-col justify-between w-full md:max-w-[382px] md:flex-1 overflow-hidden shrink-0 rounded-[22px] md:rounded-r-none md:rounded-l-[22px]"
            style={{
              backgroundColor: promoBannerStyles.topRect.backgroundColor,
              minHeight: promoBannerStyles.topRect.height,
              fontFamily: promoBannerStyles.topRect.fontFamily,
              fontWeight: promoBannerStyles.topRect.fontWeight,
              lineHeight: promoBannerStyles.topRect.lineHeight,
              letterSpacing: promoBannerStyles.topRect.letterSpacing,
            }}
          >
          {/* Espaçamento: mobile padrão; desktop mais generoso */}
          <div className="flex flex-col justify-between flex-1 box-border pt-6 pr-6 pb-8 pl-6 md:pt-8 md:pr-8 md:pb-10 md:pl-8">
            <div>
              {/* Tag LASER DAY — maior no desktop */}
              <span
                className="inline-flex items-center justify-center mb-6 md:mb-8 uppercase shrink-0 w-[146px] h-10 md:w-[200px] md:h-[52px] text-xl md:text-2xl rounded-lg"
                style={{
                  backgroundColor: '#FFEED7',
                  borderRadius: 9,
                  opacity: 1,
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#553800',
                }}
              >
                LASER DAY
              </span>
              {/* Título: "Um dia especial para seu laser" — 36px, #E59D0D */}
              <p
                className="max-w-full text-left mb-4 md:mb-6"
                style={{
                  fontFamily: "'Montserrat Alternates', sans-serif",
                  fontWeight: 500,
                  fontSize: 36,
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#E59D0D',
                }}
              >
                Um dia especial
                <br />
                para seu laser
              </p>
              {/* Corpo: 15px, #FFFFFF */}
              <p
                className="max-w-full text-left mb-4 md:mb-5"
                style={{
                  fontFamily: "'Montserrat Alternates', sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#FFFFFF',
                }}
              >
                Todo mês abrimos uma data exclusiva para depilação a laser
              </p>
              {/* Oferta: "5% OFF" #E59D0D, "para clientes do site" #FFFFFF — 15px */}
              <p
                className="max-w-full text-left"
                style={{
                  fontFamily: "'Montserrat Alternates', sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                <span style={{ color: '#E59D0D' }}>5% OFF</span>{' '}
                <span style={{ color: '#FFFFFF' }}>para clientes do site</span>
              </p>
            </div>
            {/* CTA: espaço moderado acima; desktop mais generoso */}
            <button
              onClick={handleSchedule}
              className="flex items-center justify-center gap-2 w-fit hover:opacity-90 transition-opacity mt-6 md:mt-8"
              style={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
              }}
              aria-label="Agendar agora"
            >
              <img
                src="/img/icone-calendario.png"
                alt=""
                className="w-5 h-5 object-contain flex-shrink-0 brightness-0 invert opacity-95"
              />
              <span>Agendar agora</span>
            </button>
          </div>
        </div>

          {/* Quadrado direito (laranja) — desktop: borda à esquerda (meio) + só cantos direitos arredondados */}
          <div
            className="flex flex-col w-full md:max-w-[382px] md:flex-1 overflow-hidden shrink-0 rounded-[22px] md:rounded-l-none md:rounded-r-[22px] md:border-l md:border-l-2 md:border-white/40"
            style={{
              backgroundColor: promoBannerStyles.bottomRect.backgroundColor,
              minHeight: promoBannerStyles.bottomRect.height,
            }}
          >
          {/* Área laranja: título, parágrafo, lista — espaçamento e palavras em destaque */}
          <div className="flex flex-col flex-1 p-6 pb-5">
            <h2
              className="text-left mb-5"
              style={{
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontWeight: 600,
                fontSize: 25,
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              <span style={{ color: '#FFFFFF' }}>Depilação a laser</span>
              <span style={{ color: '#553800' }}> sem pacote</span>
              <span style={{ color: '#FFFFFF' }}> e</span>
              <span style={{ color: '#553800' }}> sem susto no cartão</span>
            </h2>
            <p
              className="text-left mb-5"
              style={{
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '1.4',
                letterSpacing: '0%',
                color: '#FFFFFF',
              }}
            >
              Você paga por sessão, sem fechar pacote. Com agenda exclusiva para laser.
            </p>
            <ul className="space-y-2.5 list-none">
              <li
                className="flex items-center gap-2"
                style={{
                  fontFamily: "'Montserrat Alternates', sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  color: '#553800',
                }}
              >
                <CheckIcon />
                <span>Pague por sessão</span>
              </li>
              <li
                className="flex items-center gap-2"
                style={{
                  fontFamily: "'Montserrat Alternates', sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  color: '#553800',
                }}
              >
                <CheckIcon />
                <span>Sem pacote obrigatório</span>
              </li>
              <li
                className="flex items-center gap-2"
                style={{
                  fontFamily: "'Montserrat Alternates', sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  color: '#553800',
                }}
              >
                <CheckIcon />
                <span>Ideal para quem quer conhecer o tratamento</span>
              </li>
            </ul>
          </div>
          {/* Rodapé marrom: "Atendimentos com horário agendado" */}
          <button
            type="button"
            onClick={handleSchedule}
            className="w-full flex items-center justify-center gap-2 py-4 px-5"
            style={{
              backgroundColor: '#553800',
              fontFamily: "'Montserrat Alternates', sans-serif",
              fontWeight: 500,
              fontSize: 13,
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#FFFFFF',
            }}
            aria-label="Atendimentos com horário agendado"
          >
            <img
              src="/img/icone-calendario.png"
              alt=""
              className="w-5 h-5 object-contain brightness-0 invert flex-shrink-0"
            />
            <span>Atendimentos com horário agendado</span>
          </button>
          </div>
        </div>

        {/* Botão centralizado abaixo dos dois quadrados — só no mobile; desktop: oculto */}
        <button
          type="button"
          onClick={handleSchedule}
          className="w-full max-w-[382px] mx-auto py-4 px-6 rounded-full border-2 bg-white font-bold text-center md:hidden"
          style={{
            borderColor: '#553800',
            color: '#553800',
            fontFamily: "'Montserrat Alternates', sans-serif",
          }}
          aria-label="Agendar agora"
        >
          Agendar agora
        </button>
      </div>
    </section>
  )
}
