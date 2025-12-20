"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  return (
    <nav className="backdrop-blur-md bg-[#0f0f0f] text-sm border-b border-[rgba(9,9,9,0.1)] w-full sticky top-0 left-0 z-50">
      {/* progress bar */}
      <div className="w-full h-1 bg-white overflow-hidden">
        <div className="scroll-progress h-full bg-[#ff4f01]" />
      </div>
      <div className="container flex items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <Link href="/" className="h-12 w-32 relative z-50">
          <Image
            width={252}
            height={153}
            src="/assets/images/AbzZXWoIidWfAiHiTZRt3whmbI.png"
            alt="Brand Logo"
            className="object-cover w-full h-full"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <DesktopNavLink href="/">Home</DesktopNavLink>
          <DesktopNavLink href="/products">Products</DesktopNavLink>
          <DesktopNavLink href="/about">Why Us</DesktopNavLink>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block font-medium">
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 rounded-full bg-white text-[#111111] relative flex items-center justify-center hover:bg-zinc-100 transition-colors"
          >
            Get a Quote
            <span className="absolute -left-2 w-2 h-2 bg-[#090909] rounded-full"></span>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-10 h-10 gap-2 md:hidden z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block rounded-full origin-center"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block rounded-full origin-center"
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants as Variants}
            className="absolute top-full left-0 w-full bg-[#0f0f0f] border-b border-[rgba(255,255,255,0.1)] overflow-hidden md:hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-6">
              <div>
                <hr />
              </div>

              <Link
                href="/"
                className="text-white font-medium hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-white text-lg font-medium hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-white text-lg font-medium hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Why Us
              </Link>
              <Link
                href="/contact"
                className="w-full px-5 py-3 rounded-full bg-white text-[#111111] text-center font-medium hover:bg-zinc-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


const DesktopNavLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
  return (
    <Link href={href} className="flex flex-col text-white hover:text-zinc-500 h-6 overflow-hidden transition-colors hover:*:-translate-y-full">
      <span className="transition-all translate-y-0  duration-300"> {children} </span>
      <span className="transition-all translate-y-0 duration-300"> {children} </span>
    </Link>
  );
}