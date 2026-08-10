import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Book Appointment & Contact | Dr. Randeep Rana Saket",
  description:
    "Schedule an OPD consultation with Dr. Randeep Rana at Max Smart Super Speciality Hospital, Saket, New Delhi. Call +91 95015 69493 or +91 77038 07941 or book online.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        badge="OPD Consultation & Booking"
        title="Schedule Your OPD Appointment"
        subtitle="Book an in-person consultation with Dr. Randeep Rana — MBBS (DMCH), MD (Dr. RMLH), DM & Advanced GI Endoscopy Fellow (AIIMS Delhi) at Max Smart Super Speciality Hospital, Saket, New Delhi."
        breadcrumbs={[{ label: "Contact & Booking" }]}
      />

      <ContactSection />

      <CtaBanner />
    </div>
  );
}
