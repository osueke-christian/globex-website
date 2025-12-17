import HeroImageBreaker from "@/app/components/contact/image-breaker1";
import ImageBreaker from "@/app/components/home/image-breaker1";
import FAQSection from "@/app/components/home/faq";
import ContactSection from "../components/contact/contact-section";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen relative z-0">
            <HeroImageBreaker />
            <ContactSection />
            <ImageBreaker imageSrc="https://framerusercontent.com/images/EAjc9uoARyH2d4XDCRFAqXiG8.png" />
            <FAQSection />
            <ImageBreaker imageSrc="https://framerusercontent.com/images/ADxhBrAY9KMAACeF4eA108mzzkQ.png" />
        </div>
    );
}
