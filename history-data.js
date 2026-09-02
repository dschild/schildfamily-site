/*
  Schild Family History — content data model.
  ---------------------------------------------------------------
  This is the single source of truth for people, places, stories,
  timeline events, archive records, and sources under /history/.
  Individual pages are still hand-authored HTML (this is a small,
  static site with no build step), but any *relationship* between
  entities — "which stories mention this person," "which people
  are tied to this record" — is read from here at runtime by
  history.js, rather than duplicated by hand on every page. Adding
  a new person, place, story, event, or record starts here.

  IDs are the same strings used in each page's URL slug.
*/
window.HistoryData = {

  people: {
    "august-schild": {
      id: "august-schild",
      name: "August Schild",
      years: "b. c. 1821",
      birthPlace: "Saxony, Germany",
      role: "Merchant &middot; U.S. Postmaster of Fredericksburg",
      summary: "A Saxony-born merchant who settled in Fredericksburg, Texas, and served as the town&rsquo;s postmaster in the late 1860s.",
      stories: ["early-schilds-fredericksburg"],
      places: ["fredericksburg-texas"],
      events: ["census-1860", "postmaster-1868", "postmaster-1869"],
      documents: ["census-1860"]
    },
    "theodor-schild": {
      id: "theodor-schild",
      name: "Theodor Schild",
      years: "b. c. 1818",
      birthPlace: "Saxony, Germany",
      role: "Farmer &middot; Early Grapetown Settler",
      summary: "A Saxony-born farmer among the early German settlers near Grapetown, Texas, who received a land deed there in 1854.",
      stories: ["early-schilds-fredericksburg"],
      places: ["grapetown-texas", "fredericksburg-texas"],
      events: ["land-deed-1854", "census-1860"],
      documents: ["land-deed-1854", "census-1860"]
    },
    "august-schild-jr": {
      id: "august-schild-jr",
      name: "August W. Schild Jr.",
      years: "b. March 1, 1925",
      birthPlace: "Waco, Texas",
      role: "Technical Sergeant &middot; Radio Operator, 513th Bombardment Squadron",
      summary: "A Texas-born radio operator and gunner who served with the 513th Bombardment Squadron of the 376th Heavy Bombardment Group &mdash; the &ldquo;Liberandos&rdquo; &mdash; during World War II.",
      stories: ["august-schild-liberandos"],
      places: ["waco-texas", "mediterranean-theater", "italy-wwii-theater"],
      events: ["birth-1925", "wwii-service-513th"],
      documents: ["obituary-august-schild-jr", "376th-personnel-roster"],
      military: {
        branch: "United States Army Air Forces (Army Air Corps era)",
        rank: "Technical Sergeant",
        role: "Radio Operator/Gunner",
        serviceNumber: "18227495",
        unit: "513th Bombardment Squadron, 376th Heavy Bombardment Group (&ldquo;The Liberandos&rdquo;)"
      }
    }
  },

  places: {
    "fredericksburg-texas": {
      id: "fredericksburg-texas",
      name: "Fredericksburg, Texas",
      region: "Gillespie County, Texas",
      summary: "A town founded in 1846 by German immigrants in the Texas Hill Country, and the community where August and Theodor Schild both appear in the historical record.",
      people: ["august-schild", "theodor-schild"],
      stories: ["early-schilds-fredericksburg"],
      events: ["census-1860", "postmaster-1868", "postmaster-1869"]
    },
    "grapetown-texas": {
      id: "grapetown-texas",
      name: "Grapetown, Texas",
      region: "Gillespie County, Texas",
      summary: "A small German settlement a few miles from Fredericksburg, where Theodor Schild received a land deed in 1854.",
      people: ["theodor-schild"],
      stories: ["early-schilds-fredericksburg"],
      events: ["land-deed-1854"]
    },
    "waco-texas": {
      id: "waco-texas",
      name: "Waco, Texas",
      region: "McLennan County, Texas",
      summary: "The city on the Brazos River in Central Texas where August W. Schild Jr. was born on March 1, 1925.",
      people: ["august-schild-jr"],
      stories: ["august-schild-liberandos"],
      events: ["birth-1925"]
    },
    "mediterranean-theater": {
      id: "mediterranean-theater",
      name: "Mediterranean Theater",
      region: "World War II theater of operations",
      context: "military-operations",
      summary: "The World War II theater spanning North Africa and Southern Europe where the 376th Heavy Bombardment Group &mdash; August W. Schild Jr.&rsquo;s unit &mdash; was based and flew combat operations. This entry describes the unit&rsquo;s area of operations, not a personal itinerary.",
      people: ["august-schild-jr"],
      stories: ["august-schild-liberandos"],
      events: ["wwii-service-513th"]
    },
    "italy-wwii-theater": {
      id: "italy-wwii-theater",
      name: "Italy (WWII Operations)",
      region: "Mediterranean theater",
      context: "military-operations",
      summary: "Following the North African campaign, the 376th Heavy Bombardment Group relocated to airfields in Southern Italy, from which it continued long-range missions into occupied Europe.",
      people: ["august-schild-jr"],
      stories: ["august-schild-liberandos"],
      events: ["wwii-service-513th"]
    }
  },

  stories: {
    "early-schilds-fredericksburg": {
      id: "early-schilds-fredericksburg",
      title: "The Schilds of Early Fredericksburg",
      dateRange: "1854–1870",
      location: "Fredericksburg &amp; Grapetown, Texas",
      teaser: "Two Schild families appear beside one another in the 1860 census as German immigrants building new lives in the Texas Hill Country.",
      people: ["august-schild", "theodor-schild"],
      places: ["fredericksburg-texas", "grapetown-texas"],
      events: ["land-deed-1854", "census-1860", "postmaster-1868", "postmaster-1869"],
      documents: ["land-deed-1854", "census-1860"]
    },
    "august-schild-liberandos": {
      id: "august-schild-liberandos",
      title: "From Texas to the Liberandos",
      subtitle: "August W. Schild Jr. and the Air War Over Europe",
      dateRange: "1925&ndash;1945",
      location: "Waco, Texas &amp; the Mediterranean Theater",
      teaser: "A Texas-born radio operator served with the 376th Heavy Bombardment Group &mdash; the &ldquo;Liberandos&rdquo; &mdash; whose B-24 Liberators flew 451 combat missions from North Africa and Italy into occupied Europe.",
      people: ["august-schild-jr"],
      places: ["waco-texas", "mediterranean-theater", "italy-wwii-theater"],
      events: ["birth-1925", "wwii-service-513th"],
      documents: ["obituary-august-schild-jr", "376th-personnel-roster"]
    }
  },

  events: [
    {
      id: "land-deed-1854",
      year: 1854,
      date: "February 13, 1854",
      title: "Theodor Schild Receives Land Near Grapetown",
      description: "Theodor Schild was among the early settlers around Grapetown, Texas, and received a land deed on this date.",
      people: ["theodor-schild"],
      places: ["grapetown-texas"],
      story: "early-schilds-fredericksburg",
      document: "land-deed-1854",
      sourceCount: 1
    },
    {
      id: "census-1860",
      year: 1860,
      date: "1860",
      title: "August and Theodor Schild Appear in the Census",
      description: "The 1860 U.S. Census for Fredericksburg, Gillespie County records Theodor Schild, about 42, a Saxony-born farmer &mdash; and immediately adjacent, August Schild, about 39, a Saxony-born merchant with a household of his own.",
      people: ["august-schild", "theodor-schild"],
      places: ["fredericksburg-texas"],
      story: "early-schilds-fredericksburg",
      document: "census-1860",
      sourceCount: 1
    },
    {
      id: "postmaster-1868",
      year: 1868,
      date: "1868",
      title: "August Schild Named Postmaster of Fredericksburg",
      description: "August Schild was recorded as postmaster of Fredericksburg in 1868, a role tied to his standing as a local merchant.",
      people: ["august-schild"],
      places: ["fredericksburg-texas"],
      story: "early-schilds-fredericksburg",
      sourceCount: 1
    },
    {
      id: "postmaster-1869",
      year: 1869,
      date: "1869",
      title: "August Schild Continues as Postmaster",
      description: "August Schild again appears as Fredericksburg&rsquo;s postmaster in 1869. A later biographical source identifies Lena Schild as his daughter.",
      people: ["august-schild"],
      places: ["fredericksburg-texas"],
      story: "early-schilds-fredericksburg",
      sourceCount: 1
    },
    {
      id: "birth-1925",
      year: 1925,
      date: "March 1, 1925",
      title: "August W. Schild Jr. Born in Waco, Texas",
      description: "August W. Schild Jr. was born in Waco, Texas, on March 1, 1925.",
      people: ["august-schild-jr"],
      places: ["waco-texas"],
      story: "august-schild-liberandos",
      document: "obituary-august-schild-jr",
      sourceCount: 1
    },
    {
      id: "wwii-service-513th",
      year: null,
      date: "World War II (exact service dates not yet verified)",
      title: "Serves with the 513th Bombardment Squadron, 376th Heavy Bombardment Group",
      description: "August W. Schild Jr. served as a Technical Sergeant and radio operator/gunner with the 513th Bombardment Squadron of the 376th Heavy Bombardment Group &mdash; the &ldquo;Liberandos&rdquo; &mdash; which flew B-24 Liberators from the Mediterranean theater into Europe.",
      people: ["august-schild-jr"],
      places: ["mediterranean-theater", "italy-wwii-theater"],
      story: "august-schild-liberandos",
      document: "376th-personnel-roster",
      sourceCount: 2
    }
  ],

  archive: {
    "census-1860": {
      id: "census-1860",
      title: "1860 United States Census — Fredericksburg, Gillespie County, Texas",
      type: "Census Record",
      date: "1860",
      people: ["august-schild", "theodor-schild"],
      place: "fredericksburg-texas",
      hasImage: false,
      transcription: "Household entries near each other list Theodor Schild (about 42, farmer, born Saxony) and August Schild (about 39, merchant, born Saxony), each recorded with a household in Fredericksburg, Gillespie County, Texas.",
      sourceCount: 1
    },
    "land-deed-1854": {
      id: "land-deed-1854",
      title: "Texas Land Deed — Theodor Schild, Gillespie County",
      type: "Land Record",
      date: "February 13, 1854",
      people: ["theodor-schild"],
      place: "grapetown-texas",
      hasImage: false,
      transcription: "A land deed dated February 13, 1854, recording Theodor Schild among the early settlers granted land near Grapetown, Gillespie County, Texas.",
      sourceCount: 1
    },
    "obituary-august-schild-jr": {
      id: "obituary-august-schild-jr",
      title: "Obituary &mdash; August W. Schild Jr.",
      type: "Obituary",
      date: "Family records",
      people: ["august-schild-jr"],
      place: "waco-texas",
      hasImage: false,
      transcription: "Identifies August W. Schild Jr. as born March 1, 1925, in Waco, Texas, and records his World War II service as a radio operator/gunner.",
      sourceCount: 1
    },
    "376th-personnel-roster": {
      id: "376th-personnel-roster",
      title: "376th Heavy Bombardment Group Enlisted Personnel Roster",
      type: "Military Personnel Roster",
      date: "World War II",
      people: ["august-schild-jr"],
      place: "mediterranean-theater",
      hasImage: false,
      transcription: "Lists August W. Schild Jr., service number 18227495, Radio Operator, 513th Bombardment Squadron, 376th Heavy Bombardment Group.",
      sourceCount: 1
    }
  },

  sources: {
    "s-census-1860": {
      id: "s-census-1860",
      title: "1860 U.S. Federal Census, Fredericksburg, Gillespie County, Texas",
      note: "Family research notes; full archival citation (roll/page) still to be added.",
      status: "confirmed"
    },
    "s-land-deed-1854": {
      id: "s-land-deed-1854",
      title: "Gillespie County land deed records, February 13, 1854",
      note: "Family research notes; full archival citation still to be added.",
      status: "confirmed"
    },
    "s-postmaster": {
      id: "s-postmaster",
      title: "U.S. Post Office Department records, 1868–1869",
      note: "Family research notes; full archival citation still to be added.",
      status: "confirmed"
    },
    "s-lena": {
      id: "s-lena",
      title: "Biographical source identifying Lena Schild as August Schild's daughter",
      note: "Cited secondhand in family research notes; original publication still to be identified.",
      status: "probable"
    },
    "s-obituary-august-jr": {
      id: "s-obituary-august-jr",
      title: "Legacy obituary for August W. Schild Jr.",
      note: "Family research notes; full publication citation still to be added.",
      status: "confirmed"
    },
    "s-376th-roster": {
      id: "s-376th-roster",
      title: "376th Heavy Bombardment Group enlisted personnel roster",
      note: "Lists August W. Schild Jr. by name and service number; full archival citation still to be added.",
      status: "confirmed"
    },
    "s-376th-veterans": {
      id: "s-376th-veterans",
      title: "376th Heavy Bombardment Group / Liberandos veterans association material",
      note: "Historical unit material identifying the 513th Bombardment Squadron; full citation still to be added.",
      status: "confirmed"
    },
    "s-briscoe-center": {
      id: "s-briscoe-center",
      title: "University of Texas Briscoe Center for American History &mdash; 376th Heavy Bombardment Group archive",
      note: "Institutional archive holding unit-level photographs, correspondence, and records; not yet searched for material specific to August W. Schild Jr.",
      status: "probable"
    },
    "s-tarot-finding-aid": {
      id: "s-tarot-finding-aid",
      title: "Texas Archival Resources Online &mdash; finding aid, 376th Heavy Bombardment Group collection",
      note: "Institutional finding aid describing the Briscoe Center collection&rsquo;s scope; not yet cross-referenced for August-specific material.",
      status: "probable"
    }
  },

  eventSources: {
    "land-deed-1854": ["s-land-deed-1854"],
    "census-1860": ["s-census-1860"],
    "postmaster-1868": ["s-postmaster"],
    "postmaster-1869": ["s-postmaster", "s-lena"],
    "birth-1925": ["s-obituary-august-jr"],
    "wwii-service-513th": ["s-376th-roster", "s-376th-veterans"],
    "obituary-august-schild-jr": ["s-obituary-august-jr"],
    "376th-personnel-roster": ["s-376th-roster", "s-briscoe-center", "s-tarot-finding-aid"]
  },

  mysteries: [
    {
      id: "august-theodor-brothers",
      question: "Were August and Theodor Schild brothers?",
      status: "researching",
      evidence: "They appear beside one another in the 1860 census, were close in age, and were both born in Saxony.",
      unknown: "Their exact relationship &mdash; brothers, cousins, unrelated neighbors sharing a surname &mdash; has not yet been proven.",
      people: ["august-schild", "theodor-schild"]
    },
    {
      id: "august-jr-missions",
      question: "Which missions did August actually fly?",
      status: "researching",
      evidence: "August W. Schild Jr.&rsquo;s service with the 513th Bombardment Squadron and 376th Heavy Bombardment Group (the &ldquo;Liberandos&rdquo;) is documented in the group&rsquo;s enlisted personnel roster and his obituary.",
      unknown: "His individual crew assignment, aircraft, and personal mission list have not yet been identified. The 376th flew 451 combat missions during the war &mdash; which of these, if any, involved August personally is not yet known.",
      people: ["august-schild-jr"]
    }
  ]
};
