import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eden Huang",
  description:
    "Personal website of Eden Huang — Tech, Insights, Stories, and more.",
  openGraph: {
    title: "Eden Huang",
    description:
      "Personal website of Eden Huang — Tech, Insights, Stories, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-stone-50 text-stone-900 antialiased">{children}</body>
    </html>
  );
}
