"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { SERVICES } from "@/constants/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you."
          description="From a single landing page to a full product, here's how I can help."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Card className="h-full transition-all duration-300 group-hover:border-primary/40 group-hover:glow">
                <CardHeader>
                  <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary transition-transform duration-300 group-hover:scale-110">
                    <service.icon />
                  </span>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                        <FaCheck className="h-3 w-3 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
