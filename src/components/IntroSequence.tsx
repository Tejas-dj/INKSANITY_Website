"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IntroSequence() {
  // 1. The Track: Reduced to 250vh for a faster, snappier scroll
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. The Zoom: Fly through the logo (Scale 1 -> 100)
  // Happens continuously from 0% to 100% of the scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 100]);

  // 3. The Reveal: Fade out ONLY at the very end (90% -> 100%)
  // This eliminates the "Blank Space" because the homepage is 
  // already sliding underneath by the time we hit 90%.
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    // Outer Track: Creates the scroll distance
    <div ref={containerRef} className="relative h-[250vh]">
      
      {/* Sticky Camera: Pins the video/logo to the screen while we scroll */}
      {/* h-[100dvh] fixes the mobile browser bar issue */}
      <motion.div 
        className="sticky top-0 z-50 flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-black"
        style={{ opacity }}
      >
        
        {/* Layer 1: Video */}
        {/* w-screen ensures it ignores parent padding and fills edge-to-edge */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/ink-spread.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Layer 2: The Logo */}
        <motion.div 
          className="relative z-10"
          style={{ scale }}
        >
          <img 
            src="/logo.png" 
            alt="Inksanity" 
            className="w-64 drop-shadow-2xl md:w-96" 
          />
        </motion.div>

      </motion.div>
    </div>
  );
}