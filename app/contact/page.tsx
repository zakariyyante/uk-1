"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Status = "idle" | "sending" | "success" | "error";

const SUBJECTS = [
  "General Enquiry",
  "Partnership / Affiliate",
  "Casino Review Request",
  "Incorrect Information",
  "Responsible Gambling",
  "Legal / Compliance",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: 12,
    color: "rgba(232,232,240,0.9)",
    outline: "none",
    width: "100%",
    padding: "12px 16px",
    fontSize: 14,
    transition: "border-color 0.2s",
  };

  return (
    <>
      <Header />
      <main className="min-h-screen py-16 px-4" style={{ background: "var(--surface)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-xs font-medium" style={{ color: "#c9a84c" }}>
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-black text-white mb-2">
            Contact <span className="gold-text">Us</span>
          </h1>
          <p className="text-sm mb-10" style={{ color: "rgba(232,232,240,0.5)" }}>
            Questions, feedback, or partnership enquiries — we&apos;ll get back to you within 2 business days.
          </p>

          {/* Quick contact chips */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { icon: "✉️", label: "hello@ukcasinopicks.org", href: "mailto:hello@ukcasinopicks.org" },
              { icon: "🛡️", label: "0808 8020 133 (helpline)", href: "tel:08088020133" },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "#c9a84c",
                  textDecoration: "none",
                }}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </a>
            ))}
          </div>

          {/* ── Success state ── */}
          {status === "success" ? (
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: "linear-gradient(145deg, #1e1e32 0%, #16162a 100%)",
                border: "1px solid rgba(34,197,94,0.3)",
              }}
            >
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-xl font-black text-white mb-2">Message Sent!</h2>
              <p className="text-sm mb-6" style={{ color: "rgba(232,232,240,0.6)" }}>
                Thanks for reaching out. We&apos;ll reply to your email within 2 business days.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-gold px-6 py-2.5 rounded-full text-sm font-bold text-gray-900 uppercase tracking-wide"
              >
                Send Another
              </button>
            </div>
          ) : (
            /* ── Contact form ── */
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 md:p-8 flex flex-col gap-5"
              style={{
                background: "linear-gradient(145deg, #1e1e32 0%, #16162a 100%)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(232,232,240,0.5)" }}>
                    Your Name <span style={{ color: "#c9a84c" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(232,232,240,0.5)" }}>
                    Email Address <span style={{ color: "#c9a84c" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(232,232,240,0.5)" }}>
                  Subject <span style={{ color: "#c9a84c" }}>*</span>
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")}
                >
                  <option value="" disabled style={{ background: "#16162a" }}>
                    Select a subject…
                  </option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s} style={{ background: "#16162a" }}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(232,232,240,0.5)" }}>
                  Message <span style={{ color: "#c9a84c" }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind…"
                  required
                  rows={6}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 140 }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")}
                />
                <div className="text-right text-xs" style={{ color: "rgba(232,232,240,0.25)" }}>
                  {form.message.length} characters
                </div>
              </div>

              {/* Error */}
              {status === "error" && (
                <div
                  className="rounded-xl px-4 py-3 text-sm"
                  style={{
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    color: "#f87171",
                  }}
                >
                  ⚠️ {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-gold w-full py-4 rounded-xl font-black text-sm text-gray-900 uppercase tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  "Send Message →"
                )}
              </button>

              <p className="text-center text-xs" style={{ color: "rgba(232,232,240,0.25)" }}>
                We never share your details with third parties.
              </p>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
