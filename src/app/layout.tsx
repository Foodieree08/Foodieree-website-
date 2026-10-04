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
  maximumScale: 5,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.foodieree.com"),
  title: {
    default: "Foodieree — Hyperlocal Food Discovery & 15s Sizzle Video Reels | ₹0 Platform Fee",
    template: "%s | Foodieree",
  },
  description:
    "India's first hyperlocal video food discovery & ordering platform. Discover authentic dishes through 15-second cooking reels with ₹0 Platform Fee & ₹0 Delivery Fee.",
  applicationName: "Foodieree",
  category: "Food & Drink",
  classification: "Hyperlocal Food Discovery & Delivery Platform",
  keywords: [
    "Foodieree",
    "Food Reels",
    "15s Sizzle Video Menu",
    "Hyperlocal Food Discovery",
    "Zero Commission Food Delivery",
    "Zero Platform Fee",
    "Zero Delivery Fee",
    "Patna Food Delivery",
    "Bihar Food Tech",
    "IIT Patna Startup",
    "FasterCapital Incubation",
    "Cloud Kitchen OS",
    "Instant UPI Rider Payouts",
    "Mood Based Restaurant Discovery",
    "Food Discovery App",
    "Local Street Food Reels",
    "Restaurant Partner Portal",
    "Food Creator Monetization",
  ],
  authors: [
    { name: "Foodieree Technologies Private Limited", url: "https://www.foodieree.com" },
  ],
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
      { url: "/fav.png", type: "image/png" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "https://www.foodieree.com",
  },
  openGraph: {
    title: "Foodieree — Hyperlocal Food Discovery & 15s Sizzle Video Reels",
    description:
      "Watch authentic 15-second video reels of sizzling woks and tandoors. Order with ₹0 Platform Fee and ₹0 Delivery Fee within 10 km.",
    url: "https://www.foodieree.com",
    siteName: "Foodieree",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Foodieree — Hyperlocal Food Discovery & 15s Sizzle Video Reels",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodieree — Hyperlocal Food Discovery & 15s Sizzle Video Reels",
    description:
      "Watch live cooking reels from neighborhood kitchens. ₹0 Platform Fee for kitchens, ₹0 Delivery Fee for food lovers.",
    site: "@foodieree",
    creator: "@foodieree",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Patna, Bihar, India",
    "geo.position": "25.6093;85.0543",
    "ICBM": "25.6093, 85.0543",
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
        "@id": "https://www.foodieree.com/#organization",
        "name": "Foodieree Technologies Private Limited",
        "legalName": "FOODIEREE TECHNOLOGIES PRIVATE LIMITED",
        "url": "https://www.foodieree.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.foodieree.com/android-chrome-512x512.png",
          "width": 512,
          "height": 512
        },
        "email": "info@foodieree.com",
        "telephone": "+918102377508",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+918102377508",
            "contactType": "customer service",
            "email": "info@foodieree.com",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi"]
          }
        ],
        "sameAs": [
          "https://www.instagram.com/foodieree/?hl=en",
          "https://www.linkedin.com/company/106590228/",
          "https://www.facebook.com/profile.php?id=61581905852579",
          "https://fastercapital.com/incubation-pending/foodieree.html"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Roshanbihar, Bailey Road, D/C21/0, Danapur, Danapur Bazar, Dinapur-cum-Khagaul",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "801503",
          "addressCountry": "IN"
        },
        "founder": {
          "@type": "Organization",
          "name": "Team Foodieree",
          "affiliation": {
            "@type": "EducationalOrganization",
            "name": "Indian Institute of Technology (IIT) Patna"
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.foodieree.com/#website",
        "url": "https://www.foodieree.com",
        "name": "Foodieree",
        "description": "Hyperlocal Food Discovery & 15-Second Sizzle Video Reels with ₹0 Platform Fee & ₹0 Delivery Fee",
        "publisher": {
          "@id": "https://www.foodieree.com/#organization"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.foodieree.com/#customer-app",
        "name": "Foodieree Customer App",
        "operatingSystem": "Android",
        "applicationCategory": "LifestyleApplication",
        "description": "Hyperlocal food discovery via authentic 15-second food reels. ₹0 Platform Fee and ₹0 Delivery Fee.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        },
        "url": "https://play.google.com/store/apps/details?id=com.foodieree.customer"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.foodieree.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Foodieree?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Foodieree is a breakthrough hyperlocal food discovery and ordering platform powered by authentic 15-second food reels. It bridges the gap between mouth-watering food visuals online and direct ordering from local kitchens, street vendors, and heritage restaurants within a 10 km radius."
            }
          },
          {
            "@type": "Question",
            "name": "How does the ₹0 Platform Fee & ₹0 Delivery Fee work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike traditional aggregators that charge sneaky platform fees and heavy delivery surcharges to customers, Foodieree provides ₹0 Platform Fee and ₹0 Delivery Fee for users, ensuring you pay only for your food with zero hidden markups."
            }
          },
          {
            "@type": "Question",
            "name": "Can local restaurants and street vendors join for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Any restaurant, cloud kitchen, sweet shop, or street food cart can register on the Foodieree Restaurant Partner portal for 100% free with 0% onboarding fees, gaining organic video reach, targeted promotions, and in-app advertising."
            }
          },
          {
            "@type": "Question",
            "name": "Do food creators and reviewers earn money?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Foodieree features a dedicated creator monetization program. Food creators and vloggers earn up to 2% commission on every dish ordered directly through their authentic 15-second food reels."
            }
          },
          {
            "@type": "Question",
            "name": "What are Mood-Based Restaurant Visits & Dine-in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Beyond doorstep delivery, Foodieree allows food lovers to discover nearby restaurants tailored to their exact mood—including family dinners, romantic dates, business meetings, or friends' party spots within a 10 km radius."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Foodieree available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Foodieree was founded in Patna (Bihar) and is actively operating and scaling across Bihar and top Indian culinary hubs."
            }
          }
        ]
      },
      {
        "@type": "SiteNavigationElement",
        "name": ["Food Reels", "Comparison", "Our Story", "FAQs", "Contact"],
        "url": [
          "https://www.foodieree.com/#reels",
          "https://www.foodieree.com/#ecosystem",
          "https://www.foodieree.com/#story",
          "https://www.foodieree.com/#faq",
          "https://www.foodieree.com/contact"
        ]
      }
    ]
  };

  return (
    <html
      lang="en-IN"
      className={`${jakarta.variable} ${outfit.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/fav.png" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
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
