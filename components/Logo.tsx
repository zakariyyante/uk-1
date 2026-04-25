export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Casino crest icon */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lg-outer" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c9a84c" />
            <stop offset="50%" stopColor="#f5d27a" />
            <stop offset="100%" stopColor="#c9a84c" />
          </linearGradient>
          <linearGradient id="lg-inner" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1a1a2e" />
            <stop offset="100%" stopColor="#0f0f1a" />
          </linearGradient>
          <linearGradient id="lg-chip" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c9a84c" />
            <stop offset="100%" stopColor="#9a7a28" />
          </linearGradient>
          <filter id="logo-glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Outer hexagon ring */}
        <polygon
          points="22,2 38,11 38,33 22,42 6,33 6,11"
          fill="url(#lg-inner)"
          stroke="url(#lg-outer)"
          strokeWidth="1.5"
        />

        {/* Inner hexagon */}
        <polygon
          points="22,8 33,14.5 33,29.5 22,36 11,29.5 11,14.5"
          fill="none"
          stroke="url(#lg-outer)"
          strokeWidth="0.6"
          opacity="0.4"
        />

        {/* Back card (slightly offset) */}
        <rect
          x="13" y="10" width="14" height="18" rx="2"
          fill="#1e1e32"
          stroke="rgba(201,168,76,0.5)"
          strokeWidth="0.8"
          transform="rotate(-8 20 19)"
        />
        {/* Back card suit */}
        <text
          x="17" y="22"
          fontSize="9"
          fill="rgba(201,168,76,0.5)"
          fontFamily="serif"
          transform="rotate(-8 20 19)"
        >♠</text>

        {/* Front card */}
        <rect
          x="15" y="11" width="14" height="18" rx="2"
          fill="#12122a"
          stroke="url(#lg-outer)"
          strokeWidth="1"
          filter="url(#logo-glow)"
          transform="rotate(5 22 20)"
        />
        {/* Front card: A */}
        <text
          x="18.5" y="16"
          fontSize="6.5"
          fontWeight="bold"
          fill="url(#lg-outer)"
          fontFamily="Georgia, serif"
          transform="rotate(5 22 20)"
        >A</text>
        {/* Front card: diamond suit */}
        <text
          x="19" y="26"
          fontSize="10"
          fill="#f5d27a"
          fontFamily="serif"
          transform="rotate(5 22 20)"
          filter="url(#logo-glow)"
        >♦</text>

        {/* Chip overlay (bottom) */}
        <circle cx="31" cy="32" r="7" fill="#0f0f1a" stroke="url(#lg-outer)" strokeWidth="1.2" />
        <circle cx="31" cy="32" r="4.5" fill="url(#lg-chip)" opacity="0.9" />
        {/* Chip segments */}
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const r = 6.2;
          const rad = (deg * Math.PI) / 180;
          const x1 = 31 + r * Math.cos(rad);
          const y1 = 32 + r * Math.sin(rad);
          const x2 = 31 + (r - 2) * Math.cos(rad);
          const y2 = 32 + (r - 2) * Math.sin(rad);
          return (
            <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="url(#lg-outer)" strokeWidth="1.5" />
          );
        })}
        {/* Chip center dot */}
        <circle cx="31" cy="32" r="1.5" fill="#fef3c7" opacity="0.8" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span
            className="font-black tracking-tight"
            style={{
              fontSize: 20,
              background: "linear-gradient(135deg, #c9a84c 0%, #f5d27a 50%, #fef3c7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            UK
          </span>
          <span className="font-bold text-white" style={{ fontSize: 20 }}>Casino</span>
        </div>
        <span
          className="font-semibold uppercase tracking-widest"
          style={{ fontSize: 9, color: "rgba(201,168,76,0.6)", letterSpacing: "0.2em" }}
        >
          Picks
        </span>
      </div>
    </div>
  );
}
