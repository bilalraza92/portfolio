"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import { NAV_LINKS, SITE } from "@/constants/data";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/shared/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <nav
          className={`container-px mx-auto flex max-w-6xl items-center justify-between rounded-2xl transition-all duration-300 ${
            scrolled ? "glass-strong px-5 py-3" : "px-2 py-2"
          }`}
        >
          <Link
            href="#home"
            data-cursor-hover
            className="font-display text-lg font-semibold tracking-tight text-text"
          >
            Bilal Raza<span className="text-primary">.</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-cursor-hover
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === link.href
                      ? "text-primary"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton>
              <Button asChild size="sm" className="cursor-none-desktop">
                <a href="#contact">Let&apos;s Talk</a>
              </Button>
            </MagneticButton>
          </div>

          <button
            aria-label="Toggle menu"
            data-cursor-hover
            onClick={() => setOpen((v) => !v)}
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-text lg:hidden"
          >
            {open ? <FaXmark className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="container-px flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-4 font-display text-3xl font-medium text-text"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="container-px mt-8 text-sm text-muted">{SITE.email}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
