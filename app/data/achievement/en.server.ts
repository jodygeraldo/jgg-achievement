const categories = [
  {
    id: 'wotw',
    title: 'Wonders of the World',
    src: `/achievement/wonders_of_the_world.png`,
  },
  {
    id: 'moth',
    title: 'Memories of the Heart',
    src: `/achievement/memories_of_the_heart.png`,
  },
  {
    id: 'mts1',
    title: 'Mortal Travails: Series I',
    src: `/achievement/mortal_travails_series_i.png`,
  },
  {
    id: 'mts2',
    title: 'Mortal Travails: Series II',
    src: `/achievement/mortal_travails_series_ii.png`,
  },
  {
    id: 'mts3',
    title: 'Mortal Travails: Series III',
    src: `/achievement/mortal_travails_series_iii.png`,
  },
  {
    id: 'taoa',
    title: 'The Art of Adventure',
    src: `/achievement/the_art_of_adventure.png`,
  },
  {
    id: 'thj',
    title: "The Hero's Journey",
    src: `/achievement/the_hero's_journey.png`,
  },
  {
    id: 'mtcows',
    title: 'Mondstadt: The City of Wind and Song',
    src: `/achievement/mondstadt_the_city_of_wind_and_song.png`,
  },
  {
    id: 'lthosac',
    title: 'Liyue: The Harbor of Stone and Contracts',
    src: `/achievement/liyue_the_harbor_of_stone_and_contracts.png`,
  },
  {
    id: 'es',
    title: 'Elemental Specialist',
    src: `/achievement/elemental_specialist.png`,
  },
  {
    id: 'marksmanship',
    title: 'Marksmanship',
    src: `/achievement/marksmanship.png`,
  },
  {
    id: 'cs1',
    title: 'Challenger: Series I',
    src: `/achievement/challenger_series_i.png`,
  },
  {
    id: 'cs2',
    title: 'Challenger: Series II',
    src: `/achievement/challenger_series_ii.png`,
  },
  {
    id: 'cs3',
    title: 'Challenger: Series III',
    src: `/achievement/challenger_series_iii.png`,
  },
  {
    id: 'cs4',
    title: 'Challenger: Series IV',
    src: `/achievement/challenger_series_iv.png`,
  },
  {
    id: 'cs5',
    title: 'Challenger: Series V',
    src: `/achievement/challenger_series_v.png`,
  },
  {
    id: 'dasas1',
    title: 'Domains and Spiral Abyss: Series I',
    src: `/achievement/domains_and_spiral_abyss_series_i.png`,
  },
  {
    id: 'os1',
    title: 'Olah!: Series I',
    src: `/achievement/olah_series_i.png`,
  },
  {
    id: 'sdnbits1',
    title: 'Snezhnaya Does Not Believe in Tears: Series I',
    src: `/achievement/snezhnaya_does_not_believe_in_tears_series_i.png`,
  },
  {
    id: 'shns1',
    title: "Stone Harbor's Nostalgia: Series I",
    src: `/achievement/stone_harbor's_nostalgia_series_i.png`,
  },
  {
    id: 'mios1',
    title: 'Meetings in Outrealm: Series I',
    src: `/achievement/meetings_in_outrealm_series_i.png`,
  },
  {
    id: 'mios2',
    title: 'Meetings in Outrealm: Series II',
    src: `/achievement/meetings_in_outrealm_series_ii.png`,
  },
  {
    id: 'mios3',
    title: 'Meetings in Outrealm: Series III',
    src: `/achievement/meetings_in_outrealm_series_iii.png`,
  },
  {
    id: 'votim',
    title: 'Visitors on the Icy Mountain',
    src: `/achievement/visitors_on_the_icy_mountain.png`,
  },
  {
    id: 'arbs1',
    title: 'A Realm Beyond: Series I',
    src: `/achievement/a_realm_beyond_series_i.png`,
  },
  {
    id: 'arbs2',
    title: 'A Realm Beyond: Series II',
    src: `/achievement/a_realm_beyond_series_ii.png`,
  },
  {
    id: 'arbs3',
    title: 'A Realm Beyond: Series III',
    src: `/achievement/a_realm_beyond_series_iii.png`,
  },
  {
    id: 'itiotaes1',
    title: 'Inazuma: The Islands of Thunder and Eternity - Series I',
    src: `/achievement/inazuma_the_islands_of_thunder_and_eternity_-_series_i.png`,
  },
  {
    id: 'itiotaes2',
    title: 'Inazuma: The Islands of Thunder and Eternity - Series II',
    src: `/achievement/inazuma_the_islands_of_thunder_and_eternity_-_series_ii.png`,
  },
  {
    id: 'tcotsof',
    title: 'The Chronicles of the Sea of Fog',
    src: `/achievement/the_chronicles_of_the_sea_of_fog.png`,
  },
  {
    id: 'tfgs1',
    title: 'Teyvat Fishing Guide: Series I',
    src: `/achievement/teyvat_fishing_guide_series_i.png`,
  },
  {
    id: 'tlod',
    title: 'The Light of Day',
    src: `/achievement/the_light_of_day.png`,
  },
  {
    id: 'chasmlighter',
    title: 'Chasmlighter',
    src: `/achievement/chasmlighter.png`,
  },
  {
    id: 'strol',
    title: 'Sumeru: The Rainforest of Lore',
    src: `/achievement/sumeru_the_rainforest_of_lore.png`,
  },
]

type BaseEntry = {
  id: string
  title: string
  version: string
  requirements?: string
  commission?: boolean
}

type Entry = {
  description: string
} & BaseEntry

type EntryWithStep = {
  steps: { id: string; description: string }[]
} & BaseEntry

type CategoryEntries = {
  id: string
  entries: (Entry | EntryWithStep)[]
}

const categoryEntries: CategoryEntries[] = [
  {
    id: 'wotw',
    entries: [
      {
        id: 'wotw-0001',
        title: 'Tales of Monstrous Madness',
        description: 'Collect the entire "Toki Alley Tales" series.',
        version: '2.1',
      },
      {
        id: 'wotw-0002',
        title: 'Zoo Tycoon',
        description: 'Use the Omni-Ubiquity Net item to capture 1 wild animal.',
        version: '2.3',
        steps: [
          {
            id: 'wotw-0002-1',
            description:
              'Use the Omni-Ubiquity Net item to capture 1 wild animal.',
          },
          {
            id: 'wotw-0002-2',
            description:
              'Use the Omni-Ubiquity Net item to capture 30 wild animal.',
          },
          {
            id: 'wotw-0002-3',
            description:
              'Use the Omni-Ubiquity Net item to capture 100 wild animal.',
          },
        ],
      },
      {
        id: 'wotw-0003',
        title: "It's Yesterday Once More",
        version: '2.6',
        steps: [
          {
            id: 'wotw-0003-1',
            description:
              'Activate 10 tunes in the Serenitea Pot using the Euphonium Unbound furnishing series.',
          },
          {
            id: 'wotw-0003-2',
            description:
              'Activate 30 tunes in the Serenitea Pot using the Euphonium Unbound furnishing series.',
          },
          {
            id: 'wotw-0003-3',
            description:
              'Activate 60 tunes in the Serenitea Pot using the Euphonium Unbound furnishing series.',
          },
        ],
      },
      {
        id: 'wotw-0004',
        title: 'Overlooking View',
        description: 'Reach the very top of Qingyun Peak.',
        version: '1.0',
      },
      {
        id: 'wotw-0005',
        title: 'The Remains of the Gale',
        description: "Reach the top of the tower in Stormterror's Lair.",
        version: '1.0',
      },
      {
        id: 'wotw-0006',
        title: '"Seeds of Stories, Brought by the Wind..."',
        description: 'Reach the nameless island northeast of Mondstadt.',
        version: '1.0',
      },
      {
        id: 'wotw-0007',
        title: 'Unswerving',
        description:
          'Open the chest in the middle of the heart-shaped rock formation.',
        requirements:
          'Requires two players (Co-Op) to stand in the heart for the chest to spawn.',
        version: '1.0',
      },
      {
        id: 'wotw-0008',
        title: 'Initiating Warp Drive!',
        description: 'Pass through the time tunnel in the skies of Cape Oath.',
        version: '1.0',
      },
      {
        id: 'wotw-0009',
        title: 'Beloved of the Anemo Archon',
        description: 'Take a seat in the hands of the God Statue in Mondstadt.',
        version: '1.0',
      },
      {
        id: 'wotw-0010',
        title: 'The Best Sword in the Cemetery',
        description: 'Unlock the Tri-Seal of the Sword Cemetery.',
        version: '1.0',
        requirements: 'Complete Break the Sword Cemetery Seal.',
      },
      {
        id: 'wotw-0011',
        title: 'Hidden Palace of Guizang Formula',
        description:
          "Follow in the footsteps of immortals, and unlock the Domain's door.",
        version: '1.0',
        requirements: 'Unlock Hidden Palace of Guizang Formula.',
      },
      {
        id: 'wotw-0012',
        title: 'Cecilia Garden',
        description:
          'Return the Seelie to their rightful places and unlock the entrance to a Domain in Wolvendom.',
        version: '1.0',
        requirements: 'Unlock Cecilia Garden.',
      },
      {
        id: 'wotw-0013',
        title: 'Hidden Palace of Zhou Formula',
        description:
          'Follow the Seelie and light the torches to unlock the entrance to a domain in Wuwang Hill.',
        version: '1.0',
        requirements: 'Unlock Hidden Palace of Zhou Formula.',
      },
      {
        id: 'wotw-0014',
        title: '"If you put your heart into it..."',
        description: 'Cook 1 suspicious-tasting dish.',
        requirements:
          'Fail the cooking mini-game and produce a Suspicious-quality dish.',
        version: '1.0',
      },
      {
        id: 'wotw-0015',
        title: '"...Anyone can be a gourmet."',
        description: 'Cook 10 suspicious-tasting dishes.',
        requirements:
          'Fail the cooking mini-game and produce a Suspicious-quality dish 10 times.',
        version: '1.0',
      },
      {
        id: 'wotw-0016',
        title: 'Boared to Death',
        description: 'Be defeated by a wild boar.',
        version: '1.0',
      },
      {
        id: 'wotw-0017',
        title: 'Golden Gliding License',
        description: 'Glide a long, long distance in one go.',
        version: '1.0',
      },
      {
        id: 'wotw-0018',
        title: "It's the Same As Having Wings",
        description: 'Glide continuously for over 80s.',
        version: '1.0',
      },
      {
        id: 'wotw-0019',
        title: 'Quick As Lightning',
        description:
          'Sprint continuously (or use an alternative sprint) for over 15s.',
        version: '1.0',
      },
      {
        id: 'wotw-0020',
        title: 'Friends the World Over',
        description: 'Meet all sorts of people during your adventure.',
        requirements:
          'Achieve a total of 10,000 dialogue option interactions when speaking with NPCs.',
        version: '1.1',
      },
      {
        id: 'wotw-0021',
        title: 'Megastar in Mondstadt',
        description: 'Reach Reputation Lv. 8 in Mondstadt.',
        version: '1.1',
      },
      {
        id: 'wotw-0022',
        title: 'Legend in Liyue',
        description: 'Reach Reputation Lv. 8 in Liyue.',
        version: '1.1',
      },
      {
        id: 'wotw-0023',
        title: 'Illustrious in Inazuma',
        description: 'Reach Reputation Lv. 10 in Inazuma.',
        version: '2.0',
      },
      {
        id: 'wotw-0024',
        title: 'QUEST CLEAR',
        version: '1.1',
        steps: [
          { id: 'wotw-0024-1', description: 'Complete 10 Bounties.' },
          { id: 'wotw-0024-2', description: 'Complete 20 Bounties.' },
          { id: 'wotw-0024-3', description: 'Complete 30 Bounties.' },
        ],
      },
      {
        id: 'wotw-0025',
        title: 'Hero-in-Training',
        version: '1.1',
        steps: [
          { id: 'wotw-0025-1', description: 'Complete 10 Requests.' },
          { id: 'wotw-0025-2', description: 'Complete 20 Requests.' },
          { id: 'wotw-0025-3', description: 'Complete 30 Requests.' },
        ],
      },
      {
        id: 'wotw-0026',
        title: 'QUEST FAILED',
        description: 'Lost track of a Bounty target.',
        version: '1.1',
        requirements: 'Run out of time during a Bounty.',
      },
      {
        id: 'wotw-0027',
        title: 'The Bleak Midwinter',
        description: 'Succumb to Sheer Cold...',
        version: '1.2',
        requirements: 'Get any party member knocked out from Sheer Cold.',
      },
      {
        id: 'wotw-0028',
        title: 'Priest, Princess, and Scribe',
        description: 'Claim the treasure of the Entombed City.',
        version: '1.2',
        requirements: "Complete Dragonspine's Last Trio.",
      },
      {
        id: 'wotw-0029',
        title: "Prodigal Son's Return",
        description:
          'Follow the path of one of the members of the long-lost investigation team to where they embarked on their journey home.',
        requirements:
          'Open the chest that appears after completing Ragged Records.',
        version: '1.2',
      },
      {
        id: 'wotw-0030',
        title: 'Snow-Stored History',
        description:
          'Discover the fate of a long-lost investigation team that once explored Dragonspine.',
        version: '1.2',
        requirements: 'Complete A Land Entombed.',
      },
      {
        id: 'wotw-0031',
        title: 'Glacial Steel',
        description: 'Obtain an ancient weapon made of Starsilver.',
        version: '1.2',
        requirements: "Complete Dragonspine's Glacial Secret.",
      },
      {
        id: 'wotw-0032',
        title: 'Futile Endeavor',
        description: 'Discover the remains of many ruin machines.',
        version: '1.2',
        requirements: 'Complete Cryptic Message in Dragonspine.',
      },
      {
        id: 'wotw-0033',
        title: 'Untellable Tale',
        description: 'Make an unexpected friend in an unexpected location.',
        requirements:
          "Open the chest that appears after completing The Foxes' Affection.",
        version: '1.2',
      },
      {
        id: 'wotw-0034',
        title: 'Towering Achievement',
        description: 'Reach the summit of Dragonspine.',
        version: '1.2',
        requirements: 'Collect the Crimson Agate at the summit of Dragonspine.',
      },
      {
        id: 'wotw-0035',
        title: 'Winter Wonderland',
        description: 'Discover a Cryo Crystalfly beneath a snow pile.',
        version: '1.2',
      },
      {
        id: 'wotw-0036',
        title: 'The Hunter Becomes the Hunted',
        description: 'Be defeated by The Great Snowboar King.',
        requirements:
          'Get any party member knocked out by The Great Snowboar King.',
        version: '1.2',
      },
      {
        id: 'wotw-0037',
        title: 'Chill Out!',
        description:
          'Defeat The Great Snowboar King while the latter is in berserker mode.',
        requirements:
          'Berserker mode is when his eyes glow red and have eye trails.',
        version: '1.2',
      },
      {
        id: 'wotw-0038',
        title: 'Glutton for Goulash',
        description: 'Learn to make Goulash.',
        version: '1.2',
        requirements: 'Obtained from Ah, Fresh Meat!.',
      },
      {
        id: 'wotw-0039',
        title: 'Wrath of the Gods',
        description: 'Get struck by lightning.',
        version: '1.2',
      },
      {
        id: 'wotw-0040',
        title: 'Sky High',
        description: 'Climb the Skyfrost Nail after it has been restored.',
        requirements:
          'Collect the Crimson Agate at the top of the Skyfrost Nail after completing In the Mountains.',
        version: '1.2',
      },
      {
        id: 'wotw-0041',
        title: 'Transmutation Nuclide',
        description:
          'Use the Parametric Transformer to complete one material transmutation.',
        version: '1.3',
      },
      {
        id: 'wotw-0042',
        title: "...You could hear Paimon all along, couldn't you?",
        description: 'Even Paimon gets tired sometimes.',
        requirements:
          'Adjust the dialogue volume in the audio settings until Paimon repeats herself four times.',
        version: '1.4',
      },
      {
        id: 'wotw-0043',
        title: 'Yo-Ho-Ho, and a Bottle of Dandelion Wine',
        description: 'Climb aboard your Waverider.',
        version: '1.6',
      },
      {
        id: 'wotw-0044',
        title: 'Mighty and Illuminated Wave Rider',
        description:
          'Continuously sail your Waverider for a certain period of time.',
        version: '1.6',
      },
      {
        id: 'wotw-0045',
        title: 'Nice Boat!',
        description: 'Switch Waveriders with another player.',
        version: '1.6',
      },
      {
        id: 'wotw-0046',
        title: '...And Her Name Is the Mary Celeste',
        description: 'Suffer the destruction of your Waverider...',
        version: '1.6',
      },
      {
        id: 'wotw-0047',
        title: 'Déjà Vu!',
        description:
          'Continuously sail your Waverider at high speeds for a certain period of time.',
        version: '1.6',
      },
      {
        id: 'wotw-0048',
        title: "Yamada Go's Wooden Mallet",
        description: 'See through the illusions of the Tanuki several times.',
        version: '2.0',
        requirements: 'Find 15 disguised Bake-Danukis.',
      },
      {
        id: 'wotw-0049',
        title: '"Kujirai Art, Temari Jutsu"',
        description: 'Play a game of Temari with Kujirai.',
        requirements:
          "After completing Temaria Game, unlock Temari in Co-op Mode by successfully completing three of Kid Kujirai's Temari challenges in one of his locations.",
        version: '2.0',
      },
      {
        id: 'wotw-0050',
        title: 'Temari for Life',
        description:
          'Have another player join a game of Temari that you are hosting.',
        version: '2.0',
      },
      {
        id: 'wotw-0051',
        title: "Paimon's Lucky Day!",
        description:
          'Draw a "Great Fortune" fortune slip at the Grand Narukami Shrine.',
        version: '2.0',
      },
      {
        id: 'wotw-0052',
        title: 'Just My Luck...',
        description:
          'Draw a "Great Misfortune" fortune slip at the Grand Narukami Shrine.',
        version: '2.0',
      },
      {
        id: 'wotw-0053',
        title: 'Underground... Overrated?',
        description:
          'Sometimes, the real treasure is the things you learn along the way.',
        version: '2.0',
        requirements: "Earned during The Farmer's Treasure.",
      },
      {
        id: 'wotw-0054',
        title: 'SHUUMATSU GAIDEN',
        description:
          'Get caught up in the fight between the Shuumatsuban and the Fatui...',
        version: '2.4',
        requirements: "Complete Gendou Ringo's Strange Fortune Slips.",
      },
      {
        id: 'wotw-0055',
        title: 'Iwakura Out',
        description: 'Witness the end of the Iwakura Clan.',
        version: '2.0',
        requirements: "Complete Iwakura Art's Downfall.",
      },
      {
        id: 'wotw-0056',
        title: 'Who Let the Dogs Out',
        description: 'Set Toratarou free.',
        requirements:
          'Toratarou can be found caged in the southeast corner of Jinren Island, and freed with a Metal Key.',
        version: '2.0',
      },
      {
        id: 'wotw-0057',
        title: "You Can't Help Your Feelings",
        description: 'Help Hiromi resolve his angst.',
        version: '2.0',
        requirements: "Complete Hiromi's Watch.",
      },
      {
        id: 'wotw-0058',
        title: 'They Shall Not Grow Old',
        description: 'Pay your respects to the deceased.',
        version: '2.0',
        requirements: 'Complete Pay Your Respects.',
      },
      {
        id: 'wotw-0059',
        title: 'Oh, the Humanity!',
        description: 'Witness the fate of the Samurai.',
        version: '2.0',
        requirements: 'Complete the second part of "Fate of a Fighter."',
      },
      {
        id: 'wotw-0060',
        title: 'A Hollow Soul',
        description: "Find Washizu's lost possessions.",
        version: '2.0',
        requirements: 'Complete Sinister Instruction.',
      },
      {
        id: 'wotw-0061',
        title: 'Rise and Shrine',
        description: 'Find all the shrines on Yashiori Island.',
        requirements:
          'Interact with all of the five Shrines of Yashiori Island around Yashiori Island (not counting the Outsider Shrine).',
        version: '2.0',
      },
      {
        id: 'wotw-0062',
        title: '...And I Would Walk 3,000 More',
        description: 'Find Chouji on Tatarasuna and Narukami Island.',
        version: '2.0',
        requirements: "Complete Chouji's Travels.",
      },
      {
        id: 'wotw-0063',
        title: "A Doctor's Odyssey",
        description: 'Find out what happened to Yasumoto.',
        version: '2.0',
        requirements: "Complete Yasumoto's Last Notes.",
      },
      {
        id: 'wotw-0064',
        title: 'Knock Knock',
        description:
          'Disable the containment dome surrounding the Mikage Furnace.',
        version: '2.0',
        requirements: 'Earned during Tatara Tales (Quest).',
      },
      {
        id: 'wotw-0065',
        title: 'Kannazuka Battle Plan',
        description: 'Defeat the revived Electro Hypostasis.',
        version: '2.0',
        requirements: 'Earned during Sakura Arborism.',
      },
      {
        id: 'wotw-0066',
        title: 'Why We Fight',
        description: 'Help Masanori return to his senses.',
        version: '2.0',
        requirements: 'Complete Dreams of Sword Art.',
      },
      {
        id: 'wotw-0067',
        title: 'Oowazamono',
        description: 'Defeat Masanori with ease.',
        version: '2.0',
        requirements: 'Defeat Masanori within 30 seconds.',
      },
      {
        id: 'wotw-0068',
        title: 'Second Blooming',
        description: "Obtain Hanayama Kaoru's gift.",
        version: '2.0',
        requirements: "Complete Hanayama Kaoru's Flowery Plan.",
      },
      {
        id: 'wotw-0069',
        title: 'Thank You, Come Again',
        description: "Obtain the grand prize from Takashi's chests.",
        version: '2.0',
        requirements: "Obtain the Hamayumi diagram from Takashi's chests.",
      },
      {
        id: 'wotw-0070',
        title: 'Shocking... Positively Shocking',
        description: 'Get struck down by Balethunder...',
        version: '2.0',
      },
      {
        id: 'wotw-0071',
        title: 'Jackpot',
        description: 'Use the Kamuijima Cannon to reveal a treasure trove.',
        requirements:
          'Fire the southern-most cannon in the Kannazuka region towards the Shakkei Pavilion domain, with an elevation of 2 notches.',
        version: '2.0',
      },
      {
        id: 'wotw-0072',
        title: 'Blade of Tatara',
        description: 'Obtain the diagram of a certain weapon from the past.',
        version: '2.0',
        requirements:
          'Obtain the Katsuragikiri Nagamasa diagram from The Arsenal.',
      },
      {
        id: 'wotw-0073',
        title: 'Rest in Peace',
        description: 'End the wrath of 10 deceased samurai.',
        version: '2.0',
        requirements: 'Complete Put Them To Rest.',
      },
      {
        id: 'wotw-0074',
        title: '"That\'s What They Call a Getaway!"',
        description: 'Allow a struggling fish to get off the hook.',
        version: '2.1',
      },
      {
        id: 'wotw-0075',
        title: '"Oh, so That\'s How You Fish..."',
        description: 'Scare the fish away when casting your rod.',
        version: '2.1',
      },
      {
        id: 'wotw-0076',
        title: 'As You Wish',
        description:
          'Have your fortune told 5 times by Granny Komaki while obtaining an ideal result.',
        version: '2.1',
        requirements: "Complete all objectives in Komaki's Spiritherb Fortune.",
      },
      {
        id: 'wotw-0077',
        title: "A Mermaid's Tale",
        description: 'Help Kumi with her problem.',
        version: '2.1',
        requirements: 'Complete Solitary Sea-Beast.',
      },
      {
        id: 'wotw-0078',
        title: "A Distant Sea Shepherd's Treasure",
        description:
          'Gain the most valued treasure of a great pirate from the ramblings of drunkards.',
        version: '2.1',
        requirements: "Obtain Rinzou's Signet.",
      },
      {
        id: 'wotw-0079',
        title: 'Long John Silver',
        description: "Find all of Rinzou's buried treasure.",
        version: '2.1',
        requirements: "Check all marked spots during Rinzou's Treasure.",
      },
      {
        id: 'wotw-0080',
        title: 'Today, This Seal — Tomorrow, Watatsumi Island!',
        description: "Break the seal over the Electro Archon's shrine.",
        requirements:
          'Activate the four Electro Elemental Monuments around the rundown shrine on the eastmost islet of Watatsumi Island, in the order shown when interacting with the nearby Mysterious Pillar.',
        version: '2.1',
      },
      {
        id: 'wotw-0081',
        title: 'Palace in a Pool',
        description: 'Unlock "Palace in a Pool"',
        version: '2.1',
      },
      {
        id: 'wotw-0082',
        title: 'The Stranding of the Beagle',
        description:
          'Explore Watatsumi Island, following in the footsteps of an unknown researcher.',
        version: '2.1',
        requirements: "Find all five Researcher's Notes on Watatsumi Island.",
      },
      {
        id: 'wotw-0083',
        title: '"I am a cat named Neko."',
        description:
          'Meet Neko, the "Provisional Head Priestess of the Asase Shrine."',
        version: '2.1',
        requirements: 'Earned during Seirai Stormchasers: Part I.',
      },
      {
        id: 'wotw-0084',
        title: 'Cat in the Clouds',
        description:
          'Witness a "good thing" come lately together with Neko, the "Provisional Head Priestess of the Asase Shrine."',
        version: '2.1',
        requirements: 'Complete Neko Is a Cat: A "Good Turn" Comes Late.',
      },
      {
        id: 'wotw-0085',
        title: "A Cat's Gift",
        description:
          'Feed the kittens on Seirai Island and gain their affection.',
        version: '2.1',
        requirements: "Complete The Cat's Affection.",
      },
      {
        id: 'wotw-0086',
        title: 'It Has to Be Treasure',
        description: '"I already told you, it\'s just a picture!"',
        version: '2.1',
        requirements: 'Complete Relics of Seirai.',
      },
      {
        id: 'wotw-0087',
        title: 'On the Other Side of Homesickness',
        description: 'Help Oda Tarou take four pictures of Seirai Island.',
        version: '2.1',
        requirements: 'Complete Reminiscence of Seirai.',
      },
      {
        id: 'wotw-0088',
        title: 'This and That...',
        description: '... Try connecting them?',
        version: '2.1',
        requirements: 'Complete both Light-Up Tile Puzzles in "Seiraimaru".',
      },
      {
        id: 'wotw-0089',
        title: "Davy Jones' Locker",
        description: 'Unlock all the mechanisms onboard the "Seiraimaru."',
        version: '2.1',
      },
      {
        id: 'wotw-0090',
        title: 'Sea of Puzzles',
        description: 'Unlock one series of mechanisms on Seirai Island',
        requirements:
          'Complete all 4 Light-Up Tile Puzzles around Seirai Island, does not count those inside "Seiraimaru"',
        version: '2.1',
      },
      {
        id: 'wotw-0091',
        title: 'Great Amakumo Peak',
        description: 'Unlock the mechanism beneath Amakumo Peak',
        requirements:
          'Navigate the underground ruins underneath Amakumo Peak and reach the room with the Electroculus.',
        version: '2.1',
      },
      {
        id: 'wotw-0092',
        title: 'Traverse the Fog Door',
        description: "Get used to Tsurumi Island's odd weather.",
        version: '2.2',
        requirements: 'Earned during A Particularly Particular Author.',
      },
      {
        id: 'wotw-0093',
        title: 'Nihil Sub Caligine Novum',
        description: "Seems like you're back to square one...",
        version: '2.2',
        requirements: 'Earned during Octave of the Maushiro.',
      },
      {
        id: 'wotw-0094',
        title: "White's Illusion",
        description: 'Encounter the illusions of the ancient past',
        version: '2.2',
        requirements: 'Talk to any ghost on Tsurumi Island.',
      },
      {
        id: 'wotw-0095',
        title: '"Lovely Sights, Further Than the Eye Can See"',
        description: 'Bid farewell to your boatman.',
        version: '2.2',
        requirements: 'Complete "Boatman"\'s Task.',
      },
      {
        id: 'wotw-0096',
        title: 'A Tale of Two Cities',
        description:
          'Even Tsurumi Island seems to be built atop the wreckage of ancient ruins.',
        version: '2.2',
        requirements: 'Complete Opening Old Memories.',
      },
      {
        id: 'wotw-0097',
        title: '"My Life as an Adventurer"',
        description: 'Help Roald to complete his adventure diary.',
        version: '2.2',
        requirements: 'Complete The Saga of Mr. Forgetful.',
      },
      {
        id: 'wotw-0098',
        title: 'Light Up the Fog',
        description: 'Light up all the Stormstones on the Autake Plains.',
        version: '2.2',
        requirements: "Complete Lighting Chise's Path.",
      },
      {
        id: 'wotw-0099',
        title: '"P—Paimon ate it..."',
        description: 'Have the Maushiro that you got go missing.',
        version: '2.2',
        requirements: 'Complete A Particularly Particular Author.',
      },
      {
        id: 'wotw-0100',
        title: 'Guessing Game',
        description: 'From an even more distant past to the present day...',
        version: '2.2',
        requirements: "Earned during Tsurumi's Mountain Murals.",
      },
      {
        id: 'wotw-0101',
        title: "Thunderbird's Lineage",
        description: 'Complete all the statue challenges.',
        requirements:
          'Complete 10 puzzles originating from Mysterious Carvings on Tsurumi Island.',
        version: '2.2',
      },
      {
        id: 'wotw-0102',
        title: 'Seven Letters',
        description: 'Try to decipher the Ishine Script.',
        version: '2.2',
        requirements: 'Complete Ishine Script Deciphering.',
      },
      {
        id: 'wotw-0103',
        title: 'Moshiri Kara',
        description: 'Unlock Moshiri Kara.',
        version: '2.2',
      },
      {
        id: 'wotw-0104',
        title: 'Across the Misty River',
        description: 'You finally reach the far side of the Sea of Fog...',
        version: '2.2',
        requirements: 'Earned during The Sun-Wheel and Mt. Kanna.',
      },
      {
        id: 'wotw-0105',
        title: '"Not Flyin\' Away This Time!"',
        description: 'Use the Omni-Ubiquity Net item to capture 1 Crystalfly.',
        version: '2.3',
      },
      {
        id: 'wotw-0106',
        title: 'The Net Closes In',
        description: 'Use the Omni-Ubiquity Net item to capture 1 Finch.',
        version: '2.3',
      },
      {
        id: 'wotw-0107',
        title: 'N-Thousand Leagues Under the Sea',
        description: 'Enter Enkanomiya.',
        version: '2.4',
        requirements: "Complete The Still Water's Flow.",
      },
      {
        id: 'wotw-0108',
        title: 'Flowing Sunfire, Also Known as Marishi',
        description: 'Unlock the secret at the Sunfire Gate.',
        version: '2.4',
        requirements: 'Earned during The Entrance to Tokoyo.',
      },
      {
        id: 'wotw-0109',
        title: 'Of Sun and Moon',
        description: 'Switch between Whitenight and Evernight once.',
        version: '2.4',
        requirements:
          'Earned during The Subterranean Trials of Drake and Serpent.',
      },
      {
        id: 'wotw-0110',
        title: '"Extensive And Meticulous"',
        description: "Receive the Jibashiri's acknowledgment.",
        version: '2.4',
        requirements: "Complete Yachimatahiko's Trial.",
      },
      {
        id: 'wotw-0111',
        title: '"The Eel in Winter Sought"',
        description: "Receive the Jibashiri's acknowledgment.",
        version: '2.4',
        requirements: "Complete Yachimatahime's Trial.",
      },
      {
        id: 'wotw-0112',
        title: '"Unmatched Throughout Tokoyo"',
        description: "Receive the Jibashiri's acknowledgment.",
        version: '2.4',
        requirements: "Complete Kunado's Trial.",
      },
      {
        id: 'wotw-0113',
        title: '"Maybe Get Yourself a More Social Hobby..."',
        description: "Complete Date's labyrinth challenge.",
        version: '2.4',
        requirements: "Earned during Date's Challenge.",
      },
      {
        id: 'wotw-0114',
        title: '"If Tokoyo Ookami Knew of This..."',
        description: 'Return all the library books, and...',
        version: '2.4',
        requirements: 'Complete Collection of Dragons and Snakes.',
      },
      {
        id: 'wotw-0115',
        title: '"What Difference Does This Make?"',
        description: 'Sit at every single special spot.',
        version: '2.4',
        requirements: "Complete Reading Kabayama's Lanterns.",
      },
      {
        id: 'wotw-0116',
        title: 'The Children of God Shall Dance',
        description: 'Speak to all the Phaethon afterimages.',
        version: '2.4',
        requirements: 'Complete Sunchildren Hide and Seek.',
      },
      {
        id: 'wotw-0117',
        title: 'Light and Dark, Dusk and Dawn',
        description: 'Head to the top of the Dainichi Mikoshi.',
        version: '2.4',
        requirements: "Earned during Hyperion's Dirge.",
      },
      {
        id: 'wotw-0118',
        title: 'Step Right Up!',
        description: 'Complete the archery challenge.',
        version: '2.4',
        requirements: "Complete Akashi's Archery Challenge.",
      },
      {
        id: 'wotw-0119',
        title: 'The Ill-Starred Legacy of Iwakura',
        description: 'Return the blade of the Iwakura Master.',
        requirements:
          "Complete the final optional objective of Iwakura Art's Downfall.",
        version: '2.4',
      },
      {
        id: 'wotw-0120',
        title: 'One Key for Each Lock',
        description: 'Find all the Key Sigils.',
        version: '2.4',
        requirements: 'Collect all 59 Key Sigils found in Enkanomiya.',
      },
      {
        id: 'wotw-0121',
        title: 'The Lost Valley',
        description: 'Unlock The Lost Valley.',
        version: '2.6',
      },
      {
        id: 'wotw-0122',
        title: 'The Chasm Mining Records',
        description: 'Read all text fragments related to mining in The Chasm.',
        version: '2.6',
        requirements: 'Complete Find The Chasm Mining Records.',
      },
      {
        id: 'wotw-0123',
        title: 'People of the Valley of Life',
        description: 'Find the shriveled seed and do not eat it rashly.',
        version: '2.6',
        requirements: 'Complete Seed from the Valley of Life.',
      },
      {
        id: 'wotw-0124',
        title: 'CREDE TENEBRIS',
        description: 'Open the secret chamber in the ruins.',
        version: '2.6',
        requirements: 'Complete Locked Gate in the Nameless Ruins.',
      },
      {
        id: 'wotw-0125',
        title: 'The Nine-Word Rumor',
        description: 'Find all the secret messages.',
        version: '2.6',
        requirements: 'Complete Secret Messages in The Chasm.',
      },
      {
        id: 'wotw-0126',
        title: 'Den of Thieves',
        description: 'Find the Treasure Hoarder stash.',
        version: '2.6',
        requirements: 'Complete Lumenspar in the Den of Thieves.',
      },
      {
        id: 'wotw-0127',
        title: 'Ding Ding Ding, We Have a Winner! Again!',
        description:
          "Get three treasure chests and pass Old Chou's treasure hunt game.",
        version: '2.6',
      },
      {
        id: 'wotw-0128',
        title: 'Of the Human Heart Many Essays Written',
        description:
          'Complete all ecological surveys and gain the recommendation letter from Khedive.',
        requirements:
          'Complete Paleontological Investigation in The Chasm, Mycological Investigation in The Chasm, and Hydrological Investigation in The Chasm.',
        version: '2.6',
      },
      {
        id: 'wotw-0129',
        title: 'If Not Us, Then Who?',
        description: 'Collect the letters of the Fatui in The Chasm.',
        version: '2.6',
        requirements: 'Complete Fatui Action Logs.',
      },
      {
        id: 'wotw-0130',
        title: 'Maintain Safety Distance',
        description:
          'Use the Safe Blasting Mechanism 2156 to clear the path ahead.',
        version: '2.6',
        requirements: "Earned during The Heavenly Stone's Debris.",
      },
      {
        id: 'wotw-0131',
        title: 'Birth Pains of the Dark Fog',
        description: 'Defeat the thing that emerged from the dark fog.',
        version: '2.6',
        requirements: 'Earned during Perils in the Dark.',
      },
      {
        id: 'wotw-0132',
        title: 'The Alchemistake',
        description: 'Rescue Clitopho.',
        requirements:
          'Earned during Meeting New People... and Foiling Some Bandits.',
        version: '2.6',
      },
      {
        id: 'wotw-0133',
        title: "Valor's Afterglow",
        description: 'Where lies the true meaning of adventure?',
        requirements:
          "Read Zhiqiong's Letter after completing Valor's Afterglow: The Faint Light Remembered.",
        version: '2.6',
      },
      {
        id: 'wotw-0134',
        title: 'Not for Long-Term Consumption',
        description: 'Find Uncle He, the missing miner, in The Chasm.',
        version: '2.6',
        requirements:
          'Interact with the work handbook during The Missing Miner.',
      },
      {
        id: 'wotw-0135',
        title: 'The Mushroom That Asks Too Much',
        description: "Complete Xamaran's commission in The Chasm.",
        version: '2.6',
        requirements: "Complete Dimming Mushroom's Call for Help.",
      },
      {
        id: 'wotw-0136',
        title: 'The Millelith Shall Never Be Moved',
        description:
          'Collect all the offerings the Millelith left behind and obtain the treasure.',
        version: '2.6',
        requirements: 'Complete The Millennial Mountains.',
      },
      {
        id: 'wotw-0137',
        title: 'Jack of No Trades',
        description:
          'Get to know the story of Tang Wuchou, hero of the cliffs.',
        version: '2.6',
        requirements: "Complete A Cliff-Side Hero's Past.",
      },
      {
        id: 'wotw-0138',
        title: 'Well Done, Stierlitz!',
        description: "Help Yanbo complete the Millelith's mission.",
        version: '2.6',
        requirements: 'Complete Undetected Infiltration.',
      },
      {
        id: 'wotw-0139',
        title: 'Yet the Darkness Did Not Overcome It...',
        description:
          "Use the Lumenstone's Blooming Light to clear the crystallized darkness on an Oozing Concretion for the first time.",
        version: '2.6',
        requirements: 'Use the Lumenstone Adjuvant on an Oozing Concretion.',
      },
      {
        id: 'wotw-0140',
        title: '"...Smells Like Asphalt."',
        description:
          'Be brought down by the contaminants within the black mud for the first time.',
        version: '2.6',
        requirements: 'Get any party member knocked out from Dark Mud.',
      },
      {
        id: 'wotw-0141',
        title: '"All We Need Is Some Firewood and Some Vinegar..."',
        description: 'There is not just one secret path to the surface.',
        requirements:
          'Find the passageway between the Underground Mines and The Chasm and open the door.',
        version: '2.6',
      },
      {
        id: 'wotw-0142',
        title: 'The Tome of Taliesin',
        description: "Obtain Taliesin's gift.",
        version: '2.6',
        requirements: 'Complete Tell a Tale for Taliesin.',
      },
      {
        id: 'wotw-0143',
        title: 'Light Up the Dark',
        description: 'Send forth some light.',
        requirements:
          'Interact with the Lumenlamp in The Chasm: Underground Mines.',
        version: '2.6',
      },
      {
        id: 'wotw-30-0032',
        title: "Nature's Infinite Wit",
        description: 'Reach Reputation Lv. 10 in Sumeru.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0033',
        title: 'For Meritorious Service',
        description: 'Offer help to many Aranara in the forest.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0034',
        title: 'Portal of Marvels',
        description: 'Truly step into "the world of the Aranara"...',
        version: '3.0',
      },
      {
        id: 'wotw-30-0035',
        title: 'Perched Between Dream and Reality',
        description: 'Enter Vanarana in reality',
        version: '3.0',
      },
      {
        id: 'wotw-30-0036',
        title: 'Music of the Forest',
        description:
          'You seem to have the potential to be a "song gatherer"...',
        version: '3.0',
      },
      {
        id: 'wotw-30-0037',
        title: 'A Leisurely Journey',
        description: 'One should not miss out on the scenery along the way.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0038',
        title: 'Glittering Melody',
        description:
          '...They will carry this melody for generation after generation.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0039',
        title: 'The Tale of the Forest',
        description: 'Hear 5 tales of the forest from Aravinay.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0040',
        title: 'A Once-Emerald Nursery',
        description: 'Enter the Vanarana of yesteryear.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0041',
        title: 'The End of Annihilation',
        description: "Defeated Marana's Avatar, and then...",
        version: '3.0',
      },
      {
        id: 'wotw-30-0042',
        title: 'Though to the Earth I May Return...',
        description: '...My Dreams and Desires Shall Not Adjourn.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0043',
        title: 'Ever an Outcast in the Forest',
        description: "Now it's all settled.",
        version: '3.0',
      },
      {
        id: 'wotw-30-0044',
        title: 'Master Chef: Vanarana',
        description: `Help Arapacati's brothers with their "Supreme Delicacies."`,
        version: '3.0',
      },
      {
        id: 'wotw-30-0045',
        title: 'Open Sesame!',
        description:
          "Use the secret code to enter the Fatui's hidden encampment",
        version: '3.0',
      },
      {
        id: 'wotw-30-0046',
        title: 'A Conversation with the Treasure Chest Owner',
        description: `Find the Aranara's "Treasure Chest"`,
        version: '3.0',
      },
      {
        id: 'wotw-30-0047',
        title: 'Vamadha-Go-Round',
        description: 'Turn every Vamadha that holds a hidden treasure chest.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0048',
        title: 'In the Name of Anfortas',
        description: 'Visit the place where the heroes met their end.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0049',
        title: 'Call of the Nameless City',
        description: 'Quiet the mysterious parchment.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0050',
        title: 'Walking with Water and Wind',
        description: 'Complete "Until Vana is Healed."',
        version: '3.0',
      },
      {
        id: 'wotw-30-0051',
        title: '...Let Me Fade With Memory',
        description: 'Complete "Vimana Agama."',
        version: '3.0',
      },
      {
        id: 'wotw-30-0052',
        title: 'Now Let Time Resume',
        description: "Complete Aradasha's unfinished business.",
        version: '3.0',
      },
      {
        id: 'wotw-30-0053',
        title: 'Please Play Safely',
        description: 'Play with the Aranara in the forest.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0054',
        title: 'Eternal Sustenance',
        description:
          'Go with Varsha to visit the Aranara nursery in real life.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0055',
        title: 'When the Dreams Bloom',
        description: 'Have the Viparyas bloom throughout the Aranara nursery.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0056',
        title: 'A Walnut Tree Amidst the Gardens',
        description: 'Ask Khayyam about the lost memories.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0057',
        title: 'Sumeru Monster Ecology Survey',
        description:
          'Complete your task of protecting those who dwell in the forests.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0058',
        title: 'As the Lion Searched for Courage...',
        description: `Find Arashakun's lost "courage."`,
        version: '3.0',
      },
      {
        id: 'wotw-30-0059',
        title: 'Summit of Wisdom',
        description: 'Reach the highest point in Sumeru City.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0060',
        title: 'Explorer',
        description:
          'Use Catalyze reactions to recover what should have been lost.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0061',
        title: 'The Jasmines Whisper, the Pomegranates Are Glad',
        description: 'Complete "Agnihotra Sutra."',
        version: '3.0',
      },
      {
        id: 'wotw-30-0062',
        title: 'Swift as the Wind',
        description: 'Activate three wind currents in Mawtiyima Forest.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0063',
        title: 'The Rule of Three',
        description:
          'Find three lost musical scores and obtain three Vasoma Fruits.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0064',
        title: 'The Bitter Fruit of Dreams',
        description: 'Use Kusava for the first time.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0065',
        title: 'The Rain Seeps Into the Soil',
        description: `Complete "Varuna Gatha."`,
        version: '3.0',
      },
      {
        id: 'wotw-30-0066',
        title: 'They Enter the Flow',
        description:
          'Use your Kamera to capture the moment when the Varunastra starts up.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0067',
        title: 'Weather Control Activated',
        description:
          'Control the Varuna Contraption to change the weather in Apam Woods.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0068',
        title: 'Oh, Frabjous Day!',
        description:
          'Find the secret treasure by following the clues in the chests.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0069',
        title: "Kara's Child",
        description: 'Drift freely in the forest.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0070',
        title: 'The Lengthy Reunion',
        description:
          'Follow the Sumpter Beast that has lost its owner until it finishes its journey.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0071',
        title: `"I've Got It! I've Got It!"`,
        description: 'Find and solve a series of riddles in Sumeru City.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0072',
        title: 'Song of Night and Dawn',
        description: '...We shall meet each other somewhere in the future.',
        version: '3.0',
      },
      {
        id: 'wotw-0144',
        title: 'Juggernaut',
        description:
          "Crush all of a Geo Hypostasis' Rock Pillars of Revival before it can be revived.",
        version: '1.0',
      },
      {
        id: 'wotw-0145',
        title: 'The PRISM Program',
        description:
          "Break all of an Electro Hypostasis' Revival Prisms before it can be revived.",
        version: '1.0',
      },
      {
        id: 'wotw-0146',
        title: '"That\'s one big Crystalfly"',
        description:
          "Absorb all of an Anemo Hypostasis' Wind Crystals before it can be revived.",
        version: '1.0',
      },
      {
        id: 'wotw-0147',
        title: '"...Not indicative of final product"',
        description:
          'Defeat an Anemo Hypostasis that has undergone 4 types of Elemental Conversions.',
        requirements:
          "Combine an Anemo Hypostasis' tornadoes with four elements and defeat it.",
        version: '1.0',
      },
      {
        id: 'wotw-0148',
        title: 'The Bigger They Are...',
        description: 'Paralyze a Ruin Guard by attacking its weak point.',
        version: '1.0',
      },
      {
        id: 'wotw-0149',
        title: 'Through Pass',
        description:
          'Knock a Pyro Slime out of the hands of a Hilichurl Grenadier.',
        version: '1.0',
      },
      {
        id: 'wotw-0150',
        title: 'Dolorous Stroke',
        description:
          'Defeat an opponent by Shattering the ice they are trapped in.',
        version: '1.0',
      },
      {
        id: 'wotw-0151',
        title: 'Hilichurl Champion',
        description:
          'Defeat a Stonehide Lawachurl before its Infused Form can expire.',
        requirements:
          'Defeat a Stonehide Lawachurl while its Geo Armor is still active.',
        version: '1.0',
      },
      {
        id: 'wotw-0152',
        title: 'Bon Appétit',
        description: 'Have 4 party members in the Full state at the same time.',
        version: '1.0',
      },
      {
        id: 'wotw-0153',
        title: 'Purveyor of Punishment',
        version: '1.0',
        steps: [
          { id: 'wotw-0153-1', description: 'Deal over 5000 CRIT DMG.' },
          { id: 'wotw-0153-2', description: 'Deal over 20000 CRIT DMG.' },
          { id: 'wotw-0153-3', description: 'Deal over 50000 CRIT DMG.' },
        ],
      },
      {
        id: 'wotw-0154',
        title: 'Fantastic Four',
        description:
          'Complete a Domain using 4 characters of the same Elemental Type.',
        version: '1.0',
      },
      {
        id: 'wotw-0155',
        title: '"Take That, You Overblown Mist Flower!"',
        description:
          'Defeat a Cryo Regisvine without destroying its corolla weak point.',
        version: '1.1',
      },
      {
        id: 'wotw-0156',
        title: '"That Was Blooming Hot"',
        description:
          'Defeat a Pyro Regisvine without destroying its corolla weak point.',
        version: '1.1',
      },
      {
        id: 'wotw-0157',
        title: 'Outlander Vs. Outlander',
        description:
          'Defeat Childe without any party member being marked and then hit by his follow-up attack.',
        version: '1.1',
      },
      {
        id: 'wotw-0158',
        title: 'Penalty',
        description:
          'There are places where one cannot simply dig Pyro Slimes out of the ground...',
        requirements:
          'Make a Hilichurl Grenadier attempt to dig out a Pyro Slime in the water.',
        version: '1.3',
      },
      {
        id: 'wotw-0159',
        title: 'Force Field Erosion',
        description: "Destroy the Electro Hypostasis' barrier.",
        requirements:
          'Use Elemental Reactions to destroy the barrier created by the Electro Hypostasis.',
        version: '1.4',
      },
      {
        id: 'wotw-0160',
        title: '"...Lizard-Spock"',
        description:
          'Have one character get hit by all three parts of the rock-paper-scissors attack consecutively.',
        version: '1.3',
      },
      {
        id: 'wotw-0161',
        title: 'A House Ill-Founded',
        description:
          'Cause the same Geo Hypostasis to fall three times by destroying the Basalt Column that it is on.',
        version: '1.3',
      },
      {
        id: 'wotw-0162',
        title: 'None Stand Secure',
        description:
          'Force the Geo Hypostasis into its revival state without destroying any Basalt Columns.',
        version: '1.3',
      },
      {
        id: 'wotw-0163',
        title: 'Back With the Wind',
        description:
          'Absorb at least 10 Elemental Orbs created by the Anemo Hypostasis in a single battle.',
        version: '1.3',
      },
      {
        id: 'wotw-0164',
        title: 'Core Meltdown',
        description: 'Destroy the Blazing Seed created by a Pyro Regisvine.',
        version: '1.3',
      },
      {
        id: 'wotw-0165',
        title: 'Knockout',
        description:
          "Destroy a Cryo Regisvine's corolla weak point while it is performing its rotary spray attack.",
        version: '1.3',
      },
      {
        id: 'wotw-0166',
        title: '"...Till Debt Do Us Part"',
        description:
          'Defeat a Fatui Agent while they are in their stealth mode.',
        version: '1.3',
      },
      {
        id: 'wotw-0167',
        title: '"Melting... Away..."',
        description:
          'Defeat a Cryo Cicin Mage while all her Cryo Cicins are currently active.',
        version: '1.3',
      },
      {
        id: 'wotw-0168',
        title: 'And You Call Yourself One of the Four Winds',
        description:
          'Defeat an Anemoboxer Vanguard after having triggered all of their Elemental Absorptions.',
        requirements:
          "Combine a Fatui Skirmisher - Anemoboxer Vanguard's shield with Pyro, Hydro, Electro, and Cryo before defeating it.",
        version: '1.3',
      },
      {
        id: 'wotw-0169',
        title: 'Touch and Go',
        description: "Use a shield to counter a Geovishap's charging attack.",
        version: '1.3',
      },
      {
        id: 'wotw-0170',
        title: 'Deflection!',
        description:
          "Use a shield to counter a Primo Geovishap's Primordial Shower attack.",
        requirements:
          "The shield cannot be Geo or a matching type to Primo Geovishap's element.",
        version: '1.3',
      },
      {
        id: 'wotw-0171',
        title: 'You Can Have Those Back!',
        description:
          "Use a shield of a matching type (or a Geo shield) to counter a Geovishap's Primordial Shower attack and deal immense DMG.",
        version: '1.3',
      },
      {
        id: 'wotw-0172',
        title: 'Sternest of Souls',
        description: 'Defeat Azhdaha in all its forms.',
        requirements:
          'Defeat Azhdaha in all 4 of its elemental combinations: Electro/Hydro, Cryo/Pyro, Cryo/Hydro, and Electro/Pyro.',
        version: '1.5',
      },
      {
        id: 'wotw-0173',
        title: '"...A Single Night\'s Work"',
        description: 'Defeat a Cryo Hypostasis that is in a weakened state.',
        version: '1.5',
      },
      {
        id: 'wotw-0174',
        title: '"Knee-Deep Snow..."',
        description: 'Defeat a Cryo Hypostasis that has revived three times.',
        version: '1.5',
      },
      {
        id: 'wotw-0175',
        title: 'If I Run Fast Enough...',
        description:
          "Defeat a Maguu Kenki without being hit by its phantom's attacks.",
        version: '2.0',
      },
      {
        id: 'wotw-0176',
        title: 'In This Solemn Matter Let No One Interfere!',
        description:
          'Defeat a Maguu Kenki without triggering its "Oushi no Omote" parry.',
        version: '2.0',
      },
      {
        id: 'wotw-0177',
        title: "Fine, I'll Do It Myself",
        description:
          'Defeat a Primo Geovishap without reflecting its Primordial Shower.',
        version: '2.0',
      },
      {
        id: 'wotw-0178',
        title: 'Burned Yourself, Did You?',
        description: 'Defeat a Pyro Hypostasis that has reignited twice.',
        version: '2.0',
      },
      {
        id: 'wotw-0179',
        title: 'Smells like Animal Spirit!',
        description:
          'Defeat a Pyro Hypostasis after being hit by its mimetic 3-hit combo.',
        version: '2.0',
      },
      {
        id: 'wotw-0180',
        title: 'Core Breakthrough',
        description:
          'Defeat a Perpetual Mechanical Array after paralyzing all 4 types of its Ruin Sentinels.',
        version: '2.0',
      },
      {
        id: 'wotw-0181',
        title: 'Could All Uninvolved Machinery Please Leave Immediately?',
        description:
          'Defeat the Perpetual Mechanical Array without defeating any of its Ruin Sentinels.',
        version: '2.0',
      },
      {
        id: 'wotw-0182',
        title: 'Fight Fire With Fire',
        description:
          'Defeat a Kairagi: Fiery Might while their weapon is infused with Pyro.',
        version: '2.0',
      },
      {
        id: 'wotw-0183',
        title: 'Ride the Lightning',
        description:
          'Defeat a Kairagi: Dancing Thunder while their weapon is infused with Electro.',
        version: '2.0',
      },
      {
        id: 'wotw-0184',
        title: 'I Hear Thunder...',
        description:
          'Be struck by the lightning called down by a Crackling Axe Mitachurl...',
        version: '2.0',
        requirements:
          "Be struck by a Crackling Axe Mitachurl's thunder attack.",
      },
      {
        id: 'wotw-0185',
        title: 'Dry Clean',
        description:
          'Defeat the Hydro Hypostasis without destroying a single one of its Water Droplets (except when it is restoring HP.)',
        version: '2.1',
      },
      {
        id: 'wotw-0186',
        title: 'Bio-Oceanic Weapon',
        description:
          'Be hit by a certain animal created by the Hydro Hypostasis...',
        version: '2.1',
        requirements: 'Get hit by Hydro Hypostasis\' "Dolphin Dive" attack.',
      },
      {
        id: 'wotw-0187',
        title: 'Love and Non-Communication',
        description:
          'Defeat a Thunder Manifestation without ever being locked onto.',
        version: '2.1',
      },
      {
        id: 'wotw-0188',
        title: 'Thunder Fall',
        description: 'Defeat a Thunder Manifestation while it is in flight.',
        requirements:
          'Defeat Thunder Manifestation while it is performing its "Dive Bomb" attack.',
        version: '2.1',
      },
      {
        id: 'wotw-0189',
        title: 'Icy Rivers, Crimson Witch',
        description:
          'Defeat Signora without destroying either her Hearts of Flame or Eyes of Frost.',
        version: '2.1',
      },
      {
        id: 'wotw-0190',
        title: "Inugami's End",
        description: 'Destroy two Rifthound Skulls within a short time.',
        requirements:
          'Destroy the skulls created by the Golden Wolflord when it creates a shield.',
        version: '2.5',
      },
      {
        id: 'wotw-0191',
        title: 'Hard Landing',
        description: 'Bring a climbing Bathysmal Vishap down.',
        requirements:
          'Destroy a wall when one of the Coral Defenders is clinging onto it.',
        version: '2.5',
      },
      {
        id: 'wotw-0192',
        title: 'Impeccable Judgment',
        description: 'Only shoot down your real opponent...',
        requirements:
          'Attack only the real Magatsu Mitake Narukami no Mikoto when it creates its own copies. The real one sends X-shaped slashes at the player.',
        version: '2.5',
      },
      {
        id: 'wotw-0193',
        title: 'Beware of Angry Dog',
        description: 'Defeat a roaring Rifthound.',
        version: '2.5',
      },
      {
        id: 'wotw-0194',
        title: 'Basically Harmless',
        description: 'Defeat a Specter that has not accumulated any Fury.',
        version: '2.5',
      },
      {
        id: 'wotw-0195',
        title: 'Overflowing Light',
        description:
          'Destroy 2 Oozing Concretions with 1 Blooming Light during a battle against the Ruin Serpent.',
        version: '2.6',
      },
      {
        id: 'wotw-30-0027',
        title: '"Han Always Shoots First..."',
        description: "...So don't bring a knife to a gunfight.",
        version: '3.0',
      },
      {
        id: 'wotw-30-0028',
        title: 'Opportunistic Gain',
        description: 'Watch the infighting between the Fungi.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0029',
        title: '"Get Over Here!"',
        description: 'Shoot down a flying Fungus.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0030',
        title: 'When Autumn and Dew Meet',
        description:
          'Let the Electro Regisvine perform its charged electrical collision.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0031',
        title: 'Three Strikes',
        description:
          'Witness the three powerful abilities used by the activated Jadeplume Terrorshroom.',
        version: '3.0',
      },
      {
        id: 'wotw-0196',
        title: 'The End of the Beginning',
        description: 'Complete the Mondstadt Archon Quests.',
        version: '1.0',
        requirements: 'Complete Ending Note.',
      },
      {
        id: 'wotw-0197',
        title: 'The Outlander Who Caught the Wind',
        description: 'Complete "The Outlander Who Caught the Wind."',
        version: '1.0',
      },
      {
        id: 'wotw-0198',
        title: 'For a Tomorrow Without Tears',
        description: 'Complete "For a Tomorrow Without Tears."',
        version: '1.0',
      },
      {
        id: 'wotw-0199',
        title: 'Song of the Dragon and Freedom',
        description: 'Complete "Song of the Dragon and Freedom."',
        version: '1.0',
      },
      {
        id: 'wotw-0200',
        title: 'Let the Wind Lead',
        description: 'Obtain the power of Anemo.',
        version: '1.0',
        requirements: "Complete Bird's Eye View.",
      },
      {
        id: 'wotw-0201',
        title: '...Or a New Storm?',
        description: 'Banish the dragon attacking Mondstadt.',
        version: '1.0',
        requirements: 'Complete Dragon Storm.',
      },
      {
        id: 'wotw-0202',
        title: 'Knighthood Excellence',
        description: 'Become an Honorary Knight of Favonius.',
        version: '1.0',
        requirements: 'Complete Shadow Over Mondstadt.',
      },
      {
        id: 'wotw-0203',
        title: 'Knights and Their Knotty Issues',
        description:
          "Fail to borrow the Holy Relic... but learn of the Knights' dilemma.",
        version: '1.0',
        requirements: 'Complete Wild Escape.',
      },
      {
        id: 'wotw-0204',
        title: 'Winds Change Their Course',
        description: 'Be rescued by Dvalin.',
        version: '1.0',
        requirements: 'Complete A Long Shot.',
      },
      {
        id: 'wotw-0205',
        title: 'Of the Land Amidst Monoliths',
        description: 'Complete "Of the Land Amidst Monoliths"',
        version: '1.0',
      },
      {
        id: 'wotw-0206',
        title: 'Farewell, Archaic Lord',
        description: 'Complete "Farewell, Archaic Lord."',
        version: '1.0',
      },
      {
        id: 'wotw-0207',
        title: 'Outlandish Behavior',
        description:
          'Be rescued by an outsider at the "tourist spot that locals don\'t go to."',
        version: '1.0',
        requirements: 'Complete Rite of Descension.',
      },
      {
        id: 'wotw-0208',
        title: 'Silly-Billy Churlish Ghoul',
        description: 'Agree to play with Dusky Ming.',
        version: '1.0',
        requirements: 'Complete Wangshu.',
      },
      {
        id: 'wotw-0209',
        title: 'That Smells Divine',
        description: 'Figure out which perfume Rex Lapis is fond of.',
        version: '1.0',
        requirements: 'Complete Three Poignant Perfumes.',
      },
      {
        id: 'wotw-0210',
        title: "It's Bigger on the Inside",
        description: "Clean Madame Ping's teapot.",
        version: '1.0',
        requirements: 'Complete The Realm Within.',
      },
      {
        id: 'wotw-0211',
        title: 'Ticked, Tacked, and Towed',
        description:
          'Commission others to finish your work, unfettered by such things as Mora.',
        version: '1.0',
        requirements: 'Complete Downtown.',
      },
      {
        id: 'wotw-0212',
        title: 'Respecting Cultural Heritage',
        description:
          'You failed to find the Cocogoat... but manage to repair a mechanism.',
        version: '1.0',
        requirements: 'Earned during Guizhong.',
      },
      {
        id: 'wotw-0213',
        title: 'The Long Goodbye',
        description: 'Prepare everything necessary for the Rite of Parting.',
        version: '1.0',
        requirements: 'Complete Guizhong.',
      },
      {
        id: 'wotw-0214',
        title: 'Icing on the Slime',
        description: 'Create a box of lovely, jubbly Sugar-Frosted Slimes.',
        version: '1.1',
        requirements: 'Earned during Equilibrium.',
      },
      {
        id: 'wotw-0215',
        title: "Sky's the Limit",
        description: 'Reach Liyue\'s "mansion in the sky".',
        version: '1.1',
        requirements: 'Earned during Equilibrium.',
      },
      {
        id: 'wotw-0216',
        title: 'Lily Loves Music',
        description: 'Sing a song of Mondstadt to the Glaze Lilies...',
        version: '1.1',
        requirements: 'Earned during Solitary Fragrance.',
      },
      {
        id: 'wotw-0217',
        title: "I'll Let You Off... This Time",
        description: 'Defeat Childe.',
        version: '1.1',
        requirements: 'Complete Heart of Glaze.',
      },
      {
        id: 'wotw-0218',
        title: 'Derailed',
        description: 'Defeat the Overlord of the Vortex.',
        version: '1.1',
        requirements: 'Complete Turning Point.',
      },
      {
        id: 'wotw-0219',
        title: 'Final Farewell',
        description: 'Take part in the Rite of Parting.',
        version: '1.1',
        requirements: 'Complete The Fond Farewell.',
      },
      {
        id: 'wotw-0220',
        title: 'A New Star Approaches',
        description: 'Complete "A New Star Approaches".',
        version: '1.1',
      },
      {
        id: 'wotw-0221',
        title: 'Pirates! Argh!',
        description:
          'Play a game of pirates with Little Lulu, Little Fei, and Little Meng.',
        requirements:
          'Complete all 3 variations of Pirate Invasion, in Liyue Harbor!',
        version: '1.0',
        commission: true,
      },
      {
        id: 'wotw-0222',
        title: 'A Nourishing Friendship',
        description: 'Complete "Fishing Jiangxue" and "Yanxiao\'s Dilemma."',
        version: '1.0',
        commission: true,
      },
      {
        id: 'wotw-0223',
        title: 'Love Is All Around',
        description:
          'In "Good Sign," help Zhihua find 5 signs that romance is coming his way.',
        requirements:
          'See that Granny Shan has good business, leave the pigeons alone, leave the dogs alone, leave the cat and fish alone, and leave the leaves alone.',
        version: '1.0',
        commission: true,
      },
      {
        id: 'wotw-0224',
        title: 'For the Love of Godwin',
        description: 'Finish "Whispers in the Wind" 5 times.',
        version: '1.0',
        commission: true,
      },
      {
        id: 'wotw-0225',
        title: 'Level Up',
        description: "Help Huai'an repair Wangshu Inn's broken bridge.",
        version: '1.0',
        requirements: 'Complete the 2nd part of Stairway to Wangshu.',
        commission: true,
      },
      {
        id: 'wotw-0226',
        title: "Beginner's Luck",
        description: 'Select the highest-value jade on your first try.',
        version: '1.0',
        requirements: 'Can be earned during Diamond in the Rough...',
        commission: true,
      },
      {
        id: 'wotw-0227',
        title: 'Taking Responsibility for Your Actions',
        description: 'Apologize to Timmie.',
        version: '1.0',
        requirements: 'Complete Sorry, Timmie!',
        commission: true,
      },
      {
        id: 'wotw-0228',
        title: 'Making Do',
        description: 'Only bring materials for a training dummy to Herman.',
        version: '1.0',
        requirements: 'Destroy the dummy in The Limitations of an Adventurer.',
        commission: true,
      },
      {
        id: 'wotw-0229',
        title: '"Dear Daddy..."',
        description: "Hear Timmie's story.",
        version: '1.2',
        requirements: "Complete A Boy's Letter.",
        commission: true,
      },
      {
        id: 'wotw-0230',
        title: 'Marvelous Medicine',
        description: "Cure Anna's illness.",
        version: '1.0',
        requirements: 'Complete Recuperating From a Severe Illness.',
        commission: true,
      },
      {
        id: 'wotw-0231',
        title: 'In the Name of Favonius',
        description: "Witness Jilliana's tale.",
        version: '1.0',
        requirements: "Complete Vile's version of A Surprise Gift.",
        commission: true,
      },
      {
        id: 'wotw-0232',
        title: 'Scholarly Pretensions',
        description: 'Complete "The Lost Relic" and "A Little Raid."',
        version: '1.0',
        commission: true,
      },
      {
        id: 'wotw-0233',
        title: 'Poet Vs. Paycheck',
        description:
          "Complete So-called Work and receive Linling's poetry anthology.",
        version: '1.0',
        requirements: 'Complete So-Called Work.',
        commission: true,
      },
      {
        id: 'wotw-0234',
        title: "All's Well That Ends Well",
        description: 'Complete the quest "For Old Time\'s Sake."',
        version: '1.1',
        commission: true,
      },
      {
        id: 'wotw-0235',
        title: 'This Novel Is Amazing!',
        description: "Steal a peek at Chang the Ninth's draft manuscript.",
        version: '1.0',
        requirements: 'Take a peek at the book in A Novel Plan.',
        commission: true,
      },
      {
        id: 'wotw-0236',
        title: 'Open to Interpretation',
        description: 'Ruin 4 signs of an imminent romance.',
        requirements:
          'In Good Sign, attack the pigeons, scare away the dogs, collect the fish, and burn or blow away the leaves.',
        version: '1.0',
        commission: true,
      },
      {
        id: 'wotw-0237',
        title: 'Get Your Own Emergency Food!',
        description: 'Consume the food during "Food Delivery."',
        version: '1.0',
        commission: true,
      },
      {
        id: 'wotw-0238',
        title: 'Hidden in Plain Sight',
        description: 'Help Sango and Ryuuji solve the case.',
        version: '2.0',
        requirements: 'Complete Bantan Sango Case File: Case-Closing Time.',
        commission: true,
      },
      {
        id: 'wotw-0239',
        title: 'Is There But One Truth...?',
        description: "Witness Ryuuji's tale.",
        version: '2.2',
        requirements: 'Complete Bantan Sango Case File: Cleanup Work.',
        commission: true,
      },
      {
        id: 'wotw-0240',
        title: 'Liyue Ichiban',
        description: 'Heal Tang Wen with some delicious dishes.',
        version: '2.0',
        requirements: 'Complete Absolutely Unique Delicacy.',
        commission: true,
      },
      {
        id: 'wotw-0241',
        title: 'Boom Shaka-Laka, More Boom-Shaka-Laka',
        description: 'Consult Xiangling regarding special cooking methods.',
        requirements:
          'Find Xiangling during The Gourmet Supremos: Breakthrough Thinking.',
        version: '2.0',
        commission: true,
      },
      {
        id: 'wotw-0242',
        title: 'Meal For Two',
        description: 'Help both Xudong and Kamei Munehisa make a dish once.',
        requirements:
          'Let Xudong and Kamei Munehisa finish their dishes first once each in The Gourmet Supremos: Cook-Off. This does not require choosing both of their versions.',
        version: '2.0',
        commission: true,
      },
      {
        id: 'wotw-0243',
        title: 'A Question of Diet',
        description: 'Help Parvaneh proofread all the recipes.',
        requirements:
          'Answer all three questions correctly in The Gourmet Supremos: Foodie Quiz.',
        version: '2.0',
        commission: true,
      },
      {
        id: 'wotw-0244',
        title: 'Samurice',
        description:
          'Help Kamei Munehisa collect ingredients from the camps on either side.',
        requirements:
          'Clear both of the camps in The Gourmet Supremos: Extreme Cookery.',
        version: '2.0',
        commission: true,
      },
      {
        id: 'wotw-0245',
        title: '"Sorry for the Trouble!"',
        description:
          'Receive the complaint that Konda Densuke lodges in "Post-Sale Service".',
        version: '2.0',
        requirements: 'Collect all 10 mushrooms during Post-Sale Service.',
        commission: true,
      },
      {
        id: 'wotw-0246',
        title: 'Samurai Gourmet',
        description:
          "Witness Kamei Munehisa's induction into the Gourmet Supremos.",
        requirements:
          'Complete The Gourmet Supremos: The Importance of Eating Well.',
        version: '2.0',
      },
      {
        id: 'wotw-0247',
        title: 'Hello...! Anyone in here...?',
        description: 'Discover a secret passageway in Ritou.',
        version: '2.0',
        requirements: 'Start The Ritou Road by going through the passageway.',
      },
      {
        id: 'wotw-0248',
        title: 'Editorial Opinion',
        description:
          'Help Shigeru and Junkichi return to the right artist path.',
        requirements:
          'Complete This Novel... Seems Familiar? and This Novel Seems... Problematic?',
        version: '2.2',
        commission: true,
      },
      {
        id: 'wotw-0249',
        title: 'You Should Start A Doushin Dojo',
        description: 'Help Asakura train 5 times.',
        requirements:
          'Complete An Art to Be Honed and/or Ceaseless Training 5 times.',
        version: '2.0',
        commission: true,
      },
      {
        id: 'wotw-0250',
        title: 'Guess Who?',
        description: 'Find out who Zhenyu really is.',
        version: '2.0',
        requirements: "Earned during Yae Publishing House's Invitation.",
      },
      {
        id: 'wotw-0251',
        title: 'Well, At Least It Ended',
        description: 'Hear Junkichi out as he puts his story together.',
        version: '2.1',
        requirements: 'Complete Storytelling Method.',
      },
      {
        id: 'wotw-0252',
        title: 'Her and Her Cat',
        description: 'Follow Neko up Mt. Yougou to find "Hibiki"\'s trail.',
        version: '2.1',
        requirements: 'Complete The Narukami Trail.',
      },
      {
        id: 'wotw-30-0009',
        title: "Aha! What's on the Hook?",
        description: 'Fish some strange things up with Kayvan...',
        version: '3.0',
      },
      {
        id: 'wotw-30-0010',
        title: "Kalimi's Fungus",
        description: 'Watch Hatim make a killing on the exchange!',
        version: '3.0',
      },
      {
        id: 'wotw-30-0011',
        title: "When Wealth Comes A-Knockin'",
        description: 'Give Hatim some Apple Cider.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0012',
        title: 'Catch Me-ow if You Can!',
        description: 'Help Sareh find all the little cats.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0013',
        title: 'Principia Arithmetica',
        description: 'Help Garcia perfect his machine.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0014',
        title: `"It's My Job."`,
        description: 'Help Hanbei pick more mushrooms.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0015',
        title: 'Relaxation Therapy',
        description: "Fulfill the 3 patients' wishes.",
        version: '3.0',
      },
      {
        id: 'wotw-30-0016',
        title: 'Up by the Roots',
        description: 'Find and defeat the fleeing Whopperflower',
        version: '3.0',
      },
      {
        id: 'wotw-30-0017',
        title: 'Date of Departure',
        description: "Receive Alexandra's letter...",
        version: '3.0',
      },
      {
        id: 'wotw-30-0018',
        title: "Don't Blame the Mora!",
        description: "Witness the Gourmet Supremos' adventures in Sumeru...",
        version: '3.0',
      },
      {
        id: 'wotw-30-0019',
        title: 'The Sky is Vast; The Earth...',
        description: 'Help Farghani perform measurements.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0020',
        title: 'Answer Time',
        description: "Witness Alrani's story in Sumeru.",
        version: '3.0',
      },
      {
        id: 'wotw-30-0021',
        title: "The Random Circumstances of a Rose's Blooming",
        description: 'Help Collei tend to her Sumeru Rose.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0022',
        title: 'Where Have You Gone, My Dream?',
        description: 'Witness the tale of Javi and the "dream."',
        version: '3.0',
      },
      {
        id: 'wotw-30-0023',
        title: 'Non-Obligatory Request',
        description: 'Find all the items that Gulabgir made for his snakes.',
        version: '3.0',
      },
      {
        id: 'wotw-30-0024',
        title: 'The Ship Has It',
        description: "Help Rafiq test his ship's hull strength successfully.",
        version: '3.0',
      },
      {
        id: 'wotw-30-0025',
        title: "What's the Matter?",
        description: "Enjoy three of Jafar's dishes.",
        version: '3.0',
      },
      {
        id: 'wotw-30-0026',
        title: 'Scholarly in Sumeru',
        description: 'Answer 6 different questions correctly.',
        version: '3.0',
      },
      {
        id: 'wotw-0253',
        title: 'Nothing to Lose But Time',
        description: 'Unlock the secrets of two sundials.',
        version: '1.0',
        requirements: 'Complete Time and Wind.',
      },
      {
        id: 'wotw-0254',
        title: 'Interview With a Bygone God',
        description: 'Hear the story of a bygone deity.',
        version: '1.0',
        requirements: 'Complete Treasure Lost, Treasure Found.',
      },
      {
        id: 'wotw-0255',
        title: 'Crouching Dragon, Hidden Chi',
        description: 'Learn about the tale of the Chi.',
        version: '1.0',
        requirements: 'Complete The Chi of Yore.',
      },
      {
        id: 'wotw-0256',
        title: 'Scourge of the Battlefield',
        description:
          'Fetch a good price for a treasure found in an ancient ruin...',
        version: '1.0',
        requirements: 'Complete Nine Pillars of Peace.',
      },
      {
        id: 'wotw-0257',
        title: 'Shadow Over Luhua Pool',
        description: 'Help Vermeer get the scenery of his dreams.',
        requirements:
          'Talk to Vermeer at the ruins after completing Luhua Landscape.',
        version: '1.0',
      },
      {
        id: 'wotw-0258',
        title: 'Ready Player Zero',
        description: 'Play a simple game with Childish Jiang.',
        version: '1.0',
        requirements: 'Complete A Little Game.',
      },
      {
        id: 'wotw-0259',
        title:
          'Trees Should Blend Their Roots and Shade, for That Is Where the Home Is Made',
        description: "Witness the story of Yuan Hong's household.",
        version: '1.0',
        requirements: 'Complete The Tree who Stands Alone.',
      },
      {
        id: 'wotw-0260',
        title: 'Gears of Destiny',
        description: 'Complete the quest "Bough Keeper: Dainsleif".',
        version: '1.3',
      },
      {
        id: 'wotw-0261',
        title: 'The Bandit, the Lunatic, and the Pitch-Black Enigma',
        description: "Uncover the Grand Thief's fate.",
        version: '1.4',
        requirements: 'Earned during Involuntary Sacrifice.',
      },
      {
        id: 'wotw-0262',
        title: 'Where Fate Comes to a Crossroads',
        description: 'Escape the eerie ruins.',
        version: '1.4',
        requirements: 'Complete Involuntary Sacrifice.',
      },
      {
        id: 'wotw-0263',
        title: 'Sneering at the Power of the Gods',
        description: 'Learn of the "Loom of Fate"...',
        version: '1.4',
        requirements: 'Complete A Herald Without Adherents.',
      },
      {
        id: 'wotw-0264',
        title: 'Silence, You Raving Lunatic',
        description: 'Defeat the Abyss Herald.',
        version: '1.4',
        requirements: 'Earned during A Soul Set Apart.',
      },
      {
        id: 'wotw-0265',
        title: 'We Will Be Reunited',
        description: 'Complete "We Will Be Reunited."',
        version: '1.4',
      },
      {
        id: 'wotw-0266',
        title: 'The Gathering Storm',
        description: 'Earn the chance to go to Inazuma on board the Alcor.',
        version: '1.6',
        requirements: 'Earned during A Path Through the Storm.',
      },
      {
        id: 'wotw-0267',
        title: 'Ready, Fight!',
        description: 'Earn your first victory in The Crux Clash.',
        version: '1.6',
        requirements: 'Earned during The Crux Clash.',
      },
      {
        id: 'wotw-0268',
        title: 'Autumn Winds, Scarlet Leaves',
        description: 'Complete "Autumn Winds, Scarlet Leaves."',
        version: '1.6',
      },
      {
        id: 'wotw-0269',
        title: 'Through the Storm',
        description: 'Reach the Outsider Settlement.',
        version: '2.0',
        requirements: 'Complete Setting Sail.',
      },
      {
        id: 'wotw-0270',
        title: 'Hiiragi Sanjuuro',
        description: 'Escort the goods successfully and leave Ritou.',
        version: '2.0',
        requirements: 'Complete Ritou Escape Plan.',
      },
      {
        id: 'wotw-0271',
        title: 'The Aspirations of All',
        description:
          'Come into contact with the Statue of the Omnipresent God, the symbol of Eternity.',
        version: '2.0',
        requirements: 'Earned during Three Wishes.',
      },
      {
        id: 'wotw-0272',
        title: 'The Princess Behind the Curtain',
        description:
          'Officially make the acquaintance of the young lady of the Kamisato Clan.',
        version: '2.0',
        requirements: 'Complete Three Wishes.',
      },
      {
        id: 'wotw-0273',
        title: 'Omamori, Justice, Number One',
        description: 'Complete the "three small wishes."',
        version: '2.0',
        requirements: 'Earned during A Flower Blooms in a Prison.',
      },
      {
        id: 'wotw-0274',
        title: 'Jailhouse Fiesta',
        description: 'Rescue Masakatsu successfully.',
        version: '2.0',
        requirements: 'Earned during A Flower Blooms in a Prison.',
      },
      {
        id: 'wotw-0275',
        title: "To Brave the Lightning's Glow",
        description: 'Become the target of the Vision Hunt Decree.',
        version: '2.0',
        requirements: 'Complete Amidst Stormy Judgment.',
      },
      {
        id: 'wotw-0276',
        title: 'Revolutionary Outlander',
        description: 'Successfully join the resistance.',
        version: '2.0',
        requirements: 'Complete In the Name of the Resistance.',
      },
      {
        id: 'wotw-0277',
        title: 'The Immovable God and the Eternal Euthymia',
        description: 'Complete "The Immovable God and the Eternal Euthymia."',
        version: '2.0',
      },
      {
        id: 'wotw-0278',
        title: 'Stillness, the Sublimation of Shadow',
        description: 'Complete "Stillness, the Sublimation of Shadow."',
        version: '2.0',
      },
      {
        id: 'wotw-0279',
        title: 'SWORDFISH II',
        description: 'Obtain the trust of the Swordfish II squad.',
        version: '2.1',
        requirements: 'Earned during Sword, Fish, Resistance.',
      },
      {
        id: 'wotw-0280',
        title: 'Though Their Wishes Be Like Morning Dew...',
        description:
          'Find the person behind the distribution of the Delusions.',
        version: '2.1',
        requirements: 'Complete Delusion.',
      },
      {
        id: 'wotw-0281',
        title: 'Fantabulous Firework Fiesta',
        description: 'Set off fireworks to distract the guards.',
        version: '2.1',
        requirements: 'Earned during Proof of Guilt.',
      },
      {
        id: 'wotw-0282',
        title: 'Duel Before the Throne',
        description: 'Emerge victorious in the duel before the throne.',
        version: '2.1',
        requirements: 'Earned during Duel Before the Throne.',
      },
      {
        id: 'wotw-0283',
        title: 'Their Wishes',
        description:
          'Bring all the wishes upon the Statue of the Omnipresent God to fruition.',
        version: '2.1',
        requirements: 'Complete The Omnipresent God.',
      },
      {
        id: 'wotw-0284',
        title: 'Omnipresence Over Mortals',
        description: 'Complete "Omnipresence Over Mortals."',
        version: '2.1',
      },
      {
        id: 'wotw-0285',
        title: '"All is Well"',
        description: "Help Wang Ping'an renovate Pervases' temple.",
        version: '2.4',
        requirements: 'Complete Hereafter: Return to the Mountains.',
      },
      {
        id: 'wotw-0286',
        title: "Anna's Adventures",
        description: 'Help Anna become an adventurer.',
        version: '2.4',
        requirements: 'Complete Anna the Adventurer!.',
        commission: true,
      },
      {
        id: 'wotw-0287',
        title: 'Prelude to the Journey',
        description: 'A young man is about to embark on a long journey...',
        version: '2.4',
        requirements: 'Complete The Little Pirate Goes Out to Sea.',
        commission: true,
      },
      {
        id: 'wotw-0288',
        title: 'Rise of the Jade Chamber',
        description: 'Complete the reconstruction of the Jade Chamber.',
        version: '2.4',
        requirements: 'Earned during Where the Heart Finds Rest.',
      },
      {
        id: 'wotw-0289',
        title: 'Majesty of the Deep',
        description: 'Defeat Beisht, Avenger of the Vortex.',
        version: '2.4',
        requirements: 'Earned during Where the Heart Finds Rest.',
      },
      {
        id: 'wotw-0290',
        title: 'A Former Dream',
        description: "Witness the truth of the village's history.",
        version: '2.4',
        requirements: 'Earned during Bygones Times Like Dust Passing.',
      },
      {
        id: 'wotw-0291',
        title: 'The Crane Returns on the Wind',
        description: 'Complete "The Crane Returns on the Wind."',
        version: '2.4',
      },
      {
        id: 'wotw-0292',
        title: 'When One Gazes Into the Abyss...',
        description:
          'Though you are reunited with Dain, the Abyss is watching...',
        version: '2.6',
        requirements: 'Complete In the Depths, an Unexpected Reunion.',
      },
      {
        id: 'wotw-0293',
        title: 'The Beautiful and Damned',
        description:
          'Learn the secret behind the Black Serpent Knights and the hilichurls.',
        version: '2.6',
        requirements: 'Complete The Grave of the Guarded.',
      },
      {
        id: 'wotw-0294',
        title: 'The Will to Live and the Depths of Lamentation',
        description: 'Defeat the Abyss Herald.',
        version: '2.6',
        requirements: 'Complete Memories of Inteyvat.',
      },
      {
        id: 'wotw-0295',
        title: 'May Glory Go With You',
        description: 'Complete "Requiem of the Echoing Depths"',
        version: '2.6',
      },
      {
        id: 'wotw-0296',
        title: 'No Way Home',
        description:
          'Break through the obstacles and meet up with Xiao in "Perilous Trail."',
        version: '2.7',
        requirements: 'Earned during Danger All Around.',
      },
      {
        id: 'wotw-0297',
        title: 'Layers of Fear',
        description:
          'Escape the mysterious space at the very bottom of The Chasm successfully.',
        version: '2.7',
        requirements: "Earned during At Tunnel's End, Light",
      },
      {
        id: 'wotw-0298',
        title: 'Of Heart and Soul',
        description: 'Complete "Perilous Trail."',
        version: '2.7',
        requirements: "Complete At Tunnel's End, Light",
      },
      {
        id: 'wotw-30-1',
        title: 'Voice of Akasha',
        description: 'Hear the voice of divine wisdom.',
        version: '3.0',
      },
      {
        id: 'wotw-30-2',
        title: 'The Merchant and the Gate of Knowledge',
        description: 'Meet Dori and purchase Canned Knowledge.',
        version: '3.0',
      },
      {
        id: 'wotw-30-3',
        title: 'The House of Canned Time',
        description:
          'Use the Canned Knowledge to increase your combat strength.',
        version: '3.0',
      },
      {
        id: 'wotw-30-4',
        title: 'Through Mists of Smoke and Forests Dark',
        description: 'Complete "Through Mists of Smoke and Forests Dark."',
        version: '3.0',
      },
      {
        id: 'wotw-30-5',
        title: 'The Flavor of Déjà Vu',
        description: 'Pick the Sunsettia-flavored box of candy by yourself.',
        version: '3.0',
      },
      {
        id: 'wotw-30-6',
        title: "Even Paimon Wouldn't Eat That!",
        description: 'Eat a visibly terrible Coconut Charcoal Cake.',
        version: '3.0',
      },
      {
        id: 'wotw-30-7',
        title: 'All Dreams Must End With an Awakening',
        description: 'Wake from the Sabzeruz samsara.',
        version: '3.0',
      },
      {
        id: 'wotw-30-8',
        title: 'The Morn a Thousand Roses Brings',
        description: 'Complete "The Morn a Thousand Roses Brings."',
        version: '3.0',
      },
    ],
  },
  {
    id: 'moth',
    entries: [
      {
        id: 'moth-0001',
        title: `Fantastic Voyage: Prologue`,
        description: 'Complete "Fantastic Voyage" and unlock all endings.',
        version: '1.4',
      },
      {
        id: 'moth-0002',
        title: `Archaic Lord of Lightning and Blitz`,
        description:
          "Witness the awesome meteorological power of Bennett's phenomenally bad luck.",
        version: '1.4',
        requirements: 'Complete Ad Astra...',
      },
      {
        id: 'moth-0003',
        title: `The Power of Luck`,
        description:
          'Activate the mechanisms and obtain the treasure without making any mistakes.',
        version: '1.4',
        requirements:
          'Successfully complete the mechanism puzzle in Expansive Eya.',
      },
      {
        id: 'moth-0004',
        title: `Evil Is Banished`,
        description: 'Complete "Signs of Evil" and unlock all endings.',
        version: '1.4',
      },
      {
        id: 'moth-0005',
        title: `Behold, Mine Evil-Espying Eye!`,
        description: 'Correctly interpret all clues.',
        version: '1.4',
        requirements:
          "Completely interpret all clues in On The Evil Spirits' Trail.",
      },
      {
        id: 'moth-0006',
        title: `Red Hot Chili Popsicles`,
        description:
          "Make a popsicle using the wrong recipe and provoke Chongyun's Pure-Yang spirit.",
        version: '1.4',
        requirements:
          'Make popsicles out of Jueyun Chili and Slime Condensate in A Curious Mix.',
      },
      {
        id: 'moth-0007',
        title: `A Line That May Be Crossed`,
        description: 'Complete "Wellspring of Healing" and unlock all endings.',
        version: '1.4',
      },
      {
        id: 'moth-0008',
        title: `An Idol's Last Line of Defense`,
        description:
          "Successfully persuade Albert and Barbara's other fans to leave.",
        version: '1.4',
        requirements:
          "Complete Albert is Amenable To Reason and persuade Barbara's fans to leave in The Cat's Tail's Specialty.",
      },
      {
        id: 'moth-0009',
        title: `Mondstadt's Spiciest Surprise`,
        description: "Sample Barbara's Chilibrew.",
        version: '1.4',
        requirements: 'Complete Home-Made Chilibrew.',
      },
      {
        id: 'moth-0010',
        title: `A Maid of Strength and Virtue`,
        description: `Complete "Chivalric Training" and unlock all endings.`,
        version: '1.4',
      },
      {
        id: 'moth-0011',
        title: `"...For I Am Duty Bound"`,
        description: 'Help Noelle discover the source of her strength.',
        version: '1.4',
        requirements: 'Complete Strength Training.',
      },
      {
        id: 'moth-0012',
        title: `A World Known Only Unto Roses`,
        description: "Read Noelle's study notes.",
        version: '1.4',
        requirements:
          "Read Noelle's study notes after completing The Almighty Maid and Her Impossible Task.",
      },
      {
        id: 'moth-0013',
        title: `Stress Relief`,
        description: 'Complete "Knightly Exam Prep" and unlock all endings.',
        version: '1.5',
      },
      {
        id: 'moth-0014',
        title: `Invulnerable Maid-Knight`,
        description: `Listen to "A Knight's Journey Through Liyue" with Noelle.`,
        version: '1.5',
        requirements: "Complete A Knight's Journey Through Liyue.",
      },
      {
        id: 'moth-0015',
        title: `Mondstadt's Note-Taker General`,
        description: `Read Noelle's study notes.`,
        version: '1.5',
        requirements: `Read Noelle's study notes at the end of Imperfect Examination.`,
      },
      {
        id: 'moth-0016',
        title: `Diona Special, Stirred, Not Shaken`,
        description:
          'Complete "The Cat and the Cocktail" and unlock all endings.',
        version: '1.5',
      },
      {
        id: 'moth-0017',
        title: `But There's a Catch...`,
        description: 'Help Diona find a special base drink.',
        version: '1.5',
        requirements: 'Complete The Shadow Over Dadaupa.',
      },
      {
        id: 'moth-0018',
        title: `Kitten Queen`,
        description: `Bring all the cats back to The Cat's Tail.`,
        version: '1.5',
        requirements: 'Complete When the Cats Come Home.',
      },
      {
        id: 'moth-0019',
        title: `Everyone's Happy`,
        description: `Complete "A Housekeeper's Daily Chores" and unlock all endings.`,
        version: '2.2',
      },
      {
        id: 'moth-0020',
        title: `Housekeeper Extraordinaire`,
        description: 'Complete the big cleanup within the time limit',
        version: '2.2',
        requirements: 'Complete Small-Scale Changes.',
      },
      {
        id: 'moth-0021',
        title: `From the Sea Never Returning`,
        description: `Learn of Inu Shoushou's story together with Thoma`,
        version: '2.2',
        requirements: 'Complete Those Who Can Never Return.',
      },
      {
        id: 'moth-0022',
        title: `Taller by Half`,
        description:
          'Complete "Yoohoo Art: Seichou no Jutsu" and unlock all endings.',
        version: '2.2',
      },
      {
        id: 'moth-0023',
        title: `Mujina-Class Ninja`,
        description: `Obtain Sayu's highest rating during agility training.`,
        version: '2.2',
        requirements: 'Complete the challenge in Twinjutsu within 30 seconds.',
      },
      {
        id: 'moth-0024',
        title: `Dish Effect: Mobility Decreased`,
        description: `You were unable to prevent Sayu's reckless consumption...`,
        version: '2.2',
        requirements: 'Complete Hard Work Pays Off.',
      },
      {
        id: 'moth-0025',
        title: `General of Watatsumi`,
        description: `Complete "The Canine General's Special Operations" and unlock all endings.`,
        version: '2.3',
      },
      {
        id: 'moth-0026',
        title: `Changing Times`,
        description: 'Draw all fortune slips at the Grand Narukami Shrine.',
        version: '2.3',
        requirements: 'Select all fortune slips in Praying for Fortune.',
      },
      {
        id: 'moth-0027',
        title: `To Tell or Not to Tell, That Is the Question`,
        description: `Discover Ms. Hina's true identity at the Yae Publishing House.`,
        version: '2.3',
        requirements: 'Complete (Temporary) Secret-Keeper.',
      },
      {
        id: 'moth-0028',
        title: `Honorary Crux Member`,
        description:
          'Complete "When the Crux Shines Bright" and unlock all endings.',
        version: '2.3',
      },
      {
        id: 'moth-0029',
        title: `Wine Unburdens`,
        description: 'Take part in the Qingce banquet with Beidou.',
        version: '2.3',
        requirements: 'Complete Honorary Villager.',
      },
      {
        id: 'moth-0030',
        title: `Guyun Buyers' Club`,
        description: `Find out the truth behind the deal Beidou's making.`,
        version: '2.3',
        requirements: 'Complete A Strange Transaction.',
      },
      {
        id: 'moth-0031',
        title: `Megrez's Companion Star`,
        description: `Complete "The Jade Chamber's Returning Guest" and unlock all endings.`,
        version: '2.4',
      },
      {
        id: 'moth-0032',
        title: `You've Got to Have Reserves`,
        description: 'Fish? The more the merrier, of course!',
        version: '2.4',
        requirements:
          'Collect four extra Plump Fish at the end of Open Resources, Thrifty Expenditure.',
      },
      {
        id: 'moth-0033',
        title: `Overprotectiveness`,
        description: `A single stone births a thousand ripples. It seems like Ningguang's day off is not to be.`,
        version: '2.4',
        requirements: 'Complete Confrontation.',
      },
      {
        id: 'moth-0034',
        title: `The Lingering Song`,
        description:
          'Complete "A Song That Knows Grace" and unlock all endings.',
        version: '2.4',
      },
      {
        id: 'moth-0035',
        title: `May This Moment Be Made to Last`,
        description: 'Take a commemorative photo with Yun Jin.',
        version: '2.4',
        requirements: 'Complete Commemorative Photo.',
      },
      {
        id: 'moth-0036',
        title: `A Strict Master Trains a Talented Pupil`,
        description:
          'Complete the practice session without hitting a single blue scarecrow.',
        version: '2.4',
        requirements:
          'Complete Meticulous Performance without hitting a single blue scarecrow.',
      },
      {
        id: 'moth-0037',
        title: `Arataki Gang Chief Advisor`,
        description: `Complete "The Gang's Daily Deeds" and unlock all endings.`,
        version: '2.7',
      },
      {
        id: 'moth-0038',
        title: `One More Look!`,
        description:
          'Gaze upon the glory that is Kuki Shinobu in a shrine maiden outfit.',
        version: '2.7',
        requirements: `Complete The Day's Wages.`,
      },
      {
        id: 'moth-0039',
        title: `"Upstairs..."`,
        description:
          'Be dissuaded before alerting Kujou Sara and Kuki Shinobu.',
        version: '2.7',
        requirements: `Attempt to walk in the room at the second floor of Uyuu Restaurant after listening to Kujou Sara, Kuki Shinobu and Norika's conversation in Eavesdroppers.`,
      },
      {
        id: 'moth-0040',
        title: `You Thought We Were For Real, Eh?`,
        description: `Complete "Trap 'Em by Storm" and unlock all endings.`,
        version: '2.8',
      },
      {
        id: 'moth-0041',
        title: `An Ideal Detective Am I`,
        description:
          'Correctly analyze the motives and the truth behind the crime the first time.',
        version: '2.8',
        requirements: 'Earned during Long-Sealed Mystery.',
      },
      {
        id: 'moth-0042',
        title: `Sangonomiya Supplications`,
        description:
          'Ask Gorou whether Kokomi knows about the happenings on Watatsumi Island.',
        version: '2.8',
        requirements:
          'Talk to Gorou after questioning Todoroki at the end of The Missing Thing.',
      },
    ],
  },
  {
    id: 'mts1',
    entries: [
      {
        id: 'mts1-0001',
        title: `The Wind and The Star Traveler`,
        description: 'Blow seeds off a Dandelion using Anemo.',
        version: '1.0',
      },
      {
        id: 'mts1-0002',
        title: `Of Mountains High`,
        description: 'Obtain the power of Geo.',
        version: '1.0',
      },
      {
        id: 'mts1-0003',
        title: `The Voice of Flowing Water`,
        description: 'Collect the entire "Heart of Clear Springs" series.',
        version: '1.0',
      },
      {
        id: 'mts1-0004',
        title: `The Divine Halberd Mocks the Heavens`,
        description:
          'Collect the entire "Legend of the Shattered Halberd" series.',
        version: '1.0',
      },
      {
        id: 'mts1-0005',
        title: `The Drunkard and the Wolf`,
        description: `Collect the entire "A Drunkard's Tale" series.`,
        version: '1.0',
      },
      {
        id: 'mts1-0006',
        title: `Spring, White Horse and Moonlight`,
        description: 'Collect the entire "Moonlit Bamboo Forest" series.',
        version: '1.0',
      },
    ],
  },
  {
    id: 'mts2',
    entries: [
      {
        id: 'mts2-0001',
        title: `Unlimited Power!`,
        description: 'Obtain the power of Electro.',
        version: '2.0',
      },
      {
        id: 'mts2-0002',
        title: `Land of Dandelions`,
        description:
          'Collect the entire "The Fox in the Dandelion Sea" series.',
        version: '2.0',
      },
      {
        id: 'mts2-0003',
        title: `True Friendship Takes Sacrifice`,
        description: 'Collect the entire "The Boar Princess" series.',
        version: '2.0',
      },
      {
        id: 'mts2-0004',
        title: `Eternal Youth`,
        description: `Collect the entire "Vera's Melancholy" series.`,
        version: '2.0',
      },
      {
        id: 'mts2-0005',
        title: `Hilichurlian Studies Expert`,
        description: 'Collect the entire "Hilichurl Cultural Customs" series.',
        version: '2.0',
      },
    ],
  },
  {
    id: 'mts3',
    entries: [
      {
        id: 'mts3-0001',
        title: `The Essence of Flora`,
        description: 'Obtain the power of Dendro.',
        version: '3.0',
      },
      {
        id: 'mts3-0002',
        title: `Reminiscence of Gurabad`,
        description:
          'Collect the entire "The Tale of Shiruyeh and Shirin" series.',
        version: '3.0',
      },
      {
        id: 'mts3-0003',
        title: `Bright as a Flame`,
        description: 'Collect the entire "The Folio of Foliage" series.',
        version: '3.0',
      },
      {
        id: 'mts3-0004',
        title: `Farris' Journey`,
        description: 'Collect the entire "Scroll of Streaming Song" series.',
        version: '3.0',
      },
    ],
  },
  {
    id: 'taoa',
    entries: [
      {
        id: 'taoa-0001',
        title: `Taking Shape`,
        description: 'Forge a 4-star weapon.',
        version: '1.0',
      },
      {
        id: 'taoa-0002',
        title: `Survival Expert`,
        version: '1.0',
        steps: [
          {
            id: 'taoa-0002-1',
            description: 'Grasp how 10 different dishes are made.',
          },
          {
            id: 'taoa-0002-2',
            description: 'Grasp how 20 different dishes are made.',
          },
          {
            id: 'taoa-0002-3',
            description: 'Grasp how 40 different dishes are made.',
          },
        ],
      },
      {
        id: 'taoa-0003',
        title: `Star Chef`,
        version: '1.0',
        steps: [
          { id: 'taoa-0003-1', description: 'Master 10 Recipes.' },
          { id: 'taoa-0003-2', description: 'Master 20 Recipes.' },
          { id: 'taoa-0003-3', description: 'Master 40 Recipes.' },
        ],
      },
    ],
  },
  {
    id: 'thj',
    entries: [
      {
        id: 'thj-0001',
        title: `Onward and Upward`,
        version: '1.0',
        steps: [
          {
            id: 'thj-0001-1',
            description: 'Ascend a character to Phase 2 for the first time.',
          },
          {
            id: 'thj-0001-2',
            description: 'Ascend a character to Phase 4 for the first time.',
          },
          {
            id: 'thj-0001-3',
            description: 'Ascend a character to Phase 6 for the first time.',
          },
        ],
      },
      {
        id: 'thj-0002',
        title: `Re-Armed, Re-Forged`,
        version: '1.0',
        steps: [
          { id: 'thj-0002-1', description: 'Ascend a weapon to Phase 2.' },
          { id: 'thj-0002-2', description: 'Ascend a weapon to Phase 4.' },
          { id: 'thj-0002-3', description: 'Ascend a weapon to Phase 6.' },
        ],
      },
      {
        id: 'thj-0003',
        title: `Hitherto Unknown`,
        version: '1.0',
        steps: [
          {
            id: 'thj-0003-1',
            description: 'Reach Friendship 10 with 4 characters.',
          },
          {
            id: 'thj-0003-2',
            description: 'Reach Friendship 10 with 8 characters.',
          },
          {
            id: 'thj-0003-3',
            description: 'Reach Friendship 10 with 16 characters.',
          },
        ],
      },
      {
        id: 'thj-0004',
        title: `Bounty of the Earth`,
        version: '1.0',
        steps: [
          {
            id: 'thj-0004-1',
            description:
              'Collect 200 rewards from blossoms of wealth or blossoms of revelation.',
          },
          {
            id: 'thj-0004-2',
            description:
              'Collect 400 rewards from blossoms of wealth or blossoms of revelation.',
          },
          {
            id: 'thj-0004-3',
            description:
              'Collect 800 rewards from blossoms of wealth or blossoms of revelation.',
          },
        ],
        requirements:
          'Unlike the Battle Pass weekly mission, the rewards must be collected using Resin.',
      },
      {
        id: 'thj-0005',
        title: `Hero's Gift`,
        description: 'Obtain a 4-star artifact.',
        version: '1.0',
      },
      {
        id: 'thj-0006',
        title: `Echoing Song`,
        description: 'Enhance a 4-star artifact to its highest level.',
        version: '1.0',
      },
      {
        id: 'thj-0007',
        title: `Legendary Treasure`,
        description: 'Obtain a 5-star artifact.',
        version: '1.0',
      },
      {
        id: 'thj-0008',
        title: `Sacred Canto`,
        description: 'Enhance a 5-star artifact to its highest level.',
        version: '1.0',
      },
    ],
  },
  {
    id: 'mtcows',
    entries: [
      {
        id: 'mtcows-0001',
        title: `Continental Explorer: Mondstadt`,
        description:
          'Light up the entire Mondstadt map (excluding the Dragonspine area).',
        version: '1.0',
      },
      {
        id: 'mtcows-0002',
        title: `Brush of a Thousand Winds`,
        description:
          'Unlock all Teleport Waypoints in Mondstadt (excludes the Dragonspine area).',
        version: '1.0',
      },
      {
        id: 'mtcows-0003',
        title: `Let the Wind Lead`,
        description:
          'Upgrade the Statues of The Seven in Mondstadt to their maximum level.',
        version: '1.0',
      },
      {
        id: 'mtcows-0004',
        title: `Sanctuary Pilgrim: Mondstadt`,
        description: 'Unlock all the Shrines of Depths in Mondstadt.',
        version: '1.0',
      },
      {
        id: 'mtcows-0005',
        title: `Guiding Wind`,
        version: '1.0',
        steps: [
          {
            id: 'mtcows-0005-1',
            description:
              'Follow 10 Seelie in Mondstadt to their Seelie Courts (excludes the Dragonspine area).',
          },
          {
            id: 'mtcows-0005-2',
            description:
              'Follow 20 Seelie in Mondstadt to their Seelie Courts (excludes the Dragonspine area).',
          },
          {
            id: 'mtcows-0005-3',
            description:
              'Follow 40 Seelie in Mondstadt to their Seelie Courts (excludes the Dragonspine area).',
          },
        ],
      },
      {
        id: 'mtcows-0006',
        title: `Wind-Chasing Treasure Hunter`,
        version: '1.0',
        steps: [
          {
            id: 'mtcows-0006-1',
            description:
              'Open 100 chests in Mondstadt (excluding the Dragonspine area).',
          },
          {
            id: 'mtcows-0006-2',
            description:
              'Open 200 chests in Mondstadt (excluding the Dragonspine area).',
          },
          {
            id: 'mtcows-0006-3',
            description:
              'Open 400 chests in Mondstadt (excluding the Dragonspine area).',
          },
        ],
      },
      {
        id: 'mtcows-0007',
        title: `Wind-Chasing Adventurer`,
        version: '1.0',
        steps: [
          {
            id: 'mtcows-0007-1',
            description:
              'Complete 5 Open World mechanism-activated Time Trial Challenges in Mondstadt (excludes the Dragonspine area).',
          },
          {
            id: 'mtcows-0007-2',
            description:
              'Complete 10 Open World mechanism-activated Time Trial Challenges in Mondstadt (excludes the Dragonspine area).',
          },
          {
            id: 'mtcows-0007-3',
            description:
              'Complete 15 Open World mechanism-activated Time Trial Challenges in Mondstadt (excludes the Dragonspine area).',
          },
        ],
      },
    ],
  },
  {
    id: 'lthosac',
    entries: [
      {
        id: 'lthosac-0001',
        title: `Continental Explorer: Liyue`,
        description:
          'Light up the map in the following zones: Bishui Plain, Qiongji Estuary, Minlin, Lisha, Sea of Clouds.',
        version: '1.0',
      },
      {
        id: 'lthosac-0002',
        title: `Surveyor of Stone`,
        description:
          'Unlock all Teleport Waypoints in Liyue (The Chasm is counted separately).',
        version: '1.0',
      },
      {
        id: 'lthosac-0003',
        title: `Unmovable Mountain`,
        description:
          'Upgrade the Statues of The Seven in Liyue to their maximum level.',
        version: '1.0',
      },
      {
        id: 'lthosac-0004',
        title: `Sanctuary Pilgrim: Liyue`,
        description: 'Unlock all the Shrines of Depths in Liyue.',
        version: '1.0',
      },
      {
        id: 'lthosac-0005',
        title: `Lithic Guide`,
        version: '1.0',
        steps: [
          {
            id: 'lthosac-0005-1',
            description:
              'Follow 20 Seelie in Liyue to their Seelie Courts (The Chasm is counted separately).',
          },
          {
            id: 'lthosac-0005-2',
            description:
              'Follow 40 Seelie in Liyue to their Seelie Courts (The Chasm is counted separately).',
          },
          {
            id: 'lthosac-0005-3',
            description:
              'Follow 60 Seelie in Liyue to their Seelie Courts (The Chasm is counted separately).',
          },
        ],
      },
      {
        id: 'lthosac-0006',
        title: `Rock-Steady Treasure Hunter`,
        version: '1.0',
        steps: [
          {
            id: 'lthosac-0006-1',
            description:
              'Open 200 chests in Liyue (The Chasm is counted separately).',
          },
          {
            id: 'lthosac-0006-2',
            description:
              'Open 400 chests in Liyue (The Chasm is counted separately).',
          },
          {
            id: 'lthosac-0006-3',
            description:
              'Open 800 chests in Liyue (The Chasm is counted separately).',
          },
        ],
      },
      {
        id: 'lthosac-0007',
        title: `Rock-Steady Adventurer`,
        version: '1.0',
        steps: [
          {
            id: 'lthosac-0007-1',
            description:
              'Complete 10 Open World mechanism-activated Time Trial Challenges in Liyue (The Chasm is counted separately).',
          },
          {
            id: 'lthosac-0007-2',
            description:
              'Complete 20 Open World mechanism-activated Time Trial Challenges in Liyue (The Chasm is counted separately).',
          },
          {
            id: 'lthosac-0007-3',
            description:
              'Complete 40 Open World mechanism-activated Time Trial Challenges in Liyue (The Chasm is counted separately).',
          },
        ],
      },
    ],
  },
  {
    id: 'es',
    entries: [
      {
        id: 'es-0001',
        title: `Cool It!`,
        version: '1.0',
        steps: [
          {
            id: 'es-0001-1',
            description: 'Keep an opponent Frozen for over 10s (x1).',
          },
          {
            id: 'es-0001-2',
            description: 'Keep an opponent Frozen for over 10s (x5).',
          },
          {
            id: 'es-0001-3',
            description: 'Keep an opponent Frozen for over 10s (x10).',
          },
        ],
      },
      {
        id: 'es-0002',
        title: `Go With the Wind!`,
        version: '1.0',
        steps: [
          {
            id: 'es-0002-1',
            description:
              'Trigger Cryo, Hydro, Pyro and Electro Swirl Reactions at least once each within 2s (x1).',
          },
          {
            id: 'es-0002-2',
            description:
              'Trigger Cryo, Hydro, Pyro and Electro Swirl Reactions at least once each within 2s (x5).',
          },
          {
            id: 'es-0002-3',
            description:
              'Trigger Cryo, Hydro, Pyro and Electro Swirl Reactions at least once each within 2s (x10).',
          },
        ],
      },
      {
        id: 'es-0003',
        title: `Season's Greetings`,
        version: '1.0',
        steps: [
          {
            id: 'es-0003-1',
            description: 'Freeze 4 opponents within 2s (x1).',
          },
          {
            id: 'es-0003-2',
            description: 'Freeze 4 opponents within 2s (x5).',
          },
          {
            id: 'es-0003-3',
            description: 'Freeze 4 opponents within 2s (x10).',
          },
        ],
      },
      {
        id: 'es-0004',
        title: `Performance May Decline in Low Temperatures`,
        version: '1.0',
        steps: [
          {
            id: 'es-0004-1',
            description: 'Defeat 4 opponents with Superconduct within 2s (x1).',
          },
          {
            id: 'es-0004-2',
            description: 'Defeat 4 opponents with Superconduct within 2s (x5).',
          },
          {
            id: 'es-0004-3',
            description:
              'Defeat 4 opponents with Superconduct within 2s (x10).',
          },
        ],
      },
      {
        id: 'es-0005',
        title: `The Art of War`,
        version: '1.0',
        steps: [
          {
            id: 'es-0005-1',
            description: 'Defeat 4 opponents with Overloaded within 2s (x1).',
          },
          {
            id: 'es-0005-2',
            description: 'Defeat 4 opponents with Overloaded within 2s (x5).',
          },
          {
            id: 'es-0005-3',
            description: 'Defeat 4 opponents with Overloaded within 2s (x10).',
          },
        ],
      },
      {
        id: 'es-0006',
        title: `Melt You Down Like Ice Cream`,
        version: '1.0',
        steps: [
          {
            id: 'es-0006-1',
            description: 'Defeat 4 opponents with Melt within 2s (x1).',
          },
          {
            id: 'es-0006-2',
            description: 'Defeat 4 opponents with Melt within 2s (x5).',
          },
          {
            id: 'es-0006-3',
            description: 'Defeat 4 opponents with Melt within 2s (x10).',
          },
        ],
      },
      {
        id: 'es-0007',
        title: `A Little Less Shocking Than Love at First Sight`,
        version: '1.0',
        steps: [
          {
            id: 'es-0007-1',
            description:
              'Defeat 4 opponents with Electro-Charged within 2s (x1).',
          },
          {
            id: 'es-0007-2',
            description:
              'Defeat 4 opponents with Electro-Charged within 2s (x5).',
          },
          {
            id: 'es-0007-3',
            description:
              'Defeat 4 opponents with Electro-Charged within 2s (x10).',
          },
        ],
      },
    ],
  },
  {
    id: 'marksmanship',
    entries: [
      {
        id: 'marksmanship-0001',
        title: `Nothing Special, Just Practice`,
        description: 'Hit a falcon mid-flight with your bow.',
        version: '1.0',
      },
      {
        id: 'marksmanship-0002',
        title: `Master Sniper`,
        description: `Strike an opponent's weak point from afar with an Aimed Shot.`,
        version: '1.0',
      },
      {
        id: 'marksmanship-0003',
        title: `Der Freischütz`,
        description: `Strike an opponent's weak point from extremely far away with an Aimed Shot.`,
        version: '1.0',
      },
    ],
  },
  {
    id: 'cs1',
    entries: [
      {
        id: 'cs1-0001',
        title: `Full Metal What Now?`,
        description: 'Shatter the Geo Crystal Shield of a Large Geo Slime.',
        version: '1.0',
      },
      {
        id: 'cs1-0002',
        title: `Are Plasma Globes Still in Fashion?`,
        description: `Break an Electro Cicin Mage's shield.`,
        version: '1.0',
      },
      {
        id: 'cs1-0003',
        title: `Rhythm Tengoku`,
        description: 'Stop an Abyss Mage from regenerating its shield.',
        version: '1.0',
      },
      {
        id: 'cs1-0004',
        title: `Blazing Dadaupa`,
        description: `Set a Wooden Shieldwall Mitachurl's shield on fire.`,
        version: '1.0',
      },
    ],
  },
  {
    id: 'cs2',
    entries: [
      {
        id: 'cs2-0001',
        title: `Hydro Hunter`,
        description:
          'Defeat every type of Hydro Mimic that an Oceanid can summon.',
        version: '1.1',
      },
      {
        id: 'cs2-0002',
        title: `Dip, Duck, Dive, Dodge, Defeat`,
        description:
          'Defeat an Oceanid without being hit by water bombs left behind by certain Hydro Mimics.',
        version: '1.1',
      },
      {
        id: 'cs2-0003',
        title: `...Well, That Was Strange`,
        version: '1.1',
        steps: [
          {
            id: 'cs2-0003-1',
            description: 'Defeat the Unusual Hilichurl 1 time.',
          },
          {
            id: 'cs2-0003-2',
            description: 'Defeat the Unusual Hilichurl 20 time.',
          },
          {
            id: 'cs2-0003-3',
            description: 'Defeat the Unusual Hilichurl 50 time.',
          },
        ],
      },
      {
        id: 'cs2-0004',
        title: `Extreme Gardening`,
        description: 'Paralyze a Cryo Regisvine by attacking its corolla.',
        version: '1.1',
      },
      {
        id: 'cs2-0005',
        title: `Gardener Extraordinaire`,
        description: 'Paralyze a Pyro Regisvine by attacking its corolla.',
        version: '1.1',
      },
      {
        id: 'cs2-0006',
        title: `Geronimo!`,
        description:
          'Hit an opponent with a Plunging Attack after plunging for more than 5 seconds.',
        version: '1.1',
      },
      {
        id: 'cs2-0007',
        title: `Vicious Circle`,
        description: 'Unleash 5 Elemental Bursts within 15 seconds.',
        version: '1.1',
      },
      {
        id: 'cs2-0008',
        title: `Shield Me From the World`,
        description:
          'Have a single character be protected by 3 different types of shield at once.',
        version: '1.1',
      },
    ],
  },
  {
    id: 'cs3',
    entries: [
      {
        id: 'cs3-0001',
        title: `Turnover`,
        description:
          'Knock a Cryo Slime out of the hands of a Cryo Hilichurl Grenadier.',
        version: '1.2',
      },
      {
        id: 'cs3-0002',
        title: `Tear Down This Wall!`,
        description: `Destroy an Ice Shieldwall Mitachurl's shield.`,
        version: '1.2',
      },
      {
        id: 'cs3-0003',
        title: `No Ice for Me, Thanks`,
        description:
          'Defeat a Cryo Samachurl before it is able to create an ice pillar.',
        version: '1.2',
      },
      {
        id: 'cs3-0004',
        title: `...The Harder They Fall`,
        description: `Destroy a Cryo Samachurl's ice pillar.`,
        version: '1.2',
      },
      {
        id: 'cs3-0005',
        title: `Chilly-Churl`,
        description:
          'Defeat a Frostarm Lawachurl before its Infused Form can expire.',
        version: '1.2',
      },
      {
        id: 'cs3-0006',
        title: `"Rosebud..."`,
        description: `Break a Cryo Cicin Mage's shield.`,
        version: '1.2',
      },
      {
        id: 'cs3-0007',
        title: `Assassin of Kings`,
        description: 'Defeat the true ruler of Dragonspine?',
        version: '1.2',
      },
      {
        id: 'cs3-0008',
        title: `David and Goliath`,
        description: 'Paralyze a Ruin Grader by attacking its weak point.',
        version: '1.2',
      },
    ],
  },
  {
    id: 'cs4',
    entries: [
      {
        id: 'cs4-0001',
        title: `...Geovishap, Solarvishap, Lunarvishap...`,
        description: 'Defeat the Geovishap in all of its elemental forms.',
        version: '2.0',
      },
      {
        id: 'cs4-0002',
        title: `Geo Elemental Reaction?`,
        description:
          'Defeat the Primo Geovishap in all of its elemental forms.',
        version: '2.0',
        requirements:
          'Defeat a Pyro, Hydro, Cryo, and Electro Primo Geovishap.',
      },
      {
        id: 'cs4-0003',
        title: `Puppet Show-Off`,
        description: 'Defeat the Maguu Kenki while he is taunting you.',
        version: '2.0',
      },
      {
        id: 'cs4-0004',
        title: `Totaled Totem`,
        description:
          'Defeat an Electro Samachurl with no lightning totem on the field.',
        version: '2.0',
      },
      {
        id: 'cs4-0005',
        title: `Did My Hand Fall From My Wrist?`,
        description:
          'Defeat a Thunderhelm Lawachurl while in an enhanced state.',
        version: '2.0',
      },
      {
        id: 'cs4-0006',
        title: `I'll Skip the Spa, Thanks`,
        description:
          'Defeat a Mirror Maiden without being trapped by its Water Prison.',
        version: '2.0',
      },
      {
        id: 'cs4-0007',
        title: `It's Quiet... Too Quiet...`,
        description:
          'Defeat the Pyro Hypostasis after it enters its extinguished state only once',
        version: '2.0',
      },
      {
        id: 'cs4-0008',
        title: `The Battle of Narukami Island`,
        description:
          'Defeat the Perpetual Mechanical Array in its weakened state.',
        version: '2.0',
      },
      {
        id: 'cs4-0009',
        title: `The Finishing Touch`,
        description: 'Defeat Azhdaha without ever having gained a shield.',
        version: '2.0',
      },
    ],
  },
  {
    id: 'cs5',
    entries: [
      {
        id: 'cs5-0001',
        title: `Salt for My Foes, and Water for Me`,
        description:
          'Obtain at least three healing orbs fired from the "water droplets" during the Hydro Hypostasis fight.',
        version: '2.6',
      },
      {
        id: 'cs5-0002',
        title: `The Fraught Return`,
        description:
          'Stop the Hydro Hypostasis from reviving itself without destroying any of the "water droplets" by placing obstacles or repelling them.',
        version: '2.6',
      },
      {
        id: 'cs5-0003',
        title: `Moment of Destruction`,
        description: 'Defeat Signora without using any Crimson Lotus Moths.',
        version: '2.6',
      },
      {
        id: 'cs5-0004',
        title: `Electric Escape`,
        description:
          'Defeat a Thunder Manifestation without being hit by its homing thunder cage attack.',
        version: '2.6',
      },
      {
        id: 'cs5-0005',
        title: `Radio Silence`,
        description:
          'Get locked on by the Thunder Manifestation before you can attack it.',
        version: '2.6',
      },
      {
        id: 'cs5-0006',
        title: `Swimming Prohibited`,
        description:
          'Defeat the Bathysmal Vishap Herd without allowing them to dive into the water.',
        version: '2.6',
      },
      {
        id: 'cs5-0007',
        title: `Death Proof`,
        description: `Dodge one entire round of the Baleful Vajra's destructive waves during one battle with Magatsu Mitake Narukami no Mikoto.`,
        version: '2.6',
      },
      {
        id: 'cs5-0008',
        title: `Ouroboros`,
        description:
          'Destroy Oozing Concretions to paralyze the Ruin Serpent while it is gathering energy.',
        version: '2.6',
      },
    ],
  },
  {
    id: 'dasas1',
    entries: [
      {
        id: 'dasas1-0001',
        title: `Down We Go`,
        version: '1.0',
        steps: [
          {
            id: 'dasas1-0001-1',
            description: 'Clear Floor 4 of the Spiral Abyss.',
          },
          {
            id: 'dasas1-0001-2',
            description: 'Clear Floor 8 of the Spiral Abyss.',
          },
          {
            id: 'dasas1-0001-3',
            description: 'Clear Floor 12 of the Spiral Abyss.',
          },
        ],
      },
      {
        id: 'dasas1-0002',
        title: `Down to Dodge`,
        version: '1.0',
        steps: [
          {
            id: 'dasas1-0002-1',
            description: 'Complete Spiral Abyss 2-3 without taking any DMG.',
          },
          {
            id: 'dasas1-0002-2',
            description: 'Complete Spiral Abyss 5-3 without taking any DMG.',
          },
          {
            id: 'dasas1-0002-3',
            description: 'Complete Spiral Abyss 8-3 without taking any DMG.',
          },
        ],
      },
      {
        id: 'dasas1-0003',
        title: `My Precious`,
        description:
          'Complete Spiral Abyss 2-2 with an undamaged Ley Line Monolith.',
        version: '1.0',
      },
      {
        id: 'dasas1-0004',
        title: `Abyssal Crusader`,
        description: 'Obtain all Abyssal Stars in the Spiral Abyss.',
        version: '1.0',
        requirements:
          'Requires only the 72 Abyssal Stars from the Abyss Corridor; it does not include stars from the Abyssal Moon Spire.',
      },
    ],
  },
  {
    id: 'os1',
    entries: [
      {
        id: 'os1-0001',
        title: `...Odomu?`,
        description:
          'Successfully conduct cultural exchange with the hilichurls in "Language Exchange."',
        version: '1.0',
        commission: true,
      },
      {
        id: 'os1-0002',
        title: `Yo dala?`,
        description:
          'Successfully conduct cultural exchange with the hilichurls in "Poetry Exchange."',
        version: '1.0',
        commission: true,
      },
    ],
  },
  {
    id: 'sdnbits1',
    entries: [
      {
        id: 'sdnbits1-0001',
        title: `Perfectionist`,
        description: `Complete all of Tsarevich's commissions flawlessly in "Reliable Helper."`,
        version: '1.0',
        commission: true,
      },
      {
        id: 'sdnbits1-0002',
        title: `Telling It How It Is`,
        description:
          'Gather intelligence concerning Snezhnaya in "Tales of Winter."',
        version: '1.0',
        requirements:
          'Ask about the Fatui, Delusions, and the Tsaritsa during "Tales of Winter."',
        commission: true,
      },
    ],
  },
  {
    id: 'shns1',
    entries: [
      {
        id: 'shns1-0001',
        title: `Geo Archon Anecdotes`,
        description:
          'Collect all the stories about Rex Lapis in the "Geo Travel Diary."',
        version: '1.0',
        requirements:
          'Give Musheng all four types of items relating to Liyue in "Geo Travel Diary."',
        commission: true,
      },
      {
        id: 'shns1-0002',
        title: `Friends, Travelers, Lend Me Your Ears...`,
        description:
          'Finish listening to the tale of the Ring of Raining Blades in "Cliffhanger."',
        version: '1.0',
        commission: true,
      },
      {
        id: 'shns1-0003',
        title: `Once Upon a Time...`,
        description:
          'Finish listening to the tale of The Wrath of Haishan in "Cliffhanger."',
        version: '1.0',
        commission: true,
      },
    ],
  },
  {
    id: 'mios1',
    entries: [
      {
        id: 'mios1-0001',
        title: `You Came, You Saw, We Co-Oped`,
        version: '1.0',
        steps: [
          {
            id: 'mios1-0001-1',
            description:
              'Complete Domains together with other players 5 times.',
          },
          {
            id: 'mios1-0001-2',
            description:
              'Complete Domains together with other players 20 times.',
          },
          {
            id: 'mios1-0001-3',
            description:
              'Complete Domains together with other players 100 times.',
          },
        ],
      },
      {
        id: 'mios1-0002',
        title: `I Came, I Saw, I Conquered`,
        version: '1.0',
        steps: [
          {
            id: 'mios1-0002-1',
            description: `Collect 5 regional specialties in another player's world.`,
          },
          {
            id: 'mios1-0002-2',
            description: `Collect 20 regional specialties in another player's world.`,
          },
          {
            id: 'mios1-0002-3',
            description: `Collect 50 regional specialties in another player's world.`,
          },
        ],
      },
      {
        id: 'mios1-0003',
        title: `That's One Big Crystalfly`,
        description: 'Defeat an Anemo Hypostasis in Co-Op Mode.',
        version: '1.0',
      },
      {
        id: 'mios1-0004',
        title: `...And Still Smiling!`,
        description: 'Defeat an Electro Hypostasis in Co-Op Mode.',
        version: '1.0',
      },
      {
        id: 'mios1-0005',
        title: `You Have to Hit the Pillars`,
        description: 'Defeat a Geo Hypostasis in Co-Op Mode.',
        version: '1.0',
      },
      {
        id: 'mios1-0006',
        title: `Just Me and You, the Sky So Blue, and Almost Getting Killed by a Cryo Regisvine`,
        description: 'Defeat a Cryo Regisvine in Co-Op Mode.',
        version: '1.0',
      },
      {
        id: 'mios1-0007',
        title: `This Is Fine`,
        description: 'Defeat a Pyro Regisvine in Co-Op Mode.',
        version: '1.0',
      },
      {
        id: 'mios1-0008',
        title: `A Fish Called Rhodeia`,
        description: 'Defeat an Oceanid in Co-Op Mode.',
        version: '1.0',
      },
      {
        id: 'mios1-0009',
        title: `Wolf Pact`,
        description: 'Defeat the king of Wolvendom in Co-Op Mode.',
        version: '1.0',
      },
    ],
  },
  {
    id: 'mios2',
    entries: [
      {
        id: 'mios2-0001',
        title: `A Delusion's Abilities Don't Decide a Battle's Outcome`,
        description: 'Defeat Childe in Co-Op Mode.',
        version: '2.0',
      },
      {
        id: 'mios2-0002',
        title: `Moving Mountains`,
        description: 'Defeat a Primo Geovishap in Co-Op Mode.',
        version: '2.0',
      },
      {
        id: 'mios2-0003',
        title: `Blast from the Past`,
        description: 'Defeat Azhdaha in Co-Op Mode.',
        version: '2.0',
      },
      {
        id: 'mios2-0004',
        title: `Put on Ice`,
        description: 'Defeat a Cryo Hypostasis in Co-Op Mode.',
        version: '2.0',
      },
      {
        id: 'mios2-0005',
        title: `No Strings Attached, Anymore`,
        description: 'Defeat a Maguu Kenki in Co-Op Mode.',
        version: '2.0',
      },
      {
        id: 'mios2-0006',
        title: `Operation Bonfire`,
        description: 'Defeat a Pyro Hypostasis in Co-Op Mode.',
        version: '2.0',
      },
      {
        id: 'mios2-0007',
        title: `The Not-So-Perpetual Mechanical Array`,
        description: 'Defeat a Perpetual Mechanical Array in Co-Op Mode.',
        version: '2.0',
      },
    ],
  },
  {
    id: 'mios3',
    entries: [
      {
        id: 'mios3-0001',
        title: `Our Hearts as One`,
        description: 'Defeat a Thunder Manifestation in Co-Op Mode.',
        version: '3.0',
      },
      {
        id: 'mios3-0002',
        title: `Water, Basically`,
        description: 'Defeat a Hydro Hypostasis in Co-Op Mode.',
        version: '3.0',
      },
      {
        id: 'mios3-0003',
        title: `Dashing Through the Snow... and the Flames`,
        description: 'Defeat Signora in Co-Op Mode.',
        version: '3.0',
      },
      {
        id: 'mios3-0004',
        title: `The Whisperer in Darkness`,
        description: 'Defeat the Golden Wolflord in Co-Op Mode.',
        version: '3.0',
      },
      {
        id: 'mios3-0005',
        title: `Brave the Lightning's Glow...`,
        description: 'Defeat the Raiden Shogun in Co-Op Mode.',
        version: '3.0',
      },
      {
        id: 'mios3-0006',
        title: `Surpassing the Ancients' Wisdom`,
        description: 'Defeat the Ruin Serpent in Co-Op Mode.',
        version: '3.0',
      },
      {
        id: 'mios3-0007',
        title: `I'm a Flexitarian`,
        description: 'Defeat a Jadeplume Terrorshroom in Co-Op Mode.',
        version: '3.0',
      },
      {
        id: 'mios3-0008',
        title: `Electric Shock Hazard`,
        description: 'Defeat an Electro Regisvine in Co-Op Mode.',
        version: '3.0',
      },
    ],
  },
  {
    id: 'votim',
    entries: [
      {
        id: 'votim-0001',
        title: `Continental Explorer: Dragonspine`,
        description: 'Light up the Dragonspine map.',
        version: '1.2',
      },
      {
        id: 'votim-0002',
        title: `Peak Hopper`,
        description: 'Unlock all Teleport Waypoints in Dragonspine.',
        version: '1.2',
      },
      {
        id: 'votim-0003',
        title: `Seelie in the Snow`,
        version: '1.2',
        steps: [
          {
            id: 'votim-0003-1',
            description:
              'Follow 5 Warming Seelie in Dragonspine to their Seelie Courts.',
          },
          {
            id: 'votim-0003-2',
            description:
              'Follow 10 Warming Seelie in Dragonspine to their Seelie Courts.',
          },
          {
            id: 'votim-0003-3',
            description:
              'Follow 20 Warming Seelie in Dragonspine to their Seelie Courts.',
          },
        ],
      },
      {
        id: 'votim-0004',
        title: `Mountain of Treasure`,
        version: '1.2',
        steps: [
          {
            id: 'votim-0004-1',
            description: 'Open 40 chests in Dragonspine.',
          },
          {
            id: 'votim-0004-2',
            description: 'Open 80 chests in Dragonspine.',
          },
          {
            id: 'votim-0004-3',
            description: 'Open 160 chests in Dragonspine.',
          },
        ],
      },
      {
        id: 'votim-0005',
        title: `Scarlet Sprouts`,
        version: '1.2',
        steps: [
          {
            id: 'votim-0005-1',
            description: 'Raise the Frostbearing Tree to Lv. 4.',
          },
          {
            id: 'votim-0005-2',
            description: 'Raise the Frostbearing Tree to Lv. 8.',
          },
          {
            id: 'votim-0005-3',
            description: 'Raise the Frostbearing Tree to Lv. 12.',
          },
        ],
      },
      {
        id: 'votim-0006',
        title: `Skyfrost Nail`,
        description: 'Raise the strange column.',
        version: '1.2',
        requirements: 'Earned during In the Mountains.',
      },
      {
        id: 'votim-0007',
        title: `Dragonspear`,
        description: `Make a weapon from a dragon's remains.`,
        version: '1.2',
        requirements: 'Earned during The Festering Fang.',
      },
    ],
  },
  {
    id: 'arbs1',
    entries: [
      {
        id: 'arbs1-0001',
        title: `Realm Sans Frontières`,
        description: 'Use the Serenitea Pot to enter your realm.',
        version: '1.5',
      },
      {
        id: 'arbs1-0002',
        title: `High Adeptal Energy Readings Ahead`,
        version: '1.5',
        steps: [
          {
            id: 'arbs1-0002-1',
            description: 'Reach 20,000 Adeptal Energy in 1 realm layout.',
          },
          {
            id: 'arbs1-0002-2',
            description: 'Reach 20,000 Adeptal Energy in 2 realm layout.',
          },
          {
            id: 'arbs1-0002-3',
            description: 'Reach 20,000 Adeptal Energy in 3 realm layout.',
          },
        ],
      },
      {
        id: 'arbs1-0003',
        title: `Friend of the Realm`,
        version: '1.5',
        steps: [
          {
            id: 'arbs1-0003-1',
            description: 'Reach Trust Rank 4 with the teapot spirit.',
          },
          {
            id: 'arbs1-0003-2',
            description: 'Reach Trust Rank 7 with the teapot spirit.',
          },
          {
            id: 'arbs1-0003-3',
            description: 'Reach Trust Rank 10 with the teapot spirit.',
          },
        ],
      },
      {
        id: 'arbs1-0004',
        title: `T—T—T—Timberhochwandi`,
        version: '1.5',
        steps: [
          {
            id: 'arbs1-0004-1',
            description: 'Obtain 100 pieces of wood.',
          },
          {
            id: 'arbs1-0004-2',
            description: 'Obtain 600 pieces of wood.',
          },
          {
            id: 'arbs1-0004-3',
            description: 'Obtain 2000 pieces of wood.',
          },
        ],
      },
      {
        id: 'arbs1-0005',
        title: `If I Were a Rich Man`,
        version: '1.5',
        steps: [
          {
            id: 'arbs1-0005-1',
            description: 'Obtain 2000 realm currency.',
          },
          {
            id: 'arbs1-0005-2',
            description: 'Obtain 10000 realm currency.',
          },
          {
            id: 'arbs1-0005-3',
            description: 'Obtain 50000 realm currency.',
          },
        ],
      },
      {
        id: 'arbs1-0006',
        title: `Not Just a Small Bench`,
        version: '1.5',
        steps: [
          {
            id: 'arbs1-0006-1',
            description: 'Create 120 furnishings.',
          },
          {
            id: 'arbs1-0006-2',
            description: 'Create 300 furnishings.',
          },
          {
            id: 'arbs1-0006-3',
            description: 'Create 600 furnishings.',
          },
        ],
      },
      {
        id: 'arbs1-0007',
        title: `Color It In`,
        version: '1.5',
        steps: [
          {
            id: 'arbs1-0007-1',
            description: 'Create 50 dyes.',
          },
          {
            id: 'arbs1-0007-2',
            description: 'Create 200 dyes.',
          },
          {
            id: 'arbs1-0007-3',
            description: 'Create 600 dyes.',
          },
        ],
      },
      {
        id: 'arbs1-0008',
        title: `Precision Modeling`,
        version: '1.5',
        steps: [
          {
            id: 'arbs1-0008-1',
            description: 'Learn 60 furnishing blueprints.',
          },
          {
            id: 'arbs1-0008-2',
            description: 'Learn 120 furnishing blueprints.',
          },
          {
            id: 'arbs1-0008-3',
            description: 'Learn 180 furnishing blueprints.',
          },
        ],
      },
      {
        id: 'arbs1-0009',
        title: `My... Territory`,
        version: '1.5',
        steps: [
          {
            id: 'arbs1-0009-1',
            description: 'Place 50 furnishings in a single realm layout.',
          },
          {
            id: 'arbs1-0009-2',
            description: 'Place 150 furnishings in a single realm layout.',
          },
          {
            id: 'arbs1-0009-3',
            description: 'Place 300 furnishings in a single realm layout.',
          },
        ],
      },
    ],
  },
  {
    id: 'arbs2',
    entries: [
      {
        id: 'arbs2-0001',
        title: `Honored Guest of the Realm`,
        description: 'Invite a companion to move in to your Serenitea Pot.',
        version: '1.6',
      },
      {
        id: 'arbs2-0002',
        title: `Fireside Chats`,
        version: '1.6',
        steps: [
          {
            id: 'arbs2-0002-1',
            description: 'Unlock 10 interactions with your companions.	',
          },
          {
            id: 'arbs2-0002-2',
            description: 'Unlock 20 interactions with your companions.	',
          },
          {
            id: 'arbs2-0002-3',
            description: 'Unlock 30 interactions with your companions.	',
          },
        ],
      },
      {
        id: 'arbs2-0003',
        title: `Gifts All Around`,
        version: '1.6',
        steps: [
          {
            id: 'arbs2-0003-1',
            description: 'Receive 5 gifts from your companions.',
          },
          {
            id: 'arbs2-0003-2',
            description: 'Receive 10 gifts from your companions.',
          },
          {
            id: 'arbs2-0003-3',
            description: 'Receive 20 gifts from your companions.',
          },
        ],
      },
    ],
  },
  {
    id: 'arbs3',
    entries: [
      {
        id: 'arbs3-0001',
        title: `Just Like a Game of Chess`,
        description:
          'Set up a Realm Waypoint in your Serenitea Pot for the first time.',
        version: '3.0',
      },
      {
        id: 'arbs3-0002',
        title: `We're Going to Need More Crops!`,
        version: '3.0',
        steps: [
          {
            id: 'arbs3-0002-1',
            description: 'Gather 40 items in "A Path of Value: Jade Field."',
          },
          {
            id: 'arbs3-0002-2',
            description: 'Gather 200 items in "A Path of Value: Jade Field."',
          },
          {
            id: 'arbs3-0002-3',
            description: 'Gather 800 items in "A Path of Value: Jade Field."',
          },
        ],
      },
      {
        id: 'arbs3-0003',
        title: `My Blooming Abode`,
        version: '3.0',
        steps: [
          {
            id: 'arbs3-0003-1',
            description:
              'Gather 40 items in "A Path of Value: Luxuriant Glebe."',
          },
          {
            id: 'arbs3-0003-2',
            description:
              'Gather 200 items in "A Path of Value: Luxuriant Glebe."',
          },
          {
            id: 'arbs3-0003-3',
            description:
              'Gather 800 items in "A Path of Value: Luxuriant Glebe."',
          },
        ],
      },
      {
        id: 'arbs3-0004',
        title: `Stop! Gather Time.`,
        version: '3.0',
        steps: [
          {
            id: 'arbs3-0004-1',
            description:
              'Gather 40 items in "A Path of Value: Orderly Meadow."',
          },
          {
            id: 'arbs3-0004-2',
            description:
              'Gather 200 items in "A Path of Value: Orderly Meadow."',
          },
          {
            id: 'arbs3-0004-3',
            description:
              'Gather 800 items in "A Path of Value: Orderly Meadow."',
          },
        ],
      },
    ],
  },
  {
    id: 'itiotaes1',
    entries: [
      {
        id: 'itiotaes1-0001',
        title: `Continental Explorer: Land of Surging Thunder (I)`,
        description:
          'Light up the Narukami Island, Kannazuka, and Yashiori Island areas of the Inazuma map.',
        version: '2.0',
      },
      {
        id: 'itiotaes1-0002',
        title: `Thunderbolting Across the Land (I)`,
        description:
          'Unlock all Teleport Waypoints in the Narukami Island, Kannazuka, and Yashiori Island areas of Inazuma.',
        version: '2.0',
      },
      {
        id: 'itiotaes1-0003',
        title: `Sanctuary Pilgrim: Inazuma Tenryou (I)`,
        description:
          'Unlock all Shrines of Depths in the Narukami Island, Kannazuka, and Yashiori Island areas of Inazuma.',
        version: '2.0',
      },
      {
        id: 'itiotaes1-0004',
        title: `Eternal Thunder`,
        description:
          'Upgrade the Statues of The Seven in Inazuma to their maximum level.	',
        version: '2.0',
      },
      {
        id: 'itiotaes1-0005',
        title: `Divine Roots`,
        description: `Reach the Max Level of Sacred Sakura's Favor.`,
        version: '2.0',
      },
      {
        id: 'itiotaes1-0006',
        title: `Naku Weed Whacker (I)`,
        version: '2.0',
        steps: [
          {
            id: 'itiotaes1-0006-1',
            description:
              'Follow 10 Electro Seelie on Narukami Island, Kannazuka, and Yashiori Island in Inazuma.',
          },
          {
            id: 'itiotaes1-0006-2',
            description:
              'Follow 20 Electro Seelie on Narukami Island, Kannazuka, and Yashiori Island in Inazuma.',
          },
          {
            id: 'itiotaes1-0006-3',
            description:
              'Follow 40 Electro Seelie on Narukami Island, Kannazuka, and Yashiori Island in Inazuma.',
          },
        ],
      },
      {
        id: 'itiotaes1-0007',
        title: `Lights Will Guide You Home (I)`,
        version: '2.0',
        steps: [
          {
            id: 'itiotaes1-0007-1',
            description:
              'Follow 4 Seelie to their Seelie Courts on Narukami Island, Kannazuka, and Yashiori Island in Inazuma.',
          },
          {
            id: 'itiotaes1-0007-2',
            description:
              'Follow 8 Seelie to their Seelie Courts on Narukami Island, Kannazuka, and Yashiori Island in Inazuma.',
          },
          {
            id: 'itiotaes1-0007-3',
            description:
              'Follow 16 Seelie to their Seelie Courts on Narukami Island, Kannazuka, and Yashiori Island in Inazuma.',
          },
        ],
      },
      {
        id: 'itiotaes1-0008',
        title: `Lightning-Riding Treasure Hunter (I)`,
        version: '2.0',
        steps: [
          {
            id: 'itiotaes1-0008-1',
            description:
              'Open 100 chests on Narukami Island, Kannazuka, and Yashiori Island in Inazuma.',
          },
          {
            id: 'itiotaes1-0008-2',
            description:
              'Open 200 chests on Narukami Island, Kannazuka, and Yashiori Island in Inazuma.',
          },
          {
            id: 'itiotaes1-0008-3',
            description:
              'Open 300 chests on Narukami Island, Kannazuka, and Yashiori Island in Inazuma.',
          },
        ],
      },
      {
        id: 'itiotaes1-0009',
        title: `Tatara Tales`,
        description: 'Resolve the Crisis at the Mikage Furnace.',
        version: '2.0',
        requirements: 'Complete Tatara Tales.',
      },
      {
        id: 'itiotaes1-0010',
        title: `Echo of Fury`,
        description: `Complete "Orobashi's Legacy."`,
        version: '2.0',
      },
      {
        id: 'itiotaes1-0011',
        title: `Lightning-Riding Adventurer (I)`,
        version: '2.0',
        steps: [
          {
            id: 'itiotaes1-0011-1',
            description:
              'Complete 6 Open World mechanism-activated Time Trial Challenges on Narukami Island, Kannazuka, and Yashiori Island in Inazuma.',
          },
          {
            id: 'itiotaes1-0011-2',
            description:
              'Complete 12 Open World mechanism-activated Time Trial Challenges on Narukami Island, Kannazuka, and Yashiori Island in Inazuma.',
          },
          {
            id: 'itiotaes1-0011-3',
            description:
              'Complete 24 Open World mechanism-activated Time Trial Challenges on Narukami Island, Kannazuka, and Yashiori Island in Inazuma.',
          },
        ],
      },
      {
        id: 'itiotaes1-0012',
        title: `Spring Cleaning`,
        description: 'Complete the Sacred Sakura Cleansing Ritual.',
        version: '2.0',
      },
    ],
  },
  {
    id: 'itiotaes2',
    entries: [
      {
        id: 'itiotaes2-0001',
        title: `Continental Explorer: Land of Surging Thunder (II)`,
        description:
          'Light up the Watatsumi Island and Seirai Island areas of the Inazuma map.',
        version: '2.1',
      },
      {
        id: 'itiotaes2-0002',
        title: `Thunderbolting Across the Land (II)`,
        description:
          'Unlock all Teleport Waypoints in the Watatsumi Island and Seirai Island areas of Inazuma.',
        version: '2.1',
      },
      {
        id: 'itiotaes2-0003',
        title: `Sanctuary Pilgrim: Inazuma Tenryou (II)`,
        description:
          'Unlock all Shrines of Depths in the Watatsumi Island and Seirai Island areas of the map.',
        version: '2.1',
      },
      {
        id: 'itiotaes2-0004',
        title: `Naku Weed Whacker (II)`,
        version: '2.1',
        steps: [
          {
            id: 'itiotaes2-0004-1',
            description:
              'Follow 4 Electro Seelie on Watatsumi Island and Seirai Island in Inazuma.',
          },
          {
            id: 'itiotaes2-0004-2',
            description:
              'Follow 8 Electro Seelie on Watatsumi Island and Seirai Island in Inazuma.',
          },
          {
            id: 'itiotaes2-0004-3',
            description:
              'Follow 16 Electro Seelie on Watatsumi Island and Seirai Island in Inazuma.',
          },
        ],
      },
      {
        id: 'itiotaes2-0005',
        title: `Lights Will Guide You Home (II)`,
        description:
          'Follow 6 Seelie to their Seelie Courts on Watatsumi Island and Seirai Island in Inazuma.',
        version: '2.1',
      },
      {
        id: 'itiotaes2-0006',
        title: `Lightning-Riding Treasure Hunter (II)`,
        version: '2.1',
        steps: [
          {
            id: 'itiotaes2-0006-1',
            description:
              'Open 40 chests on Watatsumi Island and Seirai Island in Inazuma.',
          },
          {
            id: 'itiotaes2-0006-2',
            description:
              'Open 80 chests on Watatsumi Island and Seirai Island in Inazuma.',
          },
          {
            id: 'itiotaes2-0006-3',
            description:
              'Open 160 chests on Watatsumi Island and Seirai Island in Inazuma.',
          },
        ],
      },
      {
        id: 'itiotaes2-0007',
        title: `Lightning-Riding Adventurer (II)`,
        version: '2.1',
        steps: [
          {
            id: 'itiotaes2-0007-1',
            description:
              'Complete 6 Open World mechanism-activated Time Trial Challenges on Watatsumi Island and Seirai Island in Inazuma.',
          },
          {
            id: 'itiotaes2-0007-2',
            description:
              'Complete 12 Open World mechanism-activated Time Trial Challenges on Watatsumi Island and Seirai Island in Inazuma.',
          },
          {
            id: 'itiotaes2-0007-3',
            description:
              'Complete 24 Open World mechanism-activated Time Trial Challenges on Watatsumi Island and Seirai Island in Inazuma.',
          },
        ],
      },
      {
        id: 'itiotaes2-0008',
        title: `Seirai Stormchasers`,
        description: 'Complete "Seirai Stormchasers"',
        version: '2.1',
      },
      {
        id: 'itiotaes2-0009',
        title: `The Same Moonlight`,
        description: 'Complete "The Moon-Bathed Deep"',
        version: '2.1',
      },
    ],
  },
  {
    id: 'tcotsof',
    entries: [
      {
        id: 'tcotsof-0001',
        title: `Continental Explorer: Tsurumi Island`,
        description: 'Light up the Tsurumi Island map.',
        version: '2.2',
      },
      {
        id: 'tcotsof-0002',
        title: `Fog's Edge`,
        description: 'Unlock all Teleport Waypoints in Tsurumi Island',
        version: '2.2',
      },
      {
        id: 'tcotsof-0003',
        title: `Sanctuary Pilgrim: Tsurumi Island`,
        description: 'Unlock all Shrines of Depths on Tsurumi Island.',
        version: '2.2',
      },
      {
        id: 'tcotsof-0004',
        title: `Flashes in the Night`,
        description: 'Follow 6 Electro Seelie on Tsurumi Island.',
        version: '2.2',
      },
      {
        id: 'tcotsof-0005',
        title: `Foggy Guidance`,
        description:
          'Follow 6 Seelie on Tsurumi Island to their Seelie Courts.',
        version: '2.2',
      },
      {
        id: 'tcotsof-0006',
        title: `Lost Treasure Hunter`,
        version: '2.2',
        steps: [
          {
            id: 'tcotsof-0006-1',
            description: 'Open 30 chests on Tsurumi Island.',
          },
          {
            id: 'tcotsof-0006-2',
            description: 'Open 60 chests on Tsurumi Island.',
          },
          {
            id: 'tcotsof-0006-3',
            description: 'Open 120 chests on Tsurumi Island.',
          },
        ],
      },
      {
        id: 'tcotsof-0007',
        title: `Lost Adventurer`,
        version: '2.2',
        steps: [
          {
            id: 'tcotsof-0007-1',
            description:
              'Complete 4 Open World mechanism-activated Time Trial Challenges on Tsurumi Island.',
          },
          {
            id: 'tcotsof-0007-2',
            description:
              'Complete 8 Open World mechanism-activated Time Trial Challenges on Tsurumi Island.',
          },
          {
            id: 'tcotsof-0007-3',
            description:
              'Complete 12 Open World mechanism-activated Time Trial Challenges on Tsurumi Island.',
          },
        ],
      },
      {
        id: 'tcotsof-0008',
        title: `Thunder Is Forever`,
        description:
          "Complete a certain author's reference-gathering commission.",
        version: '2.2',
        requirements: 'Complete The Sun-Wheel and Mt. Kanna',
      },
    ],
  },
  {
    id: 'tfgs1',
    entries: [
      {
        id: 'tfgs1-0001',
        title: `Ding Ding Ding!`,
        version: '2.1',
        steps: [
          { id: 'tfgs1-1-1', description: 'Catch 100 fish successfully.' },
          { id: 'tfgs1-1-2', description: 'Catch 500 fish successfully.' },
          { id: 'tfgs1-1-3', description: 'Catch 2000 fish successfully.' },
        ],
      },
      {
        id: 'tfgs1-0002',
        title: `Amateurs Hammer Nails Into Hooks`,
        description: 'Catch your first fish',
        version: '2.1',
      },
      {
        id: 'tfgs1-0003',
        title: `"Do you need a fishtank to go with that?"`,
        description: 'Catch your first Ornamental Fish.',
        version: '2.1',
      },
      {
        id: 'tfgs1-0004',
        title: `Yon Mirror'd Moon, Broken`,
        description:
          'Catch a fish that only comes out at night for the first time.',
        version: '2.1',
      },
      {
        id: 'tfgs1-0005',
        title: `"Call Me Ishmael."`,
        description: "Catch one fish in another player's world.",
        version: '2.1',
      },
      {
        id: 'tfgs1-0006',
        title: `Fishy Motive`,
        description: 'Buy a fishing rod from the Fishing Association.',
        version: '2.1',
      },
      {
        id: 'tfgs1-0007',
        title: `Into the Waters`,
        description: 'Successfully make 20 Bait.',
        version: '2.1',
      },
      {
        id: 'tfgs1-0008',
        title: `A Right Proper Angler`,
        description: 'Unlock 20 fish Archive entries.',
        version: '2.1',
      },
      {
        id: 'tfgs1-0009',
        title: `Intermission`,
        description:
          'Catch a scattered page of a book while fishing in Inazuma.',
        version: '2.1',
        requirements: 'Catch Torn Page: Toki Alley Tales (V).',
      },
      {
        id: 'tfgs1-00010',
        title: `Stabilizer`,
        description:
          'Catch fish successfully 10 times while always staying inside the Ideal Tension Zone.',
        version: '2.1',
      },
    ],
  },
  {
    id: 'tlod',
    entries: [
      {
        id: 'tlod-0001',
        title: `"...You Do Not Know the Night..."`,
        description: 'Light up the Enkanomiya map.',
        version: '2.4',
      },
      {
        id: 'tlod-0002',
        title: `The Highest Authority in the Land`,
        description: 'Unlock all Teleport Waypoints in Enkanomiya.',
        version: '2.4',
      },
      {
        id: 'tlod-0003',
        title: `Phosphoros' Guidance`,
        version: '2.4',
        steps: [
          {
            id: 'tlod-0003-1',
            description:
              'Follow 6 Seelie in Enkanomiya to their Seelie Courts.',
          },
          {
            id: 'tlod-0003-2',
            description:
              'Follow 15 Seelie in Enkanomiya to their Seelie Courts.',
          },
          {
            id: 'tlod-0003-3',
            description:
              'Follow 30 Seelie in Enkanomiya to their Seelie Courts.',
          },
        ],
      },
      {
        id: 'tlod-0004',
        title: `Hesperus' Boons`,
        version: '2.4',
        steps: [
          { id: 'tlod-0004-1', description: 'Open 40 chests in Enkanomiya.' },
          { id: 'tlod-0004-2', description: 'Open 80 chests in Enkanomiya.' },
          { id: 'tlod-0004-3', description: 'Open 160 chests in Enkanomiya.' },
        ],
      },
      {
        id: 'tlod-0005',
        title: `Kairos' Constancy `,
        version: '2.4',
        steps: [
          {
            id: 'tlod-0005-1',
            description:
              'Complete 3 Open World mechanism-activated Time Trial Challenges in Enkanomiya.',
          },
          {
            id: 'tlod-0005-2',
            description:
              'Complete 6 Open World mechanism-activated Time Trial Challenges in Enkanomiya.',
          },
          {
            id: 'tlod-0005-3',
            description:
              'Complete 12 Open World mechanism-activated Time Trial Challenges in Enkanomiya.',
          },
        ],
      },
      {
        id: 'tlod-0006',
        title: `Fire Rat's Robe, Dragon-Head Pearl, Sacred Offering Bowl, and...`,
        description: 'Obtain the coral branch that Tsuyuko requested.',
        version: '2.4',
        requirements:
          'Earned during part 3 of The Subterranean Trials of Drake and Serpent.',
      },
    ],
  },
  {
    id: 'chasmlighter',
    entries: [
      {
        id: 'chasmlighter-0001',
        title: `Chasm Conqueror`,
        description: 'Light up The Chasm surface map.',
        version: '2.6',
        requirements: 'Unlock the Statue of The Seven found in the Chasm.',
      },
      {
        id: 'chasmlighter-0002',
        title: `Perilous Plunge`,
        description: 'Light up The Chasm: Underground Mines map.',
        version: '2.6',
        requirements: 'Earned during The Chasm Delvers.',
      },
      {
        id: 'chasmlighter-0003',
        title: `Into the Depths`,
        description:
          'Unlock all Teleport Waypoints in The Chasm and its Underground Mines.',
        version: '2.6',
      },
      {
        id: 'chasmlighter-0004',
        title: `Gorge Guide`,
        version: '2.6',
        steps: [
          {
            id: 'chasmlighter-0004-1',
            description: 'Follow 6 Seelie in The Chasm to their Seelie Courts.',
          },
          {
            id: 'chasmlighter-0004-2',
            description:
              'Follow 12 Seelie in The Chasm to their Seelie Courts.',
          },
          {
            id: 'chasmlighter-0004-3',
            description:
              'Follow 24 Seelie in The Chasm to their Seelie Courts.',
          },
        ],
      },
      {
        id: 'chasmlighter-0005',
        title: `Chasm Treasure Hunter`,
        version: '2.6',
        steps: [
          {
            id: 'chasmlighter-0005-1',
            description: 'Open 50 chests in The Chasm.',
          },
          {
            id: 'chasmlighter-0005-2',
            description: 'Open 100 chests in The Chasm.',
          },
          {
            id: 'chasmlighter-0005-3',
            description: 'Open 200 chests in The Chasm.',
          },
        ],
      },
      {
        id: 'chasmlighter-0006',
        title: `Chasm Adventurer`,
        version: '2.6',
        steps: [
          {
            id: 'chasmlighter-0006-1',
            description:
              'Complete 3 Open World mechanism-activated Time Trial Challenges in The Chasm.',
          },
          {
            id: 'chasmlighter-0006-2',
            description:
              'Complete 6 Open World mechanism-activated Time Trial Challenges in The Chasm.',
          },
          {
            id: 'chasmlighter-0006-3',
            description:
              'Complete 12 Open World mechanism-activated Time Trial Challenges in The Chasm.',
          },
        ],
      },
      {
        id: 'chasmlighter-0007',
        title: `Arch-Illuminator`,
        description:
          'Enhance the Lumenstone Adjuvant to its highest possible level.',
        version: '2.6',
      },
      {
        id: 'chasmlighter-0008',
        title: `"When the Seal Is Broken..."`,
        description: 'Remove the obstacles to your entry into the mines.',
        version: '2.6',
        requirements: 'Complete Surreptitious Seven-Star Seal Sundering.',
      },
      {
        id: 'chasmlighter-0009',
        title: `Exploration Underway`,
        description:
          'Complete the exploration commission from the Ministry of Civil Affairs.',
        version: '2.6',
        requirements: 'Earned during Wherefore Did the Spiritstone Descend?',
      },
    ],
  },
  {
    id: 'strol',
    entries: [
      {
        id: 'strol-0001',
        title: `Continental Explorer: Sumeru Boscage`,
        description:
          'Light up the maps of the following areas in Sumeru: Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
        version: '3.0',
      },
      {
        id: 'strol-0002',
        title: `Forest Roamer`,
        description:
          'Unlock all Teleport Waypoints in the following areas in Sumeru: Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
        version: '3.0',
      },
      {
        id: 'strol-0003',
        title: `Sanctuary Pilgrim: Sumeru Boscage`,
        description:
          'Unlock all the Shrines of Depths in the following areas in Sumeru: Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
        version: '3.0',
      },
      {
        id: 'strol-0004',
        title: `Fluorescent Bloom`,
        description:
          'Upgrade the Statues of The Seven in Sumeru to their maximum level.',
        version: '3.0',
      },
      {
        id: 'strol-0005',
        title: `Culmination of the Great Dream`,
        description: 'Reach the Max Level of the Tree of Dreams in Vanarana',
        version: '3.0',
      },
      {
        id: 'strol-0006',
        title: `Woodland Guide`,
        version: '3.0',
        steps: [
          {
            id: 'strol-0006-1',
            description:
              'Follow a total of 10 Seelie to their Seelie Courts in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
          {
            id: 'strol-0006-2',
            description:
              'Follow a total of 20 Seelie to their Seelie Courts in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
          {
            id: 'strol-0006-3',
            description:
              'Follow a total of 40 Seelie to their Seelie Courts in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
        ],
      },
      {
        id: 'strol-0007',
        title: `Treasure Hunter of the Shimmering Woods`,
        version: '3.0',
        steps: [
          {
            id: 'strol-0007-1',
            description:
              'Open a total of 100 treasure chests in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
          {
            id: 'strol-0007-2',
            description:
              'Open a total of 200 treasure chests in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
          {
            id: 'strol-0007-3',
            description:
              'Open a total of 400 treasure chests in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
        ],
      },
      {
        id: 'strol-0008',
        title: `Adventurer of the Shimmering Woods`,
        version: '3.0',
        steps: [
          {
            id: 'strol-0008-1',
            description:
              'Complete a total of 10 Open World Time Trial Challenges in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
          {
            id: 'strol-0008-2',
            description:
              'Complete a total of 20 Open World Time Trial Challenges in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
          {
            id: 'strol-0008-3',
            description:
              'Complete a total of 30 Open World Time Trial Challenges in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
        ],
      },
      {
        id: 'strol-0009',
        title: `The Forest Will Remember`,
        description: 'Complete "Aranyaka."',
        version: '3.0',
      },
    ],
  },
]

export { categories, categoryEntries }

