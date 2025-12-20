// app/data/core-businesses.ts
export type CoreBusiness = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export const coreBusinesses: CoreBusiness[] = [
  {
    title: "Cementiteous Commodities",
    description:
      "Essential materials for cement production and construction projects worldwide",
    image:
      "/assets/images/74OM0YlxpnupUMt0MBUpEAfVUUg.png",
  },
  {
    title: "Metals & Industrial Raw Materials",
    description:
      "High-quality essential inputs used for efficient metal production and advanced industrial manufacturing.",
    image:
      "/assets/images/En9UXnRIQyPZjbN4WsdLtOIq18.png",
    reverse: true,
  },
  {
    title: "Fertilizer",
    description:
      "Essential components for agricultural fertilizer production and soil enhancement",
    image:
      "/assets/images/0DWmCbOy9sY1wA4JPhEXTOmzOUY.png",
  },
];
