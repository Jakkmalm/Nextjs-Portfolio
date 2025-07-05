//src/components/ContactSection.tsx
'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';
import ContactSuccess from './ContactSuccess';

export default function ContactSection() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
                <p className="mb-8 text-gray-600">
                    Har du frågor eller vill samarbeta? Skicka ett meddelande så hör jag av mig!
                </p>

                {status === 'success' ? (
                    <ContactSuccess />
                ) : (
                    <ContactForm status={status} setStatus={setStatus} />
                )}
            </div>
        </section>
    );
}
