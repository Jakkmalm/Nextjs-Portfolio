// src/components/ContactSection.tsx
'use client';

import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import ContactSuccess from './ContactSuccess';
import AnimatedSection from './AnimatedSection';

export default function ContactSection() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const successDurationMs = 5000;

    useEffect(() => {
        if (status !== 'success') return;
        const id = setTimeout(() => setStatus('idle'), successDurationMs);
        return () => clearTimeout(id);
    }, [status]);

    return (
        <AnimatedSection id="contact" className="relative py-24">
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <div
                    className="hover-star-border bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 pt-6 md:p-12 md:pt-8 shadow-2xl transition-all duration-500"
                    data-aos="fade-left"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                >
                    <h2
                        className="text-3xl md:text-4xl font-bold text-white mb-3"
                        data-aos="fade-right"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                    >
                        Kontakt
                    </h2>
                    <p
                        className="mb-8 text-gray-300"
                        data-aos="fade-right"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                    >
                        Har du frågor eller vill samarbeta? Skicka ett meddelande så hör jag av mig!
                    </p>

                    {status === 'success' ? (
                        <ContactSuccess durationMs={successDurationMs} />
                    ) : (
                        <ContactForm status={status} setStatus={setStatus} />
                    )}
                </div>
            </div>
        </AnimatedSection>
    );
}