// src/components/OtherTab.tsx
'use client';

import React from 'react';
import { Construction } from '../lib/icons';

export default function OtherTab() {
    return (
        <div className="mt-4">
            <h3 className="text-white text-2xl font-semibold mb-4">Övrigt</h3>
            <p className="text-white">Här är en byggarbetsplats....Mer innehåll kommer snart!</p>
            <Construction size={100} color="yellow" strokeWidth={1} />
        </div>
    );
}