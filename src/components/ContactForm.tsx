// src/components/ContactForm.tsx
'use client';

import { FormEvent } from 'react';

interface Props {
    status: 'idle' | 'sending' | 'error' | 'success';
    setStatus: (s: Props['status']) => void;
}

export default function ContactForm({ status, setStatus }: Props) {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const data = new FormData(e.currentTarget);
        const body = {
            name: data.get('name'),
            email: data.get('email'),
            message: data.get('message'),
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            if (res.ok) {
                setStatus('success');
            } else {
                throw new Error('Network error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-8 md:gap-7">
            <div className="grid gap-7 md:gap-6 md:grid-cols-2">
                <div
                    className="relative"
                    data-aos="fade-up-right"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                >
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder=" "
                        required
                        className="peer hover-star-border w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition focus:border-[#5C6BC0]/60 focus:ring-2 focus:ring-[#5C6BC0]/30"
                        disabled={status === 'sending'}
                    />
                    <label
                        htmlFor="contact-name"
                        className="pointer-events-none absolute left-4 -top-4 text-xs text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#5C6BC0] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#5C6BC0]"
                    >
                        Ditt namn
                    </label>
                </div>

                <div
                    className="relative"
                    data-aos="fade-up-left"
                    data-aos-delay="150"
                    data-aos-duration="1000"
                >
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder=" "
                        required
                        className="peer hover-star-border w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition focus:border-[#00C6FF]/60 focus:ring-2 focus:ring-[#00C6FF]/30"
                        disabled={status === 'sending'}
                    />
                    <label
                        htmlFor="contact-email"
                        className="pointer-events-none absolute left-4 -top-4 text-xs text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#00C6FF] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#00C6FF]"
                    >
                        Din e-post
                    </label>
                </div>
            </div>

            <div
                className="relative"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
            >
                <textarea
                    id="contact-message"
                    name="message"
                    placeholder=" "
                    required
                    rows={6}
                    className="peer hover-star-border w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
                    disabled={status === 'sending'}
                />
                <label
                    htmlFor="contact-message"
                    className="pointer-events-none absolute left-4 -top-4 text-xs text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-white"
                >
                    Ditt meddelande
                </label>
            </div>

            <div
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="1000"
            >
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="hover-star-border inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#00C6FF] to-[#5C6BC0] px-6 py-3 font-medium text-white transition hover:brightness-110 disabled:opacity-60"
                >
                    {status === 'sending' ? 'Skickar...' : 'Skicka meddelande'}
                </button>
            </div>

            {status === 'error' && (
                <p
                    className="text-sm text-red-300"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="800"
                >
                    Något gick fel. Försök igen senare.
                </p>
            )}
        </form>
    );
}