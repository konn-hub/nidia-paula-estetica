import { useInViewAnimation } from '../../lib/useInViewAnimation'

export function WhoAttends() {
  const { ref, isVisible } = useInViewAnimation()
  return (
    <section
      id="quem-te-atende"
      ref={ref}
      className={`bg-[#FFEED7] py-12 md:py-20 lg:py-24 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-6xl">
        {/* Título - Centralizado no topo */}
        <h2 className="font-alt font-semibold text-[24px] lg:text-[32px] text-center text-foreground mb-4 lg:mb-12 leading-none">
          Quem te atende
        </h2>

        {/* Mobile: Layout vertical centralizado */}
        <div className="flex flex-col items-center lg:hidden">
          {/* Card da Foto - Mobile */}
          <div className="w-full max-w-[392px] rounded-[32px] overflow-hidden mb-4 bg-[#FFEED7] p-6 flex items-center justify-center">
            <img
              src="/img/nidia-quem-te-atende.png"
              alt="Nidia Paula - Especialista em Estética"
              className="w-full h-auto object-contain object-center"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const placeholder = target.nextElementSibling as HTMLElement
                if (placeholder) {
                  placeholder.style.display = 'flex'
                }
              }}
            />
            <div className="w-full h-auto bg-gray-200 flex items-center justify-center text-gray-500 font-alt text-lg" style={{ display: 'none' }}>
              Imagem
            </div>
          </div>

          {/* Nome - Mobile */}
          <h3 className="font-alt font-semibold text-[24px] text-center mb-4 leading-none" style={{ color: '#553800' }}>
            Nidia Paula
          </h3>

          {/* Texto Descritivo - 3 Parágrafos - Mobile */}
          <div className="flex flex-col max-w-[360px] w-full space-y-3">
            <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
              À frente da{" "}
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                Nídia Paula Estética
              </span>{" "}
              desde{" "}
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                2013
              </span>
              , Nídia une{" "}
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                técnica, experiência e sensibilidade
              </span>{" "}
              para cuidar da pele com um olhar que vai além do procedimento. Aqui, cada atendimento é conduzido com{" "}
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                calma, respeito e atenção real aos detalhes
              </span>
              .
            </p>

            <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
              O diferencial está no que não se improvisa:{" "}
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                cuidado consistente, protocolo bem executado
              </span>{" "}
              e uma{" "}
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                experiência de estética humanizada
              </span>
              , onde resultados e bem-estar caminham juntos. Mais do que transformar a pele, Nídia entrega{" "}
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                acolhimento, presença e a sensação de estar em um lugar seguro
              </span>
              .
            </p>

            <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
              Muitas clientes não vêm apenas para “fazer algo no rosto ou no corpo”. Elas vêm para{" "}
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                pausar, respirar, se sentir cuidadas, ser ouvidas e sair mais leves
              </span>{" "}
              — com a pele renovada e a mente mais tranquila.
            </p>

            <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
              Os atendimentos são pensados para quem valoriza um{" "}
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                autocuidado completo
              </span>
              , em um ambiente{" "}
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                discreto e confortável
              </span>
              , onde você se sente à vontade do início ao fim.
            </p>

            <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                Agende seu horário
              </span>{" "}
              e viva uma{" "}
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                experiência de cuidado com propósito
              </span>
              .
            </p>
          </div>
        </div>

        {/* Desktop: Grid 2 colunas - Texto à esquerda, Foto à direita */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center">
          {/* COLUNA ESQUERDA - Texto (Nome + Parágrafos) */}
          <div className="flex flex-col lg:max-w-[520px]">
            {/* Nome */}
            <h3 className="font-alt font-semibold text-[24px] lg:text-[26px] text-center mb-5 leading-none" style={{ color: '#553800' }}>
              Nidia Paula
            </h3>

            {/* Texto Descritivo - 3 Parágrafos */}
            <div className="flex flex-col space-y-3">
              <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
                À frente da{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                  Nídia Paula Estética
                </span>{" "}
                desde{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                  2013
                </span>
                , Nídia une{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                  técnica, experiência e sensibilidade
                </span>{" "}
                para cuidar da pele com um olhar que vai além do procedimento. Aqui, cada atendimento é conduzido com{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                  calma, respeito e atenção real aos detalhes
                </span>
                .
              </p>

              <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
                O diferencial está no que não se improvisa:{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                  cuidado consistente, protocolo bem executado
                </span>{" "}
                e uma{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                  experiência de estética humanizada
                </span>
                , onde resultados e bem-estar caminham juntos. Mais do que transformar a pele, Nídia entrega{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                  acolhimento, presença e a sensação de estar em um lugar seguro
                </span>
                .
              </p>

              <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
                Muitas clientes não vêm apenas para “fazer algo no rosto ou no corpo”. Elas vêm para{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                  pausar, respirar, se sentir cuidadas, ser ouvidas e sair mais leves
                </span>{" "}
                — com a pele renovada e a mente mais tranquila.
              </p>

              <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
                Os atendimentos são pensados para quem valoriza um{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                  autocuidado completo
                </span>
                , em um ambiente{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                  discreto e confortável
                </span>
                , onde você se sente à vontade do início ao fim.
              </p>

              <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                  Agende seu horário
                </span>{" "}
                e viva uma{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: "#553800" }}>
                  experiência de cuidado com propósito
                </span>
                .
              </p>
            </div>

            {/* Botão CTA - igual à área Pós operatório */}
            <div className="flex justify-center mt-10 md:mt-12 lg:mt-14">
              <a
                href="https://api.whatsapp.com/send?phone=5561985464083&text=Olá%20*Nídia%20Paula*%20desejo%20agendar%20meu%20procedimento!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[90%] lg:w-auto lg:max-w-[360px] lg:px-8 lg:py-3 lg:text-lg rounded-full py-4 px-6 text-white font-alt font-semibold text-base md:text-lg text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E59D0D] focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:opacity-90 active:opacity-80"
                style={{ backgroundColor: '#E59D0D' }}
              >
                Quero agendar agora
              </a>
            </div>

          </div>

          {/* COLUNA DIREITA - Foto */}
          <div className="flex justify-center">
            <div className="w-[392px] rounded-[32px] overflow-hidden bg-[#FFEED7] p-6 flex items-center justify-center">
              <img
                src="/img/nidia-quem-te-atende.png"
                alt="Nidia Paula - Especialista em Estética"
                className="w-full h-auto object-contain object-center"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) {
                    placeholder.style.display = 'flex'
                  }
                }}
              />
              <div className="w-full h-auto bg-gray-200 flex items-center justify-center text-gray-500 font-alt text-lg" style={{ display: 'none' }}>
                Imagem
              </div>
            </div>
          </div>
        </div>

        {/* Botão CTA - igual à área Pós operatório */}
        <div className="flex justify-center mt-10 md:mt-12 lg:mt-14 lg:hidden">
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
      </div>
    </section>
  )
}

export default WhoAttends
