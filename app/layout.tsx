import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shokhjakhon Mukhammadiev — Full-Stack Software Engineer",
  description: "Full-Stack Software Engineer in South Korea building scalable web platforms, realtime systems and AI-enabled products.",
  keywords: ["Full-Stack Software Engineer", "Next.js", "NestJS", "Applied AI", "South Korea", "React", "GraphQL"],
  openGraph: {
    title: "Shokhjakhon Mukhammadiev — Full-Stack Software Engineer",
    description: "Product engineering, realtime systems and applied AI — from interface to infrastructure.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
