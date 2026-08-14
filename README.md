# Crochetbyneh.a — website

Static site (no build step) for the Crochetbyneh.a crochet shop. Ready to host on GitHub Pages.

## Put this on GitHub Pages

1. Create a repo named `crochetbyneha` (or anything) on GitHub → **crochetbyneha.github.io** works best if the repo is named exactly `crochetbyneha.github.io`.
2. Upload every file in this folder to the repo root, keeping the `assets/` folder structure intact.
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / root**.
4. Wait a minute, then visit your `https://<username>.github.io/<repo>/` (or `https://crochetbyneha.github.io/` if you used that exact repo name).

## Editing content

Everything — prices, photos, descriptions, WhatsApp number, Pathao link — lives in one file:
`assets/js/products.js`

- To change a price, discount, or description: edit the matching object in the `PRODUCTS` array.
- To swap a photo: replace the file in `assets/img/` (keep the same filename) or update the `image` path.
- To add a new product: copy one of the objects in `PRODUCTS`, give it a unique `id`, and it will automatically appear on the Shop page and get its own product page at `product.html?id=your-id`.
- WhatsApp number, hotline, and the Pathao link are set once at the top of the file in the `STORE` object.

## Pages

- `index.html` — home
- `shop.html` — full catalog with category filters
- `product.html?id=...` — single product detail (shared template)
- `contact.html` — WhatsApp / hotline / Pathao / socials / policies

## Still needed

Nothing outstanding — all 10 products currently have real photos.
