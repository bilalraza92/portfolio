"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { PROJECTS, PROJECT_FILTERS } from "@/constants/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusColor: Record<string, string> = {
  Live: "text-primary border-primary/40 bg-primary/10",
  "In Progress": "text-yellow-300 border-yellow-300/30 bg-yellow-300/10",
  Completed: "text-sky-300 border-sky-300/30 bg-sky-300/10",
};

export default function Projects() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured Projects"
            title="A selection of things I've built."
            description="Real projects, real constraints — filter by stack to see relevant work."
          />
          <div className="flex flex-wrap gap-2">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                data-cursor-hover
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  filter === f
                    ? "border-primary/60 bg-primary/10 text-primary"
                    : "border-white/10 text-muted hover:text-text"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="glass gradient-border group relative overflow-hidden rounded-2xl transition-shadow hover:glow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 380px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent opacity-80" />
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-4 items-center gap-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        aria-label="View live demo"
                        className="glass-strong flex h-10 w-10 items-center justify-center rounded-full text-text hover:text-primary"
                      >
                        <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        aria-label="View source on GitHub"
                        className="glass-strong flex h-10 w-10 items-center justify-center rounded-full text-text hover:text-primary"
                      >
                        <FaGithub className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                  <span className="absolute left-4 top-4">
                    <Badge className={cn("border", statusColor[project.status])}>
                      {project.status}
                    </Badge>
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-text">
                      {project.title}
                    </h3>
                    <span className="text-xs text-primary">{project.category}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
