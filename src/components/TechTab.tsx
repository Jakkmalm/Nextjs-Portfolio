// src/components/TechTab.tsx
'use client';
import { TechGrid } from './TechGrid';

export default function TechTab() {
  return (
    <div>
      <h3
        data-aos="fade-right"
        data-aos-duration="400"
        className="text-2xl mb-4 text-white">Techssss Stack</h3>
      <p
        data-aos="fade-right"
        data-aos-duration="800"
        className='mb-4 text-white'
      >Här är olika tekniker som jag arbetat i och använt för att bygga min portfolio.</p>
      <TechGrid />
    </div>
  );
}
