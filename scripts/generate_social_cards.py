# -*- coding: utf-8 -*-
"""
Social share card compositor for the Schild Family Archive.

Generates 1200x630 JPEGs for Open Graph / Twitter Card previews, in the
site's own editorial palette (ivory / charcoal / burgundy / brass). Two
layouts:

  full_bleed_card()  - a real, rights-cleared landscape photo fills the
                        frame with a bottom gradient for text legibility.
                        Used whenever a story/place has a suitable
                        landscape-ish photo already on the site.

  split_panel_card() - for portrait-orientation source photos (e.g. the
                        Eterna pocket watch) that would need an ugly crop
                        to fill a landscape frame. The photo sits
                        letterboxed in its own contained panel on one
                        side; text sits in a solid panel on the other.
                        This is the fix for exactly the kind of
                        aggressive-crop problem the old shield caused.

  designed_card()     - a photo-free archival card for stories with no
                        rights-cleared personal photograph at all
                        (Liberandos, Fredericksburg). Charcoal background,
                        brass rule, restrained.

  default_card()      - the generic sitewide fallback: the "House of
                        Schild" crest shown SMALL and CONTAINED (never
                        full-bleed, never cropped) beside the site name.

All output written to assets/social/ with descriptive filenames.
"""
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageOps

ROOT = "/home/claude/schildfamily-site"
ASSETS = os.path.join(ROOT, "assets")
OUT_DIR = os.path.join(ASSETS, "social")
os.makedirs(OUT_DIR, exist_ok=True)

W, H = 1200, 630

# --- site palette ---
PAPER = (246, 241, 230)
CHARCOAL = (27, 23, 18)
CHARCOAL_SOFT = (38, 33, 26)
CREAM = (243, 236, 221)
CREAM_SOFT = (201, 190, 169)
CREAM_FAINT = (140, 130, 114)
BURGUNDY = (111, 31, 40)
BRASS = (169, 129, 47)
BRASS_ON_DARK = (216, 180, 102)

SERIF_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
SANS = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
SANS_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"

MARGIN = 90  # safe-zone margin so text/faces stay clear of platform crops


def font(path, size):
    return ImageFont.truetype(path, size)


def wrap_text(draw, text, f, max_width):
    words = text.split()
    lines = []
    cur = ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=f) <= max_width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def draw_eyebrow(draw, x, y, text, color=BRASS_ON_DARK):
    f = font(SANS_BOLD, 22)
    # letter-spaced uppercase, matching the site's eyebrow-label style
    spaced = " ".join(list(text.upper()))
    draw.text((x, y), spaced, font=f, fill=color)
    return y + 34


def draw_wordmark(img, draw, dark_bg=True):
    """Small 'SCHILD FAMILY ARCHIVE' identity mark, bottom-left, always present."""
    color = BRASS_ON_DARK if dark_bg else BURGUNDY
    f = font(SANS_BOLD, 20)
    text = "SCHILD FAMILY ARCHIVE"
    spaced = " ".join(list(text))
    x, y = MARGIN, H - MARGIN - 6
    # small shield glyph: a simple drawn shield shape, not the photographic crest
    sx, sy = x, y - 22
    draw.polygon(
        [(sx, sy), (sx + 22, sy), (sx + 22, sy + 14), (sx + 11, sy + 28), (sx, sy + 14)],
        outline=color, width=2,
    )
    draw.line([(sx + 11, sy), (sx + 11, sy + 20)], fill=color, width=1)
    draw.text((x + 34, y - 20), spaced, font=f, fill=color)


def fit_cover(im, target_w, target_h):
    """Crop-to-fill (center crop) an image to an exact target size."""
    src_w, src_h = im.size
    src_ratio = src_w / src_h
    tgt_ratio = target_w / target_h
    if src_ratio > tgt_ratio:
        new_h = src_h
        new_w = int(src_h * tgt_ratio)
    else:
        new_w = src_w
        new_h = int(src_w / tgt_ratio)
    left = (src_w - new_w) // 2
    top = (src_h - new_h) // 2
    im = im.crop((left, top, left + new_w, top + new_h))
    return im.resize((target_w, target_h), Image.LANCZOS)


def full_bleed_card(bg_path, title, location, period, out_name, alt_note=None, focus="center"):
    """Full-bleed real photo + bottom gradient + text in the safe zone."""
    src = Image.open(bg_path).convert("RGB")
    bg = fit_cover(src, W, H)

    # gentle overall darken + strong bottom gradient so text is always legible
    overlay = Image.new("L", (W, H), 0)
    grad = ImageDraw.Draw(overlay)
    for y in range(H):
        # darken more toward the bottom third; keep the top readable/clean
        t = max(0, (y - H * 0.35) / (H * 0.65))
        alpha = int(190 * (t ** 1.4))
        grad.line([(0, y), (W, y)], fill=alpha)
    dark = Image.new("RGB", (W, H), CHARCOAL)
    bg = Image.composite(dark, bg, overlay)
    # slight overall contrast/darken so a bright photo never washes out white text
    bg = ImageOps.autocontrast(bg, cutoff=1)
    flat = Image.new("RGB", (W, H), (0, 0, 0))
    bg = Image.blend(bg, flat, 0.12)

    draw = ImageDraw.Draw(bg)

    y = H - MARGIN - 8
    # wordmark first (bottom-most), then build upward
    draw_wordmark(bg, draw, dark_bg=True)
    y -= 56

    f_loc = font(SANS, 26)
    loc_text = f"{location}  ·  {period}" if period else location
    draw.text((MARGIN, y), loc_text, font=f_loc, fill=CREAM_SOFT)
    y -= 12

    f_title = font(SERIF_BOLD, 56)
    max_text_w = W - 2 * MARGIN
    lines = wrap_text(draw, title, f_title, max_text_w)[:3]
    line_h = 64
    title_block_h = line_h * len(lines)
    y_title = y - title_block_h
    for i, line in enumerate(lines):
        draw.text((MARGIN, y_title + i * line_h), line, font=f_title, fill=CREAM)

    bg.save(os.path.join(OUT_DIR, out_name), "JPEG", quality=90)
    print("wrote", out_name, bg.size)


def split_panel_card(photo_path, title, location, period, out_name, panel_side="right"):
    """Portrait photo letterboxed in its own contained panel; text on the other side."""
    canvas = Image.new("RGB", (W, H), CHARCOAL)
    draw = ImageDraw.Draw(canvas)

    panel_w = 460
    if panel_side == "right":
        photo_box = (W - panel_w, 0, W, H)
        text_x0, text_x1 = MARGIN, W - panel_w - 50
    else:
        photo_box = (0, 0, panel_w, H)
        text_x0, text_x1 = panel_w + 50, W - MARGIN

    # contained (not cropped) photo, centered in its panel with generous padding
    pad = 46
    box_w = panel_w - 2 * pad
    box_h = H - 2 * pad
    photo = Image.open(photo_path).convert("RGB")
    photo = ImageOps.contain(photo, (box_w, box_h), Image.LANCZOS)
    px = photo_box[0] + pad + (box_w - photo.width) // 2
    py = pad + (box_h - photo.height) // 2

    # subtle raised frame behind the photo, matching .h-place-map's card treatment
    frame_pad = 14
    draw.rectangle(
        [px - frame_pad, py - frame_pad, px + photo.width + frame_pad, py + photo.height + frame_pad],
        fill=CHARCOAL_SOFT, outline=(BRASS_ON_DARK), width=2,
    )
    canvas.paste(photo, (px, py))

    # text side
    y = H - MARGIN - 8
    draw_wordmark(canvas, draw, dark_bg=True)
    y -= 56

    f_loc = font(SANS, 24)
    loc_text = f"{location}  ·  {period}" if period else location
    lines_loc = wrap_text(draw, loc_text, f_loc, text_x1 - text_x0)
    for line in reversed(lines_loc):
        draw.text((text_x0, y), line, font=f_loc, fill=CREAM_SOFT)
        y -= 32
    y -= 6

    f_title = font(SERIF_BOLD, 46)
    lines = wrap_text(draw, title, f_title, text_x1 - text_x0)[:4]
    line_h = 54
    title_block_h = line_h * len(lines)
    y_title = y - title_block_h
    for i, line in enumerate(lines):
        draw.text((text_x0, y_title + i * line_h), line, font=f_title, fill=CREAM)

    canvas.save(os.path.join(OUT_DIR, out_name), "JPEG", quality=90)
    print("wrote", out_name, canvas.size)


def designed_card(title, location, period, out_name, eyebrow="WIDER SCHILD STORY"):
    """Photo-free archival card: charcoal ground, brass rule, restrained motif."""
    canvas = Image.new("RGB", (W, H), CHARCOAL)
    draw = ImageDraw.Draw(canvas)

    # restrained background texture: a few faint concentric brass arcs, off to one side
    # (evokes an archival document seal without being a literal photo or the shield)
    for r in range(60, 620, 60):
        bbox = [W - 120 - r, H // 2 - r, W - 120 + r, H // 2 + r]
        draw.arc(bbox, 0, 360, fill=(38, 33, 26), width=2)

    # top brass rule
    draw.rectangle([MARGIN, 78, MARGIN + 64, 82], fill=BRASS_ON_DARK)

    y = 100
    y = draw_eyebrow(draw, MARGIN, y, eyebrow)
    y += 18

    f_title = font(SERIF_BOLD, 58)
    max_text_w = W - 2 * MARGIN - 80
    lines = wrap_text(draw, title, f_title, max_text_w)[:3]
    line_h = 66
    for i, line in enumerate(lines):
        draw.text((MARGIN, y + i * line_h), line, font=f_title, fill=CREAM)
    y += line_h * len(lines) + 26

    f_loc = font(SANS, 27)
    loc_text = f"{location}  ·  {period}" if period else location
    draw.text((MARGIN, y), loc_text, font=f_loc, fill=CREAM_SOFT)

    draw_wordmark(canvas, draw, dark_bg=True)
    canvas.save(os.path.join(OUT_DIR, out_name), "JPEG", quality=90)
    print("wrote", out_name, canvas.size)


def default_card(out_name):
    """Generic sitewide fallback: crest shown small & contained, never cropped."""
    canvas = Image.new("RGB", (W, H), CHARCOAL)
    draw = ImageDraw.Draw(canvas)

    # crest, letterboxed small in its own panel on the left — identity accent, not hero art
    crest_path = os.path.join(ASSETS, "crest-house-of-schild.jpg")
    crest = Image.open(crest_path).convert("RGB")
    box_h = 420
    box_w = int(box_h * crest.width / crest.height)
    crest = crest.resize((box_w, box_h), Image.LANCZOS)
    px, py = 110, (H - box_h) // 2
    frame_pad = 16
    draw.rectangle(
        [px - frame_pad, py - frame_pad, px + box_w + frame_pad, py + box_h + frame_pad],
        fill=CHARCOAL_SOFT, outline=BRASS_ON_DARK, width=2,
    )
    canvas.paste(crest, (px, py))

    text_x0 = px + box_w + frame_pad + 70
    text_x1 = W - MARGIN

    y = 220
    f_title = font(SERIF_BOLD, 52)
    lines = wrap_text(draw, "The Schild Family Archive", f_title, text_x1 - text_x0)
    line_h = 60
    for i, line in enumerate(lines):
        draw.text((text_x0, y + i * line_h), line, font=f_title, fill=CREAM)
    y += line_h * len(lines) + 22

    f_sub = font(SERIF, 27)
    sub_lines = wrap_text(draw, "A home for the Schild family's history, starting with the name itself.", f_sub, text_x1 - text_x0)
    for line in sub_lines:
        draw.text((text_x0, y), line, font=f_sub, fill=CREAM_SOFT)
        y += 36

    draw_wordmark(canvas, draw, dark_bg=True)
    canvas.save(os.path.join(OUT_DIR, out_name), "JPEG", quality=90)
    print("wrote", out_name, canvas.size)


if __name__ == "__main__":
    A = lambda name: os.path.join(ASSETS, name)

    # --- generic sitewide default ---
    default_card("social-default-schild-archive.jpg")

    # --- 5 story cards ---
    full_bleed_card(
        A("history-adathisrael-building.jpg"),
        "From Dachau to a Life of Reconciliation",
        "Cologne, Germany & Toronto, Canada", "1920–2024",
        "social-erwin-schild-story.jpg",
    )
    full_bleed_card(
        A("history-barossa-aerial.jpg"),
        "From One Vineyard to the Barossa",
        "Barossa Valley, South Australia", "Est. 1952",
        "social-schildestatebarossa-story.jpg",
    )
    split_panel_card(
        A("history-eterna-pocketwatch.jpg"),
        "The Schilds Who Helped Build Swiss Time",
        "Grenchen, Switzerland", "Est. 1856",
        "social-schildsswisstime-story.jpg",
    )
    designed_card(
        "From Texas to the Liberandos",
        "376th Bombardment Group · Mediterranean & Europe", "World War II",
        "social-liberandos-story.jpg",
    )
    designed_card(
        "The Schilds of Early Fredericksburg",
        "Fredericksburg & Grapetown, Texas", "1850s–1860s",
        "social-fredericksburg-story.jpg",
    )
    designed_card(
        "Born to Race",
        "Houston, Texas", "1950s–Present",
        "social-born-to-race-story.jpg",
    )

    # --- place-specific cards (places with their own dedicated real photo) ---
    full_bleed_card(A("history-cologne-muelheim.jpg"), "Cologne Mülheim", "Rhine Province, Germany", "Birthplace, 1920", "social-place-cologne-muelheim.jpg")
    full_bleed_card(A("history-wurzburg-town.jpg"), "Würzburg", "Bavaria, Germany", None, "social-place-wurzburg.jpg")
    full_bleed_card(A("history-dachau-memorial.jpg"), "Dachau", "Bavaria, Germany", "November–December 1938", "social-place-dachau.jpg")
    full_bleed_card(A("history-adathisrael-building.jpg"), "Adath Israel Congregation", "Toronto, Ontario", "1947–1989", "social-place-adath-israel.jpg")
    full_bleed_card(A("history-grenchen-1870s.jpg"), "Grenchen, Switzerland", "Watchmaking town", "Est. 1856", "social-place-grenchen.jpg")
    full_bleed_card(A("history-barossa-aerial.jpg"), "Barossa Valley, South Australia", "Wine region", "Est. 1952", "social-place-barossa-valley.jpg")
    full_bleed_card(A("history-rowlandflat-historic.jpg"), "Rowland Flat, South Australia", "Barossa Valley township", None, "social-place-rowland-flat.jpg")
    full_bleed_card(A("history-barossa-oldvine.jpg"), "Moorooroo", "Barossa Valley, South Australia", "Vines planted 1847", "social-place-moorooroo.jpg")

    print("\nAll cards generated.")
