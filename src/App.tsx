/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (!loadingComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loadingComplete]);

  return (
    <>
      {!loadingComplete && <Loader onComplete={() => setLoadingComplete(true)} />}
      <main className="min-h-screen bg-fox-bg text-white font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
        {/* Global atmospheric meshes */}
        <div className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none z-0" />
        
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Problems />
          <Features />
          <Screenshots />
          <Comparison />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  );
}
