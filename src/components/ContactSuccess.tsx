//src/components/ContactSuccess.tsx
'use client';

interface Props {
    durationMs: number;
}

export default function ContactSuccess({ durationMs }: Props) {
    const delayMs = 500;
    const animMs = Math.max(0, durationMs - delayMs);
    return (
        <div className="hover-star-border relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6">
            <div className="mb-3 flex items-center justify-between">
                <h3 className="text-emerald-200 font-semibold">Tack!</h3>
                <span className="text-xs text-emerald-300/80">Skickat</span>
            </div>
            <p className="text-emerald-100/90">
                Ditt meddelande ar skickat. Jag aterkommer sa fort jag kan!
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
