export interface OverlappedPhotosProps {
  leftSrc: string
  rightSrc: string
  leftAlt: string
  rightAlt: string
  className?: string
  objectPositionLeft?: string
  objectPositionRight?: string
  /** Quando true, aplica blur + overlay bege (ex.: conteúdo sensível) */
  blurred?: boolean
  /** Chamado quando qualquer imagem falha ao carregar */
  onError?: () => void
}

const DEFAULT_OBJECT_POSITION = '50% 20%'

export function OverlappedPhotos({
  leftSrc,
  rightSrc,
  leftAlt,
  rightAlt,
  className = '',
  objectPositionLeft = DEFAULT_OBJECT_POSITION,
  objectPositionRight = DEFAULT_OBJECT_POSITION,
  blurred = false,
  onError,
}: OverlappedPhotosProps) {
  const handleError = () => onError?.()
  return (
    <div
      className={`relative w-full max-w-[560px] h-[420px] overflow-visible ${className}`}
      aria-hidden
    >
      {/* Foto direita (atrás) - rotate 7deg, translateX 120px */}
      <div
        className="absolute pointer-events-none rounded-[28px] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.18)] z-10"
        style={{
          right: 0,
          top: 0,
          width: '52%',
          height: '85%',
          transform: 'rotate(7deg) translateX(80px) translateY(0)',
        }}
      >
        <img
          src={rightSrc}
          alt={rightAlt}
          className="w-full h-full object-cover transition-all duration-300"
          style={{
            objectPosition: objectPositionRight,
            filter: blurred ? 'blur(6px) saturate(0.6)' : 'none',
            opacity: blurred ? 0.85 : 1,
          }}
          onError={handleError}
        />
        {blurred && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: 'rgba(248, 229, 206, 0.75)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          />
        )}
      </div>

      {/* Foto esquerda (frente) - rotate -6deg, translate -10px 20px, um pouco maior */}
      <div
        className="absolute pointer-events-none rounded-[28px] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.18)] z-20"
        style={{
          left: 0,
          top: '1.25rem',
          width: '54%',
          height: '88%',
          transform: 'rotate(-6deg) translateX(-10px) translateY(20px)',
        }}
      >
        <img
          src={leftSrc}
          alt={leftAlt}
          className="w-full h-full object-cover transition-all duration-300"
          style={{
            objectPosition: objectPositionLeft,
            filter: blurred ? 'blur(6px) saturate(0.6)' : 'none',
            opacity: blurred ? 0.85 : 1,
          }}
          onError={handleError}
        />
        {blurred && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: 'rgba(248, 229, 206, 0.75)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          />
        )}
      </div>
    </div>
  )
}

export default OverlappedPhotos
