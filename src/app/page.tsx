import Sidebar from "@/components/Sidebar";
import TechSection from "@/components/TechSection";
import InsightsSection from "@/components/InsightsSection";
import StoriesSection from "@/components/StoriesSection";
import AboutSection from "@/components/AboutSection";
import LinksSection from "@/components/LinksSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Sidebar / mobile header */}
      <Sidebar />

      {/* Main content — offset for sidebar on large screens */}
      <main className="lg:pl-56">
        <div className="max-w-2xl mx-auto px-6 sm:px-10 lg:px-14">
          {/* Hero — visible on first load */}
          <div className="pt-28 lg:pt-24 pb-4">
            <h1 className="text-2xl font-medium text-stone-900 tracking-tight mb-2">
              Eden Huang
            </h1>
            <p className="text-sm text-stone-500 leading-relaxed max-w-sm">
              Building tools, exploring ideas, and writing about what I find
              along the way.
            </p>
          </div>

          {/* Sections */}
          <TechSection />
          <InsightsSection />
          <StoriesSection />
          <AboutSection />
          <LinksSection />
        </div>
      </main>
    </div>
  );
}
