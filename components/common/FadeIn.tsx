"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  /** Stagger multiple FadeIns by giving each a slightly larger delay. */
  delay?: number;
}

// A small, reusable scroll-reveal: sections fade in and rise slightly as
// they enter the viewport. Runs once per section (no re-triggering on
// scroll back up) to keep it simple and unobtrusive.
export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
