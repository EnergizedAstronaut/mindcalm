# MindCalm — Psychology, ASMR & Ambient Music

MindCalm is a calm-focused web app that combines **ambient music, psychology learning, ASMR creators, and structured mental wellness routines** in one place.

The experience is organized around **Jane**, a fictional guide who connects the music, psychology, and routines into a cohesive personal growth program.

The app is built with **React + Vite** for fast performance, simple state management, and clean UI rendering.

---

# Features

## 🎧 Ambient Music Library

A curated **50-track ambient playlist** from the *i still miss her* YouTube channel.

Each track card includes:

* YouTube thumbnail
* Track title
* Duration
* View and like counts
* Direct link to the video
* Built-in audio player (optional)

Tracks can be filtered by theme and duration.

Available filters:

* All tracks
* Under 30 minutes
* 1 hour+
* Memory
* Sleep
* Dream
* Safe & Rest

---

## 🔎 Global Search

A persistent search bar allows users to **search the entire app instantly**.

Search works across:

* music titles
* creators
* psychology topics
* routine themes

Results update in real time as you type.

---

## 🧠 Psychology Program

Jane includes a structured learning path built around core psychology concepts.

Topics include:

* Emotional awareness
* Cognitive Behavioral Therapy (CBT)
* Confidence building
* Social psychology
* Relationships and attachment

The program combines reading, reflection, and music listening.

---

## 📅 Daily Programs

### 7-Day Program

A short introduction to the Jane method.

Each day includes:

* a psychology topic
* a recommended ambient track
* a reflection prompt

### 30-Day Program

A full month-long self-development path.

Weekly themes:

1. Emotional Awareness
2. Social Confidence
3. Relationships
4. Authentic Confidence

---

## 🎙️ ASMR Creator Guide

MindCalm includes a curated list of influential ASMR creators:

* WhispersRed (Emma Smith)
* TheWaterwhispers (Ilse Blansert)
* FredsVoice
* Scottish Murmurs
* Be Calm With Becca
* Creative Calm ASMR
* ASMRMagic
* and more

Each creator represents a different relaxation style.

---

# Tech Stack

| Layer      | Technology            |
| ---------- | --------------------- |
| Framework  | React                 |
| Build Tool | Vite                  |
| Language   | JavaScript            |
| Styling    | CSS                   |
| Fonts      | Google Fonts          |
| Media      | YouTube thumbnail CDN |
| Deployment | Vercel                |

---

# Project Structure

```
mindcalm/
│
├── index.html
├── package.json
├── vite.config.js
│
└── src/
    ├── main.jsx
    ├── App.jsx
    │
    ├── components/
    │   ├── SearchBar.jsx
    │   ├── FilterBar.jsx
    │   └── MusicGrid.jsx
    │
    ├── data/
    │   └── tracks.js
    │
    └── styles.css
```

---

# Running Locally

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Open:

```
http://localhost:5173
```

---

# Building for Production

```
npm run build
```

The production build will be created in:

```
/dist
```

---

# Deploying

MindCalm is designed to deploy easily to **Vercel**.

1. Push the repository to GitHub
2. Import the repo in Vercel
3. Vercel automatically detects **Vite**

Build settings:

```
Build command: npm run build
Output directory: dist
```

Deployment takes about 10–20 seconds.

---

# Updating the Music Library

Track data lives in:

```
src/data/tracks.js
```

Example track object:

```
{
  id: 1,
  title: "Deep Sleep",
  artist: "i still miss her",
  mood: "sleep",
  url: "https://www.youtube.com/watch?v=VIDEO_ID",
  thumb: "https://i.ytimg.com/vi/VIDEO_ID/sddefault.jpg",
  duration: "20:00"
}
```

Add new tracks to the array and the UI will update automatically.

---

# Philosophy

MindCalm is designed around three ideas:

* **Calm environments improve focus and emotional clarity**
* **Psychology should be accessible and practical**
* **Routines build long-term mental resilience**

Jane exists to connect these ideas into a single, simple interface.

---

# License

Personal and educational use.

Music is linked from YouTube.
All rights belong to the original creators.
