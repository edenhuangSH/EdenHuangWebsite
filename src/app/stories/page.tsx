import type { Metadata } from "next";
import StoriesSection from "@/components/StoriesSection";

export const metadata: Metadata = {
  title: "Stories — Eden Huang",
};

export default function StoriesPage() {
  return <StoriesSection />;
}
