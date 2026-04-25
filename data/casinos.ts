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
    name: "Betway Casino",
    logo: "/betway.webp",
    bonus: "100% UP TO £250 + 25 FREE SPINS",
    url: "https://record.affiliates.betway.com/?AffiliateId=121940&Refer=https%3A%2F%2Fbetway.com%2Fen-gb%2Fsports%2F",
    votes: 5820,
  },
  {
    name: "888 Casino",
    logo: "/888casino.webp",
    bonus: "£88 NO DEPOSIT + 100% UP TO £200",
    url: "https://ic.888casino.com/?sr=1&ic_id=67&ic_cid=gb_casino_affiliate&btag=a_67b_1285c_",
    votes: 5430,
  },
  {
    name: "LeoVegas",
    logo: "/leovegas.webp",
    bonus: "100% UP TO £100 + 200 FREE SPINS",
    url: "https://media.leovegas.com/redirect.aspx?pid=3688&bid=1460",
    votes: 5110,
  },
  {
    name: "Casumo",
    logo: "/casumo.webp",
    bonus: "100% UP TO £300 + 20 FREE SPINS",
    url: "https://www.casumo.com/en-gb/?btag=a_5614b_1284c_&utm_source=affiliate&utm_medium=generic",
    votes: 4890,
  },
  {
    name: "Mr Green",
    logo: "/mrgreen.webp",
    bonus: "100% UP TO £100 + 200 FREE SPINS",
    url: "https://media.mrgreen.com/redirect.aspx?pid=4011&bid=1474",
    votes: 4650,
  },
  {
    name: "Unibet Casino",
    logo: "/unibet.webp",
    bonus: "£40 BONUS ON FIRST DEPOSIT",
    url: "https://b1.trickyrock.com/redirect.aspx?pid=26975782&bid=21418",
    votes: 4480,
  },
  {
    name: "William Hill",
    logo: "/williamhill.webp",
    bonus: "UP TO £300 BONUS + 30 FREE SPINS",
    url: "https://promotions.williamhill.com/casino/welcome-bonus/?bmTag=&openid=&cmpid=aff:bv:all:en:001:&wh_aff_id=9&wh_campaign_id=1&wh_channel_id=0",
    votes: 4310,
  },
  {
    name: "Paddy Power",
    logo: "/paddypower.webp",
    bonus: "£10 CASHBACK + 50 FREE SPINS",
    url: "https://media.paddypowercasino.com/redirect.aspx?pid=3045&bid=21573",
    votes: 4190,
  },
  {
    name: "Jackpot City",
    logo: "/jackpotcity.webp",
    bonus: "UP TO £1600 WELCOME BONUS",
    url: "https://www.jackpotcitycasino.com/en/",
    votes: 3980,
  },
  // Mobile casinos (shown in MobileCasinoModal when ?gclid= present)
  {
    name: "Spin Casino",
    logo: "/spincasino.webp",
    bonus: "UP TO £1000 WELCOME BONUS",
    url: "https://www.spincasino.com/",
    votes: 3760,
    isMobile: true,
  },
  {
    name: "Royal Vegas",
    logo: "/royalvegas.webp",
    bonus: "UP TO £1200 WELCOME BONUS",
    url: "https://www.royalvegascasino.com/",
    votes: 3540,
    isMobile: true,
  },
  {
    name: "PlayOJO",
    logo: "/playojo.webp",
    bonus: "50 FREE SPINS NO WAGERING",
    url: "https://www.playojo.com/",
    votes: 3320,
    isMobile: true,
  },
];

export const casinos = buildCasinos(casinoInputs);
export const regularCasinos = casinos.filter((c) => !c.isMobile);
export const mobileCasinos = casinos.filter((c) => c.isMobile);
