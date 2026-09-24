//src/components/ContactSuccess.tsx
'use client';

import { CircleCheck } from '../lib/icons';

interface Props {
    durationMs: number;
}

export default function ContactSuccess({ durationMs }: Props) {
    const delayMs = 500;
    const animMs = Math.max(0, durationMs - delayMs);
    return (
        <div
            className="hover-star-border relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6"
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="900"
        >
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <CircleCheck
                        aria-hidden="true"
                        className="animate-success-pop h-9 w-9 text-emerald-300 drop-shadow-[0_0_10px_rgba(110,231,183,0.6)]"
                        strokeWidth={1.8}
                    />
                    <h3 className="text-emerald-200 font-semibold">Tack!</h3>
                </div>
                <span className="text-xs text-emerald-300/80">Skickat</span>
            </div>
            <p className="text-emerald-100/90">
                Ditt meddelande är skickat. Jag återkommer så fort jag kan!
            </p>

            <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-emerald-200/20">
                <div
                    className="h-full w-full bg-emerald-300/80"
                    style={{
                        transformOrigin: 'left center',
                        animation: `shrink ${animMs}ms linear ${delayMs}ms forwards`,
                    }}
                />
            </div>

            <style jsx>{`
                @keyframes shrink {
                    from {
                        transform: scaleX(1);
                    }
                    to {
                        transform: scaleX(0);
                    }
                }
            `}</style>
        </div>
    );
}
