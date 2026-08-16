/* ============================================================
   CROCHET BY NEHA — SITE LOGIC
   Reads everything from products.js. You shouldn't need to edit
   this file just to add products, change prices, or update text.
   ============================================================ */

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- helpers ---------- */
function waLink(message) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
function money(n) {
  return "Rs " + n.toLocaleString("en-US");
}

/* ---------- header: mobile nav ---------- */
document.getElementById("mobileToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

/* ---------- contact channels + dock ---------- */
const waDefaultMsg = `Hi ${SITE_CONFIG.brandName}! I'd like to know more about your pieces.`;
document.getElementById("whatsappChannel").href = waLink(waDefaultMsg);
document.getElementById("phoneChannel").href = `tel:${SITE_CONFIG.phone}`;
document.getElementById("phoneChannelLabel").textContent = `Call / Hotline — ${SITE_CONFIG.phone}`;
document.getElementById("pathaoChannel").href = SITE_CONFIG.pathaoMerchantUrl;
document.getElementById("instaChannel").href = SITE_CONFIG.instagram;
document.getElementById("tiktokChannel").href = SITE_CONFIG.tiktok;
document.getElementById("fbChannel").href = SITE_CONFIG.facebook;

document.getElementById("dockWhatsapp").href = waLink(waDefaultMsg);
document.getElementById("dockPhone").href = `tel:${SITE_CONFIG.phone}`;
document.getElementById("dockInsta").href = SITE_CONFIG.instagram;
document.getElementById("dockTiktok").href = SITE_CONFIG.tiktok;
document.getElementById("dockFb").href = SITE_CONFIG.facebook;

/* ---------- footer ---------- */
document.getElementById("footerAboutBlurb").textContent = SITE_CONFIG.aboutBlurb;
document.getElementById("footerFb").href = SITE_CONFIG.facebook;
document.getElementById("footerInsta").href = SITE_CONFIG.instagram;
document.getElementById("footerTiktok").href = SITE_CONFIG.tiktok;
document.getElementById("footerWa").href = waLink(waDefaultMsg);
document.getElementById("footerPhone").href = `tel:${SITE_CONFIG.phone}`;
document.getElementById("footerPhone").textContent = SITE_CONFIG.phone;
document.getElementById("footerPathao").href = SITE_CONFIG.pathaoMerchantUrl;

/* ============================================================
   HERO HOVER VIEWER
   Two stacked images. The "worn" image is masked with a radial
   gradient centered on the cursor, so wherever you hover a
   circular window reveals the piece being worn underneath.
   ============================================================ */
const stage = document.getElementById("xrayStage");
const exteriorImg = document.getElementById("exteriorImg");
const interiorImg = document.getElementById("interiorImg");
const ring = document.getElementById("xrayRing");
const label = document.getElementById("xrayLabel");

exteriorImg.src = SITE_CONFIG.heroExteriorImage;
interiorImg.src = SITE_CONFIG.heroInteriorImage;

function setXrayPos(clientX, clientY) {
  const rect = stage.getBoundingClientRect();
  const x = ((clientX - rect.left) / rect.width) * 100;
  const y = ((clientY - rect.top) / rect.height) * 100;
  stage.style.setProperty("--mx", `${x}%`);
  stage.style.setProperty("--my", `${y}%`);
}
stage.addEventListener("mousemove", (e) => {
  setXrayPos(e.clientX, e.clientY);
  label.textContent = "SEE IT WORN";
});
stage.addEventListener("mouseleave", () => {
  label.textContent = "THE COLLECTION";
});
stage.addEventListener("touchmove", (e) => {
  const t = e.touches[0];
  if (t) setXrayPos(t.clientX, t.clientY);
}, { passive: true });

/* hotspots */
HOTSPOTS.forEach((h) => {
  const el = document.createElement("div");
  el.className = "hotspot";
  el.style.left = h.left + "%";
  el.style.top = h.top + "%";
  el.innerHTML = `
    <div class="hotspot-tip">
      <strong>${h.label}</strong>
      <div class="tip-price">${h.price}</div>
      ${h.specs}
    </div>
  `;
  el.addEventListener("click", () => {
    const msg = `Hi ${SITE_CONFIG.brandName}! I tapped on "${h.label}" on your website.\n\n${h.price}\n${h.specs}\n\nCan you tell me more / help me start an order?`;
    window.open(waLink(msg), "_blank");
  });
  stage.appendChild(el);
});

/* ============================================================
   SHOP — price-tier tabs + horizontal rows
   ============================================================ */
const tierTabsEl = document.getElementById("tierTabs");
const rowsEl = document.getElementById("productRows");
let activeTier = "all";

function renderTabs() {
  const all = [{ id: "all", label: "All" }, ...PRICE_TIERS];
  tierTabsEl.innerHTML = all
    .map((t) => `<button class="tier-tab ${t.id === activeTier ? "active" : ""}" data-tier="${t.id}">${t.label}</button>`)
    .join("");
  tierTabsEl.querySelectorAll(".tier-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTier = btn.dataset.tier;
      renderTabs();
      renderRows();
    });
  });
}

function productCard(p) {
  const specsMsg = `Hi ${SITE_CONFIG.brandName}! I'd like to order:\n\n${p.name} — ${money(p.price)}\n${p.specs}\n\nCan we talk colourway and timeline?`;
  const hasDiscount = p.originalPrice && p.originalPrice > p.price;
  const pctOff = hasDiscount ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  const priceHtml = hasDiscount
    ? `${money(p.price)} <span class="price-original">${money(p.originalPrice)}</span> <span class="price-off">${pctOff}% OFF</span>`
    : money(p.price);
  return `
    <div class="card">
      <div class="card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
      </div>
      <div class="card-body">
        <span class="card-cat">${p.category}</span>
        <h4>${p.name}</h4>
        <p class="card-specs">${p.specs}</p>
        <div class="card-price">${priceHtml}</div>
        <div class="card-actions">
          <a class="btn btn-primary" href="${SITE_CONFIG.pathaoMerchantUrl}" target="_blank" rel="noopener">Buy · Pathao</a>
          <a class="btn btn-whatsapp" href="${waLink(specsMsg)}" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </div>
  `;
}

function renderRows() {
  const tiers = activeTier === "all" ? PRICE_TIERS : PRICE_TIERS.filter((t) => t.id === activeTier);
  rowsEl.innerHTML = tiers
    .map((tier) => {
      const items = PRODUCTS.filter((p) => p.price >= tier.min && p.price < tier.max);
      if (!items.length) return "";
      return `
        <div class="product-row">
          <h3>${tier.label}</h3>
          <div class="row-scroll">${items.map(productCard).join("")}</div>
        </div>
      `;
    })
    .join("");
}

renderTabs();
renderRows();

/* ============================================================
   ABOUT THE STUDIO
   ============================================================ */
document.getElementById("aboutEyebrow").textContent = ABOUT.eyebrow;
document.getElementById("aboutHeading").textContent = ABOUT.heading;
document.getElementById("aboutBody").textContent = ABOUT.body;
document.getElementById("aboutGrid").innerHTML = ABOUT.columns
  .map(
    (col) => `
    <div class="about-col">
      <h4>${col.title}</h4>
      <ul>${col.items.map((i) => `<li>${i}</li>`).join("")}</ul>
    </div>`
  )
  .join("");

/* ============================================================
   REVIEWS
   ============================================================ */
document.getElementById("reviewGrid").innerHTML = REVIEWS.map(
  (r) => `
  <div class="review-card">
    <p class="review-quote">"${r.quote}"</p>
    <div class="review-name">${r.name}</div>
  </div>`
).join("");

/* ============================================================
   FAQ ACCORDION (Good to know: orders, returns, refunds, tracking)
   ============================================================ */
const faqList = document.getElementById("faqList");
faqList.innerHTML = FAQS.map(
  (f, i) => `
  <div class="faq-item" data-i="${i}">
    <div class="faq-q">${f.q}<span class="chev">+</span></div>
    <div class="faq-a">${f.a}</div>
  </div>`
).join("");
faqList.querySelectorAll(".faq-item").forEach((item) => {
  item.querySelector(".faq-q").addEventListener("click", () => item.classList.toggle("open"));
});

/* ============================================================
   AI CHAT WIDGET
   Talks to /api/chat — a small serverless proxy you deploy
   yourself so your Anthropic API key never touches the browser.
   See README.md → "Turning on the AI assistant".
   ============================================================ */
const aiLauncher = document.getElementById("aiLauncher");
const aiPanel = document.getElementById("aiPanel");
const aiMessages = document.getElementById("aiMessages");
const aiInput = document.getElementById("aiInput");
const aiSend = document.getElementById("aiSend");

let aiHistory = [];

function addMsg(role, text) {
  const div = document.createElement("div");
  div.className = `ai-msg ${role === "user" ? "user" : "bot"}`;
  div.textContent = text;
  aiMessages.appendChild(div);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

function openAiPanel() {
  aiPanel.classList.add("open");
  if (!aiMessages.children.length) {
    addMsg("bot", `Hi! I'm the Crochet by Neha AI assistant. Ask me about a piece, colour-customizing it, prices, or how to track an order.`);
  }
}
aiLauncher.addEventListener("click", () => aiPanel.classList.contains("open") ? aiPanel.classList.remove("open") : openAiPanel());
document.getElementById("aiClose").addEventListener("click", () => aiPanel.classList.remove("open"));

async function sendAiMessage() {
  const text = aiInput.value.trim();
  if (!text) return;
  addMsg("user", text);
  aiHistory.push({ role: "user", content: text });
  aiInput.value = "";
  aiSend.disabled = true;
  addMsg("bot", "…");
  const thinkingBubble = aiMessages.lastChild;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: aiHistory,
        // send product/hotspot data so the AI can answer accurately
        context: { products: PRODUCTS, hotspots: HOTSPOTS, brand: SITE_CONFIG.brandName },
      }),
    });
    if (!res.ok) throw new Error("Bad response");
    const data = await res.json();
    thinkingBubble.textContent = data.reply;
    aiHistory.push({ role: "assistant", content: data.reply });
  } catch (err) {
    thinkingBubble.textContent =
      "I can't reach the AI backend yet. If you're the site owner, deploy /api/chat with your Anthropic API key (see README). Meanwhile, tap the WhatsApp button and our team will help directly!";
  } finally {
    aiSend.disabled = false;
  }
}
aiSend.addEventListener("click", sendAiMessage);
aiInput.addEventListener("keydown", (e) => { if (e.key === "Enter") sendAiMessage(); });
