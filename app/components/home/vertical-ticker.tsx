"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

type Props = {
  images: string[];
  duration?: number;
  reverse?: boolean;
};

export function VerticalTicker({
  images,
  duration = 3,
  reverse = false,
}: Props) {
  // horizontal crousel on mobile
  const isMobile = useIsMobile();

  return (
    <div className="relative row-span-1 md:row-span-auto w-full md:h-[520px] overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] lg:mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
      <motion.div
        className="flex lg:flex-col gap-4"
        animate={{
          y: !isMobile ? reverse ? ["0%", "-50%"] : ["-50%", "0%"] : ["0%", "0%"],
          x: isMobile ? reverse ? ["0%", "-50%"] : ["-50%", "0%"] : ["0%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 w-full max-w-[366px] md:max-w-full h-[320px] lg:h-[260px] overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt=""
              fill
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
