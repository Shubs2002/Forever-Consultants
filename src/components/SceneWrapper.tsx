"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

const SECTION_COUNT = 4; // hero, lic, mutual-funds, health

export default function SceneWrapper() {
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionProgress, setSectionProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    
    // Each section is exactly 100vh due to our layout
    // Hero = 100vh, Pinned Services = 200vh scroll distance
    const vh = window.innerHeight;
    if (vh <= 0) return;

    // Map scroll strictly by window height up to the end of services
    const sectionFloat = Math.min(scrollTop / vh, SECTION_COUNT - 1);
    
    const secIdx = Math.floor(sectionFloat);
    let secProg = sectionFloat - secIdx;
    
    // Make the transition happen only in the middle of the scroll segment
    // This keeps the shapes fully formed for a longer time
    const transitionStart = 0.3;
    const transitionEnd = 0.7;
    if (secProg < transitionStart) {
      secProg = 0;
    } else if (secProg > transitionEnd) {
      secProg = 1;
    } else {
      secProg = (secProg - transitionStart) / (transitionEnd - transitionStart);
      // Smoothstep for softer ease
      secProg = secProg * secProg * (3 - 2 * secProg);
    }

    setCurrentSection(secIdx === SECTION_COUNT ? secIdx - 1 : secIdx);
    setSectionProgress(secIdx === SECTION_COUNT ? 1 : secProg);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Scene currentSection={currentSection} sectionProgress={sectionProgress} />
  );
}
