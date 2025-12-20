'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { AnimatedWords } from '@/components/animated-words';

const backgroundImage = '/assets/images/5bw4N7hlubBAbZhK7wfJGMjIxI.png';


interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  title = 'Our Commodity Portfolio',
  subtitle = 'Comprehensive Trading Solutions Across Five Major Commodity Categories, Serving Diverse Industrial and Commercial Needs Worldwide.',
}: HeroSectionProps) => {
  // Framer Motion variants for the content
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2, // Subtle delay after the component mounts
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div
      className="relative w-full h-[40dvh] min-h-80 overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="A wide, sweeping view representing commodity trading"
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-inherit object-center"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center p-4"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-col items-center space-y-3">
            <div className="text-center">
              <h1 className="text-white text-4xl md:text-5xl lg:text-7xl lg:font-bold font-semibold leading-tight [text-shadow:0_2px_4px_rgb(0_0_0/50%)]">
                <AnimatedWords text={title} delayOffset={3} />
              </h1>
            </div>

            <div className="text-center">
              <p className="text-white text-lg md:text-xl lg:text-2xl font-normal leading-relaxed opacity-90 [text-shadow:0_2px_4px_rgb(0_0_0/50%)]">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;