"use client";

import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';


const Footer: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="relative bg-zinc-900 text-white rounded-t-xl md:rounded-none overflow-hidden" style={{ fontSize: "14px" }}>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="grid-background-container">
          {mounted && [...Array(200)].map((_, i) => (
            <div
              key={i}
              className="grid-background-item"
              style={{
                animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
                animationDuration: `${(3 + Math.random() * 4).toFixed(2)}s`
              }}
            />
          ))}
        </div>
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1fr] gap-12 mb-12 lg:mb-6">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="w-28">
              <Image
                width={252}
                height={153}
                src="/assets/images/AbzZXWoIidWfAiHiTZRt3whmbI.png"
                alt="Globex International"
                className="w-full h-auto"
              />
            </div>
            <p className=" text-zinc-200 leading-relaxed">
              A global commodity trading company specializing in petroleum, construction materials, energy, fertilizers, and agro commodities. Trusted since 2007.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF className="text-white w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-white w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="text-white w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn className="text-white w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-medium mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <p>
                <a href="tel:+971-42765747" className=" text-zinc-200 hover:text-white">+971-42765747</a>
              </p>
              <p>
                <a href="mailto:marketingglobal@globexinternational.in" className="text-zinc-200 hover:text-white">marketingglobal@globexinternational.in</a>
              </p>
              <p className=" text-zinc-200 leading-relaxed">
                611, Goldcrest Executive Tower,<br />
                Cluster C, JLT, Dubai.
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-medium mb-6">Company</h3>
            <div className="space-y-3 text-zinc-200 hover:text-white">
              <a
                href="/"
                className="block transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/products"
                className="block transition-colors duration-200"
              >
                Products
              </a>
              <a
                href="/about"
                className="block transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="block transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-medium mb-6">Legal</h3>
            <div className="space-y-3 text-zinc-200 hover:text-white">
              <a
                href="#"
                className="block transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="block transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 lg:pt-0 border-t lg:border-transparent border-white/10">
          <div className="flex items-center gap-2 text-zinc-200">
            <span> &copy; {new Date().getFullYear()} Globex. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;