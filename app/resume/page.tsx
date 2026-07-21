import Link from "next/link";
import { experience, languages, profile, projects, skills } from "../data";

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar"><Link href="/">← Portfolio</Link><span>Use your browser&apos;s Print command to save as PDF.</span></div>
      <article className="resume-sheet">
        <header>
          <div><h1>{profile.name}</h1><p>{profile.title}</p></div>
          <div><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.github}>{profile.github.replace("https://", "")}</a><span>{profile.location}</span><span>{profile.visa}</span></div>
        </header>
        <section><h2>Professional Summary</h2><p>{profile.summary} Experienced in frontend architecture, backend APIs, authentication and authorization, database design, deployment, production debugging and practical LLM-powered features.</p></section>
        <section><h2>Experience</h2>{experience.map((item) => <article className="resume-entry" key={item.company}><div><b>{item.role}</b><span>{item.company} · {item.location}</span></div><time>{item.period}</time><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</section>
        <section><h2>Independent Projects</h2>{projects.map((project) => <article className="resume-entry compact" key={project.id}><div><b>{project.title} — {project.subtitle}</b><span>{project.stack.join(" · ")}</span></div><p>{project.contribution}</p></article>)}</section>
        <section><h2>Technical Skills</h2><div className="resume-skills">{Object.entries(skills).map(([group, items]) => <div key={group}><b>{group}</b><p>{items.join(" · ")}</p></div>)}</div></section>
        <section className="resume-bottom"><div><h2>Education</h2><b>Chonnam National University</b><p>Bachelor&apos;s degree · 2019–2025</p></div><div><h2>Languages</h2>{languages.map(([language, level]) => <p key={language}>{language} — {level}</p>)}</div></section>
      </article>
    </main>
  );
}
