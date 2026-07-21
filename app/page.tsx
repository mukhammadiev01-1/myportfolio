import Link from "next/link";

const styles = [
  {
    slug: "cinematic",
    number: "01",
    title: "Cinematic Editorial",
    note: "Large typography, dramatic pacing and project storytelling.",
    className: "lab-cinematic",
  },
  {
    slug: "minimal",
    number: "02",
    title: "Apple × Vercel Minimal",
    note: "Clean, restrained and highly recruiter-friendly.",
    className: "lab-minimal",
  },
  {
    slug: "studio",
    number: "03",
    title: "Digital Creative Studio",
    note: "Bold art direction with an independent engineering studio identity.",
    className: "lab-studio",
  },
  {
    slug: "spatial",
    number: "04",
    title: "Futuristic Spatial",
    note: "Depth, floating systems and a modern digital-space experience.",
    className: "lab-spatial",
  },
  {
    slug: "brutalist",
    number: "05",
    title: "Neo-Brutalist",
    note: "Raw contrast, oversized type and an unmistakable visual voice.",
    className: "lab-brutalist",
  },
];

export default function Home() {
  return (
    <main className="style-lab">
      <header className="lab-header">
        <div className="lab-mark">SM</div>
        <p>PORTFOLIO STYLE LAB / 2026</p>
        <a href="mailto:shmukhammadiev01@gmail.com">CONTACT ↗</a>
      </header>

      <section className="lab-hero">
        <div>
          <span>FIVE COMPLETE DIRECTIONS</span>
          <h1>One engineer.<br />Five visual identities.</h1>
        </div>
        <p>
          Open every concept as a complete portfolio. Compare the composition,
          typography, project presentation and overall professional positioning.
        </p>
      </section>

      <section className="lab-grid">
        {styles.map((style) => (
          <Link href={`/${style.slug}`} className={`lab-card ${style.className}`} key={style.slug}>
            <div className="lab-card-top"><span>{style.number}</span><span>OPEN CONCEPT ↗</span></div>
            <div className="lab-preview" aria-hidden="true"><i /><i /><i /><b /></div>
            <div className="lab-card-copy"><h2>{style.title}</h2><p>{style.note}</p></div>
          </Link>
        ))}
      </section>

      <footer className="lab-footer">
        <p>All versions use the same real profile and projects.</p>
        <span>Choose after comparing them on desktop and mobile.</span>
      </footer>
    </main>
  );
}
