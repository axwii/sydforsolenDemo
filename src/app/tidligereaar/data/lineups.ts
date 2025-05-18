export type DayLineup = {
  day: string;
  artists: string[];
};

export type YearLineup = {
  thursday: DayLineup;
  friday: DayLineup;
  saturday: DayLineup;
};

export const lineup2024: YearLineup = {
  thursday: {
    day: "Torsdag d. 8/8",
    artists: ["Fred again..", "Sampha", "Kenya Grace", "Charlotte Day Wilson", "JOY (Anonymous)", "AV AV AV", "Ilma", "Jersey", "Laura4evigt", "Bless You"],
  },
  friday: {
    day: "Fredag d. 9/8",
    artists: ["Jorja Smith", "Michael Kiwanuka", "André 3000: New Blue Sun LIVE", "eee gee", "Yussef Dayes", "Guldimund", "Mona Moroni", "Bette", "MRCY", "Dos Santos", "Helena Gao"],
  },
  saturday: {
    day: "Lørdag d. 10/8",
    artists: ["Jack White", "AIR", "Big Thief", "Viagra Boys", "The Kills", "Arc de Soleil", "Dina Ögon", "The Raveonettes", "NewDad", "Karoline Funder", "First Flush"],
  },
};

export const lineup2023: YearLineup = {
  thursday: {
    day: "Torsdag",
    artists: ["Bon Iver", "Unknown Mortal Orchestra", "Bonny Light Horseman", "Arooj Aftab", "Lowly", "Melody's Echo Chamber", "Bremer/McCoy"],
  },
  friday: {
    day: "Fredag",
    artists: ["Aphex Twin", "Peggy Gou", "Confidence Man", "Benny Sings", "Julie Pavon", "USSEL", "Svaneborg Kardyb", "August Høyen"],
  },
  saturday: {
    day: "Lørdag",
    artists: ["The War on Drugs", "Iggy Pop", "Warpaint", "The Walkmen", "Katinka Band", "Brimheim", "Gretel Hänlyn", "luksus"],
  },
};

export const lineup2022: YearLineup = {
  thursday: {
    day: "Torsdag",
    artists: ["Fred again..", "Sampha", "Kenya Grace", "Charlotte Day Wilson", "JOY (Anonymous)", "AV AV AV", "Ilma", "Jersey", "Laura4evigt", "Bless You"],
  },
  friday: {
    day: "Fredag",
    artists: ["Jorja Smith", "Michael Kiwanuka", "André 3000: New Blue Sun LIVE", "eee gee", "Yussef Dayes", "Guldimund", "Mona Moroni", "Bette", "MRCY", "Dos Santos", "Helena Gao"],
  },
  saturday: {
    day: "Lørdag",
    artists: ["Jack White", "AIR", "Big Thief", "Viagra Boys", "The Kills", "Arc de Soleil", "Dina Ögon", "The Raveonettes", "NewDad", "Karoline Funder", "First Flush"],
  },
}; 