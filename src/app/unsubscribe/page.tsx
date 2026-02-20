"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function UnsubscribeForm() {
  const params = useSearchParams();
  const emailFromUrl = params.get("email") ?? "";

  const [email, setEmail] = useState(emailFromUrl);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Auto-submit if email is passed via URL
  useEffect(() => {
    if (emailFromUrl) setEmail(emailFromUrl);
  }, [emailFromUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
      <div className="w-full max-w-sm text-center">
        {status === "done" ? (
          <>
            <p className="text-2xl mb-4">—</p>
            <h1 className="text-sm font-semibold text-stone-800 mb-2">You&apos;ve been unsubscribed</h1>
            <p className="text-xs text-stone-500 leading-relaxed mb-6">
              {email} has been removed from the mailing list.
            </p>
            <Link href="/" className="text-xs text-stone-400 hover:text-stone-700 transition-colors">
              ← Back to edenhuang.com
            </Link>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-stone-200 rounded-sm p-8 space-y-4 shadow-sm text-left">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-1">
                Eden Huang
              </p>
              <h1 className="text-sm font-semibold text-stone-800">Unsubscribe</h1>
              <p className="text-xs text-stone-500 mt-1">
                We&apos;ll remove you from all future newsletters.
              </p>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm border border-stone-200 rounded-sm bg-stone-50 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400"
                placeholder="you@example.com"
              />
            </div>

            {status === "error" && (
              <p className="text-xs text-red-500">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading" || !email}
              className="w-full py-2.5 text-xs font-medium bg-stone-900 text-white rounded-sm hover:bg-stone-700 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Processing…" : "Confirm Unsubscribe"}
            </button>

            <div className="text-center">
              <Link href="/" className="text-[10px] text-stone-400 hover:text-stone-600 transition-colors">
                ← Back
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense>
      <UnsubscribeForm />
    </Suspense>
  );
}
