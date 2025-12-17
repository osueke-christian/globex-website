"use client";

import { LocationCard } from "./location-card";
import { AnimatedWords } from "@/components/animated-words";

export default function Locations() {
    return (
        <section id="locations" className="py-14 md:py-20 bg-white">
            <div className="mx-auto max-w-6xl px-5">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        <AnimatedWords text="Our Locations" delayOffset={3} />
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
                        Our location in one of the world&apos;s most connected business hubs
                        allows us to bridge continents — ensuring faster, smarter, and more
                        reliable global supply solutions.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2">
                    <LocationCard
                        image="https://framerusercontent.com/images/gHyY0mRRJNwboJLapOb9iXzjE8.jpg"
                        title="Dubai, UAE"
                        subtitle="Goldcrest Executive Tower, JLT"
                    />

                    <LocationCard
                        image="https://framerusercontent.com/images/OUWc6x0IgTmYIMc63Ql8n8qbn4.jpg"
                        title="India, Multiple Cities"
                        subtitle="Contact for specific locations"
                    />

                    <LocationCard
                        image="https://framerusercontent.com/images/J5Lm8XWEBWC89haui6Z54FLbpiY.jpg"
                        title="Bangladesh, Dhaka"
                        subtitle="Contact for specific locations"
                    />

                    <LocationCard
                        image="https://framerusercontent.com/images/K65oslhAZUfYFzRGauRt47ifwlg.jpg"
                        title="Oman, Muscat"
                        subtitle="Contact for specific locations"
                    />
                </div>
            </div>
        </section>
    );
}
