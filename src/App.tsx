import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "ERP Universe",
    role: "Software Engineer",
    description:
      "An enterprise platform spanning procurement, inventory, work orders, fleet operations, and goods receipts.",
    story:
      "Complex operational workflows needed a reliable, maintainable foundation. Dina contributed backend development across four major modules—including procurement—shaping APIs, relational models, and business workflows built to evolve.",
    tech: ["TypeScript", "NestJS", "TypeORM", "PostgreSQL", "React", "DevExtreme", "Docker", "AWS"],
    variant: "erp",
  },
  {
    number: "02",
    title: "Billing System Modernization",
    role: "Full Stack Developer",
    description:
      "A ground-up rebuild of a legacy VB.NET billing system as a modern Laravel application.",
    story:
      "A report process that once took about a day was reduced to minutes. The solution combined redesigned database structures, clearer API endpoints, optimized queries, stronger table relationships, and appropriate indexes.",
    tech: ["PHP", "Laravel", "Relational Databases", "REST APIs"],
    variant: "billing",
  },
  {
    number: "03",
    title: "Business Applications",
    role: "Full Stack Developer",
    description:
      "Business applications supporting administrative, employee, payroll, and accounting workflows.",
    story:
      "Data-heavy operational processes require clarity and consistency. Dina delivered practical Laravel applications that connected business rules, relational data, and everyday administrative workflows.",
    tech: ["PHP", "Laravel", "Relational Databases"],
    variant: "hr",
  },
];

const skillGroups = [
  ["Backend", "TypeScript · NestJS · PHP · Laravel · REST API Development"],
  ["Database", "PostgreSQL · TypeORM · Relational Database Design · Query Optimization · Indexing"],
  ["Frontend", "React · DevExtreme · JavaScript · HTML · CSS"],
  ["Tools & Practices", "Git · Docker · AWS · Code Reviews · Debugging · Performance Optimization · AI-assisted Development"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Button({
  children,
  href,
  tone = "dark",
}: {
  children: React.ReactNode;
  href: string;
  tone?: "dark" | "light";
}) {
  return (
    <a className={`button button--${tone}`} href={href}>
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

function ProjectVisual({ variant }: { variant: string }) {
  return (
    <div className={`project-visual project-visual--${variant}`} aria-label="Anonymized interface mockup">
      <div className="window-bar">
        <span className="window-dots"><i /><i /><i /></span>
        <span>{variant === "erp" ? "operations.dashboard" : variant === "billing" ? "reports.generate" : "people.workspace"}</span>
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
      <span className="visual-sticker">{variant === "billing" ? "1 day → minutes" : variant === "erp" ? "4 core modules" : "built for real work"}</span>
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
      <ProjectVisual variant={project.variant} />
      <div className="project-details">
        <p className="project-lede">{project.description}</p>
        <div>
          <p>{project.story}</p>
          <ul className="tech-list">
            {project.tech.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="case-note">Case study available on request</p>
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
          <a className="wordmark" href="#top" aria-label="Dina Fajardo, home">DINA<span>.EXE</span></a>
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
              <a className={active === id ? "active" : ""} href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Resume on request <Arrow /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="top">
          <span className="ambient ambient--one" />
          <span className="ambient ambient--two" />
          <div className="hero-copy">
            <p className="eyebrow hero-label"><span>●</span> Software Engineer · 10 years</p>
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
            <span className="status-pill"><i /> Availability: ask Dina</span>
            <h2>I make complicated things work.</h2>
            <p>
              Building reliable systems, untangling database problems, and turning business requirements into
              software people can actually use.
            </p>
            <div className="hero-actions">
              <Button href="#work">Explore my work</Button>
              <Button href="#contact" tone="light">Request resume</Button>
            </div>
          </div>
          <div className="hero-foot">
            <p>10 years in practice</p><span>Backend systems</span><span>API design</span><span>Full-stack delivery</span>
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
              <p className="about-statement">Software engineer. Problem solver. Forever curious about how things work under the hood.</p>
            </article>
            <article className="glass-window about-window about-window--two">
              <div className="mini-bar"><span>engineering_philosophy.md</span><span>×</span></div>
              <p>For 10 years, I’ve worked across business applications, backend systems, databases, and full-stack development. I enjoy solving complex problems and building maintainable software.</p>
            </article>
            <article className="glass-window about-window about-window--three">
              <div className="mini-bar"><span>current_stack.json</span><span>×</span></div>
              <code>{"{ backend: [NestJS, Laravel], data: PostgreSQL, frontend: React }"}</code>
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
              <div><h3>Cody Web Development</h3><p className="role">Software Engineer</p></div>
              <ul>
                <li>Backend development for enterprise ERP modules</li>
                <li>API development, relational modeling, query tuning</li>
                <li>Full-stack contributions with React and DevExtreme</li>
                <li>Code reviews, coding standards, and junior developer mentoring</li>
                <li>Collaboration with teammates and business stakeholders</li>
              </ul>
            </article>
            <article className="timeline-item reveal">
              <div><span className="timeline-dot" /><p className="eyebrow">Approximately 2 years</p></div>
              <div><h3>Previous Company</h3><p className="role">Full Stack Developer</p></div>
              <ul>
                <li>Modernization of a legacy billing system</li>
                <li>Laravel-based business application development</li>
                <li>Database redesign, API implementation, reporting improvements</li>
                <li>HR, payroll, accounting, and administrative workflows</li>
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

        <section className="contact section" id="contact">
          <div className="container">
            <p className="section-index">05 / Contact</p>
            <div className="contact-main">
              <h2>Got a good problem<br /><em>for me?</em></h2>
              <div>
                <p>Let’s build something useful.</p>
                <p className="contact-note">Contact details, professional profiles, and résumé available on request.</p>
                <a className="text-link" href="#top">Return to DINA.EXE <Arrow /></a>
              </div>
            </div>
            <footer>
          <a className="wordmark" href="#top">DINA<span>.EXE</span></a>
              <p>Software Engineer · Backend & Full Stack</p>
              <a href="#top">Back to top ↑</a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
