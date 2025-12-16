export const BRANCHES = {
  sunnyhills: {
    name: "Sunnyhills Branch",
    url: "https://www.halaxy.com/book/widget/arise-shine-health/location/1314327",
    image: "/images/sunnyhills-branch-real.png",
    address: "Sunnyhills"
  },
  panmure: {
    name: "Panmure Branch",
    url: "https://www.halaxy.com/book/widget/arise-shine-health-panmure/location/1323793",
    image: "/images/panmure-branch-real.jpg",
    address: "Panmure"
  }
} as const;

export type BranchKey = keyof typeof BRANCHES;
