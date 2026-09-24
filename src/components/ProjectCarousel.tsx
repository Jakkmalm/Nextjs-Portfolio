// src/components/ProjectCarousel.tsx
'use client';

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
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
  const touchStartY = useRef<number | null>(null);
  const touchLast = useRef({ x: 0, time: 0 });
  const touchVelocity = useRef(0);
  const gestureAxis = useRef<'x' | 'y' | null>(null);
  const dragOffsetRef = useRef(0);
  const suppressClickUntil = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
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
    setHasInteracted(true);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    if (slides.length <= 1) return;
    setHasInteracted(true);
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    touchLast.current = { x: touch.clientX, time: performance.now() };
    touchVelocity.current = 0;
    gestureAxis.current = null;
    dragOffsetRef.current = 0;
    setDragOffset(0);
    setPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const startX = touchStartX.current;
    const startY = touchStartY.current;
    if (!touch || startX == null || startY == null) return;

    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    if (!gestureAxis.current && (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6)) {
      gestureAxis.current = Math.abs(deltaX) > Math.abs(deltaY) ? 'x' : 'y';
    }

    if (gestureAxis.current !== 'x') return;

    if (e.cancelable) e.preventDefault();
    setHasInteracted(true);
    setIsDragging(true);

    const now = performance.now();
    const elapsed = now - touchLast.current.time;
    if (elapsed > 0) {
      touchVelocity.current = (touch.clientX - touchLast.current.x) / elapsed;
    }
    touchLast.current = { x: touch.clientX, time: now };

    const maxDrag = Math.max(containerWidth * 0.7, 220);
    const nextOffset = Math.max(-maxDrag, Math.min(maxDrag, deltaX));
    dragOffsetRef.current = nextOffset;
    setDragOffset(nextOffset);
  };

  const finishTouch = () => {
    const delta = dragOffsetRef.current;
    const velocity = touchVelocity.current;
    const threshold = Math.min(Math.max(containerWidth * 0.16, 55), 100);
    const isFlick = Math.abs(delta) > 15 && Math.abs(velocity) > 0.45;

    if (gestureAxis.current === 'x' && Math.abs(delta) > 6) {
      suppressClickUntil.current = performance.now() + 500;
    }

    if (gestureAxis.current === 'x' && (Math.abs(delta) >= threshold || isFlick)) {
      if (delta < 0) goNext();
      else goPrev();
    }

    setIsDragging(false);
    setDragOffset(0);
    setPaused(false);
    dragOffsetRef.current = 0;
    touchStartX.current = null;
    touchStartY.current = null;
    gestureAxis.current = null;
    touchVelocity.current = 0;
  };

  const onTouchEnd = () => {
    finishTouch();
  };

  const onTouchCancel = () => {
    finishTouch();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewSrc(null);
    };
    if (previewSrc) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [previewSrc]);

  useEffect(() => {
    if (!previewSrc) return;

    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;

    html.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [previewSrc]);

  const getOffset = (i: number) => {
    const total = slides.length;
    if (total <= 1) return 0;
    if (total === 2 && i !== index) return dragOffset > 0 ? -1 : 1;
    let diff = i - index;
    const half = total / 2;
    if (diff > half) diff -= total;
    if (diff < -half) diff += total;
    return diff;
  };

  return (
    <>
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchCancel}
      aria-roledescription="carousel"
      aria-label={`${title} gallery`}
      className="relative w-full overflow-visible group [touch-action:pan-y] cursor-grab active:cursor-grabbing"
    >
      {slides.length > 1 && (
        <>
          <div className="pointer-events-none absolute right-2 top-2 z-40 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-xs font-medium tabular-nums text-white/90 backdrop-blur-md">
            {index + 1} / {slides.length}
          </div>
          <div
            className={`pointer-events-none absolute left-1/2 top-3 z-40 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[11px] text-white/80 backdrop-blur-md transition-all duration-500 sm:text-xs ${
              hasInteracted ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
            }`}
          >
            Dra för att bläddra
          </div>
        </>
      )}
      <div ref={containerRef} className="relative w-full overflow-visible max-h-[520px] min-h-[360px]">
        <img
          src={slides[index]}
          alt=""
          className="w-full h-auto max-h-[520px] opacity-0 pointer-events-none select-none"
          onLoad={() => window.dispatchEvent(new Event('portfolio:layout'))}
        />
        <div className="absolute inset-0 overflow-visible [perspective:1400px]">
          {slides.map((src, i) => {
            const offset = getOffset(i);
            if (Math.abs(offset) > 1) return null;
            const spacing = Math.max(containerWidth * 0.28, 1);
            const visualOffset = offset + dragOffset / spacing;
            const distance = Math.min(Math.abs(visualOffset), 1);
            const translatePx = visualOffset * spacing;
            const scale = 1 - distance * 0.2;
            const rotate = visualOffset * -28;
            const opacity = 1 - distance * 0.45;
            const blur = Math.min(6, distance * 2.5);
            const z = Math.round(30 - distance * 10);
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
                  if (performance.now() < suppressClickUntil.current) return;
                  if (i === index) {
                    setPreviewSrc((prev) => (prev === src ? null : src));
                  } else {
                    setIndex(i);
                  }
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`absolute left-1/2 top-1/2 flex max-h-[520px] items-center justify-center ${isDragging ? 'transition-none' : 'transition-[transform,opacity,filter] duration-500 ease-out'} ${sizeClass}`}
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
              onClick={() => {
                setHasInteracted(true);
                setIndex(i);
              }}
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

      {slides.length > 1 && (
        <div className="pointer-events-none absolute -bottom-3 left-[8%] right-[8%] z-30 h-0.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#00C6FF] to-[#8f00ff] transition-[width] duration-500 ease-out"
            style={{ width: `${((index + 1) / slides.length) * 100}%` }}
          />
        </div>
      )}

    </div>

    {previewSrc && createPortal(
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${title} bildförhandsvisning`}
        className="fixed inset-0 z-[9999] flex touch-none items-center justify-center overflow-hidden overscroll-none bg-[#020106]/90 p-4 backdrop-blur-md sm:p-8"
        onClick={() => setPreviewSrc(null)}
      >
        <div
          className="relative flex max-h-[92vh] max-w-[94vw] items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={previewSrc}
            alt={`${title} preview`}
            className="h-auto max-h-[92vh] w-auto max-w-[94vw] rounded-xl object-contain shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
          />
          <button
            type="button"
            onClick={() => setPreviewSrc(null)}
            aria-label="Stäng bildförhandsvisning"
            className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/75 text-2xl leading-none text-white shadow-lg transition hover:bg-black sm:-right-4 sm:-top-4"
          >
            &times;
          </button>
        </div>
      </div>
      ,
      document.body
    )}
    </>
  );
}
