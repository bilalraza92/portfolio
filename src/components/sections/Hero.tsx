"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDown, FaFileArrowDown } from "react-icons/fa6";
import { SITE, SOCIAL_LINKS, TYPING_ROLES } from "@/constants/data";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/shared/MagneticButton";
import AnimatedText from "@/components/shared/AnimatedText";
import { useParallax } from "@/hooks/useParallax";

function useTypewriter(words: string[], speed = 65, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(TYPING_ROLES);
  const portraitRef = useRef<HTMLDivElement>(null);
  useParallax(portraitRef, 24);

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-28"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,229,168,0.16),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.14),transparent_45%)]" />
        <div className="absolute left-[8%] top-[18%] h-72 w-72 animate-blob rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute right-[10%] top-[35%] h-80 w-80 animate-blob rounded-full bg-accent/20 blur-[110px] [animation-delay:-4s]" />
        <div className="absolute bottom-[10%] left-[35%] h-64 w-64 animate-blob rounded-full bg-primary/10 blur-[90px] [animation-delay:-8s]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="container-px mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new projects
          </motion.div>

          <AnimatedText
            as="h1"
            text={`Hi, I'm ${SITE.name} — Web Developer.`}
            className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-text sm:text-5xl lg:text-6xl"
          />

          <div className="font-display text-xl font-medium text-primary sm:text-2xl">
            <span>{typed}</span>
            <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-pulse bg-primary align-middle" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            {SITE.tagline} I turn ideas into performant, accessible, and
            beautifully animated digital products using Next.js and React.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-2 flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <Button size="lg" asChild className="cursor-none-desktop">
                <a href="#contact">Hire Me</a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button size="lg" variant="outline" asChild className="cursor-none-desktop">
                <a href="/resume.pdf" download>
                  <FaFileArrowDown className="h-4 w-4" /> Download CV
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex items-center gap-4"
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                data-cursor-hover
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all hover:-translate-y-1 hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          ref={portraitRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="glow absolute inset-6 animate-float rounded-[2.5rem]">
            <div className="gradient-border glass-strong relative h-full w-full overflow-hidden rounded-[2.5rem]">
              <Image
                src="/images/profile2.png"
                alt={`${SITE.name}, ${SITE.role}`}
                fill
                priority
                sizes="(max-width: 1024px) 65vw, 420px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -right-2 top-4 animate-float rounded-2xl [animation-delay:-2s]">
            <div className="glass glow flex items-center gap-2 rounded-2xl px-4 py-3">
              <span className="font-display text-2xl font-bold text-primary">1+</span>
              <span className="text-xs leading-tight text-muted">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>
          <div className="absolute -left-4 bottom-8 animate-float rounded-2xl [animation-delay:-4s]">
            <div className="glass glow flex items-center gap-2 rounded-2xl px-4 py-3">
              <span className="font-display text-2xl font-bold text-primary">10+</span>
              <span className="text-xs leading-tight text-muted">
                Projects
                <br />
                Completed
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <FaArrowDown className="h-3 w-3 text-primary" />
        </motion.span>
      </motion.a>
    </section>
  );
}
