"use client";

import { motion } from "framer-motion";
import { FaPaperPlane, FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";
import { CONTACT_INFO } from "@/constants/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/shared/MagneticButton";
import { useContactForm } from "@/hooks/useContactForm";

export default function Contact() {
  const { form, status, onSubmit } = useContactForm();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together."
          description="Have a project in mind or just want to say hi? My inbox is open."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-4">
            {CONTACT_INFO.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                data-cursor-hover
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass gradient-border group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:glow"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg text-primary">
                  <info.icon />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">{info.label}</p>
                  <p className="font-medium text-text">{info.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="glass gradient-border mt-2 overflow-hidden rounded-2xl"
            >
              
            </motion.div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass gradient-border rounded-2xl p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Name
                </label>
                <Input id="name" placeholder="Your name" {...register("name")} />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Email
                </label>
                <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Subject
              </label>
              <Input id="subject" placeholder="Project inquiry" {...register("subject")} />
              {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Message
              </label>
              <Textarea id="message" placeholder="Tell me about your project..." {...register("message")} />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <MagneticButton>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="cursor-none-desktop"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  <FaPaperPlane className="h-3.5 w-3.5" />
                </Button>
              </MagneticButton>

              {status === "success" && (
                <span className="flex items-center gap-2 text-sm text-primary">
                  <FaCircleCheck className="h-4 w-4" /> Message sent successfully
                </span>
              )}
              {status === "error" && (
                <span className="flex items-center gap-2 text-sm text-red-400">
                  <FaCircleExclamation className="h-4 w-4" /> Something went wrong
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
