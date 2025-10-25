import { useEffect, useMemo, useState } from 'react'

type CarouselProps = {
  images: string[]
  intervalMs?: number
  autoPlay?: boolean
  heightClass?: string
  objectFitClass?: 'object-cover' | 'object-contain'
  className?: string
}

export default function Carousel({
  images,
  intervalMs = 0,
  autoPlay = false,
  heightClass = 'h-[42vh] sm:h-[50vh] md:h-[60vh]',
  objectFitClass = 'object-cover',
  className = '',
}: CarouselProps) {
  const slides = useMemo(() => images.filter(Boolean), [images])
  const [index, setIndex] = useState(0)
  const count = slides.length

  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)

  useEffect(() => {
    if (!autoPlay) return
    if (count <= 1) return
    if (!intervalMs || intervalMs <= 0) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), intervalMs)
    return () => clearInterval(id)
  }, [count, intervalMs, autoPlay])

  if (count === 0) return null

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className="whitespace-nowrap transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div key={i} className="inline-block w-full align-top">
            <img
              src={src}
              alt={`slide-${i + 1}`}
              className={`w-full ${heightClass} ${objectFitClass}`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-gradient-to-b from-pink-500/90 to-fuchsia-500/90 hover:from-pink-500 hover:to-fuchsia-500 text-white rounded-full p-3 sm:p-4 backdrop-blur-md ring-2 ring-white shadow-xl"
          >
            <i className="bi bi-chevron-left text-2xl sm:text-3xl" />
          </button>
          <button
            aria-label="Siguiente"
            onClick={next}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-gradient-to-b from-pink-500/90 to-fuchsia-500/90 hover:from-pink-500 hover:to-fuchsia-500 text-white rounded-full p-3 sm:p-4 backdrop-blur-md ring-2 ring-white shadow-xl"
          >
            <i className="bi bi-chevron-right text-2xl sm:text-3xl" />
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir a la imagen ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
