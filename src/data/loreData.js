const franchiseLore = [
  {
    id: 'marvel',
    title: 'Marvel Cinematic Universe (MCU)',
    description:
      "Follow the multiverse-spanning saga of Earth's Mightiest Heroes. This guide breaks down the best viewing orders, narrative arcs, and key relationships to help you navigate over a decade of storytelling.",
    recommendedOrder: {
      release: [
        'Iron Man (2008)',
        'The Incredible Hulk (2008)',
        'Iron Man 2 (2010)',
        'Thor (2011)',
        'Captain America: The First Avenger (2011)',
        'The Avengers (2012)',
      ],
      chronological: [
        "Captain America: The First Avenger (1940s)",
        'Captain Marvel (1995)',
        'Iron Man (2010)',
        'Iron Man 2 (2011)',
        'The Incredible Hulk (2011)',
        'Thor (2011)',
        'The Avengers (2012)',
      ],
    },
    universeMap: [
      {
        title: 'Infinity Saga (Phases 1-3)',
        arcs: [
          'Origins & Assembly (Iron Man → Avengers)',
          'Fall & Redemption (Age of Ultron → Civil War)',
          'Infinity War & Endgame (Thanos Saga)',
        ],
      },
      {
        title: 'Multiverse Saga (Phase 4+)',
        arcs: [
          'Aftermath & Legacy (WandaVision, Loki, Falcon & Winter Soldier)',
          'Multiversal Threats (Spider-Man: No Way Home, Doctor Strange in the Multiverse of Madness)',
          'New Cosmic Frontiers (Eternals, Guardians Vol. 3)',
        ],
      },
    ],
    characterRelationships: [
      {
        name: 'Tony Stark ↔ Steve Rogers',
        type: 'Allies in Conflict',
        notes: 'Ideological clash in Civil War, unified in Endgame to reverse the Snap.',
      },
      {
        name: 'Thor ↔ Loki',
        type: 'Brothers / Frenemies',
        notes: "Power struggle for Asgard, eventual reconciliation before Loki's sacrifice.",
      },
      {
        name: 'Thanos ↔ The Avengers',
        type: 'Primary Antagonist',
        notes: 'Quest for the Infinity Stones forces heroes across the galaxy to unite.',
      },
    ],
    timeline: [
      { era: '1940s', events: ["Steve Rogers becomes Captain America", 'Red Skull harnesses the Tesseract'] },
      { era: '2012', events: ['Battle of New York', 'Avengers officially assemble'] },
      { era: '2018', events: ['Infinity War', 'Thanos snaps half of life'] },
      { era: '2023', events: ['Time Heist', 'Avengers Endgame and Blip reversal'] },
    ],
  },
  {
    id: 'harry-potter',
    title: 'Harry Potter Wizarding World',
    description:
      'From Hogwarts to the Ministry of Magic, explore the timeline and relationships that define the Wizarding World.',
    recommendedOrder: {
      release: [
        "Philosopher's Stone (2001)",
        'Chamber of Secrets (2002)',
        'Prisoner of Azkaban (2004)',
        'Goblet of Fire (2005)',
      ],
      chronological: [
        'Fantastic Beasts and Where to Find Them (1926)',
        'Fantastic Beasts: The Crimes of Grindelwald (1927)',
        'Fantastic Beasts: The Secrets of Dumbledore (1930s)',
        'Harry Potter Series (1991-1998 school years)',
      ],
    },
    universeMap: [
      {
        title: 'The Hogwarts Saga',
        arcs: [
          'Years 1-3: Discovery & Friendship',
          'Years 4-5: Voldemort Returns',
          'Years 6-7: Horcrux Hunt & Battle of Hogwarts',
        ],
      },
      {
        title: 'Fantastic Beasts Era',
        arcs: ["Rise of Grindelwald", "Dumbledore's Plan", 'War for the Wizarding World'],
      },
    ],
    characterRelationships: [
      {
        name: 'Harry Potter ↔ Voldemort',
        type: 'Prophecy Bound Rivals',
        notes: 'Connection through the scar and shared wand core; destiny entwined.',
      },
      {
        name: 'Dumbledore ↔ Grindelwald',
        type: 'Former Allies to Enemies',
        notes: 'Complex past love turns ideological warfare; Blood Pact complicates conflict.',
      },
      {
        name: 'The Golden Trio',
        type: 'Found Family',
        notes: 'Harry, Ron, and Hermione balance strengths to survive each year.',
      },
    ],
    timeline: [
      { era: '1920s-30s', events: ["Grindelwald's rise", 'Blood Pact revelation'] },
      { era: '1991-1997', events: ['Harry attends Hogwarts', "Formation of Dumbledore's Army"] },
      { era: '1998', events: ['Battle of Hogwarts', 'Defeat of Voldemort'] },
      { era: '2017', events: ['The Cursed Child epilogue events'] },
    ],
  },
  {
    id: 'lotr',
    title: 'The Lord of the Rings & Middle-earth',
    description:
      'Chart the Ages of Middle-earth, from the forging of the One Ring to the Return of the King.',
    recommendedOrder: {
      release: [
        'The Lord of the Rings Trilogy (2001-2003)',
        'The Hobbit Trilogy (2012-2014)',
      ],
      chronological: [
        'The Hobbit Trilogy (TA 2941)',
        'The Lord of the Rings Trilogy (TA 3018-3019)',
      ],
    },
    universeMap: [
      {
        title: 'Third Age Conflicts',
        arcs: [
          'The Quest for Erebor',
          'War of the Ring',
          'Return of the King & Departure to the West',
        ],
      },
      {
        title: 'Second Age (Rings of Power)',
        arcs: ['Forging of the Rings', 'Rise of Sauron', 'Fall of Númenor'],
      },
    ],
    characterRelationships: [
      {
        name: 'Frodo ↔ Sam',
        type: 'Unbreakable Friendship',
        notes: "Sam's loyalty keeps Frodo grounded as Ring corruption grows.",
      },
      {
        name: 'Aragorn ↔ Arwen',
        type: 'Love Across Ages',
        notes: 'Their union symbolizes hope and the reunion of Men and Elves.',
      },
      {
        name: 'Sauron ↔ Middle-earth',
        type: 'Dark Dominion',
        notes: "Sauron's influence corrupts leaders (Saruman, Denethor) and reshapes armies.",
      },
    ],
    timeline: [
      { era: 'Second Age', events: ['Rings forged', 'Sauron deceives Celebrimbor'] },
      { era: 'Third Age 2941', events: ["Bilbo's journey", 'Smaug defeated'] },
      { era: 'Third Age 3018-3019', events: ['Fellowship formed', 'Destruction of the One Ring'] },
      { era: 'Fourth Age', events: ['Aragorn crowned', 'Elves depart'] },
    ],
  },
  {
    id: 'star-wars',
    title: 'Star Wars Galaxy',
    description:
      'Lightsabers, rebels, and the Force. Navigate trilogies, spin-offs, and Disney+ series with clarity.',
    recommendedOrder: {
      release: [
        'Original Trilogy (Episodes IV-VI)',
        'Prequel Trilogy (Episodes I-III)',
        'Sequel Trilogy (Episodes VII-IX)',
        'Anthology Films & Series',
      ],
      chronological: [
        'Episode I: The Phantom Menace',
        'Episode II: Attack of the Clones',
        'The Clone Wars (Series)',
        'Episode III: Revenge of the Sith',
        'Solo: A Star Wars Story',
        'Rogue One: A Star Wars Story',
        'Episode IV: A New Hope',
        'Episode V: The Empire Strikes Back',
        'Episode VI: Return of the Jedi',
        'The Mandalorian / Book of Boba Fett',
        'Episode VII: The Force Awakens',
        'Episode VIII: The Last Jedi',
        'Episode IX: The Rise of Skywalker',
      ],
    },
    universeMap: [
      {
        title: 'The Skywalker Saga',
        arcs: ['Fall of the Republic', 'Rise of the Empire', 'Rebellion Triumphs', 'The First Order Threat'],
      },
      {
        title: 'Galaxy Beyond',
        arcs: ['The Mandalorian Era', 'Rogue One & Rebels', 'High Republic Era (books & upcoming shows)'],
      },
    ],
    characterRelationships: [
      {
        name: 'Anakin ↔ Obi-Wan',
        type: 'Master & Apprentice',
        notes: 'Brotherhood shattered by the dark side, culminating in Mustafar duel.',
      },
      {
        name: 'Leia ↔ Han ↔ Luke',
        type: 'Found Family',
        notes: 'Twins separated at birth, reunited to topple the Empire with Han.',
      },
      {
        name: 'Rey ↔ Kylo Ren',
        type: 'Dyad in the Force',
        notes: 'Linked across time and space, oscillating between opposition and alliance.',
      },
    ],
    timeline: [
      { era: '32 BBY', events: ['Naboo crisis', 'Discovery of Anakin'] },
      { era: '19 BBY', events: ['Order 66', 'Empire rises'] },
      { era: '0 BBY', events: ['Battle of Yavin', 'Destruction of the first Death Star'] },
      { era: '34 ABY', events: ['Return of the First Order', 'Rise of Skywalker conclusion'] },
    ],
  },
];

export default franchiseLore;
