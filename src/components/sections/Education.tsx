"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCircleCheck } from "react-icons/fa6";
import { EDUCATION } from "@/constants/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="Education" title="Where my foundation was built." />

        <div className="mt-12 grid gap-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass gradient-border flex flex-col gap-6 rounded-2xl p-8 sm:flex-row sm:items-center"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-3xl text-primary">
                <FaGraduationCap />
              </span>
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                  {edu.period}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-text">
                  {edu.institution}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                  <FaCircleCheck className="h-3.5 w-3.5 text-primary" />
                  {edu.program}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
