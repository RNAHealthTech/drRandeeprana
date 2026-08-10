import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Randeep Rana | Consultant Gastroenterology Saket New Delhi",
  description:
    "Dr. Randeep Rana — MBBS (DMCH), MD (Dr. RMLH), DM (Gastroenterology, AIIMS Delhi), Fellowship in Advanced GI Endoscopy (AIIMS Delhi). Consultant Gastroenterology at Max Smart Superspeciality Hospital, Saket, New Delhi.",
  keywords: [
    "Dr Randeep Rana",
    "Gastroenterologist Saket",
    "Max Smart Saket Gastroenterologist",
    "Advanced GI Endoscopy Delhi",
    "EUS ERCP Specialist Delhi",
    "Pancreatico Biliary Sciences",
    "Third Space Endoscopy POEM ESD",
    "Inflammatory Bowel Disease Specialist",
    "Portal Hypertension Cirrhosis Specialist",
    "AIIMS Gastroenterologist",
  ],
  authors: [{ name: "Dr. Randeep Rana" }],
  openGraph: {
    title: "Dr. Randeep Rana | Consultant Gastroenterology Saket New Delhi",
    description:
      "Dr. Randeep Rana — MBBS (DMCH), MD (Dr. RMLH), DM (AIIMS Delhi), Fellowship in Advanced GI Endoscopy (AIIMS Delhi). Consultant Gastroenterology at Max Smart Superspeciality Hospital, Saket, New Delhi.",
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
    "Advanced Therapeutic Endoscopy",
  ],
  description:
    "MBBS (DMCH), MD (Dr. RMLH), DM (Gastroenterology, AIIMS Delhi), Fellowship in Advanced GI Endoscopy (AIIMS Delhi). Consultant Gastroenterology at Max Smart Superspeciality Hospital, Saket, New Delhi.",
  telephone: "+91-9501569493",
  email: "randeeprana90@gmail.com",
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      "@type": "EducationalOrganization",
      name: "ABVIMS & Dr Ram Manohar Lohia Hospital (Dr RMLH), New Delhi",
    },
    {
      "@type": "EducationalOrganization",
      name: "Dayanand Medical College & Hospital (DMCH), Ludhiana",
    },
  ],
  hospitalAffiliation: [
    {
      "@type": "Hospital",
      name: "Max Smart Superspeciality Hospital",
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
        {/* Custom Modern Mouse Cursor Follower */}
        <CustomCursor />

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
