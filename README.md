# Ritz Floor & Decor — website

A one-page website for **Ritz Floor & Decor**, a flooring and tile showroom with
two locations, in Chilliwack and Hope, BC. It is built with [Astro](https://astro.build),
which turns the files in `src/` into a plain, fast HTML page.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 18.20 or newer) installed.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321 in your browser. The page reloads when you save a file.

To make the final version that goes online: `npm run build` (output goes to `dist/`).

## Where to change things

| What you want to change | File |
| --- | --- |
| Text, phone numbers, showroom addresses, flooring cards, reviews, photos | `src/data/site.js` |
| Colours, fonts, sizes, spacing | `src/styles/global.css` (colours are at the top) |
| Page layout / sections | `src/pages/index.astro` |

Most edits only need `src/data/site.js`.

## Put it online (Vercel)

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project** and pick this repository.
3. Vercel detects **Astro** automatically. Keep the default settings and click **Deploy**.
4. Every time you push to the `main` branch, Vercel updates the live site.

## Hook up the quote form

The form currently only shows a thank-you message; it does not send anything yet.

1. Create a free form at https://formspree.io and copy its URL (looks like `https://formspree.io/f/abcdwxyz`).
2. Paste it into `formEndpoint` in `src/data/site.js`.
3. Commit and push. Quote requests now arrive in your email.

## Open items before launch

- **Photos are free Unsplash placeholders**, hot-linked from `images.unsplash.com`.
  Swap in real showroom and install photos: put them in `public/images/` and
  change the links in `src/data/site.js` to `/images/your-file.jpg`.
- **Review names**: both reviews are credited to "Ritz customer". Confirm names
  (or permission to use them) with the client.
- **Quote form** needs a Formspree URL (see above).
- **Domain**: set the real website address in `astro.config.mjs`
  (it is `https://example.com` for now).

## Undo a change

Every change is saved as a "commit" in git, so nothing is lost.

- See the history: `git log --oneline`
- Undo one commit (makes a new commit that reverses it, safe to push):

```bash
git revert <commit-id>
```
