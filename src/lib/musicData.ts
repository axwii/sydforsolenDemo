// Define Artist type
export interface Artist {
  id: number;
  name: string;
  image: string; // Main image for carousel and popup hero
  description1: string; // Text part 1
  videoEmbedUrl?: string; // Optional: URL for a video embed or just a placeholder
  description2: string; // Text part 2
  secondaryImage: string; // Second image in popup
  description3: string; // Text part 3
}

// Define DayData type
export interface DayData {
  day: string;
  description: string; // Added description field
  bgColor: string;
  textColor: string;
  sectionClass: string;
  artists: Artist[];
}

// Placeholder data - MAKE SURE TO UPDATE ALL ARTISTS with new fields: description1, videoEmbedUrl, description2, secondaryImage, description3
export const musicProgram: DayData[] = [
  {
    day: "Torsdag",
    description: "En dag dedikeret til indie og alternativ musik i mange nuancer - fra det poetiske til det eksperimenterende. Fredagen byder på stærke kunstnere og åbner festivalen med musik, der rammer både hjertet og nysgerrigheden.",
    bgColor: "bg-red",
    textColor: "text-pink",
    sectionClass: "music-section-thursday",
    artists: [
      { id: 1, name: "Artist T1 (Update Me)", image: "/images/placeholder.webp", description1: "Part 1: Flamboyant amerikansk popkomet... (Update with full text)", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
      { id: 2, name: "Artist T2", image: "/images/placeholder.webp", description1: "Detailed description for Artist T2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
      { id: 3, name: "Artist T3", image: "/images/placeholder.webp", description1: "Detailed description for Artist T3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
      { id: 4, name: "Artist T4", image: "/images/placeholder.webp", description1: "Detailed description for Artist T4. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
      { id: 5, name: "Artist T5", image: "/images/placeholder.webp", description1: "Detailed description for Artist T5. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
    ],
  },
  {
    day: "Fredag",
    description: "Hip-hop og R&B fylder dagen med rytme, flow og fællesskab. Lørdagen samler nogle af de mest markante navne på tværs af generationer og giver plads til både nye stemmer og legender.",
    bgColor: "bg-yellow",
    textColor: "text-orange",
    sectionClass: "music-section-friday",
    artists: [
      { id: 6, name: "Artist F1 (Update Me)", image: "/images/placeholder.webp", description1: "Desc 1...", videoEmbedUrl: "placeholder", description2: "Desc 2...", secondaryImage: "/images/placeholder.webp", description3: "Desc 3..." },
      { id: 7, name: "Artist F2", image: "/images/placeholder.webp", description1: "Detailed description for Artist F2. Consectetur adipiscing elit...", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
      { id: 8, name: "Artist F3", image: "/images/placeholder.webp", description1: "Detailed description for Artist F3. Sed do eiusmod tempor...", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
      { id: 9, name: "Artist F4", image: "/images/placeholder.webp", description1: "Detailed description for Artist F4. Incididunt ut labore et dolore...", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
    ],
  },
  {
    day: "Lørdag",
    description: "Rocken får frit spil med alt fra støj og kraft til det mere drømmende og dybe. Søndagen runder festivalen af med intense koncerter og kunstnere, der tør tage musikken nye steder hen.",
    bgColor: "bg-cream",
    textColor: "text-blue",
    sectionClass: "music-section-saturday",
    artists: [
      { id: 10, name: "Artist L1 (Update Me)", image: "/images/placeholder.webp", description1: "Desc 1...", videoEmbedUrl: "placeholder", description2: "Desc 2...", secondaryImage: "/images/placeholder.webp", description3: "Desc 3..." },
      { id: 11, name: "Artist L2", image: "/images/placeholder.webp", description1: "Detailed description for Artist L2. Ut enim ad minim veniam...", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
      { id: 12, name: "Artist L3", image: "/images/placeholder.webp", description1: "Detailed description for Artist L3. Quis nostrud exercitation...", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
      { id: 13, name: "Artist L4", image: "/images/placeholder.webp", description1: "Detailed description for Artist L4. Ullamco laboris nisi ut aliquip...", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
      { id: 14, name: "Artist L5", image: "/images/placeholder.webp", description1: "Detailed description for Artist L5. Ex ea commodo consequat...", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
      { id: 15, name: "Artist L6", image: "/images/placeholder.webp", description1: "Detailed description for Artist L6. Duis aute irure dolor...", videoEmbedUrl: "placeholder", description2: "Part 2: Chappell Roans vej... (Update with full text)", secondaryImage: "/images/placeholder.webp", description3: "Part 3: Chappell Roan flyttede... (Update with full text)" },
    ],
  },
];
