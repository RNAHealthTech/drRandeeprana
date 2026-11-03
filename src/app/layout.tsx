import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Randeep Rana | Consultant Gastroenterologist Saket New Delhi",
  description:
    "Dr. Randeep Rana — MBBS, MD (Internal Medicine), DM (Gastroenterology, AIIMS Delhi), Fellowship in Advanced GI Endoscopy (AIIMS Delhi). Consultant gastroenterologist at Max Smart Super Speciality Hospital, Saket, New Delhi.",
  keywords: [
    "Dr Randeep Rana",
    "Chronic liver disease",
    "Gastroenterologist Saket",
    "Max Smart Saket Gastroenterologist",
    "Advanced GI Endoscopist Delhi",
    "EUS ERCP Specialist Delhi",
    "Pancreatico Biliary Sciences",
    "Third Space Endoscopy POEM ESD",
    "Inflammatory Bowel Disease Specialist",
    "Portal Hypertension Cirrhosis Specialist",
    "AIIMS Gastroenterologist",
  ],
  authors: [{ name: "Dr. Randeep Rana" }],
  openGraph: {
    title: "Dr. Randeep Rana | Consultant Gastroenterologist Saket New Delhi",
    description:
      "Dr. Randeep Rana — MBBS, MD (Internal Medicine), DM (AIIMS Delhi), Fellowship in Advanced GI Endoscopy (AIIMS Delhi). Consultant gastroenterologist at Max Smart Super Speciality Hospital, Saket, New Delhi.",
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
    "Pancreatico-Biliary Sciences",
    "Advanced Therapeutic Endoscopist",
  ],
  description:
    "MBBS, MD (Internal Medicine), DM (Gastroenterology, AIIMS Delhi), Fellowship in Advanced GI Endoscopy (AIIMS Delhi). Consultant gastroenterologist at Max Smart Super Speciality Hospital, Saket, New Delhi.",
  identifier: {
    "@type": "PropertyValue",
    name: "Medical Council Registration",
    value: "Delhi Medical Council (DMC) Reg. No. 82691",
  },
  telephone: "+91-9643163941",
  email: "randeeprana90@gmail.com",
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      "@type": "EducationalOrganization",
      name: "ABVIMS & Dr Ram Manohar Lohia Hospital, New Delhi",
    },
    {
      "@type": "EducationalOrganization",
      name: "Dayanand Medical College & Hospital, Ludhiana",
    },
  ],
  hospitalAffiliation: [
    {
      "@type": "Hospital",
      name: "Max Smart Super Speciality Hospital",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Saket",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
