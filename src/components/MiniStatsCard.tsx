'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MiniStatsCardProps {
    value: number | string;
    label: string;
    icon?: LucideIcon;
}

export default function MiniStatsCard({
    value,
    label,
    icon: Icon,
}: MiniStatsCardProps) {
    return (
        <div className="hover-star-border relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">
                {Icon && <Icon className="text-blue-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />}
            </div>
            <div className="flex-grow">
                <div className="text-lg md:text-xl font-semibold text-white">{value}</div>
                <div className="text-[10px] md:text-xs text-white">{label}</div>
            </div>
        </div>
    );
}
