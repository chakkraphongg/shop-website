/**
 * ====================================================================
 * MAIN JAVASCRIPT (สคริปต์หลักของเว็บไซต์: ขายทุกอย่าง)
 * ====================================================================
 * ควบคุม:
 * - ระบบธีม Dark/Light Mode
 * - เมนู Responsive Hamburger
 * - การเชื่อมต่อลิงก์ LINE / Facebook อัตโนมัติ
 * - การแสดงผลสินค้าหน้าแรก (Featured Heroes)
 * - ระบบค้นหาและตัวกรองหน้าสินค้า (Live Search & Filter)
 * - การแสดงผลหน้ารายละเอียดสินค้า พร้อมเวที 3D หมุนตัวละคร (3D Hologram Stage)
 * - Quick 3D Inspect Modal (ส่องและหมุนฮีโร่แบบ 3D ได้ทันทีจากการ์ดทุกใบ)
 * - ระบบเสียงสังเคราะห์ Cyber Sound FX (Web Audio API)
 */

// -------------------------------------------------------------
// 1. ระบบเสียงสังเคราะห์ Cyber Audio Synthesizer (Web Audio API)
// -------------------------------------------------------------
let audioCtx = null;
let soundEnabled = true;

function playCyberSound(type = "hover") {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    if (type === "hover") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.05);
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "click") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "modal") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(1100, now + 0.15);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  } catch (e) {
    // Ignore audio error if user hasn't interacted yet
  }
}

// -------------------------------------------------------------
// 2. ฟังก์ชันช่วยเหลือทั่วไป (Utility Functions)
// -------------------------------------------------------------

/** ฟอร์แมตตัวเลขเป็นสกุลเงินบาท เช่น 20 -> ฿20 */
function formatCurrency(amount) {
  if (amount == null) return "";
  return "฿" + Number(amount).toLocaleString("th-TH");
}

/** สร้างลิงก์ทักเพจ Facebook (dekroyzz) พร้อมระบุสินค้า */
function getFacebookPageUrl(productName = "", productId = "") {
  return STORE_CONFIG.facebookPageUrl || "https://www.facebook.com/dekroyzz/";
}


/** สร้างลิงก์ทักสอบถาม Facebook Messenger หลัก */
function getFacebookInquiryUrl(productName = "", productId = "") {
  return STORE_CONFIG.facebookPageUrl || STORE_CONFIG.facebookUrl || "https://www.facebook.com/dekroyzz/";
}

/** คัดลอกข้อความลงคลิปบอร์ด พร้อมแสดง Toast */
function copyToClipboard(text, message = "คัดลอกเรียบร้อยแล้ว!") {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast(message));
  } else {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast(message);
  }
}

/** แสดง Toast แจ้งเตือนสั้นๆ */
function showToast(message) {
  let toast = document.getElementById("site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.className = "site-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// -------------------------------------------------------------
// 3. ระบบจัดการธีม (Dark / Light Mode)
// -------------------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem("seller_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const themeToggles = document.querySelectorAll(".theme-toggle-btn");
  themeToggles.forEach(btn => {
    updateThemeIcon(btn, savedTheme);
    btn.addEventListener("click", () => {
      playCyberSound("click");
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("seller_theme", newTheme);
      themeToggles.forEach(b => updateThemeIcon(b, newTheme));
    });
  });
}

function updateThemeIcon(btn, theme) {
  if (!btn) return;
  btn.innerHTML = theme === "dark" 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>` 
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  btn.setAttribute("aria-label", theme === "dark" ? "เปลี่ยนเป็นโหมดสว่าง" : "เปลี่ยนเป็นโหมดมืด");
  btn.setAttribute("title", theme === "dark" ? "โหมดสว่าง" : "โหมดมืด");
}

// -------------------------------------------------------------
// 4. ระบบเมนู Mobile (Hamburger Navigation)
// -------------------------------------------------------------
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const backdrop = document.getElementById("menu-backdrop");
  const closeBtn = document.getElementById("mobile-menu-close");

  if (!toggleBtn || !mobileMenu) return;

  function openMenu() {
    playCyberSound("click");
    mobileMenu.classList.add("active");
    if (backdrop) backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");
    if (backdrop) backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (backdrop) backdrop.addEventListener("click", closeMenu);

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

// -------------------------------------------------------------
// 5. ผูกข้อมูลร้านค้ากับหน้าเว็บ (Store Info Injector)
// -------------------------------------------------------------
function injectStoreInfo() {
  // Clear any old admin config cache from localStorage
  try {
    localStorage.removeItem("SELLER_STORE_CONFIG");
    localStorage.removeItem("SELLER_PRODUCTS");
  } catch (e) {}

  document.querySelectorAll(".store-name-text").forEach(el => {
    el.textContent = STORE_CONFIG.storeName || "ขายทุกอย่าง";
  });

  document.querySelectorAll(".store-tagline-text").forEach(el => {
    el.textContent = STORE_CONFIG.tagline || "";
  });

  // Facebook Page links (dekroyzz)
  document.querySelectorAll("[data-fb-page-link], [data-fb-link], [data-fb-personal-link], [data-line-link]").forEach(el => {
    el.setAttribute("href", STORE_CONFIG.facebookPageUrl || "https://www.facebook.com/dekroyzz/");
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  document.querySelectorAll("[data-phone-link]").forEach(el => {
    el.setAttribute("href", `tel:${(STORE_CONFIG.phone || "").replace(/[^0-9]/g, "")}`);
    if (el.classList.contains("phone-text")) {
      el.textContent = STORE_CONFIG.phone;
    }
  });

  document.querySelectorAll("[data-email-link]").forEach(el => {
    el.setAttribute("href", `mailto:${STORE_CONFIG.email}`);
    if (el.classList.contains("email-text")) {
      el.textContent = STORE_CONFIG.email;
    }
  });

  document.querySelectorAll(".store-hours-text").forEach(el => el.textContent = STORE_CONFIG.businessHours);
  document.querySelectorAll(".store-address-text").forEach(el => el.textContent = STORE_CONFIG.address);
  document.querySelectorAll(".current-year").forEach(el => el.textContent = new Date().getFullYear());
}

// -------------------------------------------------------------
// 6. คอมโพเนนต์การ์ดสินค้า (Hero Product Card Template)
// -------------------------------------------------------------
function createProductCardHTML(product) {
  const isSale = product.price === 15;
  const isAvailable = product.status !== "สินค้าหมด";
  const fbOrderUrl = STORE_CONFIG.facebookPageUrl || "https://www.facebook.com/dekroyzz/";

  return `
    <article class="product-card" data-category="${product.category}" data-id="${product.id}">
      <div class="product-card-image-wrap">
        <a href="product.html?id=${product.id}" class="product-card-link-overlay" aria-label="${product.name}">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="product-card-img" 
            loading="lazy"
            onerror="this.onerror=null; this.src='images/products/placeholder.svg';"
          />
        </a>

        <div class="product-badges">
          <span class="badge ${isAvailable ? 'badge-in-stock' : 'badge-out-of-stock'}">
            <span class="badge-dot"></span>${product.status || 'พร้อมส่ง'}
          </span>
          ${isSale ? `
            <span class="badge badge-sale-hot">
              🔥 SALE 15.-
            </span>
          ` : ""}
        </div>

        <button type="button" class="btn-3d-inspect quick-3d-btn" data-id="${product.id}" title="เปิดดูแบบ 3D หมุนได้" style="position: absolute; bottom: 8px; right: 8px; z-index: 5;">
          <span>🔄 หมุน 3D</span>
        </button>
      </div>
      
      <div class="product-card-body">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
          <span class="product-card-category">${getCategoryName(product.category)}</span>
          <span style="font-size: 0.75rem; color: var(--text-muted);">#${product.id}</span>
        </div>

        <h3 class="product-card-title">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h3>

        <div class="product-card-price-row">
          <div class="price-wrap">
            <span class="current-price" style="font-size: 1.3rem; ${isSale ? 'color: #ff4757;' : ''}">
              ${formatCurrency(product.price)}
            </span>
            ${product.originalPrice ? `
              <span class="original-price" style="font-size: 0.9rem;">
                ${formatCurrency(product.originalPrice)}
              </span>
            ` : ""}
          </div>
        </div>

        <div class="product-card-actions">
          <a href="product.html?id=${product.id}" class="btn btn-outline btn-sm">
            รายละเอียด
          </a>
          <a href="${fbOrderUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-facebook btn-sm">
            💬 สั่งซื้อเพจ
          </a>
        </div>
      </div>
    </article>
  `;
}

function getCategoryName(catId) {
  const found = CATEGORIES.find(c => c.id === catId);
  return found ? found.name : "ฮีโร่";
}

// -------------------------------------------------------------
// 7. 3D Card Hover Perspective Tilt Effect
// -------------------------------------------------------------
function initCard3DTilt() {
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
  });
}

// -------------------------------------------------------------
// 8. INTERACTIVE 3D HOLOGRAM STAGE CONTROLLER (หมุนตัวละคร 3D)
// -------------------------------------------------------------
function setup3DStage(stageEl) {
  if (!stageEl) return;
  const wrap = stageEl.querySelector(".holo-card-3d-wrap");
  const autoSpinBtn = stageEl.querySelector(".btn-toggle-spin");
  const resetBtn = stageEl.querySelector(".btn-reset-angle");

  if (!wrap) return;

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let currentRotY = 0;
  let currentRotX = 0;
  let autoSpin = false;

  // Pointer Down
  function onPointerDown(e) {
    isDragging = true;
    wrap.classList.remove("auto-spin");
    if (autoSpinBtn) autoSpinBtn.innerHTML = `<span>🔄 หมุนอัตโนมัติ</span>`;
    autoSpin = false;

    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    const pageY = e.touches ? e.touches[0].pageY : e.pageY;
    startX = pageX;
    startY = pageY;
    wrap.style.cursor = "grabbing";
    playCyberSound("hover");
  }

  // Pointer Move
  function onPointerMove(e) {
    if (!isDragging) return;
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    const pageY = e.touches ? e.touches[0].pageY : e.pageY;
    const deltaX = pageX - startX;
    const deltaY = pageY - startY;

    currentRotY += deltaX * 0.75;
    currentRotX = Math.max(-35, Math.min(35, currentRotX - deltaY * 0.4));

    startX = pageX;
    startY = pageY;

    wrap.style.transform = `rotateY(${currentRotY}deg) rotateX(${currentRotX}deg)`;
  }

  // Pointer Up
  function onPointerUp() {
    isDragging = false;
    wrap.style.cursor = "grab";
  }

  stageEl.addEventListener("mousedown", onPointerDown);
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);

  stageEl.addEventListener("touchstart", onPointerDown, { passive: true });
  window.addEventListener("touchmove", onPointerMove, { passive: true });
  window.addEventListener("touchend", onPointerUp);

  // Toggle Auto Spin Button
  if (autoSpinBtn) {
    autoSpinBtn.addEventListener("click", () => {
      playCyberSound("click");
      autoSpin = !autoSpin;
      if (autoSpin) {
        wrap.classList.add("auto-spin");
        autoSpinBtn.innerHTML = `<span>⏸️ หยุดหมุน</span>`;
      } else {
        wrap.classList.remove("auto-spin");
        autoSpinBtn.innerHTML = `<span>🔄 หมุนอัตโนมัติ</span>`;
      }
    });
  }

  // Reset Angle Button
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      playCyberSound("click");
      autoSpin = false;
      wrap.classList.remove("auto-spin");
      if (autoSpinBtn) autoSpinBtn.innerHTML = `<span>🔄 หมุนอัตโนมัติ</span>`;
      currentRotX = 0;
      currentRotY = 0;
      wrap.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
  }
}

// -------------------------------------------------------------
// 9. QUICK 3D INSPECT MODAL LOGIC
// -------------------------------------------------------------
function initQuick3DModal() {
  let modalBackdrop = document.getElementById("quick-3d-modal");
  if (!modalBackdrop) {
    modalBackdrop = document.createElement("div");
    modalBackdrop.id = "quick-3d-modal";
    modalBackdrop.className = "modal-3d-backdrop";
    modalBackdrop.innerHTML = `
      <div class="modal-3d-box" id="quick-3d-box">
        <button type="button" class="modal-3d-close" id="quick-3d-close" aria-label="ปิด">✕</button>
        <div id="quick-3d-content"></div>
      </div>
    `;
    document.body.appendChild(modalBackdrop);
  }

  const closeBtn = document.getElementById("quick-3d-close");
  closeBtn.addEventListener("click", () => {
    modalBackdrop.classList.remove("active");
  });

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      modalBackdrop.classList.remove("active");
    }
  });

  // Global delegate for clicking 3D inspect button on any card
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".quick-3d-btn");
    if (!btn) return;
    const heroId = btn.getAttribute("data-id");
    const hero = PRODUCTS.find(p => String(p.id) === String(heroId));
    if (!hero) return;

    playCyberSound("modal");

    const content = document.getElementById("quick-3d-content");
    content.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1rem;">
        <div>
          <div style="display: flex; gap: 0.4rem; align-items: center; margin-bottom: 0.35rem;">
            <span class="badge ${hero.status !== 'สินค้าหมด' ? 'badge-in-stock' : 'badge-out-of-stock'}">
              <span class="badge-dot"></span>${hero.status || 'พร้อมส่ง'}
            </span>
            ${hero.price === 15 ? '<span class="badge badge-sale-hot">🔥 SALE 15.-</span>' : ''}
          </div>
          <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-top: 0.25rem;">
            ${hero.name}
          </h2>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 1.5rem; font-weight: 800; ${hero.price === 15 ? 'color: #ff4757;' : 'color: var(--text-main);'}">
            ${formatCurrency(hero.price)}
          </div>
          ${hero.originalPrice ? `<div style="text-decoration: line-through; color: var(--text-muted); font-size: 0.85rem;">${formatCurrency(hero.originalPrice)}</div>` : ""}
        </div>
      </div>

      <!-- 3D Stage -->
      <div class="holo-stage-3d" id="modal-holo-stage" style="height: 320px;">
        <div class="holo-drag-hint">
          <span>👆 ลากเมาส์ หรือปัดนิ้วเพื่อหมุน 3D</span>
        </div>
        <div class="holo-grid-floor"></div>
        <div class="holo-pedestal"></div>
        <div class="holo-card-3d-wrap auto-spin" id="modal-holo-wrap" style="width: 200px; height: 230px;">
          <div class="holo-card-inner">
            <div class="holo-scanlines"></div>
            <img src="${hero.image}" alt="${hero.name}" class="holo-char-img" style="width: 150px; height: 150px;" onerror="this.src='images/products/placeholder.svg'" />
          </div>
        </div>
        <div class="holo-controls-bar">
          <button type="button" class="holo-ctrl-btn btn-toggle-spin">
            <span>⏸️ หยุดหมุน</span>
          </button>
          <button type="button" class="holo-ctrl-btn btn-reset-angle">
            <span>🎯 รีเซ็ตมุม</span>
          </button>
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; margin-top: 1.25rem;">
        <a href="product.html?id=${hero.id}" class="btn btn-outline" style="flex: 1;">
          ดูรายละเอียดเต็ม
        </a>
        <a href="${STORE_CONFIG.facebookPageUrl || 'https://www.facebook.com/dekroyzz/'}" target="_blank" rel="noopener noreferrer" class="btn btn-facebook" style="flex: 1; font-weight: 700;">
          💬 สั่งซื้อผ่านเพจ ฿${hero.price}
        </a>
      </div>
    `;

    modalBackdrop.classList.add("active");
    setup3DStage(document.getElementById("modal-holo-stage"));
  });
}

// -------------------------------------------------------------
// 10. หน้าแรก (Home Page Logic)
// -------------------------------------------------------------
function initHomePage() {
  const featuredContainer = document.getElementById("featured-products-grid");
  if (featuredContainer && typeof PRODUCTS !== "undefined") {
    const featured = PRODUCTS.filter(p => p.featured);
    const listToRender = featured.length > 0 ? featured.slice(0, 8) : PRODUCTS.slice(0, 8);
    featuredContainer.innerHTML = listToRender.map(createProductCardHTML).join("");
    initCard3DTilt();
  }

  const featuresContainer = document.getElementById("store-features-grid");
  if (featuresContainer && STORE_CONFIG.features) {
    featuresContainer.innerHTML = STORE_CONFIG.features.map(f => `
      <div class="feature-card">
        <div class="feature-icon">${f.icon}</div>
        <h4 class="feature-title">${f.title}</h4>
        <p class="feature-desc">${f.desc}</p>
      </div>
    `).join("");
  }
}

// -------------------------------------------------------------
// 11. หน้าสินค้าทั้งหมด (Products Catalog Logic with Search & Filter)
// -------------------------------------------------------------
function initProductsPage() {
  const grid = document.getElementById("all-products-grid");
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");
  const categoryFilterContainer = document.getElementById("category-filter");
  const statusFilterSelect = document.getElementById("status-filter");
  const priceSortSelect = document.getElementById("price-sort");
  const countDisplay = document.getElementById("products-count");
  const emptyState = document.getElementById("products-empty");
  const resetBtn = document.getElementById("reset-filter-btn");

  if (!grid || typeof PRODUCTS === "undefined") return;

  let currentCategory = "all";
  let currentStatus = "all";
  let currentKeyword = "";
  let currentSort = "default";

  if (categoryFilterContainer) {
    categoryFilterContainer.innerHTML = CATEGORIES.map(c => `
      <button type="button" class="filter-chip ${c.id === 'all' ? 'active' : ''}" data-cat="${c.id}">
        ${c.name}
      </button>
    `).join("");

    categoryFilterContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-chip");
      if (!btn) return;
      playCyberSound("click");
      categoryFilterContainer.querySelectorAll(".filter-chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-cat");
      applyFilter();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentKeyword = e.target.value.trim().toLowerCase();
      if (searchClear) {
        searchClear.style.display = currentKeyword.length > 0 ? "block" : "none";
      }
      applyFilter();
    });
  }

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      currentKeyword = "";
      searchClear.style.display = "none";
      searchInput.focus();
      applyFilter();
    });
  }

  if (statusFilterSelect) {
    statusFilterSelect.addEventListener("change", (e) => {
      currentStatus = e.target.value;
      applyFilter();
    });
  }

  if (priceSortSelect) {
    priceSortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      applyFilter();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      currentCategory = "all";
      currentStatus = "all";
      currentKeyword = "";
      currentSort = "default";
      if (searchInput) searchInput.value = "";
      if (searchClear) searchClear.style.display = "none";
      if (statusFilterSelect) statusFilterSelect.value = "all";
      if (priceSortSelect) priceSortSelect.value = "default";

      if (categoryFilterContainer) {
        categoryFilterContainer.querySelectorAll(".filter-chip").forEach(b => {
          b.classList.toggle("active", b.getAttribute("data-cat") === "all");
        });
      }
      applyFilter();
    });
  }

  function applyFilter() {
    let results = PRODUCTS.filter(p => {
      const matchCat = currentCategory === "all" || p.category === currentCategory;
      const matchStatus = currentStatus === "all" || p.status === currentStatus;
      const matchKey = !currentKeyword || 
        p.name.toLowerCase().includes(currentKeyword) || 
        String(p.id).includes(currentKeyword) ||
        (p.shortDesc && p.shortDesc.toLowerCase().includes(currentKeyword)) ||
        (p.description && p.description.toLowerCase().includes(currentKeyword));
      return matchCat && matchStatus && matchKey;
    });

    if (currentSort === "price-asc") {
      results.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
      results.sort((a, b) => b.price - a.price);
    } else if (currentSort === "name-asc") {
      results.sort((a, b) => a.name.localeCompare(b.name, "th"));
    }

    if (results.length > 0) {
      grid.innerHTML = results.map(createProductCardHTML).join("");
      grid.style.display = "grid";
      if (emptyState) emptyState.style.display = "none";
      initCard3DTilt();
    } else {
      grid.innerHTML = "";
      grid.style.display = "none";
      if (emptyState) emptyState.style.display = "block";
    }

    if (countDisplay) {
      countDisplay.textContent = `พบฮีโร่ ${results.length} จากทั้งหมด ${PRODUCTS.length} ตัว`;
    }
  }

  applyFilter();
}

// -------------------------------------------------------------
// 12. หน้ารายละเอียดสินค้า (Single Hero Detail with 3D Stage)
// -------------------------------------------------------------
function initProductDetailPage() {
  const container = document.getElementById("product-detail-container");
  if (!container || typeof PRODUCTS === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"), 10);
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    container.innerHTML = `
      <div class="product-not-found">
        <div class="empty-icon">🔍</div>
        <h2>ไม่พบข้อมูลฮีโร่ที่คุณกำลังค้นหา</h2>
        <p>ตัวละครอาจถูกปรับเปลี่ยนหรือรหัสสินค้าไม่ถูกต้อง คุณสามารถดูฮีโร่ทั้งหมดที่มีอยู่ได้ที่หน้ารวมสินค้า</p>
        <a href="products.html" class="btn btn-primary" style="margin-top: 1.5rem;">
          ← ไปยังหน้ารวมฮีโร่ทั้งหมด
        </a>
      </div>
    `;
    return;
  }

  document.title = `${product.name} | ${STORE_CONFIG.storeName}`;

    const isSale = product.price === 15;
  const isAvailable = product.status !== "สินค้าหมด";
  const fbPageUrl = STORE_CONFIG.facebookPageUrl || "https://www.facebook.com/dekroyzz/";

  // Options
  let variantsHTML = "";
  if (product.variants && product.variants.length > 0) {
    variantsHTML = product.variants.map((v, vIdx) => `
      <div class="product-variant-group">
        <label class="variant-label"><strong>${v.name}:</strong> <span class="selected-variant-name" id="selected-variant-${vIdx}">${v.options[0]}</span></label>
        <div class="variant-options">
          ${v.options.map((opt, oIdx) => `
            <button type="button" class="variant-btn ${oIdx === 0 ? 'active' : ''}" data-group="${vIdx}" data-val="${opt}">
              ${opt}
            </button>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  // Specs
  let specsHTML = "";
  if (product.specs && Object.keys(product.specs).length > 0) {
    const validSpecs = Object.entries(product.specs).filter(
      ([key]) => key !== "ระดับความแรร์" && !key.toLowerCase().includes("tier")
    );
    if (validSpecs.length > 0) {
      specsHTML = `
        <div class="product-specs-box">
          <h3 class="specs-title">ข้อมูลจำเพาะฮีโร่ (Specifications)</h3>
          <table class="specs-table">
            <tbody>
              ${validSpecs.map(([key, val]) => `
                <tr>
                  <td class="spec-label">${key}</td>
                  <td class="spec-value">${val}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }
  }

  container.innerHTML = `
    <!-- Breadcrumbs -->
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <a href="index.html">หน้าแรก</a>
      <span class="bc-sep">/</span>
      <a href="products.html">ฮีโร่ทั้งหมด</a>
      <span class="bc-sep">/</span>
      <span class="bc-current">${product.name}</span>
    </nav>

    <div class="product-detail-layout">
      <!-- 3D Holographic Stage Column -->
      <div class="product-gallery-col">
        <div class="holo-stage-3d" id="detail-holo-stage" style="height: 440px;">
          <div class="holo-drag-hint">
            <span>👆 ลากเมาส์ หรือปัดนิ้วเพื่อหมุนตัวละคร 3D</span>
          </div>
          <div class="holo-grid-floor"></div>
          <div class="holo-pedestal"></div>
          
          <div class="holo-card-3d-wrap auto-spin" id="detail-holo-wrap" style="width: 240px; height: 290px;">
            <div class="holo-card-inner">
              <div class="holo-scanlines"></div>
              <img 
                src="${product.image}" 
                alt="${product.name}" 
                class="holo-char-img" 
                onerror="this.src='images/products/placeholder.svg'"
              />
            </div>
          </div>

          <div class="holo-controls-bar">
            <button type="button" class="holo-ctrl-btn btn-toggle-spin">
              <span>⏸️ หยุดหมุน</span>
            </button>
            <button type="button" class="holo-ctrl-btn btn-reset-angle">
              <span>🎯 รีเซ็ตมุมมอง</span>
            </button>
          </div>
        </div>

        <p style="text-align: center; font-size: 0.82rem; color: var(--text-muted); margin-top: 0.75rem;">
          💡 คุณสามารถใช้เมาส์คลิกลากเพื่อหมุนตรวจเช็กโมเดลรอบทิศทาง 360° ได้อย่างอิสระ
        </p>
      </div>

      <!-- Info Column -->
      <div class="product-info-col">
        <div class="product-header-meta">
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <span class="badge ${isAvailable ? 'badge-in-stock' : 'badge-out-of-stock'}">
              <span class="badge-dot"></span>${product.status || 'พร้อมส่ง'}
            </span>
          </div>
          <span class="detail-sku">รหัสตัวละคร: #${product.id}</span>
        </div>

        <h1 class="product-detail-title">${product.name}</h1>

        <div class="product-price-box" style="${isSale ? 'border-color: rgba(255, 71, 87, 0.4); background: rgba(255, 71, 87, 0.05);' : ''}">
          <span class="detail-price" style="${isSale ? 'color: #ff4757;' : ''}">
            ${formatCurrency(product.price)}
          </span>
          ${product.originalPrice ? `
            <span class="detail-original-price">${formatCurrency(product.originalPrice)}</span>
            <span class="badge badge-sale-hot">ลดพิเศษเหลือ 15.-</span>
          ` : ""}
        </div>

        <!-- Stock Status -->
        <div class="detail-stock-status">
          <span class="badge ${isAvailable ? 'badge-in-stock' : 'badge-out-of-stock'}" style="font-size: 0.85rem; padding: 0.35rem 0.8rem;">
            <span class="badge-dot"></span>สถานะ: ${product.status || 'พร้อมส่ง'}
          </span>
          <span style="font-size: 0.85rem; color: var(--text-muted);">
            ${isAvailable ? 'พร้อมส่งมอบโค้ด/ตัวละครทันทีหลังชำระเงิน' : 'สินค้าหมดชั่วคราว สามารถทักสอบถามรอบเติมของได้'}
          </span>
        </div>

        <div class="detail-short-desc">
          <p>${product.description}</p>
        </div>

        ${variantsHTML}

        <!-- Action Buttons -->
        <div class="product-cta-section">
          <div class="cta-buttons-stack">
            <a href="${fbPageUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-facebook btn-lg btn-block" id="fb-page-inquiry-btn">
              <span class="btn-icon">💬</span>
              <span>สั่งซื้อทาง เพจ Facebook (dekroyzz) ฿${product.price}</span>
            </a>
          </div>

          <div class="extra-actions">
            <button type="button" class="btn btn-ghost btn-sm" id="share-product-btn">
              🔗 แชร์ / คัดลอกลิงก์ฮีโร่นี้
            </button>
          </div>
        </div>

        <!-- Trust Badges -->
        <div class="trust-guarantees-card">
          <div class="guarantee-item">
            <span class="g-icon">⚡</span>
            <div>
              <strong>ส่งไวใน 5 นาที</strong>
              <p>จัดส่งโค้ดตัวละครผ่านช่องทางแชท Facebook เพจ dekroyzz พร้อมคำแนะนำการเปิดใช้งาน</p>
            </div>
          </div>
          <div class="guarantee-item">
            <span class="g-icon">🛡️</span>
            <div>
              <strong>ของแท้ 100% ปลอดภัย ไม่โดนแบน</strong>
              <p>ดึงตรงจากฐานข้อมูลเกม ใช้งานได้อย่างมั่นใจ 100%</p>
            </div>
          </div>
        </div>

        ${specsHTML}
      </div>
    </div>

    <!-- Related Products -->
    <section class="related-products-section">
      <div class="section-header-compact">
        <h2>ฮีโร่อื่นในหมวดหมู่เดียวกัน</h2>
        <a href="products.html" class="link-more">ดูฮีโร่ทั้งหมด →</a>
      </div>
      <div class="products-grid" id="related-products-grid"></div>
    </section>
  `;

  // Init 3D Stage on Detail Page
  setup3DStage(document.getElementById("detail-holo-stage"));

  // Share Button
  const shareBtn = document.getElementById("share-product-btn");
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      copyToClipboard(window.location.href, "คัดลอกลิงก์สินค้านี้เรียบร้อยแล้ว!");
    });
  }

  // Related Products
  const relatedGrid = document.getElementById("related-products-grid");
  if (relatedGrid) {
    const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
    const fallbackList = related.length > 0 ? related : PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);
    relatedGrid.innerHTML = fallbackList.map(createProductCardHTML).join("");
    initCard3DTilt();
  }
}

// -------------------------------------------------------------
// 13. ไฮไลต์เมนูหน้าปัจจุบัน (Active Nav Highlight)
// -------------------------------------------------------------
function highlightActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// -------------------------------------------------------------
// 14. ทำงานเมื่อเอกสารโหลดเสร็จสมบูรณ์ (DOMContentLoaded)
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  injectStoreInfo();
  highlightActiveNav();
  initQuick3DModal();

  if (document.getElementById("featured-products-grid")) {
    initHomePage();
  }
  if (document.getElementById("all-products-grid")) {
    initProductsPage();
  }
  if (document.getElementById("product-detail-container")) {
    initProductDetailPage();
  }
});
