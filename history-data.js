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
    },
    "urs-schild-watchmaker": {
      id: "urs-schild-watchmaker",
      name: "Urs Schild",
      years: "1829&ndash;1888",
      birthPlace: "Switzerland",
      role: "Watch Movement Manufacturer &middot; Wider Schild Story",
      wideStory: true,
      summary: "A schoolteacher who moved into watchmaking and, with Dr Joseph Girard, founded a small watch movement business in Grenchen, Switzerland, in 1856. That business grew over the following decades into what became known as Eterna. Presented here as wider Schild surname history, not a proven branch of our direct family line.",
      stories: ["schildsswisstime"],
      places: ["grenchen-switzerland"],
      events: ["eterna-founding-1856", "complete-watches-1878", "urs-schild-death-1888"],
      documents: []
    },
    "adolf-schild-watchmaker": {
      id: "adolf-schild-watchmaker",
      name: "Adolf Schild",
      years: "1844&ndash;1915",
      birthPlace: "Switzerland",
      role: "Watch Movement Manufacturer &middot; Wider Schild Story",
      wideStory: true,
      summary: "Urs Schild&rsquo;s brother, who helped lead the family business after Urs died in 1888, then left in 1896 to found his own movement company, A. Schild SA. That company eventually became part of ETA.",
      stories: ["schildsswisstime"],
      places: ["grenchen-switzerland"],
      events: ["urs-schild-death-1888", "adolf-schild-founds-as-1896"],
      documents: []
    },
    "max-schild-watchmaker": {
      id: "max-schild-watchmaker",
      name: "Max Schild",
      years: "1866&ndash;1927",
      birthPlace: "Switzerland",
      role: "Watch Manufacturer &middot; Wider Schild Story",
      wideStory: true,
      summary: "A son of Urs Schild who took over the family business after his father&rsquo;s death in 1888. He pushed for an ambitious plan to modernize production, but the plan met resistance and he left the company in 1898; his brother Theodor then took charge.",
      stories: ["schildsswisstime"],
      places: ["grenchen-switzerland"],
      events: ["urs-schild-death-1888"],
      documents: []
    },
    "theodor-schild-watchmaker": {
      id: "theodor-schild-watchmaker",
      name: "Theodor Schild",
      years: "1870&ndash;1950",
      birthPlace: "Switzerland",
      role: "Watch Manufacturer &middot; Wider Schild Story",
      wideStory: true,
      summary: "A son of Urs Schild who led the family watch business for more than three decades, from 1899 to 1932. Under his leadership the company moved firmly into wristwatches and the Eterna name came into public use. Not the same person as Theodor Schild of Grapetown, Texas, elsewhere on this site.",
      stories: ["schildsswisstime"],
      places: ["grenchen-switzerland"],
      events: ["urs-schild-death-1888", "theodor-schild-leads-1899", "eterna-trademark-1905", "eta-split-1932"],
      documents: []
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
    },
    "grenchen-switzerland": {
      id: "grenchen-switzerland",
      name: "Grenchen, Switzerland",
      region: "Canton of Solothurn, Switzerland",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A town in the Swiss canton of Solothurn that grew into one of the country&rsquo;s most important watchmaking centers, in large part through firms connected to the Schild family, including Eterna and later ETA. This entry describes the wider history of Swiss watchmaking in Grenchen, and is not evidence of a direct family connection.",
      people: ["urs-schild-watchmaker", "adolf-schild-watchmaker", "max-schild-watchmaker", "theodor-schild-watchmaker"],
      stories: ["schildsswisstime"],
      events: ["eterna-founding-1856", "complete-watches-1878", "urs-schild-death-1888", "adolf-schild-founds-as-1896", "theodor-schild-leads-1899", "eterna-trademark-1905", "eta-split-1932"]
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
    },
    "schildsswisstime": {
      id: "schildsswisstime",
      title: "The Schilds Who Helped Build Swiss Time",
      subtitle: "From Grenchen to Eterna and ETA",
      dateRange: "1856&ndash;1932",
      location: "Grenchen, Switzerland",
      wideStory: true,
      teaser: "In a small Swiss watchmaking town, the Schild name became attached to two of the most important names in the history of the wristwatch: Eterna and ETA.",
      people: ["urs-schild-watchmaker", "adolf-schild-watchmaker", "max-schild-watchmaker", "theodor-schild-watchmaker"],
      places: ["grenchen-switzerland"],
      events: ["eterna-founding-1856", "complete-watches-1878", "urs-schild-death-1888", "adolf-schild-founds-as-1896", "theodor-schild-leads-1899", "eterna-trademark-1905", "eta-split-1932"],
      documents: ["eterna-founding-record", "grenchen-1870s-view", "eterna-pocketwatch-1930", "eta-factory-grenchen", "eta-movement-2824"]
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
    },
    {
      id: "eterna-founding-1856",
      year: 1856,
      date: "November 7, 1856",
      title: "Urs Schild and Dr Joseph Girard Found a Watch Movement Business in Grenchen",
      description: "Urs Schild, a schoolteacher, and Dr Joseph Girard, a physician, founded a small watch movement business in Grenchen, Switzerland. It began by producing raw movements, known in the trade as ebauches, rather than complete watches. This business grew over the following decades into what became known as Eterna.",
      people: ["urs-schild-watchmaker"],
      places: ["grenchen-switzerland"],
      story: "schildsswisstime",
      document: "eterna-founding-record",
      sourceCount: 3
    },
    {
      id: "complete-watches-1878",
      year: 1878,
      date: "By the late 1870s",
      title: "The Business Begins Producing Complete Watches",
      description: "After Dr Joseph Girard retired around 1866, Urs Schild took full ownership of the business and began moving beyond movements alone. By the late 1870s the company was producing complete watches, not only the movements inside them. Sources vary slightly on the exact year, so this date should be read as approximate.",
      people: ["urs-schild-watchmaker"],
      places: ["grenchen-switzerland"],
      story: "schildsswisstime",
      sourceCount: 2
    },
    {
      id: "urs-schild-death-1888",
      year: 1888,
      date: "1888",
      title: "Urs Schild Dies; the Next Generation Takes Over",
      description: "Following the death of Urs Schild in 1888, leadership of the business passed to his brother Adolf Schild, his widow, and his sons Max and Theodor Schild.",
      people: ["urs-schild-watchmaker", "adolf-schild-watchmaker", "max-schild-watchmaker", "theodor-schild-watchmaker"],
      places: ["grenchen-switzerland"],
      story: "schildsswisstime",
      sourceCount: 2
    },
    {
      id: "adolf-schild-founds-as-1896",
      year: 1896,
      date: "1896",
      title: "Adolf Schild Founds A. Schild SA",
      description: "Adolf Schild left the family firm in 1896 to found his own movement manufacturer, A. Schild SA, sometimes written ASSA. This company later became part of the lineage that led to ETA.",
      people: ["adolf-schild-watchmaker"],
      places: ["grenchen-switzerland"],
      story: "schildsswisstime",
      sourceCount: 2
    },
    {
      id: "theodor-schild-leads-1899",
      year: 1899,
      date: "1899",
      title: "Theodor Schild Leads the Company Into the Wristwatch Era",
      description: "Theodor Schild took charge of the family business in 1899 and led it for more than three decades. Under his direction the company moved into wristwatches and patented protective lugs in 1904, among other innovations.",
      people: ["theodor-schild-watchmaker"],
      places: ["grenchen-switzerland"],
      story: "schildsswisstime",
      sourceCount: 2
    },
    {
      id: "eterna-trademark-1905",
      year: 1905,
      date: "November 11, 1905",
      title: "The Eterna Trademark Is Registered",
      description: "The name Eterna was registered as a trademark in Switzerland on November 11, 1905, and began appearing publicly soon after. The business that Urs Schild and Dr Joseph Girard had founded nearly fifty years earlier now had the name history remembers it by.",
      people: ["theodor-schild-watchmaker"],
      places: ["grenchen-switzerland"],
      story: "schildsswisstime",
      sourceCount: 2
    },
    {
      id: "eta-split-1932",
      year: 1932,
      date: "1932",
      title: "Eterna and ETA Become Separate Companies",
      description: "During the difficult economic years of the early 1930s, Swiss watch manufacturers reorganized under a shared holding structure. In 1932 the watch business, Eterna, and the movement business, ETA, became separate companies within that structure, though both remained rooted in Grenchen and in the business Urs Schild had founded.",
      people: [],
      places: ["grenchen-switzerland"],
      story: "schildsswisstime",
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
    },
    "eterna-founding-record": {
      id: "eterna-founding-record",
      title: "Founding Record &mdash; Dr Joseph Girard and Urs Schild, Grenchen",
      type: "Company History Record",
      date: "1856",
      people: ["urs-schild-watchmaker"],
      place: "grenchen-switzerland",
      hasImage: false,
      transcription: "No original founding document has been located yet. This entry summarizes what published company histories and reference works record about the 1856 founding of the watch movement business in Grenchen, pending any archival document that may surface.",
      sourceCount: 3
    },
    "grenchen-1870s-view": {
      id: "grenchen-1870s-view",
      title: "View of Grenchen, Switzerland, Circa 1870s",
      type: "Historical Illustration",
      date: "1870s",
      people: [],
      place: "grenchen-switzerland",
      hasImage: true,
      image: {
        src: "/assets/history-grenchen-1870s.jpg",
        alt: "A wide black and white nineteenth century print of Grenchen, Switzerland, seen from above with the Alps in the distance and a cluster of small factory buildings with tall chimneys among the houses.",
        credit: "Public domain print, 1870s, titled Vue des Alpes prise au dessus de Granges, via Wikimedia Commons."
      },
      transcription: "A wide print showing Grenchen from above, with the Alps in the distance. Two steam powered watch factories are visible among the buildings below, including the site later associated with Eterna. This is a general view of the town, not a portrait of any specific person.",
      sourceCount: 1
    },
    "eterna-pocketwatch-1930": {
      id: "eterna-pocketwatch-1930",
      title: "Eterna Pocket Watch, Circa 1930",
      type: "Historic Watch",
      date: "circa 1930",
      people: [],
      place: "grenchen-switzerland",
      hasImage: true,
      image: {
        src: "/assets/history-eterna-pocketwatch.jpg",
        alt: "A round silver toned Eterna pocket watch with a gold dial, marked ETERNA above the center, arabic numerals, and a small seconds subdial.",
        credit: "Photograph by Clyde94, 2023, licensed CC BY SA 4.0, via Wikimedia Commons. Watch shown: an Eterna pocket watch, circa 1930."
      },
      transcription: "A surviving Eterna pocket watch from around 1930, photographed by a private collector. The Eterna name is printed on the dial, by this date already an internationally sold watch brand grown from the Grenchen workshop founded in 1856.",
      sourceCount: 1
    },
    "eta-factory-grenchen": {
      id: "eta-factory-grenchen",
      title: "ETA Factory Building, Grenchen",
      type: "Factory Photograph",
      date: "2009 (a modern photograph of a historic site)",
      people: [],
      place: "grenchen-switzerland",
      hasImage: true,
      image: {
        src: "/assets/history-eta-factory-grenchen.jpg",
        alt: "A modern multi story ETA watch factory building in Grenchen, Switzerland, with large orange structural beams and an ETA logo mounted on the facade.",
        credit: "Photograph by Landrit Jan Kenan, 2009, licensed CC BY SA 3.0 and GFDL, via Wikimedia Commons."
      },
      transcription: "A twenty first century photograph of an ETA factory building in Grenchen. ETA remains one of the largest producers of Swiss watch movements, continuing the movement making tradition that began with Urs Schild&rsquo;s 1856 workshop in the same town.",
      sourceCount: 1
    },
    "eta-movement-2824": {
      id: "eta-movement-2824",
      title: "ETA 2824 Automatic Movement",
      type: "Watch Movement Photograph",
      date: "2008",
      people: [],
      place: "grenchen-switzerland",
      hasImage: true,
      image: {
        src: "/assets/history-eta-movement.jpg",
        alt: "Close up photograph of the back of a wristwatch with its case back removed, showing a metal automatic watch movement with a partial rotor, jewels, and engraved text including Swiss Made and Twenty Five Jewels.",
        credit: "Photograph by Jpr, 2008, licensed CC BY SA 3.0, via Wikimedia Commons. Movement shown: an ETA 2824 automatic caliber."
      },
      transcription: "A close view of an ETA 2824 automatic movement, one of the most widely used mechanical movements in Swiss watchmaking. Movements like this one are made by ETA, the Grenchen company that grew out of the business Urs Schild began in 1856.",
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
    },
    "s-wikipedia-eterna": {
      id: "s-wikipedia-eterna",
      title: "Wikipedia, &ldquo;Eterna&rdquo;",
      note: "General encyclopedia entry confirming the 1856 founding date, founders, and later corporate history.",
      status: "confirmed"
    },
    "s-wikipedia-eta": {
      id: "s-wikipedia-eta",
      title: "Wikipedia, &ldquo;ETA SA&rdquo;",
      note: "General encyclopedia entry on ETA&rsquo;s history and its relationship to Eterna and earlier movement makers.",
      status: "confirmed"
    },
    "s-grailwatch-eterna": {
      id: "s-grailwatch-eterna",
      title: "Grail Watch Wiki, &ldquo;Eterna&rdquo;",
      note: "Detailed horological reference history covering the founding, the Schild family&rsquo;s leadership, the Eterna trademark, and the 1932 reorganization.",
      status: "confirmed"
    },
    "s-grailwatch-schild": {
      id: "s-grailwatch-schild",
      title: "Grail Watch Wiki, &ldquo;Schild&rdquo;",
      note: "Reference summary of the Schild family&rsquo;s roles in Swiss watchmaking, including Urs, Adolf, Max, and Theodor Schild.",
      status: "confirmed"
    },
    "s-grailwatch-grenchen": {
      id: "s-grailwatch-grenchen",
      title: "Grail Watch Wiki, &ldquo;Grenchen&rdquo;",
      note: "Reference history of Grenchen&rsquo;s development as a Swiss watchmaking center.",
      status: "confirmed"
    },
    "s-img-grenchen-1870s": {
      id: "s-img-grenchen-1870s",
      title: "Vue des Alpes prise au dessus de Granges, public domain print, Wikimedia Commons",
      note: "Nineteenth century print of Grenchen, digitized and released to the public domain.",
      status: "confirmed"
    },
    "s-img-eterna-pocketwatch": {
      id: "s-img-eterna-pocketwatch",
      title: "Photograph of an Eterna pocket watch, circa 1930, Wikimedia Commons",
      note: "Own work photograph by Clyde94, licensed CC BY SA 4.0.",
      status: "confirmed"
    },
    "s-img-eta-factory": {
      id: "s-img-eta-factory",
      title: "Photograph of the ETA factory, Grenchen, Wikimedia Commons",
      note: "Own work photograph by Landrit Jan Kenan, licensed CC BY SA 3.0 and GFDL.",
      status: "confirmed"
    },
    "s-img-eta-movement": {
      id: "s-img-eta-movement",
      title: "Photograph of an ETA 2824 movement, Wikimedia Commons",
      note: "Own work photograph by Jpr, licensed CC BY SA 3.0.",
      status: "confirmed"
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
    "376th-personnel-roster": ["s-376th-roster", "s-briscoe-center", "s-tarot-finding-aid"],
    "eterna-founding-1856": ["s-wikipedia-eterna", "s-wikipedia-eta", "s-grailwatch-eterna"],
    "complete-watches-1878": ["s-grailwatch-eterna", "s-grailwatch-grenchen"],
    "urs-schild-death-1888": ["s-grailwatch-eterna", "s-grailwatch-schild"],
    "adolf-schild-founds-as-1896": ["s-grailwatch-schild", "s-grailwatch-eterna"],
    "theodor-schild-leads-1899": ["s-grailwatch-eterna", "s-grailwatch-schild"],
    "eterna-trademark-1905": ["s-grailwatch-eterna", "s-wikipedia-eterna"],
    "eta-split-1932": ["s-grailwatch-eterna", "s-wikipedia-eta"],
    "eterna-founding-record": ["s-wikipedia-eterna", "s-grailwatch-eterna", "s-grailwatch-schild"],
    "grenchen-1870s-view": ["s-img-grenchen-1870s"],
    "eterna-pocketwatch-1930": ["s-img-eterna-pocketwatch"],
    "eta-factory-grenchen": ["s-img-eta-factory"],
    "eta-movement-2824": ["s-img-eta-movement"]
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
    },
    {
      id: "swiss-schild-lineage",
      question: "Are the Swiss watchmaking Schilds connected to our direct Schild family line?",
      status: "researching",
      evidence: "The historical role of Urs Schild and the Schild family in Swiss watchmaking is well documented across several independent reference sources.",
      unknown: "What has not yet been established is whether this branch is directly connected to the Schild family line represented elsewhere on this site.",
      people: ["urs-schild-watchmaker", "adolf-schild-watchmaker", "max-schild-watchmaker", "theodor-schild-watchmaker"]
    }
  ]
};
