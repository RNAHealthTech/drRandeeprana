import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { Clock, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Education Blog | Digestive Health Articles by Dr. Randeep Rana",
  description:
    "Read expert patient education articles by Dr. Randeep Rana on pancreatitis, liver disease, fatty liver, cirrhosis, advanced endoscopy, and more. Evidence-based information for your digestive health.",
};

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  contentSections: {
    heading: string;
    text: string;
  }[];
  keyTakeaways: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-pancreatitis-causes-symptoms-treatment",
    title: "Understanding Pancreatitis — Causes, Symptoms, and Advanced Treatment Options",
    category: "Pancreatology & Endoscopy",
    date: "August 2026",
    readTime: "6 min read",
    excerpt:
      "Recognize acute vs. chronic pancreatitis symptoms, virus-related superinfections, and how EUS-guided cystogastrostomy offers a minimally invasive alternative to surgery for pancreatic fluid collections.",
    contentSections: [
      {
        heading: "What is Pancreatitis?",
        text: "The pancreas is a vital organ situated behind the stomach, playing a crucial role in digestion and blood sugar regulation. When the pancreas becomes inflamed, the condition is known as pancreatitis. This can be a sudden, severe attack known as acute pancreatitis, or a long-lasting condition known as chronic pancreatitis. Understanding the causes, recognizing the symptoms, and knowing the treatment options can significantly impact patient outcomes.",
      },
      {
        heading: "Common Causes & Viral Triggers",
        text: "The most common causes of pancreatitis include gallstones that block the pancreatic duct and heavy alcohol consumption. Other contributing factors include high triglyceride levels, certain medications, autoimmune conditions, genetic predispositions, and abdominal trauma. In some cases, viral infections can also trigger acute pancreatitis, as documented in recent prospective research on virus-related acute pancreatitis and SARS-CoV-2 superinfection.",
      },
      {
        heading: "Recognizing Key Symptoms & Complications",
        text: "Patients with pancreatitis often experience severe upper abdominal pain that may radiate to the back, typically worsening after eating. Nausea, vomiting, fever, and a rapid pulse are also common symptoms. In severe cases, complications such as pancreatic fluid collections (pseudocysts), walled-off necrosis, and multi-organ failure can develop, requiring immediate medical intervention.",
      },
      {
        heading: "Advanced Endoscopic Interventions",
        text: "For complications arising from severe acute pancreatitis, such as pancreatic fluid collections, advanced therapeutic endoscopy is now the preferred treatment. Procedures like Endoscopic Ultrasound (EUS)-guided cystogastrostomy allow physicians to drain these collections from inside the stomach without open surgery. Dr. Rana's state-of-the-art review on this topic, published in the Indian Journal of Gastroenterology, highlights how these minimally invasive techniques reduce recovery time and improve patient outcomes.",
      },
      {
        heading: "Chronic Pancreatitis Pain Management",
        text: "For chronic pancreatitis, management focuses on pain relief, nutritional support, and managing complications like diabetes and exocrine pancreatic insufficiency (EPI). Dr. Rana's research on adjunctive incremental pregabalin therapy, published in the Journal of Clinical Gastroenterology, has demonstrated improved pain relief for chronic pancreatitis patients, helping them achieve a far better quality of life.",
      },
    ],
    keyTakeaways: [
      "EUS-guided cystogastrostomy replaces open surgery for pancreatic pseudocysts & necrosis.",
      "Adjunctive pregabalin therapy offers evidence-based neuropathic pain relief in chronic pancreatitis.",
      "Early hospitalization and pancreatic rest prevent severe multi-organ failure in acute attacks.",
    ],
  },
  {
    slug: "managing-fatty-liver-disease-and-cirrhosis",
    title: "The Silent Threat — Managing Fatty Liver Disease and Cirrhosis",
    category: "Hepatology & Liver Care",
    date: "August 2026",
    readTime: "7 min read",
    excerpt:
      "Explore non-alcoholic fatty liver disease (NAFLD), cirrhosis complications like variceal bleeding, and breakthrough clinical trials on simvastatin and intravenous iron therapy.",
    contentSections: [
      {
        heading: "The Progression of Non-Alcoholic Fatty Liver Disease",
        text: "Non-Alcoholic Fatty Liver Disease (NAFLD) occurs when excess fat builds up in liver cells of people who drink little to no alcohol. It is closely linked to obesity, type 2 diabetes, metabolic syndrome, and high cholesterol. While often asymptomatic in early stages, NAFLD can progress to Non-Alcoholic Steatohepatitis (NASH), leading to inflammation, liver scarring, and eventually cirrhosis. Even non-overweight individuals can develop 'lean NAFLD,' requiring specialized clinical management.",
      },
      {
        heading: "Cirrhosis, Portal Hypertension & Variceal Bleeding",
        text: "Cirrhosis is the late stage of scarring (fibrosis) of the liver. A major complication is portal hypertension — increased pressure in the portal vein carrying blood to the liver. This leads to varices (enlarged veins) in the esophagus or stomach, which are prone to sudden, life-threatening bleeding. Other complications include ascites (abdominal fluid) and hepatic encephalopathy.",
      },
      {
        heading: "Breakthrough Statin & Combination Therapies",
        text: "Managing cirrhosis requires an evidence-based approach. Dr. Rana's clinical research explored the combination of simvastatin and rifaximin for decompensated cirrhosis patients, published in JAMA, aimed at reducing systemic inflammation and portal hypertension. Furthermore, his landmark trial in The American Journal of Gastroenterology demonstrated that adding simvastatin to standard care after variceal bleeding significantly improves long-term survival.",
      },
      {
        heading: "Optimizing Recovery After Variceal Bleeding",
        text: "For patients recovering from variceal bleeding, managing iron deficiency anemia is critical. Dr. Rana's trial comparing intravenous ferric carboxymaltose versus oral iron therapy for iron deficiency anemia after variceal bleed in cirrhosis patients (published in AJG) provides crucial guidance for accelerating patient recovery.",
      },
    ],
    keyTakeaways: [
      "Simvastatin addition to standard care improves long-term survival after variceal bleeding.",
      "Lean NAFLD can occur without obesity and requires early FibroScan screening.",
      "IV Ferric Carboxymaltose outperforms oral iron for post-bleeding anemia in cirrhosis.",
    ],
  },
  {
    slug: "demystifying-advanced-endoscopy-eus-ercp",
    title: "Demystifying Advanced Endoscopy — What to Expect During EUS and ERCP",
    category: "Advanced Endoscopy",
    date: "July 2026",
    readTime: "5 min read",
    excerpt:
      "A complete guide to Endoscopic Ultrasound (EUS) and ERCP: how painless sedation works, key diagnostic uses, and surgical avoidance.",
    contentSections: [
      {
        heading: "Beyond Standard Endoscopy",
        text: "Endoscopy has evolved far beyond simple visual inspection. Advanced procedures like Endoscopic Ultrasound (EUS) and Endoscopic Retrograde Cholangiopancreatography (ERCP) are critical tools enabling precise diagnosis and minimally invasive treatment of complex GI, liver, and pancreatic conditions.",
      },
      {
        heading: "What to Expect During Endoscopic Ultrasound (EUS)",
        text: "EUS combines endoscopy with high-frequency ultrasound to produce detailed images of the digestive tract and surrounding organs. It is used to evaluate pancreatic cysts, tumors, and bile duct stones, perform fine-needle aspiration (FNA) tissue sampling, and drain fluid collections under painless sedation.",
      },
      {
        heading: "Understanding ERCP Interventions",
        text: "ERCP is a specialized technique used to examine and treat bile duct and pancreatic duct disorders. It is primarily used to extract gallstones blocking the bile duct, place plastic or metal stents to relieve jaundice, and sample strictures.",
      },
      {
        heading: "Safety, Sedation & AIIMS Expertise",
        text: "Both EUS and ERCP are performed with high safety standards under monitored sedation. They typically result in shorter hospital stays, reduced pain, and faster recovery compared to open surgery. Dr. Rana's extensive fellowship training at AIIMS ensures expert procedural care.",
      },
    ],
    keyTakeaways: [
      "EUS combines ultrasound and endoscopy for accurate pancreatic tissue sampling (FNA).",
      "ERCP extracts bile duct stones and places stents without surgical incisions.",
      "All advanced procedures are performed under painless, monitored sedation.",
    ],
  },
  {
    slug: "living-with-chronic-pancreatitis-pain-and-nutrition",
    title: "Living with Chronic Pancreatitis — A Patient's Guide to Pain Management and Nutrition",
    category: "Pancreatology",
    date: "July 2026",
    readTime: "6 min read",
    excerpt:
      "Manage chronic abdominal pain with pregabalin therapy, prevent enzyme malabsorption with PERT, and control Type 3c diabetes.",
    contentSections: [
      {
        heading: "Understanding Chronic Pancreatitis",
        text: "Chronic pancreatitis is a progressive inflammatory disease leading to permanent structural damage and loss of endocrine and exocrine pancreatic function. Patients face chronic pain, malnutrition, and diabetes, requiring coordinated care.",
      },
      {
        heading: "Innovative Pain Management Protocols",
        text: "The hallmark symptom is severe abdominal pain. Traditional pain management includes lifestyle changes, enzyme replacement, and analgesics. Dr. Rana's double-blind RCT published in the Journal of Clinical Gastroenterology demonstrated that adjunctive incremental pregabalin therapy provides significant neuropathic pain relief for chronic pancreatitis patients.",
      },
      {
        heading: "Nutritional Management & Enzyme Replacement (PERT)",
        text: "Exocrine pancreatic insufficiency (EPI) occurs when the pancreas cannot produce enough digestive enzymes, leading to fat malabsorption, steatorrhea, and vitamin deficiencies. Pancreatic Enzyme Replacement Therapy (PERT) taken with meals is essential alongside fat-soluble vitamin supplementation.",
      },
      {
        heading: "Managing Pancreatogenic (Type 3c) Diabetes",
        text: "Loss of insulin-producing beta cells puts patients at risk for Type 3c diabetes, requiring careful glycemic monitoring and specialized insulin regimens.",
      },
    ],
    keyTakeaways: [
      "Incremental pregabalin therapy provides effective relief for neuropathic pancreatitis pain.",
      "Pancreatic Enzyme Replacement Therapy (PERT) is crucial for nutrient absorption.",
      "Type 3c diabetes requires tailored management due to concurrent loss of glucagon and insulin.",
    ],
  },
  {
    slug: "when-to-see-a-gastroenterologist-warning-signs",
    title: "When to See a Gastroenterologist — Warning Signs You Should Not Ignore",
    category: "General GI & Prevention",
    date: "June 2026",
    readTime: "5 min read",
    excerpt:
      "Learn the critical red-flag digestive symptoms — blood in stool, jaundice, unexplained weight loss, and dysphagia — that require timely consultation.",
    contentSections: [
      {
        heading: "Why Early Evaluation Matters",
        text: "While many minor digestive issues resolve with simple lifestyle tweaks, certain warning signs warrant an immediate visit to a gastroenterologist. Ignoring red-flag symptoms can lead to disease progression or delayed diagnosis of serious conditions.",
      },
      {
        heading: "Red-Flag Symptoms You Should Never Ignore",
        text: "Consult a specialist if you experience: persistent abdominal pain, blood in stool (bright red or dark tarry stool), unexplained weight loss, chronic heartburn or difficulty swallowing (dysphagia), persistent bowel habit changes lasting over 2 weeks, or jaundice (yellow skin/eyes).",
      },
      {
        heading: "Colorectal Cancer Screening & Prevention",
        text: "Colorectal cancer is highly preventable when precancerous polyps are removed early during colonoscopy. Dr. Rana recommends routine colonoscopy screening for adults starting at age 45, or earlier if family history of GI cancer or IBD is present.",
      },
    ],
    keyTakeaways: [
      "Blood in stool and unexplained weight loss require urgent endoscopic investigation.",
      "Colonoscopy screening starting at age 45 prevents colorectal cancer through polyp removal.",
      "Early specialist consultation prevents irreversible liver scarring and chronic complications.",
    ],
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white text-[#1C2936]">
      <PageHeader
        badge="Patient Education & Articles"
        title="Gastrointestinal Health & Medical Blog"
        subtitle="Informative articles, clinical insights, and patient education guides written by Dr. Randeep Rana to empower you on your digestive wellness journey."
        breadcrumbs={[{ label: "Blog" }]}
        bgImage="/images/dr-randeep-rana-scrubs-front.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-[#6CB29D]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#EBF5F2] text-[#6CB29D] font-bold uppercase tracking-widest text-[11px]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[#002C47]">
                      <Clock className="w-3.5 h-3.5 text-[#6CB29D]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#002C47] group-hover:text-[#6CB29D] transition-colors mb-3">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <User className="w-3.5 h-3.5 text-[#6CB29D]" />
                    <span>Dr. Randeep Rana</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#002C47] group-hover:text-[#6CB29D] transition-colors uppercase tracking-wider"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#6CB29D]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
