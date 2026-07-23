"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import { EXPERIENCE } from "@/constants/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked and what I've learned along the way."
          align="center"
          className="mx-auto items-center"
        />

        <div className="relative mt-20">
          <span className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" />
          <span className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:hidden" />

          <div className="flex flex-col gap-10 md:gap-4">
            {EXPERIENCE.map((item, i) => {
              const leftSide = i % 2 === 0;
              return (
                <div
                  key={item.id}
                  className="relative grid items-center gap-6 pl-16 md:grid-cols-2 md:gap-0 md:pl-0"
                >
                  <motion.div
                    initial={{ opacity: 0, x: leftSide ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55 }}
                    className={cn(
                      "md:py-6",
                      leftSide
                        ? "md:col-start-1 md:pr-14 md:text-right"
                        : "md:col-start-2 md:pl-14"
                    )}
                  >
                    <div className="glass gradient-border inline-block w-full rounded-2xl p-6 text-left">
                      <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                        {item.period}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-semibold text-text">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted">{item.organization}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted/80">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  <span className="absolute left-6 top-8 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-primary/40 bg-bg text-primary glow md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                    {item.type === "work" ? (
                      <FaBriefcase className="h-3.5 w-3.5" />
                    ) : (
                      <FaGraduationCap className="h-3.5 w-3.5" />
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
