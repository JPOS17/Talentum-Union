// ============================================================
//  jobsData.js  –  Talentum Union Job Listings
// ============================================================
//  HOW TO ADD A NEW JOB
//  1. Copy one of the job objects below and paste it at the top
//     of the `jobs` array.
//  2. Fill in every field (see the field guide at the bottom).
//  3. Add the hero image to /src/assets/ and reference it via
//     heroImage (see existing entries for the pattern).
// ============================================================

// --- Hero image imports (add a new one for each new job) ----
import staffAccountantImg     from "../assets/staffAccountant.webp";
import seniorAccountantImg     from "../assets/staffAccountant.webp";
import remoteCopywriterImg    from "../assets/remoteCopywriter.webp";
import assuranceManagerImg    from "../assets/assuranceManager.webp";
import adminAssistantImg      from "../assets/adminstrativeAssistant.webp";
import executiveOpsImg        from "../assets/executiveOperations.webp";

// ============================================================
//  JOBS ARRAY
// ============================================================
export const jobs = [

  // ----------------------------------------------------------
  //  SENIOR ACCOUNTANT
  // ----------------------------------------------------------
  {
    slug:         "senior-accountant",
    area:         "Accounting",
    status:       "Open",
    statusDate:   null,
 
    heroImage:    seniorAccountantImg,
    heroAlt:      "Senior Accountant, Client Accounting & Assurance",
    title:        "Senior Accountant, Client Accounting & Assurance",
 
    location:     "Remote (Mexico)",
    positionType: "Full-Time Contractor",
    salary:       "$2,000–$3,000 USD per month",
    schedule:     "Flexible",
 
    aboutOpportunity: [
      "We are seeking an experienced <strong>Senior Accountant, Client Accounting &amp; Assurance</strong> to join a growing remote accounting team. This role is ideal for a detail-oriented professional who enjoys assurance work, financial reporting, client accounting, and mentoring junior team members.",
      "The successful candidate will work directly with U.S.-based clients, manage accounting and assurance engagements, review staff work, and help ensure high-quality client service. This position offers the opportunity to take ownership of projects, contribute to process improvements, and grow into a future leadership role.",
      "If you are proactive, organized, and committed to delivering excellent work, we encourage you to apply.",
    ],
 
    positionOverview: [],
 
    responsibilities: [
      {
        heading: "Assurance & Financial Reporting",
        items: [
          "Prepare and review audit, review, and compilation workpapers.",
          "Prepare complex nonprofit audit sections, including net assets, revenue recognition, restricted funds, grants, and related disclosures.",
          "Prepare complete financial statements in accordance with GAAP.",
          "Assist with audit testing, documentation, and client request management.",
          "Support review, compilation, and other assurance engagements.",
        ],
      },
      {
        heading: "Client Accounting & Bookkeeping",
        items: [
          "Perform accounting cleanup and client accounting projects.",
          "Review and analyze general ledger activity and reconciliations.",
          "Prepare and review supporting schedules and financial reports.",
          "Ensure accounting records are accurate, complete, and compliant.",
        ],
      },
      {
        heading: "Tax & Compliance Support",
        items: [
          "Prepare selected individual and business tax returns.",
          "Assist with nonprofit tax filings and compliance-related projects.",
          "Research accounting, audit, tax, and compliance questions as needed.",
        ],
      },
      {
        heading: "Client & Team Management",
        items: [
          "Communicate directly with clients regarding requests, questions, and project status.",
          "Manage assigned deadlines and project workflows.",
          "Review work prepared by staff accountants and interns.",
          "Provide coaching, guidance, and constructive feedback to team members.",
          "Assist with improving internal processes, templates, and client deliverables.",
          "Take ownership of projects from planning through completion.",
        ],
      },
    ],
 
    qualifications: [
      {
        heading: "Required",
        items: [
          "Bachelor's degree in Accounting, Finance, or a related field.",
          "Strong understanding of GAAP and financial reporting principles.",
          "Experience preparing financial statements.",
          "Experience with audit, review, compilation, or assurance engagements.",
          "Advanced Microsoft Excel skills.",
          "Strong written and verbal communication skills in English.",
          "Ability to manage multiple projects and deadlines simultaneously.",
          "Strong attention to detail and organizational skills.",
          "Ability to work independently while collaborating effectively with a remote team.",
          "Professional client-facing communication skills.",
          "Experience reviewing and providing feedback on the work of junior team members.",
        ],
      },
      {
        heading: "Preferred",
        items: [
          "CPA license or active progress toward CPA certification.",
          "Public accounting experience.",
          "Nonprofit accounting or audit experience.",
          "Experience with grant accounting and restricted net assets.",
          "Experience preparing individual and business tax returns.",
          "Experience with cloud-based accounting and practice management software.",
          "Interest in developing into a future leadership role.",
        ],
      },
    ],
 
    extraSections: [
      {
        title: "Work Allocation",
        content: [
          "The approximate workload for this position includes: 55% Audit, Review, Compilation, and Assurance Services — 20% Tax Preparation — 20% Client Accounting and Bookkeeping Cleanup — 5% Client Communication and Project Management.",
          "Work allocation may vary depending on client needs and seasonal demands.",
        ],
      },
      {
        title: "Software & Technical Skills",
        content: [
          "Experience with the following software is preferred: QuickBooks Online, Canopy, AuditFile, ProConnect, Microsoft Excel, Google Workspace, and Gusto. Advanced Excel skills are highly valued for this position.",
        ],
      },
      {
        title: "Who We're Looking For",
        content: [
          "The ideal candidate takes ownership of projects from beginning to end, works independently and follows through on commitments, communicates proactively regarding project status and challenges, enjoys problem-solving and researching technical questions, is comfortable reviewing work and mentoring team members, and thrives in a fast-paced remote environment.",
          "This position is not ideal for someone seeking a highly repetitive role with limited responsibility or minimal client interaction.",
        ],
      },
    ],
 
    whatWeOffer: [
      "Fully remote work environment.",
      "Flexible work schedule.",
      "Paid holidays and PTO opportunities based on tenure and performance.",
      "Professional development and training opportunities.",
      "Advancement potential into leadership positions.",
      "Collaborative and supportive team environment.",
      "Company computer equipment provided after successful onboarding and performance review.",
      "Opportunity to work with U.S.-based clients.",
    ],
 
    applyNote: null,
  },

  // ----------------------------------------------------------
  //  AUDIT & ASSURANCE MANAGER
  // ----------------------------------------------------------
  {
    // --- Routing & board ---
    slug:         "audit-assurance-manager",   // URL: /jobs/audit-assurance-manager
    area:         "Accounting",
    status:       "Open",                      // "Open" | "Filled"
    statusDate:   null,                        // e.g. "Jan 2026" when Filled

    // --- Hero ---
    heroImage:    assuranceManagerImg,
    heroAlt:      "Audit & Assurance Manager",

    // --- Page title ---
    title:        "Audit & Assurance Manager",

    // --- Meta row ---
    location:     "Remote (Mexico-based candidates)",
    positionType: "Full-time",
    salary:       "$4,000–$5,000 USD gross/month (based on experience and certification)",
    schedule:     "Monday to Friday, 8am–4pm or 9am–5pm (Eastern Time, flexible)",

    // --- Body sections ---
    aboutOpportunity: [
      "Talentum Union has partnered with a <strong>U.S.-based accounting</strong> firm specializing in <strong>Nonprofit organizations</strong>. The firm is recognized for delivering high-quality audit, assurance, and advisory services with a strong emphasis on accuracy, transparency, and long-term client relationships.",
      "As part of a growing remote team, you'll work in a professional, collaborative environment that values ownership, continuous improvement, and leadership development. This is a long-term opportunity with direct client exposure and team leadership responsibility as the firm continues to expand.",
    ],

    positionOverview: [
      "We are seeking an experienced <strong>Audit &amp; Assurance Manager</strong> to lead audit engagements from planning through issuance. This role will primarily focus on nonprofit audits, with additional exposure to reviews and audits of for-profit entities and governmental organizations.",
      "The Manager will be responsible for overseeing engagement execution, reviewing workpapers, training and supervising staff, and serving as a key point of contact for clients.",
      "This position requires strong technical expertise in audit and assurance services, leadership skills, and the ability to manage multiple engagements while maintaining high-quality standards and client relationships.",
    ],

    // responsibilities supports flat lists AND grouped subsections.
    // Use { heading, items } for a subsection, or just a plain string for a flat bullet.
    responsibilities: [
      {
        heading: "Audit & Assurance Leadership",
        items: [
          "Lead audit engagements from planning to completion, including risk assessment, materiality determination, and audit strategy development.",
          "Perform and document technical accounting research as needed.",
          "Ensure audits are conducted in accordance with GAAP and applicable standards.",
          "Prepare and/or review financial statements and related disclosures.",
          "Oversee compliance with applicable regulatory requirements (including nonprofit and grant-related requirements where applicable).",
          "Ensure timely issuance of audit reports.",
        ],
      },
      {
        heading: "Review & Supervision",
        items: [
          "Review workpapers prepared by staff and seniors for accuracy, completeness, and compliance with firm standards.",
          "Provide clear, constructive feedback and training to staff.",
          "Monitor engagement budgets and timelines to ensure efficiency and profitability.",
          "Identify process improvements and implement best practices.",
          "Support quality control procedures and internal firm standards.",
        ],
      },
      {
        heading: "Client Management",
        items: [
          "Serve as primary or secondary point of contact for clients during engagements.",
          "Communicate audit findings, internal control observations, and recommendations clearly and professionally.",
          "Coordinate client requests and ensure timely follow-up.",
          "Build and maintain strong client relationships.",
        ],
      },
      {
        heading: "Advisory & Grant Support (Limited Portion of Role)",
        items: [
          "Provide advisory support related to grant compliance and financial reporting.",
          "Assist clients with grant reporting requirements and documentation.",
          "Support clients in strengthening internal controls related to grant funding.",
        ],
      },
    ],

    // qualifications supports flat lists AND grouped subsections (same pattern as responsibilities)
    qualifications: [
      {
        heading: "Required",
        items: [
          "<strong>CPC (Mexico); CPA (U.S.) preferred</strong> or significant experience auditing U.S. companies/nonprofits.",
          "<strong>5+ years of professional accounting experience,</strong> preferably supporting U.S.-based clients.",
          "Experience leading audits to completion.",
          "Strong understanding of nonprofit accounting and auditing standards.",
          "Experience reviewing staff work and supervising engagement teams.",
          "Proficiency in audit documentation and financial statement preparation.",
          "Strong organizational skills and ability to manage multiple engagements.",
          "Excellent verbal and written English communication skills.",
        ],
      },
      {
        heading: "Preferred",
        items: [
          "Experience auditing nonprofit organizations receiving government or grant funding.",
          "Experience with governmental audits.",
          "Experience with single audit requirements (if applicable to firm services).",
          "Familiarity with grant compliance and reporting.",
          "Experience mentoring and developing junior staff.",
        ],
      },
      {
        heading: "Core Competencies",
        items: [
          "Technical excellence in audit and assurance.",
          "Strong leadership and coaching ability.",
          "Attention to detail and commitment to quality.",
          "Client-focused mindset.",
          "Ability to work independently and make sound professional judgments.",
          "Strong time management and deadline management skills.",
        ],
      },
    ],

    // Extra named sections (optional). Each becomes an h2 + content block.
    // content can be paragraphs (strings) or { heading, items, outcome } subsections.
    extraSections: [
      {
        title: "Reporting Structure",
        content: [
          "This position reports directly to firm leadership and plays a key role in maintaining the firm's quality, client satisfaction, and staff development.",
        ],
      },
    ],

    whatWeOffer: [
      "<strong>100% remote position</strong> (work from anywhere in Mexico).",
      "<strong>Gross monthly salary: $4,000–$5,000 USD</strong>, based on experience and certifications.",
      "<strong>Unlimited PTO</strong> (requests over 40 hours require approval).",
      "Observance of either <strong>U.S. or National holidays</strong>, based on employee preference or company policy.",
      "Ongoing professional development, training, and certification support.",
      "A collaborative, growth-oriented team environment with leadership opportunities.",
    ],

    // Footer apply note (leave null to use the default)
    applyNote: null,
  },

  // ----------------------------------------------------------
  //  ADMINISTRATIVE ASSISTANT
  // ----------------------------------------------------------
  {
    slug:         "administrative-assistant",
    area:         "Virtual Assistants & Customer Support",
    status:       "Filled",
    statusDate:   "Feb 2026",

    heroImage:    adminAssistantImg,
    heroAlt:      "Administrative Assistant",
    title:        "Administrative Assistant (Remote)",

    location:     "Remote (Mexico)",
    positionType: "Full-time",
    salary:       "$1,100–$1,600 USD gross/month (based on experience)",
    schedule:     "Monday to Friday (business hours aligned with the firm's operations)",

    aboutOpportunity: [
      "Talentum Union has partnered with a <strong>U.S.-based accounting firm</strong>, a growing U.S.-based accounting and advisory firm that works primarily with nonprofits and mission-driven organizations. The firm places a strong emphasis on systems, workflows, and timely communication to deliver high-quality service to its clients.",
      "This is a key internal role within the organization. As <strong>Administrative Assistant</strong>, you will help ensure smooth daily operations, strong follow-through, and well-managed systems that support both leadership and clients. This is a long-term, full-time opportunity for someone who enjoys organization, ownership, and proactive problem-solving.",
    ],

    positionOverview: [
      "We are seeking a highly organized, detail-oriented, and proactive Administrative Assistant based in Mexico to manage the firm's internal systems, communications, and operational workflows.",
      "This role is ideal for professionals with <strong>1–3 years of experience</strong> who enjoy building structure, maintaining clarity across multiple tools, and ensuring that nothing falls through the cracks. You will take ownership of the firm's workflow platform (Canopy), CRM system (ActiveCampaign), email responsiveness, and contractor coordination.",
      "You'll work closely with leadership and play a central role in keeping the business running efficiently and professionally.",
    ],

    responsibilities: [
      {
        heading: "Workflow & Task Management (Canopy)",
        items: [
          "Fully manage and maintain Canopy as the firm's primary workflow system.",
          "Update, assign, and organize tasks based on priorities and deadlines.",
          "Conduct weekly system reviews to ensure no overdue or forgotten tasks, accurate deadlines and task ownership, and active progress across all workflows.",
          "Proactively flag risks, delays, or bottlenecks and follow up accordingly.",
        ],
      },
      {
        heading: "Email & Communication Management",
        items: [
          "Monitor the company inbox daily.",
          "Ensure no email goes more than 24 hours without a response.",
          "Draft responses when appropriate and escalate messages requiring leadership input.",
          "Organize inboxes for clarity, tracking, and efficiency.",
          "Support phone call follow-ups and internal communications.",
        ],
      },
      {
        heading: "Contractor & Vendor Coordination",
        items: [
          "Serve as the primary point of contact for outsourced contractors (IT, HR, etc.).",
          "Track assignments, deadlines, and deliverables.",
          "Ensure clear communication and timely completion of work.",
          "Follow up on outstanding items and escalate concerns when needed.",
        ],
      },
      {
        heading: "CRM Management (ActiveCampaign)",
        items: [
          "Maintain and manage ActiveCampaign as the firm's CRM.",
          "Ensure contacts are added accurately and consistently.",
          "Maintain clean records, lists, and tagging systems.",
          "Build and manage automations and workflows for potential clients, current clients, and follow-ups.",
          "Ensure the CRM actively supports business development and client communication.",
        ],
      },
    ],

    qualifications: [
      "1–3 years of experience in an administrative, operations, or support role.",
      "Strong organizational and time management skills.",
      "Comfort working across multiple systems and digital tools.",
      "Experience managing email inboxes and follow-ups.",
      "Experience with CRM platforms (ActiveCampaign preferred).",
      "Excellent written communication skills.",
      "High attention to detail and accountability.",
      "Ability to work independently, proactively, and with minimal supervision.",
    ],

    extraSections: [
      {
        title: "30-60-90 Day Success Plan",
        // subsections inside an extra section
        subsections: [
          {
            heading: "First 30 Days – System Mastery & Foundation",
            items: [
              "Full working knowledge of Canopy.",
              "Review, clean up, and organize all existing tasks.",
              "Canopy automations set up and actively used.",
              "Weekly task review system established.",
              "Confident, independent use of Canopy.",
            ],
            outcome: "Canopy is fully owned, organized, and actively managed.",
          },
          {
            heading: "First 60 Days – CRM & Workflow Optimization",
            items: [
              "Full ownership of ActiveCampaign.",
              "CRM clean, accurate, and well-structured.",
              "Automations and workflows built for leads and clients.",
              "Independent CRM management.",
            ],
            outcome: "ActiveCampaign reliably supports lead tracking and client communication.",
          },
          {
            heading: "First 90 Days – Full Role Ownership",
            items: [
              "Independent management of Canopy, ActiveCampaign, email responsiveness, and communication follow-ups.",
              "Ability to anticipate needs and solve problems proactively.",
              "Minimal oversight required.",
            ],
            outcome: "The Administrative Assistant operates as a trusted, autonomous extension of leadership.",
          },
        ],
      },
    ],

    whatWeOffer: [
      "100% remote position (Mexico-based).",
      "Gross monthly salary of <strong>$1,100–$1,600 USD</strong>, based on experience.",
      "Full-time, long-term opportunity.",
      "Direct collaboration with firm leadership.",
      "Clear systems, expectations, and success metrics.",
      "Professional, structured, and mission-driven work environment.",
      "Opportunity to grow into expanded operations or management responsibilities.",
    ],

    applyNote: "If you like to apply, please send your CV and a copy of your Contador Público Certificado to our email and we will get back to you as soon as possible!",
  },

  // ----------------------------------------------------------
  //  REMOTE COPYWRITER  (Filled)
  // ----------------------------------------------------------
  {
    slug:         "remote-copywriter",
    area:         "Marketing & Sales",
    status:       "Filled",
    statusDate:   "Dec 2025",

    heroImage:    remoteCopywriterImg,
    heroAlt:      "Remote Copywriter",
    title:        "Remote Copywriter",

    location:     "Remote",
    positionType: "Full-time",
    salary:       "$1,300–$1,600 USD gross/month",
    schedule:     "Monday to Friday, 9am–5pm (Western Standard Time)",

    aboutOpportunity: [
      "Talentum Union is supporting a U.S. company that is expanding its content and marketing team. They are looking for a talented <strong>Remote Copywriter</strong> who can craft clear, engaging, and strategic content across different channels.",
      "You'll join a remote-first workplace that values communication, initiative, and consistent quality. This is a long-term position where your writing skills will play a key role in strengthening the company's message and brand presence.",
    ],

    positionOverview: [
      "The <strong>Copywriter</strong> will be responsible for creating high-quality written content that supports brand growth, marketing efforts, and internal communication. The ideal candidate is adaptable, detail-oriented, and able to write in a variety of tones depending on the project. This role will work closely with other teams and contribute directly to the company's communication strategy.",
    ],

    responsibilities: [
      "Writing and editing website content, blog posts, email campaigns, and social media copy.",
      "Ensuring consistent brand voice and tone across all messaging.",
      "Conducting research to support accurate and engaging content.",
      "Collaborating with marketing, design, and leadership teams.",
      "Revising drafts based on feedback.",
      "Managing deadlines and maintaining organized content files.",
    ],

    qualifications: [
      "3 years of experience in copywriting, content creation, or a related field (ideal).",
      "Excellent English writing and editing skills.",
      "Ability to adjust writing tone depending on the audience and platform.",
      "Strong organizational skills and ability to work independently.",
      "Familiarity with general productivity tools (e.g., Google Workspace); other tools will be trained if needed.",
    ],

    extraSections: [],

    whatWeOffer: [
      "A remote-first position with the flexibility to work from any country in Latin America.",
      "Fixed monthly salary: <strong>$1,300–$1,600 USD</strong> (based on experience).",
      "A stable, full-time role following a Western Standard Time schedule.",
      "A team culture that encourages initiative, collaboration, and professional development.",
      "Room to expand your responsibilities as the company grows and new projects emerge.",
    ],

    applyNote: null,
  },

  // ----------------------------------------------------------
  //  EXECUTIVE OPERATIONS SPECIALIST  (Filled)
  // ----------------------------------------------------------
  {
    slug:         "executive-operations-specialist",
    area:         "Virtual Assistants & Customer Support",
    status:       "Filled",
    statusDate:   "Nov 2025",

    heroImage:    executiveOpsImg,
    heroAlt:      "Executive Operations Specialist",
    title:        "Executive Operations Specialist (100% Work From Home)",

    location:     "Remote",
    positionType: "Full-time",
    salary:       "$1,700–$1,900 USD gross/month (based on experience)",
    schedule:     "Monday to Friday, 9am–5pm (Central Time, flexible)",

    aboutOpportunity: [
      "Talentum Union is partnering with a U.S.-based company seeking a <strong>Remote Executive Operations Specialist</strong>. This client values efficiency, organization, and clear communication, delivering exceptional business operations support to their teams.",
      "As part of this growing remote team, you'll join a professional environment focused on career development, collaboration, and operational excellence. This is a long-term position with opportunities to expand your responsibilities and grow within the company.",
    ],

    positionOverview: [
      "We are looking for a detail-oriented, organized, and proactive <strong>Executive Operations Specialist</strong> based in Latin America. You will help manage operational workflows, coordinate projects, and support executive leadership to ensure smooth business operations.",
    ],

    responsibilities: [
      "Overseeing and coordinating daily operations tasks.",
      "Supporting project management and ensuring deadlines are met.",
      "Assisting executives with scheduling, documentation, and communication.",
      "Maintaining records, reports, and operational systems.",
      "Collaborating with teams across multiple time zones.",
      "Managing tools like Google Drive, ClickUp, or QuickBooks for operational efficiency.",
    ],

    qualifications: [
      "2+ years of experience in operations, executive assistance, or project coordination.",
      "Excellent English communication and organizational skills.",
      "Familiarity with Google Drive, ClickUp, or QuickBooks.",
      "Proactive, detail-oriented, and able to work independently.",
      "Professional and client-focused demeanor.",
    ],

    extraSections: [],

    whatWeOffer: [
      "100% remote position (work from anywhere in Latin America).",
      "Fixed monthly salary: <strong>$1,700–$1,900 USD</strong> (based on experience).",
      "Monday to Friday schedule, 9am–5pm CT.",
      "Collaborative and supportive team environment.",
      "Opportunities for professional growth and skill development.",
    ],

    applyNote: null,
  },

  // ----------------------------------------------------------
  //  STAFF ACCOUNTANT  (Filled)
  // ----------------------------------------------------------
  {
    slug:         "staff-accountant",
    area:         "Accounting",
    status:       "Filled",
    statusDate:   "Sept 2025",

    heroImage:    staffAccountantImg,
    heroAlt:      "Staff Accountant",
    title:        "Staff Accountant (100% Work From Home)",

    location:     "Remote",
    positionType: "Full-time",
    salary:       "$1,800–$2,200 USD gross/month (based on experience)",
    schedule:     "Monday to Friday, 8am–4pm or 9am–5pm (Eastern Time, flexible)",

    aboutOpportunity: [
      "Talentum Union has partnered with a <strong>U.S.-based accounting firm</strong> that specializes in serving <strong>Real Estate</strong> and <strong>Non-Profit organizations.</strong> This client is known for delivering tailored financial services, including accounting, bookkeeping, and tax compliance, with a strong focus on accuracy, transparency, and client success.",
      "As part of a growing remote team, you'll join a professional environment that encourages career development, innovative thinking, and <strong>collaborative teamwork.</strong> This is a long-term position with real opportunities to grow into leadership roles.",
    ],

    positionOverview: [
      "We are looking for a <strong>detail-oriented and motivated Entry-Level Accountant</strong> based in Mexico to support the financial operations of U.S. clients. The ideal candidate is analytical, organized, and eager to grow their career in nonprofit or real estate accounting. You'll work with a collaborative Latin American team that values professionalism, client care, and delivering top-quality financial solutions.",
      "This position is designed for professionals early in their career who want to build experience with U.S.-based accounting standards while contributing to meaningful client work.",
    ],

    responsibilities: [
      "Prepare and maintain financial records, reports, and general ledgers.",
      "Assist with monthly, quarterly, and annual financial statements.",
      "Perform account reconciliations, journal entries, and resolve discrepancies.",
      "Handle bank reconciliations and ensure proper cash flow recording.",
      "Support month-end and year-end close processes.",
      "Assist with budgeting and forecasting.",
      "Help prepare U.S. tax filings (mainly for nonprofits) under supervision.",
      "Provide documentation for audits and assist in audit processes.",
      "Support payroll and benefits administration when needed.",
      "Communicate regularly with clients and internal teams through video meetings and professional correspondence.",
    ],

    qualifications: [
      "<strong>Bachelor's degree</strong> in Accounting, Finance, or a related field.",
      "<strong>Minimum of 1 year of accounting experience</strong> (internships or entry-level roles accepted).",
      "Proficiency in accounting software (QuickBooks, Sage, or similar) and Excel.",
      "Strong understanding of GAAP; knowledge of nonprofit or real estate accounting a plus.",
      "Excellent attention to detail, analytical skills, and organizational abilities.",
      "<strong>Strong written and spoken English</strong> communication skills.",
      "Professional, confident, and client-friendly demeanor.",
    ],

    extraSections: [],

    whatWeOffer: [
      "100% remote position (work from anywhere).",
      "Gross monthly salary: <strong>$1,800–$2,200 USD</strong>, based on experience.",
      "Unlimited PTO (requests over 40 hours require approval).",
      "Observance of either U.S. or National holidays, based on employee preference or company policy.",
      "Ongoing professional development and training.",
      "A collaborative and supportive team environment.",
    ],

    applyNote: null,
  },

];

// ============================================================
//  FIELD GUIDE  (reference when adding a new job)
// ============================================================
//
//  slug          — URL-safe identifier, e.g. "senior-developer"
//  area          — Category shown on the job board
//  status        — "Open" or "Filled"
//  statusDate    — Month/year string when filled, e.g. "Jan 2026"; null if Open
//  heroImage     — Import the image at the top of this file, then reference the variable
//  heroAlt       — Alt text for the hero image
//  title         — Full job title shown as the page heading
//  location      — e.g. "Remote (Mexico)"
//  positionType  — e.g. "Full-time", "Part-time", "Contract"
//  salary        — Free-form salary string
//  schedule      — Work hours / timezone
//
//  aboutOpportunity  — Array of paragraph strings (HTML allowed)
//  positionOverview  — Array of paragraph strings (HTML allowed)
//
//  responsibilities  — Array of:
//                        • plain string  →  flat bullet
//                        • { heading, items[] }  →  subsection with bullet list
//
//  qualifications    — Same shape as responsibilities
//
//  extraSections     — Array of additional named sections:
//                        { title, content[] }   content items are paragraph strings, OR
//                        { title, subsections[] }  where each subsection is
//                          { heading, items[], outcome? }
//
//  whatWeOffer   — Array of strings (HTML allowed)
//  applyNote     — Custom footer text, or null to use the default