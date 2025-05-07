import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
