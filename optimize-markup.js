const fs = require("fs");
const path = require("path");

const root = __dirname;
const baseUrl = "https://infranix-digital.vercel.app";
const brandName = "Infranix Digital";
const businessEmail = "ritikkushwaha3893@gmail.com";
const businessPhone = "+91 6266324835";
const headerLogoFile = "logo-icon.png";
const logoFile = "logo.png";
const defaultImage = `${baseUrl}/${logoFile}`;
const today = "2026-11-07";

const pageMeta = {
  "index.html": {
    title: `${brandName} | Enterprise Digital Engineering & Software`,
    description: `${brandName} architects and develops mission-critical enterprise software, institutional ERP platforms, AI chatbots, and Python automation. Request a quote.`,
    keywords: "Infranix Digital, enterprise digital engineering, software development company, school ERP software, AI chatbots, Python automation, custom software India, Ritik Kushwaha",
    priority: "1.0",
    changefreq: "weekly",
    images: [
      { file: "logo.png", title: "Infranix Digital Official Brand Logo", caption: "Enterprise digital engineering and software development firm" },
      { file: "edu-nova-erp.webp", title: "EDU-NOVA School Management ERP Dashboard", caption: "Enterprise school ERP software architecture" },
      { file: "savvy-mother-school.webp", title: "Savvy Mother International School Portal", caption: "Responsive school website development" }
    ]
  },
  "services.html": {
    title: `Enterprise Digital Engineering Services | ${brandName}`,
    description: `Explore enterprise technology services by ${brandName}: custom web platforms, school ERPs, AI chatbots, Python software, robotics, and cloud maintenance.`,
    keywords: "digital engineering services, custom software development, school management software, enterprise web development, AI chatbot development, Python development services",
    priority: "0.95",
    changefreq: "weekly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Services", url: `${baseUrl}/services` }
    ]
  },
  "school-management-system.html": {
    title: `School Management ERP Software & Portals | ${brandName}`,
    description: `Institutional school management ERP software by ${brandName} for attendance, marksheets, fees, student records, and automated administrative operations.`,
    keywords: "school management system, school ERP software, student management system, school attendance software, marksheet generator, school software India",
    priority: "0.95",
    changefreq: "weekly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Services", url: `${baseUrl}/services` },
      { name: "School Management System", url: `${baseUrl}/school-management-system` }
    ],
    software: {
      name: "EDU-NOVA School Management ERP",
      category: "BusinessApplication",
      price: "7999"
    },
    images: [
      { file: "edu-nova-erp.webp", title: "EDU-NOVA School Management ERP Interface", caption: "Student, staff, attendance, and fee management software" }
    ]
  },
  "school-website.html": {
    title: `Custom School Website Development | ${brandName}`,
    description: `Modern, responsive school website development by ${brandName} with online admissions, notice boards, academic portals, and WhatsApp lead integration.`,
    keywords: "school website development, educational institution website, school web design, responsive school website, online admission portal",
    priority: "0.95",
    changefreq: "weekly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Services", url: `${baseUrl}/services` },
      { name: "School Website Development", url: `${baseUrl}/school-website` }
    ],
    images: [
      { file: "savvy-mother-school.webp", title: "School Website Development Preview", caption: "Responsive institutional school web portal" }
    ]
  },
  "website-erp-software.html": {
    title: `Integrated School Website + ERP Software | ${brandName}`,
    description: `All-in-one institutional bundle: public-facing school website seamlessly integrated with administrative ERP software for admissions, fees, and attendance.`,
    keywords: "school website and ERP software, integrated school portal, institution management bundle, school ERP package",
    priority: "0.95",
    changefreq: "weekly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Services", url: `${baseUrl}/services` },
      { name: "Website + ERP Software", url: `${baseUrl}/website-erp-software` }
    ]
  },
  "ai-chatbot.html": {
    title: `Custom AI Chatbot Development & Automation | ${brandName}`,
    description: `Enterprise AI chatbot development by ${brandName} for 24/7 customer support, intelligent lead capture, conversational FAQ automation, and API workflows.`,
    keywords: "AI chatbot development, conversational AI, customer support chatbot, business chatbot, lead generation bot, AI automation agency",
    priority: "0.9",
    changefreq: "weekly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Services", url: `${baseUrl}/services` },
      { name: "AI Chatbot Development", url: `${baseUrl}/ai-chatbot` }
    ],
    software: {
      name: "Infranix AI Conversational Agent Engine",
      category: "CommunicationApplication",
      price: "3999"
    },
    images: [
      { file: "chatbot.webp", title: "Infranix AI Chatbot Interface", caption: "24/7 intelligent customer support and lead qualification chatbot" }
    ]
  },
  "AI.html": {
    title: `Artificial Intelligence & ML Solutions | ${brandName}`,
    description: `Intelligent AI solutions by ${brandName}: conversational assistants, automated decision workflows, NLP processing, computer vision, and workflow automation.`,
    keywords: "artificial intelligence solutions, enterprise AI development, machine learning consulting, AI workflow automation, NLP solutions India",
    priority: "0.75",
    changefreq: "monthly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Services", url: `${baseUrl}/services` },
      { name: "AI Solutions", url: `${baseUrl}/AI` }
    ]
  },
  "python-software.html": {
    title: `Custom Python Software Development | ${brandName}`,
    description: `Scalable Python software development by ${brandName} for workflow automation, desktop apps, data pipelines, billing systems, and custom business utilities.`,
    keywords: "custom Python software, Python development agency, Python automation tools, billing software Python, desktop application development",
    priority: "0.9",
    changefreq: "weekly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Services", url: `${baseUrl}/services` },
      { name: "Custom Python Software", url: `${baseUrl}/python-software` }
    ]
  },
  "web_development.html": {
    title: `Full-Stack Web Development Services | ${brandName}`,
    description: `Full-stack enterprise web development by ${brandName}: high-performance websites, client portals, responsive web apps, fast Vercel hosting, and SEO setup.`,
    keywords: "web development company, enterprise web development, full stack web development, responsive web design, custom web portals",
    priority: "0.75",
    changefreq: "monthly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Services", url: `${baseUrl}/services` },
      { name: "Web Development", url: `${baseUrl}/web_development` }
    ]
  },
  "website-maintenance.html": {
    title: `Website Maintenance & SLA Support Packages | ${brandName}`,
    description: `Comprehensive website maintenance plans by ${brandName}: proactive security patching, speed optimization, CMS updates, bug fixes, and continuous SLAs.`,
    keywords: "website maintenance packages, website support SLA, website speed optimization, bug fixing services, website management plans",
    priority: "0.9",
    changefreq: "weekly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Services", url: `${baseUrl}/services` },
      { name: "Website Maintenance", url: `${baseUrl}/website-maintenance` }
    ]
  },
  "pricing.html": {
    title: `Enterprise Software & Web Pricing Packages | ${brandName}`,
    description: `Transparent pricing for business websites, school ERP systems, AI chatbots, Python software, and maintenance packages from ${brandName}. Get a quote.`,
    keywords: "software development pricing, school ERP cost, website development pricing, AI chatbot pricing, web maintenance cost",
    priority: "0.95",
    changefreq: "weekly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Pricing", url: `${baseUrl}/pricing` }
    ]
  },
  "projects.html": {
    title: `Client Case Studies & Software Deployments | ${brandName}`,
    description: `Explore verified client case studies and deployments by ${brandName}: school ERP systems, AI chatbots, NEET preparation platforms, and web portals.`,
    keywords: "Infranix Digital portfolio, software case studies, school ERP demo, client projects, live web deployments",
    priority: "0.85",
    changefreq: "monthly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Projects", url: `${baseUrl}/projects` }
    ],
    images: [
      { file: "edu-nova-erp.webp", title: "EDU-NOVA ERP Deployment Case Study", caption: "Multi-campus school management ERP deployment" },
      { file: "result-portal.webp", title: "Online Examination Portal Case Study", caption: "High-concurrency student result verification platform" },
      { file: "synapse-neet-app.webp", title: "Synapse NEET-UG Mobile Application", caption: "AI target engine and medical aspirant preparation platform" }
    ]
  },
  "about.html": {
    title: `About ${brandName} | Enterprise Digital Engineering`,
    description: `Learn about ${brandName}, an enterprise digital engineering practice led by Ritik Kushwaha in Rewa, MP, delivering web, school ERP, and AI platforms.`,
    keywords: "about Infranix Digital, Ritik Kushwaha, software company in Rewa, digital engineering firm Madhya Pradesh, technology consulting India",
    priority: "0.75",
    changefreq: "monthly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "About", url: `${baseUrl}/about` }
    ]
  },
  "contact.html": {
    title: `Contact ${brandName} | Project Consultation & Quote`,
    description: `Contact ${brandName} in Rewa, MP for enterprise web development, school ERP software, AI chatbots, and Python tools. Phone, email, or direct WhatsApp.`,
    keywords: "contact Infranix Digital, hire software developer Rewa, software development inquiry, WhatsApp project consultation",
    priority: "0.85",
    changefreq: "monthly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Contact", url: `${baseUrl}/contact` }
    ]
  },
  "order.html": {
    title: `Request a Project Consultation & Quote | ${brandName}`,
    description: `Submit your project requirements to ${brandName} for customized estimates on web development, school ERP software, AI solutions, and maintenance plans.`,
    keywords: "request a quote, software project inquiry, order school management system, hire developers India",
    priority: "0.9",
    changefreq: "weekly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Request a Quote", url: `${baseUrl}/order` }
    ]
  },
  "Robotics.html": {
    title: `Robotics & IoT Embedded Systems Support | ${brandName}`,
    description: `Custom robotics, Arduino prototypes, ESP32 embedded IoT systems, smart automation hardware, sensor integrations, and schematics support by ${brandName}.`,
    keywords: "robotics projects, IoT systems development, embedded systems Arduino, ESP32 automation, smart hardware prototype",
    priority: "0.65",
    changefreq: "monthly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Services", url: `${baseUrl}/services` },
      { name: "Robotics & IoT", url: `${baseUrl}/Robotics` }
    ]
  },
  "privacy-policy.html": {
    title: `Privacy Policy | ${brandName}`,
    description: `Review the ${brandName} privacy policy covering data handling, project inquiries, communications, hosting architecture, and visitor confidentiality.`,
    keywords: "privacy policy Infranix Digital, data protection, website terms",
    priority: "0.4",
    changefreq: "yearly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Privacy Policy", url: `${baseUrl}/privacy-policy` }
    ]
  },
  "terms-and-conditions.html": {
    title: `Terms and Conditions | ${brandName}`,
    description: `Review ${brandName} terms and conditions for project scope, software deliverables, client responsibilities, payment schedules, and SLA warranties.`,
    keywords: "terms and conditions Infranix Digital, service agreement, contract terms",
    priority: "0.4",
    changefreq: "yearly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Terms and Conditions", url: `${baseUrl}/terms-and-conditions` }
    ]
  },
  "refund-cancellation-policy.html": {
    title: `Refund & Cancellation Policy | ${brandName}`,
    description: `Understand ${brandName} refund and project cancellation terms for custom software, milestone-based developments, and digital consulting deliverables.`,
    keywords: "refund policy Infranix Digital, cancellation policy, software project refund",
    priority: "0.4",
    changefreq: "yearly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Refund & Cancellation Policy", url: `${baseUrl}/refund-cancellation-policy` }
    ]
  },
  "service-policy.html": {
    title: `Service Policy & Delivery Standards | ${brandName}`,
    description: `Explore ${brandName} service policies, code delivery standards, milestone management, client review periods, and post-launch maintenance terms.`,
    keywords: "service policy Infranix Digital, delivery SLA, code standards",
    priority: "0.4",
    changefreq: "yearly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Service Policy", url: `${baseUrl}/service-policy` }
    ]
  },
  "disclaimer.html": {
    title: `Disclaimer & Verification Notice | ${brandName}`,
    description: `Official disclaimer and verification statement for ${brandName} software estimates, third-party integrations, demo environments, and project scopes.`,
    keywords: "disclaimer Infranix Digital, liability notice, verification policy",
    priority: "0.4",
    changefreq: "yearly",
    breadcrumb: [
      { name: "Home", url: `${baseUrl}/` },
      { name: "Disclaimer", url: `${baseUrl}/disclaimer` }
    ]
  },
  "pyhton.html": {
    title: `Python Development Moved | ${brandName}`,
    description: `The old Python development page now redirects to the current ${brandName} custom Python software service page.`,
    canonical: `${baseUrl}/python-software`,
    priority: "0.1",
    changefreq: "yearly",
    excludeFromSitemap: true
  }
};

const imageAlts = {
  "company_logo.png": `${brandName} official logo`,
  "logo.png": `${brandName} official logo`,
  "logo-icon.png": `${brandName} icon logo`,
  "logo01.png": `${brandName} brand logo`,
  "web.jpeg": "Responsive enterprise web development service illustration",
  "AI.jpeg": "Artificial intelligence and machine learning service illustration",
  "Robot.png": "Robotics and IoT embedded systems service icon",
  "python.jpeg": "Custom Python software development service illustration",
  "chitti.jpg": "Arduino obstacle-avoiding robot project prototype",
  "robocar.jpg": "Arduino smart robo car project prototype",
  "image11.png": "Responsive modern business website project screenshot",
  "chatbot.PNG": "AI conversational customer support chatbot screenshot",
  "chatbot.webp": "AI conversational customer support chatbot screenshot",
  "automation.jpg": "Business workflow automation project architecture screenshot",
  "automation.webp": "Business workflow automation project architecture screenshot",
  "parking_system.jpg": "Smart sensor parking system project prototype screenshot",
  "parking_system.webp": "Smart sensor parking system project prototype screenshot",
  "Attendance_system.png": "Automated face recognition attendance system screenshot",
  "Attendance_system.webp": "Automated face recognition attendance system screenshot",
  "Job_Portal.png": "High-concurrency job portal web application screenshot",
  "Job_Portal.webp": "High-concurrency job portal web application screenshot",
  "AI-healthcare.png": "AI healthcare diagnostic assistant concept screenshot",
  "AI-healthcare.webp": "AI healthcare diagnostic assistant concept screenshot",
  "pdf-summerizer.png": "AI PDF summarizer software tool screenshot",
  "pdf-summarizer.webp": "AI PDF summarizer software tool screenshot",
  "QR-code-generator.png": "Dynamic QR code generator software tool screenshot",
  "QR-code-generator.webp": "Dynamic QR code generator software tool screenshot",
  "marksheet-generator.png": "Automated institutional marksheet generator software screenshot",
  "marksheet-generator.webp": "Automated institutional marksheet generator software screenshot",
  "YT-video-installer.png": "Media downloader software application screenshot",
  "youtube-downloader.webp": "Media downloader software application screenshot",
  "Object-distance-ditector.png": "Ultrasonic object distance detector project prototype",
  "object-distance-detector.webp": "Ultrasonic object distance detector project prototype",
  "teaching-app.png": "Digital interactive classroom teaching application screenshot",
  "teaching-app.webp": "Digital interactive classroom teaching application screenshot",
  "Tech-news-hub-site.png": "Tech news hub responsive publishing portal screenshot",
  "Tech-news-hub-site.webp": "Tech news hub responsive publishing portal screenshot",
  "Automobile-site.png": "Automobile dealership website platform screenshot",
  "Automobile-site.webp": "Automobile dealership website platform screenshot",
  "import-export-site.png": "Import-export logistics enterprise website screenshot",
  "import-export-site.webp": "Import-export logistics enterprise website screenshot",
  "ActivityDitector.png": "Activity detection and computer vision software screenshot",
  "activity-detector.webp": "Activity detection and computer vision software screenshot",
  "receipt-maker.png": "Custom billing and receipt generator software screenshot",
  "receipt-maker.webp": "Custom billing and receipt generator software screenshot",
  "image2.png": "Robo car embedded robotics prototype photograph",
  "image2.webp": "Robo car embedded robotics prototype photograph",
  "School-website.png": "Savvy Mother Toddler School website screenshot",
  "School-website.webp": "Savvy Mother Toddler School website screenshot",
  "school-management.png": "School management ERP software administrative screenshot",
  "school-management.webp": "School management ERP software administrative screenshot",
  "savvy-mother-school.webp": "Savvy Mother International School official website screenshot",
  "edu-nova-erp.webp": "EDU-NOVA school management ERP software dashboard screenshot",
  "result-portal.webp": "Online examination result and marksheet verification portal screenshot",
  "synapse-neet-app.webp": "Synapse NEET-UG medical aspirant AI preparation mobile app screenshot",
  "synapse-neet-app-full.webp": "Synapse NEET-UG mobile application complete interface screenshot"
};

const serviceOffers = [
  "Web Development",
  "School & Institutional Management Software",
  "AI Solutions & Chatbots",
  "Python Software Development",
  "Business Automation",
  "Robotics & IoT Solutions",
  "Custom Software Development",
  "Website Maintenance & SLA Support"
];

// Rich FAQ entity mapping for Schema.org
const pageFaqs = {
  "index.html": [
    ["What services does Infranix Digital specialize in?", "Infranix Digital engineers enterprise digital solutions across seven core domains: Web Development, School & Institutional Management ERP Software, AI Chatbots & Automation, Custom Python Software, Business Workflow Automation, Robotics & IoT Embedded Systems, and Proactive Website Maintenance."],
    ["What is the EDU-NOVA School Management ERP?", "EDU-NOVA is our comprehensive institutional school management system designed for schools, academies, and colleges. It manages student admissions, fee tracking, biometric & face attendance, marksheet generation, parent notifications, and teacher administration with multi-role access controls."],
    ["Can Infranix Digital build custom AI chatbots for our business?", "Yes. We build intelligent, custom-trained AI chatbots and conversational assistants for 24/7 customer support, instant FAQ responses, lead qualification, and WhatsApp or CRM integrations, trained specifically on your company's proprietary services and knowledge base."],
    ["Can we hire Infranix Digital for custom Python software & automation?", "Absolutely. We build custom Python desktop software, automated billing engines, report and certificate generators, web scrapers, data pipelines, and administrative automation tools that streamline business operations and eliminate manual repetitive work."],
    ["Do you provide full source code and post-launch maintenance?", "Yes. Upon completion and delivery, clients receive full ownership of the software application and codebase. We also offer dedicated monthly SLA maintenance packages covering server uptime, security patches, backups, and feature improvements."],
    ["Where is Infranix Digital located and how do we begin?", "Infranix Digital is headquartered in Rewa, Madhya Pradesh, India, serving clients across India and globally. You can initiate a project consultation by submitting our contact form, requesting a quote online, or connecting directly on WhatsApp at +91 6266324835."]
  ],
  "pricing.html": [
    ["Can you manage an existing website?", "Yes. Existing websites can be managed, updated, redesigned, fixed, or improved with new features."],
    ["Can I start with a low budget?", "Yes. Small landing pages, bug fixes, feature add-ons, and content updates are available at low starter prices."],
    ["Do Vercel contact forms work?", "Static Vercel sites use WhatsApp-based inquiry forms, direct phone links, email integrations, and contact CTAs that deliver leads straight to you."],
    ["Can features be added later?", "Yes. Websites, school systems, dashboards, and Python tools can be built in phases as the budget and requirements grow."],
    ["What do you need before starting?", "Logo, content, photos, required features, reference links, deadline, and any existing website or database access."],
    ["Is support included after delivery?", "Basic handover support is included. Ongoing support is available through our dedicated monthly website maintenance packages."]
  ],
  "school-management-system.html": [
    ["Can modules be added later?", "Yes. Attendance, marksheets, fees, certificates, student portals, and user login can be added in phases as your school grows."],
    ["Is it only for schools?", "It can also be customized for coaching centers, institutes, colleges, tuition centers, and multi-branch academies."],
    ["What details are needed to start?", "Share your classes, sections, report formats, grading scale, attendance process, user roles, and required management modules."]
  ],
  "school-website.html": [
    ["Can it run on Vercel?", "Yes. A modern static school website runs on Vercel with lightning-fast speeds, free SSL security, and instant WhatsApp contact CTAs."],
    ["Do you need school photos?", "Photos, logo, address, phone, email, and academic details help make the website authentic, trustworthy, and engaging for parents."],
    ["Can you add more pages later?", "Yes. Pages like fee structure, transport routes, downloadable forms, circulars, and photo galleries can be added anytime."]
  ],
  "ai-chatbot.html": [
    ["Can the chatbot answer from my website content?", "Yes. The AI chatbot is trained directly on your services, FAQs, pricing, contact details, and business policies."],
    ["Can it collect leads?", "Yes. It guides visitors to share their name, phone number, requirements, budget, and timeline, sending details straight to you."],
    ["Is it useful for small businesses?", "Yes. It is ideal for schools, service agencies, local businesses, e-commerce, clinics, and professional consulting practices."]
  ],
  "website-erp-software.html": [
    ["Can website and ERP be delivered in phases?", "Yes. The public website can launch first for immediate admissions marketing, followed by the internal ERP modules in scheduled milestones."],
    ["Is payment online included?", "Online payment gateway integration can be added upon request for tuition fees, application forms, and service orders."],
    ["Can it be customized for one school?", "Yes. Every module, field, database relation, printable report, and workflow is customized according to your institution's specific needs."]
  ],
  "python-software.html": [
    ["Can you make a simple desktop app?", "Yes. We build clean graphical desktop interfaces (GUI) for users who want desktop software without touching command lines."],
    ["Can it generate PDFs and marksheets?", "Yes. Automated PDF reports, marksheets, billing receipts, certificates, and data summaries can be generated dynamically from Excel or databases."],
    ["What details are needed?", "Share the workflow steps, input data files, desired output format, and any sample spreadsheets or reference software."]
  ],
  "website-maintenance.html": [
    ["Can you manage a website you did not build?", "Yes, if source code or repository access is provided and the project stack is reviewable."],
    ["Can you rebuild only the design?", "Yes. We can preserve your content and SEO equity while upgrading the UI, layout, typography, speed, and mobile responsiveness."],
    ["Can I ask for one small change?", "Yes. Small feature additions, bug fixes, banner changes, and speed optimizations are available as standalone tasks."]
  ],
  "services.html": [
    ["What technology stack does Infranix Digital build on?", "We engineer web platforms using modern HTML5, CSS3, modern JavaScript, React, Next.js, Python, Node.js, and cloud CDN architectures hosted on Vercel."],
    ["How do we start a digital engineering project?", "You can submit an inquiry via our contact form, request a quote with your specifications, or chat directly with our lead engineer on WhatsApp."],
    ["Does Infranix Digital provide post-launch maintenance?", "Yes. We provide comprehensive monthly maintenance, security audits, performance optimization, and SLA bug-fix guarantees."]
  ]
};

function isExternalReference(value) {
  return /^(https?:|mailto:|tel:|#|javascript:|data:)/i.test(value) || value.startsWith("?");
}

function checkLocalReferences() {
  const files = fs.readdirSync(root)
    .filter((file) => file.endsWith(".html"))
    .sort();
  const missing = [];

  files.forEach((file) => {
    const html = fs.readFileSync(path.join(root, file), "utf8");
    const matches = Array.from(html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi));

    matches.forEach((match) => {
      const raw = match[1];
      if (isExternalReference(raw)) {
        return;
      }

      const clean = raw.split("#")[0].split("?")[0];
      if (!clean || clean.includes("/") || clean.startsWith("#")) {
        return;
      }

      if (!fs.existsSync(path.join(root, clean))) {
        missing.push(`${file}: ${raw}`);
      }
    });
  });

  if (missing.length) {
    console.error("Missing local references:");
    missing.forEach((item) => console.error(`- ${item}`));
    process.exitCode = 1;
    return;
  }

  console.log(`Checked ${files.length} HTML files. No missing local references.`);
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function decodeEntities(value) {
  return String(value)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function pageUrl(file, meta) {
  if (meta && meta.canonical) {
    return meta.canonical;
  }
  return file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file.replace(/\.html$/i, "")}`;
}

function getMeta(file, html) {
  const fallbackTitle = (html.match(/<title>([^<]+)<\/title>/i) || [null, brandName])[1].trim();
  return {
    title: fallbackTitle,
    description: `${brandName} engineers enterprise digital experiences, school ERP software, AI chatbots, Python tools, and custom technology solutions.`,
    keywords: "Infranix Digital, software development, web development, school ERP, AI chatbots, Python software, Ritik Kushwaha",
    priority: "0.5",
    changefreq: "monthly",
    ...pageMeta[file]
  };
}

function normalizeText(html) {
  return html
    .replace(/&amp;amp;/g, "&amp;")
    .replace(/Â©/g, "&copy;")
    .replace(/Ã‚Â©/g, "&copy;")
    .replace(/LetÃ¢â‚¬â„¢s/g, "Let's")
    .replace(/letÃ¢â‚¬â„¢s/g, "let's")
    .replace(/Ã¢â‚¬â„¢/g, "'")
    .replace(/Ã¢â‚¬â€œ/g, "-")
    .replace(/Ã¢â‚¬â€ /g, "-")
    .replace(/Ã°Å¸â€œÂ \s*/g, "")
    .replace(/Ã°Å¸â€œÅ¾\s*/g, "")
    .replace(/Ã¢Å“â€°\s*/g, "")
    .replace(/CodeNexus is a technology-driven freelance brand founded by/g, `${brandName} is an enterprise digital engineering practice led by`)
    .replace(/CodeNexus is a technology service studio led by/g, `${brandName} is an enterprise digital engineering practice led by`)
    .replace(/Follow CodeNexus/g, `Connect with ${brandName}`)
    .replace(/(?<![\/_A-Za-z0-9-])CodeNexus(?![A-Za-z0-9-])/g, brandName)
    .replace(/Pvt\. Ltd\.\./g, "Pvt. Ltd.")
    .replace(/company_logo\.png/g, logoFile)
    .replace(/logo01\.png/g, logoFile);
}

function buildSchema(file, meta) {
  const url = pageUrl(file, meta);

  const businessEntity = {
    "@type": ["ProfessionalService", "Organization"],
    "@id": `${baseUrl}/#business`,
    "name": brandName,
    "legalName": brandName,
    "alternateName": ["Infranix", "CodeNexus", "Infranix Digital India"],
    "url": `${baseUrl}/`,
    "logo": defaultImage,
    "image": defaultImage,
    "description": pageMeta["index.html"].description,
    "telephone": businessPhone,
    "email": businessEmail,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rewa",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "486001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.5362,
      "longitude": 81.3037
    },
    "founder": {
      "@type": "Person",
      "name": "Ritik Kushwaha",
      "jobTitle": "Founder & Lead Digital Engineer",
      "sameAs": "https://www.linkedin.com/in/ritik-kushwaha-bb76a0355/"
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "AdministrativeArea", "name": "Madhya Pradesh" },
      { "@type": "City", "name": "Rewa" },
      { "@type": "AdministrativeArea", "name": "Global" }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/ritik-kushwaha-bb76a0355/",
      "https://github.com/rk-creater-ctrl",
      "https://x.com/_CodeNexus",
      "https://www.instagram.com/_.ritik_25",
      "https://wa.me/916266324835"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${brandName} Enterprise Solutions & Services`,
      "itemListElement": serviceOffers.map((name) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": name
        }
      }))
    }
  };

  const webSiteEntity = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": brandName,
    "url": `${baseUrl}/`,
    "publisher": { "@id": `${baseUrl}/#business` },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const webPageEntity = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": meta.title,
    "description": meta.description,
    "isPartOf": { "@id": `${baseUrl}/#website` },
    "provider": { "@id": `${baseUrl}/#business` },
    "inLanguage": "en-US"
  };

  const graph = [businessEntity, webSiteEntity, webPageEntity];

  // Breadcrumbs
  if (meta.breadcrumb && meta.breadcrumb.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      "itemListElement": meta.breadcrumb.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    });
  }

  // FAQs
  if (pageFaqs[file]) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      "mainEntity": pageFaqs[file].map(([q, a]) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a
        }
      }))
    });
  }

  // Software Application Rich Snippets
  if (meta.software) {
    graph.push({
      "@type": "SoftwareApplication",
      "@id": `${url}#software`,
      "name": meta.software.name,
      "applicationCategory": meta.software.category,
      "operatingSystem": "Web Browser, Windows, Linux, Android, iOS",
      "offers": {
        "@type": "Offer",
        "price": meta.software.price,
        "priceCurrency": "INR"
      },
      "provider": { "@id": `${baseUrl}/#business` }
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

function ensureAdvancedHeadTags(html, file, meta) {
  const canonical = pageUrl(file, meta);

  // 1. Title
  if (/<title>[^<]*<\/title>/i.test(html)) {
    html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttr(meta.title)}</title>`);
  } else {
    html = html.replace(/<\/head>/i, `<title>${escapeAttr(meta.title)}</title>\n</head>`);
  }

  // 2. Meta Description
  if (/<meta\s+name=["']description["'][^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeAttr(meta.description)}">`);
  } else {
    html = html.replace(/<meta name="viewport" content="width=device-width, initial-scale=1.0">/i, `$&\n<meta name="description" content="${escapeAttr(meta.description)}">`);
  }

  // 3. Canonical
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${escapeAttr(canonical)}">`);
  } else {
    html = html.replace(/<meta name="description" content="[^"]*">/i, `$&\n<link rel="canonical" href="${escapeAttr(canonical)}">`);
  }

  // 4. Clean up any existing SEO / Social / Schema tags injected by previous passes
  html = html.replace(/\n?<meta[^>]+data-codenexus-seo[^>]*>/gi, "");
  html = html.replace(/\n?<meta\s+name=["']keywords["'][^>]*>/gi, "");
  html = html.replace(/\n?<meta\s+name=["']robots["'][^>]*>/gi, "");
  html = html.replace(/\n?<meta\s+name=["']googlebot["'][^>]*>/gi, "");
  html = html.replace(/\n?<meta\s+name=["']bingbot["'][^>]*>/gi, "");
  html = html.replace(/\n?<meta\s+name=["']geo\.[^"']+["'][^>]*>/gi, "");
  html = html.replace(/\n?<meta\s+name=["']ICBM["'][^>]*>/gi, "");
  html = html.replace(/\n?<meta\s+name=["']author["'][^>]*>/gi, "");
  html = html.replace(/\n?<link\s+rel=["']author["'][^>]*>/gi, "");
  html = html.replace(/\n?<link\s+rel=["']dns-prefetch["'][^>]*>/gi, "");
  html = html.replace(/\n?<script type="application\/ld\+json" data-codenexus-schema>[\s\S]*?<\/script>/gi, "");

  // 5. Build rich SEO, Geo, Social, and Performance Head Block
  const seoBlock = [
    `<!-- Primary SEO & Crawler Meta -->`,
    `<meta name="keywords" content="${escapeAttr(meta.keywords || '')}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`,
    `<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">`,
    `<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">`,
    `<meta name="author" content="${escapeAttr(brandName)}">`,
    `<link rel="author" href="${baseUrl}/about">`,
    ``,
    `<!-- Regional & Local SEO Tags (Rewa, MP, India) -->`,
    `<meta name="geo.region" content="IN-MP">`,
    `<meta name="geo.placename" content="Rewa, Madhya Pradesh, India">`,
    `<meta name="geo.position" content="24.5362;81.3037">`,
    `<meta name="ICBM" content="24.5362, 81.3037">`,
    ``,
    `<!-- Open Graph / Facebook -->`,
    `<meta property="og:type" content="website" data-codenexus-seo>`,
    `<meta property="og:site_name" content="${escapeAttr(brandName)}" data-codenexus-seo>`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" data-codenexus-seo>`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" data-codenexus-seo>`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" data-codenexus-seo>`,
    `<meta property="og:image" content="${escapeAttr(defaultImage)}" data-codenexus-seo>`,
    `<meta property="og:image:width" content="1200" data-codenexus-seo>`,
    `<meta property="og:image:height" content="630" data-codenexus-seo>`,
    `<meta property="og:image:alt" content="${escapeAttr(brandName)} Enterprise Digital Engineering" data-codenexus-seo>`,
    `<meta property="og:locale" content="en_US" data-codenexus-seo>`,
    ``,
    `<!-- Twitter Cards -->`,
    `<meta name="twitter:card" content="summary_large_image" data-codenexus-seo>`,
    `<meta name="twitter:site" content="@_CodeNexus" data-codenexus-seo>`,
    `<meta name="twitter:creator" content="@_CodeNexus" data-codenexus-seo>`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" data-codenexus-seo>`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" data-codenexus-seo>`,
    `<meta name="twitter:image" content="${escapeAttr(defaultImage)}" data-codenexus-seo>`,
    `<meta name="twitter:image:alt" content="${escapeAttr(brandName)}" data-codenexus-seo>`,
    ``,
    `<!-- Performance & Resource Hints -->`,
    `<link rel="dns-prefetch" href="//fonts.googleapis.com">`,
    `<link rel="dns-prefetch" href="//fonts.gstatic.com">`,
    `<link rel="dns-prefetch" href="//cdnjs.cloudflare.com">`,
    ``,
    `<!-- Schema.org Multi-Entity Graph (Organization, WebSite, Breadcrumbs, FAQs, Services) -->`,
    `<script type="application/ld+json" data-codenexus-schema>${JSON.stringify(buildSchema(file, meta), null, 2)}</script>`
  ].join("\n");

  return html.replace(/<\/head>/i, `${seoBlock}\n</head>`);
}

function attrValue(attrs, name) {
  const match = attrs.match(new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, "i"));
  return match ? match[1] : "";
}

function inferAlt(src) {
  const file = path.basename(src);
  if (imageAlts[file]) {
    return imageAlts[file];
  }

  if (file.toLowerCase().endsWith(".webp")) {
    const base = file.replace(/\.webp$/i, "");
    const candidate = [
      `${base}.png`,
      `${base}.PNG`,
      `${base}.jpg`,
      `${base}.jpeg`
    ].find((name) => imageAlts[name]);

    if (candidate) {
      return imageAlts[candidate];
    }
  }

  return file
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function maybeWebp(src) {
  if (/^https?:\/\//i.test(src) || src.includes("/") || src.toLowerCase().includes("logo")) {
    return src;
  }

  const ext = path.extname(src).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) {
    return src;
  }

  const webp = `${src.slice(0, -ext.length)}.webp`;
  return fs.existsSync(path.join(root, webp)) ? webp : src;
}

function enhanceImages(html) {
  return html.replace(/<img\b([^>]*)>/gi, (match, attrs) => {
    let updatedAttrs = attrs.trim();
    const src = attrValue(updatedAttrs, "src");

    if (!src) {
      return match;
    }

    const optimizedSrc = maybeWebp(src);
    if (optimizedSrc !== src) {
      updatedAttrs = updatedAttrs.replace(/src\s*=\s*["'][^"']*["']/i, `src="${optimizedSrc}"`);
    }

    const isLogo = /logo/i.test(optimizedSrc);
    const inferredAlt = inferAlt(optimizedSrc);

    if (/\salt\s*=/.test(updatedAttrs)) {
      updatedAttrs = updatedAttrs.replace(/\salt\s*=\s*["'][^"']*["']/i, ` alt="${escapeAttr(inferredAlt)}"`);
    } else {
      updatedAttrs += ` alt="${escapeAttr(inferredAlt)}"`;
    }

    if (!isLogo && !/\sloading\s*=/.test(updatedAttrs)) {
      updatedAttrs += ` loading="lazy"`;
    }

    if (!/\sdecoding\s*=/.test(updatedAttrs)) {
      updatedAttrs += ` decoding="async"`;
    }

    return `<img ${updatedAttrs}>`;
  });
}

function enhanceExternalLinks(html) {
  return html.replace(/<a\b([^>]*target=["']_blank["'][^>]*)>/gi, (match, attrs) => {
    if (/\srel\s*=/.test(attrs)) {
      return match;
    }
    return `<a${attrs} rel="noopener">`;
  });
}

function ensureContactLinks(html) {
  return html
    .replace(/codenexus199@gmail\.com/gi, businessEmail)
    .replace(/<p><i class="fas fa-phone"><\/i> \+91 6266324835<\/p>/g, `<p><i class="fas fa-phone"></i> <a href="tel:+916266324835">${businessPhone}</a></p>`)
    .replace(/<p><i class="fas fa-envelope"><\/i> ritikkushwaha3893@gmail\.com<\/p>/g, `<p><i class="fas fa-envelope"></i> <a href="mailto:${businessEmail}">${businessEmail}</a></p>`)
    .replace(/<li><i class="fas fa-phone"><\/i> \+91 6266324835<\/li>/g, `<li><i class="fas fa-phone"></i> <a href="tel:+916266324835">${businessPhone}</a></li>`)
    .replace(/<li><i class="fas fa-envelope"><\/i> ritikkushwaha3893@gmail\.com , codenexus199@gmail\.com<\/li>/g, `<li><i class="fas fa-envelope"></i> <a href="mailto:${businessEmail}">${businessEmail}</a></li>`);
}

function ensureBrandLogos(html) {
  html = html.replace(/<link rel="icon" type="image\/png" href="[^"]+">/i, `<link rel="icon" type="image/png" href="${headerLogoFile}">`);
  html = html.replace(/(<header[\s\S]*?<nav class="menu">[\s\S]*?<img[^>]*src=")([^"]+)(")/i, `$1${headerLogoFile}$3`);
  return html;
}

function ensureTrackingAttributes(html) {
  html = html.replace(/<a\b([^>]*data-order-service="([^"]+)"[^>]*)>/gi, (match, attrs, service) => {
    if (/\sdata-track\s*=/.test(attrs)) {
      return match;
    }
    return `<a${attrs} data-track="order_click" data-track-label="${escapeAttr(decodeEntities(service))}">`;
  });

  html = html.replace(/<a\b([^>]*href="pricing\.html"[^>]*)>/gi, (match, attrs) => {
    if (/\sdata-track\s*=/.test(attrs)) {
      return match;
    }
    return `<a${attrs} data-track="pricing_click" data-track-label="Pricing">`;
  });

  html = html.replace(/<form\b([^>]*data-whatsapp-form[^>]*)>/gi, (match, attrs) => {
    if (/\sdata-track\s*=/.test(attrs)) {
      return match;
    }
    return `<form${attrs} data-track="form_submit">`;
  });

  return html;
}

function processHtml(file) {
  const fullPath = path.join(root, file);
  let html = fs.readFileSync(fullPath, "utf8");
  const meta = getMeta(file, html);

  if (file === "pyhton.html") {
    html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="${escapeAttr(meta.description)}">
<link rel="canonical" href="${escapeAttr(meta.canonical)}">
<meta http-equiv="refresh" content="0; url=python-software.html">
<title>${escapeAttr(meta.title)}</title>
<link rel="icon" type="image/png" href="${headerLogoFile}">
</head>
<body>
<main>
<h1>Python Development Page Moved</h1>
<p>The Python service page has moved to <a href="python-software.html">Custom Python Software</a>.</p>
</main>
</body>
</html>
`;
    fs.writeFileSync(fullPath, html);
    return true;
  }

  const before = html;
  html = normalizeText(html);
  html = ensureAdvancedHeadTags(html, file, meta);
  html = ensureBrandLogos(html);
  html = enhanceImages(html);
  html = enhanceExternalLinks(html);
  html = ensureContactLinks(html);
  html = ensureTrackingAttributes(html);

  if (html !== before) {
    fs.writeFileSync(fullPath, html);
    return true;
  }

  return false;
}

function updateSitemap(files) {
  const entries = files
    .filter((file) => pageMeta[file] && !pageMeta[file].excludeFromSitemap)
    .sort((a, b) => {
      const priority = Number(pageMeta[b]?.priority || 0.5) - Number(pageMeta[a]?.priority || 0.5);
      return priority || a.localeCompare(b);
    })
    .map((file) => {
      const meta = pageMeta[file] || {};
      const loc = pageUrl(file, meta);
      let imgXml = "";
      if (meta.images && meta.images.length > 0) {
        imgXml = meta.images.map((img) => `    <image:image>
      <image:loc>${baseUrl}/${img.file}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`).join("\n");
      }

      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq || "monthly"}</changefreq>
    <priority>${meta.priority || "0.5"}</priority>${imgXml ? "\n" + imgXml : ""}
  </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>
`;

  fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
}

function updateRobots() {
  const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
Host: ${baseUrl}
`;

  fs.writeFileSync(path.join(root, "robots.txt"), robots);
}

function main() {
  if (process.argv.includes("--check-links")) {
    checkLocalReferences();
    return;
  }

  const files = fs.readdirSync(root)
    .filter((file) => file.endsWith(".html"))
    .sort();

  const changed = files.filter(processHtml);
  updateSitemap(files);
  updateRobots();

  console.log(`Processed ${files.length} HTML files.`);
  console.log(`Updated ${changed.length} HTML files, sitemap.xml, and robots.txt.`);
}

main();
