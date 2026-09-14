import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/lib/content";
import { SkipLink } from "@/components/skip-link";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drmayareynolds.com"),
  title: {
    default: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy Santa Monica, CA",
    template: "%s | Dr. Maya Reynolds, PsyD",
  },
  description:
    "Warm, evidence-based therapy for adults in Santa Monica, CA & secure California telehealth. Specializing in anxiety, panic, trauma recovery (EMDR), and burnout.",
  keywords: [
    "Anxiety Therapy Santa Monica",
    "Trauma Therapist Santa Monica",
    "EMDR Santa Monica",
    "Burnout Therapy California",
    "Clinical Psychologist Santa Monica",
    "Dr. Maya Reynolds PsyD",
    "Panic Attack Counseling Santa Monica",
    "Telehealth Therapy California",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  creator: "Dr. Maya Reynolds, PsyD",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drmayareynolds.com",
    siteName: "Dr. Maya Reynolds, PsyD — Clinical Psychologist",
    title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy Santa Monica",
    description:
      "Compassionate, evidence-based therapy in Santa Monica, CA. Helping thoughtful adults move through anxiety, trauma, and burnout to feel calm again.",
    images: [
      {
        url: "/images/maya-reynolds.jpg",
        width: 800,
        height: 1000,
        alt: "Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy Santa Monica",
    description:
      "Compassionate, evidence-based therapy in Santa Monica, CA & California telehealth.",
    images: ["/images/maya-reynolds.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness / Psychologist JSON-LD Structured Data for Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Psychologist", "MedicalBusiness"],
    name: siteContent.practitioner.name + ", " + siteContent.practitioner.credentials,
    description: siteContent.hero.subheading,
    url: "https://drmayareynolds.com",
    telephone: siteContent.practitioner.contact.phone,
    email: siteContent.practitioner.contact.email,
    image: "https://drmayareynolds.com/images/maya-reynolds.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.practitioner.address.street,
      addressLocality: siteContent.practitioner.address.city,
      addressRegion: siteContent.practitioner.address.state,
      postalCode: siteContent.practitioner.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0195,
      longitude: -118.4912,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Santa Monica",
      },
      {
        "@type": "State",
        name: "California",
      },
    ],
    medicalSpecialty: ["Psychiatric", "Clinical Psychology"],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-cream text-charcoal font-sans flex flex-col selection:bg-sage-200 antialiased">
        {/* Accessible Skip Link */}
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
