import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About — Eden Huang",
};

export default function AboutPage() {
  return <AboutSection />;
}
