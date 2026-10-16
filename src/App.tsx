import { useEffect, useState } from "react";
import ChatWidget from "./ChatWidget";

const projects = [
  {
    number: "01",
    title: "Waybilling & Logistics System",
    role: "Web Developer",
    description: "Manual shipment tracking caused delays and poor visibility across the business.",
    story:
      "I built a centralized platform with real-time delivery tracking and coordination tools, replacing paper-based workflows and improving delivery tracking accuracy across operations.",
    tech: ["PHP", "MySQL", "JavaScript"],
    variant: "logistics",
    sticker: "Improved tracking accuracy",
    windowTitle: "waybill.tracking",
  },
  {
    number: "02",
    title: "Job Searching Platform",
    role: "Full Stack Developer",
    description: "Manual job matching limited efficiency for a nationwide recruitment business.",
    story:
      "I built a nationwide platform with automated candidate-job matching and custom job postings, enabling faster, more consistent matching at scale.",
    tech: ["Laravel", "WordPress", "MySQL"],
    variant: "recruitment",
    sticker: "Faster nationwide matching",
    windowTitle: "jobs.platform",
    demo: "https://pfs.persol-group.co.jp",
  },
  {
    number: "03",
    title: "Procurement & Inventory System",
    role: "Software Engineer",
    description: "Disconnected processes led to poor stock visibility across procurement and inventory.",
    story:
      "I contributed to an integrated ERP module with approval flows and real-time tracking, enhancing stock visibility across operations.",
    tech: ["React", "Node.js", "PostgreSQL"],
    variant: "erp",
    sticker: "Real-time stock visibility",
    windowTitle: "operations.dashboard",
  },
  {
    number: "04",
    title: "EV Charging Spots App",
    role: "Full Stack Developer",
    description: "EV drivers faced range anxiety without a reliable way to plan charging stops.",
    story:
      "I helped build an AI-driven mobile app that recommends optimal charging stations along a route, reducing driver range anxiety.",
    tech: ["Python", "Laravel", "Flutter", "PostgreSQL"],
    variant: "ai",
    sticker: "Reduced range anxiety",
    windowTitle: "charge.finder",
  },
];

const skillGroups = [
  ["Backend", "JavaScript · TypeScript · PHP · Python · Ruby · Node.js · Laravel · Express · Ruby on Rails · REST APIs"],
  ["Database", "PostgreSQL · MySQL · MongoDB · Redis · Query Optimization · Relational & NoSQL Design"],
  ["Frontend", "React · Vue.js · JavaScript · HTML · CSS"],
  ["Tools & Practices", "Git · GitHub Actions · Docker · Nginx · AWS · CI/CD · Code Reviews · AI-assisted Development"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Button({
  children,
  href,
  tone = "dark",
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  tone?: "dark" | "light";
  onClick?: () => void;
}) {
  return (
    <a className={`button button--${tone}`} href={href} onClick={onClick}>
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

function openChatWidget() {
  window.dispatchEvent(new Event("open-chat-widget"));
}

function ProjectVisual({ variant, windowTitle, sticker }: { variant: string; windowTitle: string; sticker: string }) {
  return (
    <div className={`project-visual project-visual--${variant}`} aria-label="Anonymized interface mockup">
      <div className="window-bar">
        <span className="window-dots"><i /><i /><i /></span>
        <span>{windowTitle}</span>
        <span>×</span>
      </div>
      <div className="mock-sidebar">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="mock-main">
        <div className="mock-top"><span /><span /></div>
        <div className="mock-stats"><i /><i /><i /></div>
        <div className="mock-chart">
          <b /><b /><b /><b /><b /><b />
        </div>
        <div className="mock-rows"><i /><i /><i /></div>
      </div>
      <span className="visual-note">Conceptual interface · not a production screenshot</span>
      <span className="visual-sticker">{sticker}</span>
    </div>
  );
}

function Project({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project reveal">
      <div className="project-heading">
        <span className="project-number">{project.number}</span>
        <div>
          <p className="eyebrow">{project.role}</p>
          <h3>{project.title}</h3>
        </div>
      </div>
      <ProjectVisual variant={project.variant} windowTitle={project.windowTitle} sticker={project.sticker} />
      <div className="project-details">
        <p className="project-lede">{project.description}</p>
        <div>
          <p>{project.story}</p>
          <ul className="tech-list">
            {project.tech.map((item) => <li key={item}>{item}</li>)}
          </ul>
          {project.demo ? (
            <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">
              View live demo <Arrow />
            </a>
          ) : (
            <p className="case-note">Case study available on request</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55%" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    ["work", "Selected Work"],
    ["experience", "Experience"],
    ["about", "About"],
    ["contact", "Contact"],
  ];

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Dina Fajardo, home">dina <span>fajardo</span></a>
          <button
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="nav-links">
            {navItems.map(([id, label]) => (
              <a
                className={active === id ? "active" : ""}
                href={`#${id}`}
                key={id}
                onClick={() => {
                  setMenuOpen(false);
                  if (id === "contact") openChatWidget();
                }}
              >
                {label}
              </a>
            ))}
            <a
              className="nav-cta"
              href="#contact"
              onClick={() => {
                setMenuOpen(false);
                openChatWidget();
              }}
            >
              Resume on request <Arrow />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="top">
          <span className="ambient ambient--one" />
          <span className="ambient ambient--two" />
          <div className="hero-copy">
            <p className="eyebrow hero-label"><span>●</span> Senior Full-Stack Software Engineer · 10+ years</p>
            <h1 aria-label="Dina Fajardo"><span>DI</span><span>NA</span></h1>
            <p className="scribble scribble--hero">complicated → useful</p>
          </div>
          <div className="terminal-window">
            <div className="terminal-bar">
              <span className="window-dots"><i /><i /><i /></span>
              <span>dina@portfolio ~</span>
              <span>⌁</span>
            </div>
            <div className="terminal-body">
              <p><b>&gt;</b> initializing developer.exe</p>
              <p><b>&gt;</b> building useful things</p>
              <p className="terminal-accent"><b>&gt;</b> status: always learning<span className="cursor">_</span></p>
            </div>
          </div>
          <div className="hero-aside">
            <span className="status-pill"><i /> Cebu City, PH · Open to remote</span>
            <h2>I build scalable, reliable systems that solve real business problems.</h2>
            <p>
              10+ years building SaaS and enterprise platforms for logistics, procurement, and recruitment
              businesses — turning business requirements into software people actually use.
            </p>
            <div className="hero-actions">
              <Button href="#work">Explore my work</Button>
              <Button href="#contact" tone="light" onClick={openChatWidget}>Get in touch</Button>
            </div>
          </div>
          <div className="hero-foot">
            <p>10+ years experience</p><span>20+ projects completed</span><span>10+ happy clients</span>
            <p className="scroll-note">Scroll to explore <span>↓</span></p>
          </div>
        </section>

        <section className="about section container" id="about">
          <div>
            <p className="section-index">01 / About</p>
            <p className="eyebrow">An engineer’s perspective</p>
          </div>
          <div className="about-windows reveal">
            <article className="glass-window about-window about-window--one">
              <div className="mini-bar"><span>about_dina.txt</span><span>×</span></div>
              <p className="about-statement">I build systems that quietly just work — for the people running the business.</p>
            </article>
            <article className="glass-window about-window about-window--two">
              <div className="mini-bar"><span>engineering_philosophy.md</span><span>×</span></div>
              <p>10+ years building SaaS and enterprise platforms across logistics, procurement, and recruitment. I specialize in Node.js and Laravel backends, RESTful API design, and end-to-end feature delivery. Available for full-time, contract, and senior engineer roles.</p>
            </article>
            <article className="glass-window about-window about-window--three">
              <div className="mini-bar"><span>current_stack.json</span><span>×</span></div>
              <code>{"{ backend: [Node.js, Laravel], data: PostgreSQL, frontend: [React, Vue.js] }"}</code>
            </article>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="container section-title">
            <p className="section-index">02 / Selected work</p>
            <h2>Selected work from<br /><em>the real world.</em></h2>
          </div>
          <div className="container project-list">
            {projects.map((project) => <Project project={project} key={project.number} />)}
          </div>
        </section>

        <section className="experience section container" id="experience">
          <div className="section-title">
            <p className="section-index">03 / Experience</p>
            <h2>A decade of building,<br /><em>improving, and learning.</em></h2>
          </div>
          <div className="timeline">
            <article className="timeline-item reveal">
              <div><span className="timeline-dot" /><p className="eyebrow">February 2021 — Present</p></div>
              <div><h3>Cody Web Development Inc.</h3><p className="role">Software Engineer</p></div>
              <ul>
                <li>Develops scalable backend services supporting thousands of daily transactions</li>
                <li>Designs secure REST APIs for enterprise applications</li>
                <li>Delivers end-to-end features across React, Vue.js, and AWS</li>
                <li>Collaborates with teammates and business stakeholders in Agile teams</li>
              </ul>
            </article>
            <article className="timeline-item reveal">
              <div><span className="timeline-dot" /><p className="eyebrow">2020 — 2022</p></div>
              <div><h3>Kredo IT Abroad Inc.</h3><p className="role">IT Teacher (Part-Time)</p></div>
              <ul>
                <li>Delivered international curriculum IT classes</li>
                <li>Prepared teaching materials and lesson plans</li>
                <li>Mentored students transitioning into tech careers</li>
              </ul>
            </article>
            <article className="timeline-item reveal">
              <div><span className="timeline-dot" /><p className="eyebrow">2016 — 2021</p></div>
              <div><h3>Daily Overland Freight Forwarders</h3><p className="role">Web Developer</p></div>
              <ul>
                <li>Built internal management systems, cutting manual processing time by 40%</li>
                <li>Improved database performance by 33%</li>
                <li>Led development across four business modules</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="container skills-grid">
            <div className="section-title">
              <p className="section-index">04 / Technical skills</p>
            <h2>A practical stack,<br /><em>always evolving.</em></h2>
            </div>
            <div className="skill-groups">
              {skillGroups.map(([label, items]) => (
                <div className="skill-group reveal" key={label}>
                  <p className="eyebrow">{label}</p><p>{items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <footer className="site-footer container">
        <a className="wordmark" href="#top">dina <span>fajardo</span></a>
        <p>Senior Full-Stack Software Engineer</p>
        <a href="#top">Back to top ↑</a>
      </footer>
      <ChatWidget />
    </div>
  );
}
