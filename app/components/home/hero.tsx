"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <section className="relative h-[90dvh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        src="https://framerusercontent.com/assets/q4mBBM31OcJVynmu4MYXGByFb3s.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-balance font-semibold tracking-tight text-white text-3xl md:text-4xl leading-tight">
              Leading global commodity trading company
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              <Button
                asChild
                size="lg"
                className="rounded-lg bg-neutral-900 text-white hover:bg-neutral-800"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
