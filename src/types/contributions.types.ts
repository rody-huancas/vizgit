export interface ContributionDay {
  date             : string;
  contributionCount: number;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ColorTheme {
  name  : string;
  colors: {
    empty : string;
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  };
  bg  : string;
  text: string;
}

export const THEMES: ColorTheme[] = [
  {
    name  : "GitHub",
    colors: {
      empty : "bg-gray-100",
      level1: "bg-green-300",
      level2: "bg-green-500",
      level3: "bg-green-600",
      level4: "bg-green-700",
    },
    bg  : "bg-white",
    text: "text-gray-900",
  },
  {
    name  : "Ocean",
    colors: {
      empty : "bg-slate-100",
      level1: "bg-blue-300",
      level2: "bg-blue-500",
      level3: "bg-blue-600",
      level4: "bg-blue-800",
    },
    bg  : "bg-gradient-to-br from-blue-50 to-cyan-50",
    text: "text-blue-900",
  },
  {
    name  : "Sunset",
    colors: {
      empty : "bg-orange-100",
      level1: "bg-orange-300",
      level2: "bg-orange-500",
      level3: "bg-red-500",
      level4: "bg-red-700",
    },
    bg  : "bg-gradient-to-br from-orange-50 to-red-50",
    text: "text-orange-900",
  },
  {
    name  : "Purple",
    colors: {
      empty : "bg-purple-100",
      level1: "bg-purple-300",
      level2: "bg-purple-500",
      level3: "bg-purple-600",
      level4: "bg-purple-800",
    },
    bg  : "bg-gradient-to-br from-purple-50 to-pink-50",
    text: "text-purple-900",
  },
  {
    name  : "Dark",
    colors: {
      empty : "bg-gray-800",
      level1: "bg-emerald-700",
      level2: "bg-emerald-600",
      level3: "bg-emerald-500",
      level4: "bg-emerald-400",
    },
    bg  : "bg-gray-900",
    text: "text-gray-100",
  },
];
