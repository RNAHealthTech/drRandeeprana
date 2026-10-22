export interface TopicClinicalBox {
  title: string;
  iconType: "warning" | "microscope" | "treatment";
  color: string;
  items: string[];
}

export interface DetailedTopic {
  id: string;
  headingIndex: string;
  title: string;
  badge: string;
  badgeColor?: string;
  summary: string;
  symptoms: string[];
  diagnostics: string[];
  treatment: string[];
}

export interface CategoryPageData {
  slug: string;
  sectionType: "conditions" | "procedures" | "symptoms";
  sectionLabel: string;
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
  stats: Array<{ label: string; sub: string; color: string }>;
  topics: DetailedTopic[];
}

export const CATEGORY_PAGES_MAP: Record<string, CategoryPageData> = {
  "liver-and-gallbladder": {
    slug: "liver-and-gallbladder",
    sectionType: "conditions",
    sectionLabel: "Conditions",
    badge: "Specialized Hepatology & Biliary Care",
    title: "Liver & Gallbladder",
    titleAccent: "Conditions",
    description:
      "Comprehensive clinical protocols for Fatty Liver (NAFLD/NASH), Liver Cirrhosis, Viral Hepatitis, and Gallbladder/CBD Stones. Overseen by Dr. Randeep Rana at Max Smart Super Speciality Hospital, Saket, New Delhi.",
    stats: [
      { label: "Same-Day", sub: "FibroScan & CAP Fat Score", color: "#00843D" },
      { label: "Non-Invasive", sub: "Ultrasound-Based Elastography", color: "#0D9488" },
      { label: "ERCP Protocol", sub: "Endoscopic CBD Stone Extraction", color: "#0078BF" },
      { label: "AIIMS & GIPMER", sub: "Academic Clinical Rigor", color: "#D97706" },
    ],
    topics: [
      {
        id: "fatty-liver",
        headingIndex: "Heading 01",
        title: "Fatty Liver Disease (NAFLD & NASH)",
        badge: "Reversible in Early Stages",
        badgeColor: "#0D9488",
        summary:
          "Non-Alcoholic Fatty Liver Disease (NAFLD) occurs when excess fat accumulates in liver cells (steatosis). If untreated, it can advance to NASH (inflammation), progressive fibrosis, and irreversible cirrhosis.",
        symptoms: [
          "Chronic fatigue, sluggishness, and persistent midday exhaustion",
          "Dull ache or heaviness in the right upper abdomen",
          "Elevated liver enzymes (SGPT / SGOT) on routine health checks",
          "Often completely silent with zero noticeable symptoms until advanced",
        ],
        diagnostics: [
          "In-House FibroScan (CAP score for fat percentage + kPa for liver stiffness)",
          "High-Resolution Abdominal Doppler Ultrasound",
          "Comprehensive Liver Function Tests (LFT) & Lipid Profile",
          "Metabolic screening for insulin resistance, HbA1c, and dyslipidemia",
        ],
        treatment: [
          "Quantitative FibroScan fat score monitoring every 6 months",
          "Clinically structured hepatoprotective dietary and exercise protocols",
          "Targeted metabolic stabilization and insulin sensitizers",
          "Gradual 7-10% body weight loss to support reduction of hepatic steatosis",
        ],
      },
      {
        id: "cirrhosis",
        headingIndex: "Heading 02",
        title: "Liver Cirrhosis & Ascites",
        badge: "Specialized Hepatology Care",
        badgeColor: "#00843D",
        summary:
          "Cirrhosis represents advanced scarring and stiffening of liver architecture resulting from chronic inflammation. Major complications include abdominal fluid build-up (ascites), portal hypertension, and variceal bleeding.",
        symptoms: [
          "Swelling in abdomen (ascites) and lower legs (pedal edema)",
          "Yellowish discoloration of skin and eyes (jaundice)",
          "Vomiting of blood (hematemesis) or dark tarry black stools (melena)",
          "Confusion, forgetfulness, or inverted sleep cycles (hepatic encephalopathy)",
          "Easy bruising and bleeding tendencies",
        ],
        diagnostics: [
          "Transient Elastography (FibroScan) kPa stiffness quantification",
          "Diagnostic abdominal paracentesis (fluid analysis for infection / SBP)",
          "Upper GI Screening Endoscopy for esophageal and gastric varices",
          "Multiphasic contrast CT / MRI abdomen to monitor for hepatocellular carcinoma",
        ],
        treatment: [
          "Endoscopic Variceal Band Ligation (EVL) for active bleeding and prophylaxis",
          "Evidence-based simvastatin therapy to improve post-bleed survival",
          "Sodium-restricted clinical nutrition and targeted diuretic therapy",
          "Comprehensive pre-transplant assessment and hepatic decompensation care",
        ],
      },
      {
        id: "hepatitis",
        headingIndex: "Heading 03",
        title: "Chronic Hepatitis B & C",
        badge: "Targeted Antiviral Therapies",
        badgeColor: "#2563EB",
        summary:
          "Viral hepatitis B and C cause persistent, silent liver inflammation that can quietly progress to cirrhosis or hepatocellular carcinoma over decades if left unmonitored.",
        symptoms: [
          "Flu-like symptoms, low-grade fever, and generalized joint aches",
          "Mild nausea, loss of appetite, and aversion to fatty food",
          "Persistent fatigue and reduced physical stamina",
          "Late signs: dark urine, clay-colored stools, and jaundice",
        ],
        diagnostics: [
          "Hepatitis B Surface Antigen (HBsAg) & Anti-HCV antibody serology",
          "Quantitative Viral Load (HBV DNA / HCV RNA PCR)",
          "FibroScan elastography to stage existing liver fibrosis",
          "Family and household screening protocols",
        ],
        treatment: [
          "Direct-Acting Antivirals (DAAs) for Hepatitis C with >95% cure rates",
          "Long-term potent oral antivirals (Tenofovir / Entecavir) for Hepatitis B",
          "Every 6-month ultrasound and Alpha-Fetoprotein (AFP) cancer screening",
          "Vaccination guidance and counseling for uninfected family members",
        ],
      },
      {
        id: "gallbladder-stones",
        headingIndex: "Heading 04",
        title: "Gallbladder & Common Bile Duct (CBD) Stones",
        badge: "Endoscopic ERCP Clearance",
        badgeColor: "#D97706",
        summary:
          "Gallstones form when bile hardens into crystal-like stones. When a stone slips into the common bile duct, it obstructs bile flow, triggering biliary colic, obstructive jaundice, or life-threatening pancreatitis.",
        symptoms: [
          "Sudden, intense cramping pain in right upper abdomen radiating to back/shoulder",
          "Pain typically triggered after eating heavy, fatty, or fried meals",
          "Nausea, bilious vomiting, and high-grade fever with chills (cholangitis)",
          "Yellowish discoloration of eyes (obstructive jaundice) and dark urine",
        ],
        diagnostics: [
          "High-definition ultrasound of gallbladder and biliary tree",
          "MRCP (Magnetic Resonance Cholangiopancreatography)",
          "Serum Bilirubin, Alkaline Phosphatase, SGOT/SGPT, and Pancreatic Enzymes",
        ],
        treatment: [
          "Emergency ERCP (Endoscopic Retrograde Cholangiopancreatography) to extract CBD stones without open surgery",
          "Endoscopic sphincterotomy and biliary stent placement for jaundice drainage",
          "Referral for elective laparoscopic cholecystectomy for gallbladder clearance",
          "Complete avoidance of severe biliary sepsis and gallstone pancreatitis",
        ],
      },
      {
        id: "alcoholic-liver",
        headingIndex: "Heading 05",
        title: "Alcoholic Liver Disease (ALD)",
        badge: "Detox & Liver Regeneration",
        badgeColor: "#7C3AED",
        summary:
          "Regular heavy alcohol intake causes a progressive spectrum of liver injury: from alcoholic fatty liver to acute alcoholic hepatitis and irreversible alcoholic cirrhosis.",
        symptoms: [
          "Loss of appetite, morning nausea, and persistent fatigue",
          "Upper right quadrant abdominal tenderness and liver enlargement",
          "Severe jaundice, high fever, and abdominal fluid accumulation in acute hepatitis",
          "Tremors, altered sleep patterns, and memory lapses",
        ],
        diagnostics: [
          "Liver Function Tests (AST typically twice the level of ALT with elevated GGT)",
          "Ultrasound and FibroScan quantification of liver fibrosis",
          "Nutritional and vitamin deficiency profiling",
        ],
        treatment: [
          "Strict medically supervised alcohol cessation protocols",
          "High-protein, high-calorie clinical nutrition and micronutrient repletion",
          "Corticosteroid therapy for severe acute alcoholic hepatitis (MDF score > 32)",
          "Antioxidant and hepatoprotective support for cell membrane stabilization",
        ],
      },
      {
        id: "liver-tumors",
        headingIndex: "Heading 06",
        title: "Liver Tumors & Cholangiocarcinoma",
        badge: "Early Detection & Oncology",
        badgeColor: "#DC2626",
        summary:
          "Liver tumors include benign lesions (hemangiomas, adenomas) and malignant tumors (Hepatocellular Carcinoma / HCC or Cholangiocarcinoma of the bile ducts). Early detection is critical for curative outcomes.",
        symptoms: [
          "Unexplained rapid weight loss and severe loss of appetite",
          "Persistent dull pain or palpable mass in upper right belly",
          "Sudden worsening of jaundice or ascites in a previously stable cirrhotic patient",
          "Itching, pale clay-colored stools, and dark amber urine",
        ],
        diagnostics: [
          "Triple-phase dynamic contrast CT or dynamic liver MRI",
          "Serum Alpha-Fetoprotein (AFP) and CA 19-9 tumor markers",
          "Endoscopic Ultrasound (EUS) with fine-needle biopsy for deep biliary staging",
          "Multidisciplinary tumor board evaluation for curative resection",
        ],
        treatment: [
          "Surgical resection or liver transplantation evaluation for early localized tumors",
          "Transarterial Chemoembolization (TACE) and Radiofrequency Ablation (RFA)",
          "Endoscopic biliary stenting to relieve bile duct blockages",
          "Targeted immunotherapy and systemic oncological care",
        ],
      },
    ],
  },

  "stomach-and-esophagus": {
    slug: "stomach-and-esophagus",
    sectionType: "conditions",
    sectionLabel: "Conditions",
    badge: "Upper GI & Acid Reflux Center",
    title: "Stomach & Esophagus",
    titleAccent: "Conditions",
    description:
      "Advanced diagnostics and incisionless Third Space Endoscopy for Acid Reflux (GERD), Peptic Ulcers, Achalasia Cardia, and Early Gastric Polyps with Dr. Randeep Rana.",
    stats: [
      { label: "HD Endoscopy", sub: "Japanese Narrow Band Imaging (NBI)", color: "#00843D" },
      { label: "Motility Lab", sub: "24-hr pH & High-Res Manometry", color: "#0078BF" },
      { label: "Incisionless", sub: "POEM Surgery for Achalasia", color: "#D97706" },
      { label: "Organ-Preserving", sub: "ESD & EMR Early Cancer Resection", color: "#0D9488" },
    ],
    topics: [
      {
        id: "gerd",
        headingIndex: "Heading 01",
        title: "GERD & Chronic Acid Reflux",
        badge: "Mucosal Healing Protocols",
        badgeColor: "#0D9488",
        summary:
          "Gastroesophageal Reflux Disease (GERD) occurs when stomach acid repeatedly escapes into the esophagus, causing burning, regurgitation, and potential esophageal injury (Barrett's esophagus).",
        symptoms: [
          "Burning sensation in the chest (heartburn) often worse after meals or lying down",
          "Acidic sour liquid regurgitation into the throat or mouth",
          "Chronic dry cough, throat clearing, or nighttime hoarseness",
          "Difficulty or discomfort when swallowing solid food",
        ],
        diagnostics: [
          "Japanese HD Video Endoscopy with Narrow Band Imaging (NBI)",
          "24-Hour ambulatory pH-impedance monitoring for true acid exposure",
          "High-Resolution Esophageal Manometry to evaluate sphincter function",
          "Barium swallow study for hiatal hernia assessment",
        ],
        treatment: [
          "Targeted acid suppression therapy (PPIs, Potassium-competitive acid blockers)",
          "Mucosal protective agents and anti-reflux lifestyle optimization",
          "Endoscopic anti-reflux procedures or hiatal hernia surgical repair",
          "Regular surveillance for Barrett's esophagus dysplasia prevention",
        ],
      },
      {
        id: "h-pylori",
        headingIndex: "Heading 02",
        title: "H. Pylori Infection & Peptic Ulcers",
        badge: "Rapid Eradication Protocol",
        badgeColor: "#00843D",
        summary:
          "Helicobacter pylori is a bacterial pathogen that colonizes the stomach lining, causing chronic gastritis, painful gastric or duodenal ulcers, and increasing long-term gastric cancer risk.",
        symptoms: [
          "Gnawing, burning stomach pain between meals or during early morning hours",
          "Bloating, early fullness after small meals, and frequent burping",
          "Nausea, vomiting, and unexplained loss of appetite",
          "Dark black tarry stools indicating upper gastrointestinal ulcer bleeding",
        ],
        diagnostics: [
          "Non-invasive Carbon-14 / Carbon-13 Urea Breath Test (UBT)",
          "Stool H. Pylori Antigen test",
          "Endoscopic Rapid Urease Test (RUT / CLO test) with mucosal biopsy",
        ],
        treatment: [
          "Evidence-based 14-day triple/quadruple antibiotic eradication regimens",
          "High-dose proton pump inhibitors to promote mucosal ulcer healing",
          "Confirmation of bacterial cure with post-treatment breath testing",
          "Endoscopic hemoclip/cautery therapy for active ulcer hemorrhage",
        ],
      },
      {
        id: "achalasia",
        headingIndex: "Heading 03",
        title: "Achalasia Cardia",
        badge: "Incisionless POEM Surgery",
        badgeColor: "#7C3AED",
        summary:
          "Achalasia is a motility disorder where the lower esophageal sphincter fails to relax during swallowing, leading to progressive food stagnation, dilation, and severe weight loss.",
        symptoms: [
          "Progressive difficulty swallowing both solid foods and liquids (dysphagia)",
          "Regurgitation of undigested food, especially when lying flat at night",
          "Substernal chest pain often mistaken for cardiac angina",
          "Significant unintentional weight loss and chronic coughing",
        ],
        diagnostics: [
          "High-Resolution Esophageal Manometry (Eckardt score quantification)",
          "Timed Barium Swallow showing classic 'bird's beak' tapering",
          "Upper GI Endoscopy to rule out pseudoachalasia or esophageal strictures",
        ],
        treatment: [
          "POEM (Peroral Endoscopic Myotomy) — Incisionless Third Space Endoscopy",
          "Pneumatic balloon dilation for selective non-surgical candidates",
          "Endoscopic Botulinum toxin injection for temporary symptom control",
        ],
      },
      {
        id: "gastric-cancer-polyps",
        headingIndex: "Heading 04",
        title: "Gastric Cancer & Early Polyps",
        badge: "Early Resection & ESD",
        badgeColor: "#DC2626",
        summary:
          "Early gastric neoplasms and polyps detected at a superficial stage can be curatively resected endoscopically without requiring partial or total stomach removal.",
        symptoms: [
          "Often asymptomatic in early curable stages",
          "Vague indigestion, persistent dyspepsia, or post-prandial fullness",
          "Unexplained iron deficiency anemia or occult blood in stool",
          "Persistent upper abdominal discomfort and early satiety",
        ],
        diagnostics: [
          "High-Magnification Narrow Band Imaging (NBI) endoscopy",
          "Targeted micro-biopsy for histopathology and HER2/PD-L1 profiling",
          "Endoscopic Ultrasound (EUS) for precise submucosal depth assessment",
        ],
        treatment: [
          "Endoscopic Submucosal Dissection (ESD) for en-bloc organ-preserving resection",
          "Endoscopic Mucosal Resection (EMR) for smaller benign polyps",
          "Multidisciplinary oncological evaluation and staging",
        ],
      },
    ],
  },

  "intestines-and-colon": {
    slug: "intestines-and-colon",
    sectionType: "conditions",
    sectionLabel: "Conditions",
    badge: "Colorectal & Intestinal Health Center",
    title: "Intestines & Colon",
    titleAccent: "Conditions",
    description:
      "Specialized evidence-based protocols for Irritable Bowel Syndrome (IBS), Inflammatory Bowel Disease (IBD), Celiac Disease, and Colonic Polyps.",
    stats: [
      { label: "Comfort-Focused", sub: "HD Screening Colonoscopy", color: "#00843D" },
      { label: "IBD Biologics", sub: "Mucosal Healing Protocols", color: "#0078BF" },
      { label: "SIBO Breath Lab", sub: "Hydrogen & Methane Testing", color: "#D97706" },
      { label: "Capsule Imaging", sub: "Deep Small Intestine Camera", color: "#0D9488" },
    ],
    topics: [
      {
        id: "ibs",
        headingIndex: "Heading 01",
        title: "Irritable Bowel Syndrome (IBS)",
        badge: "Gut-Brain & SIBO Protocols",
        badgeColor: "#0D9488",
        summary:
          "IBS is a functional disorder involving visceral hypersensitivity, altered bowel motility, and gut microbiome dysbiosis, resulting in recurring abdominal pain and bowel irregularities.",
        symptoms: [
          "Abdominal cramping and pain frequently relieved after bowel movement",
          "Alternating bouts of diarrhea, constipation, or mixed bowel patterns",
          "Excessive abdominal bloating, visible distension, and flatulence",
          "Sensation of incomplete bowel evacuation",
        ],
        diagnostics: [
          "Hydrogen & Methane Breath Testing for SIBO (Small Intestinal Bacterial Overgrowth)",
          "Fecal Calprotectin to rule out organic bowel inflammation",
          "Celiac serology (anti-tTG IgA) and routine stool comprehensive analysis",
          "Colonoscopy to confirm normal mucosal architecture",
        ],
        treatment: [
          "Targeted gut microbiome modulation and non-absorbable antibiotic therapy (Rifaximin)",
          "Customized low-FODMAP dietary roadmap guided by clinical dietetics",
          "Antispasmodics and neuromodulators for visceral pain relief",
        ],
      },
      {
        id: "ibd",
        headingIndex: "Heading 02",
        title: "Inflammatory Bowel Disease (IBD)",
        badge: "Crohn's & Ulcerative Colitis",
        badgeColor: "#2563EB",
        summary:
          "IBD comprises Ulcerative Colitis and Crohn’s Disease — chronic autoimmune inflammatory disorders requiring precise immunosuppressive and biologic therapies to induce deep mucosal healing.",
        symptoms: [
          "Frequent loose stools with visible blood, mucus, or pus",
          "Urgent, painful need to defecate (tenesmus)",
          "Persistent abdominal cramps, fever, fatigue, and weight loss",
          "Extraintestinal manifestations including joint pain or mouth ulcers",
        ],
        diagnostics: [
          "High-definition colonoscopy with chromoendoscopy and targeted biopsies",
          "Fecal Calprotectin biomarker tracking for flare monitoring",
          "MR Enterography or CT Enterography for small bowel Crohn’s evaluation",
        ],
        treatment: [
          "Targeted biologic therapies (anti-TNF, anti-integrin, IL-12/23 inhibitors)",
          "Small molecule JAK inhibitors and immunomodulators (Azathioprine)",
          "Topical and oral 5-ASA preparations for long-term remission maintenance",
          "Colorectal cancer surveillance protocols with high-definition imaging",
        ],
      },
      {
        id: "celiac",
        headingIndex: "Heading 03",
        title: "Celiac Disease & Gluten Sensitivity",
        badge: "Duodenal Biopsy & Nutrition",
        badgeColor: "#D97706",
        summary:
          "An autoimmune enteropathy triggered by ingestion of gluten in genetically susceptible individuals, leading to small intestinal villous atrophy and severe malabsorption.",
        symptoms: [
          "Chronic diarrhea, fatty pale stools, and excessive abdominal bloating",
          "Unexplained iron deficiency anemia unresponsive to oral iron pills",
          "Unintended weight loss, nutritional deficiencies, and osteopenia",
          "Skin rashes (Dermatitis Herpetiformis) and chronic fatigue",
        ],
        diagnostics: [
          "Serum Tissue Transglutaminase (anti-tTG IgA) and total serum IgA",
          "Upper GI Endoscopy with multiple duodenal biopsies (Marsh histological grading)",
          "HLA-DQ2 / HLA-DQ8 genetic typing when serology is ambiguous",
        ],
        treatment: [
          "Strict lifelong gluten-free diet (GFD)",
          "Nutritional supplementation (Iron, Vitamin D, B12, Calcium)",
          "Follow-up serological antibody monitoring to ensure mucosal recovery",
        ],
      },
      {
        id: "polyps",
        headingIndex: "Heading 04",
        title: "Colonic Polyps & Cancer Screening",
        badge: "Endoscopic Polypectomy",
        badgeColor: "#00843D",
        summary:
          "Colorectal polyps are fleshy growths on the colon lining. Detecting and removing adenomatous polyps during screening colonoscopy significantly reduces the risk of colorectal cancer development.",
        symptoms: [
          "Usually completely asymptomatic in initial stages",
          "Occult or visible rectal bleeding during bowel movements",
          "Unexplained change in bowel habits or persistent iron deficiency anemia",
        ],
        diagnostics: [
          "Screening Colonoscopy under monitored conscious sedation",
          "Japanese HD Narrow Band Imaging (NBI) for pit-pattern micro-classification",
          "Fecal Immunochemical Test (FIT) for stool occult blood",
        ],
        treatment: [
          "Endoscopic Polypectomy using cold/hot snare electrocautery during colonoscopy",
          "Endoscopic Mucosal Resection (EMR) for large flat lateral spreading tumors",
          "Personalized surveillance intervals based on histopathology findings",
        ],
      },
    ],
  },

  "pancreas-and-biliary": {
    slug: "pancreas-and-biliary",
    sectionType: "conditions",
    sectionLabel: "Conditions",
    badge: "Pancreatico-Biliary Center of Excellence",
    title: "Pancreas & Biliary",
    titleAccent: "Conditions",
    description:
      "Expert tertiary care for Acute & Chronic Pancreatitis, Pancreatic Cysts, Pseudocysts, and Obstructive Biliary Diseases with Dr. Randeep Rana.",
    stats: [
      { label: "Advanced ERCP", sub: "CBD Stone & Biliary Stenting", color: "#00843D" },
      { label: "Linear EUS", sub: "High-Resolution Pancreatic Imaging", color: "#0078BF" },
      { label: "LAMS Protocol", sub: "Cystogastrostomy Pseudocyst Drainage", color: "#D97706" },
      { label: "PERT Therapy", sub: "Pancreatic Enzyme Optimization", color: "#0D9488" },
    ],
    topics: [
      {
        id: "acute-pancreatitis",
        headingIndex: "Heading 01",
        title: "Acute Pancreatitis",
        badge: "Emergency Stabilization & Care",
        badgeColor: "#DC2626",
        summary:
          "Sudden, acute inflammation of the pancreas usually triggered by gallstones or heavy alcohol use, requiring urgent hospitalization and evidence-based stabilization.",
        symptoms: [
          "Severe, sudden epigastric pain radiating directly to the back",
          "Pain aggravated after eating and leaning backwards",
          "Persistent nausea, intractable vomiting, and abdominal distension",
          "Tachycardia, low blood pressure, and fever in severe cases",
        ],
        diagnostics: [
          "Serum Lipase and Amylase (elevated >3 times upper normal limit)",
          "Contrast-Enhanced CT Abdomen (CECT) to assess necrosis (Balthazar score)",
          "Abdominal ultrasound and MRCP to detect gallstone etiology",
        ],
        treatment: [
          "Goal-directed IV fluid hydration and multimodal analgesia",
          "Urgent therapeutic ERCP within 24-48 hours if biliary obstruction/cholangitis is present",
          "Early oral/enteral feeding as soon as ileus resolves",
        ],
      },
      {
        id: "chronic-pancreatitis",
        headingIndex: "Heading 02",
        title: "Chronic Pancreatitis",
        badge: "Enzyme Replacement & Pain Care",
        badgeColor: "#D97706",
        summary:
          "Irreversible structural destruction of the pancreas characterized by calcifications, ductal strictures, debilitating chronic pain, exocrine insufficiency, and diabetes.",
        symptoms: [
          "Recurrent, constant dull upper abdominal pain radiating to the spine",
          "Steatorrhea: oily, foul-smelling stools that float and are hard to flush",
          "Weight loss despite adequate appetite due to maldigestion",
          "Onset of Type 3c pancreatogenic diabetes",
        ],
        diagnostics: [
          "Endoscopic Ultrasound (EUS) — Gold standard for early parenchymal changes",
          "MRCP with secretin enhancement to evaluate pancreatic duct anatomy",
          "Fecal Elastase-1 test to quantify exocrine pancreatic insufficiency",
        ],
        treatment: [
          "Pancreatic Enzyme Replacement Therapy (PERT) tailored to meal fat content",
          "Evidence-based pain management including pregabalin-based neural pathways",
          "Endoscopic pancreatic duct stone extraction and stenting via ERCP",
          "EUS-guided celiac plexus block for refractory chronic abdominal pain",
        ],
      },
      {
        id: "pancreatic-cysts-tumors",
        headingIndex: "Heading 03",
        title: "Pancreatic Tumors & Cysts",
        badge: "EUS & Precision Biopsy",
        badgeColor: "#7C3AED",
        summary:
          "Pancreatic cystic lesions (IPMN, MCN, serous cystadenomas) and solid tumors requiring high-resolution characterization to determine malignant potential.",
        symptoms: [
          "Often discovered incidentally on abdominal scans for unrelated reasons",
          "Painless obstructive jaundice (yellow eyes, itching, dark urine)",
          "Unexplained new-onset diabetes in older adults without family history",
          "Mid-epigastric back pain and unintentional weight loss",
        ],
        diagnostics: [
          "Linear Endoscopic Ultrasound (EUS) with Fine Needle Biopsy (FNB)",
          "Cyst fluid aspiration analysis (CEA level, Amylase, Glucose, Cytology)",
          "Pancreatic protocol triphasic dynamic CT / MRI",
        ],
        treatment: [
          "Regular EUS/MRI surveillance protocols for low-risk mucinous cysts (IPMN)",
          "Multidisciplinary tumor board evaluation for surgical resection (Whipple procedure)",
          "Endoscopic palliative biliary and duodenal stenting for advanced lesions",
        ],
      },
      {
        id: "pseudocysts",
        headingIndex: "Heading 04",
        title: "Pancreatic Pseudocysts & Walled-Off Necrosis (WON)",
        badge: "EUS-Guided Drainage (LAMS)",
        badgeColor: "#00843D",
        summary:
          "Encapsulated fluid or necrotic collections forming around the pancreas following severe pancreatitis episodes, which may be managed through minimally invasive endoscopic drainage techniques in eligible patients.",
        symptoms: [
          "Persistent abdominal fullness, early satiety, and gastric outlet obstruction",
          "Persistent low-grade fever or infection of the fluid collection",
          "Continuous upper belly pain and nausea",
        ],
        diagnostics: [
          "Endoscopic Ultrasound (EUS) to measure wall thickness and vascular proximity",
          "Contrast-Enhanced CT / MRI Abdomen",
        ],
        treatment: [
          "EUS-Guided Cystogastrostomy using plastic double-pigtail stents",
          "Lumen-Apposing Metal Stents (LAMS) with direct endoscopic necrosectomy (DEN)",
          "Minimally invasive internal drainage protocol supporting recovery",
        ],
      },
    ],
  },
};
