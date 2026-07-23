"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

/**
 * Applies a subtle vertical parallax to the given element as the user
 * scrolls past it. Respects prefers-reduced-motion.
 */
export function useParallax(ref: RefObject<HTMLElement | null>, strength = 60) {
  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: -strength },
        {
          y: strength,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [ref, strength]);
}
