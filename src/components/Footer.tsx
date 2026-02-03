export function Footer() {
  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=5561985464083&text=Olá%20*Nídia%20Paula*%20desejo%20agendar%20meu%20procedimento!', '_blank')
  }

  const handleInstagram = () => {
    window.open('https://www.instagram.com/nidiapaula.estetica/', '_blank')
  }

  return (
    <footer className="bg-[#1f1f1f] py-7 md:py-16">
      <div className="container mx-auto px-7 md:px-8 max-w-[1280px]">
        {/* Layout em 3 colunas (Desktop) / Coluna única (Mobile) */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12">
          {/* COLUNA ESQUERDA: Título + Descrição + Ícones */}
          <div className="mb-6 lg:mb-0">
            <h2 className="font-alt font-semibold text-white text-[24px] lg:text-[32px] mb-3 md:mb-4">
              Nidia Paula Estética
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              Estética com atendimento personalizado<br />
              e foco em resultados reais.
            </p>
            
            {/* Ícones Sociais - Logo após a descrição */}
            <div className="flex items-center gap-[18px] md:gap-6">
              <button
                onClick={handleWhatsApp}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f1f]"
                aria-label="WhatsApp"
              >
                <img
                  src="/img/icone-wpp-footer.png"
                  alt="WhatsApp"
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </button>
              <button
                onClick={handleInstagram}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f1f]"
                aria-label="Instagram"
              >
                <img
                  src="/img/icone-insta-footer.png"
                  alt="Instagram"
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </button>
            </div>
          </div>

          {/* COLUNA DO MEIO: Local + Horário */}
          <div className="mb-6 lg:mb-0">
            {/* Local */}
            <div className="mb-4 md:mb-6">
              <p className="font-alt font-semibold text-white text-sm md:text-base mb-1">
                Local
              </p>
              <p className="text-white/80 text-sm md:text-base">
                Setor Central, Lotes 24/25 — Gama/DF<br />
                Órion Mall — Loja 31 térreo — Lado Leste
              </p>
            </div>

            {/* Horário */}
            <div>
              <p className="font-alt font-semibold text-white text-sm md:text-base mb-1">
                Horário
              </p>
              <p className="text-white/80 text-sm md:text-base">
                seg a sex 08 as 18 horas<br />
                sab 08 as 12 horas
              </p>
            </div>
          </div>

          {/* COLUNA DIREITA: Vazia no desktop (mantém grid de 3 colunas) */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Frase Final Dourada (embaixo, alinhada à esquerda) */}
        <p className="text-[#D4AF37] text-sm md:text-base mt-7 md:mt-12">
          Atendimento com horário marcado
        </p>
      </div>
    </footer>
  )
}
