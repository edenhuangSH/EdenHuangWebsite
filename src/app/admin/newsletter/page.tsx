"use client";

import { useState, useEffect, useCallback } from "react";

const CONTENT_TYPES = [
  { id: "articles", label: "Articles & Stories" },
  { id: "insights", label: "Insights" },
  { id: "tech", label: "Tech Note" },
  { id: "weekly", label: "Weekly Digest" },
  { id: "custom", label: "Custom" },
];

type Contact = {
  id: string;
  email: string;
  first_name: string;
  unsubscribed: boolean;
  created_at: string;
};

type SendResult = {
  sent: number;
  failed: number;
  total: number;
};

// ── Preview renderer ──────────────────────────────────────────────────────────

function EmailPreview({
  subject,
  body,
  contentType,
  articleLink,
}: {
  subject: string;
  body: string;
  contentType: string;
  articleLink: string;
}) {
  const typeLabel: Record<string, string> = {
    articles: "New Article",
    insights: "New Insight",
    tech: "Tech Note",
    weekly: "Weekly Digest",
    custom: "From Eden",
  };
  const badge = typeLabel[contentType] ?? "Newsletter";

  return (
    <div className="border border-stone-200 rounded-sm overflow-hidden bg-stone-50">
      {/* Email client chrome */}
      <div className="bg-stone-100 border-b border-stone-200 px-4 py-2">
        <p className="text-[10px] text-stone-500 font-medium uppercase tracking-widest">Email Preview</p>
      </div>
      <div className="bg-white p-6 max-w-lg mx-auto">
        {/* Header */}
        <div className="border-b border-stone-100 pb-4 mb-4">
          <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-1">Eden Huang</p>
          <div className="w-5 h-px bg-stone-200" />
        </div>
        {/* Badge */}
        <span className="inline-block text-[10px] uppercase tracking-widest text-stone-500 border border-stone-200 px-2 py-0.5 rounded-full mb-3">
          {badge}
        </span>
        {/* Subject */}
        <p className="text-sm font-semibold text-stone-800 mb-3">{subject || "—"}</p>
        {/* Body */}
        <div className="text-xs text-stone-600 leading-relaxed whitespace-pre-wrap">
          {body || <span className="text-stone-300">Your message will appear here…</span>}
        </div>
        {/* CTA */}
        {articleLink && (
          <div className="mt-4">
            <span className="inline-block text-xs text-stone-600 border border-stone-200 px-4 py-2 rounded-sm">
              Read the full piece →
            </span>
          </div>
        )}
        {/* Footer */}
        <div className="border-t border-stone-100 mt-5 pt-4">
          <p className="text-[10px] text-stone-300">
            You&apos;re receiving this because you subscribed at edenhuang.com.{" "}
            <span className="underline">Unsubscribe</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function AdminNewsletterPage() {
  const [secret, setSecret] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [contactsLoading, setContactsLoading] = useState(false);

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [contentType, setContentType] = useState("weekly");
  const [articleLink, setArticleLink] = useState("");
  const [filterByInterest, setFilterByInterest] = useState(true);
  const [preview, setPreview] = useState(false);

  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<SendResult | null>(null);
  const [sendError, setSendError] = useState("");

  const fetchContacts = useCallback(async (s: string) => {
    setContactsLoading(true);
    try {
      const res = await fetch("/api/admin/subscribers", {
        headers: { "x-admin-secret": s },
      });
      if (!res.ok) {
        setAuthError("Invalid password.");
        setAuthed(false);
        return;
      }
      const data = await res.json();
      setContacts(data.data ?? []);
      setAuthed(true);
    } catch {
      setAuthError("Network error.");
    } finally {
      setContactsLoading(false);
    }
  }, []);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    fetchContacts(secret);
  };

  // Derived counts
  const activeCount = contacts.filter((c) => !c.unsubscribed).length;
  const filteredCount = filterByInterest && contentType !== "custom"
    ? contacts.filter(
        (c) => !c.unsubscribed && (c.first_name?.includes(contentType) || c.first_name?.includes("all"))
      ).length
    : activeCount;

  const handleSend = async () => {
    if (!subject || !body) {
      setSendError("Subject and body are required.");
      return;
    }
    setSending(true);
    setSendError("");
    setSendResult(null);

    try {
      const res = await fetch("/api/admin/send-newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": secret,
        },
        body: JSON.stringify({ subject, body, contentType, articleLink, filterByInterest }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSendError(data.error ?? "Send failed.");
      } else {
        setSendResult(data);
      }
    } catch {
      setSendError("Network error.");
    } finally {
      setSending(false);
    }
  };

  // Refresh contacts after authed
  useEffect(() => {
    if (authed && contacts.length === 0) {
      fetchContacts(secret);
    }
  }, [authed, contacts.length, fetchContacts, secret]);

  // ── Auth gate ───────────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
        <form onSubmit={handleAuth} className="w-full max-w-xs bg-white border border-stone-200 rounded-sm p-8 space-y-4 shadow-sm">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-1">Admin</p>
            <h1 className="text-sm font-semibold text-stone-800">Newsletter Dashboard</h1>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">Password</label>
            <input
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 text-sm border border-stone-200 rounded-sm bg-stone-50 focus:outline-none focus:border-stone-400"
              autoFocus
            />
          </div>
          {authError && <p className="text-xs text-red-500">{authError}</p>}
          <button
            type="submit"
            className="w-full py-2.5 text-xs font-medium bg-stone-900 text-white rounded-sm hover:bg-stone-700 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  // ── Dashboard ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-1">Admin</p>
            <h1 className="text-lg font-semibold text-stone-800">Newsletter</h1>
          </div>
          <button
            onClick={() => { setAuthed(false); setSecret(""); }}
            className="text-xs text-stone-400 hover:text-stone-700 transition-colors"
          >
            Sign out
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Total Subscribers", value: contacts.length },
            { label: "Active", value: activeCount },
            { label: "Will Receive", value: filteredCount },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-stone-200 rounded-sm p-4">
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">{stat.label}</p>
              <p className="text-2xl font-semibold text-stone-800">
                {contactsLoading ? "—" : stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Subscriber list (collapsed) */}
        <details className="bg-white border border-stone-200 rounded-sm">
          <summary className="px-5 py-3 text-xs font-medium text-stone-600 cursor-pointer select-none hover:text-stone-900 transition-colors">
            View subscriber list ({activeCount} active)
          </summary>
          <div className="border-t border-stone-100 divide-y divide-stone-50 max-h-64 overflow-y-auto">
            {contacts.length === 0 ? (
              <p className="px-5 py-4 text-xs text-stone-400">No subscribers yet.</p>
            ) : (
              contacts.map((c) => (
                <div key={c.id} className="px-5 py-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-700">{c.email}</span>
                    {c.first_name && (
                      <span className="ml-2 text-[10px] text-stone-400">{c.first_name}</span>
                    )}
                  </div>
                  {c.unsubscribed && (
                    <span className="text-[9px] text-red-400 border border-red-200 px-1.5 py-0.5 rounded-full">Unsub</span>
                  )}
                </div>
              ))
            )}
          </div>
        </details>

        {/* Compose */}
        <div className="bg-white border border-stone-200 rounded-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-stone-800">Compose</h2>
            <button
              onClick={() => setPreview((p) => !p)}
              className={`text-xs px-3 py-1 rounded-full transition-colors border ${
                preview ? "bg-stone-900 text-white border-stone-900" : "border-stone-200 text-stone-600 hover:border-stone-400"
              }`}
            >
              {preview ? "← Edit" : "Preview →"}
            </button>
          </div>

          {preview ? (
            <div className="p-6">
              <EmailPreview
                subject={subject}
                body={body}
                contentType={contentType}
                articleLink={articleLink}
              />
            </div>
          ) : (
            <div className="p-6 space-y-5">
              {/* Content Type */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-2">
                  Content Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {CONTENT_TYPES.map((ct) => (
                    <button
                      key={ct.id}
                      onClick={() => setContentType(ct.id)}
                      className={`px-3 py-1 text-xs rounded-full transition-colors border ${
                        contentType === ct.id
                          ? "bg-stone-900 text-white border-stone-900"
                          : "border-stone-200 text-stone-600 hover:border-stone-400"
                      }`}
                    >
                      {ct.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-1.5">
                  Subject Line
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. New: AI Adoption Is Less About Technology"
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-sm bg-stone-50 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400"
                />
              </div>

              {/* Body */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-1.5">
                  Message Body
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Write your message here. Supports line breaks."
                  rows={8}
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-sm bg-stone-50 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 resize-y font-mono leading-relaxed"
                />
              </div>

              {/* Article Link (optional) */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-medium mb-1.5">
                  Article Link <span className="text-stone-300 normal-case tracking-normal">(optional — adds a CTA button)</span>
                </label>
                <input
                  type="text"
                  value={articleLink}
                  onChange={(e) => setArticleLink(e.target.value)}
                  placeholder="https://edenhuang.com/stories/..."
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-sm bg-stone-50 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400"
                />
              </div>

              {/* Audience filter toggle */}
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => setFilterByInterest((f) => !f)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                    filterByInterest ? "bg-stone-800" : "bg-stone-300"
                  }`}
                >
                  <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                      filterByInterest ? "translate-x-4" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className="text-xs text-stone-600">
                  Only send to subscribers interested in <strong>{CONTENT_TYPES.find((c) => c.id === contentType)?.label}</strong>
                  <span className="ml-1 text-stone-400">({filteredCount} recipients)</span>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Send */}
        <div className="space-y-3">
          {sendError && (
            <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-sm px-4 py-2">{sendError}</p>
          )}
          {sendResult && (
            <div className="text-xs bg-green-50 border border-green-200 text-green-800 rounded-sm px-4 py-3">
              ✓ Sent to <strong>{sendResult.sent}</strong> of <strong>{sendResult.total}</strong> subscribers.
              {sendResult.failed > 0 && ` (${sendResult.failed} failed)`}
            </div>
          )}
          <div className="flex items-center justify-between">
            <p className="text-xs text-stone-400">
              {filteredCount} recipient{filteredCount !== 1 ? "s" : ""} · {contentType === "custom" ? "All active" : filterByInterest ? `Filtered by "${CONTENT_TYPES.find((c) => c.id === contentType)?.label}"` : "All active"}
            </p>
            <button
              onClick={handleSend}
              disabled={sending || !subject || !body}
              className="px-6 py-2.5 text-xs font-medium bg-stone-900 text-white rounded-sm hover:bg-stone-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {sending ? "Sending…" : `Send Newsletter →`}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
