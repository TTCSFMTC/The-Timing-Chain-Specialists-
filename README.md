# The Timing Chain Specialists — static site mirror

A static, offline-editable copy of [fixmytimingchain.co.uk](https://fixmytimingchain.co.uk),
crawled on 2026-08-29 for manual editing.

## Structure

Files are organised by origin host, matching how the live site serves them:

- `fixmytimingchain.co.uk/` — every page (HTML), one folder per URL path, each with an `index.html`
- `cdn-ileofhm.nitrocdn.com/` — CSS, JS, fonts and images served via the site's Nitro caching CDN
- `fonts.gstatic.com/` — Google Fonts font files

All `<link>`/`<script>`/`<img>` references in the HTML and CSS have been rewritten to relative
paths pointing at these local files, so the site works fully offline.

## Viewing it locally

```
npx http-server -p 8080
```

Then open `http://localhost:8080/fixmytimingchain.co.uk/` (the site's own homepage isn't at
the mirror's root, since assets from the other two domains live alongside it).

## Known limitations (this is a static snapshot, not the live WordPress site)

- **Contact form, booking, and payment flows** won't submit anywhere — they posted to the live
  WordPress/WooCommerce backend, which isn't part of this mirror.
- **Google Maps embed** won't load (needs a live API key + network access).
- **The homepage's "News and Blogs" carousel** appears empty — on the live site it's populated
  by a JS call to the WordPress REST API at load time. The actual blog posts were still crawled
  and are present at their own URLs (e.g. `fixmytimingchain.co.uk/blog-1/`).
- A handful (6 of ~257) of referenced asset files 404'd on the live site during the crawl and
  are simply missing here — mostly unused jQuery-UI icon variants that aren't visible anywhere.
- This is a point-in-time copy — it will not reflect future changes made to the live site.
