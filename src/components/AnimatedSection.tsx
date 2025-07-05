// // src/components/AnimatedSection.tsx
// 'use client';

// import React, { ReactNode, useRef } from 'react';
// import { motion, useScroll, useTransform, Variants } from 'framer-motion';

// const entryVariants: Variants = {
//   hidden: { opacity: 0, y: 40, scale: 0.95 },
//   visible: { opacity: 1, y: 0, scale: 1 },
// };

// interface AnimatedSectionProps {
//   children?: ReactNode;
//   className?: string;
//   /** Om true använder scroll-trigger (whileInView), annars animera direkt (animate) */
//   scrollTrigger?: boolean;
// }

// export default function AnimatedSection({
//   children,
//   className = '',
// }: AnimatedSectionProps) {
//   const ref = useRef<HTMLElement>(null);

//   // Parallax: flytta sektionen +/- 30px i y-led baserat på scroll
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'end start'],
//   });
//   const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

//   return (
//     <motion.section
//       ref={ref}
//       className={className}
//       variants={entryVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       style={{ y: yParallax }}
//     >
//       {children}
//     </motion.section>
//   );
// }












// // src/components/AnimatedSection.tsx
// 'use client';

// import React, { ReactNode, useRef } from 'react';
// import { motion, useScroll, useTransform, Variants } from 'framer-motion';

// const entryVariants: Variants = {
//     hidden: { opacity: 0, y: 40, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1 },
// };

// interface AnimatedSectionProps {
//     children?: ReactNode;
//     className?: string;
//     /** Fördröjning i sekunder innan animation */
//     delay?: number;
//     /** Scroll-trigger (whileInView) eller mount-trigger (animate) */
//     scrollTrigger?: boolean;
//     /** Om true: animera bara en gång, annars varje gång i vy */
//     once?: boolean;
// }

// export default function AnimatedSection({
//     children,
//     className = '',
//     delay = 0,
//     scrollTrigger = true,
//     once = true,
// }: AnimatedSectionProps) {
//     const ref = useRef<HTMLElement>(null);

//     // Parallax‐effekt (kan behållas eller tas bort om du vill)
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ['start end', 'end start'],
//     });
//     const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

//     const transition = { delay, duration: 0.6, ease: 'easeOut' as const };

//     if (scrollTrigger) {
//         return (
//             <motion.section
//                 ref={ref}
//                 className={className}
//                 variants={entryVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once, amount: 0.1 }}
//                 transition={transition}
//                 style={{ y: yParallax }}
//             >
//                 {children}
//             </motion.section>
//         );
//     } else {
//         return (
//             <motion.section
//                 ref={ref}
//                 className={className}
//                 variants={entryVariants}
//                 initial="hidden"
//                 animate="visible"
//                 transition={transition}
//                 style={{ y: 0 }}
//             >
//                 {children}
//             </motion.section>
//         );
//     }
// }



// src/components/AnimatedSection.tsx
'use client';

import { m, LazyMotion, domAnimation } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motions';

interface Props { children: React.ReactNode; className?: string; id?: string; }

export default function AnimatedSection({ children, className, id }: Props) {
    return (
        <LazyMotion features={domAnimation}>
            <m.section
                id={id}
                className={className}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.25 }}
                variants={staggerContainer}
            >
                <m.div variants={fadeInUp}>
                    {children}
                </m.div>
            </m.section>
        </LazyMotion>
    );
}


