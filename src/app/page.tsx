'use client';
import React, { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import Splash from '@/components/Splash';
import AboutSection from '../components/AboutSection';
import TabSection from '../components/TabSection';
// import ContactForm from '../components/ContactForm';
// import AnimatedSection from '../components/AnimatedSection';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Page() {
  // Optional: automatiskt återställ scroll från sessionStorage
  useScrollRestoration();
  const [entered, setEntered] = useState(false);

  // On mount: check if user has seen the splash before
  useEffect(() => {
    if (localStorage.getItem('entered') === 'true') {
      setEntered(true);
    }
  }, []);

  // When they click “Gå vidare”
  const handleContinue = () => {
    localStorage.setItem('entered', 'true');
    setEntered(true);
  };

  // 3) När one‐pager mountar (efter Splash), läs scroll‐position
  useEffect(() => {
    if (entered) {
      const y = sessionStorage.getItem('scroll:/')
      if (y) {
        window.scrollTo({ top: Number(y), behavior: 'instant' })
        sessionStorage.removeItem('scroll:/') // valfritt: rensa efter användning
      }
    }
  }, [entered])

  // If not entered yet, render Splash alone
  if (!entered) {
    return <Splash onContinue={handleContinue} />;
  }

  return (
    <Head>
        <meta name="google-site-verification" content="IGGOBkDDOAkrFU3c5a5dT5D5BFhKs_j4qzd4plZYI-E" />
      </Head>
    <main
      className="flex flex-col
      max-w-screen
              ">

      <section id="hero"><Hero /></section>
      {/* <AnimatedSection id="about" className='relative z-10'><AboutSection /></AnimatedSection>
      <AnimatedSection id='tab-section' className='relative z-10'><TabSection  /></AnimatedSection>          */}




      <section id="about" className='relative z-10'><AboutSection /></section>
      <section id='tab-section' className='relative z-10'><TabSection /></section>           {/* Projects / Tech / Other */}
      {/* <section id="contact"><ContactForm /></section> */}
      <section className='relative z-10'><Footer /></section>

    </main>
  );
}
