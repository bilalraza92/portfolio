"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ElementType } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  wordDelay?: number;
  once?: boolean;
}

export default function AnimatedText({
  text,
  className,
  as: Tag = "div",
  delay = 0,
  wordDelay = 0.06,
  once = true,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={cn("overflow-hidden", className)}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.6 }}
        transition={{ staggerChildren: wordDelay, delayChildren: delay }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="inline-block"
            >
              {word}
              {i !== words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
