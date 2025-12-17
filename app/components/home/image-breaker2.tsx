"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ImageBreaker2() {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Framer-like parallax values
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative h-[70vh] w-full overflow-hidden"
    >
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          fill
          src="https://framerusercontent.com/images/So0bwy2oxR7SWNdqnpmA8FUQlA.png"
          alt="A man doing surf stunt"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
