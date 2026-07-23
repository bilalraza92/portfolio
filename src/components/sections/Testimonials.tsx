"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from "react-icons/fa6";
import { TESTIMONIALS } from "@/constants/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(0,229,168,0.1),transparent_50%)]" />
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words from people I've worked with."
          align="center"
          className="mx-auto items-center"
        />

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="glass gradient-border relative rounded-3xl p-8 text-center sm:p-12"
            >
              <FaQuoteLeft className="mx-auto h-8 w-8 text-primary/40" />
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text sm:text-xl">
                &ldquo;{testimonial.feedback}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-1 text-primary">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/30">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-display text-sm font-semibold text-text">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              data-cursor-hover
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted hover:text-primary"
            >
              <FaChevronLeft className="h-3.5 w-3.5" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-cursor-hover
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-primary" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              data-cursor-hover
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted hover:text-primary"
            >
              <FaChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
