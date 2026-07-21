import Link from "next/link";

export type VariantName = "cinematic" | "minimal" | "studio" | "spatial" | "brutalist";

const projects = [
  {
    no: "01",
    name: "KidsGarden",
    label: "Early learning ecosystem",
    text: "A production-oriented platform connecting parents, teachers, kindergarten administrators and platform operators across discovery, applications, attendance, messaging and realtime operations.",
    stack: "NEXT.JS · NESTJS · GRAPHQL · MONGODB · REDIS · DOCKER",
    href: "https://kidsgarden.uz",
  },
  {
    no: "02",
    name: "Royal Food",
    label: "Commerce experience",
    text: "A responsive ordering product with API-driven product workflows, customer-facing interfaces and end-to-end full-stack ownership.",
    stack: "REACT · NODE.JS · REST API · MONGODB",
    href: "https://github.com/mukhammadiev01-1/royalfood-react",
  },
  {
    no: "03",
    name: "PlantCare AI",
    label: "Applied computer vision",
    text: "An AI product exploring image analysis, practical automation and intelligent guidance through a modern interface.",
    stack: "PYTHON · OPENCV · AI · TYPESCRIPT",
    href: "https://github.com/mukhammadiev01-1/plantcare-ai",
  },
];

const variants: { slug: VariantName; label: string }[] = [
  { slug: "cinematic", label: "Cinematic" },
  { slug: "minimal", label: "Minimal" },
  { slug: "studio", label: "Studio" },
  { slug: "spatial", label: "Spatial" },
  { slug: "brutalist", label: "Brutalist" },
];

function Switcher({ current }: { current: VariantName }) {
  return (
    <div className="variant-switcher" aria-label="Portfolio style switcher">
      <Link href="/" className="switch-home">All styles</Link>
      {variants.map((item) => (
        <Link key={item.slug} href={`/${item.slug}`} className={current === item.slug ? "active" : ""}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function ProjectVisual({ index, compact = false }: { index: number; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${index + 1} ${compact ? "compact" : ""}`} aria-hidden="true">
      <div className="visual-browser">
        <div className="browser-bar"><i /><i /><i /><span>product.system/{projects[index].name.toLowerCase()}</span></div>
        <div className="browser-content">
          <div className="visual-sidebar"><b /><b /><b /><b /></div>
          <div className="visual-canvas">
            <div className="visual-title" />
            <div className="visual-grid"><span /><span /><span /></div>
            <div className="visual-lines"><i /><i /><i /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommonFooter() {
  return (
    <footer className="common-footer">
      <p>Available for international remote opportunities</p>
      <a href="mailto:shmukhammadiev01@gmail.com">shmukhammadiev01@gmail.com ↗</a>
      <span>Gwangju, South Korea · 2026</span>
    </footer>
  );
}

function Cinematic() {
  return (
    <main className="portfolio cinematic">
      <Switcher current="cinematic" />
      <header className="cine-nav"><span>SM / PORTFOLIO</span><span>FULL-STACK SOFTWARE ENGINEER</span><a href="mailto:shmukhammadiev01@gmail.com">CONTACT ↗</a></header>
      <section className="cine-hero">
        <div className="cine-film"><div className="film-glow" /><div className="film-caption">FRAME 001 — GWANGJU, SOUTH KOREA</div></div>
        <p className="cine-kicker">Product engineering · Architecture · Infrastructure</p>
        <h1><span>SHOKHJAKHON</span><span>MUKHAMMADIEV</span></h1>
        <div className="cine-intro"><strong>I design and build digital products from interface to infrastructure.</strong><p>Full-stack engineer working across React, Next.js, NestJS, GraphQL, realtime systems and production deployment.</p></div>
      </section>
      <section className="cine-manifesto"><p>Not a collection of screens.</p><h2>A record of decisions, systems and products built end to end.</h2></section>
      <section className="cine-projects">
        {projects.map((project, index) => (
          <article className="cine-project" key={project.name}>
            <div className="cine-project-meta"><span>{project.no}</span><span>{project.label}</span></div>
            <ProjectVisual index={index} />
            <div className="cine-project-copy"><h2>{project.name}</h2><p>{project.text}</p><small>{project.stack}</small><a href={project.href} target="_blank" rel="noreferrer">Explore project ↗</a></div>
          </article>
        ))}
      </section>
      <section className="cine-end"><p>ENGINEERING RANGE</p><h2>Interface. Domain logic. Realtime data. Deployment.</h2><div><span>React / Next.js</span><span>NestJS / Node.js</span><span>GraphQL / REST</span><span>MongoDB / Redis</span><span>Docker / Nginx</span></div></section>
      <CommonFooter />
    </main>
  );
}

function Minimal() {
  return (
    <main className="portfolio minimal">
      <Switcher current="minimal" />
      <header className="min-nav"><b>Shokhjakhon M.</b><nav><a href="#min-work">Work</a><a href="#min-profile">Profile</a><a href="mailto:shmukhammadiev01@gmail.com">Contact</a></nav></header>
      <section className="min-hero">
        <p>FULL-STACK SOFTWARE ENGINEER · SOUTH KOREA</p>
        <h1>Building useful products with clarity, depth and technical ownership.</h1>
        <div className="min-hero-bottom"><p>I turn product requirements into resilient interfaces, APIs, realtime workflows and deployable systems.</p><a href="#min-work">Selected work ↓</a></div>
      </section>
      <section className="min-work" id="min-work">
        <div className="min-section-title"><span>Selected work</span><span>2024—2026</span></div>
        <article className="min-feature"><div className="min-feature-copy"><span>01 / LIVE PLATFORM</span><h2>KidsGarden</h2><p>{projects[0].text}</p><a href={projects[0].href}>View live project ↗</a></div><ProjectVisual index={0} /></article>
        <div className="min-grid">
          {projects.slice(1).map((project, index) => (
            <article key={project.name}><ProjectVisual index={index + 1} compact /><span>{project.no} / {project.label}</span><h3>{project.name}</h3><p>{project.text}</p><a href={project.href}>Open project ↗</a></article>
          ))}
        </div>
      </section>
      <section className="min-profile" id="min-profile">
        <div><span>Profile</span><h2>One engineer across the complete delivery surface.</h2></div>
        <div className="min-capabilities"><p><b>Frontend</b>React, Next.js, TypeScript, Apollo, responsive interfaces.</p><p><b>Backend</b>NestJS, Node.js, GraphQL, REST, authentication and domain logic.</p><p><b>Data & realtime</b>MongoDB, Redis, WebSocket and event-driven interactions.</p><p><b>Infrastructure</b>Docker, Nginx, Linux VPS, HTTPS and production diagnostics.</p></div>
      </section>
      <CommonFooter />
    </main>
  );
}

function Studio() {
  return (
    <main className="portfolio studio">
      <Switcher current="studio" />
      <header className="studio-nav"><div className="studio-logo">SM*</div><span>INDEPENDENT<br />SOFTWARE ENGINEER</span><span>GWANGJU / KR</span><a href="mailto:shmukhammadiev01@gmail.com">LET&apos;S TALK</a></header>
      <section className="studio-hero">
        <div className="studio-stamp">AVAILABLE<br />FOR REMOTE<br />WORK</div>
        <h1>BUILDING<br /><em>PRODUCTS</em><br />THAT WORK.</h1>
        <p>Strategy, interface, architecture and production delivery — handled as one connected engineering problem.</p>
        <div className="studio-ticker"><span>REACT — NEXT.JS — NESTJS — GRAPHQL — MONGODB — REDIS — DOCKER —</span><span>REACT — NEXT.JS — NESTJS — GRAPHQL — MONGODB — REDIS — DOCKER —</span></div>
      </section>
      <section className="studio-board">
        {projects.map((project, index) => (
          <article className={`studio-card studio-card-${index + 1}`} key={project.name}>
            <div className="studio-card-head"><span>{project.no}</span><span>{project.label}</span></div>
            <h2>{project.name}</h2>
            <ProjectVisual index={index} compact />
            <p>{project.text}</p><small>{project.stack}</small><a href={project.href}>VIEW CASE ↗</a>
          </article>
        ))}
      </section>
      <section className="studio-about"><div className="studio-big-type">FULL<br />STACK</div><div><span>WHAT I DO</span><h2>I connect product thinking with implementation.</h2><p>From interface systems and backend contracts to realtime communication and deployment, I work across the full product lifecycle.</p></div></section>
      <CommonFooter />
    </main>
  );
}

function Spatial() {
  return (
    <main className="portfolio spatial">
      <Switcher current="spatial" />
      <div className="space-stars" />
      <header className="space-nav"><span className="space-logo">S/M</span><span>PORTFOLIO SPACE / 01</span><a href="mailto:shmukhammadiev01@gmail.com">ESTABLISH CONTACT ↗</a></header>
      <section className="space-hero">
        <div className="space-orb"><i /><i /><i /><span>FULL-STACK<br />PRODUCT<br />ENGINEERING</span></div>
        <div className="space-copy"><p>35.1595° N · 126.8526° E</p><h1>Engineering products beyond the surface.</h1><span>Architecture, interaction and infrastructure designed as one system.</span></div>
        <div className="space-float float-a">NEXT.JS<small>INTERFACE LAYER</small></div><div className="space-float float-b">NESTJS<small>APPLICATION LAYER</small></div><div className="space-float float-c">REDIS<small>REALTIME LAYER</small></div>
      </section>
      <section className="space-deck">
        <div className="space-deck-title"><span>SELECTED SYSTEMS</span><h2>Three products.<br />Different problems.<br />One engineering range.</h2></div>
        {projects.map((project, index) => (
          <article className="space-project" key={project.name}>
            <div className="space-project-glow" /><div className="space-index">{project.no}</div><ProjectVisual index={index} compact /><div className="space-project-copy"><span>{project.label}</span><h3>{project.name}</h3><p>{project.text}</p><small>{project.stack}</small><a href={project.href}>ENTER SYSTEM ↗</a></div>
          </article>
        ))}
      </section>
      <section className="space-architecture"><span>DELIVERY CONSTELLATION</span><div className="constellation"><b>PRODUCT</b><i /><b>INTERFACE</b><i /><b>API</b><i /><b>DATA</b><i /><b>OPS</b></div><h2>End-to-end ownership reduces distance between an idea and a reliable release.</h2></section>
      <CommonFooter />
    </main>
  );
}

function Brutalist() {
  return (
    <main className="portfolio brutalist">
      <Switcher current="brutalist" />
      <header className="brut-nav"><div>SHOKHJAKHON®</div><div>FULL-STACK<br />SOFTWARE ENGINEER</div><div>KR / REMOTE</div><a href="mailto:shmukhammadiev01@gmail.com">HIRE ME ↗</a></header>
      <section className="brut-hero"><div className="brut-label">PORTFOLIO 2026</div><h1>I BUILD<br />THE WHOLE<br /><span>THING.</span></h1><div className="brut-note">NO HANDOFF GAPS.<br />NO DECORATIVE ENGINEERING.<br />PRODUCT → PRODUCTION.</div></section>
      <div className="brut-marquee"><span>REACT ★ NEXT.JS ★ NESTJS ★ NODE.JS ★ GRAPHQL ★ MONGODB ★ REDIS ★ DOCKER ★</span></div>
      <section className="brut-projects">
        <div className="brut-section-head"><h2>SELECTED<br />WORK</h2><p>THREE PRODUCTS / THREE PROBLEM SPACES</p></div>
        {projects.map((project, index) => (
          <article className="brut-project" key={project.name}>
            <div className="brut-number">{project.no}</div><div className="brut-project-main"><span>{project.label}</span><h3>{project.name}</h3><p>{project.text}</p><b>{project.stack}</b></div><div className="brut-visual"><ProjectVisual index={index} compact /></div><a href={project.href}>OPEN ↗</a>
          </article>
        ))}
      </section>
      <section className="brut-services"><div><h2>WHAT<br />I HANDLE</h2></div><ul><li>01 — PRODUCT INTERFACES</li><li>02 — BACKEND SYSTEMS</li><li>03 — REALTIME DATA</li><li>04 — DEPLOYMENT & OPS</li></ul></section>
      <CommonFooter />
    </main>
  );
}

export default function PortfolioVariant({ variant }: { variant: VariantName }) {
  if (variant === "cinematic") return <Cinematic />;
  if (variant === "minimal") return <Minimal />;
  if (variant === "studio") return <Studio />;
  if (variant === "spatial") return <Spatial />;
  return <Brutalist />;
}
