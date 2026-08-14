document.addEventListener("DOMContentLoaded", () => {
  const slot = document.getElementById("footer-slot");
  if (!slot) return;
  slot.innerHTML = `
  <div class="wrap footer-grid">
    <div>
      <h4>Crochetbyneh.a</h4>
      <p>A cozy online store by Neha, who makes cute handmade crochet items with love. Custom orders bring your exact ideas to life.</p>
      <div class="social-row">
        <a href="${STORE.facebook}" target="_blank" rel="noopener" aria-label="Facebook">f</a>
        <a href="${STORE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">ig</a>
        <a href="${STORE.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">tt</a>
      </div>
    </div>
    <div>
      <h4>Shop</h4>
      <ul>
        <li><a href="shop.html">All pieces</a></li>
        <li><a href="shop.html#wearables">Wearables</a></li>
        <li><a href="shop.html#bags">Bags</a></li>
        <li><a href="shop.html#keychains">Keychains</a></li>
      </ul>
    </div>
    <div>
      <h4>Get in touch</h4>
      <ul>
        <li><a data-whatsapp-link target="_blank" rel="noopener">WhatsApp us</a></li>
        <li><a data-hotline-number href="#"></a></li>
        <li><a data-pathao-link target="_blank" rel="noopener">Order via Pathao</a></li>
        <li><a href="contact.html">Contact page</a></li>
      </ul>
    </div>
    <div>
      <h4>Policies</h4>
      <ul>
        <li><a href="contact.html#policies">Return policy</a></li>
        <li><a href="contact.html#policies">Refund policy</a></li>
        <li><a href="contact.html#policies">Made-to-order timeline</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap foot-bottom">
    <span>© <span data-year></span> Crochetbyneh.a. All rights reserved.</span>
    <span>Handmade in Nepal, shipped everywhere.</span>
  </div>`;

  // re-run the data-attribute fill for newly injected footer nodes
  document.querySelectorAll("[data-whatsapp-link]").forEach(el => el.href = whatsappOrderLink(null));
  document.querySelectorAll("[data-hotline-number]").forEach(el => {
    el.textContent = STORE.hotlineDisplay;
    el.href = "tel:+" + STORE.hotline;
  });
  document.querySelectorAll("[data-pathao-link]").forEach(el => el.href = STORE.pathao);
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
});
