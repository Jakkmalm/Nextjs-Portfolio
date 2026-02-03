// src/components/Footer.tsx
'use client';

import React from 'react';

export default function Footer() {
    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    const yearText = currentYear > startYear ? `${startYear}-${currentYear}` : `${startYear}`;

    return (
        <footer className="w-full min-h-[20vh] text-white relative">
            <div className="p-6">
                {/* Övrigt innehåll, som sociala länkar */}
            </div>

            <div className="absolute bottom-0 left-0 w-full text-center pb-4">
                <p className="text-sm text-gray-400">
                    © {yearText} Jacob Malmberg. Alla rättigheter förbehållna.
                </p>
            </div>
        </footer>

    );
}