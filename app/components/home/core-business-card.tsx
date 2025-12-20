"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CoreBusiness } from "@/data/core-businesses";
import { useIsLargeScreen} from "@/hooks/use-mobile";


export function CoreBusinessCard({
  title,
  description,
  image,
  reverse
}: CoreBusiness) {
  const ref = useRef<HTMLDivElement>(null);
  const isSmallScreen = !useIsLargeScreen();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Next card grows slightly before snapping
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1.05, 1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={cn(
        "sticky top-0 z-1 grid items-center",
      )}
    >
      <div
        className={cn(
          "grid gap-8 lg:grid-cols-2 items-center rounded-xl border bg-background bg-center bg-cover p-4 lg:px-10 lg:py-14 container",
          !reverse && "lg:[&>*:nth-child(3)]:order-1 lg:[&>*:nth-child(2)]:order-2"
        )}
        style={{
          backgroundImage: isSmallScreen? '' : `url(${image})`,
        }}
      >
        {/* Image */}
        <div className="relative h-[320px] w-full overflow-hidden rounded-xl lg:hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="hidden h-[320px] w-full lg:block" />

        {/* Content */}
        <div className="bg-white space-y-5 lg:p-10 lg:shadow-xl rounded-xl">
          <h3 className="text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground">{description}</p>

          <Button
            size="xl"
            asChild
            className="w-2/3 min-w-[200px] lg:w-auto lg:min-w-auto rounded-full bg-neutral-900 hover:bg-neutral-800"
          >
            <Link href="/products">Learn More</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
