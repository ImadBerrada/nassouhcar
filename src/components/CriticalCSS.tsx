'use client';

const CriticalCSS = () => {
  // Next.js handles CSS loading automatically, no manual loading needed

  return (
    <style jsx>{`
      /* Critical CSS - Above the fold styles */
      body {
        margin: 0;
        padding: 0;
        font-family: var(--font-geist-sans), Arial, sans-serif;
        background: var(--background);
        color: var(--foreground);
      }
      
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }
      
      .hero-bg {
        position: absolute;
        inset: 0;
        z-index: -1;
      }
      
      .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8));
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      .text-center {
        text-align: center;
      }
      
      .text-white {
        color: white;
      }
      
      .mb-4 {
        margin-bottom: 1rem;
      }
      
      .mb-8 {
        margin-bottom: 2rem;
      }
    `}</style>
  );
};

export default CriticalCSS;