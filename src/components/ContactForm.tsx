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
        <form onSubmit={handleSubmit} className="grid gap-6">
            <input
                name="name"
                type="text"
                placeholder="Ditt namn"
                required
                className="border rounded px-4 py-2"
                disabled={status === 'sending'}
            />
            <input
                name="email"
                type="email"
                placeholder="Din e-post"
                required
                className="border rounded px-4 py-2"
                disabled={status === 'sending'}
            />
            <textarea
                name="message"
                placeholder="Ditt meddelande"
                required
                rows={6}
                className="border rounded px-4 py-2"
                disabled={status === 'sending'}
            />
            <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {status === 'sending' ? 'Skickar...' : 'Skicka meddelande'}
            </button>
            {status === 'error' && (
                <p className="text-red-600">Något gick fel. Försök igen senare.</p>
            )}
        </form>
    );
}
