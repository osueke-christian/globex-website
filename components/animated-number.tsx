import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function AnimatedNumber({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    const numericValue = parseInt(value.replace('+', ''), 10);
    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, {
        stiffness: 100,
        damping: 20,
    });
    const symbol = value !== numericValue.toString() ? value.slice(-1) : '';
    const displayValue = useTransform(spring, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            motionValue.set(numericValue);
        }
    }, [isInView, numericValue, motionValue]);

    return (
        <span ref={ref}>
            <motion.span>
                {displayValue}
            </motion.span>
            {symbol}
        </span>
    );
}
