"use client";

import Image from "next/image";
import type { Casino } from "@/data/casinos";
import CasinoLogos, { getLogoKey } from "./CasinoLogos";

interface CasinoCardProps {
  casino: Casino;
  isOnline?: boolean;
  rank?: number;
}

function StarRating({ rating }: { rating: number }) {
  const filled = Math.round(rating / 2);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < filled ? "#f5d27a" : "none"} stroke={i < filled ? "#f5d27a" : "rgba(232,232,240,0.2)"} strokeWidth="2">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

// Subtle decorative background pattern for logo area
function LogoBg({ rank }: { rank: number }) {
  const suits = ["♠", "♥", "♦", "♣"];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* Radial light */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.08) 0%, transparent 70%)"
      }} />
      {/* Ghost rank number */}
      <div
        className="rank-bg absolute right-3 bottom-1 font-black leading-none"
        style={{ fontSize: 72, color: "rgba(201,168,76,1)", opacity: 0.06 }}
      >
        {rank}
      </div>
      {/* Faint suit corners */}
      <span className="absolute top-2 left-3 text-xs" style={{ color: "rgba(201,168,76,0.18)", fontSize: 11 }}>{suits[(rank - 1) % 4]}</span>
      <span className="absolute bottom-2 right-3 text-xs rotate-180 inline-block" style={{ color: "rgba(201,168,76,0.18)", fontSize: 11 }}>{suits[(rank - 1) % 4]}</span>
    </div>
  );
}

export default function CasinoCard({ casino, isOnline = true, rank = 1 }: CasinoCardProps) {
  const key = getLogoKey(casino.name);
  const hasImage = casino.logo.startsWith("/");
  const FallbackLogo = CasinoLogos[key];

  // Per-rank accent tints to add personality while staying classy
  const tints = [
    { from: "#1a1200", via: "#c9a84c22", border: "rgba(201,168,76,0.45)" },   // gold
    { from: "#001a12", via: "#10b98122", border: "rgba(16,185,129,0.35)" },    // emerald
    { from: "#0d001a", via: "#7c3aed22", border: "rgba(124,58,237,0.35)" },    // violet
    { from: "#1a0000", via: "#ef444422", border: "rgba(239,68,68,0.3)" },      // ruby
    { from: "#001020", via: "#0ea5e922", border: "rgba(14,165,233,0.3)" },     // sapphire
    { from: "#001a0d", via: "#22c55e22", border: "rgba(34,197,94,0.3)" },      // jade
    { from: "#0f0f1a", via: "#c9a84c15", border: "rgba(201,168,76,0.25)" },    // subtle gold
    { from: "#140014", via: "#e879f922", border: "rgba(232,121,249,0.3)" },    // amethyst
    { from: "#0a1020", via: "#38bdf822", border: "rgba(56,189,248,0.3)" },     // cyan
    { from: "#1a0e00", via: "#fb923c22", border: "rgba(251,146,60,0.3)" },     // amber
  ];
  const tint = tints[(rank - 1) % tints.length];

  return (
    <a
      href={casino.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="card-shine casino-glow relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: `linear-gradient(160deg, #181828 0%, #101018 100%)`,
        border: `1px solid ${tint.border}`,
        transition: "transform 0.25s cubic-bezier(.22,.68,0,1.2), border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-6px) scale(1.01)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0) scale(1)";
      }}
    >
      {/* Top accent stripe */}
      <div className="h-0.5 w-full" style={{
        background: `linear-gradient(90deg, transparent 0%, ${tint.border} 50%, transparent 100%)`
      }} />

      {/* Logo area */}
      <div
        className="relative flex items-center justify-center w-full"
        style={{
          height: 130,
          background: `linear-gradient(160deg, #13131f 0%, ${tint.from} 100%)`,
          borderBottom: `1px solid ${tint.border}`,
        }}
      >
        <LogoBg rank={rank} />
        <div className="relative z-10 flex items-center justify-center" style={{ width: "75%", height: 90 }}>
          {hasImage ? (
            <Image
              src={casino.logo}
              alt={`${casino.name} logo`}
              width={240}
              height={84}
              className="object-contain drop-shadow-lg"
              style={{ maxHeight: 84 }}
              unoptimized
            />
          ) : FallbackLogo ? (
            <div className="w-full h-full">{FallbackLogo}</div>
          ) : (
            <span className="text-2xl font-black gold-text text-center leading-tight px-2">{casino.name}</span>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3.5 p-5">

        {/* Rating + reviews row */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="gold-shimmer font-black text-4xl leading-none tracking-tight">
              {casino.rating.toFixed(1)}
            </span>
            <span className="text-xs font-semibold" style={{ color: "rgba(232,232,240,0.3)" }}>/10</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <StarRating rating={casino.rating} />
            <div className="flex items-center gap-1.5">
              <span
                className="pulse-dot inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#22c55e" }}
              />
              <span className="text-xs" style={{ color: "rgba(232,232,240,0.4)" }}>
                {casino.votes.toLocaleString()} reviews
              </span>
            </div>
          </div>
        </div>

        {/* Thin divider */}
        <div style={{ height: 1, background: `linear-gradient(90deg, ${tint.border}, transparent)` }} />

        {/* Bonus box */}
        <div
          className="rounded-xl px-4 py-3"
          style={{
            background: `linear-gradient(135deg, ${tint.from} 0%, rgba(201,168,76,0.05) 100%)`,
            border: `1px solid ${tint.border}`,
          }}
        >
          <div
            className="text-xs font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5"
            style={{ color: "rgba(232,232,240,0.4)" }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5">
              <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
            </svg>
            Welcome Bonus
          </div>
          <div className="gold-text font-black text-sm leading-snug">{casino.bonus}</div>
        </div>

        {/* CTA */}
        <button
          className="btn-gold relative w-full py-3.5 rounded-xl font-black text-sm text-gray-900 uppercase tracking-widest overflow-hidden"
          tabIndex={-1}
          aria-hidden="true"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Claim Bonus
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </button>

        {/* T&Cs */}
        <p className="text-center text-xs leading-snug" style={{ color: "rgba(232,232,240,0.25)" }}>
          New customers only. 18+. T&amp;Cs apply. BeGambleAware.org
        </p>
      </div>
    </a>
  );
}
