"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/constants/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const CATEGORIES = SKILLS.map((g) => g.category);

export default function Skills() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>(CATEGORIES[0]);
  const group = SKILLS.find((g) => g.category === active)!;

  return (
    <section id="skills" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.1),transparent_50%)]" />
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies I use to bring ideas to life."
          description="A snapshot of the stack I reach for most, kept sharp through daily, hands-on use."
        />

        <div className="mt-12 flex flex-wrap gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              data-cursor-hover
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                active === category
                  ? "border-primary/60 bg-primary/10 text-primary"
                  : "border-white/10 text-muted hover:text-text"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {group.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass gradient-border group rounded-2xl p-5 transition-shadow hover:glow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-lg text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <skill.icon />
                  </span>
                  <span className="font-medium text-text">{skill.name}</span>
                </div>
                <span className="font-display text-sm font-semibold text-primary">
                  {skill.level}%
                </span>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
