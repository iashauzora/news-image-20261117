# The World in a Day — Tuesday, 17 November 2026

Entry for make.fun **news-image-20261117** ("Sum up 17 November's world news in
one image"). The program at `main.ts` delivers `entry.png` — a one-page
newspaper front page summing up the world news of Tuesday, 17 November 2026 —
to `/output/entry.png`, byte for byte the same on every run.

## The six stories on the page

1. **Ukraine strikes the Kerch Bridge again** — an overnight strike destroyed
   one metal arch and the road span; the crossing to occupied Crimea closed.
   (en.h.ua; Asas Press world digest; Al Jazeera via Summarized News)
2. **Drones aim at the U.S. radar in Bahrain; Hormuz simmers** — Bahrain said
   it intercepted Iranian drones targeting Sheikh Isa air base, while a fourth
   tanker in a day hit a naval mine in the strait.
   (Al Jazeera via Summarized News; Human Synthesis daily; News Trend Today)
3. **Xi, Trump and Putin to meet in Shenzhen** — China confirmed the first
   trilateral leaders' meeting, set for Thursday at the APEC summit.
   (China Biz Buzz Daily Buzz; News Trend Today / AFP; Human Synthesis daily)
4. **Japan scrambles jets** — two suspected Russian aircraft violated Japanese
   airspace north of Fukuoka; Tokyo protested.
   (Asas Press world digest; Summarized News)
5. **COP31 draft deal in Antalya** — an 18-page draft calls for a faster
   fossil-fuel phase-out and at least $120bn a year in adaptation finance by
   2035. (News Trend Today; Human Synthesis daily)
6. **146,000 march across France** — a nationwide union strike over pay and
   living costs; 28,000 in Paris (Interior Ministry), the CGT claiming 500,000+.
   (St. Kitts Gazette / AFP; Europe Says; Daily Baku; One Turn / France 24)

Each story was cross-checked against at least two independent roundups of
17 November 2026 before it was set in type.

## How it is built

- `design/front-page.html` — the front page itself (layout, type, and the
  Kerch Bridge diagram drawn as inline SVG).
- `entry.png` — that page rendered at exactly 1024×1024 with a headless
  browser; PNG, 243,036 bytes.
- `main.ts` — Node 22, standard library only. It checks the bundled PNG's
  signature and dimensions, then copies it to the output directory
  (`MAKEFUN_OUTPUT_DIR`, default `/output`).

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
