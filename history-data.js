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
    },
    "erwin-schild-rabbi": {
      id: "erwin-schild-rabbi",
      name: "Rabbi Erwin Schild",
      years: "1920&ndash;2024",
      birthPlace: "Cologne M&uuml;lheim, Germany",
      role: "Rabbi &middot; Author &middot; Wider Schild Story",
      wideStory: true,
      summary: "Born in Cologne M&uuml;lheim in 1920, imprisoned at Dachau at eighteen after the November 1938 pogrom, and later interned in Canada as an enemy alien after fleeing Nazi Germany. Ordained a rabbi, he led Toronto&rsquo;s Adath Israel Congregation for more than forty years and devoted much of his later life to Christian and Jewish dialogue and reconciliation, including repeated returns to Germany as a lecturer. Presented here as wider Schild surname history, not a proven branch of our direct family line.",
      stories: ["erwin-schild"],
      places: ["cologne-muelheim-germany", "wurzburg-germany", "dachau-germany", "london-england", "canada-wartime-internment", "toronto-canada", "adath-israel-congregation"],
      events: ["birth-erwin-1920", "kristallnacht-1938", "dachau-imprisoned-1938", "dachau-released-1938", "escape-to-britain-1939", "deported-canada-1940", "released-internment-1942", "ordained-rabbi-erwin", "joins-adath-israel-1947", "retires-adath-israel-1989", "order-of-canada-2001", "death-erwin-2024"],
      documents: ["dachau-remembrance-book-entry", "order-of-canada-citation", "wurzburg-seminary-photo", "erwin-schild-portrait-pending", "erwin-schild-germany-visits-pending", "adath-israel-congregation-life-pending"]
    },
    "hermann-schild-cologne": {
      id: "hermann-schild-cologne",
      name: "Hermann Schild",
      years: "d. Holocaust, 1941 or later",
      birthPlace: "Germany",
      role: "Businessman &middot; Wider Schild Story",
      wideStory: true,
      summary: "Erwin Schild&rsquo;s father, a businessman in Cologne M&uuml;lheim. In 1941 he was deported, with his wife Hetti, to the Riga ghetto. He did not survive. Presented here as wider Schild surname history, not a proven branch of our direct family line.",
      stories: ["erwin-schild"],
      places: ["cologne-muelheim-germany"],
      events: ["family-deported-riga-1941"],
      documents: ["erwin-family-photo-pending"]
    },
    "hetti-schild-neugarten": {
      id: "hetti-schild-neugarten",
      name: "Hetti Schild",
      years: "d. Holocaust, 1941 or later",
      birthPlace: "Germany",
      role: "Wider Schild Story",
      wideStory: true,
      summary: "Erwin Schild&rsquo;s mother, born Hetti Neugarten. In 1941 she was deported, with her husband Hermann, to the Riga ghetto. She did not survive. Presented here as wider Schild surname history, not a proven branch of our direct family line.",
      stories: ["erwin-schild"],
      places: ["cologne-muelheim-germany"],
      events: ["family-deported-riga-1941"],
      documents: ["erwin-family-photo-pending"]
    },
    "kurt-schild-brother": {
      id: "kurt-schild-brother",
      name: "Kurt Schild",
      years: "20th century",
      birthPlace: "Germany",
      role: "Wider Schild Story",
      wideStory: true,
      summary: "Erwin Schild&rsquo;s older brother. Accounts describe him as among the last Jews able to leave Germany, emigrating to the United States in 1940, where he later served in the American military. Presented here as wider Schild surname history, not a proven branch of our direct family line.",
      stories: ["erwin-schild"],
      places: ["cologne-muelheim-germany"],
      events: ["kurt-emigrates-1940"],
      documents: ["erwin-family-photo-pending"]
    },
    "margot-schild-sister": {
      id: "margot-schild-sister",
      name: "Margot Schild",
      years: "20th century",
      birthPlace: "Germany",
      role: "Wider Schild Story",
      wideStory: true,
      summary: "Erwin Schild&rsquo;s younger sister. Deported with her parents to the Riga ghetto in 1941, she survived further camps and a death march before her liberation, and later settled in the United States. Presented here as wider Schild surname history, not a proven branch of our direct family line.",
      stories: ["erwin-schild"],
      places: ["cologne-muelheim-germany"],
      events: ["family-deported-riga-1941"],
      documents: ["erwin-family-photo-pending"]
    },
    "charles-ray-schild": {
      id: "charles-ray-schild",
      name: "Charles Ray Schild",
      years: "20th century",
      birthPlace: "Texas",
      role: "Early Stock Car Racer &middot; Playland Park &middot; Wider Schild Story",
      wideStory: true,
      summary: "The earliest documented racer in this Houston Schild family, competing at Playland Park&rsquo;s stock car track in Houston. Detailed records of his career have not surfaced, so this entry stays close to what is confirmed: that racing in this family began with him. Presented here as wider Schild surname history, not a proven branch of the Fredericksburg and Grapetown family line documented elsewhere on this site.",
      stories: ["born-to-race"],
      places: ["playland-park-houston"],
      events: ["charles-ray-racing-playland"],
      documents: ["playland-park-context-pending"]
    },
    "larry-schild-racer": {
      id: "larry-schild-racer",
      name: "Larry Schild",
      years: "20th century",
      birthPlace: "Texas",
      role: "Racer &middot; Family Patriarch of the Next Generation &middot; Wider Schild Story",
      wideStory: true,
      summary: "Son of Charles Ray Schild and Jerry Schild&rsquo;s brother. Larry raced at Houston area tracks including Meyer Speedway, and his branch of the family carried racing forward into the next generation, including his sons and his daughter Gina Schild Knowles. Presented here as wider Schild surname history, not a proven branch of the Fredericksburg and Grapetown family line documented elsewhere on this site.",
      stories: ["born-to-race"],
      places: ["meyer-speedway"],
      events: ["charles-ray-racing-playland"],
      documents: []
    },
    "jerry-schild-racer": {
      id: "jerry-schild-racer",
      name: "Jerry Schild",
      years: "1954&ndash;2012",
      birthPlace: "Texas",
      role: "NASCAR Cup Series Driver &middot; Meyer Speedway &middot; Houston Motorsports Park &middot; Wider Schild Story",
      wideStory: true,
      summary: "Son of Charles Ray Schild. Began racing at Meyer Speedway in Houston in 1972, and by 1974 was competing in NASCAR&rsquo;s top series, making five starts that season including an eighth place finish at Darlington Raceway. He raced for decades afterward at Houston area short tracks, including a state championship in 2003 and a Houston Motorsports Park track championship in 2006. In 2009, weeks after donating a kidney to his sister Linda, he returned to racing. He died in 2012. Presented here as wider Schild surname history, not a proven branch of the Fredericksburg and Grapetown family line documented elsewhere on this site.",
      stories: ["born-to-race"],
      places: ["meyer-speedway", "darlington-raceway-sc", "houston-motorsports-park"],
      events: ["charles-ray-racing-playland", "jerry-schild-meyer-debut-1972", "jerry-schild-nascar-cup-1974", "jerry-schild-state-championship-2003", "jerry-schild-hmp-championship-2006", "jerry-schild-kidney-donation-2009", "jerry-schild-death-2012"],
      documents: ["jerry-schild-obituary", "jerry-schild-nascar-record-pending", "jerry-schild-racing-photo-pending", "darlington-raceway-context-2003"]
    },
    "linda-schild-high": {
      id: "linda-schild-high",
      name: "Linda Schild High",
      years: "20th century",
      birthPlace: "Texas",
      role: "Jerry Schild&rsquo;s Sister &middot; Wider Schild Story",
      wideStory: true,
      summary: "Jerry Schild&rsquo;s sister. In 2009 Jerry donated a kidney to her, then returned to racing only weeks later. Presented here as wider Schild surname history, not a proven branch of the Fredericksburg and Grapetown family line documented elsewhere on this site.",
      stories: ["born-to-race"],
      places: [],
      events: ["jerry-schild-kidney-donation-2009"],
      documents: []
    },
    "gina-schild-knowles": {
      id: "gina-schild-knowles",
      name: "Gina Schild Knowles",
      years: "21st century",
      birthPlace: "Texas",
      role: "Track Promoter, Houston Motorsports Park &middot; Wider Schild Story",
      wideStory: true,
      summary: "A member of the next generation of this racing family, Gina took over the lease of Houston Motorsports Park in 2019 and has worked since to keep short track racing alive there, including the track regaining NASCAR sanctioning around 2020. She represents the family&rsquo;s shift from driving to stewarding the sport itself. Presented here as wider Schild surname history, not a proven branch of the Fredericksburg and Grapetown family line documented elsewhere on this site.",
      stories: ["born-to-race"],
      places: ["houston-motorsports-park"],
      events: ["gina-hmp-lease-2019", "hmp-nascar-sanctioning-2020"],
      documents: ["gina-schild-knowles-photo-pending"]
    },
    "jt-schild": {
      id: "jt-schild",
      name: "J T Schild",
      years: "21st century",
      birthPlace: "Texas",
      role: "Racer, Next Generation &middot; Wider Schild Story",
      wideStory: true,
      summary: "A member of the family&rsquo;s next generation of racers. Family accounts describe him racing at Houston area short tracks, but this archive has not yet located an independent published record confirming the specific details of his career, so none are asserted here. Presented here as wider Schild surname history, not a proven branch of the Fredericksburg and Grapetown family line documented elsewhere on this site.",
      stories: ["born-to-race"],
      places: ["houston-motorsports-park"],
      events: [],
      documents: []
    },
    "mason-mitchell-hmp": {
      id: "mason-mitchell-hmp",
      name: "Mason Mitchell",
      years: "21st century",
      birthPlace: "Texas",
      role: "Race Director, Houston Motorsports Park &middot; Not a Confirmed Relative",
      wideStory: true,
      summary: "Race director at Houston Motorsports Park, working alongside Gina Schild Knowles to keep the track running. Mason has his own separate, well documented racing family background, unconnected to the Schild family: a great grandfather who rode factory Indian motorcycles, racing grandfathers, and a mother who founded the Gulf Coast Racing Series. No source connects him to the Schild family by blood, and this archive does not present him as one. He appears here as a colleague and fellow steward of the sport at Houston Motorsports Park.",
      stories: ["born-to-race"],
      places: ["houston-motorsports-park"],
      events: [],
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
    },
    "cologne-muelheim-germany": {
      id: "cologne-muelheim-germany",
      name: "Cologne M&uuml;lheim, Germany",
      region: "Rhine Province, Germany",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A district of Cologne on the right bank of the Rhine, where Erwin Schild was born in 1920 into the family of businessman Hermann Schild and his wife Hetti. This entry describes the wider district, and is not evidence of a direct family connection.",
      people: ["erwin-schild-rabbi", "hermann-schild-cologne", "hetti-schild-neugarten", "kurt-schild-brother", "margot-schild-sister"],
      stories: ["erwin-schild"],
      events: ["birth-erwin-1920", "family-deported-riga-1941", "kurt-emigrates-1940"]
    },
    "wurzburg-germany": {
      id: "wurzburg-germany",
      name: "W&uuml;rzburg, Germany",
      region: "Bavaria, Germany",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A city in Bavaria, home to the Israelitische Lehrerbildungsanstalt, the Jewish Teachers Seminary where Erwin Schild was studying when it was attacked and destroyed during the November 1938 pogrom. This entry describes the wider city, and is not evidence of a direct family connection.",
      people: ["erwin-schild-rabbi"],
      stories: ["erwin-schild"],
      events: ["kristallnacht-1938"]
    },
    "dachau-germany": {
      id: "dachau-germany",
      name: "Dachau, Germany",
      region: "Bavaria, Germany",
      context: "wider-schild-story",
      wideStory: true,
      summary: "The site of the Dachau concentration camp, where Erwin Schild was imprisoned from November 12 to December 13, 1938, at the age of eighteen. This entry describes the historical site and its memorial today, and is not evidence of a direct family connection.",
      people: ["erwin-schild-rabbi"],
      stories: ["erwin-schild"],
      events: ["dachau-imprisoned-1938", "dachau-released-1938"]
    },
    "london-england": {
      id: "london-england",
      name: "London, England",
      region: "England, Britain",
      context: "wider-schild-story",
      wideStory: true,
      summary: "The city where Erwin Schild resumed his religious studies at a yeshiva after fleeing Nazi Germany in 1939, before British authorities classified him as an enemy alien in 1940 and he was sent to Canada. This entry describes the wider city, and is not evidence of a direct family connection.",
      people: ["erwin-schild-rabbi"],
      stories: ["erwin-schild"],
      events: ["escape-to-britain-1939"]
    },
    "canada-wartime-internment": {
      id: "canada-wartime-internment",
      name: "Wartime Internment in Canada",
      region: "Canada",
      context: "wider-schild-story",
      wideStory: true,
      summary: "In 1940, Erwin Schild was among refugees from Nazi Germany and Austria whom Britain classified as enemy aliens and deported to Canada, where he was interned. Sources describe an initial period in a prisoner of war style camp followed by a refugee camp, without naming a specific site, so no single camp is identified here. He was released in February 1942. This entry describes the general policy and experience, and is not evidence of a direct family connection.",
      people: ["erwin-schild-rabbi"],
      stories: ["erwin-schild"],
      events: ["deported-canada-1940", "released-internment-1942"]
    },
    "toronto-canada": {
      id: "toronto-canada",
      name: "Toronto, Ontario",
      region: "Ontario, Canada",
      context: "wider-schild-story",
      wideStory: true,
      summary: "The city where Erwin Schild resumed his studies after his release from internment in 1942, was ordained as a rabbi, led Adath Israel Congregation for more than forty years, and died on January 6, 2024, at the age of 103. This entry describes the wider city, and is not evidence of a direct family connection.",
      people: ["erwin-schild-rabbi"],
      stories: ["erwin-schild"],
      events: ["ordained-rabbi-erwin", "joins-adath-israel-1947", "retires-adath-israel-1989", "order-of-canada-2001", "death-erwin-2024"]
    },
    "adath-israel-congregation": {
      id: "adath-israel-congregation",
      name: "Adath Israel Congregation",
      region: "Toronto, Ontario",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A Conservative synagogue in Toronto that Erwin Schild joined as rabbi in September 1947, when it numbered roughly 150 families. He remained its rabbi for more than forty years, retiring in 1989, and a wing of the synagogue building was later named for him. This entry describes the congregation&rsquo;s wider history, and is not evidence of a direct family connection.",
      people: ["erwin-schild-rabbi"],
      stories: ["erwin-schild"],
      events: ["joins-adath-israel-1947", "retires-adath-israel-1989"]
    },
    "playland-park-houston": {
      id: "playland-park-houston",
      name: "Playland Park, Houston",
      region: "Houston, Texas",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A Houston amusement park open from 1940 to 1966 that also hosted a stock car racing track, where Charles Ray Schild raced in the family&rsquo;s earliest documented racing years. Playland Park closed in 1966, and no trace of the site remains today. This entry describes the wider park and track, and is not evidence of a direct connection to the family line documented elsewhere on this site.",
      people: ["charles-ray-schild"],
      stories: ["born-to-race"],
      events: ["charles-ray-racing-playland"]
    },
    "meyer-speedway": {
      id: "meyer-speedway",
      name: "Meyer Speedway",
      region: "South Main area, Houston, Texas",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A short track in Houston, active through the 1960s and into the 1970s, where Jerry Schild began racing in 1972 and Larry Schild also competed. Sources describe its general location near South Main without agreeing on a single precise address, so none is asserted here. This entry describes the wider track, and is not evidence of a direct connection to the family line documented elsewhere on this site.",
      people: ["jerry-schild-racer", "larry-schild-racer"],
      stories: ["born-to-race"],
      events: ["jerry-schild-meyer-debut-1972"]
    },
    "darlington-raceway-sc": {
      id: "darlington-raceway-sc",
      name: "Darlington Raceway",
      region: "Darlington, South Carolina",
      context: "wider-schild-story",
      wideStory: true,
      summary: "One of NASCAR&rsquo;s oldest superspeedways, nicknamed &ldquo;Too Tough to Tame.&rdquo; Jerry Schild finished eighth here in 1974 during his brief NASCAR Cup Series season, the high point of his top level career. This entry describes the wider track, and is not evidence of a direct connection to the family line documented elsewhere on this site.",
      people: ["jerry-schild-racer"],
      stories: ["born-to-race"],
      events: ["jerry-schild-nascar-cup-1974"]
    },
    "houston-motorsports-park": {
      id: "houston-motorsports-park",
      name: "Houston Motorsports Park",
      region: "Houston, Texas",
      context: "wider-schild-story",
      wideStory: true,
      summary: "A three eighths mile high banked asphalt oval in Houston where Jerry Schild won a track championship in 2006, and which Gina Schild Knowles has run since taking over its lease in 2019, working with race director Mason Mitchell to keep it operating, including regaining NASCAR sanctioning around 2020. This entry describes the wider track, and is not evidence of a direct connection to the family line documented elsewhere on this site.",
      people: ["jerry-schild-racer", "gina-schild-knowles", "jt-schild", "mason-mitchell-hmp"],
      stories: ["born-to-race"],
      events: ["jerry-schild-hmp-championship-2006", "gina-hmp-lease-2019", "hmp-nascar-sanctioning-2020"]
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
    },
    "erwin-schild": {
      id: "erwin-schild",
      title: "From Dachau to a Life of Reconciliation",
      subtitle: "The Extraordinary Life of Rabbi Erwin Schild",
      dateRange: "1920&ndash;2024",
      location: "Cologne, W&uuml;rzburg &amp; Dachau, Germany &middot; Toronto, Canada",
      wideStory: true,
      teaser: "At eighteen, Erwin Schild was imprisoned at Dachau. Decades later he returned to Germany again and again, not seeking revenge, but conversation, after building more than forty years of religious leadership in Toronto.",
      people: ["erwin-schild-rabbi", "hermann-schild-cologne", "hetti-schild-neugarten", "kurt-schild-brother", "margot-schild-sister"],
      places: ["cologne-muelheim-germany", "wurzburg-germany", "dachau-germany", "london-england", "canada-wartime-internment", "toronto-canada", "adath-israel-congregation"],
      events: ["birth-erwin-1920", "kristallnacht-1938", "dachau-imprisoned-1938", "dachau-released-1938", "escape-to-britain-1939", "deported-canada-1940", "released-internment-1942", "ordained-rabbi-erwin", "joins-adath-israel-1947", "retires-adath-israel-1989", "order-of-canada-2001", "death-erwin-2024", "family-deported-riga-1941", "kurt-emigrates-1940"],
      documents: ["dachau-remembrance-book-entry", "order-of-canada-citation", "wurzburg-seminary-photo", "munich-synagogue-1938-photo", "dachau-memorial-photo", "cologne-muelheim-photo", "wurzburg-town-photo", "adath-israel-building-photo", "erwin-schild-portrait-pending", "erwin-schild-germany-visits-pending", "adath-israel-congregation-life-pending", "erwin-family-photo-pending"]
    },
    "born-to-race": {
      id: "born-to-race",
      title: "Born to Race",
      subtitle: "Four Generations of the Schild Family on Texas Tracks",
      dateRange: "1950s&ndash;Present",
      location: "Houston, Texas",
      wideStory: true,
      teaser: "From a stock car track at a Houston amusement park to NASCAR&rsquo;s biggest tracks and back to running a short track of their own, racing became something this Schild family passed down, generation after generation.",
      people: ["charles-ray-schild", "larry-schild-racer", "jerry-schild-racer", "linda-schild-high", "gina-schild-knowles", "jt-schild", "mason-mitchell-hmp"],
      places: ["playland-park-houston", "meyer-speedway", "darlington-raceway-sc", "houston-motorsports-park"],
      events: ["charles-ray-racing-playland", "jerry-schild-meyer-debut-1972", "jerry-schild-nascar-cup-1974", "jerry-schild-state-championship-2003", "jerry-schild-hmp-championship-2006", "jerry-schild-kidney-donation-2009", "jerry-schild-death-2012", "gina-hmp-lease-2019", "hmp-nascar-sanctioning-2020"],
      documents: ["jerry-schild-obituary", "playland-park-context-pending", "darlington-raceway-context-2003", "jerry-schild-nascar-record-pending", "jerry-schild-racing-photo-pending", "gina-schild-knowles-photo-pending"]
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
    },
    {
      id: "birth-erwin-1920",
      year: 1920,
      date: "March 9, 1920",
      title: "Erwin Schild Born in Cologne M&uuml;lheim",
      description: "Erwin Schild was born on March 9, 1920, in Cologne M&uuml;lheim, Germany, to businessman Hermann Schild and his wife Hetti, n&eacute;e Neugarten. He grew up with two siblings, an older brother Kurt and a younger sister Margot.",
      people: ["erwin-schild-rabbi", "hermann-schild-cologne", "hetti-schild-neugarten"],
      places: ["cologne-muelheim-germany"],
      story: "erwin-schild",
      sourceCount: 3
    },
    {
      id: "kristallnacht-1938",
      year: 1938,
      date: "November 9&ndash;10, 1938",
      title: "The November Pogrom Reaches W&uuml;rzburg",
      description: "Erwin was studying at the Israelitische Lehrerbildungsanstalt, the Jewish Teachers Seminary in W&uuml;rzburg, when the November pogrom, commonly known as Kristallnacht, reached the city. A mob ransacked his dormitory, and he witnessed the seminary building and its library, including Torah scrolls, burning the following day. Students, Erwin among them, were arrested in the aftermath.",
      people: ["erwin-schild-rabbi"],
      places: ["wurzburg-germany"],
      story: "erwin-schild",
      document: "wurzburg-seminary-photo",
      sourceCount: 2
    },
    {
      id: "dachau-imprisoned-1938",
      year: 1938,
      date: "November 12, 1938",
      title: "Erwin Schild Imprisoned at Dachau",
      description: "At eighteen years old, Erwin Schild was imprisoned at Dachau concentration camp in the roundup that followed the November pogrom.",
      people: ["erwin-schild-rabbi"],
      places: ["dachau-germany"],
      story: "erwin-schild",
      document: "dachau-remembrance-book-entry",
      sourceCount: 1
    },
    {
      id: "dachau-released-1938",
      year: 1938,
      date: "December 13, 1938",
      title: "Released From Dachau",
      description: "Erwin Schild was released from Dachau after a little over four weeks, on the condition that he emigrate from Germany. The Dachau Remembrance Book records these dates as the official basis for his imprisonment there.",
      people: ["erwin-schild-rabbi"],
      places: ["dachau-germany"],
      story: "erwin-schild",
      document: "dachau-remembrance-book-entry",
      sourceCount: 1
    },
    {
      id: "escape-to-britain-1939",
      year: 1939,
      date: "1939",
      title: "Escape to the Netherlands, Then Britain",
      description: "After his release, Erwin Schild left Nazi Germany, traveling first to the Netherlands and then, in the spring of 1939, to Britain, where he resumed his religious studies at a yeshiva in London. Exact travel dates beyond this general route are not detailed in the sources consulted.",
      people: ["erwin-schild-rabbi"],
      places: ["london-england"],
      story: "erwin-schild",
      sourceCount: 1
    },
    {
      id: "family-deported-riga-1941",
      year: 1941,
      date: "1941",
      title: "Hermann, Hetti, and Margot Schild Deported to Riga",
      description: "In 1941, Erwin&rsquo;s parents, Hermann and Hetti Schild, were deported along with his younger sister Margot to the Riga ghetto. Hermann and Hetti did not survive. Margot survived further camps and a death march, was liberated, and later settled in the United States. Sources agree on this outcome while differing slightly in the detail they record, and this entry follows the fuller, more specific account.",
      people: ["hermann-schild-cologne", "hetti-schild-neugarten", "margot-schild-sister"],
      places: ["cologne-muelheim-germany"],
      story: "erwin-schild",
      sourceCount: 2
    },
    {
      id: "kurt-emigrates-1940",
      year: 1940,
      date: "1940",
      title: "Kurt Schild Emigrates to the United States",
      description: "Erwin&rsquo;s older brother Kurt Schild emigrated to the United States in 1940, described in one account as among the last Jews able to leave Germany. He later served in the American military.",
      people: ["kurt-schild-brother"],
      places: ["cologne-muelheim-germany"],
      story: "erwin-schild",
      sourceCount: 1
    },
    {
      id: "deported-canada-1940",
      year: 1940,
      date: "1940",
      title: "Classified an Enemy Alien and Sent to Canada",
      description: "In May 1940, with Nazi Germany advancing through Western Europe, British authorities classified Erwin Schild, a refugee from Nazi persecution, as an enemy alien. He was deported to Canada, arriving at Quebec City in July 1940, and was interned there. His classification resulted from wartime nationality policy toward German and Austrian nationals in Britain, not from any action of his own.",
      people: ["erwin-schild-rabbi"],
      places: ["canada-wartime-internment"],
      story: "erwin-schild",
      sourceCount: 2
    },
    {
      id: "released-internment-1942",
      year: 1942,
      date: "February 1942",
      title: "Released From Internment",
      description: "Erwin Schild was released from internment in Canada in February 1942, with assistance from the Canadian Jewish Congress, after continuing his religious studies while interned. He went on to study at the University of Toronto and at a yeshiva there.",
      people: ["erwin-schild-rabbi"],
      places: ["canada-wartime-internment", "toronto-canada"],
      story: "erwin-schild",
      sourceCount: 1
    },
    {
      id: "ordained-rabbi-erwin",
      year: 1947,
      date: "1947",
      title: "Ordained as a Rabbi",
      description: "Erwin Schild completed his rabbinical studies in Toronto and was ordained. Most North American sources place his ordination in 1947, the same year he became rabbi of Adath Israel Congregation; one German biographical source instead gives December 1944 for a rabbinical ordination. This entry follows the majority of sources and notes the discrepancy rather than resolving it outright.",
      people: ["erwin-schild-rabbi"],
      places: ["toronto-canada"],
      story: "erwin-schild",
      sourceCount: 3
    },
    {
      id: "joins-adath-israel-1947",
      year: 1947,
      date: "September 1947",
      title: "Becomes Rabbi of Adath Israel Congregation",
      description: "In September 1947, Erwin Schild became rabbi of Adath Israel Congregation in Toronto, then numbering roughly 150 families. It was his only pulpit position, and he remained its rabbi for more than forty years.",
      people: ["erwin-schild-rabbi"],
      places: ["adath-israel-congregation", "toronto-canada"],
      story: "erwin-schild",
      document: "adath-israel-building-photo",
      sourceCount: 3
    },
    {
      id: "retires-adath-israel-1989",
      year: 1989,
      date: "1989",
      title: "Retires as Congregational Rabbi",
      description: "After more than forty years as its rabbi, Erwin Schild retired from the pulpit at Adath Israel Congregation in 1989 and was named Rabbi Emeritus. Under his leadership the congregation had grown substantially, and a later expansion of the synagogue building was named the Rabbi Erwin Schild Wing.",
      people: ["erwin-schild-rabbi"],
      places: ["adath-israel-congregation"],
      story: "erwin-schild",
      document: "adath-israel-building-photo",
      sourceCount: 2
    },
    {
      id: "order-of-canada-2001",
      year: 2001,
      date: "Awarded May 30, 2001 &middot; Invested October 17, 2001",
      title: "Member of the Order of Canada",
      description: "Erwin Schild was made a Member of the Order of Canada, Canada&rsquo;s highest civilian honour. The Governor General&rsquo;s citation states that he devoted many years to improving dialogue between the Christian and Jewish faiths, promoting harmony at home and abroad, and that he traveled extensively throughout Germany as an invited lecturer. He had earlier received Germany&rsquo;s Officer&rsquo;s Cross of the Order of Merit, in 2000, for the same body of reconciliation work.",
      people: ["erwin-schild-rabbi"],
      places: ["toronto-canada"],
      story: "erwin-schild",
      document: "order-of-canada-citation",
      sourceCount: 2
    },
    {
      id: "death-erwin-2024",
      year: 2024,
      date: "January 6, 2024",
      title: "Erwin Schild Dies in Toronto",
      description: "Erwin Schild died in Toronto on January 6, 2024, at the age of 103.",
      people: ["erwin-schild-rabbi"],
      places: ["toronto-canada"],
      story: "erwin-schild",
      sourceCount: 3
    },
    {
      id: "charles-ray-racing-playland",
      year: 1950,
      date: "Approximate, 1950s",
      title: "Charles Ray Schild Races at Playland Park",
      description: "The earliest documented racing in this family: Charles Ray Schild competed at the stock car track inside Houston&rsquo;s Playland Park, which operated from 1940 until its closure in 1966. No exact date has been confirmed, so an approximate decade is used here rather than an invented specific date.",
      people: ["charles-ray-schild"],
      places: ["playland-park-houston"],
      story: "born-to-race",
      document: "playland-park-context-pending",
      sourceCount: 1
    },
    {
      id: "jerry-schild-meyer-debut-1972",
      year: 1972,
      date: "1972",
      title: "Jerry Schild Begins Racing at Meyer Speedway",
      description: "Jerry Schild started racing at Meyer Speedway in Houston in 1972, the beginning of a driving career that would reach NASCAR&rsquo;s top series just two years later.",
      people: ["jerry-schild-racer"],
      places: ["meyer-speedway"],
      story: "born-to-race",
      sourceCount: 2
    },
    {
      id: "jerry-schild-nascar-cup-1974",
      year: 1974,
      date: "1974",
      title: "Jerry Schild Races in NASCAR's Top Series",
      description: "Jerry Schild made five starts in NASCAR&rsquo;s top series in 1974, recording an eighth place finish at Darlington Raceway, the high point of his brief top level career before he returned to short track racing in Texas.",
      people: ["jerry-schild-racer"],
      places: ["darlington-raceway-sc"],
      story: "born-to-race",
      sourceCount: 2
    },
    {
      id: "jerry-schild-state-championship-2003",
      year: 2003,
      date: "2003",
      title: "Jerry Schild Wins a Texas State Championship",
      description: "Decades after his NASCAR season, Jerry Schild won a state championship racing at Houston area short tracks, followed by a runner up finish the following year.",
      people: ["jerry-schild-racer"],
      places: [],
      story: "born-to-race",
      sourceCount: 1
    },
    {
      id: "jerry-schild-hmp-championship-2006",
      year: 2006,
      date: "2006",
      title: "Jerry Schild Wins a Houston Motorsports Park Track Championship",
      description: "Jerry Schild won a track championship at Houston Motorsports Park in 2006, a track his niece Gina would later take over running herself.",
      people: ["jerry-schild-racer"],
      places: ["houston-motorsports-park"],
      story: "born-to-race",
      sourceCount: 1
    },
    {
      id: "jerry-schild-kidney-donation-2009",
      year: 2009,
      date: "2009",
      title: "Six Weeks After Surgery",
      description: "In 2009, Jerry Schild donated a kidney to his sister Linda. Only weeks after the surgery, he returned to racing, a detail his family and those who knew him have pointed to as characteristic of how central racing was to his life.",
      people: ["jerry-schild-racer", "linda-schild-high"],
      places: [],
      story: "born-to-race",
      sourceCount: 1
    },
    {
      id: "jerry-schild-death-2012",
      year: 2012,
      date: "2012",
      title: "Jerry Schild Dies",
      description: "Jerry Schild died in 2012 in Tioga, North Dakota. Press coverage at the time, including the Williston Herald, reported his death as a shooting, and Texas racing figures who knew him were quoted remembering him as a local legend of the sport. His death closed out a racing career that spanned four decades, from a Houston short track debut in 1972 to a NASCAR Cup season in 1974 and years of short track racing that followed.",
      people: ["jerry-schild-racer"],
      places: [],
      story: "born-to-race",
      document: "jerry-schild-obituary",
      sourceCount: 2
    },
    {
      id: "gina-hmp-lease-2019",
      year: 2019,
      date: "2019",
      title: "Gina Schild Knowles Takes Over Houston Motorsports Park",
      description: "Gina Schild Knowles took over the lease of Houston Motorsports Park in 2019, moving her branch of the family from driving into running the track itself.",
      people: ["gina-schild-knowles"],
      places: ["houston-motorsports-park"],
      story: "born-to-race",
      sourceCount: 1
    },
    {
      id: "hmp-nascar-sanctioning-2020",
      year: 2020,
      date: "Approximate, around 2020",
      title: "Houston Motorsports Park Regains NASCAR Sanctioning",
      description: "Under Gina Schild Knowles, Houston Motorsports Park regained NASCAR sanctioning, restoring the track&rsquo;s standing within the sport her family had raced in for generations.",
      people: ["gina-schild-knowles"],
      places: ["houston-motorsports-park"],
      story: "born-to-race",
      sourceCount: 1
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
    },
    "dachau-remembrance-book-entry": {
      id: "dachau-remembrance-book-entry",
      title: "Dachau Remembrance Book &mdash; Erwin Schild",
      type: "Memorial Record",
      date: "November 12&ndash;December 13, 1938",
      people: ["erwin-schild-rabbi"],
      place: "dachau-germany",
      hasImage: false,
      pendingNote: "This record summarizes the official Dachau Remembrance Book entry rather than reproducing it directly. No rights cleared scan of the entry itself is held by this archive.",
      transcription: "The Dachau Remembrance Book records Erwin Schild&rsquo;s imprisonment at the camp from November 12, 1938, to December 13, 1938, following his arrest in the aftermath of the November pogrom in W&uuml;rzburg. He was eighteen years old.",
      sourceCount: 1
    },
    "order-of-canada-citation": {
      id: "order-of-canada-citation",
      title: "Order of Canada Citation &mdash; Erwin Schild",
      type: "Honours Citation",
      date: "Awarded May 30, 2001 &middot; Invested October 17, 2001",
      people: ["erwin-schild-rabbi"],
      place: "toronto-canada",
      hasImage: false,
      pendingNote: "The Governor General&rsquo;s office may hold an official investiture photograph, but reuse rights for that image have not been confirmed, so no photograph is shown here.",
      transcription: "&ldquo;Rabbi Emeritus of the Adath Israel Congregation, he has devoted many years to improving dialogue between the Christian and Jewish faiths, promoting harmony at home and abroad. An active member of the community, he is admired by his contemporaries for his leadership, generosity, commitment to multiculturalism and positive interfaith relations. He has travelled extensively throughout Germany as an invited lecturer. A Holocaust survivor, he is the author of World Through My Window and The Very Narrow Bridge, which emphasize the significance of tolerance, values and ethics in our daily lives.&rdquo;",
      sourceCount: 1
    },
    "wurzburg-seminary-photo": {
      id: "wurzburg-seminary-photo",
      title: "The J&uuml;dische Lehrerbildungsanstalt Building, W&uuml;rzburg",
      type: "Historical Photograph",
      date: "1914",
      people: [],
      place: "wurzburg-germany",
      hasImage: true,
      image: {
        src: "/assets/history-wurzburg-seminary.jpg",
        alt: "A black and white photograph from 1914 of a tall narrow townhouse on a cobbled street in Würzburg, with shuttered windows and a steep roof.",
        credit: "Photograph by Nathan Bamberger, 1914, public domain, via Wikimedia Commons. The Jewish Teachers Seminary building at Kettengasse 6, Würzburg."
      },
      transcription: "This 1914 photograph shows the seminary building at Kettengasse 6 in Würzburg, home to the Israelitische Lehrerbildungsanstalt, decades before Erwin Schild studied there. The building was attacked during the November 1938 pogrom.",
      sourceCount: 1
    },
    "munich-synagogue-1938-photo": {
      id: "munich-synagogue-1938-photo",
      title: "A Synagogue Destroyed During the November 1938 Pogrom",
      type: "Historical Photograph",
      date: "November 1938",
      people: [],
      place: "wurzburg-germany",
      hasImage: true,
      image: {
        src: "/assets/history-munich-synagogue-1938.jpg",
        alt: "A black and white photograph of a large stone synagogue with a damaged roof and scorched walls, photographed in November 1938 with onlookers gathered outside.",
        credit: "Bundesarchiv Bild 146-1970-041-46, licensed CC BY SA 3.0 DE, via Wikimedia Commons. The Ohel Jakob Synagogue, Munich, photographed after the November 1938 pogrom."
      },
      transcription: "This photograph shows the Ohel Jakob Synagogue in Munich after the November 1938 pogrom, not the seminary in Würzburg where Erwin Schild was studying. It is used here to show the nature of the destruction taking place across Germany that week, without a rights cleared photograph of Würzburg itself.",
      sourceCount: 1
    },
    "dachau-memorial-photo": {
      id: "dachau-memorial-photo",
      title: "Dachau Memorial Site Today",
      type: "Contemporary Photograph",
      date: "2021",
      people: [],
      place: "dachau-germany",
      hasImage: true,
      image: {
        src: "/assets/history-dachau-memorial.jpg",
        alt: "A wide view of the gravel roll call yard at the Dachau Memorial Site, with long low former camp buildings along the horizon under a blue sky with scattered clouds.",
        credit: "Photograph by Netha Hussain, 2021, licensed CC0, via Wikimedia Commons. The former roll call yard at the Dachau Memorial Site."
      },
      transcription: "The former roll call yard at Dachau, photographed as it appears today as a memorial and historical site. This is a present day photograph, shown to give a sense of the place rather than to depict conditions in 1938.",
      sourceCount: 1
    },
    "cologne-muelheim-photo": {
      id: "cologne-muelheim-photo",
      title: "Cologne M&uuml;lheim on the Rhine",
      type: "Contemporary Photograph",
      date: "2012",
      people: [],
      place: "cologne-muelheim-germany",
      hasImage: true,
      image: {
        src: "/assets/history-cologne-muelheim.jpg",
        alt: "A wide riverside view of Cologne Mülheim, showing the Rhine river, a church with a spire, and buildings along the promenade, seen from a bridge.",
        credit: "Photograph by A.Savin, 2012, licensed CC BY SA 3.0, via Wikimedia Commons. The Rhine and the promenade in Cologne Mülheim, seen from the Mülheim Bridge."
      },
      transcription: "A present day view of Cologne Mülheim on the Rhine, the district where Erwin Schild was born in 1920. This is a general view of the district, not a photograph of any specific family address.",
      sourceCount: 1
    },
    "wurzburg-town-photo": {
      id: "wurzburg-town-photo",
      title: "W&uuml;rzburg Old Town and the Main River",
      type: "Contemporary Photograph",
      date: "2022",
      people: [],
      place: "wurzburg-germany",
      hasImage: true,
      image: {
        src: "/assets/history-wurzburg-town.jpg",
        alt: "A panoramic view of Würzburg's old town along the Main river, with church spires and a hilltop fortress visible above the rooftops.",
        credit: "Photograph by Robert von Oliva (naruciakk), 2022, licensed CC0, via Wikimedia Commons. A panorama of Würzburg's old town and the Main river."
      },
      transcription: "A present day panorama of Würzburg, the city where Erwin Schild was studying at the Jewish Teachers Seminary when the November 1938 pogrom reached the city.",
      sourceCount: 1
    },
    "adath-israel-building-photo": {
      id: "adath-israel-building-photo",
      title: "Adath Israel Congregation, Toronto",
      type: "Contemporary Photograph",
      date: "2010",
      people: [],
      place: "adath-israel-congregation",
      hasImage: true,
      image: {
        src: "/assets/history-adathisrael-building.jpg",
        alt: "A red brick synagogue building on a Toronto street corner, with an inscribed stone lintel above the entrance and a utility pole in front.",
        credit: "Photograph by SimonP, 2010, licensed CC BY SA 3.0, via Wikimedia Commons. The Adath Israel Congregation building, Toronto."
      },
      transcription: "The Adath Israel Congregation synagogue in Toronto, where Erwin Schild served as rabbi from 1947 to 1989. A later expansion of this building was named the Rabbi Erwin Schild Wing.",
      sourceCount: 1
    },
    "erwin-schild-portrait-pending": {
      id: "erwin-schild-portrait-pending",
      title: "Portrait of Rabbi Erwin Schild (Photograph Pending)",
      type: "Portrait Photograph",
      date: "20th &amp; 21st century",
      people: ["erwin-schild-rabbi"],
      place: "toronto-canada",
      hasImage: false,
      pendingNote: "Photographs of Erwin Schild, as a young man and later in life, exist through Adath Israel Congregation, the Canadian Jewish News, the Toronto Holocaust Museum, and the USC Shoah Foundation, whose 2013 video testimony includes moving footage of him. Reuse rights for a still photograph have not yet been confirmed with any of these sources, so no image is stored here. His 2013 USC Shoah Foundation testimony can be watched directly at the source link below.",
      transcription: "This record is reserved for a rights cleared portrait of Rabbi Erwin Schild once permission can be obtained from one of the institutional sources that hold his photograph.",
      sourceCount: 3
    },
    "erwin-schild-germany-visits-pending": {
      id: "erwin-schild-germany-visits-pending",
      title: "Erwin Schild's Return Visits to Germany (Photographs Pending)",
      type: "Event Photograph",
      date: "Later 20th &amp; early 21st century",
      people: ["erwin-schild-rabbi"],
      place: "toronto-canada",
      hasImage: false,
      pendingNote: "News coverage of Erwin Schild's lecture tours, interfaith events, and honours in Germany exists through German institutional and Canadian Jewish press sources, but reuse rights for specific photographs have not yet been confirmed.",
      transcription: "This record is reserved for photographs of Erwin Schild's later life work in Germany, including his lectures and Christian and Jewish dialogue events, once rights cleared images can be located.",
      sourceCount: 1
    },
    "adath-israel-congregation-life-pending": {
      id: "adath-israel-congregation-life-pending",
      title: "Erwin Schild at Adath Israel (Photographs Pending)",
      type: "Congregational Photograph",
      date: "1947&ndash;1989",
      people: ["erwin-schild-rabbi"],
      place: "adath-israel-congregation",
      hasImage: false,
      pendingNote: "Adath Israel Congregation's own history pages describe decades of services, celebrations, and the dedication of the Rabbi Erwin Schild Wing, but reuse rights for specific photographs from the congregation have not yet been confirmed.",
      transcription: "This record is reserved for photographs of Rabbi Schild at services or congregational events during his more than forty years at Adath Israel, once rights cleared images can be located or permission is granted.",
      sourceCount: 1
    },
    "erwin-family-photo-pending": {
      id: "erwin-family-photo-pending",
      title: "The Schild Family, Cologne M&uuml;lheim (Photograph Pending)",
      type: "Family Photograph",
      date: "Before 1938",
      people: ["hermann-schild-cologne", "hetti-schild-neugarten", "kurt-schild-brother", "margot-schild-sister"],
      place: "cologne-muelheim-germany",
      hasImage: false,
      pendingNote: "No rights cleared photograph of Hermann, Hetti, Kurt, or Margot Schild has been located for this archive. This record is a placeholder rather than a guess at what such a photograph might show.",
      transcription: "This record is reserved for a photograph of Erwin Schild's parents Hermann and Hetti, or his siblings Kurt and Margot, should one be located and rights cleared in the future.",
      sourceCount: 0
    },
    "jerry-schild-obituary": {
      id: "jerry-schild-obituary",
      title: "Obituary &mdash; Jerry Schild",
      type: "Obituary",
      date: "2012",
      people: ["jerry-schild-racer"],
      place: "houston-motorsports-park",
      hasImage: false,
      transcription: "Records Jerry Schild's racing career from his 1972 start at Meyer Speedway through his 1974 NASCAR top series season, his return to short track racing, his 2009 kidney donation to his sister Linda, and his death in 2012 in Tioga, North Dakota, which press coverage including the Williston Herald reported as a shooting.",
      sourceCount: 2
    },
    "playland-park-context-pending": {
      id: "playland-park-context-pending",
      title: "The Skyrocket Roller Coaster, Playland Park, Houston",
      type: "Historical Photograph",
      date: "May 1943",
      people: [],
      place: "playland-park-houston",
      hasImage: true,
      image: {
        src: "/assets/history-playland-park-skyrocket.jpg",
        alt: "A black and white 1943 photograph of the Skyrocket roller coaster at Playland Park in Houston, Texas, with its wooden structure and track rising against the sky.",
        credit: "Photograph by John Vachon, May 1943, Farm Security Administration&ndash;Office of War Information Collection, Library of Congress. Public domain, via Wikimedia Commons."
      },
      transcription: "The Skyrocket roller coaster at Playland Park, photographed in May 1943 by John Vachon for the Farm Security Administration. This image shows the amusement park where Charles Ray Schild raced stock cars in the 1950s, though it depicts the Skyrocket and midway rather than the stock car track itself, no photograph of which has yet been located. Playland Park closed in 1966 and no trace of the site remains today.",
      sourceCount: 2
    },
    "darlington-raceway-context-2003": {
      id: "darlington-raceway-context-2003",
      title: "NASCAR Busch Series Race, Darlington Raceway",
      type: "Historical Photograph",
      date: "August 30, 2003",
      people: [],
      place: "darlington-raceway-sc",
      hasImage: true,
      image: {
        src: "/assets/history-darlington-raceway.jpg",
        alt: "A NASCAR Busch Series stock car race at Darlington Raceway, with cars racing through a turn in front of a full grandstand of spectators.",
        credit: "U.S. Navy photo by Chief Photographer's Mate Johnny Bivera, August 30, 2003. Public domain, via Wikimedia Commons."
      },
      transcription: "A NASCAR Busch Series race at Darlington Raceway in South Carolina, photographed in 2003. This is a contextual photograph of the track where Jerry Schild raced in NASCAR's top series in 1974; it does not show his race, which predates this photograph by nearly three decades, and no image of his own 1974 race has been located.",
      sourceCount: 1
    },
    "jerry-schild-nascar-record-pending": {
      id: "jerry-schild-nascar-record-pending",
      title: "Jerry Schild's 1974 NASCAR Season Record",
      type: "Race Record",
      date: "1974",
      people: ["jerry-schild-racer"],
      place: "darlington-raceway-sc",
      hasImage: false,
      transcription: "Confirms five starts for Jerry Schild in NASCAR's top series during the 1974 season, including an eighth place finish at Darlington Raceway. This is a summary of published race records rather than a reproduction of any single newspaper article.",
      sourceCount: 2
    },
    "jerry-schild-racing-photo-pending": {
      id: "jerry-schild-racing-photo-pending",
      title: "Jerry Schild in Victory Lane (Photographs Pending)",
      type: "Racing Photograph",
      date: "1972&ndash;2009",
      people: ["jerry-schild-racer"],
      place: "meyer-speedway",
      hasImage: false,
      pendingNote: "This archive knows photographs of Jerry Schild racing and in victory lane very likely exist in newspaper archives, track programs, and family collections, but a rights cleared copy has not yet been secured. This record is a placeholder rather than a guess at what such a photograph might show.",
      transcription: "This record is reserved for photographs of Jerry Schild racing or celebrating a win, should rights cleared images be located.",
      sourceCount: 0
    },
    "gina-schild-knowles-photo-pending": {
      id: "gina-schild-knowles-photo-pending",
      title: "Gina Schild Knowles at Houston Motorsports Park (Photograph Pending)",
      type: "Portrait Photograph",
      date: "2019&ndash;Present",
      people: ["gina-schild-knowles"],
      place: "houston-motorsports-park",
      hasImage: false,
      pendingNote: "No rights cleared photograph of Gina Schild Knowles has yet been secured for this archive. This record is a placeholder rather than a guess at what such a photograph might show.",
      transcription: "This record is reserved for a photograph of Gina Schild Knowles at Houston Motorsports Park, should a rights cleared image be located.",
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
    },
    "s-gedaechtnisbuch": {
      id: "s-gedaechtnisbuch",
      title: "Erwin Schild, Gedächtnisbuch (Cologne Memorial Project)",
      note: "Biographical entry by Steffi Falk, 2005, gedaechtnisbuch.org/erwin-schild. Used as the primary source for Erwin Schild's early life, Dachau imprisonment dates, and escape route.",
      status: "confirmed"
    },
    "s-adathisrael-ourstory": {
      id: "s-adathisrael-ourstory",
      title: "Our Story, Adath Israel Congregation",
      note: "adathisrael.com/our-story.html. Used for Erwin Schild's tenure, the congregation's growth, and the Rabbi Erwin Schild Wing.",
      status: "confirmed"
    },
    "s-gg-orderofcanada": {
      id: "s-gg-orderofcanada",
      title: "Governor General of Canada, Order of Canada Recipient Record — Erwin Schild",
      note: "gg.ca/en/honours/recipients/146-2325. Official citation text and award/investiture dates.",
      status: "confirmed"
    },
    "s-globeandmail-obituary": {
      id: "s-globeandmail-obituary",
      title: "Erwin Schild, Rabbi Who Survived Holocaust, Promoted Interfaith Dialogue, The Globe and Mail",
      note: "theglobeandmail.com. Used for family details, the Riga deportation, internment specifics, and later life facts.",
      status: "confirmed"
    },
    "s-cjn-profile": {
      id: "s-cjn-profile",
      title: "Rabbi Erwin Schild of Toronto's Adath Israel Synagogue Personally Experienced Nearly 104 Years of Jewish History, The Canadian Jewish News",
      note: "thecjn.ca. Used for family details, congregational growth figures, and later life facts.",
      status: "confirmed"
    },
    "s-wikipedia-erwin-schild": {
      id: "s-wikipedia-erwin-schild",
      title: "Erwin Schild, Wikipedia",
      note: "Used only as a cross reference to confirm dates already established by primary sources above, not relied upon as a primary source.",
      status: "confirmed"
    },
    "s-uscshoah-testimony": {
      id: "s-uscshoah-testimony",
      title: "Erwin Schild, USC Shoah Foundation Visual History Archive Testimony",
      note: "vha.usc.edu/testimony/54296. Linked as a source for his own recorded testimony; not reproduced here.",
      status: "confirmed"
    },
    "s-img-wurzburg-seminary": {
      id: "s-img-wurzburg-seminary",
      title: "Photograph of the Lehrerbildungsanstalt building, Kettengasse 6, Würzburg, Wikimedia Commons",
      note: "Photograph by Nathan Bamberger, 1914, public domain.",
      status: "confirmed"
    },
    "s-img-munich-synagogue-1938": {
      id: "s-img-munich-synagogue-1938",
      title: "Bundesarchiv photograph of the destroyed Ohel Jakob Synagogue, Munich, Wikimedia Commons",
      note: "Bundesarchiv Bild 146-1970-041-46, licensed CC BY SA 3.0 DE. Used as general November 1938 context, not a photograph of Würzburg.",
      status: "confirmed"
    },
    "s-img-dachau-memorial": {
      id: "s-img-dachau-memorial",
      title: "Photograph of the Dachau Memorial Site roll call yard, Wikimedia Commons",
      note: "Photograph by Netha Hussain, 2021, licensed CC0.",
      status: "confirmed"
    },
    "s-img-cologne-muelheim": {
      id: "s-img-cologne-muelheim",
      title: "Photograph of the Rhine and promenade, Cologne Mülheim, Wikimedia Commons",
      note: "Photograph by A.Savin, 2012, licensed CC BY SA 3.0.",
      status: "confirmed"
    },
    "s-img-wurzburg-town": {
      id: "s-img-wurzburg-town",
      title: "Panorama of Würzburg's old town and the Main river, Wikimedia Commons",
      note: "Photograph by Robert von Oliva (naruciakk), 2022, licensed CC0.",
      status: "confirmed"
    },
    "s-img-adathisrael-building": {
      id: "s-img-adathisrael-building",
      title: "Photograph of Adath Israel Congregation, Toronto, Wikimedia Commons",
      note: "Photograph by SimonP, 2010, licensed CC BY SA 3.0.",
      status: "confirmed"
    },
    "s-wikipedia-jerry-schild": {
      id: "s-wikipedia-jerry-schild",
      title: "Wikipedia, &ldquo;Jerry Schild&rdquo;",
      note: "General encyclopedia entry confirming Jerry Schild's 1974 NASCAR top series season, his five starts, and his eighth place finish at Darlington Raceway.",
      status: "confirmed"
    },
    "s-williston-herald-jerry-schild": {
      id: "s-williston-herald-jerry-schild",
      title: "Williston Herald, &ldquo;Shooting victim was &lsquo;local legend&rsquo; in Texas racing&rdquo;",
      note: "News coverage of Jerry Schild's 2012 death in Tioga, North Dakota, reported as a shooting, including remarks from people who knew him in Texas racing.",
      status: "confirmed"
    },
    "s-legacy-jerry-schild-obit": {
      id: "s-legacy-jerry-schild-obit",
      title: "Houston Chronicle obituary for Jerry Schild, via legacy.com",
      note: "Newspaper obituary confirming Jerry Schild's family, his racing career from 1972 onward, his 2009 kidney donation to his sister Linda and return to racing weeks later, and his death in 2012.",
      status: "confirmed"
    },
    "s-nascar-gina-knowles": {
      id: "s-nascar-gina-knowles",
      title: "NASCAR.com feature on Gina Schild Knowles and Houston Motorsports Park",
      note: "Official NASCAR coverage confirming Gina Schild Knowles took over the lease of Houston Motorsports Park in 2019 and the track's return to NASCAR sanctioning.",
      status: "confirmed"
    },
    "s-shorttrack-scene-hmp": {
      id: "s-shorttrack-scene-hmp",
      title: "Short Track Scene article on Houston Motorsports Park",
      note: "Trade publication coverage of Houston Motorsports Park's history and operations under Gina Schild Knowles.",
      status: "confirmed"
    },
    "s-nascar-mason-mitchell": {
      id: "s-nascar-mason-mitchell",
      title: "NASCAR.com feature on Mason Mitchell, Houston Motorsports Park race director",
      note: "Official NASCAR coverage describing Mason Mitchell's own racing family background, separate from the Schild family.",
      status: "confirmed"
    },
    "s-wikipedia-playland-park": {
      id: "s-wikipedia-playland-park",
      title: "Wikipedia, &ldquo;Playland Park (Houston)&rdquo;",
      note: "General encyclopedia entry confirming Playland Park operated in Houston from 1940 to 1966 and included a stock car racing track.",
      status: "confirmed"
    },
    "s-img-playland-park-skyrocket": {
      id: "s-img-playland-park-skyrocket",
      title: "Photograph of the Skyrocket roller coaster, Playland Park, 1943, Library of Congress via Wikimedia Commons",
      note: "Photograph by John Vachon, May 1943, Farm Security Administration&ndash;Office of War Information Collection, Library of Congress, digital ID fsa.8d19660. Public domain as a work of the U.S. federal government. The same file is used to illustrate Playland Park and the Skyrocket on Wikipedia.",
      status: "confirmed"
    },
    "s-img-darlington-raceway-2003": {
      id: "s-img-darlington-raceway-2003",
      title: "Photograph of a NASCAR Busch Series race at Darlington Raceway, 2003, U.S. Navy via Wikimedia Commons",
      note: "U.S. Navy photo by Chief Photographer's Mate Johnny Bivera, August 30, 2003. Public domain as a work of a U.S. Navy sailor taken in the course of official duties.",
      status: "confirmed"
    },
    "s-chron-meyer-speedway": {
      id: "s-chron-meyer-speedway",
      title: "Houston Chronicle coverage referencing Meyer Speedway",
      note: "Newspaper coverage placing Meyer Speedway in Houston's South Main area, active through the 1960s and into the 1970s. Sources describe the track's boundaries in general rather than fully consistent terms, so no single precise address is asserted in this story.",
      status: "probable"
    },
    "s-lonestar-speedzone-forum": {
      id: "s-lonestar-speedzone-forum",
      title: "Lone Star Speedzone forum threads on Houston area short tracks",
      note: "Enthusiast forum discussion used only as a lead pointing toward Meyer Speedway and Houston Motorsports Park history, not as a standalone source for any specific claim in this story.",
      status: "probable"
    },
    "s-wikipedia-space-city-300": {
      id: "s-wikipedia-space-city-300",
      title: "Wikipedia, &ldquo;1971 Space City 300&rdquo;",
      note: "General encyclopedia entry on a 1971 NASCAR race in the Houston area, used here only as background context for the era's Texas racing scene.",
      status: "confirmed"
    },
    "s-hmp-official": {
      id: "s-hmp-official",
      title: "Houston Motorsports Park official website",
      note: "Track's own site describing its three eighths mile high banked asphalt oval configuration.",
      status: "confirmed"
    },
    "s-myracepass-hmp": {
      id: "s-myracepass-hmp",
      title: "MyRacePass track profile, Houston Motorsports Park",
      note: "Racing schedule platform confirming Houston Motorsports Park's three eighths mile asphalt oval configuration.",
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
    "ben-alma-schild-photo-pending": ["s-schildestate-ourstory"],
    "birth-erwin-1920": ["s-gedaechtnisbuch", "s-globeandmail-obituary", "s-cjn-profile"],
    "kristallnacht-1938": ["s-gedaechtnisbuch", "s-globeandmail-obituary"],
    "dachau-imprisoned-1938": ["s-gedaechtnisbuch"],
    "dachau-released-1938": ["s-gedaechtnisbuch"],
    "escape-to-britain-1939": ["s-gedaechtnisbuch"],
    "family-deported-riga-1941": ["s-globeandmail-obituary", "s-cjn-profile"],
    "kurt-emigrates-1940": ["s-cjn-profile"],
    "deported-canada-1940": ["s-gedaechtnisbuch", "s-globeandmail-obituary"],
    "released-internment-1942": ["s-gedaechtnisbuch"],
    "ordained-rabbi-erwin": ["s-gedaechtnisbuch", "s-globeandmail-obituary", "s-wikipedia-erwin-schild"],
    "joins-adath-israel-1947": ["s-adathisrael-ourstory", "s-globeandmail-obituary", "s-wikipedia-erwin-schild"],
    "retires-adath-israel-1989": ["s-adathisrael-ourstory", "s-wikipedia-erwin-schild"],
    "order-of-canada-2001": ["s-gg-orderofcanada", "s-wikipedia-erwin-schild"],
    "death-erwin-2024": ["s-cjn-profile", "s-globeandmail-obituary", "s-wikipedia-erwin-schild"],
    "dachau-remembrance-book-entry": ["s-gedaechtnisbuch"],
    "order-of-canada-citation": ["s-gg-orderofcanada"],
    "wurzburg-seminary-photo": ["s-img-wurzburg-seminary"],
    "munich-synagogue-1938-photo": ["s-img-munich-synagogue-1938"],
    "dachau-memorial-photo": ["s-img-dachau-memorial"],
    "cologne-muelheim-photo": ["s-img-cologne-muelheim"],
    "wurzburg-town-photo": ["s-img-wurzburg-town"],
    "adath-israel-building-photo": ["s-img-adathisrael-building"],
    "erwin-schild-portrait-pending": ["s-adathisrael-ourstory", "s-cjn-profile", "s-uscshoah-testimony"],
    "erwin-schild-germany-visits-pending": ["s-gg-orderofcanada"],
    "adath-israel-congregation-life-pending": ["s-adathisrael-ourstory"],
    "charles-ray-racing-playland": ["s-legacy-jerry-schild-obit", "s-wikipedia-playland-park"],
    "jerry-schild-meyer-debut-1972": ["s-wikipedia-jerry-schild", "s-legacy-jerry-schild-obit"],
    "jerry-schild-nascar-cup-1974": ["s-wikipedia-jerry-schild", "s-legacy-jerry-schild-obit"],
    "jerry-schild-state-championship-2003": ["s-legacy-jerry-schild-obit"],
    "jerry-schild-hmp-championship-2006": ["s-legacy-jerry-schild-obit"],
    "jerry-schild-kidney-donation-2009": ["s-legacy-jerry-schild-obit"],
    "jerry-schild-death-2012": ["s-legacy-jerry-schild-obit", "s-williston-herald-jerry-schild"],
    "gina-hmp-lease-2019": ["s-nascar-gina-knowles", "s-shorttrack-scene-hmp"],
    "hmp-nascar-sanctioning-2020": ["s-nascar-gina-knowles", "s-shorttrack-scene-hmp"],
    "jerry-schild-obituary": ["s-legacy-jerry-schild-obit", "s-williston-herald-jerry-schild"],
    "playland-park-context-pending": ["s-wikipedia-playland-park", "s-img-playland-park-skyrocket"],
    "darlington-raceway-context-2003": ["s-img-darlington-raceway-2003"],
    "jerry-schild-nascar-record-pending": ["s-wikipedia-jerry-schild", "s-legacy-jerry-schild-obit"],
    "jerry-schild-racing-photo-pending": ["s-legacy-jerry-schild-obit"],
    "gina-schild-knowles-photo-pending": ["s-nascar-gina-knowles"]
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
    },
    {
      id: "erwin-schild-lineage",
      question: "Is Rabbi Erwin Schild connected to our direct Schild family line?",
      status: "researching",
      evidence: "Erwin Schild&rsquo;s life and family background are extensively documented across multiple independent sources, including a German memorial project, Adath Israel Congregation, the Governor General of Canada, and Canadian press coverage.",
      unknown: "A direct genealogical connection between his German Schild family and the family line represented elsewhere on this site has not yet been established.",
      people: ["erwin-schild-rabbi", "hermann-schild-cologne", "hetti-schild-neugarten", "kurt-schild-brother", "margot-schild-sister"]
    },
    {
      id: "born-to-race-lineage",
      question: "Is this Houston racing Schild family connected to our direct Schild family line?",
      status: "researching",
      evidence: "Jerry Schild's racing career, his brother Larry, his sister Linda, and his niece Gina Schild Knowles are documented across Wikipedia, a Houston Chronicle obituary, and NASCAR's own coverage of Houston Motorsports Park.",
      unknown: "A direct genealogical connection between this Houston racing family and the Fredericksburg and Grapetown Schild family line documented elsewhere on this site has not yet been established.",
      people: ["charles-ray-schild", "larry-schild-racer", "jerry-schild-racer", "linda-schild-high", "gina-schild-knowles"]
    },
    {
      id: "jt-schild-record",
      question: "What is J T Schild's confirmed racing record?",
      status: "researching",
      evidence: "Family accounts describe J T Schild as part of the next generation of this family's racers at Houston area tracks.",
      unknown: "An independent, published source confirming his specific results, car number, or years racing has not yet been located, so no specific statistics are presented for him in this story.",
      people: ["jt-schild"]
    }
  ]
};
