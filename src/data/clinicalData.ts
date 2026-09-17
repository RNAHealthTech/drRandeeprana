export interface ClinicalItem {
  name: string;
  desc: string;
  badge?: string;
  link?: string;
  clinicalSummary?: string;
  clinicalOverview?: string[];
  protocolSubtitle?: string;
  keyBenefits?: string[];
  availableDiagnostics?: Array<{ name: string; iconName: string }>;
  typeTag?: string;
}

export interface ClinicalCategory {
  title: string;
  slug?: string;
  iconName: string;
  iconBg: string;
  iconColor: string;
  items: ClinicalItem[];
}

export interface MegaMenuSection {
  id: string;
  menuTitle: string;
  heading: string;
  subtitle: string;
  columns: ClinicalCategory[];
}

// Helper to provide comprehensive fallback clinical details for any item
export function getClinicalDetails(
  item: ClinicalItem,
  sectionId: string,
  categoryTitle: string
): Required<ClinicalItem> {
  let defaultType = "CLINICAL CONDITION";
  let defaultSubtitle = `Advanced clinical care protocol with Dr. Randeep Rana at Max Smart Super Speciality Hospital.`;

  if (sectionId === "diagnostics") {
    defaultType = "CLINICAL PROCEDURE";
    defaultSubtitle = `Minimally invasive diagnostic & therapeutic endoscopy protocol at Max Smart Saket.`;
  } else if (sectionId === "symptoms") {
    defaultType = "SYMPTOM EVALUATION";
    defaultSubtitle = `Comprehensive triage & diagnostic evaluation roadmap by Dr. Randeep Rana.`;
  }

  const clinicalSummary =
    item.clinicalSummary ||
    `${item.name} is assessed and managed through personalized, evidence-based gastroenterology protocols under Dr. Randeep Rana.`;

  const clinicalOverview = item.clinicalOverview || [
    `${item.name} requires a systematic clinical evaluation to determine its root cause, severity, and optimal treatment path. Using advanced diagnostic tools and personalized protocols, Dr. Randeep Rana provides targeted therapeutic interventions.`,
    `A safe, evidence-based approach ensuring non-surgical or minimally invasive options are prioritized whenever appropriate, minimizing discomfort and supporting rapid recovery.`,
  ];

  const keyBenefits = item.keyBenefits || [
    "Minimally invasive & non-surgical protocols",
    "Evidence-based academic guidelines (AIIMS & PGIMER)",
    "Effective long-lasting relief & root-cause management",
    "Rapid recovery and same-day discharge where applicable",
  ];

  const availableDiagnostics = item.availableDiagnostics || [
    { name: "High-Resolution Endoscopy", iconName: "Camera" },
    { name: "FibroScan (Liver Assessment)", iconName: "Activity" },
    { name: "24-hr pH & Manometry", iconName: "Layers" },
    { name: "Endoscopic Ultrasound (EUS)", iconName: "Stethoscope" },
  ];

  return {
    name: item.name,
    desc: item.desc,
    badge: item.badge || categoryTitle,
    link: item.link || "/contact",
    clinicalSummary,
    clinicalOverview,
    protocolSubtitle: item.protocolSubtitle || defaultSubtitle,
    keyBenefits,
    availableDiagnostics,
    typeTag: item.typeTag || defaultType,
  };
}

export const CONDITIONS_DATA: MegaMenuSection = {
  id: "conditions",
  menuTitle: "Conditions & Diseases",
  heading: "GI, Liver & Pancreatic Conditions",
  subtitle: "Expert diagnosis & customized treatment protocols across all digestive organs.",
  columns: [
    {
      title: "Liver & Gallbladder",
      slug: "liver-and-gallbladder",
      iconName: "HeartPulse",
      iconBg: "bg-red-50 text-red-500",
      iconColor: "#EF4444",
      items: [
        {
          name: "Fatty Liver (NAFLD & NASH)",
          desc: "CAP fat score quantification & reversal",
          typeTag: "CLINICAL CONDITION",
          protocolSubtitle: "Non-invasive elastography & metabolic liver reversal protocol",
          clinicalSummary: "Fatty liver is the accumulation of excess fat in liver cells, which can progress from simple steatosis (NAFLD) to active inflammation and fibrosis (NASH).",
          clinicalOverview: [
            "Using in-house FibroScan (CAP score fat quantification and kPa stiffness measurement), Dr. Randeep Rana provides an accurate, needle-free assessment of liver fat and early scar tissue.",
            "Personalized treatment protocols integrate targeted metabolic management, lifestyle stabilization, and evidence-based pharmacotherapy to halt disease progression and achieve fatty liver reversal."
          ],
          keyBenefits: [
            "Non-invasive FibroScan fat & fibrosis grading in 10 mins",
            "Targeted reversal protocols for NAFLD & NASH",
            "Prevention of cirrhosis & metabolic complications",
            "Continuous liver enzyme and metabolic monitoring"
          ],
          availableDiagnostics: [
            { name: "FibroScan (CAP Score)", iconName: "Activity" },
            { name: "Liver Function Panel", iconName: "Layers" },
            { name: "Metabolic Profile", iconName: "HeartPulse" },
            { name: "High-Res Ultrasound", iconName: "Camera" }
          ]
        },
        {
          name: "Liver Cirrhosis & Ascites",
          desc: "Portal hypertension & fluid management",
          typeTag: "CLINICAL CONDITION",
          protocolSubtitle: "Advanced endo-hepatology & decompensated liver management",
          clinicalSummary: "Advanced chronic liver disease involving irreversible scarring, portal hypertension, fluid retention (ascites), and risk of bleeding.",
          clinicalOverview: [
            "Dr. Rana is an academic researcher in decompensated cirrhosis with published trial protocols in portal hypertension management.",
            "Care focuses on evidence-based medical therapies, EVL endoscopic band ligation for varices, dietary sodium optimization, and preventing decompensation."
          ],
          keyBenefits: [
            "Evidence-based simvastatin post-bleed protocols",
            "Endoscopic Variceal Ligation (EVL) bleed prophylaxis",
            "Safe paracentesis & albumin replacement strategies",
            "AIIMS & PGIMER fellowship trained hepatology care"
          ],
          availableDiagnostics: [
            { name: "UGI Endoscopy (Variceal Screen)", iconName: "Camera" },
            { name: "FibroScan Elastography", iconName: "Activity" },
            { name: "Ascitic Fluid Analysis", iconName: "Layers" },
            { name: "Doppler Ultrasound", iconName: "HeartPulse" }
          ]
        },
        {
          name: "Chronic Hepatitis B & C",
          desc: "Modern targeted antiviral therapies",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Viral infections of the liver leading to chronic inflammation, fibrosis, and elevated hepatocellular risk if untreated.",
          clinicalOverview: [
            "Direct-acting antiviral (DAA) therapies offer >95% cure rates for Hepatitis C, while potent oral antivirals effectively suppress Hepatitis B viral replication.",
            "Complete clinical monitoring includes viral load (HBV DNA / HCV RNA PCR) quantification and regular ultrasound screening."
          ]
        },
        {
          name: "Gallbladder & CBD Stones",
          desc: "Endoscopic clearance & ERCP protocols",
          typeTag: "CLINICAL CONDITION",
          protocolSubtitle: "Non-surgical bile duct stone extraction and jaundice relief",
          clinicalSummary: "Gallstones migrating into the Common Bile Duct (CBD) can cause obstructive jaundice, cholangitis, and severe acute pancreatitis.",
          clinicalOverview: [
            "Dr. Randeep Rana specializes in therapeutic ERCP (Endoscopic Retrograde Cholangiopancreatography) to extract CBD stones without large surgical incisions.",
            "Techniques include endoscopic sphincterotomy, balloon/basket stone extraction, and plastic/metal stent placement for rapid relief of biliary obstruction."
          ]
        },
        {
          name: "Alcoholic Liver Disease",
          desc: "Detox, liver regeneration & monitoring",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Spectrum of liver damage caused by alcohol consumption, ranging from fatty liver and acute alcoholic hepatitis to advanced cirrhosis.",
          clinicalOverview: [
            "Comprehensive management combines medical detoxification, nutritional support, corticosteroid evaluation in severe alcoholic hepatitis, and long-term liver monitoring."
          ]
        },
        {
          name: "Liver Tumors & Cholangiocarcinoma",
          desc: "Early detection & multidisciplinary oncology",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Benign and malignant lesions of the liver and bile ducts requiring prompt characterization and multimodal treatment planning.",
          clinicalOverview: [
            "Utilizing advanced imaging, EUS-guided tissue acquisition, and tumor marker monitoring (AFP, CA 19-9) for early, precise staging and therapeutic routing."
          ]
        },
      ],
    },
    {
      title: "Stomach & Esophagus",
      slug: "stomach-and-esophagus",
      iconName: "Stethoscope",
      iconBg: "bg-blue-50 text-blue-600",
      iconColor: "#2563EB",
      items: [
        {
          name: "GERD & Chronic Acid Reflux",
          desc: "24-hr pH monitoring & hiatal hernia care",
          typeTag: "CLINICAL CONDITION",
          protocolSubtitle: "Precision reflux tracking and mucosal healing protocols",
          clinicalSummary: "Gastroesophageal Reflux Disease (GERD) occurs when stomach acid repeatedly flows back into the esophagus, causing heartburn, regurgitation, and tissue injury.",
          clinicalOverview: [
            "Evaluated using Japanese HD video endoscopy with Narrow Band Imaging (NBI) and 24-Hour pH / impedance monitoring to distinguish acid from non-acid reflux.",
            "Treatment includes targeted acid suppression, mucosal protectants, hiatal hernia evaluation, and lifestyle optimization."
          ]
        },
        {
          name: "H. Pylori Infection & Ulcers",
          desc: "Rapid breath test & triple eradication",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Helicobacter pylori bacterial infection causing chronic gastritis, peptic ulcer disease, and increased risk of gastric malignancies.",
          clinicalOverview: [
            "Diagnosed via rapid stool antigen, carbon-14/13 urea breath test, or rapid urease biopsy during endoscopy. Treated with evidence-based eradication therapy."
          ]
        },
        {
          name: "Achalasia Cardia",
          desc: "Incisionless POEM myotomy procedure",
          typeTag: "CLINICAL CONDITION",
          protocolSubtitle: "Incisionless Third Space Endoscopy & POEM Surgery",
          clinicalSummary: "A motility disorder where the lower esophageal sphincter fails to relax, causing severe difficulty swallowing, regurgitation, and weight loss.",
          clinicalOverview: [
            "POEM (Peroral Endoscopic Myotomy) is an incisionless procedure performed entirely through an endoscope to divide tight esophageal muscles.",
            "Offers long-term swallowing relief with no external scars and significantly faster recovery compared to traditional open or laparoscopic surgery."
          ]
        },
        {
          name: "Gastric Cancer & Early Polyps",
          desc: "Narrow Band Imaging & resection",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Early pre-cancerous polyps and mucosal neoplasms of the stomach detected through high-magnification endoscopy.",
          clinicalOverview: [
            "Early detection allows curative organ-preserving removal via Endoscopic Submucosal Dissection (ESD) and EMR without requiring stomach removal."
          ]
        },
        {
          name: "Esophageal Stricture & Webs",
          desc: "Balloon dilatation & therapeutic stenting",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Narrowing of the esophagus caused by chronic reflux, caustic injury, radiation, or congenital webs causing progressive dysphagia.",
          clinicalOverview: [
            "Treated via controlled endoscopic balloon dilatation, Savary-Gilliard bougienage, or biodegradable/covered stent placement to restore normal swallowing."
          ]
        },
        {
          name: "GIST & Gastric Lymphoma",
          desc: "Specialized endoscopic staging",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Subepithelial tumors and lymphoproliferative disorders of the stomach requiring deep layer evaluation.",
          clinicalOverview: [
            "Assessed with high-resolution Endoscopic Ultrasound (EUS) and fine needle biopsy (FNB) for definitive histological classification."
          ]
        },
      ],
    },
    {
      title: "Intestines & Colon",
      slug: "intestines-and-colon",
      iconName: "Activity",
      iconBg: "bg-emerald-50 text-emerald-600",
      iconColor: "#059669",
      items: [
        {
          name: "Irritable Bowel Syndrome (IBS)",
          desc: "Motility testing & gut microbiome protocols",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "A common disorder affecting the large intestine, marked by abdominal cramping, bloating, gas, diarrhea, and constipation.",
          clinicalOverview: [
            "Dr. Rana's diagnostic protocol includes ruling out organic enteropathies, hydrogen breath testing for SIBO, and personalized gut microbiome modulation."
          ]
        },
        {
          name: "Inflammatory Bowel Disease (IBD)",
          desc: "Crohn’s disease & Ulcerative Colitis",
          typeTag: "CLINICAL CONDITION",
          protocolSubtitle: "Mucosal healing & advanced biologic therapeutic protocols",
          clinicalSummary: "Chronic autoimmune inflammation of the gastrointestinal tract, categorized into Ulcerative Colitis and Crohn’s Disease.",
          clinicalOverview: [
            "Comprehensive management includes high-definition colonoscopy with chromoendoscopy, fecal calprotectin tracking, and targeted biologic/small molecule therapies."
          ]
        },
        {
          name: "Celiac Disease & Gluten Sensitivity",
          desc: "Duodenal biopsy & dietary stabilization",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "An immune reaction to eating gluten (a protein found in wheat, barley, and rye) that damages the small intestine lining.",
          clinicalOverview: [
            "Confirmed via tissue transglutaminase (anti-tTG IgA) serology and upper endoscopic duodenal biopsies (Marsh grading), followed by expert clinical dietetics."
          ]
        },
        {
          name: "Colonic Polyps & Cancer Screening",
          desc: "Painless high-definition colonoscopy",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Screening and removal of colorectal polyps to prevent colon cancer development.",
          clinicalOverview: [
            "Performed under gentle sedation using Japanese HD colonoscopy and narrow-band imaging to detect and resect polyps during the same sitting."
          ]
        },
        {
          name: "Small Bowel Disorders",
          desc: "Capsule endoscopy & enteroscopy",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Obscure GI bleeding, ulcers, and polyps in the deep small intestine beyond standard endoscopy reach.",
          clinicalOverview: [
            "Evaluated using swallowable wireless PillCam Capsule Endoscopy and Double Balloon Enteroscopy for deep diagnostic and therapeutic access."
          ]
        },
      ],
    },
    {
      title: "Pancreas & Biliary",
      slug: "pancreas-and-biliary",
      iconName: "Flame",
      iconBg: "bg-amber-50 text-amber-600",
      iconColor: "#D97706",
      items: [
        {
          name: "Acute Pancreatitis",
          desc: "Emergency stabilization & etiology workup",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Sudden, severe inflammation of the pancreas usually triggered by gallstones or alcohol, requiring prompt multidisciplinary stabilization.",
          clinicalOverview: [
            "Rapid etiology identification, goal-directed IV hydration, pain relief, and urgent ERCP if accompanied by acute cholangitis or biliary obstruction."
          ]
        },
        {
          name: "Chronic Pancreatitis",
          desc: "Enzyme replacement & pain management",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Persistent inflammation leading to irreversible pancreatic parenchymal destruction, calcifications, exocrine insufficiency, and chronic pain.",
          clinicalOverview: [
            "Evidence-based pain protocols (including incremental pregabalin pathways), pancreatic enzyme replacement therapy (PERT), and diabetes screening."
          ]
        },
        {
          name: "Pancreatic Tumors & Cysts",
          desc: "High-res EUS & imaging protocols",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Cystic and solid pancreatic neoplasms (IPMN, MCN, adenocarcinoma) requiring high-resolution characterization.",
          clinicalOverview: [
            "Evaluated with linear Endoscopic Ultrasound (EUS) and fine-needle biopsy (FNB) with cyst fluid CEA/amylase analysis for precise risk stratification."
          ]
        },
        {
          name: "Pancreatic Pseudocysts",
          desc: "Endoscopic cystogastrostomy drainage",
          typeTag: "CLINICAL CONDITION",
          clinicalSummary: "Fluid collections forming in or around the pancreas after severe acute pancreatitis or chronic injury.",
          clinicalOverview: [
            "Treated via minimally invasive EUS-guided cystogastrostomy using plastic double-pigtail stents or lumen-apposing metal stents (LAMS), avoiding open surgery."
          ]
        },
      ],
    },
  ],
};

export const DIAGNOSTICS_DATA: MegaMenuSection = {
  id: "diagnostics",
  menuTitle: "Diagnostics & Procedures",
  heading: "Diagnostics & Advanced Procedures",
  subtitle: "State-of-the-art Japanese endoscopic systems, motility labs, and non-invasive elastography.",
  columns: [
    {
      title: "Non-Invasive Diagnostics",
      iconName: "Layers",
      iconBg: "bg-cyan-50 text-cyan-600",
      iconColor: "#0891B2",
      items: [
        {
          name: "Fibroscan (Transient Elastography)",
          desc: "Liver stiffness (kPa) & fat (CAP) in 10 mins",
          typeTag: "CLINICAL PROCEDURE",
          protocolSubtitle: "Non-invasive liver stiffness & fat quantification protocol",
          clinicalSummary: "Fibroscan is a breakthrough non-invasive technology used to assess the extent of liver stiffness (fibrosis/cirrhosis) and quantitative fat accumulation (CAP score).",
          clinicalOverview: [
            "A safe, completely painless procedure where an ultrasound-like transducer probe is placed on the right upper abdominal surface. No needles, radiation, or sedation required.",
            "Delivers accurate numerical results in under 10 minutes, allowing early detection of fatty liver disease (NAFLD), NASH staging, and monitoring cirrhosis reversal."
          ],
          keyBenefits: [
            "100% Painless & non-invasive procedure",
            "Instant numerical results (Liver stiffness in kPa & fat in CAP)",
            "Safe alternative to painful liver biopsies in most cases",
            "Same-day report & direct clinical consultation with Dr. Rana"
          ],
          availableDiagnostics: [
            { name: "CAP Fat Quantification", iconName: "Activity" },
            { name: "Liver Stiffness (kPa)", iconName: "Layers" },
            { name: "Viral Hepatitis Serology", iconName: "HeartPulse" },
            { name: "Liver Function Panel", iconName: "Stethoscope" }
          ]
        },
        {
          name: "Hydrogen Breath Test",
          desc: "Detects SIBO & lactose/fructose malabsorption",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "A non-invasive test measuring hydrogen and methane gases in your breath to diagnose Small Intestinal Bacterial Overgrowth (SIBO) and carbohydrate malabsorption.",
          clinicalOverview: [
            "Patients drink a specific sugar solution (lactulose, glucose, or lactose), and breath samples are collected at timed intervals to track gas production by gut bacteria."
          ]
        },
        {
          name: "24-Hour pH & Manometry",
          desc: "Reflux tracking based on USA motility standards",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "Gold standard diagnostic tools for evaluating esophageal motility disorders and quantifying exact acid reflux over a full 24-hour cycle.",
          clinicalOverview: [
            "Utilizes high-resolution sensor catheters to measure esophageal muscle contractions during swallowing and document acid exposure correlated with symptoms."
          ]
        },
        {
          name: "Capsule Endoscopy",
          desc: "Pill camera imaging of the entire small bowel",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "A miniature vitamin-pill sized wireless camera swallowed by the patient to capture high-definition images of the entire small intestine.",
          clinicalOverview: [
            "Provides comprehensive visualization of areas unreachable by standard endoscopy, crucial for obscure GI bleeding, Crohn's disease, and unexplained polyps."
          ]
        },
        {
          name: "Targeted Liver Biopsy",
          desc: "Precision histopathological assessment",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "Ultrasound-guided micro-sampling of liver tissue for definitive diagnostic classification of uncharacterized liver lesions, hepatitis, or storage disorders.",
          clinicalOverview: [
            "Performed under local anesthesia with real-time ultrasound guidance for maximum safety and immediate post-procedure monitoring."
          ]
        },
      ],
    },
    {
      title: "Advanced Endoscopic Suite",
      iconName: "Camera",
      iconBg: "bg-purple-50 text-purple-600",
      iconColor: "#9333EA",
      items: [
        {
          name: "UGI Endoscopy (Gastroscopy)",
          desc: "HD Narrow Band Imaging under gentle sedation",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "High-definition endoscopic examination of the esophagus, stomach, and duodenum under comfortable conscious sedation.",
          clinicalOverview: [
            "Equipped with Japanese Narrow Band Imaging (NBI) optical enhancement to detect early cancerous mucosal changes, ulcers, and H. pylori gastritis."
          ]
        },
        {
          name: "Painless Screening Colonoscopy",
          desc: "Colorectal polyp removal & cancer prevention",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "Full visualization of the large intestine and terminal ileum under sedation to detect and remove pre-cancerous polyps before they turn into cancer.",
          clinicalOverview: [
            "Painless, safe procedure with same-day discharge and immediate polyp removal (polypectomy) using specialized electrocautery snares."
          ]
        },
        {
          name: "ERCP Procedure",
          desc: "Bile duct stone extraction & stent placement",
          typeTag: "CLINICAL PROCEDURE",
          protocolSubtitle: "Therapeutic fluoroscopic endoscopy for biliary & pancreatic duct disorders",
          clinicalSummary: "An advanced specialized endoscopic procedure combining high-resolution endoscopy and X-ray fluoroscopy to treat bile duct and pancreatic conditions.",
          clinicalOverview: [
            "Used for removing bile duct stones (choledocholithiasis), relieving obstructive jaundice, taking biliary biopsies, and placing plastic or self-expanding metal stents.",
            "Avoids open surgical operations on the bile duct, drastically reducing hospital stay and recovery time."
          ]
        },
        {
          name: "POEM (Peroral Endoscopic Myotomy)",
          desc: "Incisionless surgery for Achalasia Cardia",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "Cutting-edge Third Space Endoscopy technique for treating Achalasia Cardia and severe esophageal spastic motility disorders.",
          clinicalOverview: [
            "A submucosal tunnel is created within the esophageal wall to cut the tight muscle fibers, performed completely through the mouth without any skin incisions."
          ]
        },
        {
          name: "Double Balloon Enteroscopy",
          desc: "Deep small intestine diagnostic & therapy",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "Specialized enteroscopy allowing complete endoscopic examination and treatment throughout the entire length of the small bowel.",
          clinicalOverview: [
            "Utilizes alternating balloon inflation for deep pleating of the intestine, enabling therapeutic intervention like argon coagulation for vascular bleeds."
          ]
        },
        {
          name: "Endoscopic Ultrasound (EUS)",
          desc: "Submucosal & pancreatic lesion imaging",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "Combines endoscopy and high-frequency ultrasound to obtain detailed images and tissue samples of the pancreas, bile ducts, and GI wall layers.",
          clinicalOverview: [
            "Enables EUS-guided fine needle biopsy (FNB), cyst drainage (cystogastrostomy), and celiac plexus neurolysis for intractable pancreatic pain."
          ]
        },
      ],
    },
    {
      title: "Special Interventions & Clinics",
      iconName: "ShieldCheck",
      iconBg: "bg-teal-50 text-teal-600",
      iconColor: "#0D9488",
      items: [
        {
          name: "Painless Piles Therapy",
          desc: "Non-surgical banding & infrared coag",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "Minimally invasive outpatient procedures to treat bleeding and prolapsing hemorrhoids without open surgery.",
          clinicalOverview: [
            "Endoscopic rubber band ligation (EVL) cuts off blood supply to hemorrhoidal cushions painlessly above the dentate line, allowing natural healing."
          ]
        },
        {
          name: "APC for GI Bleed",
          desc: "Argon Plasma Coagulation for vascular lesions",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "Non-contact thermal coagulation using ionized argon gas to stop superficial gastrointestinal bleeding and ablate vascular malformations (GAVE, radiation proctitis).",
          clinicalOverview: [
            "Precise, depth-limited energy delivery ensuring rapid coagulation with minimal risk of perforation."
          ]
        },
        {
          name: "Variceal Banding (EVL)",
          desc: "Prophylaxis & acute bleeding control",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "Endoscopic Variceal Ligation (EVL) uses elastic bands to eradicate esophageal and gastric varices caused by portal hypertension in liver disease.",
          clinicalOverview: [
            "Dr. Rana combines EVL with evidence-based medical regimens to maximize long-term survival and prevent recurrent hemorrhage."
          ]
        },
        {
          name: "Endoscopic Tumor Resection",
          desc: "EMR / ESD for early GI neoplasia",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "Endoscopic Mucosal Resection (EMR) and Endoscopic Submucosal Dissection (ESD) for en-bloc curative removal of early GI tract cancers.",
          clinicalOverview: [
            "Allows organ-preserving curative resection of early lesions in the esophagus, stomach, and colon with minimal patient trauma."
          ]
        },
        {
          name: "Endoscopic Obesity Clinic",
          desc: "Intragastric balloon & metabolic weight loss",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "Non-surgical weight management using intragastric fluid-filled balloons and metabolic medical therapies.",
          clinicalOverview: [
            "Promotes early satiety and sustained calorie reduction under multidisciplinary physician and clinical dietetics supervision."
          ]
        },
        {
          name: "Nutrition Clinic & PEG Tube",
          desc: "Enteral feeding support & clinical dietetics",
          typeTag: "CLINICAL PROCEDURE",
          clinicalSummary: "Percutaneous Endoscopic Gastrostomy (PEG) placement and specialized clinical nutrition support for patients unable to maintain oral intake.",
          clinicalOverview: [
            "Safe, minimally invasive bedside or suite placement of feeding tubes with personalized enteral nutrition protocols."
          ]
        },
      ],
    },
  ],
};

export const SYMPTOMS_DATA: MegaMenuSection = {
  id: "symptoms",
  menuTitle: "Symptoms",
  heading: "Symptom Checker & Rapid Triage",
  subtitle: "Identify your symptoms and discover the recommended clinical workup.",
  columns: [
    {
      title: "Upper GI & Esophagus",
      iconName: "Sparkles",
      iconBg: "bg-rose-50 text-rose-500",
      iconColor: "#F43F5E",
      items: [
        {
          name: "Acidity, Heartburn & Reflux",
          desc: "Burning sensation in chest or throat",
          typeTag: "SYMPTOM EVALUATION",
          protocolSubtitle: "Rapid clinical triage & upper GI diagnostic pathway",
          clinicalSummary: "A burning discomfort in the upper abdomen, retrosternal chest, or throat, frequently accompanied by acid regurgitation, sour burps, or nighttime coughing.",
          clinicalOverview: [
            "Chronic acidity should never be ignored as untreated acid exposure can cause erosive esophagitis, strictures, or Barrett’s esophagus.",
            "Dr. Randeep Rana conducts thorough assessments using Japanese HD endoscopy and pH testing to diagnose hiatal hernias, H. pylori, or motility issues."
          ],
          keyBenefits: [
            "Immediate relief and customized medication plans",
            "Accurate differentiation between GERD, gastritis, and ulcers",
            "Screening to prevent Barrett's esophagus and strictures",
            "Personalized diet & lifestyle modification guidance"
          ],
          availableDiagnostics: [
            { name: "HD Video Endoscopy", iconName: "Camera" },
            { name: "24-hr pH Manometry", iconName: "Layers" },
            { name: "H. Pylori Breath Test", iconName: "Activity" },
            { name: "Ultrasound Abdomen", iconName: "Stethoscope" }
          ]
        },
        {
          name: "Intestinal Gas & Bloating",
          desc: "Post-meal distension & chronic fullness",
          typeTag: "SYMPTOM EVALUATION",
          clinicalSummary: "Excessive abdominal fullness, tight distension, audible rumbling, or discomfort occurring after meals.",
          clinicalOverview: [
            "Commonly caused by Small Intestinal Bacterial Overgrowth (SIBO), food intolerances (lactose, fructose), gut dysbiosis, or functional gut motility disorders.",
            "Investigated through hydrogen breath testing, dietary elimination protocols, and targeted microbiome rebalancing."
          ]
        },
        {
          name: "Difficulty Swallowing (Dysphagia)",
          desc: "Food getting stuck or painful swallowing",
          typeTag: "SYMPTOM EVALUATION",
          clinicalSummary: "A sensation that food or liquids are sticking in the throat or chest, requiring urgent clinical investigation.",
          clinicalOverview: [
            "Requires prompt endoscopic and motility evaluation to rule out esophageal rings, strictures, eosinophilic esophagitis, Achalasia Cardia, or early malignancy."
          ]
        },
      ],
    },
    {
      title: "Lower GI & Bleeding",
      iconName: "Droplet",
      iconBg: "bg-red-50 text-red-600",
      iconColor: "#DC2626",
      items: [
        {
          name: "Piles / Bloody Stools",
          desc: "Fresh bleeding during or after bowel movement",
          typeTag: "SYMPTOM EVALUATION",
          clinicalSummary: "Bright red blood in stool, on toilet paper, or dripping into the pan during defecation, often linked to hemorrhoids, fissures, or rectal polyps.",
          clinicalOverview: [
            "Clinical evaluation including proctosigmoidoscopy or colonoscopy ensures bleeding is accurately distinguished from colon polyps or inflammatory bowel disease."
          ]
        },
        {
          name: "Chronic Diarrhea & Constipation",
          desc: "Irregular bowel habits lasting > 2 weeks",
          typeTag: "SYMPTOM EVALUATION",
          clinicalSummary: "Alteration in normal bowel frequency or stool consistency lasting more than 2-3 weeks.",
          clinicalOverview: [
            "Workup includes fecal calprotectin, Celiac antibody screen, stool microscopy, and colonoscopic mucosal biopsies to pinpoint microscopic colitis, IBD, or IBS."
          ]
        },
        {
          name: "Gastrointestinal Bleeding",
          desc: "Black tarry stools or blood vomit (Emergency)",
          typeTag: "SYMPTOM EVALUATION",
          clinicalSummary: "Emergency condition manifested as vomiting blood (hematemesis), coffee-ground emesis, or passing jet-black tarry stools (melena).",
          clinicalOverview: [
            "Requires immediate hospital stabilization and urgent emergency therapeutic endoscopy to stop bleeding from peptic ulcers, Mallory-Weiss tears, or esophageal varices."
          ]
        },
      ],
    },
    {
      title: "Hepatobiliary & Liver",
      iconName: "Disc",
      iconBg: "bg-amber-50 text-amber-600",
      iconColor: "#D97706",
      items: [
        {
          name: "Severe Abdominal Pain",
          desc: "Upper/lower quadrant colic or persistent ache",
          typeTag: "SYMPTOM EVALUATION",
          clinicalSummary: "Acute or progressive pain in the epigastric or right upper abdomen radiating to the back or lower abdomen.",
          clinicalOverview: [
            "Prompt evaluation for acute pancreatitis, gallstone colic, peptic perforation, or appendicitis with emergency imaging, serum amylase/lipase, and ultrasound."
          ]
        },
        {
          name: "Jaundice & Yellow Eyes",
          desc: "Elevated bilirubin, dark urine & pale stools",
          typeTag: "SYMPTOM EVALUATION",
          clinicalSummary: "Yellow discoloration of the sclera and skin caused by hyperbilirubinemia, paired with dark tea-colored urine and pale stools.",
          clinicalOverview: [
            "Differentiates hepatocellular jaundice (hepatitis, cirrhosis) from surgical obstructive jaundice (CBD stones, strictures, tumors) to initiate targeted ERCP or medical therapy."
          ]
        },
        {
          name: "Alcohol-Related Liver Issues",
          desc: "Fatigue, enzyme elevation & liver swelling",
          typeTag: "SYMPTOM EVALUATION",
          clinicalSummary: "Nonspecific fatigue, loss of appetite, elevated liver enzymes (SGOT/SGPT, GGT), and hepatomegaly linked to alcohol use.",
          clinicalOverview: [
            "Quantified via non-invasive FibroScan and blood panels to detect early reversible steatosis before irreversible cirrhosis develops."
          ]
        },
      ],
    },
  ],
};

export const ALL_CLINICAL_SECTIONS = [
  CONDITIONS_DATA,
  DIAGNOSTICS_DATA,
  SYMPTOMS_DATA,
];
