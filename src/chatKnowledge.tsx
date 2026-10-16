export const EMAIL = "dina.mar.fajardo@gmail.com";
export const LINKEDIN_URL = "https://linkedin.com/in/dina-fajardo/";
export const GITHUB_URL = "https://github.com/deen-io";

export function EmailLink() {
  return (
    <a className="chat-link" href={`mailto:${EMAIL}`}>
      {EMAIL}
    </a>
  );
}

export function LinkedInLink() {
  return (
    <a className="chat-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
      LinkedIn
    </a>
  );
}

export function GithubLink() {
  return (
    <a className="chat-link" href={GITHUB_URL} target="_blank" rel="noreferrer">
      GitHub
    </a>
  );
}

type Entry = { id: string; keywords: string[]; answer: React.ReactNode };

// Ordered most → least specific: the first entry whose keyword appears in the
// message wins, so specific topics (one project, one job) must sit above
// broad ones (all projects, all experience).
const ENTRIES: Entry[] = [
  {
    id: "project-logistics",
    keywords: ["logistics", "waybill", "shipment", "freight system", "delivery tracking"],
    answer: (
      <>
        The <strong>Waybilling &amp; Logistics System</strong> replaced manual, paper-based shipment tracking with a
        centralized platform for real-time delivery tracking and coordination — built with PHP, MySQL, and
        JavaScript. It improved delivery tracking accuracy across the business.
      </>
    ),
  },
  {
    id: "project-recruitment",
    keywords: ["recruitment", "job searching", "job platform", "persol", "candidate matching", "hiring platform"],
    answer: (
      <>
        The <strong>Job Searching Platform</strong> (built with Laravel, WordPress, and MySQL) is a nationwide
        recruitment platform with automated candidate-job matching and custom job postings — you can see it live at{" "}
        <a className="chat-link" href="https://pfs.persol-group.co.jp" target="_blank" rel="noreferrer">
          pfs.persol-group.co.jp
        </a>
        .
      </>
    ),
  },
  {
    id: "project-erp",
    keywords: ["erp", "procurement", "inventory", "stock visibility"],
    answer: (
      <>
        The <strong>Procurement &amp; Inventory System</strong> is an integrated ERP module (React, Node.js,
        PostgreSQL) with approval flows and real-time tracking, built to fix poor stock visibility across operations.
      </>
    ),
  },
  {
    id: "project-ai",
    keywords: ["ev charging", "charging spot", "range anxiety", "flutter", "ai app", "ai mobile"],
    answer: (
      <>
        The <strong>EV Charging Spots App</strong> is an AI-driven mobile app (Python, Laravel, Flutter, PostgreSQL)
        that recommends optimal charging stations along a route to reduce driver range anxiety.
      </>
    ),
  },
  {
    id: "projects-all",
    keywords: ["project", "portfolio", "built", "work you", "case stud"],
    answer: (
      <>
        I've shipped four standout projects: a <strong>Waybilling &amp; Logistics System</strong>, a{" "}
        <strong>Job Searching Platform</strong> for a nationwide recruiter, a <strong>Procurement &amp; Inventory</strong>{" "}
        ERP module, and an AI-driven <strong>EV Charging Spots App</strong>. Ask me about any one of them, or scroll
        up to "Selected work" for the full write-ups!
      </>
    ),
  },
  {
    id: "job-cody",
    keywords: ["cody", "current job", "current role", "current company"],
    answer: (
      <>
        Since February 2021, I've been a Software Engineer at <strong>Cody Web Development Inc.</strong>, building
        scalable backend services and secure REST APIs, and delivering end-to-end features with React, Vue.js, and
        AWS.
      </>
    ),
  },
  {
    id: "job-kredo",
    keywords: ["kredo", "teacher", "teaching"],
    answer: (
      <>
        From 2020–2022, I was a part-time IT Teacher at <strong>Kredo IT Abroad Inc.</strong>, delivering
        international curriculum classes and mentoring students transitioning into tech careers.
      </>
    ),
  },
  {
    id: "job-freight",
    keywords: ["freight", "overland", "forwarder"],
    answer: (
      <>
        From 2016–2021, I was a Web Developer at <strong>Daily Overland Freight Forwarders</strong>, building
        internal management systems that cut manual processing time by 40% and improved database performance by 33%
        across four business modules.
      </>
    ),
  },
  {
    id: "experience",
    keywords: [
      "experience",
      "how many years",
      "background",
      "career",
      "work history",
      "employment",
      "resume",
      "cv",
    ],
    answer: (
      <>
        10+ years of experience: Software Engineer at Cody Web Development Inc. (2021–present), part-time IT Teacher
        at Kredo IT Abroad Inc. (2020–2022), and Web Developer at Daily Overland Freight Forwarders (2016–2021). Ask
        me about any of those, or email <EmailLink /> for a full résumé.
      </>
    ),
  },
  {
    id: "skills-backend",
    keywords: ["backend", "back-end", "node", "laravel", "php", "api"],
    answer: (
      <>
        Backend: JavaScript, TypeScript, PHP, Python, Ruby, Node.js, Laravel, Express, Ruby on Rails, and REST API
        design.
      </>
    ),
  },
  {
    id: "skills-database",
    keywords: ["database", "sql", "postgres", "mysql", "mongo", "redis"],
    answer: <>Databases: PostgreSQL, MySQL, MongoDB, Redis, query optimization, and relational &amp; NoSQL design.</>,
  },
  {
    id: "skills-frontend",
    keywords: ["frontend", "front-end", "react", "vue"],
    answer: <>Frontend: React, Vue.js, JavaScript, HTML, and CSS.</>,
  },
  {
    id: "skills-tools",
    keywords: ["tool", "aws", "docker", "ci/cd", "devops", "git"],
    answer: <>Tools &amp; practices: Git, GitHub Actions, Docker, Nginx, AWS, CI/CD, code reviews, and AI-assisted development.</>,
  },
  {
    id: "skills-all",
    keywords: ["skill", "tech stack", "technologies", "stack", "language", "what do you use", "programming"],
    answer: (
      <>
        Full stack: JavaScript, TypeScript, PHP, Python, Ruby, React, Vue.js, Node.js, Laravel, Express, Ruby on
        Rails, PostgreSQL, MySQL, MongoDB, Redis, AWS, Docker, Nginx, CI/CD, and Git. Ask about backend, database,
        frontend, or tools specifically for more detail!
      </>
    ),
  },
  {
    id: "location",
    keywords: ["where", "location", "based", "remote", "timezone", "cebu", "philippines"],
    answer: <>I'm based in Cebu City, Philippines, and open to remote work.</>,
  },
  {
    id: "availability",
    keywords: ["available", "hire", "hiring", "freelance", "contract", "full-time", "fulltime", "open to work", "recruit"],
    answer: (
      <>
        Open to full-time, contract, and senior engineer roles — remote-friendly! Reach out at <EmailLink /> or{" "}
        <LinkedInLink />.
      </>
    ),
  },
  {
    id: "rate",
    keywords: ["rate", "salary", "price", "pricing", "cost", "budget", "compensation", "charge", "how much"],
    answer: (
      <>
        That's a "let's talk directly" kind of question 😊 Email <EmailLink /> with your project or role details and
        I'll get back to you personally.
      </>
    ),
  },
  {
    id: "contact",
    keywords: ["contact", "email", "linkedin", "github", "reach", "connect", "get in touch"],
    answer: (
      <>
        You can reach me at <EmailLink />, on <LinkedInLink />, or check out my code on <GithubLink />.
      </>
    ),
  },
  {
    id: "who",
    keywords: ["who are you", "who is dina", "about you", "about dina", "tell me about yourself", "introduce"],
    answer: (
      <>
        I'm a Senior Full-Stack Software Engineer with 10+ years building SaaS and enterprise platforms across
        logistics, procurement, and recruitment — specializing in Node.js and Laravel backends, RESTful API design,
        and end-to-end feature delivery.
      </>
    ),
  },
];

function normalize(text: string) {
  return text.toLowerCase().trim();
}

export function answerQuestion(message: string): React.ReactNode | null {
  const normalized = normalize(message);
  if (!normalized) return null;

  let best: { entry: Entry; score: number } | null = null;
  for (const entry of ENTRIES) {
    const score = entry.keywords.reduce((total, keyword) => (normalized.includes(keyword) ? total + keyword.length : total), 0);
    if (score > 0 && (!best || score > best.score)) best = { entry, score };
  }

  return best?.entry.answer ?? null;
}
