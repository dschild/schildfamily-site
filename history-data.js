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
    }
  },

  eventSources: {
    "land-deed-1854": ["s-land-deed-1854"],
    "census-1860": ["s-census-1860"],
    "postmaster-1868": ["s-postmaster"],
    "postmaster-1869": ["s-postmaster", "s-lena"]
  },

  mysteries: [
    {
      id: "august-theodor-brothers",
      question: "Were August and Theodor Schild brothers?",
      status: "researching",
      evidence: "They appear beside one another in the 1860 census, were close in age, and were both born in Saxony.",
      unknown: "Their exact relationship &mdash; brothers, cousins, unrelated neighbors sharing a surname &mdash; has not yet been proven.",
      people: ["august-schild", "theodor-schild"]
    }
  ]
};
