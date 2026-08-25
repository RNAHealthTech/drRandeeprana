import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import CtaBanner from "@/components/CtaBanner";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Award,
  Users,
  Trophy,
  Activity,
  Microscope,
  Calendar,
  Compass,
  FileCheck2,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Flame,
  Globe,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Curriculum Vitae — Dr. Randeep Rana | Consultant Gastroenterology Saket",
  description:
    "Curriculum Vitae of Dr. Randeep Rana — MBBS (DMCH), MD (Dr. RMLH), DM (AIIMS Delhi), Fellowship in Advanced GI Endoscopy (AIIMS Delhi). Consultant Gastroenterology at Max Smart Saket.",
};

export default function AboutPage() {
  const educationTable = [
    {
      course: "Fellowship in Advanced GI Endoscopy",
      duration: "July 2023 to July 2024",
      institute: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      course: "D.M. (Gastroenterology)",
      duration: "July 2020 to July 2023",
      institute: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      course: "M.D. (Internal Medicine)",
      duration: "May 2015 to May 2018",
      institute: "ABVIMS & Dr Ram Manohar Lohia Hospital (Dr RMLH), New Delhi",
    },
    {
      course: "MBBS",
      duration: "Aug 2008 to Dec 2012",
      institute: "Dayanand Medical College & Hospital (DMCH), Ludhiana",
    },
  ];

  const clinicalExperience = [
    {
      position: "Consultant – Gastroenterology",
      duration: "May 2026 – Present",
      institution: "Max Smart Super Speciality Hospital, Saket, New Delhi",
    },
    {
      position: "Clinical Assistant / Associate Consultant",
      duration: "July 2025 – May 2026",
      institution: "Institute of Liver, Gastroenterology and Pancreatico-Biliary Sciences (ILGPS), Sir Ganga Ram Hospital, New Delhi",
    },
    {
      position: "Assistant Professor, Department of Gastroenterology",
      duration: "July 2024 – July 2025",
      institution: "GB Pant Institute of Postgraduate Medical Education and Research (GIPMER), New Delhi",
    },
    {
      position: "Fellow – Advanced GI Endoscopy",
      duration: "July 2023 – July 2024",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      position: "Senior Resident (DM Gastroenterology)",
      duration: "July 2020 – July 2023",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      position: "Senior Resident (Internal Medicine)",
      duration: "2019",
      institution: "PGIMER, Chandigarh",
    },
    {
      position: "Senior Resident (Internal Medicine)",
      duration: "2018",
      institution: "ABVIMS & Dr Ram Manohar Lohia Hospital, New Delhi",
    },
    {
      position: "Medical Internship",
      duration: "01/01/2013 to 15/02/2014",
      institution: "Dayanand Medical College & Hospital (DMCH), Ludhiana, Punjab, India",
    },
  ];

  const fullPublicationsList = [
    {
      id: 1,
      text: "Patel, D., Sonika, U., Rana, R. et al. A fluid dynamics perspective on common bile duct dilatation in patients with low cystic duct insertion. Indian J Gastroenterol (2026). https://doi.org/10.1007/s12664-025-01957-3",
      journal: "Indian J Gastroenterol (2026)",
    },
    {
      id: 2,
      text: "Chauhan, A., Gopi, S., Rana, R. et al. Non-selective beta blockers in pregnancy: Are we there yet?. Indian J Gastroenterol (2026). https://doi.org/10.1007/s12664-025-01959-1",
      journal: "Indian J Gastroenterol (2026)",
    },
    {
      id: 3,
      text: "Rana, Randeep MD, DM1,*; Tabish, Mohammed MD1,*; Agarwal, Samagra MD, DM1,*; Bayye, Rajkumar MD1; Ahmed, Syed MD1; Gunjan, Deepak MD, DM1; Sharma, Sanchit MD, DM1,a; Saraya, Anoop MD, DM, DNB1,a. Simvastatin addition to standard of care improves long-term survival in patients with cirrhosis after variceal bleed: An open label randomized controlled trial. The American Journal of Gastroenterology ():10.14309/ajg.0000000000003689, July 31, 2025. | DOI: 10.14309/ajg.0000000000003689",
      journal: "The American Journal of Gastroenterology (2025)",
    },
    {
      id: 4,
      text: "Rana, Randeep MD, DM*; Agarwal, Samagra MD, DM*; Qamar, Sumaira MSc*; Gopi, Srikanth MD, DM*; Bhatia, Renu MD†; Madhusudhan, Kumble Seetharama MD‡; Gunjan, Deepak MD, DM*; Saraya, Anoop MD, DM*. Adjunctive Incremental Pregabalin Therapy Leads to Better Pain Relief in Patients With Chronic Pancreatitis: A Double-blind Randomized Controlled Trial. Journal of Clinical Gastroenterology ():10.1097/MCG.0000000000002173, July 17, 2025. | DOI: 10.1097/MCG.0000000000002173",
      journal: "Journal of Clinical Gastroenterology (2025)",
    },
    {
      id: 5,
      text: "Jain K, Jagannath S, Tabish M, Sharma V, Midha S, Rana R, et al. Mo1478: PRSS Gene Mutation Is Rare In Indian Patients With Hereditary Pancreatitis Who Have Disease Trajectory Similar To Sporadic Cp With Spink1 Mutation. Gastroenterology [Internet]. 2025 May 3;169(1):S-1150-S-1151. Available from: https://doi.org/10.1016/S0016-5085(25)03550-4",
      journal: "Gastroenterology (2025)",
    },
    {
      id: 6,
      text: "Agarwal S, Rana R, Sharma S. Simvastatin and Rifaximin for Patients With Decompensated Cirrhosis. JAMA. Published online June 25, 2025. doi:10.1001/jama.2025.6135",
      journal: "JAMA (2025)",
    },
    {
      id: 7,
      text: "Rana, R., Mahapatra, S.J. & Garg, P.K. Endoscopic interventions for managing pancreatic fluid collections associated with acute pancreatitis: A state-of-the-art review (with videos). Indian J Gastroenterol (2025). https://doi.org/10.1007/s12664-025-01755-x",
      journal: "Indian J Gastroenterol (2025)",
    },
    {
      id: 8,
      text: "Rana, Randeep, Mohammad Tabish, and Soumya Jagannath Mahapatra. 2025. “Improving Mortality Prediction in Acute Pancreatitis: A Proposal for Refining ICU Risk Scoring Models.” Pancreatology. https://doi.org/10.1016/j.pan.2025.04.002.",
      journal: "Pancreatology (2025)",
    },
    {
      id: 9,
      text: "Agarwal S, Rana R, Tabish M, Gunjan D, Saraya A, Sharma S. Survival benefit with simvastatin in cirrhosis and recent variceal bleed: Bayesian reanalysis of a randomized controlled trial. J Clin Exp Hepatol [Internet]. 2025 Jan 1;15. Available from: https://doi.org/10.1016/j.jceh.2025.102799",
      journal: "J Clin Exp Hepatol (2025)",
    },
    {
      id: 10,
      text: "Patel DV, Srivastava S, Rana R, Sonika U, Patel R, Chittem R. When The Liver and Nerves Collide: Alcoholic Hepatitis Complicated By Acute Inflammatory Demylinating Polyneuropathy. J Clin Exp Hepatol [Internet]. 2025 Jan 1;15. Available from: https://doi.org/10.1016/j.jceh.2025.102716",
      journal: "J Clin Exp Hepatol (2025)",
    },
    {
      id: 11,
      text: "Gupta, Anany MD1,*; Rana, Randeep MD1,*; Agarwal, Samagra MD, DM1,*; Sharma, Sanchit MD, DM1,2,**; Gopi, Srikanth MD, DM1; Mohta, Srikant MD, DM1; Gunjan, Deepak MD, DM1; Saraya, Anoop MD, DM, DNB1,**. Assessing the Risk of Further Decompensation and Survival in Patients With Cirrhosis With Variceal Bleeding as Their First Decompensation Event. The American Journal of Gastroenterology 118(5):p 833-839, May 2023. | DOI: 10.14309/ajg.0000000000002018",
      journal: "The American Journal of Gastroenterology (2023)",
    },
    {
      id: 12,
      text: "Tabish, Mohammad MD, DM1,*; Agarwal, Samagra MD, DM1,*; Gopi, Srikanth MD, DM1; Rana, Randeep MD, DM1; Ahmed, Syed MD, DM1; Gunjan, Deepak MD, DM1; Sharma, Sanchit MD, DM1,*; Saraya, Anoop MD, DM, DNB1,*. Randomized Controlled Trial of Intravenous Ferric Carboxymaltose vs Oral Iron to Treat Iron Deficiency Anemia After Variceal Bleed in Patients With Cirrhosis. The American Journal of Gastroenterology 119(10):p 2061-2069, October 2024. | DOI: 10.14309/ajg.0000000000002775",
      journal: "The American Journal of Gastroenterology (2024)",
    },
    {
      id: 13,
      text: "Rana, Randeep & Sharma, Sanchit & Ahmed, Syed & Gupta, Anany Wong, Yu Jun & Gunjan, Deepak & Saraya, Anoop. (2022). Evaluating the Practice of Prescribing Beta-blockers in Compensated Cirrhosis by Gastroenterologists in the Asia Pacific Region. Journal of Clinical and Experimental Hepatology. 13.10.1016/j.jceh.2022.09.003.",
      journal: "J Clin Exp Hepatol (2022)",
    },
    {
      id: 14,
      text: "Sharma S, Agarwal S, Madhu D, Rana R, Gupta A, Gopi S, Gunjan D, Saraya A. Distinct course of portal hypertension in patients with cirrhosis with gastric variceal bleeding as their first decompensation: a propensity score-matched study. Hepatol Int. 2023 Apr;17(2):427-433. doi: 10.1007/s12072-022-10451-3. Epub 2022 Dec 19. PMID: 36534299",
      journal: "Hepatol Int (2023)",
    },
    {
      id: 15,
      text: "Rana, Randeep, Tabish Mohammad, Samagra Agarwal, Rajkumar Bayye, Syed Ahmed, Deepak Gunjan, Sanchit Sharma, and Anoop Saraya. 2024. “OS-098-YI Addition of Simvastatin to Carvedilol Improves Survival in Patients with Decompensated Cirrhosis after Variceal Bleed. A Randomised Controlled Trial.” Journal of Hepatology 80 (June). Elsevier BV: S62. doi:10.1016/s0168-8278(24)00539-7.",
      journal: "Journal of Hepatology (2024)",
    },
    {
      id: 16,
      text: "Rana, Randeep, Soumya Jagannath, Taruna Shyam, Bhabatosh Das, Anshuman Elhence, Anugrah Dhooria, Anany Gupta, et al. 2024. “Mo1927 Microbiome and mycobiome metagenomics reveals presence of microbes in pancreatic tissue of patients with chronic pancreatitis: implications for pathophysiology of persistent inflammation and pain.” Gastroenterology 166 (5). Elsevier BV: S-1177. doi:10.1016/s0016-5085(24)03166-4.",
      journal: "Gastroenterology (2024)",
    },
    {
      id: 17,
      text: "Rana R, Agarwal S, Bhatia R, Madhusudhan KS, Gunjan D, Saraya A. Adjunctive incremental pregabalin therapy versus placebo for pain management in chronic pancreatitis: a randomized controlled trial, Pancreatology, Volume 23, Issue 8, 2023, Page e16, ISSN 1424-3903, https://doi.org/10.1016/j.pan.2023.09.049.",
      journal: "Pancreatology (2023)",
    },
    {
      id: 18,
      text: "Rana, Randeep & Agarwal, Samagra & Sharma, Sanchit & Sonika, Ujjwal & Ahmed, & Syed Gopi, Srikanth & Gunjan, Deepak & Saraya, Anoop. (2022). Non-invasive tools are suboptimal to predict the presence of varices needing treatment and risk of clinical decompensation in patients with autoimmune hepatitis related cirrhosis. Journal of Hepatology. 77. S635. 10.1016/S0168-8278(22)01586-0.",
      journal: "Journal of Hepatology (2022)",
    },
    {
      id: 19,
      text: "Randeep Rana, Soumya Jagannath Mahapatra, Shallu Middha, Tanmay Vajpai, Gadella Varun Teja, Anugrah Dhooria, Ashish Dutta Upadhyay, Pramod Kumar Garg. Characterization of pancreatic head mass in patients with chronic pancreatitis. Indian J Gastroenterol. 2023 Jan;42(Suppl 1):1-124. doi: 10.1007/s12664-022-01305-9. PMID: 36512172; PMCID: PMC9745698.",
      journal: "Indian J Gastroenterol (2023)",
    },
    {
      id: 20,
      text: "Jagannath, Soumya, Manpreet Uppal, Anugrah Dhooria, Randeep Rana, Anany Gupta, Tony G. Jacob, Harlokesh N. Yadav, et al. 2024. “Sa1455 Safety and efficacy of corticosteroids in severe acute pancreatitis: results of experimental and pilot human studies.” Gastroenterology 166 (5). Elsevier BV: S-455-S-456. doi:10.1016/s0016-5085(24)01519-1.",
      journal: "Gastroenterology (2024)",
    },
    {
      id: 21,
      text: "Dhooria, Anugrah, Soumya Jagannath, Deepak Pandey, Deepak Rathore, Amit Awasthi, Anshuman Elhence, Anany Gupta, Randeep Rana, Dipendra Mitra, and Pramod K. Garg. 2023. “574 characterization of cytokine storm syndrome and secondary hemophagocytic lymphohistiocytosis in patients with early severe acute pancreatitis: a prospective cohort study.” Gastroenterology 164 (6). Elsevier BV: S-104-S-105. doi:10.1016/s0016-5085(23)01215-5",
      journal: "Gastroenterology (2023)",
    },
    {
      id: 22,
      text: "A. Elhence, A. Gupta, S.J. Mahapatra, K. Madan, H. Iyer, S. Pandey, A. Dhooria, R. Rana, A. Trikha, P.K. Garg, Non-invasive ventilation decreases the need for invasive mechanical ventilation and hospital acquired pneumonia in acute hypoxemic respiratory failure due to acute pancreatitis (BIPAP trial): a randomized controlled trial, Pancreatology, Volume 23, Issue 8, 2023, Page e2, ISSN 1424-3903, https://doi.org/10.1016/j.pan.2023.09.006.",
      journal: "Pancreatology (2023)",
    },
    {
      id: 23,
      text: "Ahmed, Syed, Samagra Agarwal, Ujjwal Sonika, Randeep Rana, Mohammad Tabish, Deepak Gunjan, Anoop Saraya, and Sanchit Sharma. 2024. “Carvedilol Does Not Prevent Decompensation in Patients with Compensated Cirrhosis without High-Risk Varices with Clinically Significant Portal Hypertension Defined by Non-Invasive Tests: A Randomised Controlled Trial.” Journal of Clinical and Experimental Hepatology 14. Elsevier BV: 102053. doi:10.1016/j.jceh.2024.102053.",
      journal: "J Clin Exp Hepatol (2024)",
    },
    {
      id: 24,
      text: "Makharia, Govind K & Rana, Randeep & Rajput, Mahendra Singh. (2022). A young patient with chronic diarhhea; Interesting clinical cases in Medicine, Chapter 2, edition 1/e, 2022, ISBN: 9789354657795, https:/doi.org/ 10.5005/jp/books/18676_3",
      journal: "Book Chapter (2022)",
    },
    {
      id: 25,
      text: "Saroch, Atul, Ramu Ramadoss, Shailesh Kumar, Sujata Mathews, Rajesh Satyapal Taneja, Mohammad Ali, and Randeep Rana. \"Clinical Profile of Suspected H1N1 Influenza Patients and Predictor of Mortality in H1N1-Positive Patients.\" Infectious Diseases in Clinical Practice 26, no. 1 (2018): 35-38.",
      journal: "Infectious Diseases in Clinical Practice (2018)",
    },
    {
      id: 26,
      text: "Mohammad, Tabish, Sanchit Sharma, Samagra Agarwal, Srikanth Gopi, Randeep Rana, Deepak Gunjan, and Anoop Saraya. \"Randomised controlled trial of intravenous versus oral iron in treatment of iron deficiency anaemia after variceal bleeding in patients with cirrhosis.\" Journal of Hepatology 78 (2023): S233-S235.",
      journal: "Journal of Hepatology (2023)",
    },
    {
      id: 27,
      text: "Samanta, Jayanta, Soumya Jagannath Mahapatra, Naveen Kumar, Anshuman Elhence, Jahnvi Dhar, Anany Gupta, Anugrah Dhooria et al. \"Virus related acute pancreatitis and virus superinfection in the ‘Dual disease’model of acute pancreatitis and SARS-Co-V2 infection: a multicentre prospective study.\" Pancreatology 22, no. 3 (2022): 339-347.",
      journal: "Pancreatology (2022)",
    },
    {
      id: 28,
      text: "Agarwal, Samagra, Sanchit Sharma, Abhinav Anand, Rajat Bansal, Anany Gupta, Randeep Rana, Srikant Mohta et al. \"Do Patients with Viral Cirrhosis and Clinically Significant Portal Hypertension After Effective Viral Suppression Really Have Better Outcomes in Comparison to Those with Non-viral Cirrhosis? A Pragmatic Study.\" Journal of Clinical and Experimental Hepatology 12 (2022): S14-S15.",
      journal: "J Clin Exp Hepatol (2022)",
    },
    {
      id: 29,
      text: "Sharma, Sanchit, Deepak Madhu, Rajat Bansal, Samagra Agarwal, Randeep Rana, Anany Gupta, Neelam Lohani et al. \"Non-hemodynamic effects of terlipressin in patients with acute variceal bleeding: a prospective pilot study.\" in Hepatology, vol. 74, pp. 1257a-1258a. Wiley, 2021",
      journal: "Hepatology (2021)",
    },
    {
      id: 30,
      text: "Sharma, Sanchit, Ashish Chauhan, Samagra Agarwal, Rajat Bansal, Ananya Gupta, Randeep Rana, Abhinav Anand et al. \"A Combination of Clinical Decompensation and Hepatic Venous Pressure Gradient> 16 mm Hg Identify Patients Needing Response Assessment to Beta-Blockers after Acute Variceal Bleeding. A 6-Year Follow-Up Study.\" Journal of Clinical and Experimental Hepatology 12 (2022): S48.",
      journal: "J Clin Exp Hepatol (2022)",
    },
    {
      id: 31,
      text: "Sharma, Sanchit, Abhinav Anand, Deepak Madhu, Samagra Agarwal, Rajat Bansal, Ananya Gupta, Randeep Rana, Deepak Gunjan, and Anoop Saraya. \"Systemic Inflammation and Endotoxemia in Peripheral and Hepatic Venous Circulation with its Correlation with Hepatic Venous Pressure Gradient in Patients with Acute Variceal Bleeding: A Proof of Concept.\" Journal of Clinical and Experimental Hepatology 12 (2022): S17.",
      journal: "J Clin Exp Hepatol (2022)",
    },
    {
      id: 32,
      text: "Ramu, Ramadoss, Vivek Arya, Ashish Sharma, and Randeep Rana. \"Peripheral Gangrene in a Rare Scleroderma Overlap Syndrome.\" The Journal of the Association of Physicians of India 69, no. 1 (2021): 74-75.",
      journal: "JAPI (2021)",
    },
    {
      id: 33,
      text: "Gupta, Pulin Kumar, Pankaj Kumar Gupta, Randeep Rana, Akhila Bhandarkar, Alpana Chugh, Daizy Maheshwari, and R. S. Taneja. \"A Young Hypertensive with a Neck Mass with Pyrexia of Unknown Origin (PUO).\" 19, no. 1 (2018): 67.",
      journal: "Clinical Practice (2018)",
    },
    {
      id: 34,
      text: "Kaur Gurmeet, Rana Randeep. Tuberculosis causing gullaine barre syndrome: A rare presentation. Open J Clin Med Case Rep. 2020; 1634.",
      journal: "Open J Clin Med Case Rep (2020)",
    },
    {
      id: 35,
      text: "Rana Randeep, Arya Vivek, Taneja R S, Ali Mohammad, Ramu Ramadoss, Gupta Kushagra. “PC090 Correlation of disease activity score 28 with anticcp levels in patients with rheumatoid arthritis.” Indian Journal of Rheumatology 12(Suppl 1):p S16-S132, November 2017. | DOI: 10.4103/0973-3698.219140",
      journal: "Indian Journal of Rheumatology (2017)",
    },
    {
      id: 36,
      text: "Gupta Kushagra, Ramu Ramadoss, Arya Vivek, Rana Randeep. “PC098 Correlation of disease activity score 28 with neutrophil lymphocyte ratio and platelet lymphocyte ratio in patients with rheumatoid arthritis.” Indian Journal of Rheumatology 12(Suppl 1):p S16-S132, November 2017. | DOI: 10.4103/0973-3698.219140",
      journal: "Indian Journal of Rheumatology (2017)",
    },
  ];

  const pipelinePublications = [
    "Non-invasive tools are suboptimal to predict the presence of varices needing treatment and risk of clinical decompensation in patients with autoimmune hepatitis related cirrhosis (First Author)",
    "Microbiome and mycobiome metagenomics reveals presence of microbes in pancreatic tissue of patients with chronic pancreatitis: implications for pathophysiology of persistent inflammation and pain (Joint First Author)",
    "Visceral Arterial Pseudoaneurysm Treatment with EUS-Guided Thrombin or Thrombin-Coil Combination: A Single-Centre Experience (VAPT-EASE Study) - (Joint First Author)",
    "Evaluating a Decade of EPLBD: Outcomes in Common Bile Duct Stone Management at a tertiary care centre (Joint First Author)",
  ];

  const ongoingProjects = [
    "To study the natural history of ascites in acute on chronic liver failure and its impact on clinical outcomes - a multicentric cohort study from AARC",
    "Multicentric open label, pragmatic, randomized, controlled trial to compare the clinical outcome with 0.5 versus 1.0 mg entecavir for hepatitis B related decompensated cirrhosis (SECOND trial)",
    "To estimate the Socio-demographic profile of patients with Inflammatory bowel disease in India",
    "To compare the clinical outcomes of patients with pancreatitis and arterial pseudoaneurysms managed using endosonography against endovascular intervention",
    "Comparison of clinical outcomes in patients with cirrhosis and fundal varices with bleed managed using EUS guided embolization versus Balloon occluded Retrograde Transvenous Obliteration (BRTO)",
  ];

  const internationalConferences = [
    "Best oral presentation (Clinical) (received travel grant and award) - 'Addition of simvastatin to carvedilol improves survival in patients with decompensated cirrhosis after variceal bleed. A randomised controlled trial' - EASL Congress 2024, Milan, Italy",
    "Oral - 'Adjunctive incremental pregabalin therapy versus placebo for pain management in chronic pancreatitis: a randomized controlled trial' - PANCREAS 2023 - joint international conference of International association of pancreatology (IAP) and Indian pancreas club (IPC), New Delhi (2023)",
    "Best Abstract Presentation Prize: 'Visceral Arterial Pseudoaneurysm Treatment with EUS-Guided Thrombin or Thrombin-Coil Combination: A Single-Centre Experience (VAPT-EASE Study)' - Moderated Poster Session: EUS Hot Topics, UEG Week, October 2025, Messe Berlin, Germany",
    "Poster of Distinction - 'Visceral Arterial Pseudoaneurysm Treatment with EUS-Guided Thrombin or Thrombin-Coil Combination: A Single-Centre Experience (VAPT-EASE Study)' - Asian Pacific Digestive Week (APDW), Singapore (2025)",
    "Poster - 'CLEAR Study: Clearance Using EPLBD in Difficult CBD Stones – A Decade’s Tertiary Care Experience' UEG Week, October 2025, Messe Berlin, Germany",
    "Poster - 'CLEAR Study: Clearance Using EPLBD in Difficult CBD Stones – A Decade’s Tertiary Care Experience' - Asian Pacific Digestive Week (APDW), Singapore (2025)",
    "Poster - 'Microbiome and mycobiome metagenomics reveals presence of microbes in pancreatic tissue of patients with chronic pancreatitis: implications for pathophysiology of persistent inflammation and pain' - Digestive Disease Week, DDW, Washington, USA (2024)",
    "Poster - 'Characterization of pancreatic head mass in patients with chronic pancreatitis' - American pancreatology association (APA) annual meeting, Orlando, Florida, USA (2022)",
    "Poster - 'Non-invasive tools are suboptimal to predict the presence of varices needing treatment and risk of clinical decompensation in patients with autoimmune hepatitis related cirrhosis.' - International Liver congress (ILC), EASL, London, United Kingdom (2022)",
    "Poster - 'Long term outcomes in patients with isolated gastric variceal bleeding without previous clinical decompensations: a propensity score matched study' - The Liver meeting (AASLD), San Diego, USA (2021)",
  ];

  const nationalConferences = [
    "Oral Presentation (Plenary Session) - 'Visceral Arterial Pseudoaneurysm Treatment with EUS-Guided Thrombin or Thrombin-Coil Combination: A Single-Centre Experience (VAPT-EASE Study)' - 25th annual conference of Society of gastrointestinal society of India (SGEI), ENDOCON, Jaipur (2025)",
    "Oral presentation (Plenary session) - 'Characterization of pancreatic head mass in patients with chronic pancreatitis' - 22nd annual conference of Society of gastrointestinal society of India (SGEI), ENDOCON, Hyderabad (2022)",
    "Best Oral (Third prize) - 'Characterization of pancreatic head mass in patients with chronic pancreatitis' - Indian Pancreas Club (IPC) meeting, New Delhi (2022)",
    "Poster - 'Characterization of pancreatic head mass in patients with chronic pancreatitis' - 63rd Annual Conference of the Indian Society of Gastroenterology, ISGCON, Jaipur (2022)",
    "Poster - 'Correlation of Disease activity score (DAS28) with anti-CCP levels in patients with Rheumatoid arthritis' - 33rd annual conference of Indian rheumatology association (IRACON), Lucknow (2017)",
    "Oral - 'An unusual case of quadriparesis' - API - Delhi state chapter (2017)",
  ];

  const clinicalSkillsList = [
    {
      category: "1. Clinical and ICU Management of GI & Liver Diseases",
      points: [
        "Liver diseases like cirrhosis and its complications, viral hepatitis, acute and chronic liver failure, hepatocellular carcinoma, Budd-chiari syndrome",
        "Pancreatic diseases including acute and chronic pancreatitis and their complications",
        "Bowel Diseases including complicated and steroid refractory inflammatory bowel disease, Intestinal tuberculosis, Celiac enteropathy, and Functional bowel diseases including irritable bowel syndrome",
      ],
    },
    {
      category: "2. Basic Endoscopic Procedures",
      points: [
        "Diagnostic and therapeutic upper GI endoscopy including variceal and non-variceal bleed management, polypectomy",
        "Diagnostic and therapeutic colonoscopic procedures including hot and cold snare polypectomy",
      ],
    },
    {
      category: "3. Advanced Endoscopic Procedures",
      points: [
        "Endoscopic retrograde cholangiopancreatography (ERCP)",
        "Advanced pancreatic interventions including ERCP/EUS guided pancreatic stenting, percutaneous and direct endoscopic necrosectomy in patients with necrotizing pancreatitis",
        "Diagnostic and therapeutic endosonographic assisted procedures including advanced procedure like cystogastrostomy (plastic and LAMS/BFMS insertion)",
        "Third space endoscopy including POEM, ESD",
        "Early GI cancer management including EMR, ESD and EFTR (FTRD)",
      ],
    },
    {
      category: "4. Exposure & Other Advanced Interventions",
      points: [
        "EUS guided biliary drainage including rendezvous, antegrade stenting, choledocho-duodenostomy and hepaticogastrostomy",
        "EUS guided vascular interventions including gastric varices and pseudoaneurysm embolization",
        "EUS guided gastrojejunostomy",
        "Endoscopic submucosal dissection (ESD)",
        "Magnetic Compression Anastomosis in bile duct injury",
        "Endoscopic suturing using X-Tack",
      ],
    },
  ];

  const awardsList = [
    "Gold Medal (First Position) - Medicine, MBBS (2012)",
    "All India Rank- 69, State Rank- 2 (NEET-PG)",
    "All India Rank- 2 (AIIMS SS Exam - DM Gastroenterology, 2020)",
    "All India Rank- 1 (Entrance, Fellowship in Advanced GI Endoscopy, AIIMS, 2023)",
    "Advanced Certification Workshop of Full-Thickness Resection Device (FTRD) by OVESCO, Germany at AIIMS, New Delhi (2025)",
    "Post-Graduate Program (Cardiology) by Johns Hopkins University - Distinction (2017)",
    "Advanced Certification Workshop (Diabetes) by Cardiff University (2017)",
    "International Travel Grants: EASL Travel Grant (2024), ICMR International Travel Grant (2024), APDW/JGHF Travel Grant (2025)",
    "Organizing Member for National/International Conferences: IAP-IPC Joint Conference (PANCREAS, 2023), APAGE-CCF (I)- CDAI IBD Meet (2022)",
    "Reviewer for International Journals: Pancreatology (Official Journal of IAP), The American Journal of Gastroenterology, Digestive Diseases and Sciences, BMC Gastroenterology, Frontiers in Surgery/Medicine/Cellular & Infection Microbiology, Clinics and Research in Hepatology and Gastroenterology, Cureus",
    "National Faculty for Various Conferences: ENDOCON (2025 Jaipur), India EUS Summit (2025 New Delhi), GI Confluence (2024 New Delhi), GBPGCON (2025 New Delhi), Clinics in Hepato-Biliary Diseases (2025 New Delhi)",
  ];

  const extracurriculars = [
    "Represented and captained college cricket team in various intercollege cricket tournaments including Euphoria (GMCH-32, Chandigarh)",
    "All-rounder performances in cricket for various tournaments",
    "Best Batsman (2012 - SMASH, DMCH)",
    "Best Bowler (2011 - SMASH, DMCH)",
    "Best Bowler - Resident’s Cricket League (RCL), AIIMS (2020)",
    "2nd Most Valuable Player - Resident’s Cricket League (RCL), AIIMS (2024)",
    "Best Bowler - Delhi Medical Association (DMA) Cricket Tournament (2024)",
    "Represented College Badminton Team (DMCH, 2008-12)",
  ];

  const futureVision = {
    shortTerm: [
      "To make and be a part of a gastroenterology team seeking excellence as a team",
      "Achieving the finesse in advanced endoscopic skills like Third space endoscopy including ESD, Endosuturing, Narrow Band Imaging (NBI) and Endobariatrics",
      "Pursuing additional certifications and hands-on training courses from established societies and centres (WEO International School of EUS for EUS training, Ken Ohata Medical Center, Tokyo for ESD), ESGE International Fellowship",
      "Development of better nutritional protocols for catastrophic illnesses like acute pancreatitis",
    ],
    longTerm: [
      "Development of Novel and cost-effective indigenous endoscopic devices - (Endoscopic necrosectomy devices - mechanical and chemical, Echoendoscopic needles for coiling and glue for varices/pseudoaneurysms, LAMS)",
      "Explore the therapeutic role of endoscopy and echoendoscopy in GI malignancies",
      "Real life practical research for cost-effective management",
      "Translational medicine for better understanding of disease process and management",
      "Teaching, Training and patient education (Digital forums can be used) alongside development of practice",
      "Development of Centre of excellence for quality and cost-effective management of GI diseases",
    ],
  };

  return (
    <div className="bg-white text-[#1C2936]">
      <PageHeader
        badge="Curriculum Vitae"
        title="Dr. Randeep Rana"
        subtitle="MBBS (DMCH, LUDHIANA), M.D (Dr. RMLH, DELHI), D.M (Gastroenterology, AIIMS, DELHI), Fellowship in Advanced GI Endoscopy (AIIMS, DELHI)"
        breadcrumbs={[{ label: "Curriculum Vitae" }]}
        bgImage="/images/dr-randeep-rana-scrubs-front.jpg"
      />

      {/* CV Quick Credentials & Contact Strip */}
      <section className="py-8 bg-[#002C47] text-white border-b border-[#001D30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2 text-xs sm:text-sm text-slate-200 font-light">
              <p><strong className="text-[#6CB29D]">Current Position:</strong> Consultant Gastroenterology, Max Smart Superspeciality Hospital, Saket, New Delhi, India</p>
              <p><strong className="text-[#6CB29D]">Ex-Positions:</strong> Ex-Assistant Professor (GIPMER) | Ex-Associate Consultant (Sir Ganga Ram Hospital ILGPS)</p>
              <p><strong className="text-[#6CB29D]">Editorial Fellow:</strong> Indian Journal of Gastroenterology (IJG) | <strong className="text-[#6CB29D]">DMC Registration:</strong> 82691</p>
            </div>

            <div className="lg:col-span-4 bg-white/10 p-5 rounded-md border border-white/20 text-xs text-slate-200 space-y-1.5 font-light">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#6CB29D] shrink-0" />
                <span>+91-9643163941, +91-9643163941</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6CB29D] shrink-0" />
                <span>randeeprana90@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#6CB29D] shrink-0" />
                <span>Max Smart Saket (Mon - Sat: 9.00 am - 6.00 pm)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Interests Section */}
      <section className="py-12 bg-[#F4F7F9] border-b border-[#DDE6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-xl font-serif font-bold text-[#002C47] flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#6CB29D]" />
            Special Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Pancreatico-Biliary Sciences",
              "Inflammatory Bowel Diseases (IBD)",
              "Portal Hypertension",
              "Advanced Endoscopy - EUS / ERCP",
              "Third Space Endoscopy - POEM, ESD / STER",
              "Early GI Cancer & EFTR (FTRD)",
            ].map((interest, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-md bg-white border border-[#DDE6ED] text-[#002C47] text-xs sm:text-sm font-bold shadow-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: EDUCATION & CLINICAL TRAINING */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Education Table */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-[#EBF5F2] text-[#002C47] flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
                Education & Qualifications
              </h2>
            </div>

            <div className="overflow-x-auto rounded-md border border-[#DDE6ED] shadow-sm">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#002C47] text-white text-xs font-bold uppercase tracking-widest">
                    <th className="py-4 px-6">Course / Degree</th>
                    <th className="py-4 px-6">Duration</th>
                    <th className="py-4 px-6">Institute</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                  {educationTable.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F4F7F9] transition-colors">
                      <td className="py-4 px-6 font-serif font-bold text-[#002C47]">{item.course}</td>
                      <td className="py-4 px-6 text-slate-500 font-medium">{item.duration}</td>
                      <td className="py-4 px-6 font-semibold text-[#6CB29D]">{item.institute}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Clinical Work Experience Table */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-[#EBF5F2] text-[#002C47] flex items-center justify-center font-bold">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
                Clinical Experience & Appointments
              </h2>
            </div>

            <div className="overflow-x-auto rounded-md border border-[#DDE6ED] shadow-sm">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#002C47] text-white text-xs font-bold uppercase tracking-widest">
                    <th className="py-4 px-6">Position</th>
                    <th className="py-4 px-6">Duration</th>
                    <th className="py-4 px-6">Institution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                  {clinicalExperience.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F4F7F9] transition-colors">
                      <td className="py-4 px-6 font-serif font-bold text-[#002C47]">{item.position}</td>
                      <td className="py-4 px-6 text-slate-500 font-medium">{item.duration}</td>
                      <td className="py-4 px-6 font-semibold text-[#6CB29D]">{item.institution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: PUBLICATIONS (ALL 36 PAPERS) */}
      <section className="py-16 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
                <BookOpen className="w-4 h-4 text-[#6CB29D]" />
                36 Research Publications
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
                Publications in Peer-Reviewed Journals
              </h2>
            </div>
            <div className="bg-white px-4 py-2 rounded-md border border-[#DDE6ED] text-xs text-[#002C47] font-bold">
              Google Scholar: H-Index 4 | i10-Index 2 | 61+ Citations
            </div>
          </div>

          <div className="overflow-x-auto rounded-md border border-[#DDE6ED] bg-white shadow-md">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#002C47] text-white text-xs font-bold uppercase tracking-widest">
                  <th className="py-4 px-4 text-center w-12">#</th>
                  <th className="py-4 px-6">Publication Reference</th>
                  <th className="py-4 px-6 w-48">Journal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {fullPublicationsList.map((pub) => (
                  <tr key={pub.id} className="hover:bg-[#EBF5F2]/50 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">{pub.id}</td>
                    <td className="py-4 px-6 leading-relaxed font-normal text-slate-800">{pub.text}</td>
                    <td className="py-4 px-6 font-bold text-[#6CB29D] shrink-0">{pub.journal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Publications in line / pipeline */}
          <div className="mt-8 bg-white p-8 rounded-md border border-[#DDE6ED] space-y-4 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-[#002C47]">Publications In Line / Pipeline</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {pipelinePublications.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#6CB29D] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ongoing Projects */}
          <div className="mt-8 bg-white p-8 rounded-md border border-[#DDE6ED] space-y-4 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-[#002C47]">Ongoing Research Projects</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {ongoingProjects.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#6CB29D] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONFERENCE PRESENTATIONS (INTERNATIONAL & NATIONAL) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#EBF5F2] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              <Trophy className="w-4 h-4 text-[#6CB29D]" />
              Conference Papers & Posters
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              Papers & Posters Presented at International & National Conferences
            </h2>
          </div>

          {/* Authentic Conference & Award Photos Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-md overflow-hidden shadow-md border border-[#DDE6ED] group h-56 bg-slate-900">
              <img
                src="/images/poster-award-best-oral-clinical-science.jpg"
                alt="Best Oral Poster Awardee in Clinical Science"
                className="w-full h-full object-cover object-top group- transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="px-2.5 py-0.5 rounded-md bg-[#6CB29D] text-[9px] font-extrabold uppercase tracking-widest text-white mb-1 inline-block">
                  Best Oral Award
                </span>
                <div className="text-xs font-serif font-bold">Clinical Science Awardee</div>
              </div>
            </div>

            <div className="relative rounded-md overflow-hidden shadow-md border border-[#DDE6ED] group h-56 bg-slate-900">
              <img
                src="/images/ddw-2024-poster-presentation.jpg"
                alt="DDW 2024 Washington D.C. Poster"
                className="w-full h-full object-cover object-top group- transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="px-2.5 py-0.5 rounded-md bg-[#002C47] text-[9px] font-extrabold uppercase tracking-widest text-[#6CB29D] mb-1 inline-block border border-[#6CB29D]/40">
                  DDW 2024 • USA
                </span>
                <div className="text-xs font-serif font-bold">Washington D.C. Poster Presentation</div>
              </div>
            </div>

            <div className="relative rounded-md overflow-hidden shadow-md border border-[#DDE6ED] group h-56 bg-slate-900">
              <img
                src="/images/apdw-2025-singapore-poster.jpg"
                alt="APDW 2025 Singapore Poster"
                className="w-full h-full object-cover object-top group- transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="px-2.5 py-0.5 rounded-md bg-[#002C47] text-[9px] font-extrabold uppercase tracking-widest text-[#6CB29D] mb-1 inline-block border border-[#6CB29D]/40">
                  APDW 2025 • Singapore
                </span>
                <div className="text-xs font-serif font-bold">EUS Pseudoaneurysm VAPT-EASE Study</div>
              </div>
            </div>

            <div className="relative rounded-md overflow-hidden shadow-md border border-[#DDE6ED] group h-56 bg-slate-900">
              <img
                src="/images/gbpgcon-chairperson-delegate.jpg"
                alt="GBPGCON Session Chairperson"
                className="w-full h-full object-cover object-top group- transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="px-2.5 py-0.5 rounded-md bg-[#001D30] text-[9px] font-extrabold uppercase tracking-widest text-white mb-1 inline-block border border-white/20">
                  GBPGCON
                </span>
                <div className="text-xs font-serif font-bold">Session Chairperson & Delegate</div>
              </div>
            </div>

            <div className="relative rounded-md overflow-hidden shadow-md border border-[#DDE6ED] group h-56 bg-slate-900 md:col-span-2 lg:col-span-2">
              <img
                src="/images/easl-hepatology-congress-hall.jpg"
                alt="EASL Home of Hepatology Congress"
                className="w-full h-full object-cover object-center group- transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="px-2.5 py-0.5 rounded-md bg-[#002C47] text-[9px] font-extrabold uppercase tracking-widest text-[#6CB29D] mb-1 inline-block border border-[#6CB29D]/40">
                  EASL Congress
                </span>
                <div className="text-xs font-serif font-bold">European Association for the Study of the Liver (EASL)</div>
              </div>
            </div>
          </div>

          {/* International */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#002C47] flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#6CB29D]" /> International Presentations
            </h3>
            <div className="space-y-3">
              {internationalConferences.map((item, idx) => (
                <div key={idx} className="p-4 rounded-md bg-[#F4F7F9] border border-[#DDE6ED] text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-[#002C47] font-bold">{idx + 1}.</strong> {item}
                </div>
              ))}
            </div>
          </div>

          {/* National */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#002C47] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#6CB29D]" /> National Presentations
            </h3>
            <div className="space-y-3">
              {nationalConferences.map((item, idx) => (
                <div key={idx} className="p-4 rounded-md bg-[#F4F7F9] border border-[#DDE6ED] text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-[#002C47] font-bold">{idx + 11}.</strong> {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: CLINICAL AND INTERVENTIONAL SKILLS */}
      <section className="py-16 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              <Activity className="w-4 h-4 text-[#6CB29D]" />
              Procedural & Clinical Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              Clinical and Interventional Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinicalSkillsList.map((skillGroup, idx) => (
              <div key={idx} className="bg-white p-8 rounded-md border border-[#DDE6ED] shadow-sm space-y-4">
                <h3 className="text-lg font-serif font-bold text-[#002C47] border-b border-slate-100 pb-3">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
                  {skillGroup.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-md bg-[#6CB29D] mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: AWARDS, MEMBERSHIPS & EXTRACURRICULARS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Awards & Honours */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47] flex items-center gap-3">
              <Award className="w-6 h-6 text-[#6CB29D]" />
              Awards, Ranks & Honours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {awardsList.map((award, idx) => (
                <div key={idx} className="p-4 rounded-md bg-[#F4F7F9] border border-[#DDE6ED] text-xs sm:text-sm text-slate-700 font-medium flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#6CB29D] shrink-0 mt-0.5" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Memberships */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47] flex items-center gap-3">
              <Users className="w-6 h-6 text-[#6CB29D]" />
              Societal Memberships
            </h2>
            <div className="p-6 rounded-md bg-[#002C47] text-white space-y-4">
              <p className="text-xs sm:text-sm text-slate-200">
                <strong className="text-[#6CB29D]">Life Member:</strong> Indian Society of Gastroenterology (ISG), Indian Pancreas Club (IPC), Society of Gastrointestinal Endoscopy of India (SGEI), Colitis and Crohn’s Foundation (India)
              </p>
              <p className="text-xs sm:text-sm text-slate-200">
                <strong className="text-[#6CB29D]">Member:</strong> European Association for Study of Liver (EASL), American Society of Gastrointestinal Endoscopy (ASGE), European Society of Gastrointestinal Endoscopy (ESGE), International Association of Pancreatology (IAP), World Endoscopy Organization (WEO), International Liver Cancer Association (ILCA)
              </p>
            </div>
          </div>

          {/* Extracurriculars */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
              Extracurricular Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extracurriculars.map((item, idx) => (
                <div key={idx} className="p-4 rounded-md bg-[#F4F7F9] border border-[#DDE6ED] text-xs sm:text-sm text-slate-700 font-medium flex items-start gap-3">
                  <span className="w-2 h-2 rounded-md bg-[#6CB29D] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Future Vision & Plans */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
              Future Vision and Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-md bg-[#F4F7F9] border border-[#DDE6ED] space-y-3">
                <h3 className="text-base font-serif font-bold text-[#002C47]">Personal & Short-Term Vision</h3>
                <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside">
                  {futureVision.shortTerm.map((st, sIdx) => (
                    <li key={sIdx}>{st}</li>
                  ))}
                </ol>
              </div>

              <div className="p-6 rounded-md bg-[#F4F7F9] border border-[#DDE6ED] space-y-3">
                <h3 className="text-base font-serif font-bold text-[#002C47]">Professional & Long-Term Vision</h3>
                <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside" start={5}>
                  {futureVision.longTerm.map((lt, lIdx) => (
                    <li key={lIdx}>{lt}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Personal Details & Registration */}
          <div className="p-8 rounded-md bg-[#F4F7F9] border border-[#DDE6ED] space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#002C47]">Personal Details & DMC Registration</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700 font-light">
              <div><strong>Registration:</strong> Delhi Medical Council Regd. No: 82691</div>
              <div><strong>Date of Birth:</strong> 13th June, 1990</div>
              <div><strong>Gender:</strong> Male</div>
              <div><strong>Nationality:</strong> Indian</div>
              <div><strong>Marital Status:</strong> Married (Dr. Ridhi Sood MD DM Histopathology, Asst. Professor Pathology, AIIMS Delhi)</div>
              <div><strong>Languages:</strong> English, Hindi, Punjabi</div>
              <div><strong>Hobbies:</strong> Cricket, Badminton, Music, Singing</div>
              <div><strong>Email:</strong> randeeprana90@gmail.com</div>
              <div><strong>Contact:</strong> +91-9643163941, +91-9643163941</div>
            </div>
          </div>

        </div>
      </section>

      <WhyChoose />
      <CtaBanner />
    </div>
  );
}
