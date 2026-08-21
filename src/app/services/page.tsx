import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import {
  Stethoscope,
  Activity,
  Heart,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Users,
  Compass,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gastroenterology Services | Dr. Randeep Rana — Advanced Endoscopy, Hepatology & Pancreatology in Delhi",
  description:
    "Dr. Randeep Rana offers comprehensive gastroenterology services including Advanced Endoscopy (EUS, ERCP), Hepatology, Pancreatology, IBD Care, and General GI consultations in New Delhi. Book an appointment.",
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Pancreatico-Biliary Sciences & Advanced ERCP",
      icon: Activity,
      description:
        "Comprehensive interventional care for complex acute and chronic pancreatitis, pancreatic fluid collections, and biliary disorders.",
      items: [
        {
          name: "Complex ERCP & Bile Duct Stone Clearance",
          details:
            "Endoscopic removal of choledocholithiasis (CBD stones), relief of obstructive jaundice via plastic/metallic stents, and pancreatic duct interventions.",
        },
        {
          name: "EUS-Guided Cystogastrostomy & Necrosectomy",
          details:
            "Minimally invasive drainage of pancreatic pseudocysts and walled-off necrosis using plastic stents or LAMS (Lumen-Apposing Metal Stents) under EUS guidance.",
        },
        {
          name: "Chronic Pancreatitis & Pain Protocols",
          details:
            "Multi-modal pain management including adjunctive incremental pregabalin therapy, pancreatic enzyme replacement therapy (PERT), and Type 3c diabetes care.",
        },
      ],
    },
    {
      title: "Third Space Endoscopy & Early GI Cancer (EFTR / FTRD)",
      icon: Zap,
      description:
        "Organ-preserving submucosal endoscopic resections replacing open surgical procedures.",
      items: [
        {
          name: "POEM (Peroral Endoscopic Myotomy)",
          details:
            "Advanced endoscopic treatment for Achalasia Cardia and esophageal motility disorders without skin incisions.",
        },
        {
          name: "ESD & STER (Submucosal Tunneling)",
          details:
            "Endoscopic Submucosal Dissection (ESD) and STER for resection of early mucosal cancers and submucosal tumors.",
        },
        {
          name: "Full-Thickness Resection Device (FTRD / EFTR)",
          details:
            "OVESCO Germany certified advanced full-thickness resection for deep mucosal lesions, difficult polyps, and recurrent early GI neoplasia.",
        },
      ],
    },
    {
      title: "Portal Hypertension & Endo-Hepatology",
      icon: Heart,
      description:
        "State-of-the-art liver care grounded in Dr. Rana's clinical trial research in decompensated cirrhosis and portal hypertension.",
      items: [
        {
          name: "Variceal Bleed Management & Simvastatin Protocol",
          details:
            "Endoscopic Band Ligation (EVL) for esophageal/gastric varices combined with evidence-based simvastatin therapy to improve long-term survival after bleeding.",
        },
        {
          name: "EUS-Guided Vascular Interventions",
          details:
            "Endosonographic thrombin/coil embolization for gastric varices and visceral arterial pseudoaneurysms (VAPT-EASE protocol).",
        },
        {
          name: "EUS-Guided Biliary & Enteric Drainage (EUS-HGS / CDS / GE)",
          details:
            "Advanced EUS-guided hepaticogastrostomy, choledochoduodenostomy, and EUS-guided gastrojejunostomy for complex obstructive jaundice and gastric outlet obstruction.",
        },
        {
          name: "Fatty Liver & Quantitative FibroScan",
          details:
            "Non-invasive liver stiffness elastography and CAP fat scoring for early fatty liver reversal and cirrhosis staging.",
        },
      ],
    },
    {
      title: "Inflammatory Bowel Diseases (IBD) Center",
      icon: ShieldCheck,
      description:
        "Dedicated long-term management for Ulcerative Colitis, Crohn's Disease, and complex enteropathies.",
      items: [
        {
          name: "Ulcerative Colitis & Crohn's Disease",
          details:
            "Evidence-based biologic, immunomodulator, and small molecule therapies to induce mucosal healing and prevent disease flares.",
        },
        {
          name: "Celiac Enteropathy & Intestinal TB",
          details:
            "Differential diagnosis and targeted management of gluten sensitivity, refractory intestinal tuberculosis, and malabsorption syndromes.",
        },
      ],
    },
    {
      title: "General Gastroenterology",
      icon: Stethoscope,
      description:
        "Thorough evaluations and personalized treatment plans for common and complex digestive ailments.",
      items: [
        {
          name: "Acid Peptic & Reflux Disorders (GERD)",
          details:
            "Diagnosis and management of persistent heartburn, sour regurgitation, and Barrett's esophagus.",
        },
        {
          name: "Functional Bowel Disorders (IBS & Constipation)",
          details:
            "Tailored dietary and pharmacological solutions for Irritable Bowel Syndrome, chronic constipation, and diarrhea.",
        },
        {
          name: "Celiac Disease & GI Bleeding / Anemia",
          details:
            "Gluten sensitivity evaluation, investigation of obscure GI bleeding, and IV iron replacement for anemia.",
        },
      ],
    },
  ];

  const pillars = [
    {
      title: "Evidence-Based Care",
      desc: "All treatment protocols are grounded in the latest medical research, much of which Dr. Rana has personally published.",
      icon: FileCheck,
    },
    {
      title: "Minimally Invasive Approach",
      desc: "Advanced endoscopic techniques replace open surgeries, significantly reducing recovery times and surgical risks.",
      icon: Compass,
    },
    {
      title: "Comprehensive Diagnostics",
      desc: "State-of-the-art imaging including EUS, Fibroscan, and high-definition endoscopes for precise diagnoses.",
      icon: Award,
    },
    {
      title: "Compassionate Education",
      desc: "Dr. Rana ensures every patient clearly understands their condition, treatment choices, and recovery plan.",
      icon: Users,
    },
  ];

  return (
    <div className="bg-white text-[#1C2936]">
      <PageHeader
        badge="Expert Medical Services in New Delhi"
        title="Comprehensive Gastroenterology & Endoscopy Services"
        subtitle="At the forefront of digestive health care, Dr. Randeep Rana offers state-of-the-art diagnostic evaluations and therapeutic interventions at Max Smart Super Speciality Hospital Saket."
        breadcrumbs={[{ label: "Services" }]}
        bgImage="/images/dr-randeep-rana-scrubs-side.jpg"
      />

      {/* Visual Infrastructure Banner */}
      <section className="pt-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-md overflow-hidden shadow-sm border border-[#DDE6ED] h-60 sm:h-72 group">
              <img
                src="/images/dr-randeep-rana-scrubs-front.jpg"
                alt="State-of-the-art Endoscopy Suite Dr. Randeep Rana"
                className="w-full h-full object-cover object-top transform group- transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-3 py-1 rounded-md bg-[#6CB29D] text-[10px] font-extrabold uppercase tracking-widest text-white inline-block mb-1">
                  Interventional GI & Endoscopy
                </span>
                <h3 className="text-xl font-serif font-bold">Advanced EUS & ERCP Interventions</h3>
              </div>
            </div>

            <div className="relative rounded-md overflow-hidden shadow-sm border border-[#DDE6ED] h-60 sm:h-72 group">
              <img
                src="/images/apdw-2025-singapore-poster.jpg"
                alt="Hepatology & Liver Research Dr. Randeep Rana"
                className="w-full h-full object-cover object-top transform group- transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-3 py-1 rounded-md bg-[#001D30] border border-[#6CB29D]/40 text-[10px] font-extrabold uppercase tracking-widest text-[#6CB29D] inline-block mb-1">
                  Non-Invasive Liver Diagnostics
                </span>
                <h3 className="text-xl font-serif font-bold">FibroScan Quantitative Liver Assessment</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-md p-8 sm:p-12 shadow-sm space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DDE6ED] pb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-md bg-[#002C47] text-[#6CB29D] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
                        {cat.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-light mt-1">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-white p-6 rounded-md border border-[#DDE6ED] shadow-sm space-y-3 hover:border-[#6CB29D]/50 transition-colors"
                    >
                      <h3 className="text-lg font-serif font-bold text-[#002C47] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#6CB29D] shrink-0" />
                        <span>{item.name}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Our Services - 4 Pillars */}
      <section className="py-20 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-md bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              Why Choose Our Services?
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              The Four Pillars of Dr. Rana's Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white p-8 rounded-md border border-[#DDE6ED] shadow-sm space-y-4 text-center hover:shadow-sm transition-shadow"
                >
                  <div className="h-12 w-12 rounded-md bg-[#EBF5F2] text-[#6CB29D] flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#002C47]">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-6">
            <a
              href="/contact"
              className="bg-[#6CB29D] hover:bg-[#5BA897] text-white font-extrabold text-xs uppercase tracking-wider rounded-md py-4 px-8 transition-all shadow-sm inline-flex items-center gap-3"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
