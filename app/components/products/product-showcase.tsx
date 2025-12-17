'use client';

import ProductCard from './product-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { PRODUCT_DATA, ProductCategory } from '@/data/commodities';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedWords } from '@/components/animated-words';


const CategorySection = ({ category }: { category: ProductCategory }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const staggerChildren: Variants = {
        visible: {
            transition: { staggerChildren: 0.1 },
        },
    };

    const handleScroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollLeft += direction === 'left' ? -300 : 300;
    };


    useEffect(() => {
        const updateScrollShadows = () => {
            const el = scrollRef.current;
            if (!el) return;

            setCanScrollLeft(el.scrollLeft > 10);
            setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
        };

        updateScrollShadows();
        const el = scrollRef.current;
        if (!el) return;

        el.addEventListener("scroll", updateScrollShadows);
        return () => el.removeEventListener("scroll", updateScrollShadows);
    }, []);

    return (
        <motion.section
            id={category.id}
            className="p-4 md:p-8 lg:p-12 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
                    <AnimatedWords text={category.title} delayOffset={3}  />
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                    {category.subtitle}
                </p>
            </div>

            <div className="relative">
                <motion.div
                    ref={scrollRef}
                    className="flex space-x-4 pb-4 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
                    variants={staggerChildren}
                >
                    {category.products.map((product) => (
                        <motion.div
                            key={product.name}
                            className="shrink-0 w-full max-w-80 h-96 snap-start" // Define item width for scroll snap
                            variants={sectionVariants} // Reuse for individual card animation
                        >
                            <ProductCard product={product} overlayColor={category.overlayColor} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Carousel Navigation (The circular arrows) */}
                <div className="hidden md:block pointer-events-none shadow-md mx-auto w-max p-2 rounded-full">
                    <div className="flex gap-4">
                        <Button
                            onClick={() => handleScroll('left')}
                            className="w-12 h-12 rounded-full cursor-pointer disabled:cursor-not-allowed bg-white shadow-lg flex items-center justify-center p-2 opacity-80 hover:opacity-100 transition pointer-events-auto"
                            aria-label={`Scroll left for ${category.title}`}
                            disabled={!canScrollLeft}
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </Button>

                        <Button
                            onClick={() => handleScroll('right')}
                            className="w-12 h-12 rounded-full cursor-pointer disabled:cursor-not-allowed bg-black shadow-lg flex items-center justify-center p-2 hover:opacity-90 transition pointer-events-auto"
                            aria-label={`Scroll right for ${category.title}`}
                            disabled={!canScrollRight}
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </Button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export function ProductShowcase() {
    return (
        <div className="bg-white py-10">
            {PRODUCT_DATA.map((category) => (
                <CategorySection key={category.id} category={category} />
            ))}
        </div>
    );
}