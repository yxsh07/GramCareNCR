<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/10DhkyNii_y3n2gLMkd-awaUDQf_SoN-0

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Dev notes — image fix & troubleshooting

- Problem: Some images (notably the Home hero image) were appearing broken because the project included truncated/invalid base64 data URIs in `assets/images.ts`.
- Fix applied: a safe placeholder SVG was added at `public/images/hero.svg` and `pages/HomePage.tsx` was updated to use `/images/hero.svg`. Serving the image from `public/` ensures Vite serves it as a normal static asset.
- How to verify:
   1. Start the dev server: `npm run dev` (Vite may pick a different port if 3000/3001 are in use). The server will print the actual local URL (for example `http://localhost:3002/`).
   2. Open the printed URL in the browser and navigate to the Home page. You should see the hero illustration instead of a broken image icon.
   3. If ports are in use, stop the occupying process or set `PORT=3000` before running: `PORT=3000 npm run dev` (bash).

- Next steps (optional):
   - Replace `public/images/hero.svg` with a real JPEG/PNG at `public/images/hero.jpg` and update `pages/HomePage.tsx` accordingly, or import images from `assets/` so Vite bundles them.
   - Remove unused base64 placeholders from `assets/images.ts` or replace them with valid base64 strings if you want to keep that approach.
