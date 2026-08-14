/* ============================================================
   Crochetbyneh.a — product data & shared behaviour
   Edit prices/photos/text here — every page reads from this file.
   ============================================================ */

const STORE = {
  whatsappNumber: "9779763959028", // country code + number — edit if wrong
  hotline: "9769283027",
  whatsappDisplay: "+977 976-395-9028",
  hotlineDisplay: "+977 976-928-3027",
  pathao: "https://crochetbyneha.pathao.shop",
  tiktok: "https://www.tiktok.com/@crochetby.neha",
  instagram: "https://instagram.com/crochetbyneh.a",
  facebook: "https://facebook.com/sabin.neupane.984"
};

const PRODUCTS = [
  {
    id: "sunflower-hairbun",
    name: "Sunflower Hairbun",
    category: "wearables",
    categoryLabel: "Wearables & Accessories",
    price: 350,
     SOLDTILLNOW:"20+ SOLD", //20+ SOLD ALL ACROSS THE WORLD
    original: 500,
    discount: 30,
    image: "assets/img/sunflower-hairbun.jpg",
    desc: "A crocheted sunflower clip with trailing stems, worn low behind loose hair.",
    long: "Two layered sunflower blooms in marigold thread, joined by a forest-green hair stick and finished with a pair of dangling flower charms. Slides in and holds a low bun or half-up style without a single pin."
  },
  {
    id: "crochet-shrug",
    name: "Crochet Shrug",
    category: "wearables",
    categoryLabel: "Wearables & Accessories",
    price: 1399,
    original: 2000,
    discount: 30,
    image: "assets/img/shrug.jpg",
    desc: "An open-mesh shrug finished with a hand-crocheted bow, light enough to layer over anything.",
    long: "A diamond-mesh shrug worked in soft cream cotton, cropped at the waist with dramatic bell sleeves. Finished with a dimensional crochet bow at the shoulder. Layers over camis, dresses, or swimwear."
  },
  {
    id: "scrunchies",
    name: "Scrunchies (ONE)",
    category: "wearables",
    categoryLabel: "Wearables & Accessories",
    price: 222,
    original: 350,
    discount: 37,
    image: "assets/img/scrunchies.jpg",
    desc: "A trio of textured scrunchies in teal, marigold, and blush — soft on the wrist, softer on the hair.",
    long: "Three ruffled scrunchies in a mixed colourway — teal and black, marigold, and blush and cream. Worked in a stretch-friendly stitch so they sit gently on hair without snagging."
  },
  {
    id: "ocean-bag",
    name: "Crochet Ocean Bag",
    category: "bags",
    categoryLabel: "Bags",
    price: 2899,
    original: 3500,
    discount: 17,
    image: "assets/img/ocean-bag.jpg",
    desc: "A deep-navy shell bag with a ruffled ric-rac strap, starfish appliqués, and a hand-stitched jellyfish charm.",
    long: "A structured navy shoulder bag built from shell stitch, with a long ruffled strap trimmed in cream ric-rac. Decorated with two crochet starfish, seed pearls, and a dangling jellyfish charm. One-of-a-kind, made to order."
  },
  {
    id: "mesh-bag",
    name: "Mesh Bag",
    category: "bags",
    categoryLabel: "Bags",
    price: 1999,
    original: 3000,
    discount: 33,
    image: "assets/img/mesh-bag.jpg",
    desc: "An open-stitch pouch bag tied with satin-soft bows — roomy enough for the everyday essentials.",
    long: "A blush-pink pouch bag in a breezy open stitch, cinched with black bow ties along the strap. Roomy enough for your phone, lipstick, and cards — the everyday bag that still looks handmade."
  },
  {
    id: "bird-keychain",
    name: "Cute Bird Keychain",
    category: "keychains",
    categoryLabel: "Keychains & Charms",
    price: 444,
    original: 599,
    discount: 26,
    image: "assets/img/bird-keychain.jpg",
    desc: "A tiny amigurumi bird in a red scarf, ready to ride along on your keys or bag.",
    long: "A rounded little bird, stitched in seafoam with a yellow beak and feet, wrapped in a red knit scarf with blushed cheeks. Attached to a sturdy keyring — tiny bird, big cuteness."
  },
  {
    id: "rolled-cake-keychain",
    name: "Mini Rolled Cake Keychain",
    category: "keychains",
    categoryLabel: "Keychains & Charms",
    price: 199,
    original: 399,
    discount: 50,
    image: "assets/img/rolled-cake-keychain.jpg",
    desc: "A miniature strawberry swiss-roll charm, stitched stitch by stitch, sweet enough to eat (please don't).",
    long: "A tightly coiled strawberry swiss-roll, worked in pink and cream with a red cherry topper. Sized to hang from a bag or keyring without adding bulk."
  },
  {
    id: "spiderman",
    name: "Crochet Spiderman",
    category: "keychains",
    categoryLabel: "Keychains & Charms",
    price: 699,
    original: 999,
    discount: 30,
    image: "assets/img/spiderman.jpg",
    desc: "A web-slinging car charm crocheted in classic red and black, ready to swing from your rearview mirror.",
    long: "A rearview-mirror hanger with a crocheted web canopy in white and a red-and-black masked head below. A fun, handmade way to dress up the dashboard."
  },
  {
    id: "bouquet-blanket",
    name: "Rose Bouquet Blanket",
    category: "bouquets",
    categoryLabel: "Bouquets",
    price: 2999,
    original: 4000,
    discount: 25,
    image: "assets/img/bouquet-blanket.jpg",
    desc: "A hand-tied bouquet of crochet roses on a cream blanket base — a bouquet that never wilts.",
    long: "Dozens of individually crocheted roses in deep red, trailed across a folded cream blanket base with green vine trim. Doubles as a bouquet for gifting and a keepsake throw afterwards — a bouquet that never wilts."
  },
  {
    id: "sunflower-bouquet",
    name: "Sunflower Bouquet",
    category: "bouquets",
    categoryLabel: "Bouquets",
    price: 1999,
    original: 2222,
    discount: 10,
    image: "assets/img/sunflower-bouquet.jpg",
    desc: "A cheerful bunch of crochet sunflowers wrapped in burlap, made to be kept forever.",
    long: "Six full sunflower blooms in marigold and chocolate-brown thread, arranged on green crochet stems and wrapped in burlap with a tied bow. A sunflower bouquet that never needs water."
  }
];

function formatRs(n) {
  return "Rs. " + n.toLocaleString("en-IN");
}

function whatsappOrderLink(product) {
  const msg = product
    ? `Hi! I'd like to order the ${product.name} (${formatRs(product.price)}) from Crochetbyneh.a 🧶`
    : `Hi! I'd like to ask about your crochet pieces 🧶`;
  return `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

function productCardHTML(p) {
  return `
  <article class="card">
    <a href="product.html?id=${p.id}" class="card-media">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <span class="tag-off">-${p.discount}%</span>
    </a>
    <div class="card-body">
      <p class="card-cat">${p.categoryLabel}</p>
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <p class="card-desc">${p.desc}</p>
      <p class="card-price">
        <span class="now">${formatRs(p.price)}</span>
        <span class="was">${formatRs(p.original)}</span>
      </p>
      <div class="card-actions">
        <a class="btn btn-line" href="product.html?id=${p.id}">View piece</a>
        <a class="btn btn-whatsapp" href="${whatsappOrderLink(p)}" target="_blank" rel="noopener">Order on WhatsApp</a>
      </div>
    </div>
  </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-whatsapp-link]").forEach(el => {
    el.href = whatsappOrderLink(null);
  });
  document.querySelectorAll("[data-whatsapp-number]").forEach(el => {
    el.textContent = STORE.whatsappDisplay;
  });
  document.querySelectorAll("[data-hotline-number]").forEach(el => {
    el.textContent = STORE.hotlineDisplay;
    if (el.tagName === "A") el.href = "tel:+" + STORE.hotline;
  });
  document.querySelectorAll("[data-pathao-link]").forEach(el => {
    el.href = STORE.pathao;
  });
});
