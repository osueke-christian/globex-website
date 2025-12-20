import { motion } from "framer-motion";
import { CardParallaxImage } from "./card-parallax-image";

export function LocationCard({
  image,
  title,
  subtitle,
  offset = false,
}: {
  image: string;
  title: string;
  subtitle: string;
  offset?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative space-y-5 rounded-lg border border-black/10 bg-neutral-50 p-2 md:p-4 max-w-[500px] mx-auto"
    >
      <CardParallaxImage src={image} alt={title} />

      <div className="space-y-3">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-sm text-zinc-500">{subtitle}</p>
      </div>

      {/* Wave background */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div
          className="h-full w-full rounded-lg"
          style={{
            backgroundImage:
              'url("/assets/images/N9GeBa0CRBIhhvb9pYLnIeWF4gQ.svg")',
            backgroundSize: "20px",
          }}
        />
      </div>
    </motion.div>
  );
}
