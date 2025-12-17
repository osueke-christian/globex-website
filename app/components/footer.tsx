"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const AnimatedCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const size = 43;
    const gap = 25;
    const totalSize = size + gap;
    const cols = Math.ceil(canvas.width / totalSize);
    const rows = Math.ceil(canvas.height / totalSize);

    interface Box {
      x: number;
      y: number;
      opacity: number;
      fading: boolean;
    }

    const boxes: Box[] = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        boxes.push({
          x: i * totalSize,
          y: j * totalSize,
          opacity: 0,
          fading: false,
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      boxes.forEach((box) => {
        // Random chance to start glowing (66% probability converted to per-frame chance)
        if (!box.fading && box.opacity === 0 && Math.random() < 0.008) {
          box.fading = true;
        }

        // Fade in
        if (box.fading && box.opacity < 1) {
          box.opacity += 0.02;
          if (box.opacity >= 1) {
            box.opacity = 1;
          }
        }

        // Fade out
        if (box.fading && box.opacity >= 1) {
          box.opacity -= 0.015;
          if (box.opacity <= 0) {
            box.opacity = 0;
            box.fading = false;
          }
        }

        // Draw box if it has opacity
        if (box.opacity > 0) {
          ctx.fillStyle = `rgba(50, 50, 50, ${box.opacity * 0.3})`;
          ctx.fillRect(box.x, box.y, size, size);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ borderRadius: 'inherit' }}
    />
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-zinc-900 text-white rounded-t-xl overflow-hidden">
      {/* Animated Canvas Background */}
      <div className="absolute inset-0">
        <AnimatedCanvas />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="w-40">
              <Image
                width={252}
                height={153}
                src="https://framerusercontent.com/images/AbzZXWoIidWfAiHiTZRt3whmbI.png?width=252&height=153"
                alt="Globex International"
                className="w-full h-auto"
              />
            </div>
            <p className=" text-gray-300 leading-relaxed">
              A global commodity trading company specializing in petroleum, construction materials, energy, fertilizers, and agro commodities. Trusted since 2007.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF className="text-white " />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-white " />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="text-white " />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn className="text-white " />
              </a>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-medium mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <p className=" text-gray-300">+971-42765747</p>
              <p className=" text-gray-300">marketingglobal@globexinternational.in</p>
              <p className=" text-gray-300 leading-relaxed">
                611, Goldcrest Executive Tower,<br />
                Cluster C, JLT, Dubai.
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-medium mb-6">Company</h3>
            <div className="space-y-3">
              <a
                href="/"
                className="block  text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/products"
                className="block  text-gray-300 hover:text-white transition-colors duration-200"
              >
                Products
              </a>
              <a
                href="/about"
                className="block  text-gray-300 hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="block  text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-medium mb-6">Legal</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block  text-gray-300 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="block  text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center gap-2  text-gray-300">
            <span> &copy; {new Date().getFullYear() } Globex. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;