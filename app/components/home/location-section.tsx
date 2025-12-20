"use client";

import { LocationCard } from "./location-card";
import { AnimatedWords } from "@/components/animated-words";

export default function Locations() {
    return (
        <section id="locations" className="py-14 md:py-20 bg-white">
            <div className="mx-auto container px-5">
                {/* Heading */}
                <div className="mb-16 text-center space-y-3 sticky top-20">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl lg:font-bold font-semibold">
                        <AnimatedWords text="Our Locations" delayOffset={3} />
                    </h2>
                    <p className="mx-auto max-w-2xl text-zinc-500">
                        Our location in one of the world&apos;s most connected business hubs
                        allows us to bridge continents — ensuring faster, smarter, and more
                        reliable global supply solutions.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 lg:grid-cols-2 bg-gradient-to-b from-transparent to-80% to-white relative z-2">
                    <div className="lg:mb-24">
                        <LocationCard
                            image="/assets/images/gHyY0mRRJNwboJLapOb9iXzjE8.jpg"
                            title="Dubai, UAE"
                            subtitle="Goldcrest Executive Tower, JLT"
                        />
                    </div>

                    <div className="lg:mt-24">
                        <LocationCard
                            image="/assets/images/OUWc6x0IgTmYIMc63Ql8n8qbn4.jpg"
                            title="India, Multiple Cities"
                            subtitle="Contact for specific locations"
                            offset={true}
                        />
                    </div>

                    <div className="lg:mb-24">
                        <LocationCard
                            image="/assets/images/J5Lm8XWEBWC89haui6Z54FLbpiY.jpg"
                            title="Bangladesh, Dhaka"
                            subtitle="Contact for specific locations"
                        />
                    </div>

                    <div className="lg:mt-24">
                        <LocationCard
                            image="/assets/images/K65oslhAZUfYFzRGauRt47ifwlg.jpg"
                            title="Oman, Muscat"
                            subtitle="Contact for specific locations"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
