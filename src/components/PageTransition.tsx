'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

type PagePhase = 'idle' | 'leaving' | 'entering';
type OverlayPhase = 'start' | 'expanded' | 'arrived' | 'fade';

interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface ProjectTransitionOptions {
  href: string;
  imageSrc: string;
  title: string;
  fromRect: Rect;
}

interface ProjectOverlay extends ProjectTransitionOptions {
  phase: OverlayPhase;
  destinationRect?: Rect;
}

interface NavigationTransitionContextValue {
  openProject: (options: ProjectTransitionOptions) => void;
}

const NavigationTransitionContext = createContext<NavigationTransitionContextValue | null>(null);

export function useNavigationTransition() {
  const context = useContext(NavigationTransitionContext);
  if (!context) throw new Error('useNavigationTransition must be used inside PageTransition');
  return context;
}

const toRect = (rect: DOMRect): Rect => ({
  left: rect.left,
  top: rect.top,
  width: rect.width,
  height: rect.height,
});

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const previousPath = useRef(pathname);
  const targetPath = useRef<string | null>(null);
  const navigating = useRef(false);
  const timers = useRef<number[]>([]);
  const [pagePhase, setPagePhase] = useState<PagePhase>('idle');
  const [overlay, setOverlay] = useState<ProjectOverlay | null>(null);

  const schedule = useCallback((callback: () => void, delay: number) => {
    const id = window.setTimeout(callback, delay);
    timers.current.push(id);
    return id;
  }, []);

  const openProject = useCallback((options: ProjectTransitionOptions) => {
    if (reduceMotion) {
      router.push(options.href);
      return;
    }
    if (navigating.current) return;

    navigating.current = true;
    targetPath.current = options.href;
    setOverlay({ ...options, phase: 'start' });

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setOverlay(current => current ? { ...current, phase: 'expanded' } : current);
      });
    });

    schedule(() => setPagePhase('leaving'), 390);
    schedule(() => router.push(options.href), 560);
  }, [reduceMotion, router, schedule]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
        event.shiftKey || event.altKey || reduceMotion || navigating.current
      ) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a');
      if (!anchor || anchor.dataset.projectTransition === 'true' || anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.hash || url.pathname === pathname) return;

      event.preventDefault();
      navigating.current = true;
      targetPath.current = `${url.pathname}${url.search}`;
      setPagePhase('leaving');
      schedule(() => router.push(`${url.pathname}${url.search}`), 180);
    };

    document.addEventListener('click', onDocumentClick, true);
    return () => document.removeEventListener('click', onDocumentClick, true);
  }, [pathname, reduceMotion, router, schedule]);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;

    if (!reduceMotion) {
      setPagePhase('entering');
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => setPagePhase('idle')));
    } else {
      setPagePhase('idle');
    }

    const projectTarget = targetPath.current;
    if (overlay && projectTarget && pathname === projectTarget.split('?')[0]) {
      const startedAt = performance.now();
      const landOnGallery = () => {
        const gallery = document.querySelector<HTMLElement>('[data-project-gallery="true"]');
        if (gallery) {
          setOverlay(current => current ? { ...current, phase: 'arrived', destinationRect: toRect(gallery.getBoundingClientRect()) } : current);
          schedule(() => setOverlay(current => current ? { ...current, phase: 'fade' } : current), 360);
          schedule(() => setOverlay(null), 650);
          return;
        }
        if (performance.now() - startedAt > 900) {
          setOverlay(current => current ? { ...current, phase: 'fade' } : current);
          schedule(() => setOverlay(null), 280);
          return;
        }
        window.requestAnimationFrame(landOnGallery);
      };
      window.requestAnimationFrame(landOnGallery);
    }

    targetPath.current = null;
    navigating.current = false;
  }, [overlay, pathname, reduceMotion, schedule]);

  useEffect(() => () => timers.current.forEach(id => window.clearTimeout(id)), []);

  useEffect(() => {
    if (!overlay) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [overlay]);

  const contextValue = useMemo(() => ({ openProject }), [openProject]);
  const expandedRect: Rect = typeof window !== 'undefined' && window.innerWidth >= 1024
    ? { left: window.innerWidth * 0.52, top: window.innerHeight * 0.14, width: window.innerWidth * 0.43, height: window.innerHeight * 0.72 }
    : typeof window !== 'undefined'
      ? { left: window.innerWidth * 0.05, top: window.innerHeight * 0.13, width: window.innerWidth * 0.9, height: window.innerHeight * 0.7 }
      : { left: 0, top: 0, width: 0, height: 0 };

  const overlayRect = overlay?.phase === 'start'
    ? overlay.fromRect
    : overlay?.phase === 'arrived' || overlay?.phase === 'fade'
      ? overlay.destinationRect ?? expandedRect
      : expandedRect;

  const pageStyle: React.CSSProperties = pagePhase === 'leaving'
    ? { opacity: 0, transform: 'translateY(-8px)', pointerEvents: 'none' }
    : pagePhase === 'entering'
      ? { opacity: 0, transform: 'translateY(10px)', pointerEvents: 'none' }
      : { opacity: 1, transform: 'translateY(0)', pointerEvents: 'auto' };

  return (
    <NavigationTransitionContext.Provider value={contextValue}>
      <div style={pageStyle} className="transition-[opacity,transform] duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none">
        {children}
      </div>

      {overlay && overlayRect && (
        <div className="pointer-events-none fixed inset-0 z-[9000]" aria-hidden="true">
          <div className={`absolute inset-0 bg-[#030109]/70 backdrop-blur-sm transition-opacity duration-300 ${overlay.phase === 'fade' ? 'opacity-0' : 'opacity-100'}`} />
          <div
            className="absolute overflow-hidden rounded-2xl bg-[#070312] shadow-[0_28px_90px_rgba(0,0,0,0.7)] transition-[left,top,width,height,opacity,border-radius] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
            style={{ left: overlayRect.left, top: overlayRect.top, width: overlayRect.width, height: overlayRect.height, opacity: overlay.phase === 'fade' ? 0 : 1 }}
          >
            <div className="h-full w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${JSON.stringify(overlay.imageSrc)})` }} />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
              {overlay.title}
            </span>
          </div>
        </div>
      )}
    </NavigationTransitionContext.Provider>
  );
}
