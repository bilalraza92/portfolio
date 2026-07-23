"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { STATS, SITE, EXPERIENCE } from "@/constants/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Building thoughtful interfaces backed by solid engineering."
          description="A quick look at who I am, how I work, and the journey that got me here."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="gradient-border glass relative aspect-[4/5] overflow-hidden rounded-2xl sm:translate-y-8"
            >
              <Image
                src="/images/about-1.jpg"
                alt={`${SITE.name} working at a desk`}
                fill
                sizes="(max-width: 640px) 90vw, 320px"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="gradient-border glass relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/about-2.jpg"
                alt={`${SITE.name} portrait`}
                fill
                sizes="(max-width: 640px) 90vw, 320px"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m a web developer based in {SITE.location}, focused on
              crafting fast, accessible, and visually refined products. My
              background is in the SMIT web & app development track, and
              since then I&apos;ve shipped e-commerce platforms, dashboards,
              and marketing sites for clients across several industries.
            </p>
            <p className="text-base leading-relaxed text-muted">
              I care about the details that most people never notice — the
              easing curve on a hover state, the loading skeleton that
              doesn&apos;t jump, the API that fails gracefully. That&apos;s
              the difference between a website that works and one that feels
              premium.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="glass rounded-xl px-4 py-5 text-center">
                  <div className="font-display text-3xl font-bold text-gradient">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-xs leading-tight text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="font-display text-2xl font-semibold text-text">My Journey</h3>
          <div className="relative mt-10 border-l border-white/10 pl-8">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pb-12 last:pb-0"
              >
                <span
                  className={`absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-bg ${
                    item.type === "work" ? "bg-primary" : "bg-accent"
                  } glow`}
                />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                  {item.period}
                </span>
                <h4 className="mt-2 font-display text-lg font-semibold text-text">
                  {item.title}
                </h4>
                <p className="text-sm text-muted">{item.organization}</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted/80">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
