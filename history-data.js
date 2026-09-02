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
    },
    "ben-schild-vigneron": {
      id: "ben-schild-vigneron",
      name: "Ben Schild",
      years: "Settled the Barossa in 1952; died 1956",
      birthPlace: "Australia",
      role: "Vigneron &middot; Wider Schild Story",
      wideStory: true,
      summary: "With his wife Alma, purchased and settled a property on historic Narrow Road near Rowland Flat in the Barossa Valley in 1952, beginning the family&rsquo;s documented vineyard story there. Ben died unexpectedly in 1956. Presented here as wider Schild surname history, not a proven branch of our direct family line.",
      stories: ["schildestatebarossa"],
      places: ["narrow-road-vineyard", "rowland-flat-australia"],
      events: ["narrow-road-settled-1952", "ben-schild-dies-1956"],
      documents: ["ben-alma-schild-photo-pending"]
    },
    "alma-schild-vigneron": {
      id: "alma-schild-vigneron",
      name: "Alma Schild",
      years: "Settled the Barossa in 1952",
      birthPlace: "Australia",
      role: "Vigneron &middot; Wider Schild Story",
      wideStory: true,
      summary: "With her husband Ben, purchased and settled a property on historic Narrow Road near Rowland Flat in the Barossa Valley in 1952. Presented here as wider Schild surname history, not a proven branch of our direct family line.",
      stories: ["schildestatebarossa"],
      places: ["narrow-road-vineyard", "rowland-flat-australia"],
      events: ["narrow-road-settled-1952"],
      documents: ["ben-alma-schild-photo-pending"]
    },
    "ed-schild-vigneron": {
      id: "ed-schild-vigneron",
      name: "Ed Schild",
      years: "Took over the family property in 1956, aged 16",
      birthPlace: "Australia",
      role: "Vigneron &middot; Wider Schild Story",
      wideStory: true,
      summary: "Son of Ben and Alma Schild. After his father died unexpectedly in 1956, Ed took over the family property at sixteen and, over the following decades, led the expansion of the family&rsquo;s vineyard holdings across the Southern Barossa, including the purchase of Angus Brae, named for his grandson Angus. Ed stepped back from leading the business around 2022, when his son Michael took on that role. Presented here as wider Schild surname history, not a proven branch of our direct family line.",
      stories: ["schildestatebarossa"],
      places: ["angus-brae-vineyard", "rowland-flat-australia"],
      events: ["ben-schild-dies-1956", "angus-brae-purchased-2001", "winery-sale-2022"],
      documents: []
    },
    "michael-schild-vigneron": {
      id: "michael-schild-vigneron",
      name: "Michael Schild",
      years: "Built a workshop nearby in 1999; took over the business around 2022",
      birthPlace: "Australia",
      role: "Vigneron &middot; Wider Schild Story",
      wideStory: true,
      summary: "Son of Ed Schild. In 1999 Michael built a new workshop near the family&rsquo;s Chenin Blanc vineyard, which became known afterward simply as Workshop. Around 2022, as the family transitioned to focus on grapegrowing, Michael took over leading the business from his father. Presented here as wider Schild surname history, not a proven branch of our direct family line.",
      stories: ["schildestatebarossa"],
      places: ["workshop-vineyard", "rowland-flat-australia"],
      events: ["workshop-named-1999", "winery-sale-2022"],
      documents: []
    },
    "angus-schild-vigneron": {
      id: "angus-schild-vigneron",
      name: "Angus Schild",
      years: "b. 20th century (exact date not on file)",
      birthPlace: "Australia",
      role: "Namesake of Angus Brae &middot; Wider Schild Story",
      wideStory: true,
      summary: "A grandson of Ed Schild. The Angus Brae vineyard, purchased by the family in December 2001, was named for him, combining his name with the Scottish word &ldquo;brae,&rdquo; meaning a steep hillside. Presented here as wider Schild surname history, not a proven branch of our direct family line.",
      stories: ["schildestatebarossa"],
      places: ["angus-brae-vineyard"],
      events: ["angus-brae-purchased-2001"],
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
    },
    "barossa-valley-australia": {
      id: "barossa-valley-australia",
      name: "Barossa Valley, South Australia",
      region: "South Australia",
      context: "wider-schild-story",
      wideStory: true,
      summary: "One of Australia&rsquo;s best known wine regions, settled by German and English immigrants from the late 1830s onward. The Schild family have grown grapes here since 1952, and the surviving Moorooroo vines nearby date to 1847, among the oldest producing vines in the world. This entry describes the wider region, and is not evidence of a direct family connection.",
      people: ["ben-schild-vigneron", "alma-schild-vigneron", "ed-schild-vigneron", "michael-schild-vigneron", "angus-schild-vigneron"],
      stories: ["schildestatebarossa"],
      events: ["ann-jacobs-arrives-1839", "moorooroo-vines-planted-1847", "kleemann-planted-1916", "narrow-road-settled-1952", "ben-schild-dies-1956", "workshop-vineyard-purchased-1993", "workshop-named-1999", "angus-brae-purchased-2001", "winery-sale-2022"]
    },
    "rowland-flat-australia": {
      id: "rowland-flat-australia",
      name: "Rowland Flat, South Australia",
      region: "Barossa Valley, South Australia",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A small township in the Southern Barossa Valley. The original Schild family homestead, settled by Ben and Alma Schild in 1952, sits on historic Narrow Road at Rowland Flat, and several of the family&rsquo;s vineyards, including Narrow Road, Three Springs, and Kleemann, lie on the hills around the town. This entry describes the wider township, and is not evidence of a direct family connection.",
      people: ["ben-schild-vigneron", "alma-schild-vigneron", "ed-schild-vigneron", "michael-schild-vigneron"],
      stories: ["schildestatebarossa"],
      events: ["kleemann-planted-1916", "narrow-road-settled-1952", "ben-schild-dies-1956"]
    },
    "narrow-road-vineyard": {
      id: "narrow-road-vineyard",
      name: "Narrow Road",
      region: "Rowland Flat, Barossa Valley",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A vineyard site on the hills behind Rowland Flat, adjacent to the original Schild family homestead purchased and settled by Ben and Alma Schild in 1952. This entry describes a vineyard site associated with the wider Schild story, and is not evidence of a direct family connection.",
      people: ["ben-schild-vigneron", "alma-schild-vigneron"],
      stories: ["schildestatebarossa"],
      events: ["narrow-road-settled-1952"]
    },
    "three-springs-vineyard": {
      id: "three-springs-vineyard",
      name: "Three Springs",
      region: "Rowland Flat, Barossa Valley",
      context: "wider-schild-story",
      wideStory: true,
      summary: "The vineyard site where the original Schild family homestead is located, on historic Narrow Road at Rowland Flat, sitting about 380 metres above sea level. Its higher, cooler position traditionally yields less fruit than vineyards on the valley floor. This entry describes a vineyard site associated with the wider Schild story, and is not evidence of a direct family connection.",
      people: ["ben-schild-vigneron", "alma-schild-vigneron"],
      stories: ["schildestatebarossa"],
      events: ["narrow-road-settled-1952"]
    },
    "angus-brae-vineyard": {
      id: "angus-brae-vineyard",
      name: "Angus Brae",
      region: "Near Lyndoch, Barossa Valley",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A vineyard about four kilometres north of the Lyndoch township, purchased by the Schild family in December 2001. It was named for Ed Schild&rsquo;s grandson Angus, combined with the Scottish word &ldquo;brae,&rdquo; meaning a steep hillside. This entry describes a vineyard site associated with the wider Schild story, and is not evidence of a direct family connection.",
      people: ["ed-schild-vigneron", "angus-schild-vigneron"],
      stories: ["schildestatebarossa"],
      events: ["angus-brae-purchased-2001"]
    },
    "workshop-vineyard": {
      id: "workshop-vineyard",
      name: "Workshop",
      region: "Southern Barossa Valley",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A vineyard purchased by the family in 1993, originally known as the Chenin Blanc vineyard. After Michael Schild built a new workshop nearby in 1999, it became known simply as Workshop. This entry describes a vineyard site associated with the wider Schild story, and is not evidence of a direct family connection.",
      people: ["michael-schild-vigneron"],
      stories: ["schildestatebarossa"],
      events: ["workshop-vineyard-purchased-1993", "workshop-named-1999"]
    },
    "kleemann-vineyard": {
      id: "kleemann-vineyard",
      name: "Kleemann",
      region: "Eastern hills above Rowland Flat, Barossa Valley",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A vineyard high on the eastern hills overlooking Rowland Flat, planted in 1916. Its bush vines grow untrellised, exposed to the elements, and are still hand picked, much as they have been for more than a century. This entry describes a vineyard site associated with the wider Schild story, and is not evidence of a direct family connection.",
      people: [],
      stories: ["schildestatebarossa"],
      events: ["kleemann-planted-1916"]
    },
    "moorooroo-vineyard": {
      id: "moorooroo-vineyard",
      name: "Moorooroo",
      region: "Between Jacob&rsquo;s Creek and the North Para River, Barossa Valley",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A vineyard between Jacob&rsquo;s Creek and the North Para River, taking its name from an Indigenous word meaning &ldquo;meeting of two waters.&rdquo; It contains the last four remaining rows of Shiraz planted in 1847 by Ann Jacobs, later Ann Horrocks, eleven years after the founding of South Australia. The Schild family did not plant these vines; they are their current custodians. This entry describes a vineyard site associated with the wider Schild story, and is not evidence of a direct family connection.",
      people: [],
      stories: ["schildestatebarossa"],
      events: ["ann-jacobs-arrives-1839", "moorooroo-vines-planted-1847"]
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
    },
    "schildestatebarossa": {
      id: "schildestatebarossa",
      title: "From One Vineyard to the Barossa",
      subtitle: "The Schild Family and Generations of Australian Wine",
      dateRange: "1839&ndash;Present",
      location: "Barossa Valley, South Australia",
      wideStory: true,
      teaser: "In 1952 Ben and Alma Schild settled one vineyard on Narrow Road. Their family now tends land across the Southern Barossa, including vines planted more than a century before they arrived.",
      people: ["ben-schild-vigneron", "alma-schild-vigneron", "ed-schild-vigneron", "michael-schild-vigneron", "angus-schild-vigneron"],
      places: ["barossa-valley-australia", "rowland-flat-australia", "narrow-road-vineyard", "three-springs-vineyard", "angus-brae-vineyard", "workshop-vineyard", "kleemann-vineyard", "moorooroo-vineyard"],
      events: ["ann-jacobs-arrives-1839", "moorooroo-vines-planted-1847", "kleemann-planted-1916", "narrow-road-settled-1952", "ben-schild-dies-1956", "workshop-vineyard-purchased-1993", "workshop-named-1999", "angus-brae-purchased-2001", "winery-sale-2022"],
      documents: ["barossa-valley-aerial-view", "barossa-aerial-1987", "barossa-grape-delivery-1945", "barossa-vintage-1955", "barossa-grape-picking-historic", "rowland-flat-historic-view", "barossa-vineyard-rows", "barossa-old-vines-context", "ann-jacobs-land-grant-diary", "ben-alma-schild-photo-pending"]
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
    },
    {
      id: "ann-jacobs-arrives-1839",
      year: 1839,
      date: "1839",
      title: "Ann Jacobs Arrives in South Australia",
      description: "Ann Jacobs, later Ann Horrocks, arrived in South Australia in 1839 at about twenty one years old. An original land grant records her purchase of 500 acres for &pound;500, the property that would become Moorooroo.",
      people: [],
      places: ["moorooroo-vineyard", "barossa-valley-australia"],
      story: "schildestatebarossa",
      document: "ann-jacobs-land-grant-diary",
      sourceCount: 1
    },
    {
      id: "moorooroo-vines-planted-1847",
      year: 1847,
      date: "1847",
      title: "The Moorooroo Shiraz Vines Are Planted",
      description: "Ann Jacobs planted Shiraz vines at Moorooroo in 1847, eleven years after the founding of South Australia, along with oats, barley, fruit trees, and a large dairy. Her diary, held by the State Library of South Australia, describes this work. Four rows of that original planting still survive today, among some of the oldest producing vines in the world. The Schild family did not plant these vines; they are their current custodians.",
      people: [],
      places: ["moorooroo-vineyard"],
      story: "schildestatebarossa",
      document: "ann-jacobs-land-grant-diary",
      sourceCount: 1
    },
    {
      id: "kleemann-planted-1916",
      year: 1916,
      date: "1916",
      title: "The Kleemann Vineyard Is Planted",
      description: "The Kleemann vineyard, high on the eastern hills above Rowland Flat, is planted in 1916. Its bush vines are still grown untrellised and hand picked today.",
      people: [],
      places: ["kleemann-vineyard"],
      story: "schildestatebarossa",
      sourceCount: 1
    },
    {
      id: "narrow-road-settled-1952",
      year: 1952,
      date: "1952",
      title: "Ben and Alma Schild Settle Narrow Road",
      description: "Ben and Alma Schild purchase and settle a property along historic Narrow Road near Rowland Flat, beginning the family&rsquo;s documented vineyard story in the Barossa Valley. One vineyard would eventually grow into more than eleven.",
      people: ["ben-schild-vigneron", "alma-schild-vigneron"],
      places: ["narrow-road-vineyard", "three-springs-vineyard", "rowland-flat-australia"],
      story: "schildestatebarossa",
      document: "ben-alma-schild-photo-pending",
      sourceCount: 1
    },
    {
      id: "ben-schild-dies-1956",
      year: 1956,
      date: "1956",
      title: "Ben Schild Dies; Ed Schild Takes Over at Sixteen",
      description: "Ben Schild dies unexpectedly in 1956. His son Ed, the youngest of eight children and the only son still living at home, takes over the family property at sixteen years old and goes on to lead its expansion over the following decades.",
      people: ["ben-schild-vigneron", "ed-schild-vigneron"],
      places: ["rowland-flat-australia"],
      story: "schildestatebarossa",
      sourceCount: 1
    },
    {
      id: "workshop-vineyard-purchased-1993",
      year: 1993,
      date: "1993",
      title: "The Family Purchases the Chenin Blanc Vineyard",
      description: "The family purchases a vineyard later known as Workshop, at the time called the Chenin Blanc vineyard.",
      people: [],
      places: ["workshop-vineyard"],
      story: "schildestatebarossa",
      sourceCount: 1
    },
    {
      id: "workshop-named-1999",
      year: 1999,
      date: "1999",
      title: "Michael Schild Builds a Workshop Nearby",
      description: "In 1999 Michael Schild builds a new workshop just down the road from the Chenin Blanc vineyard, which becomes known afterward simply as Workshop.",
      people: ["michael-schild-vigneron"],
      places: ["workshop-vineyard"],
      story: "schildestatebarossa",
      sourceCount: 1
    },
    {
      id: "angus-brae-purchased-2001",
      year: 2001,
      date: "December 2001",
      title: "Angus Brae Is Purchased",
      description: "The family purchases a vineyard north of Lyndoch in December 2001, naming it Angus Brae for Ed Schild&rsquo;s grandson Angus and the Scottish word for a steep hillside.",
      people: ["ed-schild-vigneron", "angus-schild-vigneron"],
      places: ["angus-brae-vineyard"],
      story: "schildestatebarossa",
      sourceCount: 1
    },
    {
      id: "winery-sale-2022",
      year: 2022,
      date: "Announced 2022",
      title: "The Family Returns Its Focus to the Vineyards",
      description: "The family announces plans to sell the Schild Estate winery itself. The winery building is later purchased by Atlas Wines, while the Schild Estate wine brand and inventory move to CW Wines. The Schild family keeps its vineyards and continues to grow the fruit used in Schild Estate wines. Around the same time, Ed Schild steps back from leading the business and his son Michael takes on that role.",
      people: ["ed-schild-vigneron", "michael-schild-vigneron"],
      places: ["rowland-flat-australia", "barossa-valley-australia"],
      story: "schildestatebarossa",
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
    },
    "barossa-valley-aerial-view": {
      id: "barossa-valley-aerial-view",
      title: "Aerial View of the Barossa Valley",
      type: "Landscape Photograph",
      date: "2009 (a modern photograph)",
      people: [],
      place: "barossa-valley-australia",
      hasImage: true,
      image: {
        src: "/assets/history-barossa-aerial.jpg",
        alt: "An aerial view looking down over the Barossa Valley, showing a patchwork of vineyard rows and farmland stretching toward distant hills, with a road running through the middle of the scene.",
        credit: "Photograph by Tam, 2009, licensed CC BY SA 2.0, via Wikimedia Commons."
      },
      transcription: "A wide view over the Barossa Valley, showing the patchwork of vineyard rows that has defined the region since the nineteenth century. This is a general landscape photograph, not a picture of a specific Schild family vineyard.",
      sourceCount: 1
    },
    "barossa-aerial-1987": {
      id: "barossa-aerial-1987",
      title: "Vineyards in the Barossa Valley, 1987",
      type: "Historical Photograph",
      date: "1987",
      people: [],
      place: "barossa-valley-australia",
      hasImage: true,
      image: {
        src: "/assets/history-barossa-1987.jpg",
        alt: "A 1987 aerial photograph of the Barossa Valley, showing a township surrounded by vineyard rows and farmland, with hills in the distance.",
        credit: "Photograph by Phillip Capper, 1987, licensed CC BY 2.0, via Wikimedia Commons."
      },
      transcription: "An aerial photograph of the Barossa Valley taken in 1987, showing a township and the surrounding vineyards and farmland. This is a general regional photograph, not a picture of a specific Schild family vineyard.",
      sourceCount: 1
    },
    "barossa-grape-delivery-1945": {
      id: "barossa-grape-delivery-1945",
      title: "Delivering Grapes to a Barossa Winery, Circa 1945",
      type: "Historical Photograph",
      date: "circa 1945",
      people: [],
      place: "barossa-valley-australia",
      hasImage: true,
      image: {
        src: "/assets/history-barossa-delivery1945.jpg",
        alt: "A black and white photograph of horse drawn wagons and a motor truck, all loaded with grapes, queued outside a winery, probably in the Barossa Valley, circa 1945.",
        credit: "State Government Photographer, circa 1945, The History Trust of South Australia. CC0 1.0 Public Domain, via Wikimedia Commons."
      },
      transcription: "Horse drawn wagons and a motor truck, all loaded with grapes, queued outside a winery believed to be in the Barossa Valley, around 1945. This is a general regional photograph and does not depict the Schild family or a specific Schild vineyard.",
      sourceCount: 1
    },
    "barossa-vintage-1955": {
      id: "barossa-vintage-1955",
      title: "Grape Vintage in the Barossa Valley, Circa 1955",
      type: "Historical Photograph",
      date: "circa 1955",
      people: [],
      place: "barossa-valley-australia",
      hasImage: true,
      image: {
        src: "/assets/history-barossa-vintage1955.jpg",
        alt: "A black and white photograph of six women in overalls and headscarves carrying buckets of freshly picked grapes along a row of vines in the Barossa Valley, circa 1955.",
        credit: "State Government Photographer, circa 1955, The History Trust of South Australia. CC0 1.0 Public Domain, via Wikimedia Commons."
      },
      transcription: "Women carrying buckets of freshly picked grapes along a vineyard row in the Barossa Valley, around 1955. This is a general regional photograph and does not depict the Schild family or a specific Schild vineyard.",
      sourceCount: 1
    },
    "barossa-grape-picking-historic": {
      id: "barossa-grape-picking-historic",
      title: "Grape Picking in the Barossa Valley",
      type: "Historical Photograph",
      date: "early to mid twentieth century",
      people: [],
      place: "barossa-valley-australia",
      hasImage: true,
      image: {
        src: "/assets/history-barossa-picking.jpg",
        alt: "A black and white photograph of workers in wide brimmed hats hand picking grapes into buckets beside a tractor and trailer heaped with grapes, in a Barossa Valley vineyard.",
        credit: "State Government Photographer, The History Trust of South Australia. CC0 1.0 Public Domain, via Wikimedia Commons."
      },
      transcription: "Workers hand picking grapes beside a tractor and trailer in a Barossa Valley vineyard. This is a general regional photograph and does not depict the Schild family or a specific Schild vineyard.",
      sourceCount: 1
    },
    "rowland-flat-historic-view": {
      id: "rowland-flat-historic-view",
      title: "Rowland Flat, Historical View",
      type: "Historical Photograph",
      date: "20th century",
      people: [],
      place: "rowland-flat-australia",
      hasImage: true,
      image: {
        src: "/assets/history-rowlandflat-historic.jpg",
        alt: "A black and white photograph of Rowland Flat, showing a winery building and vineyard rows in the foreground with hills in the distance.",
        credit: "State Government Photographer, The History Trust of South Australia. CC0 1.0 Public Domain, via Wikimedia Commons."
      },
      transcription: "A historical view of Rowland Flat, showing a winery building and vineyard rows with the surrounding hills behind. This is a general township photograph, not a picture of a specific Schild family vineyard or homestead.",
      sourceCount: 1
    },
    "barossa-vineyard-rows": {
      id: "barossa-vineyard-rows",
      title: "Vineyard Rows in the Barossa Valley",
      type: "Landscape Photograph",
      date: "2009 (a modern photograph)",
      people: [],
      place: "barossa-valley-australia",
      hasImage: true,
      image: {
        src: "/assets/history-barossa-vinerows.jpg",
        alt: "A row of trellised grapevines in a Barossa Valley vineyard, with wooden posts and wire trellising, under a partly cloudy sky.",
        credit: "Photograph by Tam, 2009, licensed CC BY SA 2.0, via Wikimedia Commons."
      },
      transcription: "Trellised vine rows in a Barossa Valley vineyard, representative of vineyard work across the region today. This is a general photograph, not a picture of a specific Schild family vineyard.",
      sourceCount: 1
    },
    "barossa-old-vines-context": {
      id: "barossa-old-vines-context",
      title: "An Old Grenache Vine, Barossa Valley (Contextual Photograph)",
      type: "Landscape Photograph",
      date: "2010",
      people: [],
      place: "barossa-valley-australia",
      hasImage: true,
      image: {
        src: "/assets/history-barossa-oldvine.jpg",
        alt: "A gnarled, weathered old grapevine trunk with bare wood, standing at the edge of a green vineyard row in the Barossa Valley.",
        credit: "Photograph by Stephan Ridgway, 2010, licensed CC BY 2.0, via Wikimedia Commons. Photographed at Charles Melton Winery, Barossa Valley."
      },
      transcription: "This photograph shows the gnarled trunk of an old Grenache vine at Charles Melton Winery, elsewhere in the Barossa Valley. It is used here only to illustrate what a working century old vine looks like. It is not a photograph of the Moorooroo Shiraz vines planted in 1847, and no rights cleared photograph of those specific vines has yet been located for this archive.",
      sourceCount: 1
    },
    "ann-jacobs-land-grant-diary": {
      id: "ann-jacobs-land-grant-diary",
      title: "Land Grant and Diary of Ann Jacobs (Later Ann Horrocks)",
      type: "Land Record &amp; Diary",
      date: "1839&ndash;1847",
      people: [],
      place: "moorooroo-vineyard",
      hasImage: false,
      pendingNote: "This record describes an original land grant and a diary held by the State Library of South Australia, catalogued as PRG 966. This archive has not yet obtained a rights cleared digital copy of either document, so no scan is shown here.",
      transcription: "An original land grant records Ann Jacobs&rsquo; purchase of 500 acres for &pound;500 in South Australia. Her diary, held by the State Library of South Australia, discusses establishing vines, oats, barley, and fruit trees, along with a large dairy whose building can still be seen today. After her marriage, ownership was required to pass to her brother William Jacob, who has often been credited historically with her pioneering work.",
      sourceCount: 2
    },
    "ben-alma-schild-photo-pending": {
      id: "ben-alma-schild-photo-pending",
      title: "Ben and Alma Schild, Narrow Road (Photograph Pending)",
      type: "Family Photograph",
      date: "1952 (approximate)",
      people: ["ben-schild-vigneron", "alma-schild-vigneron"],
      place: "narrow-road-vineyard",
      hasImage: false,
      pendingNote: "The official Schild Estate website features historic family and property photography that would suit this record well, but reuse permission for that material has not yet been confirmed. This record is a placeholder until a rights cleared photograph, or permission from the family, can be obtained.",
      transcription: "This record is reserved for a photograph of Ben and Alma Schild, or of the original homestead they settled on Narrow Road in 1952, once a rights cleared image can be located or permission is granted.",
      sourceCount: 0
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
    },
    "s-video-schild1896": {
      id: "s-video-schild1896",
      title: "&ldquo;SCHILD, About Us,&rdquo; Schild Watches, via YouTube",
      note: "A contemporary Swiss watch brand, trading as Schild 1896, that describes itself as reviving the historical Schild name in watchmaking from the 1890s onward. This is the brand&rsquo;s own account of its history, not independently verified by this archive, and it does not establish a connection to the Eterna and ETA history told above.",
      status: "researching"
    },
    "s-schildestate-ourstory": {
      id: "s-schildestate-ourstory",
      title: "Schild Estate, &ldquo;Our Story&rdquo;",
      note: "Official Schild Estate account confirming the family has grown grapes in the Barossa Valley since 1952, growing from one vineyard to more than 134 hectares across 11 sites.",
      status: "confirmed"
    },
    "s-schildestate-vineyards": {
      id: "s-schildestate-vineyards",
      title: "Schild Estate, vineyard descriptions (Narrow Road, Three Springs, Angus Brae, Workshop, Kleemann, Moorooroo)",
      note: "Official Schild Estate descriptions of each vineyard site, including location, planting and purchase dates, and naming history.",
      status: "confirmed"
    },
    "s-schildestate-moorooroo": {
      id: "s-schildestate-moorooroo",
      title: "Schild Estate, &ldquo;Moorooroo Launch&rdquo;",
      note: "Official Schild Estate account of Ann Jacobs, later Ann Horrocks, her 1839 arrival, the original land grant, her diary held by the State Library of South Australia, and the transfer of ownership to her brother William Jacob after her marriage.",
      status: "confirmed"
    },
    "s-slsa-horrocks-diary": {
      id: "s-slsa-horrocks-diary",
      title: "State Library of South Australia, Anne Horrocks diary transcript (PRG 966)",
      note: "Institutional archive holding of the diary discussed in Schild Estate&rsquo;s account of Ann Jacobs. This archive has not yet obtained a rights cleared digital copy.",
      status: "confirmed"
    },
    "s-newcastleherald-schild": {
      id: "s-newcastleherald-schild",
      title: "Newcastle Herald, &ldquo;Taste, Artistry in the Genes&rdquo;",
      note: "Newspaper feature on the Schild family across three generations, including Ben and Alma Schild&rsquo;s 1952 arrival, Ben&rsquo;s death in 1956, Ed Schild taking over the property at sixteen, and Ed&rsquo;s son Michael as the third generation chief vigneron.",
      status: "confirmed"
    },
    "s-winetitles-schild-sale": {
      id: "s-winetitles-schild-sale",
      title: "Winetitles, &ldquo;Schild Estate Winery Sold to Atlas Wines&rdquo;",
      note: "Trade press coverage of the 2022 to 2023 sale of the Schild Estate winery and brand, the family&rsquo;s continued focus on grapegrowing, and the leadership transition from Ed Schild to his son Michael.",
      status: "confirmed"
    },
    "s-img-barossa-aerial": {
      id: "s-img-barossa-aerial",
      title: "Aerial photograph of the Barossa Valley, Wikimedia Commons",
      note: "Own work photograph by Tam, licensed CC BY SA 2.0.",
      status: "confirmed"
    },
    "s-img-barossa-1987": {
      id: "s-img-barossa-1987",
      title: "Photograph of the Barossa Valley, 1987, Wikimedia Commons",
      note: "Photograph by Phillip Capper, licensed CC BY 2.0.",
      status: "confirmed"
    },
    "s-img-barossa-delivery1945": {
      id: "s-img-barossa-delivery1945",
      title: "Photograph of grape delivery, circa 1945, Wikimedia Commons",
      note: "State Government Photographer, The History Trust of South Australia. CC0 1.0 Public Domain.",
      status: "confirmed"
    },
    "s-img-barossa-vintage1955": {
      id: "s-img-barossa-vintage1955",
      title: "Photograph of grape vintage, circa 1955, Wikimedia Commons",
      note: "State Government Photographer, The History Trust of South Australia. CC0 1.0 Public Domain.",
      status: "confirmed"
    },
    "s-img-barossa-picking": {
      id: "s-img-barossa-picking",
      title: "Photograph of grape picking, Barossa Valley, Wikimedia Commons",
      note: "State Government Photographer, The History Trust of South Australia. CC0 1.0 Public Domain.",
      status: "confirmed"
    },
    "s-img-rowlandflat-historic": {
      id: "s-img-rowlandflat-historic",
      title: "Historical photograph of Rowland Flat, Wikimedia Commons",
      note: "State Government Photographer, The History Trust of South Australia. CC0 1.0 Public Domain.",
      status: "confirmed"
    },
    "s-img-barossa-vinerows": {
      id: "s-img-barossa-vinerows",
      title: "Photograph of vineyard rows, Barossa Valley, Wikimedia Commons",
      note: "Own work photograph by Tam, licensed CC BY SA 2.0.",
      status: "confirmed"
    },
    "s-img-barossa-oldvine": {
      id: "s-img-barossa-oldvine",
      title: "Photograph of an old Grenache vine, Charles Melton Winery, Barossa Valley, Wikimedia Commons",
      note: "Photograph by Stephan Ridgway, licensed CC BY 2.0. Used as a contextual illustration only, not a photograph of the Moorooroo vines.",
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
    "eta-movement-2824": ["s-img-eta-movement"],
    "ann-jacobs-arrives-1839": ["s-schildestate-moorooroo", "s-slsa-horrocks-diary"],
    "moorooroo-vines-planted-1847": ["s-schildestate-moorooroo", "s-slsa-horrocks-diary"],
    "kleemann-planted-1916": ["s-schildestate-vineyards"],
    "narrow-road-settled-1952": ["s-schildestate-ourstory", "s-schildestate-vineyards", "s-newcastleherald-schild"],
    "ben-schild-dies-1956": ["s-newcastleherald-schild"],
    "workshop-vineyard-purchased-1993": ["s-schildestate-vineyards"],
    "workshop-named-1999": ["s-schildestate-vineyards"],
    "angus-brae-purchased-2001": ["s-schildestate-vineyards"],
    "winery-sale-2022": ["s-winetitles-schild-sale", "s-newcastleherald-schild"],
    "barossa-valley-aerial-view": ["s-img-barossa-aerial"],
    "barossa-aerial-1987": ["s-img-barossa-1987"],
    "barossa-grape-delivery-1945": ["s-img-barossa-delivery1945"],
    "barossa-vintage-1955": ["s-img-barossa-vintage1955"],
    "barossa-grape-picking-historic": ["s-img-barossa-picking"],
    "rowland-flat-historic-view": ["s-img-rowlandflat-historic"],
    "barossa-vineyard-rows": ["s-img-barossa-vinerows"],
    "barossa-old-vines-context": ["s-img-barossa-oldvine"],
    "ann-jacobs-land-grant-diary": ["s-schildestate-moorooroo", "s-slsa-horrocks-diary"],
    "ben-alma-schild-photo-pending": ["s-schildestate-ourstory"]
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
    },
    {
      id: "barossa-schild-lineage",
      question: "Are the Barossa Schild family and our Schild family directly related?",
      status: "researching",
      evidence: "The history of the Schild family in the Barossa Valley is well documented beginning with Ben and Alma Schild in 1952.",
      unknown: "A direct genealogical connection between this Australian branch and the Schild family represented elsewhere on this site has not yet been established.",
      people: ["ben-schild-vigneron", "alma-schild-vigneron", "ed-schild-vigneron", "michael-schild-vigneron", "angus-schild-vigneron"]
    }
  ]
};
