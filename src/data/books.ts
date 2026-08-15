export interface Book {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  shortDescription: string;
  longDescription: string;
  themes: string[];
  genre: string;
  pages: number;
  language: string;
  readingAge: string;
  publicationDate: string;
  isbn: string;
  formats: string[];
  price: string;
  amazonUrl: string;
  sampleUrl: string;
  coverGradient: string;
  atmosphere: "warm" | "dark" | "cinematic" | "poetic";
  coverAccent: string;
}

export const books: Book[] = [
  {
    id: "love-in-modern-age",
    title: "Love in Modern Age",
    subtitle: "Understanding Love and Loss in Today's Generation",
    author: "Manazil Parvaiz",
    shortDescription:
      "A thoughtful exploration of modern relationships, love, loss, boundaries, self-respect, and the changing nature of connection in today's generation.",
    longDescription:
      "Love in Modern Age invites readers into the quiet complexities of contemporary relationships. Through reflective prose, Manazil Parvaiz examines how love is experienced, lost, and reclaimed amid shifting social norms, digital intimacy, and the quiet work of self-respect. This book speaks to those who have loved deeply, lost quietly, and are learning the language of boundaries and patience in a fast-moving world.",
    themes: [
      "Modern relationships & emotional boundaries",
      "Love and loss in the digital age",
      "Self-respect and patience",
      "Changing nature of connection",
      "Navigating vulnerability with care",
    ],
    genre: "Contemporary Non-Fiction / Relationships",
    pages: 210,
    language: "English",
    readingAge: "16+",
    publicationDate: "2024",
    isbn: "979-8-XXXXX-XXX-X",
    formats: ["Paperback", "eBook"],
    price: "₹299",
    amazonUrl: "https://www.amazon.com/dp/B0G3F4934P",
    sampleUrl: "https://www.amazon.com/dp/B0G3F4934P",
    coverGradient: "from-rose-900/80 via-burgundy/70 to-stone-900",
    atmosphere: "warm",
    coverAccent: "#6b2c3e",
  },
  {
    id: "the-mind-we-dont-show",
    title: "The Mind We Don't Show",
    subtitle: "Behind the Masks We Learn to Wear",
    author: "Manazil Parvaiz",
    shortDescription:
      "An introspective look at human behavior, hidden emotions, social masks, loyalty, and the quiet ways people think and behave beneath the surface.",
    longDescription:
      "The Mind We Don't Show peels back the layers of everyday performance. Manazil Parvaiz observes the masks we wear for survival, the fast feelings we suppress, and the quiet loyalty that persists even when words fail. This is a book for those who watch carefully, feel deeply, and wonder what remains when the performance ends.",
    themes: [
      "Social masks and hidden emotions",
      "Human behavior and observation",
      "Loyalty and pretending",
      "Fast feelings and quiet truths",
      "The space between who we show and who we are",
    ],
    genre: "Psychology / Self-Reflection",
    pages: 198,
    language: "English",
    readingAge: "16+",
    publicationDate: "2024",
    isbn: "979-8-XXXXX-XXX-X",
    formats: ["Paperback", "eBook"],
    price: "₹299",
    amazonUrl: "https://www.amazon.com/dp/B0G3L3GKDQ",
    sampleUrl: "https://www.amazon.com/dp/B0G3L3GKDQ",
    coverGradient: "from-stone-950 via-zinc-900 to-black",
    atmosphere: "dark",
    coverAccent: "#1a1614",
  },
  {
    id: "the-miles-of-silent-courage",
    title: "The Miles of Silent Courage",
    subtitle: "The Unheard Voices That Walk Miles Toward Tomorrow",
    author: "Manazil Parvaiz",
    shortDescription:
      "A cinematic and inspirational journey through struggle, perseverance, unheard voices, and the quiet courage required to keep moving forward.",
    longDescription:
      "The Miles of Silent Courage honors the unheard. It is a book about the long walks people take when no one is watching — the private battles, the quiet decisions to continue, and the strength that accumulates with every step toward tomorrow. Manazil Parvaiz gives voice to the silent courage that shapes lives from the inside out.",
    themes: [
      "Struggle and quiet perseverance",
      "Unheard voices and personal growth",
      "Finding strength through difficulty",
      "Moving forward despite silence",
      "The dignity of continuing",
    ],
    genre: "Inspirational / Personal Growth",
    pages: 224,
    language: "English",
    readingAge: "14+",
    publicationDate: "2025",
    isbn: "979-8-XXXXX-XXX-X",
    formats: ["Paperback", "eBook"],
    price: "₹349",
    amazonUrl: "#",
    sampleUrl: "#",
    coverGradient: "from-amber-950 via-stone-900 to-zinc-950",
    atmosphere: "cinematic",
    coverAccent: "#a67c5d",
  },
  {
    id: "between-then-and-now",
    title: "Between Then and Now",
    subtitle: "A Collection of Poems",
    author: "Manazil Parvaiz",
    shortDescription:
      "A gentle collection of poems about staying calm under pressure, loving without seeking approval, growing as a person, and the space between past and present.",
    longDescription:
      "Between Then and Now gathers poems that live in the quiet intervals — the moments after decisions, the breaths between who we were and who we are becoming. With elegant restraint, Manazil Parvaiz writes about calm under pressure, love without performance, and the soft work of becoming.",
    themes: [
      "Staying calm under pressure",
      "Loving without seeking approval",
      "Personal growth and reflection",
      "The space between past and present",
      "Quiet becoming",
    ],
    genre: "Poetry",
    pages: 112,
    language: "English",
    readingAge: "14+",
    publicationDate: "2025",
    isbn: "979-8-XXXXX-XXX-X",
    formats: ["Paperback", "eBook"],
    price: "₹249",
    amazonUrl: "#",
    sampleUrl: "#",
    coverGradient: "from-stone-200 via-rose-100 to-stone-100",
    atmosphere: "poetic",
    coverAccent: "#c9a9a6",
  },
];

export const getBookById = (id: string) => books.find((b) => b.id === id);
