
import ImageBreaker from "@/app/components/home/image-breaker1";
import HeroSection from "../components/products/hero";
import { ProductShowcase } from "../components/products/product-showcase";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen relative z-0">
            <HeroSection />
            <ImageBreaker imageSrc="https://framerusercontent.com/images/ADxhBrAY9KMAACeF4eA108mzzkQ.png?width=1898&height=1267" />
            <ProductShowcase />
        </div>
    );
}
