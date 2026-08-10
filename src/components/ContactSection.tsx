"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  SquarePen,
  Calendar,
} from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    condition: "Acidity / GERD",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F4F7F9] relative text-[#1C2936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
            Appointment & OPD Booking
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
            Book Your Consultation with <br className="hidden sm:inline" />
            <span className="text-[#6CB29D] italic">Dr. Randeep Rana</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Schedule an in-person OPD visit at Max Smart Super Speciality Hospital, Saket, New Delhi.
          </p>
        </div>

        {/* Main Grid: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#DDE6ED] shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-[#EBF5F2] text-[#6CB29D] flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#002C47]">Request OPD Appointment</h3>
                <p className="text-xs text-slate-500 font-light">Fill in your details for prompt clinical confirmation</p>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-[#002C47]">Appointment Request Received!</h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto font-light">
                  Thank you, <strong>{formData.name}</strong>. Our clinical team will contact you at <strong>{formData.phone}</strong> to confirm your OPD slot for <strong>{formData.date}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#002C47] text-white font-bold text-xs hover:bg-[#001D30] transition-all uppercase tracking-wider"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#002C47] uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDE6ED] focus:outline-none focus:border-[#6CB29D] text-sm text-[#1C2936] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#002C47] uppercase tracking-widest mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDE6ED] focus:outline-none focus:border-[#6CB29D] text-sm text-[#1C2936] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#002C47] uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDE6ED] focus:outline-none focus:border-[#6CB29D] text-sm text-[#1C2936] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#002C47] uppercase tracking-widest mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDE6ED] focus:outline-none focus:border-[#6CB29D] text-sm text-[#1C2936] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002C47] uppercase tracking-widest mb-2">
                    Primary Symptom / Service
                  </label>
                  <select
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DDE6ED] focus:outline-none focus:border-[#6CB29D] text-sm text-[#1C2936] transition-colors"
                  >
                    <option value="Acidity / GERD">Acidity / GERD / Heartburn</option>
                    <option value="Fatty Liver">Fatty Liver & Liver Disease</option>
                    <option value="Gastroscopy / Colonoscopy">Painless Endoscopy / Colonoscopy</option>
                    <option value="IBS / Abdominal Pain">IBS / Stomach Pain / Bloating</option>
                    <option value="ERCP / Jaundice">ERCP / Bile Duct Stones / Jaundice</option>
                    <option value="Pancreatitis Care">Acute / Chronic Pancreatitis Care</option>
                    <option value="GI Cancer Screening">GI Cancer Screening</option>
                    <option value="Second Opinion">Second Medical Opinion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002C47] uppercase tracking-widest mb-2">
                    Message / Medical Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your symptoms or existing test reports..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DDE6ED] focus:outline-none focus:border-[#6CB29D] text-sm text-[#1C2936] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-extrabold text-white bg-[#6CB29D] hover:bg-[#5BA897] transition-all shadow-md flex items-center justify-center gap-3 text-xs uppercase tracking-wider group"
                >
                  <span>Confirm Appointment Request</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Details & Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Hospital Contact Info Card */}
            <div className="bg-[#002C47] text-white p-8 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-xl font-serif font-bold border-b border-[#001D30] pb-4 text-white">
                Clinical Location & OPD Timings
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="h-9 w-9 rounded-full bg-white/10 text-[#6CB29D] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Max Smart Superspeciality Hospital</div>
                    <div className="text-slate-300 text-xs mt-0.5 font-light">
                      Saket, New Delhi, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="h-9 w-9 rounded-full bg-white/10 text-[#6CB29D] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">OPD Timings</div>
                    <div className="text-slate-300 text-xs mt-0.5 font-light">
                      Monday – Saturday: 9:00 AM – 6:00 PM
                    </div>
                    <div className="text-[#6CB29D] text-xs font-semibold mt-0.5">
                      Consultant Gastroenterology
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="h-9 w-9 rounded-full bg-white/10 text-[#6CB29D] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Direct Helpline</div>
                    <div className="flex flex-col gap-0.5">
                      <a href="tel:+919501569493" className="text-xs text-[#6CB29D] font-bold hover:underline">
                        +91 95015 69493
                      </a>
                      <a href="tel:+917703807941" className="text-xs text-[#6CB29D] font-bold hover:underline">
                        +91 77038 07941
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="h-9 w-9 rounded-full bg-white/10 text-[#6CB29D] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Email Contact</div>
                    <a href="mailto:randeeprana90@gmail.com" className="text-xs text-[#6CB29D] font-bold hover:underline">
                      randeeprana90@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://wa.me/919501569493?text=Hello%20Dr.%20Randeep%20Rana,%20I%20would%20like%20to%20book%20an%20OPD%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-full bg-[#6CB29D] text-white font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-[#5BA897] transition-colors shadow-md uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="tel:+919501569493"
                  className="py-3 px-4 rounded-full bg-white/10 text-white font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-white/20 transition-colors shadow-md uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4 text-[#6CB29D]" />
                  <span>Direct Call</span>
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-2 rounded-3xl border border-[#DDE6ED] shadow-sm overflow-hidden h-56">
              <iframe
                title="Max Smart Super Speciality Hospital Saket Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4746685818967!2d77.21200427618204!3d28.525421375723483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f75ff3ad59%3A0x6b772ad37e75bf1!2sMax%20Smart%20Super%20Speciality%20Hospital%2C%20Saket!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
