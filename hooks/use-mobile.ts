
import { useEffect, useState } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return isMobile;
};


export function useIsLargeScreen(breakpoint: number = 1024): boolean {
    const [isLarge, setIsLarge] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth >= breakpoint;
        }
        return false;
    });

    useEffect(() => {
        const handleResize = () => {
            setIsLarge(window.innerWidth >= breakpoint);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint]);

    return isLarge;
}
