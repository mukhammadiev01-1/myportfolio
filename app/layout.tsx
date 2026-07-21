import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shokhjakhon Mukhammadiev — Full-Stack Software Engineer",
  description:
    "Full-stack software engineer building scalable product systems with Next.js, NestJS, GraphQL, MongoDB, Redis and cloud infrastructure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
