# Sanity Studio — The Longest Round

Schema definitions for the four collections both `app.html` and `index.html`
already expect: `routeStop`, `guestRider`, `ritual`, `dailyEntry`.

## Set up the Studio

From this `sanity/` folder:

```bash
npm create sanity@latest -- --template clean --create-project "The Longest Round" --dataset production
```

When it asks whether to overwrite existing files, keep `schemaTypes/` and
`sanity.config.js` from this repo — they're already written to match what the
app and site expect. Then:

```bash
npm install
npm run dev
```

That opens Studio locally. Once you're happy with it, `npm run deploy`
publishes it to `<your-project>.sanity.studio` so it's editable from
anywhere, not just this machine.

## After creating the project

You'll get a **Project ID** from the CLI output (or from sanity.io/manage).
Two things need it:

1. `sanity.config.js` in this folder — replace `YOUR_PROJECT_ID`.
2. The `SANITY_PROJECT_ID` constant near the top of both `app.html` and
   `index.html` at the repo root — same replacement, so the pages start
   querying real data instead of falling back to the sample set.

## CORS

Sanity blocks browser requests from origins it doesn't recognize. In
sanity.io/manage → your project → API → CORS Origins, add:

- Your Vercel domain (e.g. `https://the-longest-round.vercel.app`)
- `http://localhost:3000` (or whatever you use for local testing)

Read-only queries are safe to open broadly since nothing on these pages
writes back to Sanity — "Allow all origins" is a reasonable default to start
with if you don't want to keep re-adding preview URLs.

## Populating content

Once Studio's open, create a `routeStop` for each of the ten stops, a
`ritual` for each checklist item, a `guestRider` per guest, and a
`dailyEntry` per day — the field names match the sample data already in both
HTML files 1:1, so copying values across is mechanical.
