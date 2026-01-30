import { useState, useRef, useEffect } from 'react'
import { useInViewAnimation } from '../../lib/useInViewAnimation'

interface BeforeAfterItem {
  id: string
  name: string
  before: string
  after: string
}

const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: '1',
    name: 'Limpeza de pele',
    before: '/img/limpezaa-pele-antes.jpg',
    after: '/img/limpeza-pele-depois.jpeg',
  },
  {
    id: '2',
    name: 'Mesoterapia capilar',
    before: '/img/mesoterapia-antes.jpeg',
    after: '/img/mesoterapia-depois.jpeg',
  },
  {
    id: '3',
    name: 'Design de sobrancelhas',
    before: '/img/sobrancelha-antes.jpeg',
    after: '/img/sobrancelha-depois.jpeg',
  },
  {
    id: '4',
    name: 'Skinbooster',
    before: '/img/skinbooster-antes.png',
    after: '/img/skinbooster-depois.png',
  },
  {
    id: '5',
    name: 'Lipo Enzimática',
    before: '/img/lipo-antes.jpg',
    after: '/img/lipo-depois.jpg',
  },
  {
    id: '6',
    name: 'Retirada de Miliuns',
    before: '/img/miliuns-antes.jpg',
    after: '/img/miliuns-depois.jpg',
  },
]

interface SliderProps {
  item: BeforeAfterItem
}

function BeforeAfterSlider({ item }: SliderProps) {
  const [position, setPosition] = useState(50) // Inicia em 50%
  const [isDragging, setIsDragging] = useState(false)
  const [hasMoved, setHasMoved] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percentage)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setHasMoved(false)
    setIsDragging(true)
    updatePosition(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setHasMoved(false)
    setIsDragging(true)
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX)
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setHasMoved(true)
      updatePosition(e.clientX)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      e.preventDefault()
      setHasMoved(true)
      updatePosition(e.touches[0].clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleClick = (e: React.MouseEvent) => {
    // Só atualiza se não houve movimento (evita conflito com drag)
    if (!hasMoved) {
      updatePosition(e.clientX)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setPosition((prev) => Math.max(0, prev - 5))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      setPosition((prev) => Math.min(100, prev + 5))
    }
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleMouseUp)
      }
    } else {
      // Reset hasMoved quando para de arrastar
      setHasMoved(false)
    }
  }, [isDragging])

  return (
    <div className="w-full flex flex-col items-center">
      {/* Label do procedimento */}
      <h3 className="font-alt font-semibold text-[16px] lg:text-base text-foreground mb-2 text-center">
        {item.name}
      </h3>

      {/* Card do comparador */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[360px] lg:w-[360px] h-[260px] md:h-[220px] lg:h-[240px] rounded-3xl overflow-hidden cursor-col-resize select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E59D0D] focus-visible:ring-offset-2"
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label={`Comparar antes e depois - ${item.name}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
      >
        {/* Imagem "Depois" (base) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={item.after}
            alt={`${item.name} - Depois`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-neutral-200 text-foreground/50 font-alt text-sm">${item.name} - Depois</div>`
              }
            }}
          />
        </div>

        {/* Imagem "Antes" (sobreposta com clip) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <img
            src={item.before}
            alt={`${item.name} - Antes`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-neutral-200 text-foreground/50 font-alt text-sm">${item.name} - Antes</div>`
              }
            }}
          />
        </div>

        {/* Linha divisória vertical */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/90 shadow-sm pointer-events-none z-10"
          style={{
            left: `${position}%`,
            transform: 'translateX(-50%)',
          }}
        />

        {/* Handle (puxador) */}
        <div
          ref={handleRef}
          className="absolute top-1/2 w-4 h-4 bg-white/95 shadow-md rounded-sm z-20 pointer-events-none"
          style={{
            left: `${position}%`,
            transform: 'translate(-50%, -50%)',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

export function BeforeAfter() {
  const { ref, isVisible } = useInViewAnimation()

  return (
    <section
      id="antes-depois"
      ref={ref}
      className={`bg-white pt-8 md:pt-12 pb-8 md:pb-12 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="px-6 md:px-8">
        {/* Título */}
        <h2 className="font-alt font-semibold text-[24px] lg:text-[32px] text-center text-foreground mb-8 md:mb-10 lg:mb-12 leading-tight">
          Antes & Depois
        </h2>

        {/* Lista de comparadores */}
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-[24px] lg:grid lg:grid-cols-2 lg:gap-x-14 lg:gap-y-12 lg:justify-items-center">
          {beforeAfterItems.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
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
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
