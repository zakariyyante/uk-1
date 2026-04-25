// SVG fallback logos keyed by casino name slug
const CasinoLogos: Record<string, React.ReactElement> = {
  betway: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#00a651" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="16">
        betway
      </text>
    </svg>
  ),
  "888casino": (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#ff6600" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="14">
        888casino
      </text>
    </svg>
  ),
  leovegas: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#f5a623" />
      <text x="60" y="27" textAnchor="middle" fill="#1a1a1a" fontFamily="Arial" fontWeight="bold" fontSize="14">
        LeoVegas
      </text>
    </svg>
  ),
  casumo: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#e8145a" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="15">
        Casumo
      </text>
    </svg>
  ),
  mrgreen: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#2e7d32" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="14">
        Mr Green
      </text>
    </svg>
  ),
  unibet: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#147b45" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="14">
        Unibet
      </text>
    </svg>
  ),
  williamhill: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#004990" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="11">
        William Hill
      </text>
    </svg>
  ),
  paddypower: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#00aa00" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="11">
        Paddy Power
      </text>
    </svg>
  ),
  jackpotcity: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#c9a84c" />
      <text x="60" y="27" textAnchor="middle" fill="#1a1a1a" fontFamily="Arial" fontWeight="bold" fontSize="11">
        Jackpot City
      </text>
    </svg>
  ),
  spincasino: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#9c27b0" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="12">
        Spin Casino
      </text>
    </svg>
  ),
  royalvegas: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#7b1fa2" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="12">
        Royal Vegas
      </text>
    </svg>
  ),
  playojo: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#ff4081" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="13">
        PlayOJO
      </text>
    </svg>
  ),
};

export function getLogoKey(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
}

export default CasinoLogos;
