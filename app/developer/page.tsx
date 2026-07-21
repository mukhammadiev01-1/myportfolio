"use client";

import Link from "next/link";
import { useState } from "react";
import { experience, profile, projects, skills } from "../data";

type FileKey = "about.ts" | "projects.ts" | "experience.ts" | "stack.json" | "contact.ts";

const files: FileKey[] = ["about.ts", "projects.ts", "experience.ts", "stack.json", "contact.ts"];

function renderContent(file: FileKey) {
  if (file === "about.ts") {
    return [
      "export const engineer = {",
      `  name: \"${profile.name}\",`,
      `  alias: \"${profile.alias}\",`,
      `  role: \"${profile.title}\",`,
      `  location: \"${profile.location}\",`,
      "  focus: [",
      '    "Full-Stack Product Engineering",',
      '    "Realtime Systems",',
      '    "Applied AI",',
      "  ],",
      "  approach: \"Own the path from idea to production.\",",
      "};",
    ];
  }
  if (file === "projects.ts") {
    return ["export const selectedProjects = [", ...projects.flatMap((project) => [
      "  {",
      `    name: \"${project.title}\",`,
      `    type: \"${project.subtitle}\",`,
      `    stack: [${project.stack.map((item) => `\"${item}\"`).join(", ")}],`,
      `    url: \"${project.href}\",`,
      "  },",
    ]), "];" ];
  }
  if (file === "experience.ts") {
    return ["export const experience = [", ...experience.flatMap((item) => [
      "  {",
      `    company: \"${item.company}\",`,
      `    role: \"${item.role}\",`,
      `    period: \"${item.period}\",`,
      "  },",
    ]), "];" ];
  }
  if (file === "stack.json") {
    return JSON.stringify(skills, null, 2).split("\n");
  }
  return [
    "export const contact = {",
    `  email: \"${profile.email}\",`,
    `  github: \"${profile.github}\",`,
    `  location: \"${profile.location}\",`,
    `  visa: \"${profile.visa}\",`,
    "  available: true,",
    "};",
  ];
}

export default function DeveloperPage() {
  const [activeFile, setActiveFile] = useState<FileKey>("about.ts");
  const content = renderContent(activeFile);

  return (
    <main className="dev-page">
      <header className="dev-titlebar">
        <div className="window-controls"><i /><i /><i /></div>
        <span>portfolio — Visual Studio Code</span>
        <Link href="/">Exit developer mode</Link>
      </header>
      <div className="dev-workspace">
        <aside className="dev-activity" aria-label="Editor activity bar"><b>▱</b><b>⌕</b><b>⑂</b><b>◇</b></aside>
        <aside className="dev-explorer">
          <div className="dev-panel-title">EXPLORER</div>
          <strong>SHOKHJAKHON-PORTFOLIO</strong>
          <div className="file-tree">
            {files.map((file) => <button className={activeFile === file ? "active" : ""} key={file} onClick={() => setActiveFile(file)}><span>{file.endsWith("json") ? "{}" : "TS"}</span>{file}</button>)}
          </div>
          <div className="dev-outline"><span>OUTLINE</span><span>TIMELINE</span></div>
        </aside>
        <section className="dev-editor">
          <div className="dev-tabs">
            {files.filter((file) => file === activeFile || file === "about.ts").map((file) => <button className={activeFile === file ? "active" : ""} key={file} onClick={() => setActiveFile(file)}>{file.endsWith("json") ? "{}" : "TS"} {file}<span>×</span></button>)}
          </div>
          <div className="dev-breadcrumb">portfolio / app / data / <b>{activeFile}</b></div>
          <pre className="code-editor">{content.map((line, index) => <div key={`${line}-${index}`}><span className="line-no">{index + 1}</span><code>{line}</code></div>)}</pre>
          <div className="dev-terminal">
            <div className="terminal-tabs"><b>TERMINAL</b><span>OUTPUT</span><span>PROBLEMS 0</span></div>
            <p><span>umar@portfolio</span>:~$ npm run profile</p>
            <p>✓ Full-stack engineering profile loaded</p>
            <p>✓ 3 core projects · 3 professional roles · 4 languages</p>
            <p>✓ Available for international opportunities</p>
          </div>
        </section>
      </div>
      <footer className="dev-statusbar"><span>⑂ main*</span><span>0 errors · 0 warnings</span><span>TypeScript React UTF-8</span></footer>
    </main>
  );
}
