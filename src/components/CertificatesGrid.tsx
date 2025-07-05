// src/components/CertificatesGrid.tsx
import React from 'react';
import CertificateCard from './CertificatesCard';
import { certificates } from '../app/data/projects';

export function CertificatesGrid() {
    return (
        <div className="max-h-screen grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c) => (
                <CertificateCard
                    key={c.id}
                    title={c.title}
                    image={c.image}
                    issuedBy={c.issuedBy}
                    date={c.date}
                />
            ))}
        </div>
    );
}
