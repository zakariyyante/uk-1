import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service – UK Casino Picks",
  description: "Terms of Service for ukcasinopicks.org – please read before using our site.",
  alternates: { canonical: "/terms" },
};

const YEAR = new Date().getFullYear();

export default function TermsPage() {
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
            Terms of <span className="gold-text">Service</span>
          </h1>
          <p className="text-sm mb-8" style={{ color: "rgba(232,232,240,0.5)" }}>
            Last updated: January {YEAR}
          </p>

          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "rgba(232,232,240,0.75)" }}>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using <strong>ukcasinopicks.org</strong>, you accept and agree to be bound
                by these Terms of Service. If you do not agree to these terms, please do not use our site.
                This site is operated by UK Casino Picks.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Informational Purpose Only</h2>
              <p>
                UK Casino Picks is an independent comparison and review website. All content is provided for
                informational purposes only. We do not operate as a casino, bookmaker, or gambling operator.
                We do not hold a gambling licence.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Age Restriction</h2>
              <p>
                This website is intended for adults aged <strong>18 years or over</strong> only. If you are
                under 18, you must leave this site immediately. The online casinos we list are also restricted
                to adults aged 18+.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Affiliate Disclosure</h2>
              <p>
                UK Casino Picks participates in affiliate programmes. We may earn a commission when you click
                through our links and register with a casino operator. This does not affect our editorial
                independence or the objectivity of our reviews.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Accuracy of Information</h2>
              <p>
                We strive to keep all bonus offers, ratings, and casino information accurate and up-to-date.
                However, casino operators may change their offers at any time without notice. Always check the
                casino&apos;s own website for the latest terms and conditions before registering or depositing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Responsible Gambling</h2>
              <p className="mb-2">
                Gambling is a form of entertainment and should be enjoyed responsibly. UK Casino Picks strongly
                encourages responsible gambling. If you believe you or someone you know may have a gambling
                problem, please seek help:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a84c" }}>
                    BeGambleAware.org
                  </a>
                </li>
                <li>
                  <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a84c" }}>
                    GamCare.org.uk
                  </a>
                </li>
                <li>
                  National Gambling Helpline:{" "}
                  <a href="tel:08088020133" style={{ color: "#c9a84c" }}>
                    0808 8020 133
                  </a>{" "}
                  (free, 24/7)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Intellectual Property</h2>
              <p>
                All content on ukcasinopicks.org, including text, graphics, logos, and design, is the
                property of UK Casino Picks and is protected by applicable intellectual property laws. You
                may not reproduce or redistribute any content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Limitation of Liability</h2>
              <p>
                UK Casino Picks shall not be liable for any losses or damages arising from your use of this
                website or from any casino you visit via our links. Gambling carries financial risk, and you
                are solely responsible for your own decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of England and Wales.
                Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
              <p>
                For any queries regarding these Terms of Service, please contact UK Casino Picks via our
                website at <strong>ukcasinopicks.org</strong>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
