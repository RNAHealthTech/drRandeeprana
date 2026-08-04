import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Randeep Rana | Expert Gastroenterologist, Hepatologist & Pancreatologist in Delhi",
  description:
    "Dr. Randeep Rana — AIIMS-trained Consultant Gastroenterologist, Hepatologist & Pancreatologist in New Delhi. Expert in Advanced Endoscopy, EUS, ERCP, Liver Disease & Pancreatitis. Book an appointment today.",
  keywords: [
    "Gastroenterologist Delhi",
    "Hepatologist New Delhi",
    "Pancreatologist",
    "Advanced Endoscopy Specialist",
    "EUS ERCP Expert",
    "Liver Disease Treatment",
    "Pancreatitis Treatment Delhi",
    "Best Gastroenterologist Saket",
    "Fatty Liver Treatment Delhi",
    "Cirrhosis Specialist",
    "Inflammatory Bowel Disease Treatment",
    "Colonoscopy Delhi",
    "Gastroenterology Consultation Delhi",
    "YourGutDoc",
  ],
  authors: [{ name: "Dr. Randeep Rana" }],
  openGraph: {
    title: "Dr. Randeep Rana | Expert Gastroenterologist, Hepatologist & Pancreatologist in Delhi",
    description:
      "Dr. Randeep Rana — AIIMS-trained Consultant Gastroenterologist, Hepatologist & Pancreatologist in New Delhi. Expert in Advanced Endoscopy, EUS, ERCP, Liver Disease & Pancreatitis.",
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Randeep Rana",
  medicalSpecialty: [
    "Gastroenterology",
    "Hepatology",
    "Pancreatology",
    "Advanced Therapeutic Endoscopy",
  ],
  description:
    "AIIMS-trained Consultant Gastroenterologist, Hepatologist & Pancreatologist in New Delhi. Expert in EUS, ERCP, Liver Disease & Pancreatitis.",
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      "@type": "EducationalOrganization",
      name: "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
    },
  ],
  hospitalAffiliation: [
    {
      "@type": "Hospital",
      name: "Max Smart Superspeciality Hospital",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Press Enclave Marg, Saket",
        addressLocality: "New Delhi",
        postalCode: "110017",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Hospital",
      name: "GB Pant Institute of Postgraduate Medical Education and Research (GIPMER) & MAMC",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
    },
  ],
  sameAs: [
    "https://twitter.com/randeeprana90",
    "https://instagram.com/rana_randeep_yourgutdoc",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-slate-800 antialiased selection:bg-[#0A6EBB]/20 selection:text-[#0A6EBB] min-h-screen flex flex-col">
        {/* Persistent Sticky Navbar on ALL pages */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Persistent Footer on ALL pages */}
        <Footer />

        {/* Persistent Floating Action Widgets */}
        <FloatingWidgets />
      </body>
    </html>
  );
}
