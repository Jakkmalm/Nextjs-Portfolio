'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type AOSInitProps = {
  duration?: number;
  easing?: string;
  once?: boolean;
  offset?: number;
  mirror?: boolean;
};

export default function AOSInit({
  duration = 1200,
  easing = 'ease-out-cubic',
  once = true,
  offset = 10,
  mirror = false,
}: AOSInitProps) {
  useEffect(() => {
    AOS.init({
      duration,
      easing,
      once,
      offset,
      mirror,
    });

    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [duration, easing, once, offset, mirror]);

  return null;
}
// This component initializes AOS (Animate On Scroll) library
// It sets the duration, easing, and whether animations should only happen once
