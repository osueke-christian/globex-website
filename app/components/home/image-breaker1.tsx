"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ImageBreaker({
  imageSrc = "https://framerusercontent.com/images/7zuM9Wy3DMdKPJCn7eeqYQnahAw.png",
  alt = "A man surfing",
}: {
  imageSrc?: string;
  alt?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms - removed Y translation to keep image fixed in place (curtain effect)
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section
      ref={ref}
      className="sticky top-0 -z-10 h-[80vh] w-full overflow-hidden"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
    </section>
  );
}

