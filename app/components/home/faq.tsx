"use client";

import { AnimatedWords } from '@/components/animated-words';
import { CircleQuestionMarkIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'What does Globex Worldwide DMCC do?',
    answer:
      'Globex is a global trading and supply company dealing in construction materials, fertilizers, energy resources, and agro commodities. We connect producers and industries across Asia, the Middle East, and Africa.',
  },
  {
    id: 2,
    question: 'What products does Globex supply?',
    answer:
      'We supply a comprehensive range of products including petroleum products, construction materials like cement and aggregates, various types of fertilizers, energy resources, and agricultural commodities. Our diverse portfolio ensures we can meet the varied needs of our global partners.',
  },
  {
    id: 3,
    question: 'How does Globex ensure product quality?',
    answer:
      'We maintain strict quality control measures throughout our supply chain, partnering only with certified suppliers and conducting regular quality inspections. Our commitment to excellence ensures that every product meets international standards and client specifications.',
  },
  {
    id: 4,
    question: 'Does Globex handle logistics and shipping?',
    answer:
      'Yes, we provide comprehensive logistics solutions including shipping coordination, customs clearance, and delivery tracking. Our experienced team manages the entire supply chain to ensure timely and secure delivery of products to your location.',
  },
  {
    id: 5,
    question: 'What makes Globex different from other trading companies?',
    answer:
      'Our 17+ years of experience, extensive global network, and commitment to reliability set us apart. We focus on building long-term partnerships, offering personalized service, and maintaining transparency throughout every transaction. Our track record speaks for itself.',
  },
];

const FAQSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number>(0);

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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="w-full py-14 md:py-20 px-5 md:px-10 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading and subcopy */}
        <div className="mb-16 text-center space-y-6">
          {/* Eyebrow with icon */}
          <div
            className={`inline-flex items-center gap-2 t  ransition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <CircleQuestionMarkIcon className="text-zinc-500 text-sm" />
            <span className="text-sm text-zinc-500 font-medium">FAQs</span>
          </div>

          {/* Title with word animation */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900">
            <AnimatedWords text="Got Questions" delayOffset={3} />
          </h2>

          {/* Subtitle */}
          <p
            className={`text-base md:text-lg text-zinc-600 max-w-2xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Everything you need to know before you grab your board and hit the waves.
          </p>
        </div>

        {/* Accordion */}
        <div
          className={`space-y-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleAccordion(index)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface AccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  faq,
  isOpen,
  onToggle,
  delay,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className="border border-zinc-200 rounded-lg bg-zinc-50 overflow-hidden transition-all duration-300 hover:shadow-md"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group focus:outline-none rounded-lg transition-all"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-zinc-900 pr-4">
          {faq.question}
        </span>

        {/* Icon with rotation animation */}
        <div
          className={`shrink-0 w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-135' : 'rotate-0'
            }`}
        >
          {/* Plus icon made with dividers */}
          <div className="relative w-4 h-4">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white rounded-full -translate-x-1/2" />
          </div>
        </div>
      </button>

      {/* Answer with smooth height animation */}
      <div
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div ref={contentRef} className="px-6 pb-6">
          {
            isOpen && (
              <p className="text-base text-zinc-600 leading-relaxed animate-onrender">{faq.answer}</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default FAQSection;