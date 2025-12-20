"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ImageBreaker3() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Framer-style subtle movement
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.05]);

  return (
    <section
      ref={ref}
      className="relative h-[60vh] overflow-hidden md:h-[70vh]"
    >
      <motion.img
        src="/assets/images/fbe6u0taPVo0T6GI5CtocEso.png"
        alt="A man Surfing"
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        loading="lazy"
      />
    </section>
  );
}
