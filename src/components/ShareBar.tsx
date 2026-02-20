"use client";

import { useState, useEffect } from "react";

type ShareBarProps = {
  title: string;
  path: string; // e.g. "/stories/encounter-with-abcs"
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://edenhuang.com";

export default function ShareBar({ title, path }: ShareBarProps) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState(`${BASE_URL}${path}`);

  // Use the real browser URL (handles dev / staging correctly)
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const channels = [
    {
      key: "x",
      label: "𝕏",
      title: "Share on X",
      href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      title: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      key: "sms",
      label: "SMS",
      title: "Send via text message",
      href: `sms:?body=${encodedTitle}%20${encodedUrl}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for Safari/older browsers
      const el = document.createElement("textarea");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-3 py-4 border-t border-b border-stone-100 my-8">
      <span className="text-[10px] uppercase tracking-widest text-stone-300 font-medium select-none">
        Share
      </span>
      <span className="text-stone-200 select-none">—</span>

      {channels.map((ch) => (
        <a
          key={ch.key}
          href={ch.href}
          target={ch.key !== "sms" ? "_blank" : undefined}
          rel={ch.key !== "sms" ? "noopener noreferrer" : undefined}
          title={ch.title}
          className="text-xs text-stone-400 hover:text-stone-800 transition-colors duration-150"
        >
          {ch.label}
        </a>
      ))}

      <button
        onClick={handleCopy}
        title="Copy link"
        className={`text-xs transition-colors duration-150 ${
          copied ? "text-stone-600 font-medium" : "text-stone-400 hover:text-stone-800"
        }`}
      >
        {copied ? "Copied ✓" : "Copy link"}
      </button>
    </div>
  );
}
