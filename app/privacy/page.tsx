import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – UK Casino Picks",
  description: "Privacy Policy for ukcasinopicks.org – how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
};

const YEAR = new Date().getFullYear();

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main
        className="min-h-screen py-16 px-4"
        style={{ background: "var(--surface)" }}
      >
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-xs font-medium" style={{ color: "#c9a84c" }}>
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-black text-white mb-2">
            Privacy <span className="gold-text">Policy</span>
          </h1>
          <p className="text-sm mb-8" style={{ color: "rgba(232,232,240,0.5)" }}>
            Last updated: January {YEAR}
          </p>

          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "rgba(232,232,240,0.75)" }}>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
              <p>
                UK Casino Picks (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website{" "}
                <strong>ukcasinopicks.org</strong>. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-2">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Log Data:</strong> IP address, browser type, pages visited, time/date of visit,
                  time spent on pages, and other diagnostic data.
                </li>
                <li>
                  <strong>Cookies & Tracking:</strong> We use cookies and similar tracking technologies to
                  improve your experience and analyse site traffic.
                </li>
                <li>
                  <strong>Analytics:</strong> We use Vercel Analytics to understand how visitors interact
                  with our site. This data is anonymised and aggregated.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To provide, operate, and maintain our website</li>
                <li>To improve and personalise user experience</li>
                <li>To monitor and analyse usage and trends</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Cookies</h2>
              <p>
                We use cookies to store preferences and gather analytics data. You may configure your browser
                to refuse cookies; however, this may affect site functionality. Third-party casino operators
                that you click through to may set their own cookies subject to their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Third-Party Links</h2>
              <p>
                Our site contains affiliate links to online casino operators. We earn a commission if you
                click through and register. We are not responsible for the privacy practices of those
                third-party sites and encourage you to read their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
              <p>
                We do not collect personal information such as names or email addresses unless you contact us
                directly. Server log data is retained for up to 90 days for security purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Your Rights (GDPR / UK GDPR)</h2>
              <p className="mb-2">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Lodge a complaint with the ICO (Information Commissioner&apos;s Office)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact UK Casino Picks via our website
                at <strong>ukcasinopicks.org</strong>. Operator: UK Casino Picks.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
