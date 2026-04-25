export interface Casino {
  name: string;
  logo: string;
  bonus: string;
  url: string;
  votes: number;
  isMobile?: boolean;
  // auto-generated
  id: string;
  rating: number;
  badge: string | null;
}

interface CasinoInput {
  name: string;
  logo: string;
  bonus: string;
  url: string;
  votes: number;
  isMobile?: boolean;
}

function generateId(name: string, index: number): string {
  let hash = 0;
  const str = name + index;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

const BADGES = ["Editor's Pick", "Top Pick", "Trending Now"];

function buildCasinos(inputs: CasinoInput[]): Casino[] {
  return inputs.map((c, i) => ({
    ...c,
    id: generateId(c.name, i),
    rating: Math.round((10.0 - i * 0.1) * 10) / 10,
    badge: i < 3 ? BADGES[i] : null,
  }));
}

const casinoInputs: CasinoInput[] = [
  {
    name: "Karamba",
    logo: "/karamba.svg",
    bonus: "100% UP TO £200 + 20 FREE SPINS",
    url: "https://www.karamba.com/",
    votes: 5640,
  }
];

export const casinos = buildCasinos(casinoInputs);
export const regularCasinos = casinos.filter((c) => !c.isMobile);
export const mobileCasinos = casinos.filter((c) => c.isMobile);
