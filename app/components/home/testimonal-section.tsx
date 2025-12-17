"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FaHeart, FaQuoteLeft } from 'react-icons/fa';
import { AnimatedWords } from '@/components/animated-words';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  image: string;
  type: 'text' | 'image';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Menon',
    company: 'UltraBuild Cements (India)',
    text: 'Globex has been instrumental in keeping our cement production running seamlessly. Their logistics and reliability are unmatched.',
    image: 'https://framerusercontent.com/images/EFdqZTdB3YnaOaMFlhfDRfuU.jpg?scale-down-to=1024',
    type: 'text',
  },
  {
    id: 2,
    name: 'Aisha',
    company: 'GreenGrow Fertilizers (Oman)',
    text: 'Our collaboration with Globex simplified our fertilizer imports. Their team understands our requirements and delivers ahead of schedule',
    image: 'https://framerusercontent.com/images/87UnUkLH4HYNIwP3UibsgzA1pJs.jpg?scale-down-to=2048',
    type: 'image',
  },
  {
    id: 3,
    name: 'Mohammed Siddiqui',
    company: 'BayCem Industries (Bangladesh)',
    text: 'Working with Globex feels like working with an in-house partner. They truly go beyond being just a supplier.',
    image: 'https://framerusercontent.com/images/q2mVMwhsqUNlltorVfOs9gTlXKA.jpg?scale-down-to=1024',
    type: 'text',
  },
];

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full py-14 md:py-20 px-5 md:px-10 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading and subcopy */}
        <div className="mb-16 text-center space-y-6">
          {/* Eyebrow with icon */}
          <div
            className={`inline-flex items-center gap-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <FaHeart className="text-zinc-500 text-sm" />
            <span className="text-sm text-zinc-500 font-medium">Testimonials</span>
          </div>

          {/* Title with word animation */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900">
            <AnimatedWords text="What Our Partners Say" delayOffset={3} />
          </h2>

          {/* Subtitle */}
          <p
            className={`text-base md:text-lg text-zinc-600 max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Across continents and industries, our partners trust Globex to deliver
            excellence, consistency, and value — every single time.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (testimonial.type === 'image') {
    return (
      <div
        className="relative rounded-lg overflow-hidden h-full min-h-[400px] group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {/* Background Image */}
        <Image
          fill
          src={testimonial.image}
          alt={testimonial.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isHovered ? 'bg-black/50' : ''
            }`}
        />

        {/* Content */}
        <div className="relative h-full p-8 flex flex-col justify-between text-white">
          <div className="space-y-4">
            <FaQuoteLeft className="text-2xl text-white/90 rotate-180" />
            <p className="text-lg leading-relaxed">{testimonial.text}</p>
          </div>

          <div className="space-y-1">
            <p className="font-medium text-white">{testimonial.name}</p>
            <p className="text-sm text-white/80">{testimonial.company}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative rounded-lg border border-zinc-200 bg-zinc-50 p-4 md:p-8 h-full min-h-[400px] flex flex-col justify-between overflow-hidden group hover:shadow-lg transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Wave Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("https://framerusercontent.com/images/N9GeBa0CRBIhhvb9pYLnIeWF4gQ.svg?width=200&height=120")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '20px',
          backgroundPosition: 'left top',
        }}
      />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        <FaQuoteLeft className="text-2xl text-zinc-900 rotate-180" />
        <p className="text-lg leading-relaxed text-zinc-900">{testimonial.text}</p>

        <div className="flex-1 space-y-1">
          <p className="font-medium text-zinc-500">{testimonial.name}</p>
          <p className="text-sm text-zinc-500">{testimonial.company}</p>
        </div>

        <div className="w-full max-h-32 rounded-lg overflow-hidden shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;