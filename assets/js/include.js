document.addEventListener("DOMContentLoaded", () => {
  const slot = document.getElementById("footer-slot");
  if (!slot) return;
  slot.innerHTML = `
  <div class="wrap footer-grid">
    <div>
      <h4>Crochetbyneh.a</h4>
      <p>A cozy online store by Neha, who makes cute handmade crochet items with love. Custom orders bring your exact ideas to life.</p>
      <div class="social-row">
        <a href="${STORE.gmail}" target="_blank" rel="noopener" aria-label="GMAIL"><svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="#EA4335" d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713z"/>
  <path fill="#4285F4" d="M24 5.5v13.5c0 1.105-.895 2-2 2h-3.5v-10.25l-6.5 5.25-6.5-5.25v10.25h-3.5c-1.105 0-2-.895-2-2v-13.5c0-1.018 1.157-1.59 1.967-0.974l10.033 8.114 10.033-8.114c0.81-.616 1.967-.044 1.967 0.974z"/>
  <path fill="#FBBC05" d="M0 5.5v1.287l12 9.713 12-9.713v-1.287c0-1.018-1.157-1.59-1.967-0.974l-10.033 8.114-10.033-8.114c-0.81-.616-1.967-.044-1.967 0.974z"/>
  <path fill="#34A853" d="M0 19v-13.5l6.5 5.25-6.5 8.25z"/>
  <path fill="#EA4335" d="M24 19v-13.5l-6.5 5.25 6.5 8.25z"/>
</svg></a>
        <a href="${STORE.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="insta-gradient" cx="30%" cy="107%" r="150%">
      <stop offset="0%" stop-color="#fdf497"/>
      <stop offset="5%" stop-color="#fdf497"/>
      <stop offset="45%" stop-color="#fd5949"/>
      <stop offset="60%" stop-color="#d6249f"/>
      <stop offset="90%" stop-color="#285AEB"/>
    </radialGradient>
  </defs>
  <path fill="url(#insta-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
</svg></a>
        <a href="${STORE.tiktok}" target="_blank" rel="noopener" aria-label="TikTok"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
</svg></a>
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
    <span> For more info IG:s.abin25</span>
  </div>`;

  // re-run the data-attribute fill for newly injected footer nodes
  document.querySelectorAll("[data-whatsapp-link]").forEach(el => el.href = whatsappOrderLink(null));
  document.querySelectorAll("[data-hotline-number]").forEach(el => {
    el.textContent = STORE.hotlineDisplay;
    el.href = "tel:+" + STORE.hotline;
  });
  document.body.insertAdjacentHTML("beforeend", `
<a href="https://wa.me/${STORE.whatsappNumber}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
<svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.741 5.5 2.037 7.815L0 32l8.408-2.005A15.9 15.9 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.09c-2.523 0-4.878-.703-6.883-1.923l-.494-.293-4.988 1.19 1.216-4.86-.32-.5A13.05 13.05 0 0 1 2.91 16C2.91 8.777 8.777 2.91 16 2.91S29.09 8.777 29.09 16 23.223 29.09 16 29.09zm7.29-9.79c-.4-.2-2.36-1.163-2.727-1.297-.366-.133-.633-.2-.9.2-.267.4-1.033 1.297-1.267 1.564-.233.267-.467.3-.867.1-.4-.2-1.69-.623-3.22-1.987-1.19-1.06-1.993-2.37-2.227-2.77-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.767-.014c-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.834 6.04.955.412 1.7.658 2.28.842.958.305 1.83.262 2.52.159.77-.115 2.36-.965 2.693-1.897.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z"/>
</svg>
</a>
`);

  document.querySelectorAll("[data-pathao-link]").forEach(el => el.href = STORE.pathao);
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
});
