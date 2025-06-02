import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Jared Blumer - Full Stack Software Engineer",
  description: "Terminal-style portfolio of full stack software engineer Jared Blumer, showcasing projects built with React, TypeScript, JavaScript, Node.js, Python, and Ruby on Rails.",
  keywords: [
    "Jared Blumer",
    "Full Stack Software Engineer",
    "Portfolio",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Ruby on Rails"
  ],
  creator: "Jared Blumer",
  openGraph: {
    title: "Jared Blumer - Full Stack Software Engineer",
    description: "Terminal-style portfolio of full stack software engineer Jared Blumer, showcasing projects built with React, TypeScript, JavaScript, Node.js, Python, and Ruby on Rails.",
    url: "https://jaredblumer.com",
    images: [
      {
        url: "https://jaredblumer.com/images/opengraph-image.png",
        width: 2400,
        height: 1260,
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
