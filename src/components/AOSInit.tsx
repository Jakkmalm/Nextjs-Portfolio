'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      offset: 20,
      duration: 850,
      easing: 'ease-out-cubic',
      once: true,
    });

    const handleResize = () => AOS.refresh();
    const handleLayoutChange = () => AOS.refresh();
    window.addEventListener('resize', handleResize);
    window.addEventListener('portfolio:layout', handleLayoutChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('portfolio:layout', handleLayoutChange);
    };
  }, []);

  useEffect(() => {
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => AOS.refreshHard());
    });

    // Catch layout changes from fonts and images shortly after a client-side route change.
    const refreshTimer = window.setTimeout(() => AOS.refreshHard(), 350);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(refreshTimer);
    };
  }, [pathname]);

  return null;
}
// This component initializes AOS (Animate On Scroll) library
// It sets the duration, easing, and whether animations should only happen once
