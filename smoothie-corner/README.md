# Smoothie Corner

A static, animated marketing site for **Smoothie Corner** — *Eat Healthy, Be Healthy*.
Built with React + TypeScript + Vite, Tailwind CSS, GSAP/ScrollTrigger, Lenis smooth
scroll, and React Three Fiber for the 3D hero + ingredient sections. No backend,
no database, no paid services — it builds down to static files you can host
on GitHub Pages (or any static host).

---

## ⚠️ Before you publish this: check the product photos

Only 4 photos were supplied for this build, and their file signatures (exactly
736px wide, no camera EXIF metadata) match images downloaded from Pinterest —
not phone photos of your own products. They were used as **placeholders** so
the layout could be built:

| Photo | Currently mapped to |
|---|---|
| Purple/pink berry bowl | `Blueberry Blast` |
| Chocolate + peanut butter swirl bowl | `Choco PB Crunch` |
| Mango & kiwi tropical bowl | `Mango Paradise` |
| Deep-blue blackberry bowl | Generic brand/decorative image only (not tied to a specific menu item, since its ingredients don't match any product) |

**Before this goes live, swap all four for real photos of your own products** —
both to avoid a possible copyright issue (these were very likely someone
else's food photography) and so customers see what they'll actually receive.
`Strawberry Blast`, `Banana Blast`, `Strawberry Chia`, `Berry Chia`, and
`Banana Bread` have no photo at all right now and show a clean "Photo coming
soon" card instead — see **Adding/changing product photos** below for how to
drop in real ones.

One more data note: the source menu listed identical ingredients (Oats,
Yogurt, Banana, Peanut Butter, Granola, Mix Seeds, Honey) for both
`Banana Blast` and `Mango Paradise`. That's preserved exactly as supplied
rather than silently corrected — you may want to double check that's not a
typo in your original menu.

---

## 1. Project structure

```
smoothie-corner/
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages
├── public/
│   └── assets/
│       ├── products/              # real product photos live here
│       ├── brand/                 # decorative brand imagery
│       └── icons/                 # favicon
├── src/
│   ├── components/
│   │   ├── 3d/                    # HeroScene, IngredientOrbit (React Three Fiber)
│   │   ├── navigation/            # Navbar, MobileMenu, ScrollToTop
│   │   ├── sections/              # Hero, Featured, Ingredients, Combos, Contact...
│   │   └── ui/                    # ProductCard, ProductModal, WhatsAppButton...
│   ├── data/menu-data.ts          # ⭐ single source of truth for all menu content
│   ├── hooks/                     # useLenis, useReducedMotion
│   ├── lib/business.ts            # phone/email/WhatsApp helpers
│   ├── pages/                     # Home, Menu, Products, Contact, Admin
│   ├── types/menu.ts              # MenuItem / Ingredient types
│   ├── App.tsx                    # routing + layout shell
│   └── main.tsx                   # entry point
├── index.html                     # SEO meta, OG tags, structured data
├── tailwind.config.js             # brand colours, fonts, animations
└── vite.config.ts                 # base: './' for portable GitHub Pages builds
```

## 2. Run it locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 3. How to edit the menu

Everything — prices, calories, protein, ingredients, availability, featured
status — lives in **`src/data/menu-data.ts`**. Nothing else needs to change.
Two ways to edit it:

**A. Edit the file directly** (fastest if you're comfortable with code): open
`src/data/menu-data.ts` and change values in the relevant object.

**B. Use the visual editor at `/admin`** (no code needed):
1. Run the site (`npm run dev`) and go to `/#/admin`.
2. Add/edit/delete products with the form UI.
3. Click **Save** to keep your edits in that browser (uses `localStorage`).
4. Click **Export Updated Menu** to download `menu-data.export.ts`.
5. Open the download, copy its contents, and paste them over the `menuData`
   object in `src/data/menu-data.ts`.
6. Run `npm run build` and redeploy.

## 4. Adding/changing product photos

1. Save the photo as `.webp` (compress it first — aim under ~200KB).
2. Drop it in `public/assets/products/your-file-name.webp`.
3. In `src/data/menu-data.ts`, set that product's `image` field to
   `"assets/products/your-file-name.webp"` (**no leading slash** — the site
   prefixes it automatically so it works at any GitHub Pages URL).
4. Leave `image: null` for any product without a confirmed real photo — the
   UI shows a clean gradient placeholder instead of a fake image.

## 5. How to add a new product

Add a new object to the relevant category array in `src/data/menu-data.ts`
(copy an existing item's shape), or use **Add Product** on `/admin` and
export when done. Every item needs: `id`, `name`, `category`, `price`,
`image`, `ingredients`, `calories`, `protein`, `benefits`, `taste`,
`available`, `featured`.

## 6. How to change prices / calories / protein

Edit the `price`, `calories`, and `protein` fields for that item in
`src/data/menu-data.ts` (or via `/admin`, field by field).

## 7. How to change the WhatsApp number

Edit `phoneIntl` (digits only, country code first, no `+` or spaces) and
`phoneDisplay` in **`src/lib/business.ts`**. Every WhatsApp/call button on
the site reads from this one file.

## 8. How to change the email address

Edit `email` in **`src/lib/business.ts`**.

## 9. How to deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages → Build and deployment → Source**
   and select **GitHub Actions**.
3. Push to `main` — `.github/workflows/deploy.yml` will build and deploy
   automatically (or trigger it manually from the **Actions** tab).
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

No manual `base` path configuration is needed — `vite.config.ts` uses a
relative base (`./`) plus hash-based routing, so it works whether the repo
is served from the domain root or a subpath, and direct links to `/#/menu`,
`/#/products`, `/#/contact`, `/#/admin` all work correctly on GitHub Pages'
static hosting (no server-side routing required).

## 10. Limitations of the static admin editor

- `/admin` saves only to that **browser's** `localStorage` — it does not
  write to any file or server. Editing on your phone won't change what
  visitors on the live site see.
- To actually update the live site, you must **Export Updated Menu** and
  manually paste the result into `src/data/menu-data.ts`, then rebuild and
  redeploy (steps in section 3).
- There's no login/authentication on `/admin` — anyone who finds the URL can
  open it and see the editor (though they can't affect your live site
  without your GitHub access). If that's a concern, don't link to `/admin`
  publicly, or remove the route before deploying.

## 11. Performance notes

- The 3D hero and ingredient scenes are lazy-loaded (`React.lazy` +
  `Suspense`) and only download once a visitor actually reaches that
  section — the Three.js/React-Three-Fiber runtime is the single largest
  chunk (~230KB gzipped), which is the realistic floor for any WebGL 3D
  feature, not something specific to this build.
- No external 3D models — all geometry is procedural (spheres, icosahedrons,
  a torus), so there's no model file to download or optimize.
- Device pixel ratio is capped, and `prefers-reduced-motion` disables Lenis
  smooth scroll, drops 3D scenes to a lower/static render rate, and shortens
  CSS animation durations sitewide.
- Images use `loading="lazy"` and should be served as compressed `.webp`.
- If mobile data usage on the hero is a concern, an easy future swap is
  replacing the 3D hero canvas with a static hero photo + CSS parallax,
  keeping the 3D experience just in the "What's Inside" section.

## 12. Notes on menu wording

Per your source menu, Combo 2 is labelled **"PB Bread + Chia Pudding"** even
though the underlying product is **Banana Bread** — that labelling is
preserved in the UI exactly as supplied. The data field `composedOf` stores
the real product name (`"Banana Bread"`), so it's easy to update the display
label later without touching the underlying logic.

---

*This site was built to spec but is a starting point, not a guarantee of
zero bugs — test thoroughly (especially the WhatsApp links with your real
number, and every page's direct-URL navigation) before pointing customers
at it.*
