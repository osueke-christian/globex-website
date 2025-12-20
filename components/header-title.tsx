import { ReactNode } from "react";
import { AnimatedWords } from "./animated-words";


export default function HeaderTitle({ children, isVisible, title, description, eyebrow }: { children: ReactNode, isVisible: boolean, title: string, description: ReactNode, eyebrow?: ReactNode }) {

    return (
        <div className="space-y-3">
            {
                children && (
                    <div
                        className={`inline-flex items-center gap-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        {children}
                    </div>

                )
            }
            <h2 className="text-4xl md:text-5xl lg:text-7xl lg:font-bold font-semibold text-zinc-900">
                <AnimatedWords text="What Our Partners Say" delayOffset={3} />
            </h2>

            <p
                className={`text-base md:text-lg text-zinc-500 max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
            >
                {description}
            </p>
        </div>
    )
}