export const ease = [0.25, 1, 0.5, 1] as const; // liknar AOS default: ease-out-cubic
export const duration = 1.5; // AOS använder t.ex. 1500ms
export const delay = 0.6; // valfri startfördröjning

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration, ease, delay } },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration, ease, delay } },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: delay, // <-- 0.6 delay innan första barn börjar
    },
  },
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down') => ({
  initial: {
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    y: direction === 'up' ? -40 : direction === 'down' ? 40 : 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration,
      delay,
      ease,
    },
  },
});

// Blob animation variants with repeatType for smoother back-and-forth motion
export const blobVariant1 = {
  initial: { x: 0, y: 0, scale: 1 },
  animate: {
    x: [0, 20, 0],
    y: [0, -20, 0],
    scale: [1, 1.1, 1],
    transition: { duration: 10, ease, repeat: Infinity, repeatType: "mirror" },
  },
};

export const blobVariant2 = {
  initial: { x: 0, y: 0, scale: 1 },
  animate: {
    x: [0, -15, 0],
    y: [0, 15, 0],
    scale: [1, 1.05, 1],
    transition: { duration: 12, ease, repeat: Infinity, repeatType: "mirror" },
  },
};

export const blobVariant3 = {
  initial: { x: 0, y: 0, scale: 1 },
  animate: {
    x: [0, 10, 0],
    y: [0, 10, 0],
    scale: [1, 1.08, 1],
    transition: { duration: 14, ease, repeat: Infinity, repeatType: "mirror" },
  },
};
