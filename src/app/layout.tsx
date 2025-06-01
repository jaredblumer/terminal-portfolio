import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Jared Blumer - Full Stack Software Engineer",
  description: "Terminal-style portfolio of full-stack software engineer Jared Blumer, showcasing projects built with React, TypeScript, JavaScript, Node.js, Python, and Ruby on Rails."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1 className="sr-only">Terminal Portfolio by Jared Blumer</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
