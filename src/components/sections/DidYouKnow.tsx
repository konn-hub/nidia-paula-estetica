import { useState, useEffect } from 'react'

/** Duas imagens pós-operatório (grid lado a lado no desktop) */
const POST_OP_IMAGES = [
  { src: '/img/pos-operatorio-1.jpg', alt: 'Pós operatório - resultado 1' },
  { src: '/img/pos-operatorio-2.jpg', alt: 'Pós operatório - resultado 2' },
]

export function DidYouKnow() {
  const [unlocked, setUnlocked] = useState(false)
  const [_isReducedMotion, setIsReducedMotion] = useState(false)
  const [mobileImageIndex, setMobileImageIndex] = useState(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('showSensitivePostOp')
    if (saved === 'true') setUnlocked(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('showSensitivePostOp', unlocked ? 'true' : 'false')
  }, [unlocked])

  const handleToggle = () => setUnlocked((prev) => !prev)

  const goPrev = () => setMobileImageIndex((i) => (i === 0 ? POST_OP_IMAGES.length - 1 : i - 1))
  const goNext = () => setMobileImageIndex((i) => (i === POST_OP_IMAGES.length - 1 ? 0 : i + 1))

  const singleCard = (item: (typeof POST_OP_IMAGES)[0]) => (
    <div className="w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-[#FFEED7] relative">
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover"
        style={{
          objectPosition: '50% 20%',
          filter: unlocked ? 'none' : 'blur(6px) saturate(0.6)',
          opacity: unlocked ? 1 : 0.85,
        }}
      />
      {!unlocked && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'rgba(248, 229, 206, 0.75)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
        />
      )}
    </div>
  )

  /* Mobile: uma foto por vez + setas para passar. Desktop/sm: grid 2 colunas. */
  const imageBlock = (
    <>
      {/* Mobile: uma foto por vez; setas só aparecem quando "Ver fotos" foi clicado (unlocked) */}
      <div className="sm:hidden w-full max-w-[320px] mx-auto">
        <div className="relative flex items-center gap-3">
          {unlocked && (
            <button
              type="button"
              onClick={goPrev}
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E59D0D]/50"
              style={{ background: 'rgba(229, 157, 13, 0.15)', color: '#E59D0D' }}
              aria-label="Foto anterior"
            >
              <img
                src="/img/icone-seta.png"
                alt=""
                width={16}
                height={16}
                className="object-contain"
                style={{ transform: 'rotate(90deg)', filter: 'brightness(0) saturate(100%) invert(67%) sepia(93%) saturate(1352%) hue-rotate(1deg) brightness(98%) contrast(89%)' }}
                aria-hidden
              />
            </button>
          )}
          <div className={unlocked ? 'flex-1 min-w-0' : 'w-full'}>{singleCard(POST_OP_IMAGES[mobileImageIndex])}</div>
          {unlocked && (
            <button
              type="button"
              onClick={goNext}
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E59D0D]/50"
              style={{ background: 'rgba(229, 157, 13, 0.15)', color: '#E59D0D' }}
              aria-label="Próxima foto"
            >
              <img
                src="/img/icone-seta.png"
                alt=""
                width={16}
                height={16}
                className="object-contain"
                style={{ transform: 'rotate(-90deg)', filter: 'brightness(0) saturate(100%) invert(67%) sepia(93%) saturate(1352%) hue-rotate(1deg) brightness(98%) contrast(89%)' }}
                aria-hidden
              />
            </button>
          )}
        </div>
        {unlocked && (
          <p className="text-center font-alt text-[12px] mt-2 text-foreground/70">
            {mobileImageIndex + 1} / {POST_OP_IMAGES.length}
          </p>
        )}
      </div>

      {/* sm e desktop: grid 2 colunas (um ao lado do outro) */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-2 w-full max-w-[480px] lg:max-w-[520px] gap-3 lg:gap-4 lg:justify-self-end mx-auto lg:mx-0">
        {POST_OP_IMAGES.map((item, index) => (
          <div key={index} className="min-w-0">{singleCard(item)}</div>
        ))}
      </div>
    </>
  )

  return (
    <section className="overflow-x-hidden bg-white py-12 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-16">
        {/* Título */}
        <h2 className="font-alt font-semibold text-[24px] lg:text-[32px] text-center text-foreground mb-4 lg:mb-6 leading-tight">
          Atendimento <span className="font-alt font-semibold" style={{ color: '#553800' }}>especializado</span>
          <br />
          <span className="font-alt font-semibold" style={{ color: '#553800' }}>Pós-Operatório Estético</span> com <span className="font-alt font-semibold" style={{ color: '#553800' }}>cuidado</span> e <span className="font-alt font-semibold" style={{ color: '#553800' }}>segurança</span>
        </h2>

        {/* Grid: texto (esq) | imagens + botão (dir) no desktop. Mobile: imagem, texto, botão. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start gap-10">
          {/* Coluna texto (desktop esquerda) */}
          <div className="lg:order-1 mt-10 md:mt-12 lg:mt-0">
            <div className="flex flex-col space-y-4 font-alt font-normal text-[16px] text-left leading-relaxed max-w-3xl lg:max-w-none mx-auto lg:mx-0">
              <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
                O <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>pós-operatório estético</span> exige atenção e cuidados específicos para uma recuperação mais <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>confortável</span> e <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>segura</span>. O atendimento é realizado de forma <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>personalizada</span>, respeitando o tempo do seu corpo e a fase de <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>cicatrização</span>.
              </p>

              <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
                A <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>massagem pós-operatória</span> e a <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>drenagem pós-operatória</span> auxiliam na redução de <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>inchaço</span>, melhora da <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>circulação</span> e prevenção de <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>fibroses</span>, contribuindo para uma evolução mais organizada dos <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>resultados</span>.
              </p>

              <p className="font-alt font-semibold text-[16px] text-left leading-relaxed" style={{ color: '#553800' }}>
                <span className="font-alt font-semibold" style={{ color: '#553800' }}>Benefícios</span> do cuidado <span className="font-alt font-semibold" style={{ color: '#553800' }}>pós-operatório</span>
              </p>
              <ul className="list-disc pl-5 space-y-2 font-alt font-normal text-[16px] text-left leading-relaxed">
                <li><span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>Redução</span> de <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>inchaço</span> e <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>retenção de líquidos</span></li>
                <li><span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>Estímulo</span> da <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>circulação sanguínea</span> e <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>linfática</span></li>
                <li><span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>Auxílio</span> na <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>prevenção de fibroses</span></li>
                <li><span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>Alívio</span> do <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>desconforto</span> e sensação de <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>peso</span></li>
              </ul>

              <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
                O atendimento pode ser iniciado mesmo que a cirurgia tenha sido realizada em outro local, sempre com <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>liberação médica</span>.
              </p>
              <p className="font-alt font-normal text-[16px] text-left leading-relaxed">
                👉 <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>Agende seu atendimento</span> e receba uma <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>orientação segura</span> para o seu <span className="font-alt font-semibold text-[16px] leading-none" style={{ color: '#553800' }}>pós-operatório</span>.
              </p>
            </div>

            {/* Botão no mobile: abaixo do texto */}
            <div className="flex justify-center lg:hidden mt-6 lg:mt-0">
              <a
                href="https://api.whatsapp.com/send?phone=5561985464083&text=Olá%20*Nídia%20Paula*%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20pós-operatório!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[90%] lg:w-auto lg:max-w-[360px] lg:px-8 lg:py-3 lg:text-lg rounded-full py-4 px-6 text-white font-alt font-semibold text-base md:text-lg text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E59D0D] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                style={{ backgroundColor: '#E59D0D' }}
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          {/* Coluna imagem + botão (desktop direita): imagens, Ver fotos, botão centralizado abaixo */}
          <div className="lg:order-2 lg:justify-self-end flex flex-col items-center lg:items-end">
            {imageBlock}

            {/* "Ver fotos (conteúdo sensível)" - centralizado em relação às duas fotos */}
            <div className="w-full flex justify-center mt-4 md:mt-5 lg:mt-6">
              <span
                role="button"
                tabIndex={0}
                onClick={handleToggle}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleToggle()
                  }
                }}
                className="flex flex-col items-center gap-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E59D0D]/50 rounded"
                aria-label={unlocked ? 'Esconder fotos' : 'Ver fotos (conteúdo sensível)'}
              >
                <span
                  className="font-alt text-center leading-tight text-[13px] sm:text-[14px] font-semibold"
                  style={{ color: '#E59D0D' }}
                >
                  {unlocked ? 'Esconder fotos' : 'Ver fotos'} (conteúdo sensível)
                </span>
                <img
                  src="/img/icone-seta.png"
                  alt=""
                  width={12}
                  height={12}
                  className="object-contain"
                  style={{
                    transform: unlocked ? 'rotate(180deg)' : 'rotate(0deg)',
                    filter:
                      'brightness(0) saturate(100%) invert(67%) sepia(93%) saturate(1352%) hue-rotate(1deg) brightness(98%) contrast(89%)',
                  }}
                  aria-hidden
                />
              </span>
            </div>

            {/* Botão no desktop: centralizado abaixo das imagens */}
            <div className="hidden lg:flex justify-center w-full mt-6">
              <a
                href="https://api.whatsapp.com/send?phone=5561985464083&text=Olá%20*Nídia%20Paula*%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20pós-operatório!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[360px] lg:px-8 lg:py-3 lg:text-lg rounded-full py-4 px-6 text-white font-alt font-semibold text-base md:text-lg text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E59D0D] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                style={{ backgroundColor: '#E59D0D' }}
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DidYouKnow
