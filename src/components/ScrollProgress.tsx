'use client';

import { LazyMotion, domAnimation, m, useScroll, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function ScrollProgress() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.25,
  });

  if (pathname !== '/') return null;

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-[#00C6FF] via-[#5C6BC0] to-[#af40ff] shadow-[0_0_14px_rgba(0,198,255,0.65)]"
        style={{ scaleX }}
      />
    </LazyMotion>
  );
}
