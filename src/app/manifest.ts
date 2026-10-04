import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Foodieree — Hyperlocal Food Discovery & 15s Sizzle Video Reels",
    short_name: "Foodieree",
    description:
      "India's first hyperlocal video food discovery & ordering platform. Discover authentic dishes through 15-second cooking reels with ₹0 Platform Fee & ₹0 Delivery Fee.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#FAF7F0",
    theme_color: "#C22918",
    categories: ["food", "lifestyle", "shopping"],
    lang: "en-IN",
    icons: [
      {
        src: "/fav.png",
        sizes: "209x191",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
