import React from 'react';

type AosAnimation =
    | 'fade-up'
    | 'fade-down'
    | 'fade-left'
    | 'fade-right'
    | 'fade-up-left'
    | 'fade-up-right';

interface AnimatedTextLinesProps {
    lines: string[];
    className?: string;
    lineClassName?: string;
    animations?: AosAnimation[];
    delayStep?: number;
    duration?: number;
}

export default function AnimatedTextLines({
    lines,
    className = '',
    lineClassName = '',
    animations = ['fade-right', 'fade-left'],
    delayStep = 100,
    duration = 900,
}: AnimatedTextLinesProps) {
    return (
        <p className={className}>
            {lines.map((line, index) => (
                <span
                    key={`${index}-${line}`}
                    className={`block ${index > 0 ? 'mt-2' : ''} ${lineClassName}`}
                    data-aos={animations[index % animations.length]}
                    data-aos-delay={index * delayStep}
                    data-aos-duration={duration}
                >
                    {line}
                </span>
            ))}
        </p>
    );
}
