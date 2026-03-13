# Jane — Psychology, ASMR & Music for the Soul

A single-page web app combining:
- **50-track ambient music playlist** from the *i still miss her* YouTube channel
- **Psychology program** (emotional awareness, CBT, confidence, social psychology)
- **ASMR guide** (WhispersRed, TheWaterwhispers, FredsVoice and more)
- **Daily routine** — 7-day and 30-day structured programs
- **Global search** — search everything live across music, creators, routines, and content
- **Jane** — the persona tying it all together

Built as a zero-dependency Node.js app for instant Railway deployment.

---

## File Structure

```
jane/
├── server.js        # Node.js HTTP server (no npm deps)
├── package.json     # name + start script only
├── railway.json     # Railway build config
├── README.md        # this file
└── public/
    └── index.html   # entire frontend (vanilla HTML/CSS/JS)
```

---

## Deploy to Railway (3 steps)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "jane — initial deploy"
gh repo create jane --public --push
```

Or push manually via GitHub Desktop / the GitHub website.

### 2. Create Railway Project

- Go to [railway.app](https://railway.app)
- Click **New Project → Deploy from GitHub repo**
- Select your `jane` repo
- Railway auto-detects Node.js via Nixpacks and deploys automatically

### 3. Get Your Live URL

- In Railway dashboard → your project → **Settings → Networking → Generate Domain**
- Your app is live at the generated URL

---

## Run Locally

```bash
node server.js
```

Then open http://localhost:3000

No `npm install` needed — zero dependencies.

---

## Stack

| Layer | Tech |
|-------|------|
| Backend | Node.js built-in `http` module |
| Frontend | Vanilla HTML / CSS / JavaScript |
| Fonts | Google Fonts (Playfair Display, DM Mono) |
| Thumbnails | YouTube image CDN (i.ytimg.com) |
| Deploy | Railway (Nixpacks, auto Node.js detection) |
| Dependencies | None |

---

## Features

### Global Search
Fixed search bar at the top of every page. Type anything — track titles, creator names, psychology topics, day themes — and the page filters live. Music grid updates in real time. Results are highlighted in amber. Clear button resets everything.

### Music Section — i still miss her
- All 50 tracks with thumbnails, view counts, like counts, and durations
- Top 5 most-listened tracks featured prominently
- Filter buttons: All / Under 30 min / 1 hour+ / Memory / Sleep / Dream / Safe & Rest
- Each card links directly to YouTube

### Jane's Program
- Daily routine — 5 touchpoints from morning psychology to night ambient music
- 7-day programme — day-by-day sessions with specific track recommendations
- 30-day programme — four themed weeks (Emotional Awareness > Social Confidence > Relationships > Authentic Confidence)

### Creators
WhispersRed (Emma Smith), TheWaterwhispers (Ilse Blansert), FredsVoice, Scottish Murmurs, Be Calm With Becca, Creative Calm ASMR, ASMRMagic, The School of Life, Ali Abdaal, and more.

### Free Psychology PDFs
Links to open-access papers and textbooks: PubMed Central, MIT OpenCourseWare, PsyArXiv, and more.

---

## Environment Variables

| Variable | Default | Notes |
|----------|---------|-------|
| PORT | 3000 | Railway sets this automatically |

---

## Updating Content

All content lives in /public/index.html. The 50-track data array starts at the comment
`// -- ALL 50 TRACKS --` near the bottom of the file.

To add a track, append an object to the array:

```js
{
  title: "track title here",
  url: "https://www.youtube.com/watch?v=VIDEO_ID",
  thumb: "https://i.ytimg.com/vi/VIDEO_ID/sddefault.jpg",
  views: 12345,
  likes: 678,
  dur: "20:00",
  secs: 1200
}
```

---

## License

Personal use. Music content linked from YouTube — all rights belong to original creators.
