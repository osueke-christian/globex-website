import Hero from "./components/home/hero";
import About from "./components/home/about";
import CoreBusinessesSection from "./components/home/core-business-section";
import Locations from "./components/home/location-section";
// import ImageBreaker2 from "./components/home/image-breaker2";
// import ImageBreaker3 from "./components/home/image-breaker-3";
import ImageBreaker from "./components/home/image-breaker1";
import GallerySection from "./components/home/gallery-section";
import TestimonialsSection from "./components/home/testimonal-section";
import FAQSection from "./components/home/faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative z-0">
      <Hero />
      <About />
      <ImageBreaker />
      <CoreBusinessesSection />
      <ImageBreaker imageSrc="https://framerusercontent.com/images/So0bwy2oxR7SWNdqnpmA8FUQlA.png" alt="A man doing a surf stunt" />
      <Locations />
      <ImageBreaker imageSrc="https://framerusercontent.com/images/fbe6u0taPVo0T6GI5CtocEso.png" />
      <GallerySection />
      <ImageBreaker imageSrc="https://framerusercontent.com/images/So0bwy2oxR7SWNdqnpmA8FUQlA.png" />
      <TestimonialsSection />
      <ImageBreaker imageSrc="https://framerusercontent.com/images/od0Qyj26gghxNjVtxRwcSq7oZU.jpg" />
      <FAQSection />
      <ImageBreaker imageSrc="https://framerusercontent.com/images/ADxhBrAY9KMAACeF4eA108mzzkQ.png" />
    </div>
  );
}
