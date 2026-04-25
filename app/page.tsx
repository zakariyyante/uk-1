import Image from "next/image";
import Header from "@/components/Header";
import CasinoCard from "@/components/CasinoCard";
import Footer from "@/components/Footer";
import MobileCasinoModal from "@/components/MobileCasinoModal";
import Logo from "@/components/Logo";
import Link from "next/link";
import { regularCasinos } from "@/data/casinos";

const YEAR = new Date().getFullYear();

export default function HomePage() {
  return (
    <>
      {/* Mobile Casino Modal – renders only when ?gclid= present */}
      <MobileCasinoModal />

      <Header />

      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="hero-bg relative overflow-hidden py-20 md:py-28 px-4">
          {/* Decorative card suits */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          >
            {["♠", "♥", "♦", "♣"].map((suit, i) => (
              <span
                key={suit}
                className="suit-float absolute text-white select-none"
                style={{
                  fontSize: "clamp(80px, 15vw, 200px)",
                  left: `${[10, 25, 65, 80][i]}%`,
                  top: `${[5, 55, 10, 50][i]}%`,
                  color: i % 2 === 0 ? "#c9a84c" : "#f5d27a",
                  animationDelay: `${i * 1.5}s`,
                }}
              >
                {suit}
              </span>
            ))}
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge pill */}
            <div className="badge-pill mx-auto mb-6 inline-flex">
              <span className="pulse-dot inline-block w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
              <span>UK Casino Picks • Updated for {YEAR}</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
              The UK&apos;s{" "}
              <span className="gold-shimmer">Best Online</span>
              <br />
              Casino Sites {YEAR}
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed"
              style={{ color: "rgba(232,232,240,0.7)" }}
            >
              Independently reviewed and ranked. Only UKGC-licensed casinos with
              verified bonuses and fast payouts make our list.
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: "🏆", text: "UKGC Licensed" },
                { icon: "✍️", text: "Editor Picks" },
                { icon: "⚡", text: "Fast Payouts" },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "rgba(232,232,240,0.8)",
                  }}
                >
                  <span>{icon}</span>
                  <span>{text}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── CASINO CARDS ────────────────────────────────── */}
        <section id="casinos" className="py-16 px-4" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                <span className="gold-text">Top Rated</span> UK Online Casinos
              </h2>
              <p className="text-sm" style={{ color: "rgba(232,232,240,0.5)" }}>
                Rankings refreshed weekly based on bonuses, licensing, game variety &amp; payout speed
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regularCasinos.map((casino) => (
                <CasinoCard key={casino.id} casino={casino} isOnline={true} />
              ))}
            </div>

            {/* Disclaimer */}
            <div
              className="mt-8 rounded-xl px-6 py-4 text-xs leading-relaxed text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "rgba(232,232,240,0.4)",
              }}
            >
              Advertiser Disclosure: UK Casino Picks may receive compensation from casinos listed. Rankings are
              editorially independent. New customers only. 18+. T&amp;Cs apply.
              Gambling can be addictive — please play responsibly.{" "}
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a84c" }}>
                BeGambleAware.org
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── ABOUT / HOW WE RANK ─────────────────────────── */}
        <section
          id="how-we-rank"
          className="py-16 px-4"
          style={{
            background: "linear-gradient(180deg, #0d0d1e 0%, #0a0a14 100%)",
            borderTop: "1px solid rgba(201,168,76,0.1)",
            borderBottom: "1px solid rgba(201,168,76,0.1)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-white mb-3">
                How We <span className="gold-text">Rank Casinos</span>
              </h2>
              <p className="text-sm" style={{ color: "rgba(232,232,240,0.5)" }}>
                Our methodology is transparent, rigorous, and player-first
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* What makes our reviews different */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(145deg, #1e1e32 0%, #16162a 100%)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-4">
                  What makes our reviews{" "}
                  <span className="gold-text">different?</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    { suit: "♠", text: "We only feature UKGC-licensed casinos with verified payout records and fair terms." },
                    { suit: "♦", text: "Our bonus valuations account for wagering requirements, time limits, and game restrictions." },
                    { suit: "♣", text: "Player reviews are weighted alongside expert testing for a balanced score out of 10." },
                  ].map(({ suit, text }) => (
                    <li key={suit} className="flex items-start gap-3">
                      <span className="gold-text font-bold text-lg flex-shrink-0">{suit}</span>
                      <span className="text-sm" style={{ color: "rgba(232,232,240,0.7)" }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsible Gambling */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(145deg, #1e1e32 0%, #16162a 100%)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-4">
                  Responsible <span className="gold-text">Gambling</span>
                </h3>
                <p className="text-sm mb-4" style={{ color: "rgba(232,232,240,0.6)" }}>
                  Gambling should be fun, not a financial solution. If you feel you may have a problem, help is available 24/7.
                </p>
                <ul className="space-y-2">
                  {[
                    {
                      href: "https://www.begambleaware.org",
                      label: "BeGambleAware",
                      desc: "Free support & advice",
                    },
                    {
                      href: "https://www.gamcare.org.uk",
                      label: "GamCare",
                      desc: "Counselling & support",
                    },
                    {
                      href: "tel:08088020133",
                      label: "Helpline: 0808 8020 133",
                      desc: "Free, confidential, 24/7",
                    },
                  ].map(({ href, label, desc }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 group"
                      >
                        <span
                          className="text-xs font-bold transition-colors"
                          style={{ color: "#c9a84c" }}
                        >
                          {label}
                        </span>
                        <span className="text-xs" style={{ color: "rgba(232,232,240,0.4)" }}>
                          — {desc}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER (inline) ─────────────────────────────── */}
        <footer
          style={{
            background: "linear-gradient(180deg, #0a0a14 0%, #060610 100%)",
            borderTop: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          {/* Play Responsibly Strip */}
          <div
            className="py-4 px-4"
            style={{
              background: "rgba(201,168,76,0.06)",
              borderBottom: "1px solid rgba(201,168,76,0.1)",
            }}
          >
            <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#c9a84c" }}>
                Play Responsibly
              </span>
              <Image
                src="/18plus.png"
                alt="18+ only"
                width={36}
                height={36}
                className="object-contain opacity-80"
                unoptimized
              />
              <a
                href="https://www.gambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/gambleaware.png"
                  alt="BeGambleAware"
                  width={120}
                  height={36}
                  className="object-contain"
                  unoptimized
                />
              </a>
              <a
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/gamcare.png"
                  alt="GamCare"
                  width={90}
                  height={36}
                  className="object-contain"
                  unoptimized
                />
              </a>
              <a
                href="https://www.gamstop.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/gamestop.png"
                  alt="GamStop"
                  width={80}
                  height={36}
                  className="object-contain"
                  unoptimized
                />
              </a>
            </div>
          </div>

          {/* Main footer content */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex justify-center mb-8">
              <Logo />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#casinos" className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
                      Top Casinos
                    </a>
                  </li>
                  <li>
                    <a href="#how-we-rank" className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
                      How We Rank
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
                  Legal
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
                  Disclaimer
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(232,232,240,0.4)" }}>
                  UK Casino Picks is an independent comparison site. We may receive commission from casinos we
                  list. All offers are subject to terms and conditions. Gambling involves risk — only gamble with
                  money you can afford to lose. National Gambling Helpline:{" "}
                  <a href="tel:08088020133" style={{ color: "#c9a84c" }}>
                    0808 8020 133
                  </a>{" "}
                  (free, 24/7).
                </p>
              </div>
            </div>

            <div className="section-divider mb-6" />
            <p className="text-center text-xs" style={{ color: "rgba(232,232,240,0.3)" }}>
              © {YEAR} ukcasinopicks.com. For informational purposes only. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
