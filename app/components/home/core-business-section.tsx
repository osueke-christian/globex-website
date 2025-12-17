"use client";

import { motion } from "framer-motion";
import { CoreBusinessCard } from "./core-business-card";
import { coreBusinesses } from "@/data/core-businesses";
import { AnimatedWords } from "@/components/animated-words";

export default function CoreBusinessesSection() {
  return (
    <section id="courses" className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold text-black tracking-tight md:text-5xl">
            <AnimatedWords text="Our Core Businesses" delayOffset={3} />
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive trading solutions across five major commodity
            categories, serving diverse industrial and commercial needs
            worldwide.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 space-y-24">
          {coreBusinesses.map((business) => (
            <CoreBusinessCard key={business.title} {...business} />
          ))}
        </div>
      </div>
    </section>
  );
}
