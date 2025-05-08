import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Terminal Portfolio by Jared Blumer",
  description: "A terminal portfolio built with Next.js, React, and TypeScript"
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
