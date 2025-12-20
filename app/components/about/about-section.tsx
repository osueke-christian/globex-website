"use client";

import { motion, useInView } from 'framer-motion';
import { FlagTriangleRightIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaRegHandPeace } from 'react-icons/fa';
import StatsSection from './stats-section';
import { AnimatedWords } from '@/components/animated-words';
import { HandPeaceIcon, RoundedKeyIcon, TargetIcon2 } from '@/components/icons/icons';

interface ValueCard {
  id: number;
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const values: ValueCard[] = [
  {
    id: 1,
    number: '01',
    icon: <RoundedKeyIcon className="w-6 h-6 text-zinc-500" />,
    title: 'Integrity in Every Deal',
    description: 'We believe that trust is earned through honesty and consistency. Every trade we make is built on transparency, ethics, and respect for our partners.',
  },
  {
    id: 2,
    number: '02',
    icon: <TargetIcon2 className="w-6 h-6 text-zinc-500" />,
    title: 'Commitment to Quality',
    description: 'From sourcing to delivery, we maintain the highest standards of product and service excellence — ensuring reliability that our clients can depend on.',
  },
  {
    id: 3,
    number: '03',
    icon: <UsersIcon className="w-6 h-6 text-zinc-500" />,
    title: 'Global Partnerships',
    description: 'We constantly evolve to meet the changing dynamics of global trade — embracing new opportunities, technologies, and sustainable practices to drive growth.',
  },
];


const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="w-full py-14 md:py-20 px-5 md:px-10 bg-white">
        <div className="container mx-auto space-y-14">
          <div className="space-y-3">
            <div
              className={`inline-flex items-center gap-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <FlagTriangleRightIcon className="text-zinc-500 text-sm w-4 h-4" />
              <span className="text-sm text-zinc-500 font-medium">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:font-bold font-semibold mb-6">
              <AnimatedWords text="Built on Trust." delayOffset={3} className="text-zinc-500" />
              <AnimatedWords text="Driven by Expertise.®" delayOffset={3} />
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div
              ref={imageRef}
              className="relative w-full rounded-lg overflow-hidden"
            >
              <motion.div
                initial={{ scale: 1.2 }}
                animate={isImageInView ? { scale: 1 } : { scale: 1.2 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="w-full h-[300px]"
              >
                <Image
                  src="/assets/images/piV0bgVGQYYrDpdFfHq6EdLWxOc.jpg"
                  alt="Group of men standing with Surfboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl lg:text-6l font-semibold text-zinc-900 mb-4">
                  <AnimatedWords text="Why Choose Us" delayOffset={3} />
                </h3>
                <p
                  className={`text-base text-zinc-500 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                  At Globex, our values define how we do business — fostering long-term partnerships, ensuring quality in every transaction, and upholding our commitment to global trade excellence.
                </p>
              </div>

              <div
                className={`space-y-4 transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zinc-900 rounded-full" />
                  <p className="text-base font-medium text-zinc-900">Proven Industry Experience</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zinc-900 rounded-full" />
                  <p className="text-base font-medium text-zinc-900">End-to-End Supply Solutions</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zinc-900 rounded-full" />
                  <p className="text-base font-medium text-zinc-900">Integrity & Partnership First</p>
                </div>
              </div>

              <div
                className={`transition-all duration-700 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all duration-300 hover:scale-105"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {values.map((value, index) => (
              <ValueCardComponent
                key={value.id}
                value={value}
                delay={index * 150}
                isVisible={isVisible}
              />
            ))}
          </div>

          <div className="mb-12">
            <div
              className={`inline-flex items-center text-zinc-700 gap-2 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <HandPeaceIcon className="w-5 h-5" />
              <span className="font-medium">Our Journey of Excellence</span>
            </div>

            <div className="max-w-4xl font-semibold">
              <p className="text-xl md:text-2xl text-zinc-900 leading-relaxed mb-6">
                Founded in 2007 in Dubai, UAE, Globex Worldwide DMCC has evolved from a specialized cement importer to a comprehensive commodity trading powerhouse. Our journey represents a commitment to excellence, innovation, and building lasting partnerships with clients across the globe.
              </p>
              <p className="text-xl md:text-2xl text-zinc-900 leading-relaxed">
                Today, we serve as a vital link in the global supply chain, facilitating the movement of essential commodities across continents. Our expertise spans five major categories: petroleum products, cementitious materials, energy supplies, fertilizers, and agro commodities.
              </p>
            </div>
          </div>

          <StatsSection />

        </div>
      </section>
    </>
  );
};

interface ValueCardProps {
  value: ValueCard;
  delay: number;
  isVisible: boolean;
}

const ValueCardComponent: React.FC<ValueCardProps> = ({ value, delay, isVisible }) => {
  return (
    <div
      className={`relative rounded-lg border border-zinc-200 bg-zinc-50 p-8 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("/assets/images/N9GeBa0CRBIhhvb9pYLnIeWF4gQ.svg")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '20px',
          backgroundPosition: 'left top',
        }}
      />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between gap-4 mb-4">
          {value.icon}
          <span className="text-zinc-500 font-medium">{value.number}</span>
        </div>
        <h4 className="text-2xl font-semibold text-zinc-900">
          {value.title.split(' ').map((word, i) => (
            <span
              key={i}
              className="inline-block mr-2"
              style={{
                opacity: 1,
                filter: 'blur(0px)',
                transform: 'none',
              }}
            >
              {word}
            </span>
          ))}
        </h4>
        <p className="text-base text-zinc-500 leading-relaxed">{value.description}</p>
      </div>
    </div>
  );
};
export default AboutSection;