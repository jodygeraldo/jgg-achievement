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
        id: 'wotw-',
        title: ``,
        description: '',
        version: '3.0',
      },
      {
        id: 'wotw-',
        title: ``,
        version: '3.0',
        steps: [
          { id: 'wotw--1', description: '' },
          { id: 'wotw--2', description: '' },
          { id: 'wotw--3', description: '' },
        ],
      },
    ],
  },
  {
    id: 'moth',
    entries: [
      {
        id: 'moth-',
        title: ``,
        description: '',
        version: '3.0',
      },
      {
        id: 'moth-',
        title: ``,
        version: '3.0',
        steps: [
          { id: 'moth--1', description: '' },
          { id: 'moth--2', description: '' },
          { id: 'moth--3', description: '' },
        ],
      },
    ],
  },
  {
    id: 'mts1',
    entries: [
      {
        id: 'mts1-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'mts1-',
        title: ``,
        version: '1.0',
        steps: [
          { id: 'mts1--1', description: '' },
          { id: 'mts1--2', description: '' },
          { id: 'mts1--3', description: '' },
        ],
      },
    ],
  },
  {
    id: 'mts2',
    entries: [
      {
        id: 'mts2-',
        title: ``,
        description: '',
        version: '2.0',
      },
      {
        id: 'mts2-',
        title: ``,
        version: '2.0',
        steps: [
          { id: 'mts2--1', description: '' },
          { id: 'mts2--2', description: '' },
          { id: 'mts2--3', description: '' },
        ],
      },
    ],
  },
  {
    id: 'mts3',
    entries: [
      {
        id: 'mts3-',
        title: ``,
        description: '',
        version: '3.0',
      },
      {
        id: 'mts3-',
        title: ``,
        version: '3.0',
        steps: [
          { id: 'mts3--1', description: '' },
          { id: 'mts3--2', description: '' },
          { id: 'mts3--3', description: '' },
        ],
      },
    ],
  },
  {
    id: 'taoa',
    entries: [
      {
        id: 'taoa-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'taoa-',
        title: ``,
        version: '1.0',
        steps: [
          { id: 'taoa--1', description: '' },
          { id: 'taoa--2', description: '' },
          { id: 'taoa--3', description: '' },
        ],
      },
    ],
  },
  {
    id: 'thj',
    entries: [
      {
        id: 'thj-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'thj-',
        title: ``,
        version: '1.0',
        steps: [
          { id: 'thj--1', description: '' },
          { id: 'thj--2', description: '' },
          { id: 'thj--3', description: '' },
        ],
      },
    ],
  },
  {
    id: 'mtcows',
    entries: [
      {
        id: 'mtcows-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'mtcows-',
        title: ``,
        version: '1.0',
        steps: [
          { id: 'mtcows--1', description: '' },
          { id: 'mtcows--2', description: '' },
          { id: 'mtcows--3', description: '' },
        ],
      },
    ],
  },
  {
    id: 'lthosac',
    entries: [
      {
        id: 'lthosac-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'lthosac-',
        title: ``,
        version: '1.0',
        steps: [
          { id: 'lthosac--1', description: '' },
          { id: 'lthosac--2', description: '' },
          { id: 'lthosac--3', description: '' },
        ],
      },
    ],
  },
  {
    id: 'es',
    entries: [
      {
        id: 'es-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'es-',
        title: ``,
        version: '1.0',
        steps: [
          {
            id: 'es--1',
            description: '',
          },
          {
            id: 'es--2',
            description: '',
          },
          {
            id: 'es--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'marksmanship',
    entries: [
      {
        id: 'marksmanship-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'marksmanship-',
        title: ``,
        version: '1.0',
        steps: [
          {
            id: 'marksmanship--1',
            description: '',
          },
          {
            id: 'marksmanship--2',
            description: '',
          },
          {
            id: 'marksmanship--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'cs1',
    entries: [
      {
        id: 'cs1-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'cs1-',
        title: ``,
        version: '1.0',
        steps: [
          {
            id: 'cs1--1',
            description: '',
          },
          {
            id: 'cs1--2',
            description: '',
          },
          {
            id: 'cs1--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'cs2',
    entries: [
      {
        id: 'cs2-',
        title: ``,
        description: '',
        version: '1.1',
      },
      {
        id: 'cs2-',
        title: ``,
        version: '1.1',
        steps: [
          { id: 'cs2--1', description: '' },
          { id: 'cs2--2', description: '' },
          { id: 'cs2--3', description: '' },
        ],
      },
    ],
  },
  {
    id: 'cs3',
    entries: [
      {
        id: 'cs3-',
        title: ``,
        description: '',
        version: '1.2',
      },
      {
        id: 'cs3-',
        title: ``,
        version: '1.2',
        steps: [
          { id: 'cs3--1', description: '' },
          { id: 'cs3--2', description: '' },
          { id: 'cs3--3', description: '' },
        ],
      },
    ],
  },
  {
    id: 'cs4',
    entries: [
      {
        id: 'cs4-',
        title: ``,
        description: '',
        version: '2.0',
      },
      {
        id: 'cs4-',
        title: ``,
        version: '2.0',
        steps: [
          { id: 'cs4--1', description: '' },
          { id: 'cs4--2', description: '' },
          { id: 'cs4--3', description: '' },
        ],
      },
    ],
  },
  {
    id: 'cs5',
    entries: [
      {
        id: 'cs5-',
        title: ``,
        description: '',
        version: '2.6',
      },
      {
        id: 'cs5-',
        title: ``,
        version: '2.6',
        steps: [
          {
            id: 'cs5--1',
            description: '',
          },
          {
            id: 'cs5--2',
            description: '',
          },
          {
            id: 'cs5--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'dasas1',
    entries: [
      {
        id: 'dasas1-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'dasas1-',
        title: ``,
        version: '1.0',
        steps: [
          {
            id: 'dasas1--1',
            description: '',
          },
          {
            id: 'dasas1--2',
            description: '',
          },
          {
            id: 'dasas1--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'os1',
    entries: [
      {
        id: 'os1-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'os1-',
        title: ``,
        version: '1.0',
        steps: [
          {
            id: 'os1--1',
            description: '',
          },
          {
            id: 'os1--2',
            description: '',
          },
          {
            id: 'os1--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'sdnbits1',
    entries: [
      {
        id: 'sdnbits1-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'sdnbits1-',
        title: ``,
        version: '1.0',
        steps: [
          {
            id: 'sdnbits1--1',
            description: '',
          },
          {
            id: 'sdnbits1--2',
            description: '',
          },
          {
            id: 'sdnbits1--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'shns1',
    entries: [
      {
        id: 'shns1-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'shns1-',
        title: ``,
        version: '1.0',
        steps: [
          {
            id: 'shns1--1',
            description: '',
          },
          {
            id: 'shns1--2',
            description: '',
          },
          {
            id: 'shns1--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'mios1',
    entries: [
      {
        id: 'mios1-',
        title: ``,
        description: '',
        version: '1.0',
      },
      {
        id: 'mios1-',
        title: ``,
        version: '1.0',
        steps: [
          {
            id: 'mios1--1',
            description: '',
          },
          {
            id: 'mios1--2',
            description: '',
          },
          {
            id: 'mios1--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'mios2',
    entries: [
      {
        id: 'mios2-',
        title: ``,
        description: '',
        version: '2.0',
      },
      {
        id: 'mios2-',
        title: ``,
        version: '2.0',
        steps: [
          {
            id: 'mios2--1',
            description: '',
          },
          {
            id: 'mios2--2',
            description: '',
          },
          {
            id: 'mios2--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'mios3',
    entries: [
      {
        id: 'mios3-',
        title: ``,
        description: '',
        version: '3.0',
      },
      {
        id: 'mios3-',
        title: ``,
        version: '3.0',
        steps: [
          {
            id: 'mios3--1',
            description: '',
          },
          {
            id: 'mios3--2',
            description: '',
          },
          {
            id: 'mios3--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'votim',
    entries: [
      {
        id: 'votim-',
        title: ``,
        description: '',
        version: '1.2',
      },
      {
        id: 'votim-',
        title: ``,
        version: '1.2',
        steps: [
          {
            id: 'votim--1',
            description: '',
          },
          {
            id: 'votim--2',
            description: '',
          },
          {
            id: 'votim--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'arbs1',
    entries: [
      {
        id: 'arbs1-',
        title: ``,
        description: '',
        version: '1.5',
      },
      {
        id: 'arbs1-',
        title: ``,
        version: '1.5',
        steps: [
          {
            id: 'arbs1--1',
            description: '',
          },
          {
            id: 'arbs1--2',
            description: '',
          },
          {
            id: 'arbs1--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'arbs2',
    entries: [
      {
        id: 'arbs2-',
        title: ``,
        description: '',
        version: '1.6',
      },
      {
        id: 'arbs2-',
        title: ``,
        version: '1.6',
        steps: [
          {
            id: 'arbs2--1',
            description: '',
          },
          {
            id: 'arbs2--2',
            description: '',
          },
          {
            id: 'arbs2--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'arbs3',
    entries: [
      {
        id: 'arbs3-',
        title: ``,
        description: '',
        version: '2.0',
      },
      {
        id: 'arbs3-',
        title: ``,
        version: '2.0',
        steps: [
          {
            id: 'arbs3--1',
            description: '',
          },
          {
            id: 'arbs3--2',
            description: '',
          },
          {
            id: 'arbs3--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'itiotaes1',
    entries: [
      {
        id: 'itiotaes1-',
        title: ``,
        description: '',
        version: '2.0',
      },
      {
        id: 'itiotaes1-',
        title: ``,
        version: '2.0',
        steps: [
          {
            id: 'itiotaes1--1',
            description: '',
          },
          {
            id: 'itiotaes1--2',
            description: '',
          },
          {
            id: 'itiotaes1--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'itiotaes2',
    entries: [
      {
        id: 'itiotaes2-',
        title: ``,
        description: '',
        version: '2.1',
      },
      {
        id: 'itiotaes2-',
        title: ``,
        version: '2.1',
        steps: [
          {
            id: 'itiotaes2--1',
            description: '',
          },
          {
            id: 'itiotaes2--2',
            description: '',
          },
          {
            id: 'itiotaes2--3',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: 'tcotsof',
    entries: [
      {
        id: 'tcotsof-ceti',
        title: `Continental Explorer: Tsurumi Island`,
        description: 'Light up the Tsurumi Island map.',
        version: '2.2',
      },
      {
        id: 'tcotsof-fe',
        title: `Fog's Edge`,
        description: 'Unlock all Teleport Waypoints in Tsurumi Island',
        version: '2.2',
      },
      {
        id: 'tcotsof-spti',
        title: `Sanctuary Pilgrim: Tsurumi Island`,
        description: 'Unlock all Shrines of Depths on Tsurumi Island.',
        version: '2.2',
      },
      {
        id: 'tcotsof-fitn',
        title: `Flashes in the Night`,
        description: 'Follow 6 Electro Seelie on Tsurumi Island.',
        version: '2.2',
      },
      {
        id: 'tcotsof-fg',
        title: `Foggy Guidance`,
        description:
          'Follow 6 Seelie on Tsurumi Island to their Seelie Courts.',
        version: '2.2',
      },
      {
        id: 'tcotsof-lth',
        title: `Lost Treasure Hunter`,
        version: '2.2',
        steps: [
          {
            id: 'tcotsof-lth-1',
            description: 'Open 30 chests on Tsurumi Island.',
          },
          {
            id: 'tcotsof-lth-2',
            description: 'Open 60 chests on Tsurumi Island.',
          },
          {
            id: 'tcotsof-lth-3',
            description: 'Open 120 chests on Tsurumi Island.',
          },
        ],
      },
      {
        id: 'tcotsof-la',
        title: `Lost Adventurer`,
        version: '2.2',
        steps: [
          {
            id: 'tcotsof-la-1',
            description:
              'Complete 4 Open World mechanism-activated Time Trial Challenges on Tsurumi Island.',
          },
          {
            id: 'tcotsof-la-2',
            description:
              'Complete 8 Open World mechanism-activated Time Trial Challenges on Tsurumi Island.',
          },
          {
            id: 'tcotsof-la-3',
            description:
              'Complete 12 Open World mechanism-activated Time Trial Challenges on Tsurumi Island.',
          },
        ],
      },
      {
        id: 'tcotsof-tif',
        title: `Thunder Is Forever`,
        description:
          "Complete a certain author's reference-gathering commission.",
        version: '2.2',
      },
    ],
  },
  {
    id: 'tfgs1',
    entries: [
      {
        id: 'tfgs1-ddd',
        title: `Ding Ding Ding!`,
        version: '2.1',
        steps: [
          { id: 'tfgs1-ddd-1', description: 'Catch 100 fish successfully.' },
          { id: 'tfgs1-ddd-2', description: 'Catch 500 fish successfully.' },
          { id: 'tfgs1-ddd-3', description: 'Catch 2000 fish successfully.' },
        ],
      },
      {
        id: 'tfgs1-ahnih',
        title: `Amateurs Hammer Nails Into Hooks`,
        description: 'Catch your first fish',
        version: '2.1',
      },
      {
        id: 'tfgs1-dynaftgwt',
        title: `"Do you need a fishtank to go with that?"`,
        description: 'Catch your first Ornamental Fish.',
        version: '2.1',
      },
      {
        id: 'tfgs1-ymmb',
        title: `Yon Mirror'd Moon, Broken`,
        description:
          'Catch a fish that only comes out at night for the first time.',
        version: '2.1',
      },
      {
        id: 'tfgs1-cmi',
        title: `"Call Me Ishmael."`,
        description: "Catch one fish in another player's world.",
        version: '2.1',
      },
      {
        id: 'tfgs1-fm',
        title: `Fishy Motive`,
        description: 'Buy a fishing rod from the Fishing Association.',
        version: '2.1',
      },
      {
        id: 'tfgs1-itw',
        title: `Into the Waters`,
        description: 'Successfully make 20 Bait.',
        version: '2.1',
      },
      {
        id: 'tfgs1-arpa',
        title: `A Right Proper Angler`,
        description: 'Unlock 20 fish Archive entries.',
        version: '2.1',
      },
      {
        id: 'tfgs1-i',
        title: `Intermission`,
        description:
          'Catch a scattered page of a book while fishing in Inazuma.',
        version: '2.1',
      },
      {
        id: 'tfgs1-s',
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
        id: 'tlod-ydnktn',
        title: `"...You Do Not Know the Night..."`,
        description: 'Light up the Enkanomiya map.',
        version: '2.4',
      },
      {
        id: 'tlod-thaitl',
        title: `The Highest Authority in the Land`,
        description: 'Unlock all Teleport Waypoints in Enkanomiya.',
        version: '2.4',
      },
      {
        id: 'tlod-pg',
        title: `Phosphoros' Guidance`,
        version: '2.4',
        steps: [
          {
            id: 'tlod-pg-1',
            description:
              'Follow 6 Seelie in Enkanomiya to their Seelie Courts.',
          },
          {
            id: 'tlod-pg-2',
            description:
              'Follow 15 Seelie in Enkanomiya to their Seelie Courts.',
          },
          {
            id: 'tlod-pg-3',
            description:
              'Follow 30 Seelie in Enkanomiya to their Seelie Courts.',
          },
        ],
      },
      {
        id: 'tlod-hb',
        title: `Hesperus' Boons`,
        version: '2.4',
        steps: [
          { id: 'tlod-hb-1', description: 'Open 40 chests in Enkanomiya.' },
          { id: 'tlod-hb-2', description: 'Open 80 chests in Enkanomiya.' },
          { id: 'tlod-hb-3', description: 'Open 160 chests in Enkanomiya.' },
        ],
      },
      {
        id: 'tlod-kc',
        title: `Kairos' Constancy `,
        version: '2.4',
        steps: [
          {
            id: 'tlod-kc-1',
            description:
              'Complete 3 Open World mechanism-activated Time Trial Challenges in Enkanomiya.',
          },
          {
            id: 'tlod-kc-2',
            description:
              'Complete 6 Open World mechanism-activated Time Trial Challenges in Enkanomiya.',
          },
          {
            id: 'tlod-kc-3',
            description:
              'Complete 12 Open World mechanism-activated Time Trial Challenges in Enkanomiya.',
          },
        ],
      },
      {
        id: 'tlod-frbdhpsoba',
        title: `Fire Rat's Robe, Dragon-Head Pearl, Sacred Offering Bowl, and...`,
        description: 'Obtain the coral branch that Tsuyuko requested.',
        version: '2.4',
      },
    ],
  },
  {
    id: 'chasmlighter',
    entries: [
      {
        id: 'chasmlighter-cc',
        title: `Chasm Conqueror`,
        description: 'Light up The Chasm surface map.',
        version: '2.6',
        requirements:
          '<p class="text-sm text-gray-11">Unlock the <span class="text-primary-11">Statue of The Seven</span> found in the Chasm.</p>',
      },
      {
        id: 'chasmlighter-pp',
        title: `Perilous Plunge`,
        description: 'Light up The Chasm: Underground Mines map.',
        version: '2.6',
        requirements:
          '<p class="text-sm text-gray-11">Earned during <span class="text-primary-11">The Chasm Delvers</span>.</p>',
      },
      {
        id: 'chasmlighter-itd',
        title: `Into the Depths`,
        description:
          'Unlock all Teleport Waypoints in The Chasm and its Underground Mines.',
        version: '2.6',
      },
      {
        id: 'chasmlighter-gg',
        title: `Gorge Guide`,
        version: '2.6',
        steps: [
          {
            id: 'chasmlighter-gg-1',
            description: 'Follow 6 Seelie in The Chasm to their Seelie Courts.',
          },
          {
            id: 'chasmlighter-gg-2',
            description:
              'Follow 12 Seelie in The Chasm to their Seelie Courts.',
          },
          {
            id: 'chasmlighter-gg-3',
            description:
              'Follow 24 Seelie in The Chasm to their Seelie Courts.',
          },
        ],
      },
      {
        id: 'chasmlighter-cth',
        title: `Chasm Treasure Hunter`,
        version: '2.6',
        steps: [
          {
            id: 'chasmlighter-cth-1',
            description: 'Open 50 chests in The Chasm.',
          },
          {
            id: 'chasmlighter-cth-2',
            description: 'Open 100 chests in The Chasm.',
          },
          {
            id: 'chasmlighter-cth-3',
            description: 'Open 200 chests in The Chasm.',
          },
        ],
      },
      {
        id: 'chasmlighter-ca',
        title: `Chasm Adventurer`,
        version: '2.6',
        steps: [
          {
            id: 'chasmlighter-ca-1',
            description:
              'Complete 3 Open World mechanism-activated Time Trial Challenges in The Chasm.',
          },
          {
            id: 'chasmlighter-ca-2',
            description:
              'Complete 6 Open World mechanism-activated Time Trial Challenges in The Chasm.',
          },
          {
            id: 'chasmlighter-ca-3',
            description:
              'Complete 12 Open World mechanism-activated Time Trial Challenges in The Chasm.',
          },
        ],
      },
      {
        id: 'chasmlighter-ti',
        title: `Arch-Illuminator`,
        description:
          'Enhance the Lumenstone Adjuvant to its highest possible level.',
        version: '2.6',
      },
      {
        id: 'chasmlighter-wtsib',
        title: `"When the Seal Is Broken..."`,
        description: 'Remove the obstacles to your entry into the mines.',
        version: '2.6',
        requirements:
          '<p class="text-sm text-gray-11">Complete <span class="text-primary-11">Surreptitious Seven-Star Seal Sundering</span>.</p>',
      },
      {
        id: 'chasmlighter-eu',
        title: `Exploration Underway`,
        description:
          'Complete the exploration commission from the Ministry of Civil Affairs.',
        version: '2.6',
        requirements:
          '<p class="text-sm text-gray-11">Earned during <span class="text-primary-11">Wherefore Did the Spiritstone Descend?</span></p>',
      },
    ],
  },
  {
    id: 'strol',
    entries: [
      {
        id: 'strol-cesb',
        title: `Continental Explorer: Sumeru Boscage`,
        description:
          'Light up the maps of the following areas in Sumeru: Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
        version: '3.0',
      },
      {
        id: 'strol-fr',
        title: `Forest Roamer`,
        description:
          'Unlock all Teleport Waypoints in the following areas in Sumeru: Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
        version: '3.0',
      },
      {
        id: 'strol-spsb',
        title: `Sanctuary Pilgrim: Sumeru Boscage`,
        description:
          'Unlock all the Shrines of Depths in the following areas in Sumeru: Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
        version: '3.0',
      },
      {
        id: 'strol-fb',
        title: `Fluorescent Bloom`,
        description:
          'Upgrade the Statues of The Seven in Sumeru to their maximum level.',
        version: '3.0',
      },
      {
        id: 'strol-cotgd',
        title: `Culmination of the Great Dream`,
        description: 'Reach the Max Level of the Tree of Dreams in Vanarana',
        version: '3.0',
      },
      {
        id: 'strol-wg',
        title: `Woodland Guide`,
        version: '3.0',
        steps: [
          {
            id: 'strol-wg-1',
            description:
              'Follow a total of 10 Seelie to their Seelie Courts in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
          {
            id: 'strol-wg-2',
            description:
              'Follow a total of 20 Seelie to their Seelie Courts in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
          {
            id: 'strol-wg-3',
            description:
              'Follow a total of 40 Seelie to their Seelie Courts in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
        ],
      },
      {
        id: 'strol-thotsw',
        title: `Treasure Hunter of the Shimmering Woods`,
        version: '3.0',
        steps: [
          {
            id: 'strol-thotsw-1',
            description:
              'Open a total of 100 treasure chests in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
          {
            id: 'strol-thotsw-2',
            description:
              'Open a total of 200 treasure chests in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
          {
            id: 'strol-thotsw-3',
            description:
              'Open a total of 400 treasure chests in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
        ],
      },
      {
        id: 'strol-aotsw',
        title: `Adventurer of the Shimmering Woods`,
        version: '3.0',
        steps: [
          {
            id: 'strol-aotsw-1',
            description:
              'Complete a total of 10 Open World Time Trial Challenges in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
          {
            id: 'strol-aotsw-2',
            description:
              'Complete a total of 20 Open World Time Trial Challenges in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
          {
            id: 'strol-aotsw-3',
            description:
              'Complete a total of 30 Open World Time Trial Challenges in Avidya Forest, Lokapala Jungle, Ardravi Valley, Ashavan Realm, Vissudha Field, Lost Nursery, and Vanarana.',
          },
        ],
      },
      {
        id: 'strol-tfwb',
        title: `The Forest Will Remember`,
        description: 'Complete "Aranyaka."',
        version: '3.0',
      },
    ],
  },
]

export { categories, categoryEntries }

