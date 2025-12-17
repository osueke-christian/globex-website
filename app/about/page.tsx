
import HeroImageBreaker from "@/app/components/about/image-breaker1";
import ImageBreaker from "@/app/components/home/image-breaker1";
import FAQSection from "@/app/components/home/faq";
import AboutSection from "../components/about/about-section";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroImageBreaker />
            <AboutSection />
            <ImageBreaker imageSrc="https://framerusercontent.com/images/EFdqZTdB3YnaOaMFlhfDRfuU.jpg" />
            <FAQSection />
            <ImageBreaker imageSrc="https://framerusercontent.com/images/ADxhBrAY9KMAACeF4eA108mzzkQ.png" />
        </div>
    );
}
