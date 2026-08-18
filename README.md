# The Longest Round

Live tracker and public site for Darren Barker's 1,800-mile cycling and open-water
swimming challenge for men's mental health, in partnership with The Ricky Hatton
Foundation and CALM.

## What's here

- **`index.html`** — the public website: hero countdown, a real projected route map
  (built from each stop's lat/lng), latest update, progress, guest riders, and a full
  daily archive.
- **`app.html`** — the companion app concept (phone-frame prototype): today's stats,
  Sisu ritual streak, insights, and per-guest-rider overviews via a rider switcher.

Both are fully self-contained static HTML files (fonts inlined, no build step) and
deploy as-is to Vercel or any static host.

## Data model

Both pages currently read from four hardcoded JS arrays that mirror an intended
Sanity schema:

- `guestRider` — one document per guest, referenced by id everywhere their name appears
- `routeStop` — name, type (`stop`/`swim`), order, arrival time, lat/lng
- `ritual` — the daily Sisu ritual checklist, editable as a list
- `dailyEntry` — the root record: cycling/swimming miles, recovery, sleep, rituals
  completed, riding-today guest, journal text + photo, and an `insightOverride` a human
  (or an AI job watching the same data) can write into directly

**Not yet wired to a live Sanity dataset.** The two files currently hold their own
copies of the same data for self-containment; connecting both to one real Sanity
project is the next step, so an edit in Sanity Studio updates the app and the site
without duplicating entry.

## Status

Sample/demo data throughout — clearly marked as such in both pages' footers.
