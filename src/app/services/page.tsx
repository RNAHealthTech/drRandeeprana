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
      title: "Advanced Diagnostic & Therapeutic Endoscopy",
      icon: Activity,
      description:
        "Minimally invasive diagnostic and interventional endoscopic procedures performed under painless sedation.",
      items: [
        {
          name: "Endoscopic Ultrasound (EUS)",
          details:
            "High-frequency ultrasound probe endoscope for diagnosing pancreatic cysts, bile duct stones, and submucosal GI lesions. Enables EUS-guided FNA biopsy and drainage of pancreatic pseudocysts & walled-off necrosis.",
        },
        {
          name: "Endoscopic Retrograde Cholangiopancreatography (ERCP)",
          details:
            "Specialized intervention to extract choledocholithiasis (bile duct stones), relieve obstructive jaundice with plastic or metallic stents, and evaluate biliary strictures.",
        },
        {
          name: "Routine Endoscopic Procedures (Gastroscopy & Colonoscopy)",
          details:
            "Upper GI Gastroscopy for ulcers, GERD, and bleeding. Colonoscopy for colorectal cancer screening, IBD mucosal evaluation, and precision snare polypectomy.",
        },
      ],
    },
    {
      title: "Hepatology & Liver Disease Management",
      icon: Heart,
      description:
        "State-of-the-art liver care grounded in Dr. Rana's clinical trial research in decompensated cirrhosis and portal hypertension.",
      items: [
        {
          name: "Cirrhosis & Portal Hypertension",
          details:
            "Management of ascites, hepatic encephalopathy, and endoscopic band ligation (EVL) for esophageal and gastric variceal bleeding. Evidence-based simvastatin & rifaximin protocols.",
        },
        {
          name: "Fatty Liver Disease (NAFLD / NASH)",
          details:
            "FibroScan CAP score assessment, lifestyle modification strategies, and medical therapies to arrest progression in both overweight and lean NAFLD.",
        },
        {
          name: "Viral & Autoimmune Liver Diseases",
          details:
            "Direct-acting antiviral treatment for Hepatitis B and C, plus long-term care for Autoimmune Hepatitis (AIH), Primary Biliary Cholangitis (PBC), and Primary Sclerosing Cholangitis (PSC).",
        },
        {
          name: "Liver Cancer (HCC) Surveillance",
          details:
            "Early detection protocols and collaborative multidisciplinary management for Hepatocellular Carcinoma.",
        },
      ],
    },
    {
      title: "Pancreatology Services",
      icon: Zap,
      description:
        "Expert dedicated management for complex acute pancreatitis, chronic pancreatitis pain, and pancreatic fluid collections.",
      items: [
        {
          name: "Acute Pancreatitis Care",
          details:
            "Immediate fluid resuscitation, pain control, and minimally invasive EUS-guided cystogastrostomy for infected necrosis and pseudocysts.",
        },
        {
          name: "Chronic Pancreatitis & Pain Management",
          details:
            "Innovative pain relief protocols including adjunctive incremental pregabalin therapy, pancreatic enzyme replacement therapy (PERT), and Type 3c diabetes management.",
        },
        {
          name: "Pancreatic Cyst Surveillance",
          details:
            "Comprehensive evaluation of incidental pancreatic cysts to determine malignant potential and guide surgical vs conservative care.",
        },
      ],
    },
    {
      title: "Inflammatory Bowel Disease (IBD) Center",
      icon: ShieldCheck,
      description:
        "Long-term specialized management tailored to control inflammation and achieve mucosal healing.",
      items: [
        {
          name: "Crohn's Disease",
          details:
            "Targeted immunomodulator and biologic therapies to control intestinal inflammation, prevent strictures, and heal fistulas.",
        },
        {
          name: "Ulcerative Colitis",
          details:
            "Comprehensive treatment strategies tailored to disease extent and severity, focusing on long-term clinical remission.",
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
        subtitle="At the forefront of digestive health care, Dr. Randeep Rana offers state-of-the-art diagnostic evaluations and therapeutic interventions at Max Smart Super Speciality Hospital Saket and GIPMER & MAMC."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Visual Infrastructure Banner */}
      <section className="pt-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#DDE6ED] h-60 sm:h-72 group">
              <img
                src="/images/endoscopy-suite.png"
                alt="State-of-the-art Endoscopy Suite"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-3 py-1 rounded-full bg-[#6CB29D] text-[10px] font-extrabold uppercase tracking-widest text-white inline-block mb-1">
                  Accredited Procedure Suite
                </span>
                <h3 className="text-xl font-serif font-bold">Advanced EUS & ERCP Interventions</h3>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#DDE6ED] h-60 sm:h-72 group">
              <img
                src="/images/fibroscan-liver-care.png"
                alt="Non-Invasive FibroScan Liver Diagnostics"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-3 py-1 rounded-full bg-[#001D30] border border-[#6CB29D]/40 text-[10px] font-extrabold uppercase tracking-widest text-[#6CB29D] inline-block mb-1">
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
                className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-3xl p-8 sm:p-12 shadow-sm space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DDE6ED] pb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#002C47] text-[#6CB29D] flex items-center justify-center font-bold">
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
                      className="bg-white p-6 rounded-2xl border border-[#DDE6ED] shadow-sm space-y-3 hover:border-[#6CB29D]/50 transition-colors"
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
            <span className="px-4 py-1.5 rounded-full bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
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
                  className="bg-white p-8 rounded-3xl border border-[#DDE6ED] shadow-sm space-y-4 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-[#EBF5F2] text-[#6CB29D] flex items-center justify-center mx-auto">
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
              className="bg-[#6CB29D] hover:bg-[#5BA897] text-white font-extrabold text-xs uppercase tracking-wider rounded-full py-4 px-8 transition-all shadow-lg inline-flex items-center gap-3"
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
