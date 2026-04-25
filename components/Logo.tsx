export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon: Diamond/card suit composition */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="18" cy="18" r="17" fill="url(#logo-bg)" stroke="url(#logo-border)" strokeWidth="1.5" />
        <text x="18" y="24" textAnchor="middle" fontSize="20" fill="url(#logo-gold)">♦</text>
        <defs>
          <linearGradient id="logo-bg" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1a1a3e" />
            <stop offset="100%" stopColor="#0f0f1a" />
          </linearGradient>
          <linearGradient id="logo-border" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c9a84c" />
            <stop offset="100%" stopColor="#f5d27a" />
          </linearGradient>
          <linearGradient id="logo-gold" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c9a84c" />
            <stop offset="100%" stopColor="#f5d27a" />
          </linearGradient>
        </defs>
      </svg>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="gold-text font-black text-xl tracking-tight">UK</span>
        <span className="text-white font-semibold text-xs tracking-widest uppercase opacity-80">Casino Picks</span>
      </div>
    </div>
  );
}
