"use client";

import { WaveIcon, TargetIcon } from "@/components/icons/icons";
import { motion } from "framer-motion";
import StatsSection from "../about/stats-section";
import { AnimatedWords } from "@/components/animated-words";

export default function About() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-6 space-y-20">
        <h2 className="text-left text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900">
          <AnimatedWords text="Welcome to" delayOffset={3} className="text-zinc-400" />
          <AnimatedWords text="Globex Worldwide" delayOffset={6} className="text-zinc-900" />
          <AnimatedWords text="®" delayOffset={9} className="text-zinc-900 align-super text-xl" />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Video */}
          <div className="overflow-hidden rounded-xl">
            <video
              src="https://framerusercontent.com/assets/bnXW5kuLgDnDOscrWOV4xhEjZBo.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* About Us */}
            <InfoBlock
              title="About Us"
              icon={WaveIcon}
              text={
                <>
                  Globex Worldwide DMCC has been a trusted link between producers
                  and industries for over a decade. With operations in{" "}
                  <strong>UAE, Oman, India, and Bangladesh</strong>, we build
                  long-term relationships founded on transparency and
                  performance.
                </>
              }
            />

            {/* Mission */}
            <InfoBlock
              title="Our Mission"
              icon={TargetIcon}
              text={
                <>
                  Our mission is to deliver reliable commodity solutions while
                  fostering sustainable partnerships across global markets
                  through integrity, consistency, and performance.
                </>
              }
            />
          </div>
        </motion.div>

        <StatsSection />
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Subcomponents */
/* ---------------------------------- */

function InfoBlock({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: React.ReactNode;
  icon: React.FC<{ className?: string }>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3 font-semibold">
        <Icon className="h-11 w-11 text-zinc-600" />
        <h4 className="text-2xl text-zinc-900">
          <AnimatedWords text={title} delayOffset={3} />
        </h4>
      </div>
      <p className="text-zinc-600">{text}</p>
    </motion.div>
  );
}
