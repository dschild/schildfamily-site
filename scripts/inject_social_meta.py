# -*- coding: utf-8 -*-
"""
Reusable social-metadata injector for the Schild Family Archive.

Single source of truth: IMAGE_MAP below assigns a social preview image +
descriptive alt text to every route. Title and description are read
directly from each page's own existing <title> / <meta name="description">
tags, so this script never invents or duplicates copy — it only adds the
canonical link, Open Graph, and Twitter Card tags that read from that same
existing content, plus the image assignment.

To add a new page to the system: build it as usual (with its own <title>
and <meta name="description">, as every page already has), add one line to
IMAGE_MAP (or let it fall through to DEFAULT_IMAGE), and re-run this
script. It is idempotent — re-running updates the previously generated
block in place rather than duplicating it.
"""
import os
import re
import glob

ROOT = "/home/claude/schildfamily-site"
SITE_URL = "https://schildfamily.com"
DEFAULT_IMAGE = "social-default-schild-archive.jpg"
DEFAULT_ALT = "The House of Schild crest, the Schild Family Archive's identity mark, beside the archive's name."

# route -> (social image filename in assets/social/, descriptive alt text)
IMAGE_MAP = {
    # --- stories ---
    "/history/stories/erwin-schild/": (
        "social-erwin-schild-story.jpg",
        "Adath Israel Congregation in Toronto, the red brick synagogue where Rabbi Erwin Schild served for more than forty years, with the story's title overlaid.",
    ),
    "/history/stories/schildestatebarossa/": (
        "social-schildestatebarossa-story.jpg",
        "An aerial view of the Barossa Valley, South Australia, where the Schild family has grown grapes since 1952, with the story's title overlaid.",
    ),
    "/history/stories/schildsswisstime/": (
        "social-schildsswisstime-story.jpg",
        "A vintage Eterna pocket watch representing the watchmaking business Urs Schild founded in Grenchen, Switzerland, in 1856.",
    ),
    "/history/stories/august-schild-liberandos/": (
        "social-liberandos-story.jpg",
        "An archival card for the story of August W. Schild Jr. and the 376th Bombardment Group in World War II.",
    ),
    "/history/stories/early-schilds-fredericksburg/": (
        "social-fredericksburg-story.jpg",
        "An archival card for the story of the Schilds of early Fredericksburg, Texas.",
    ),

    # --- people: linked to their story's image ---
    "/history/people/erwin-schild-rabbi/": ("social-erwin-schild-story.jpg", "Adath Israel Congregation in Toronto, where Rabbi Erwin Schild served for more than forty years."),
    "/history/people/hermann-schild-cologne/": ("social-erwin-schild-story.jpg", "Adath Israel Congregation in Toronto, from the wider story of Rabbi Erwin Schild's family."),
    "/history/people/hetti-schild-neugarten/": ("social-erwin-schild-story.jpg", "Adath Israel Congregation in Toronto, from the wider story of Rabbi Erwin Schild's family."),
    "/history/people/kurt-schild-brother/": ("social-erwin-schild-story.jpg", "Adath Israel Congregation in Toronto, from the wider story of Rabbi Erwin Schild's family."),
    "/history/people/margot-schild-sister/": ("social-erwin-schild-story.jpg", "Adath Israel Congregation in Toronto, from the wider story of Rabbi Erwin Schild's family."),
    "/history/people/urs-schild-watchmaker/": ("social-schildsswisstime-story.jpg", "A vintage Eterna pocket watch representing the watchmaking business Urs Schild founded in 1856."),
    "/history/people/adolf-schild-watchmaker/": ("social-schildsswisstime-story.jpg", "A vintage Eterna pocket watch, from the wider story of Swiss watchmaking Schilds."),
    "/history/people/max-schild-watchmaker/": ("social-schildsswisstime-story.jpg", "A vintage Eterna pocket watch, from the wider story of Swiss watchmaking Schilds."),
    "/history/people/theodor-schild-watchmaker/": ("social-schildsswisstime-story.jpg", "A vintage Eterna pocket watch, from the wider story of Swiss watchmaking Schilds."),
    "/history/people/ben-schild-vigneron/": ("social-schildestatebarossa-story.jpg", "An aerial view of the Barossa Valley vineyards the Schild family has tended since 1952."),
    "/history/people/alma-schild-vigneron/": ("social-schildestatebarossa-story.jpg", "An aerial view of the Barossa Valley vineyards the Schild family has tended since 1952."),
    "/history/people/ed-schild-vigneron/": ("social-schildestatebarossa-story.jpg", "An aerial view of the Barossa Valley vineyards the Schild family has tended since 1952."),
    "/history/people/michael-schild-vigneron/": ("social-schildestatebarossa-story.jpg", "An aerial view of the Barossa Valley vineyards the Schild family has tended since 1952."),
    "/history/people/angus-schild-vigneron/": ("social-schildestatebarossa-story.jpg", "An aerial view of the Barossa Valley vineyards the Schild family has tended since 1952."),
    "/history/people/august-schild-jr/": ("social-liberandos-story.jpg", "An archival card for the story of August W. Schild Jr. and the 376th Bombardment Group."),
    "/history/people/august-schild/": ("social-fredericksburg-story.jpg", "An archival card for the story of the Schilds of early Fredericksburg, Texas."),
    "/history/people/theodor-schild/": ("social-fredericksburg-story.jpg", "An archival card for the story of the Schilds of early Fredericksburg, Texas."),

    # --- places with their own dedicated photo ---
    "/history/places/cologne-muelheim-germany/": ("social-place-cologne-muelheim.jpg", "A present-day riverside view of Cologne Mülheim on the Rhine, where Rabbi Erwin Schild was born in 1920."),
    "/history/places/wurzburg-germany/": ("social-place-wurzburg.jpg", "A present-day panoramic view of Würzburg's old town along the Main river."),
    "/history/places/dachau-germany/": ("social-place-dachau.jpg", "The former roll call yard at the Dachau memorial site, photographed as it appears today."),
    "/history/places/adath-israel-congregation/": ("social-place-adath-israel.jpg", "Adath Israel Congregation, the red brick synagogue in Toronto where Rabbi Erwin Schild served as rabbi from 1947 to 1989."),
    "/history/places/toronto-canada/": ("social-place-adath-israel.jpg", "Adath Israel Congregation in Toronto, where Rabbi Erwin Schild built his life and career."),
    "/history/places/grenchen-switzerland/": ("social-place-grenchen.jpg", "A historic 1870s print of Grenchen, Switzerland, showing its early watch factories."),
    "/history/places/barossa-valley-australia/": ("social-place-barossa-valley.jpg", "An aerial view of the Barossa Valley, South Australia."),
    "/history/places/rowland-flat-australia/": ("social-place-rowland-flat.jpg", "A historic black-and-white view of Rowland Flat, South Australia."),
    "/history/places/moorooroo-vineyard/": ("social-place-moorooroo.jpg", "An old Grenache vine trunk, illustrating the character of the century-old Moorooroo vines the Schild family now helps preserve."),

    # --- places without a dedicated photo: reuse the linked story/place image ---
    "/history/places/london-england/": ("social-erwin-schild-story.jpg", "Adath Israel Congregation in Toronto, from the wider story of Rabbi Erwin Schild's journey through London."),
    "/history/places/canada-wartime-internment/": ("social-erwin-schild-story.jpg", "Adath Israel Congregation in Toronto, from the wider story of Rabbi Erwin Schild's wartime internment in Canada."),
    "/history/places/narrow-road-vineyard/": ("social-place-barossa-valley.jpg", "An aerial view of the Barossa Valley, South Australia, where Narrow Road vineyard lies."),
    "/history/places/three-springs-vineyard/": ("social-place-barossa-valley.jpg", "An aerial view of the Barossa Valley, South Australia, where Three Springs vineyard lies."),
    "/history/places/angus-brae-vineyard/": ("social-place-barossa-valley.jpg", "An aerial view of the Barossa Valley, South Australia, where Angus Brae vineyard lies."),
    "/history/places/workshop-vineyard/": ("social-place-barossa-valley.jpg", "An aerial view of the Barossa Valley, South Australia, where Workshop vineyard lies."),
    "/history/places/kleemann-vineyard/": ("social-place-barossa-valley.jpg", "An aerial view of the Barossa Valley, South Australia, where Kleemann vineyard lies."),
    "/history/places/fredericksburg-texas/": ("social-fredericksburg-story.jpg", "An archival card for the story of the Schilds of early Fredericksburg, Texas."),
    "/history/places/grapetown-texas/": ("social-fredericksburg-story.jpg", "An archival card for the story of the Schilds of early Fredericksburg, Texas."),
    "/history/places/waco-texas/": ("social-liberandos-story.jpg", "An archival card for the story of August W. Schild Jr., born in Waco, Texas."),
    "/history/places/mediterranean-theater/": ("social-liberandos-story.jpg", "An archival card for the story of the 376th Bombardment Group's Mediterranean theater operations."),
    "/history/places/italy-wwii-theater/": ("social-liberandos-story.jpg", "An archival card for the story of the 376th Bombardment Group's operations over Italy."),
}

# hub/index pages and the homepage explicitly use the generic default and og:type website
WEBSITE_TYPE_ROUTES = {
    "/", "/history/", "/history/stories/", "/history/people/",
    "/history/places/", "/history/archive/", "/history/timeline/",
}

START_MARK = "<!-- SOCIAL META (generated by scripts/inject_social_meta.py — do not hand-edit; edit IMAGE_MAP and re-run instead) -->"
END_MARK = "<!-- /SOCIAL META -->"


def route_for(path):
    rel = os.path.relpath(path, ROOT)
    if rel == "index.html":
        return "/"
    route = "/" + rel[: -len("index.html")]
    return route


def extract(html, tag_pattern):
    m = re.search(tag_pattern, html)
    return m.group(1) if m else None


def build_block(route, title, description):
    url = SITE_URL + route
    image_file, alt = IMAGE_MAP.get(route, (DEFAULT_IMAGE, DEFAULT_ALT))
    image_url = f"{SITE_URL}/assets/social/{image_file}"
    og_type = "website" if route in WEBSITE_TYPE_ROUTES else "article"

    def esc(s):
        return s.replace('"', "&quot;")

    lines = [
        START_MARK,
        f'<link rel="canonical" href="{url}">',
        "",
        f'<meta property="og:type" content="{og_type}">',
        '<meta property="og:site_name" content="The Schild Family Archive">',
        f'<meta property="og:url" content="{url}">',
        f'<meta property="og:title" content="{esc(title)}">',
        f'<meta property="og:description" content="{esc(description)}">',
        f'<meta property="og:image" content="{image_url}">',
        f'<meta property="og:image:secure_url" content="{image_url}">',
        '<meta property="og:image:width" content="1200">',
        '<meta property="og:image:height" content="630">',
        f'<meta property="og:image:alt" content="{esc(alt)}">',
        "",
        '<meta name="twitter:card" content="summary_large_image">',
        f'<meta name="twitter:title" content="{esc(title)}">',
        f'<meta name="twitter:description" content="{esc(description)}">',
        f'<meta name="twitter:image" content="{image_url}">',
        f'<meta name="twitter:image:alt" content="{esc(alt)}">',
        END_MARK,
    ]
    return "\n".join(lines)


def process(path):
    html = open(path, encoding="utf-8").read()
    title = extract(html, r"<title>(.*?)</title>")
    desc = extract(html, r'<meta name="description" content="(.*?)"\s*>')
    if not title or not desc:
        print("SKIP (missing title/description):", path)
        return False

    route = route_for(path)
    block = build_block(route, title, desc)

    if START_MARK in html:
        pattern = re.compile(re.escape(START_MARK) + r".*?" + re.escape(END_MARK), re.S)
        new_html = pattern.sub(block, html)
        action = "updated"
    else:
        # insert right before </head>
        new_html = html.replace("</head>", block + "\n</head>", 1)
        action = "inserted"

    if new_html != html:
        open(path, "w", encoding="utf-8").write(new_html)
        print(f"{action}: {route}  ->  image={IMAGE_MAP.get(route, (DEFAULT_IMAGE,))[0]}")
        return True
    return False


if __name__ == "__main__":
    files = sorted(glob.glob(os.path.join(ROOT, "**", "index.html"), recursive=True))
    changed = 0
    for f in files:
        if process(f):
            changed += 1
    print(f"\n{changed}/{len(files)} pages updated.")
