"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AnimatedWords } from '@/components/animated-words';

interface ContactCard {
  id: number;
  number: string;
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
}

const contactCards: ContactCard[] = [
  {
    id: 1,
    number: '01',
    icon: <Phone className="w-6 h-6 text-gray-500" />,
    title: 'Call us on',
    content: '+971-42765747',
    link: 'tel:+97142765747',
  },
  {
    id: 2,
    number: '02',
    icon: <Mail className="w-6 h-6 text-gray-500" />,
    title: 'Email us at',
    content: 'marketingglobal@globexinternational.in',
    link: 'mailto:marketingglobal@globexinternational.in',
  },
  {
    id: 3,
    number: '03',
    icon: <MapPin className="w-6 h-6 text-gray-500" />,
    title: 'Visit us at',
    content: '611, Goldcrest Executive Tower Cluster C, JLT, Dubai, UAE',
    link: 'https://www.google.com/maps',
  },
];

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section ref={sectionRef} className="w-full py-14 md:py-20 px-5 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div
            className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <Mail className="text-gray-500 text-sm w-4 h-4" />
            <span className="text-sm text-gray-500 font-medium">Contact</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <AnimatedWords text="We'd love to" className='text-gray-400' delayOffset={3} />
              <br />
            <AnimatedWords text="hear from you" className='text-gray-900' delayOffset={3} />
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {contactCards.map((card, index) => (
            <ContactCardComponent
              key={card.id}
              card={card}
              delay={index * 150}
            />
          ))}
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="relative rounded-lg border border-gray-200 bg-gray-50 p-8 md:p-12 overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `url("https://framerusercontent.com/images/N9GeBa0CRBIhhvb9pYLnIeWF4gQ.svg?width=200&height=120")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '20px',
                backgroundPosition: 'left top',
              }}
            />

            <div className="relative z-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please type your message here"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative h-[400px] lg:h-full min-h-[500px] rounded-lg overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.1 }}
              animate={isImageInView ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="w-full h-full"
            >
              <Image
                src="https://framerusercontent.com/images/mzzQHkOVTecC4v0J6841vCK8Ws.jpg"
                alt="Surfer cleaning Surf board"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  card: ContactCard;
  delay: number;
}

const ContactCardComponent: React.FC<ContactCardProps> = ({ card, delay }) => {
  return (
    <div
      className="relative rounded-lg border border-gray-200 bg-gray-50 p-6 overflow-hidden transition-all duration-700 hover:shadow-lg"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("https://framerusercontent.com/images/N9GeBa0CRBIhhvb9pYLnIeWF4gQ.svg?width=200&height=120")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '20px',
          backgroundPosition: 'left top',
        }}
      />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-4">
          {card.icon}
          <span className="text-sm text-gray-500 font-medium">{card.number}</span>
        </div>

        <h4 className="text-2xl font-bold text-gray-900">
          {card.title.split(' ').map((word, i) => (
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

        <a
          href={card.link}
          className="text-base text-gray-900 hover:text-gray-600 transition-colors inline-block"
          rel="noopener noreferrer"
          target={card.link.startsWith('http') ? '_blank' : undefined}
        >
          {card.content}
        </a>
      </div>
    </div>
  );
};

export default ContactSection;