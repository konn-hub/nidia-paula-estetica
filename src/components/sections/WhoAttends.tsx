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
        <h2 className="font-alt font-semibold text-[24px] lg:text-[32px] text-center text-foreground mb-4 lg:mb-6 leading-none">
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
            {/* Parágrafo 1 */}
            <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
              Formada em Estética e atua desde <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>2013</span> à frente da{" "}
              <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>Nídia Paula Estética</span>. Especialista em <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>limpeza de pele</span>, ela atende com um olhar que vai muito além do procedimento: aqui, cada pessoa é recebida com calma, <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>respeito e atenção</span> de verdade.
            </p>

            {/* Parágrafo 2 */}
            <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
              O diferencial do atendimento é o <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>cuidado real</span> e a <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>estética humanizada</span>.
              A Nídia não entrega apenas resultados na pele — ela entrega <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>acolhimento, presença e segurança emocional</span>. Muitas clientes não procuram só "fazer algo no rosto ou no corpo", mas também <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>descansar, se sentir cuidadas, ser ouvidas e sair mais leves</span>.
            </p>

            {/* Parágrafo 3 */}
            <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
              Os atendimentos são pensados para quem valoriza um momento de <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>autocuidado</span> completo, com um ambiente onde você se <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>sente à vontade</span> do início ao fim.
            </p>
          </div>
        </div>

        {/* Desktop: Grid 2 colunas - Texto à esquerda, Foto à direita */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center">
          {/* COLUNA ESQUERDA - Texto (Nome + Parágrafos) */}
          <div className="flex flex-col lg:max-w-[520px]">
            {/* Nome */}
            <h3 className="font-alt font-semibold text-[24px] lg:text-[26px] text-center mb-3 leading-none" style={{ color: '#553800' }}>
              Nidia Paula
            </h3>

            {/* Texto Descritivo - 3 Parágrafos */}
            <div className="flex flex-col space-y-3">
              {/* Parágrafo 1 */}
              <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
                Formada em Estética e atuando desde <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>2013</span> à frente da{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>Nídia Paula Estética</span>, ela combina técnica e cuidado em cada atendimento.
                Especialista em <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>limpeza de pele</span>, conduz cada sessão com um olhar que vai além
                do procedimento — aqui, você encontra <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>calma</span>, <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>respeito</span> e{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>atenção de verdade</span>.
              </p>

              {/* Parágrafo 2 */}
              <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
                O diferencial está no <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>cuidado real</span> e na <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>estética humanizada</span>.
                A Nídia não entrega apenas resultados na pele — ela entrega <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>acolhimento</span>,{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>presença</span> e <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>segurança emocional</span>. Muitas clientes não vêm só para
                "fazer algo no rosto ou no corpo", mas para <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>descansar</span>,{" "}
                <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>se sentir cuidadas</span>, <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>ser ouvidas</span> e <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>sair mais leves</span>.
              </p>

              {/* Parágrafo 3 */}
              <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
                Cada atendimento é pensado como um momento completo de <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>autocuidado</span>, em um
                ambiente onde você se sente <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>à vontade</span> do início ao fim — com orientação,
                conforto e um plano alinhado ao que <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>você realmente precisa</span>.
              </p>
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
      </div>
    </section>
  )
}

export default WhoAttends
