import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#C22918",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://foodieree.com"),
  title: {
    default: "Foodieree — Hyperlocal Food Discovery & 15s Sizzle Video Reels",
    template: "%s | Foodieree",
  },
  description:
    "India's first hyperlocal video food discovery & ordering platform. Discover authentic dishes through 15-second cooking reels. ₹0 Platform Fee for Kitchens, ₹0 Delivery Fee for Diners.",
  keywords: [
    "Foodieree",
    "Food Reels",
    "Food Discovery App",
    "Zero Commission Food Delivery",
    "Hyperlocal Food App",
    "Patna Food Delivery",
    "Bihar Food Tech",
    "IIT Patna Startup",
    "FasterCapital Incubation",
    "Cloud Kitchen OS",
    "Instant UPI Rider Payouts",
    "15s Sizzle Video Menu",
  ],
  authors: [{ name: "Foodieree Technologies Private Limited", url: "https://foodieree.com" }],
  creator: "Foodieree Technologies Private Limited",
  publisher: "Foodieree Technologies Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "https://foodieree.com",
  },
  openGraph: {
    title: "Foodieree — Hyperlocal Food Discovery & 15s Sizzle Video Reels",
    description:
      "Watch 15-second authentic video reels of sizzling woks and tandoors. Order with ₹0 Platform Fee and ₹0 Delivery Fee within 10 km.",
    url: "https://foodieree.com",
    siteName: "Foodieree",
    images: [
      {
        url: "/images/hero_food_reel.jpg",
        width: 1200,
        height: 630,
        alt: "Foodieree 15s Food Reels",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodieree — Hyperlocal Food Discovery & 15s Sizzle Video Reels",
    description:
      "Watch live cooking reels from neighborhood kitchens. ₹0 Platform Fee for kitchens, ₹0 Delivery Fee for food lovers.",
    images: ["/images/hero_food_reel.jpg"],
    creator: "@foodieree",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://foodieree.com/#organization",
        "name": "Foodieree Technologies Private Limited",
        "url": "https://foodieree.com",
        "logo": "https://foodieree.com/images/logo.jpg",
        "email": "info@foodieree.com",
        "sameAs": [
          "https://www.instagram.com/foodieree/?hl=en",
          "https://www.linkedin.com/company/106590228/",
          "https://www.facebook.com/profile.php?id=61581905852579",
          "https://fastercapital.com/incubation-pending/foodieree.html"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ROSHANBIHAR, BAILEY ROAD, D/C21/0, DANAPUR",
          "addressLocality": "Danapur Bazar, Dinapur-Cum-Khagaul, Patna",
          "addressRegion": "Bihar",
          "postalCode": "801503",
          "addressCountry": "IN"
        },
        "founder": {
          "@type": "Person",
          "name": "Kanhaiya",
          "affiliation": "Indian Institute of Technology (IIT) Patna"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Foodieree Customer App",
        "operatingSystem": "Android",
        "applicationCategory": "LifestyleApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        },
        "url": "https://play.google.com/store/apps/details?id=com.foodieree.customer"
      },
      {
        "@type": "WebSite",
        "@id": "https://foodieree.com/#website",
        "url": "https://foodieree.com",
        "name": "Foodieree",
        "publisher": {
          "@id": "https://foodieree.com/#organization"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${outfit.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F7F3EB] text-[#12100E] selection:bg-[#C22918] selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
