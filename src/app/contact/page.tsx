import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Book Appointment & Contact | Dr. Randeep Rana Saket",
  description:
    "Schedule an OPD consultation with Dr. Randeep Rana at Max Smart Super Speciality Hospital, Saket, New Delhi. Call +91 98765 43210 or book online.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        badge="OPD Consultation & Booking"
        title="Schedule Your OPD Appointment"
        subtitle="Book an in-person consultation with Dr. Randeep Rana, MD, DM (AIIMS New Delhi) at Max Smart Super Speciality Hospital, Saket."
        breadcrumbs={[{ label: "Contact & Booking" }]}
      />

      <ContactSection />

      <CtaBanner />
    </div>
  );
}
