'use client';

import Image from 'next/image';
import { Product } from '@/data/commodities';
import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  overlayColor?: string;
}

const ProductCard = ({ product, overlayColor }: ProductCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle opening the card
  const handleOpen = () => {
    if (!isOpen) setIsOpen(true);
  };

  // Function to handle closing the card
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div
      className="relative h-full w-full rounded-2xl overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={product.imageSrc}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? '100%' : 'auto',
          backgroundColor: isOpen ? (overlayColor || 'rgba(0, 0, 0, 0.8)') : 'rgba(0, 0, 0, 0.8)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn("absolute bottom-0 left-0 right-0 w-full p-3 flex flex-col z-10 overflow-hidden rounded-2xl", !isOpen && "cursor-pointer")}
        onClick={handleOpen}
        // Ensure the overlay fills the rounded corners when full
        style={isOpen ? { borderRadius: '16px' } : {}}
      >
        <div className="w-full shrink-0">
          <div className="flex justify-between items-center w-full mb-2">
            <p className="text-white text-xl font-medium leading-7">
              {product.name}
            </p>

            <button
              onClick={isOpen ? handleClose : handleOpen}
              className={cn("text-white p-1 hover:bg-white/10 rounded-full transition-colors", isOpen && "cursor-pointer")}
              aria-label={isOpen ? "Close description" : "View description"}
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <ArrowRight size={24} />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <p
                className="text-white pt-2 pb-1"
                style={{
                  fontSize: '15px',
                  lineHeight: '26px',
                  fontFamily: '"Geist", "Geist Placeholder", sans-serif'
                }}
              >
                {product.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProductCard;