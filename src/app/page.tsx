import React from "react";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import WhyChoose from "@/components/WhyChoose";
import Treatments from "@/components/Treatments";
import PatientJourney from "@/components/PatientJourney";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <About />
      <Expertise />
      <WhyChoose />
      <Treatments />
      <PatientJourney />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
      <ContactSection />
    </>
  );
}
