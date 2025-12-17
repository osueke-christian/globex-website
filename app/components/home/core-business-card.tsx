"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CoreBusiness } from "@/data/core-businesses";
import { useIsMobile } from "@/hooks/use-mobile";


export function CoreBusinessCard({
  title,
  description,
  image,
  reverse
}: CoreBusiness) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Next card grows slightly before snapping
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [0.96, 1.02, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={cn(
        "sticky top-0 z-1 grid min-h-screen items-center",
      )}
    >
      <div
        className={cn(
          "grid gap-8 md:grid-cols-2 items-center rounded-xl border bg-background bg-center bg-cover p-4 md:p-8 shadow-lg",
          reverse && "md:[&>*:first-child]:order-2"
        )}
        style={{
          backgroundImage: isMobile? '' : `url(${image})`,
        }}
      >
        {/* Image */}
        <div className="relative h-[320px] w-full overflow-hidden rounded-xl md:hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="hidden h-[320px] w-full md:block" />

        {/* Content */}
        <div className="bg-white md:p-6 md:shadow-xl rounded-xl">
          <h3 className="text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-4 text-muted-foreground">{description}</p>

          <Button
            size="xl"
            asChild
            className="mt-6 w-2/3 min-w-[200px] rounded-full bg-neutral-900 hover:bg-neutral-800"
          >
            <Link href="/products">Learn More</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
