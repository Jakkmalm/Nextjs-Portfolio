// src/components/ProjectCarousel.tsx
'use client';

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from '../lib/icons';

interface Props {
  title: string;
  thumbnail: string;
  images?: string[];
  intervalMs?: number;
}

export default function ProjectCarousel({
  title,
  thumbnail,
  images,
  intervalMs = 5000,
}: Props) {
  const slides = useMemo(() => {
    if (images && images.length > 0) return images;
    return [thumbnail];
  }, [images, thumbnail]);

  const [index, setIndex] = useState(0);
  const [orientation, setOrientation] = useState<Record<number, 'landscape' | 'portrait' | 'square'>>({});
  const [paused, setPaused] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [slides.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => {
      setContainerWidth(el.getBoundingClientRect().width);
    });
    ro.observe(el);
    setContainerWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (paused || slides.length <= 1) return;

    const id = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => clearTimeout(id);
  }, [paused, slides.length, intervalMs, index]);

  const goPrev = useCallback(() => {
    if (slides.length <= 1) return;
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    if (slides.length <= 1) return;
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    if (startX == null) return;
    const endX = e.changedTouches[0]?.clientX ?? startX;
    const delta = endX - startX;
    const threshold = 40;
    if (Math.abs(delta) > threshold) {
      if (delta < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewSrc(null);
    };
    if (previewSrc) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [previewSrc]);

  const getOffset = (i: number) => {
    const total = slides.length;
    if (total <= 1) return 0;
    let diff = i - index;
    const half = total / 2;
    if (diff > half) diff -= total;
    if (diff < -half) diff += total;
    return diff;
  };

  return (
    <div
      className="relative w-full overflow-visible group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label={`${title} gallery`}
    >
      <div ref={containerRef} className="relative w-full overflow-visible max-h-[520px] min-h-[360px]">
        <img
          src={slides[index]}
          alt=""
          className="w-full h-auto max-h-[520px] opacity-0 pointer-events-none select-none"
        />
        <div className="absolute inset-0 overflow-visible [perspective:1400px]">
          {slides.map((src, i) => {
            const offset = getOffset(i);
            if (Math.abs(offset) > 1) return null;
            const isActive = offset === 0;
            const translatePx = offset * (containerWidth * 0.28);
            const scale = isActive ? 1 : 0.8;
            const rotate = offset * -28;
            const opacity = isActive ? 1 : 0.55;
            const blur = isActive ? 0 : Math.min(6, Math.abs(offset) * 2.5);
            const z = 30 - Math.abs(offset);
            const o = orientation[i] ?? 'landscape';
            const sizeClass =
              o === 'portrait'
                ? 'w-[78%] md:w-[58%] lg:w-[52%]'
                : o === 'square'
                  ? 'w-[84%] md:w-[64%] lg:w-[60%]'
                  : 'w-[96%] md:w-[90%] lg:w-[92%]';

            return (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => {
                  if (i === index) {
                    setPreviewSrc((prev) => (prev === src ? null : src));
                  } else {
                    setIndex(i);
                  }
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`absolute left-1/2 top-1/2 flex max-h-[520px] items-center justify-center transition-[transform,opacity,filter] duration-500 ease-out ${sizeClass}`}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translatePx}px) scale(${scale}) rotateY(${rotate}deg)`,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex: z,
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={src}
                  alt={`${title} image ${i + 1}`}
                  className="max-h-[520px] w-auto max-w-full rounded-2xl object-contain"
                  onLoad={(e) => {
                    const img = e.currentTarget;
                    const ratio = img.naturalWidth / img.naturalHeight;
                    const next =
                      ratio > 1.1 ? 'landscape' : ratio < 0.9 ? 'portrait' : 'square';
                    setOrientation((prev) => (prev[i] === next ? prev : { ...prev, [i]: next }));
                  }}
                  draggable={false}
                />
              </button>
            );
          })}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-2 pb-2">
          {slides.map((_, i) => (
            <button
              key={`dot-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`pointer-events-auto h-2.5 w-2.5 rounded-full border border-white/40 transition-all ${
                i === index
                  ? 'bg-white/90 scale-110'
                  : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="group/arrow pointer-events-auto hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black/40 text-white/90 transition hover:shadow-lg active:scale-100"
          >
            <ChevronLeft size={20} className="relative z-10 transition-transform duration-300 group-hover/arrow:-translate-x-0.5" />
            <span className="absolute right-0 top-0 h-full w-0 bg-white/20 transition-all duration-300 ease-in-out group-hover/arrow:w-full z-0 rounded-full" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="group/arrow pointer-events-auto hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black/40 text-white/90 transition hover:shadow-lg active:scale-100"
          >
            <ChevronRight size={20} className="relative z-10 transition-transform duration-300 group-hover/arrow:translate-x-0.5" />
            <span className="absolute left-0 top-0 h-full w-0 bg-white/20 transition-all duration-300 ease-in-out group-hover/arrow:w-full z-0 rounded-full" />
          </button>
        </>
      )}

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 transition-opacity duration-300 ${
          previewSrc ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setPreviewSrc(null)}
      >
        <div
          className={`relative max-h-[90vh] max-w-[90vw] transition-transform duration-300 ease-out ${
            previewSrc ? 'scale-100' : 'scale-90'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {previewSrc && (
            <img
              src={previewSrc}
              alt={`${title} preview`}
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-xl object-contain"
              onClick={() => setPreviewSrc(null)}
            />
          )}
          {previewSrc && (
            <button
              type="button"
              onClick={() => setPreviewSrc(null)}
              aria-label="Close preview"
              className="absolute -right-3 -top-3 h-9 w-9 rounded-full bg-black/70 text-white/90 hover:bg-black/90 transition"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
