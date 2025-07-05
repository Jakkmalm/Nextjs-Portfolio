// src/components/Footer.tsx
'use client';

import React from 'react';
// import { motion, Variants } from 'framer-motion';


export default function Footer() {


    return (
        <footer id='footer' className="min-h-screen flex items-center justify-center bg-gray-800 text-white p-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm"> Ditt Företag. Alla rättigheter förbehållna.</p>
            </div>
        </footer>
    );
}

