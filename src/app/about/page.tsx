// src/app/about/page.tsx
'use client';

import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import Link from 'next/link';
import AboutSection from '../../components/AboutSection';

export default function AboutPage() {
    return (
        <main className="flex flex-col text-white">
            {/* Om mig */}
            <AboutSection />
        </main>
    );
}
