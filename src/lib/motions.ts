// src/lib/motions.ts
export const ease = [0.22, 1, 0.36, 1] as const;
export const duration = 0.6;

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration, ease } },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration, ease } },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const slideIn = (direction: "left" | "right" | "up" | "down") => ({
  initial: {
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
    opacity: 0,
  },
  animate: { x: 0, y: 0, opacity: 1, transition: { duration, ease } },
});

// Blob animation variants with repeatType for smoother back-and-forth motion
export const blobVariant1 = {
  initial: { x: 0, y: 0, scale: 1 },
  animate: {
    x: [0, 20, 0],
    y: [0, -20, 0],
    scale: [1, 1.1, 1],
    transition: { duration: 10, ease, repeat: Infinity, repeatType: 'mirror' },
  },
};

export const blobVariant2 = {
  initial: { x: 0, y: 0, scale: 1 },
  animate: {
    x: [0, -15, 0],
    y: [0, 15, 0],
    scale: [1, 1.05, 1],
    transition: { duration: 12, ease, repeat: Infinity, repeatType: 'mirror' },
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
