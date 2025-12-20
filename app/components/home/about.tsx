"use client";

import { WaveIcon, TargetIcon } from "@/components/icons/icons";
import { motion } from "framer-motion";
import StatsSection from "../about/stats-section";
import { AnimatedWords } from "@/components/animated-words";

export default function About() {
  return (
    <section className="py-14 md:py-20 bg-white w-full items-center">
      <div className="container mx-auto px-6 relative lg:px-0 space-y-10">
        <h2 className="text-left text-4xl md:text-5xl lg:text-7xl font-semibold">
          <AnimatedWords text="Welcome to" delayOffset={3} className="text-zinc-500" />
          <AnimatedWords text="Globex Worldwide ®" delayOffset={6} className="text-zinc-900" />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Video */}
          <div className="overflow-hidden rounded-md">
            <video
              src="/assets/videos/bnXW5kuLgDnDOscrWOV4xhEjZBo.mp4"
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
      className="space-y-3"
    >
      <div className="flex items-center gap-3 font-semibold">
        <Icon className="h-10 w-10 text-zinc-500" />
        <h4 className="text-2xl text-zinc-900">
          <AnimatedWords text={title} delayOffset={3} />
        </h4>
      </div>
      <p className="text-sm text-zinc-500">{text}</p>
    </motion.div>
  );
}
