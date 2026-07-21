import Link from "next/link";
import { contributions, experience, languages, profile, projects, skills } from "./data";

const projectImages = [
  "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fkidsgarden.uz?w=1600",
  "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fplantcare-ai-mit.streamlit.app?w=1600",
  "https://s.wordpress.com/mshots/v1/https%3A%2F%2Froyalfood.kr?w=1600",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main className="site-main">
      <header className="topbar page-shell">
        <a className="wordmark" href="#top" aria-label="Back to top">
          <span>SM</span>
          <b>{profile.name}</b>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <Link href="/developer">Developer mode</Link>
        </nav>
        <a className="top-contact" href={`mailto:${profile.email}`}>Contact <Arrow /></a>
      </header>

      <section className="hero page-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Full-Stack Engineering · Product Ownership · Applied AI</p>
          <h1>
            <span>SHOKHJAKHON</span>
            <span>MUKHAMMADIEV</span>
          </h1>
          <div className="hero-bottom">
            <p>{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore work <Arrow /></a>
              <Link className="button button-light" href="/resume">View résumé</Link>
            </div>
          </div>
          <div className="hero-meta">
            <span>{profile.location}</span>
            <span>{profile.visa}</span>
            <span>Open to Full-Stack Roles</span>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <img className="hero-photo" src="/assets/hero.webp" alt="Shokhjakhon Mukhammadiev working at a laptop" />
          <div className="photo-caption">
            <span>Based in South Korea</span>
            <span>Available for remote & international roles</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>PRODUCT ENGINEERING — FRONTEND — BACKEND — REALTIME — APPLIED AI — DEPLOYMENT —</div>
        <div>PRODUCT ENGINEERING — FRONTEND — BACKEND — REALTIME — APPLIED AI — DEPLOYMENT —</div>
      </div>

      <section className="intro page-shell" id="about">
        <p className="section-label">01 / About</p>
        <div className="intro-grid">
          <h2>I take products from initial concept to a working, deployable system.</h2>
          <div className="intro-copy">
            <p>
              I work across the complete delivery surface: understanding the problem, planning the architecture,
              developing the user experience, connecting backend services and preparing the application for production.
            </p>
            <p>
              I am particularly interested in role-based platforms, realtime systems and practical AI features that solve
              real product and business needs.
            </p>
            <div className="principles">
              <span>Ownership</span><span>Clear communication</span><span>Thoughtful engineering</span><span>Maintainable delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="page-shell section-head">
          <p className="section-label">02 / Selected work</p>
          <h2>Products built with technical depth and end-to-end ownership.</h2>
        </div>

        <div className="projects page-shell">
          {projects.map((project, index) => (
            <article className={`project project-${index + 1}`} key={project.id}>
              <div className="project-topline">
                <span>{project.no}</span>
                <span>{project.subtitle}</span>
                <a href={project.href} target="_blank" rel="noreferrer">Live project <Arrow /></a>
              </div>
              <div className="project-visual">
                <img src={projectImages[index]} alt={`${project.title} project interface`} />
              </div>
              <div className="project-body">
                <div>
                  <p className="project-kicker">Case study</p>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-copy">
                  <p>{project.description}</p>
                  <p className="muted-copy">{project.contribution}</p>
                  <div className="stack-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              </div>
              <div className="metrics">
                {project.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial page-shell">
        <div className="section-head compact-head">
          <p className="section-label">03 / Commercial contributions</p>
          <h2>Selected work delivered within company projects.</h2>
        </div>
        <div className="commercial-grid">
          {contributions.map((item, index) => (
            <article key={item.title}>
              <div className={`commercial-image commercial-art-${index + 1}`}><span>0{index + 4}</span><strong>{item.title}</strong><small>{item.role}</small></div>
              <span>{item.role}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.href} target="_blank" rel="noreferrer">View live website <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="page-shell section-head compact-head">
          <p className="section-label">04 / Experience</p>
          <h2>Backend foundation. Frontend systems. Full-stack ownership.</h2>
        </div>
        <div className="experience-list page-shell">
          {experience.map((item, index) => (
            <article key={item.company}>
              <span className="experience-index">0{index + 1}</span>
              <div className="experience-role"><span>{item.period}</span><h3>{item.role}</h3></div>
              <div className="experience-company"><h4>{item.company}</h4><span>{item.location}</span></div>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section page-shell">
        <div className="section-head compact-head">
          <p className="section-label">05 / Technical range</p>
          <h2>Technologies connected to real implementation work.</h2>
        </div>
        <div className="skill-groups">
          {Object.entries(skills).map(([group, items]) => (
            <article key={group}>
              <h3>{group}</h3>
              <div>{items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-strip">
        <div className="page-shell profile-strip-grid">
          <div><span>Education</span><strong>Chonnam National University</strong><p>Bachelor&apos;s degree · 2019–2025</p></div>
          <div><span>Languages</span>{languages.map(([language, level]) => <p key={language}><strong>{language}</strong><b>{level}</b></p>)}</div>
          <div><span>Current status</span><strong>{profile.visa}</strong><p>{profile.location}</p></div>
        </div>
      </section>

      <section className="developer-invite page-shell">
        <p className="section-label">06 / Alternative interface</p>
        <div>
          <h2>Need the technical version?</h2>
          <p>Open an interactive editor-style profile with project, experience and stack files.</p>
          <Link className="button button-dark" href="/developer">Launch Developer Mode <Arrow /></Link>
        </div>
      </section>

      <footer className="footer page-shell">
        <p>LET&apos;S BUILD THE NEXT PRODUCT.</p>
        <a href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>
        <div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><Link href="/resume">Résumé</Link><a href="#top">Back to top ↑</a></div>
        <span>© 2026 {profile.name.toUpperCase()}</span>
      </footer>
    </main>
  );
}
