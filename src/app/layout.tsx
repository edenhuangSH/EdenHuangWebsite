import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
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
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 antialiased">
        <Sidebar />
        <main className="lg:pl-56">
          <div className="max-w-2xl mx-auto px-6 sm:px-10 lg:px-14 pt-24 lg:pt-16 pb-20">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
