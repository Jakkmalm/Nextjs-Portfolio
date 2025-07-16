'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init();

    const handleResize = () => AOS.refresh();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null;
}
// This component initializes AOS (Animate On Scroll) library
// It sets the duration, easing, and whether animations should only happen once
