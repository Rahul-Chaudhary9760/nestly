'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Star, MapPin } from 'lucide-react'
import type { PG } from '@/lib/types'

export default function HeroCarousel({ items }: { items: PG[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ])
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-card shadow-2xl" ref={emblaRef}>
        <div className="flex">
          {items.map((pg) => (
            <div key={pg.id} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-4/3 sm:aspect-3/2">
                <Image
                  src={pg.image || '/placeholder.svg'}
                  alt={`${pg.name} in ${pg.area}, ${pg.city}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                      <Star className="size-3.5 fill-accent text-accent" />
                      {pg.rating}
                    </span>
                    <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                      {pg.roomType}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                    {pg.name}
                  </h3>
                  <p className="mt-0.5 flex items-center gap-1 text-sm text-white/80">
                    <MapPin className="size-3.5" />
                    {pg.area}, {pg.city} · from ₹
                    {pg.price.toLocaleString('en-IN')}/mo
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-background/90 px-3 py-2 shadow-md backdrop-blur-sm">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              selected === i ? 'w-6 bg-primary' : 'w-2 bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
