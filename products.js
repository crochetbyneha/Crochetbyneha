/* ============================================================
   CROCHET BY NEHA — SITE DATA FILE
   This is the ONLY file you need to touch to run the business.
   Change text here, save, refresh the browser. No code required.

   A few values below are PLACEHOLDERS — the live crochetbyneha
   site loads its phone number, exact product list, and reviews
   via JavaScript, which isn't visible to a page fetch. Search for
   "TODO" in this file for everything to double-check / fill in
   with your real details (and your own photos) before publishing.
   ============================================================ */

// ---------- 1. BRAND & CONTACT SETTINGS ----------
const SITE_CONFIG = {
  brandName: "Crochet by Neha",
  tagline: "Elegance in every loop.",
  aboutBlurb: "A cozy online store by Neha, who makes cute handmade crochet items with love. Custom colours and custom orders bring your exact ideas to life.",
  whatsappNumber: "9779769283027",       // from the live site's footer: +977 976-928-3027
  phone: "+977 976-928-3027",            // from the live site's footer
  logoImage: "https://crochetbyneha.github.io/assets/img/logo.jpg",
  instagram: "https://instagram.com/crochetby.neha",
  tiktok: "https://www.tiktok.com/@crochetby.neha",
  facebook: "https://facebook.com/crochetbyneha",
  pathaoMerchantUrl: "https://crochetbyneha.pathao.shop", // your original Pathao storefront
  ncmTrackingUrl: "https://ncmtracking.ncmb2b.com/",       // official NCM tracker
  heroExteriorImage: "https://images.unsplash.com/photo-1610190875586-2a4433e21e63?q=80&w=1800&auto=format&fit=crop",  // TODO: swap for your own flat-lay photo
  heroInteriorImage: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1800&auto=format&fit=crop",  // TODO: swap for your own "worn / in use" photo
};

// ---------- 2. THE HERO VIEWER — HOTSPOTS ----------
// left/top are percentages (0-100) positioned over the hero image.
// Tapping a hotspot opens WhatsApp with that category pre-filled.
// Repurposed from the original "aircraft hotspot" idea into a
// "hover to explore the collection" viewer for the four shop categories.
const HOTSPOTS = [
  {
    id: "wearables",
    label: "Wearables & Accessories",
    left: 20, top: 38,
    price: "From Rs 800",
    specs: "Hairbuns, headbands, tops & scrunchies — colour-customized to order.",
  },
  {
    id: "bags",
    label: "Bags",
    left: 45, top: 55,
    price: "From Rs 1,800",
    specs: "Handmade crochet bags, fully lined, in any colourway you choose.",
  },
  {
    id: "charms",
    label: "Keychains & Charms",
    left: 68, top: 35,
    price: "From Rs 350",
    specs: "Tiny amigurumi charms and keychains — sweet, quick gifts.",
  },
  {
    id: "bouquets",
    label: "Bouquets",
    left: 82, top: 62,
    price: "From Rs 1,200",
    specs: "Crochet flower bouquets that never wilt — made to your colour palette.",
  },
];

// ---------- 3. PRODUCTS ----------
// Add a new product by copying a block below and editing it.
// category is used for the horizontal rows. price is a NUMBER (no symbol) — used for sorting into tiers.
// originalPrice is OPTIONAL — add it to show a strikethrough price + "% off" badge.
// TODO: this is a starter catalog built from what's visible on the live site
// (the "ocean bag" and "sunflower hairbun" are real named pieces referenced
// by the site's own photos) — replace images with your own uploads and
// adjust prices/discounts, since the full live product list (including any
// real sale prices) is loaded by JS and wasn't readable from a page fetch.
const PRODUCTS = [
  {
    id: "p1",
    name: "Ocean Bag — Starfish & Jellyfish",
    category: "Bags",
    price: 2400,
    originalPrice: 2800,
    image: "https://crochetbyneha.github.io/assets/img/ocean-bag.jpg",
    specs: "Handmade crochet bag with starfish & jellyfish details, fully lined",
    badge: "Fan favourite",
  },
  {
    id: "p2",
    name: "Sunflower Hairbun",
    category: "Wearables & Accessories",
    price: 650,
    image: "https://crochetbyneha.github.io/assets/img/sunflower-hairbun.jpg",
    specs: "Soft yarn hairbun with sunflower detail, colour-customizable",
    badge: "Trending",
  },
  {
    id: "p3",
    name: "Everyday Tote Bag",
    category: "Bags",
    price: 1800,
    image: "https://images.unsplash.com/photo-1622560481156-01a35c56b8f8?q=80&w=900&auto=format&fit=crop",
    specs: "Sturdy handmade tote, any colourway, lined interior",
  },
  {
    id: "p4",
    name: "Scrunchie Set (3-pack)",
    category: "Wearables & Accessories",
    price: 550,
    originalPrice: 650,
    image: "https://images.unsplash.com/photo-1596993100471-c3905dafa78e?q=80&w=900&auto=format&fit=crop",
    specs: "Set of 3 soft yarn scrunchies, mix-and-match colours",
  },
  {
    id: "p5",
    name: "Mini Amigurumi Keychain",
    category: "Keychains & Charms",
    price: 380,
    image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?q=80&w=900&auto=format&fit=crop",
    specs: "Tiny handmade charm, clips onto bags or keys",
    badge: "Best gift",
  },
  {
    id: "p6",
    name: "Bag Charm Duo",
    category: "Keychains & Charms",
    price: 420,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=900&auto=format&fit=crop",
    specs: "Two coordinating charms, custom colours available",
  },
  {
    id: "p7",
    name: "Everlasting Flower Bouquet",
    category: "Bouquets",
    price: 1500,
    originalPrice: 1750,
    image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=900&auto=format&fit=crop",
    specs: "A hand-tied bouquet of crochet flowers, made to your palette",
  },
  {
    id: "p8",
    name: "Statement Crochet Top",
    category: "Wearables & Accessories",
    price: 2600,
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=900&auto=format&fit=crop",
    specs: "Made-to-measure crochet top, fully custom sizing & colour",
    badge: "Made to measure",
  },
];

// ---------- 4. PRICE TIERS (used to group the shop into rows) ----------
const PRICE_TIERS = [
  { id: "under-500", label: "Under Rs 500", min: 0, max: 500 },
  { id: "500-1500", label: "Rs 500 – 1,500", min: 500, max: 1500 },
  { id: "1500-3000", label: "Rs 1,500 – 3,000", min: 1500, max: 3000 },
  { id: "3000-plus", label: "Rs 3,000+", min: 3000, max: Infinity },
];

// ---------- 5. ABOUT THE STUDIO ----------
const ABOUT = {
  eyebrow: "About the studio",
  heading: "A cozy shop run by two people, one hook.",
  body: "Crochet by Neha is a small handmade studio started by Neha, who hand-makes every single piece with soft, high-quality yarn — plushies, wearables, bags, and home decor, one loop at a time. Her partner Sabin runs the shop end: orders, tracking, and every message that comes through.",
  columns: [
    { title: "Neha's craft", items: ["Handmakes every piece with care", "Uses soft, high-quality yarn", "Plushies, wearables, bags & home decor"] },
    { title: "Sabin & the shop", items: ["Manages the website & orders", "Helps track packages", "Answers your messages"] },
    { title: "Why shop here", items: ["Every item is unique", "Colour-customize almost anything", "Support a small local dream"] },
  ],
};

// ---------- 6. REVIEWS ----------
// TODO: the live site's actual customer reviews are loaded by JS and
// weren't readable from a page fetch — replace these with your real
// WhatsApp-submitted reviews (the site invites customers to share a
// photo + a few words on WhatsApp to be featured here).
const REVIEWS = [
  { name: "A happy customer", quote: "My bag came out exactly the colours I asked for — you can tell it was made with so much care." },
  { name: "A happy customer", quote: "Ordered a hairbun as a gift and it arrived beautifully packaged. Already planning my next order." },
  { name: "A happy customer", quote: "Sabin kept me updated the whole way through and the piece was worth every day of the wait." },
];

// ---------- 7. GOOD TO KNOW / FAQ ----------
const FAQS = [
  { q: "How do orders work?", a: "We keep zero initial stock — production starts after payment and takes roughly 3–4 weeks depending on the piece. Message us on WhatsApp with the item, colours, and any custom touches to start yours." },
  { q: "What's your return & exchange policy?", a: "Because every piece is handmade to order in your chosen colours, we don't offer returns or exchanges. Please double-check size, colourway, and details before confirming your order." },
  { q: "What's your refund policy?", a: "No refunds once production has started, except for items that arrive damaged or incorrect — reach out on WhatsApp within 3 days of delivery with photos and your order details." },
  { q: "How do I track my order?", a: "Every piece ships via Pathao and is tracked through NCM (Nepal Can Move). Head to the Track Order page and enter your NCM tracking number, or use the official NCM tracking link." },
];
