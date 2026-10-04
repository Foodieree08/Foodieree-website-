import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Partner Inquiries",
  description:
    "Get in touch with Foodieree Technologies. Reach our team for restaurant partner onboarding, creator collaborations, delivery rider partnerships, or customer assistance.",
  alternates: {
    canonical: "https://foodieree.com/contact",
  },
  openGraph: {
    title: "Contact Us & Partner Inquiries | Foodieree",
    description:
      "Connect with the Foodieree team in Patna. Partner as a restaurant kitchen, food creator, or delivery rider.",
    url: "https://foodieree.com/contact",
    type: "website",
    siteName: "Foodieree",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Foodieree",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Foodieree | Partner & Support Inquiries",
    description:
      "Reach out to Foodieree for restaurant onboarding, food creator partnerships, or rider support.",
    images: ["/twitter-image"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Foodieree Contact & Partner Inquiries",
    "url": "https://foodieree.com/contact",
    "description":
      "Contact page for Foodieree customer support, restaurant partnerships, creator collaborations, and delivery riders.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Foodieree Technologies Private Limited",
      "telephone": "+918102377508",
      "email": "info@foodieree.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Roshanbihar, Bailey Road, D/C21/0, Danapur, Danapur Bazar",
        "addressLocality": "Patna",
        "addressRegion": "Bihar",
        "postalCode": "801503",
        "addressCountry": "IN"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://foodieree.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact Us",
          "item": "https://foodieree.com/contact"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
