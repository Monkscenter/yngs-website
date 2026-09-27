# YNGS — Yash Niteshkumar Ghadiya Springs

A Next.js + Tailwind CSS website for YNGS, a natural spring and local attraction near Balmertown, Ontario.

## 1. Project structure

```
yngs-website/
├── app/
│   ├── layout.tsx        Fonts, SEO metadata, Open Graph tags, JSON-LD structured data
│   ├── page.tsx          Assembles all sections in order
│   └── globals.css       Base styles, focus states, reduced-motion support
├── components/
│   ├── Navbar.tsx        Sticky nav + mobile menu + "Get Directions"
│   ├── Hero.tsx           Home section
│   ├── About.tsx          "Discover YNGS" section
│   ├── Story.tsx          "The Story Behind YNGS" section
│   ├── LocalAttraction.tsx "A Small Place Worth Discovering" + 3 cards
│   ├── Visit.tsx / LocationCard.tsx   "Find YNGS" section + map card
│   ├── WaterInfo.tsx      "About the Water" section
│   ├── Disclaimer.tsx     Full water safety disclaimer (highly visible)
│   ├── Gallery.tsx        "Experience YNGS" labeled photo placeholders
│   ├── Share.tsx          "Share the Discovery" (copy link, Web Share, socials)
│   ├── Footer.tsx
│   ├── Button.tsx / Section.tsx / Logo.tsx / Reveal.tsx   Shared building blocks
├── lib/
│   └── site-config.ts    Single place holding the site name, location, and Maps link
├── public/
│   ├── favicon.svg
│   └── og-placeholder.svg
├── tailwind.config.js     Color palette, type scale, animation tokens
└── package.json
```

## 2. How to run it locally

Requires Node.js 18.18 or newer.

```bash
cd yngs-website
npm install
npm run dev
```

Then open `http://localhost:3000`. The site hot-reloads as you edit files.

To build for production and check for errors:

```bash
npm run build
npm run start
```

## 3. How to replace the photos

The `Gallery.tsx` component and the hero background are currently placeholders — **no real photos of YNGS were provided**, and the brief was explicit that stock or fabricated photos should not be presented as real photos of the spring.

To add real photos:

1. Drop your image files into `public/photos/` (create the folder).
2. In `components/Gallery.tsx`, replace each placeholder `<div>` in the `slots` array with a real image, e.g.:
   ```tsx
   import Image from "next/image";
   // ...
   <Image src="/photos/spring-flow.jpg" alt="Water flowing from the YNGS spring" width={600} height={600} className="aspect-square object-cover" />
   ```
3. For the hero background in `components/Hero.tsx`, swap the `<svg>` ripple graphic for an `<Image fill>` covering the section once you have a real landscape photo.
4. Replace `public/og-placeholder.svg` with a real 1200×630 **JPG or PNG** photo for social sharing — most platforms (Facebook, X, WhatsApp) don't render SVGs as link previews, so this one specifically should not stay an SVG.
5. Always write accurate, specific `alt` text describing what's actually in each photo.

## 4. How to change text

Almost all copy lives directly inside the matching component file (e.g., edit the disclaimer wording in `components/Disclaimer.tsx`). A few values are centralized in `lib/site-config.ts`:

- `name`, `fullName`, `shortDescription`
- `location`
- `mapsUrl` — the Google Maps link used by every "Get Directions" / "Open in Google Maps" button and in the structured data
- `siteUrl` — used for SEO metadata; update before launch to the real domain

## 5. How to deploy it

The project is a standard Next.js app, so any Next.js-compatible host works. The simplest options:

**Vercel (recommended, made by the Next.js team):**
1. Push this project to a GitHub/GitLab repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Next.js; click Deploy.
4. Add your custom domain under Project → Settings → Domains.

**Netlify:** import the repo, set build command `npm run build` and use the official Next.js runtime plugin (Netlify adds this automatically for Next.js projects).

**Self-hosted / any Node server:** run `npm run build` then `npm run start` behind a reverse proxy (e.g., Nginx) on a VPS.

## 6. Any API keys required

**None are required to run the site as built.** The location section uses a styled card + link rather than a live embedded map, so no Google Maps API key is needed.

Optional upgrade: if you'd prefer a live, interactive embedded map instead of the styled card, you'd need a **Google Maps Embed API key** (Google Cloud Console → enable "Maps Embed API" → restrict the key to your domain) and would swap the placeholder `<div>` in `components/LocationCard.tsx` for an `<iframe src="https://www.google.com/maps/embed/v1/place?key=YOUR_KEY&q=...">`.

## 7. Legal / content considerations to review before publishing

- **Naming a natural feature after a person.** YNGS is an informal name chosen by the site's creators, not an official geographic designation. Consider whether you want the site to say this more explicitly (it currently does, in "The Story Behind YNGS"), and be aware that Natural Resources Canada / the Canadian Permanent Committee on Geographical Names controls *official* place names — this site does not claim or imply official government recognition.
- **Water safety liability.** The disclaimer is written to be clear and prominent, as requested, but it is not a substitute for legal review. Have a lawyer confirm the disclaimer language is adequate for Ontario, especially given that the site knowingly discusses people drinking untested water.
- **Land ownership and access.** The brief didn't specify who owns the land the spring is on or whether there's any right of access. Confirm this before encouraging visits — the site currently makes no claims about parking, trail access, or permission to access the land, and none should be added until verified.
- **Privacy for "visitors enjoying the location" photos.** The gallery placeholder for visitor photos notes "with permission" per the brief — make sure any real photos of identifiable people have documented consent before publishing.
- **Trademark/name conflicts.** A quick search to confirm "YNGS" doesn't conflict with an existing registered trademark or business name is worth doing before wide promotion.
- **Accessibility and privacy policy.** If this site will collect any data in future (e.g., a contact form), you'll need a privacy policy; none is included since no data collection exists yet.
