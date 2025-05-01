"use client";

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings
    lenisRef.current = new Lenis({
      autoRaf: false, // We'll handle RAF manually
      smoothWheel: true,
      wheelMultiplier: 0.7, // Reduced from 1 to make scrolling slower
      lerp: 0.03, // Reduced from 0.1 to make scrolling smoother (lower = smoother but slower)
      touchMultiplier: 1.2, // Reduced from 2 for smoother touch scrolling
      duration: 1.75, // Added duration for smoother transitions
    });

    // Optional: Log scroll events only in development
    if (process.env.NODE_ENV === 'development') {
      lenisRef.current.on('scroll', (e) => {
        console.log(e);
      });
    }
 
    // Create a more efficient RAF function
    const raf = (time: number) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      rafRef.current = requestAnimationFrame(raf);
    };

    // Start the animation loop
    rafRef.current = requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return null;
} 