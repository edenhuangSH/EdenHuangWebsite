"use client";

import { useState, useEffect, useRef } from "react";

const INTEREST_OPTIONS = [
  { id: "articles", label: "Articles & Stories" },
  { id: "insights", label: "Insights" },
  { id: "tech", label: "Tech Notes" },
  { id: "weekly", label: "Weekly Digest" },
];

export default function SubscribeModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interests, setInterests] = useState<string[]>(["articles", "insights", "weekly"]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus email input on open
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const toggleInterest = (id: string) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (interests.length === 0) {
      setErrorMsg("Please select at least one interest.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, interests }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/30 backdrop-blur-sm px-4"
    >
      <div className="w-full max-w-sm bg-white border border-stone-200 rounded-sm shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-stone-100">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-1">
              Subscribe
            </p>
            <h2 className="text-sm font-semibold text-stone-800">
              Stay in the loop
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 transition-colors mt-0.5 p-1"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <div className="px-6 py-8 text-center">
            <p className="text-2xl mb-3">✦</p>
            <p className="text-sm font-medium text-stone-800 mb-1">You&apos;re subscribed</p>
            <p className="text-xs text-stone-500 leading-relaxed">
              Thank you. I&apos;ll reach out when there&apos;s something worth sharing.
            </p>
            <button
              onClick={onClose}
              className="mt-6 text-xs text-stone-400 hover:text-stone-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            {/* Email */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-1.5">
                Email <span className="text-stone-300 normal-case tracking-normal">(required)</span>
              </label>
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-3 py-2 text-sm border border-stone-200 rounded-sm bg-stone-50 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"
              />
            </div>

            {/* Name (optional) */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-1.5">
                Name <span className="text-stone-300 normal-case tracking-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-3 py-2 text-sm border border-stone-200 rounded-sm bg-stone-50 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"
              />
            </div>

            {/* Interests */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-2">
                I&apos;m interested in
              </p>
              <div className="space-y-2">
                {INTEREST_OPTIONS.map((opt) => (
                  <label
                    key={opt.id}
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <div
                      onClick={() => toggleInterest(opt.id)}
                      className={`w-4 h-4 border rounded-sm flex items-center justify-center flex-shrink-0 transition-colors ${
                        interests.includes(opt.id)
                          ? "bg-stone-800 border-stone-800"
                          : "border-stone-300 group-hover:border-stone-500"
                      }`}
                    >
                      {interests.includes(opt.id) && (
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span
                      onClick={() => toggleInterest(opt.id)}
                      className="text-xs text-stone-600 group-hover:text-stone-800 transition-colors"
                    >
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Error */}
            {status === "error" && (
              <p className="text-xs text-red-500">{errorMsg}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-2.5 text-xs font-medium tracking-wide bg-stone-900 text-white rounded-sm hover:bg-stone-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>

            <p className="text-[10px] text-stone-300 text-center leading-relaxed">
              No spam. Unsubscribe any time.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
