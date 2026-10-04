import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Foodieree - Hyperlocal Food Discovery & 15s Sizzle Reels",
    short_name: "Foodieree",
    description:
      "India's first hyperlocal video food discovery platform. ₹0 Platform Fee & ₹0 Delivery Fee for Users, and 15-second authentic food reels.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F0",
    theme_color: "#C22918",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
