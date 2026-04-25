"use client";

import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
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
            aria-label="BeGambleAware"
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
            aria-label="GamCare"
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
            aria-label="GamStop"
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
        {/* Logo centred */}
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["#casinos", "#how-we-rank"].map((href, i) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-xs transition-colors"
                    style={{ color: "rgba(232,232,240,0.5)" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a84c")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(232,232,240,0.5)")}
                  >
                    {["Top Casinos", "How We Rank"][i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-xs transition-colors"
                  style={{ color: "rgba(232,232,240,0.5)" }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs transition-colors"
                  style={{ color: "rgba(232,232,240,0.5)" }}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer (spans 2 cols) */}
          <div className="col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
              Disclaimer
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(232,232,240,0.4)" }}>
              UK Casino Picks is an independent comparison site. We may receive commission from casinos we list. 
              All offers are subject to terms and conditions. Gambling involves risk — only gamble with money 
              you can afford to lose. If gambling is affecting you or someone you know, contact the National 
              Gambling Helpline:{" "}
              <a
                href="tel:08088020133"
                style={{ color: "#c9a84c" }}
                className="hover:underline"
              >
                0808 8020 133
              </a>{" "}
              (free, 24/7). For help and support visit{" "}
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a84c" }} className="hover:underline">
                BeGambleAware.org
              </a>.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="section-divider mb-6" />
        <p className="text-center text-xs" style={{ color: "rgba(232,232,240,0.3)" }}>
          © {year} ukcasinopicks.com. For informational purposes only. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
