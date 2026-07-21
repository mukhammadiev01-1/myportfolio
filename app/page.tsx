"use client";

import { FormEvent, useMemo, useState } from "react";

const projects = [
  {
    index: "01",
    name: "KidsGarden",
    type: "Early Learning Platform",
    description:
      "A role-based education ecosystem connecting parents, teachers, kindergarten administrators and platform operators through one production-oriented system.",
    metrics: ["4 user roles", "Realtime messaging", "AI translation", "Docker deployment"],
    stack: ["Next.js", "NestJS", "GraphQL", "MongoDB", "Redis", "WebSocket"],
    href: "https://kidsgarden.uz",
    status: "LIVE SYSTEM",
  },
  {
    index: "02",
    name: "Royal Food",
    type: "Commerce Experience",
    description:
      "A full-stack ordering product focused on product discovery, API-driven workflows and a clean consumer experience across devices.",
    metrics: ["REST architecture", "Responsive UI", "Product workflows", "Full-stack ownership"],
    stack: ["React", "Node.js", "REST API", "MongoDB"],
    href: "https://github.com/mukhammadiev01-1/royalfood-react",
    status: "CASE STUDY",
  },
  {
    index: "03",
    name: "PlantCare AI",
    type: "Computer Vision System",
    description:
      "An applied AI product exploring visual plant analysis, practical automation and intelligent user guidance through a modern web interface.",
    metrics: ["AI workflow", "Computer vision", "Product interface", "Applied research"],
    stack: ["Python", "OpenCV", "AI", "TypeScript"],
    href: "https://github.com/mukhammadiev01-1/plantcare-ai",
    status: "AI LAB",
  },
];

const capabilities = [
  ["Frontend Systems", "React, Next.js, TypeScript, Apollo, responsive product interfaces"],
  ["Backend Engineering", "NestJS, Node.js, GraphQL, REST APIs, authentication and business logic"],
  ["Realtime & Data", "MongoDB, Redis, WebSocket, Socket.IO, event-driven interactions"],
  ["Infrastructure", "Docker, Nginx, Ubuntu VPS, HTTPS, deployment and production diagnostics"],
];

const terminalResponses: Record<string, string[]> = {
  help: ["Available commands: about, projects, stack, contact, clear"],
  about: ["Shokhjakhon Mukhammadiev", "Full-Stack Software Engineer based in South Korea.", "I build complete product systems from interface to infrastructure."],
  projects: ["01 KidsGarden — live education platform", "02 Royal Food — commerce application", "03 PlantCare AI — computer vision project"],
  stack: ["Frontend: Next.js / React / TypeScript", "Backend: NestJS / Node.js / GraphQL", "Data: MongoDB / Redis", "Ops: Docker / Nginx / Linux"],
  contact: ["Email: shmukhammadiev01@gmail.com", "GitHub: github.com/mukhammadiev01-1"],
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([
    "portfolio.system initialized",
    "type 'help' to inspect available commands",
  ]);

  const year = useMemo(() => new Date().getFullYear(), []);

  function submitCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = command.trim().toLowerCase();
    if (!normalized) return;

    if (normalized === "clear") {
      setHistory([]);
    } else {
      const response = terminalResponses[normalized] ?? [
        `command not found: ${normalized}`,
        "type 'help' for available commands",
      ];
      setHistory((current) => [...current, `visitor@portfolio:~$ ${normalized}`, ...response]);
    }
    setCommand("");
  }

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">SM</span>
          <span>ENGINEERING / 26</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#systems">Systems</a>
          <a href="#about">About</a>
        </nav>
        <a className="availability" href="mailto:shmukhammadiev01@gmail.com">
          <span /> Available for remote work
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span>SEOUL / GWANGJU TIMEZONE</span><span>FULL-STACK SOFTWARE ENGINEER</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="signal">BUILDING SYSTEMS THAT MOVE FROM IDEA TO PRODUCTION.</p>
            <h1>
              I engineer
              <span>digital products</span>
              end to end.
            </h1>
            <p className="hero-intro">
              I&apos;m Shokhjakhon Mukhammadiev — a full-stack engineer focused on scalable architecture,
              precise interfaces and production-ready execution.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">Explore selected work <Arrow /></a>
              <a className="text-action" href="https://github.com/mukhammadiev01-1" target="_blank" rel="noreferrer">Open GitHub <Arrow /></a>
            </div>
          </div>

          <aside className="system-orbit" aria-label="Engineering system overview">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="orbit-core">
              <span>CORE</span>
              <strong>FULL<br />STACK</strong>
              <small>SYSTEM ONLINE</small>
            </div>
            <span className="orbit-node node-one">NEXT.JS</span>
            <span className="orbit-node node-two">NESTJS</span>
            <span className="orbit-node node-three">MONGODB</span>
            <span className="orbit-node node-four">DOCKER</span>
          </aside>
        </div>

        <div className="hero-footer">
          <span>Scroll to inspect systems</span>
          <div className="data-line"><i /> 35.1595° N / 126.8526° E</div>
          <span>Remote / International</span>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div><span className="section-index">/01</span><p>Selected systems</p></div>
          <h2>Products built with technical ownership, product thinking and operational depth.</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline">
                <span>{project.index}</span>
                <span className="project-status"><i /> {project.status}</span>
              </div>
              <div className="project-content">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-system-map" aria-hidden="true">
                <div className="map-node">CLIENT</div><span>→</span><div className="map-node">API</div><span>→</span><div className="map-node">DATA</div><span>→</span><div className="map-node">OPS</div>
              </div>
              <div className="metric-grid">
                {project.metrics.map((metric) => <span key={metric}>{metric}</span>)}
              </div>
              <div className="project-bottom">
                <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>View system <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="systems">
        <div className="section-heading compact">
          <div><span className="section-index">/02</span><p>Engineering capability</p></div>
          <h2>One engineer across the complete delivery surface.</h2>
        </div>

        <div className="capability-layout">
          <div className="capability-list">
            {capabilities.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className="architecture-panel">
            <div className="panel-header"><span>PRODUCTION ARCHITECTURE</span><span className="project-status"><i /> HEALTHY</span></div>
            <div className="architecture-grid">
              <div className="arch-box accent-box"><small>INTERFACE</small><strong>Next.js</strong><span>React / Apollo / i18n</span></div>
              <div className="connector vertical" />
              <div className="arch-box"><small>APPLICATION</small><strong>NestJS</strong><span>GraphQL / REST / Auth</span></div>
              <div className="arch-pair">
                <div className="arch-box"><small>REALTIME</small><strong>Redis</strong><span>Pub/Sub</span></div>
                <div className="arch-box"><small>DATA</small><strong>MongoDB</strong><span>Domain models</span></div>
              </div>
              <div className="connector vertical" />
              <div className="arch-box infrastructure"><small>INFRASTRUCTURE</small><strong>Docker · Nginx · Ubuntu</strong><span>HTTPS / reverse proxy / deployment</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell terminal-section" id="about">
        <div className="terminal-copy">
          <span className="section-index">/03</span>
          <h2>Human-readable for recruiters. Deep enough for engineers.</h2>
          <p>
            The portfolio is designed as a usable product rather than a visual experiment. Standard navigation stays clear,
            while the command interface gives technical visitors another way to inspect the profile.
          </p>
          <a className="primary-action" href="mailto:shmukhammadiev01@gmail.com">Start a conversation <Arrow /></a>
        </div>

        <div className="terminal-window">
          <div className="terminal-header"><div><i /><i /><i /></div><span>shokhjakhon@portfolio — zsh</span><span>⌘K</span></div>
          <div className="terminal-body">
            {history.map((line, index) => <p key={`${line}-${index}`} className={line.startsWith("visitor@") ? "terminal-command" : ""}>{line}</p>)}
            <form onSubmit={submitCommand}>
              <label htmlFor="terminal-input">visitor@portfolio:~$</label>
              <input id="terminal-input" value={command} onChange={(event) => setCommand(event.target.value)} autoComplete="off" spellCheck={false} aria-label="Terminal command" />
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <div>
          <p>READY TO BUILD THE NEXT SYSTEM?</p>
          <a href="mailto:shmukhammadiev01@gmail.com">shmukhammadiev01@gmail.com <Arrow /></a>
        </div>
        <div className="footer-links">
          <a href="https://github.com/mukhammadiev01-1" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p>© {year} SHOKHJAKHON MUKHAMMADIEV</p>
      </footer>
    </main>
  );
}
