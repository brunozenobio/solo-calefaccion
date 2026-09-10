// ============================================================
//  CATÁLOGO DE PRODUCTOS (script.js)
//  ------------------------------------------------------------
//  Datos tomados de productos_web.xlsx (hoja 1).
//  Para agregar o editar un producto, copiá una línea y cambiá
//  los valores:
//
//  - name  : nombre corto del producto
//  - cat   : categoría (ej: "Calderas", "Radiadores")
//  - marca : marca del producto
//  - modelo: modelo exacto (del Excel)
//  - desc  : descripción corta
//  Eliminá la coma del último producto de la lista si agregás uno nuevo.
// ============================================================

const products = [
    { name: 'Eco 4 S', cat: 'Calderas', marca: 'Baxi', modelo: 'Eco 4 S', desc: 'Doble servicio' }
  , { name: 'Eco Nova 31', cat: 'Calderas', marca: 'Baxi', modelo: 'Eco Nova 31', desc: 'Solo calefacción / doble servicio' }
  , { name: 'Luna 3 Confort', cat: 'Calderas', marca: 'Baxi', modelo: 'Luna 3 Confort', desc: 'Doble servicio / solo calefacción' }
  , { name: 'Slim de fundición', cat: 'Calderas', marca: 'Baxi', modelo: 'Slim de fundición', desc: '40.000 a 68.000 kcal' }
  , { name: 'Diva 24', cat: 'Calderas', marca: 'Peisa', modelo: 'Diva 24', desc: 'Solo calefacción / doble servicio' }
  , { name: 'Diva 32', cat: 'Calderas', marca: 'Peisa', modelo: 'Diva 32', desc: 'Solo calefacción / doble servicio' }
  , { name: 'Prima Téc 24', cat: 'Calderas', marca: 'Peisa', modelo: 'Prima Téc 24', desc: 'Solo calefacción / doble servicio' }
  , { name: 'Prima Téc 32', cat: 'Calderas', marca: 'Peisa', modelo: 'Prima Téc 32', desc: 'Solo calefacción / doble servicio' }
  , { name: 'Dona', cat: 'Calderas', marca: 'Peisa', modelo: 'Dona', desc: 'Línea de pie fundición' }
  , { name: 'XP 60', cat: 'Calderas', marca: 'Peisa', modelo: 'XP 60', desc: 'Línea de pie fundición' }
  , { name: 'XP 80', cat: 'Calderas', marca: 'Peisa', modelo: 'XP 80', desc: 'Línea de pie fundición' }
  , { name: 'XP 100', cat: 'Calderas', marca: 'Peisa', modelo: 'XP 100', desc: 'Línea de pie fundición' }
  , { name: '+ 500', cat: 'Radiadores', marca: 'Rehau', modelo: '+ 500', desc: 'Bimetálico' }
  , { name: '+ 350', cat: 'Radiadores', marca: 'Rehau', modelo: '+ 350', desc: 'Bimetálico' }
  , { name: 'Radiador 500', cat: 'Radiadores', marca: 'Nereus', modelo: '500', desc: 'Bimetálico' }
  , { name: 'Radiador 350', cat: 'Radiadores', marca: 'Nereus', modelo: '350', desc: 'Bimetálico' }
  , { name: 'T 500', cat: 'Radiadores', marca: 'Peisa', modelo: 'T 500', desc: 'Inyectado' }
  , { name: 'T 350', cat: 'Radiadores', marca: 'Peisa', modelo: 'T 350', desc: 'Inyectado' }
  , { name: 'Plus 350', cat: 'Radiadores', marca: 'Triangular', modelo: 'Plus 350', desc: 'Aluminio inyectado' }
  , { name: 'Plus 500', cat: 'Radiadores', marca: 'Triangular', modelo: 'Plus 500', desc: 'Aluminio inyectado' }
  , { name: 'Plus 600', cat: 'Radiadores', marca: 'Triangular', modelo: 'Plus 600', desc: 'Aluminio inyectado' }
  , { name: 'Plus 700', cat: 'Radiadores', marca: 'Triangular', modelo: 'Plus 700', desc: 'Aluminio inyectado' }
  , { name: 'Plus 800', cat: 'Radiadores', marca: 'Triangular', modelo: 'Plus 800', desc: 'Aluminio inyectado' }
  , { name: 'Best 350', cat: 'Radiadores', marca: 'Triangular', modelo: 'Best 350', desc: 'Aluminio inyectado' }
  , { name: 'Best 500', cat: 'Radiadores', marca: 'Triangular', modelo: 'Best 500', desc: 'Aluminio inyectado' }
  , { name: 'Best 600', cat: 'Radiadores', marca: 'Triangular', modelo: 'Best 600', desc: 'Aluminio inyectado' }
  , { name: 'Plus grafito 500', cat: 'Radiadores', marca: 'Triangular', modelo: 'Plus grafito 500', desc: 'Negro; solo en 500' }
  , { name: 'Toda la línea', cat: 'Cañerías', marca: 'Rehau', modelo: 'Toda la línea', desc: 'Para piso radiante y radiadores' }
  , { name: 'Toda la línea', cat: 'Cañerías', marca: 'Saladillo', modelo: 'Toda la línea', desc: 'Para piso radiante' }
  , { name: 'Toda la línea', cat: 'Cañerías', marca: 'Giacomini', modelo: 'Toda la línea', desc: 'Solo piso radiante' }
  , { name: 'Por placas', cat: 'Intercambiadores', marca: 'Cipriani', modelo: 'Por placas', desc: 'Para piscinas; desarmable' }
  , { name: 'Por placas', cat: 'Intercambiadores', marca: 'Alfa Laval', modelo: 'Por placas', desc: 'Para piscinas; desarmable' }
  , { name: 'De tubo', cat: 'Intercambiadores', marca: 'Triangular', modelo: 'De tubo', desc: 'Intercambiador de tubo' }
  , { name: 'Circuladoras', cat: 'Bombas', marca: 'Wilo', modelo: 'Circuladoras', desc: 'Todas las potencias' }
  , { name: 'Circuladoras', cat: 'Bombas', marca: 'Grundfos', modelo: 'Circuladoras', desc: '' }
  , { name: 'Circuladoras', cat: 'Bombas', marca: 'Rowa', modelo: 'Circuladoras', desc: '' }
  , { name: 'Llaves y detentores', cat: 'Accesorios', marca: 'Giacomini', modelo: 'Llaves y detentores', desc: '' }
  , { name: 'Llaves y detentores', cat: 'Accesorios', marca: 'Caleffi', modelo: 'Llaves y detentores', desc: '' }
  , { name: 'Cabezales', cat: 'Accesorios', marca: 'Genérico', modelo: 'Cabezales', desc: 'Para radiadores y colectores' }
];

// ============================================================
//  NO hace falta tocar nada de acá en adelante
// ============================================================

const grid = document.getElementById("productGrid");
const filterBar = document.getElementById("filterBar");

// Genero los filtros a partir de las categorías del catálogo
const cats = ["todos", ...products.map((p) => p.cat).filter((c, i, arr) => arr.indexOf(c) === i)];
filterBar.innerHTML = cats.map((c) =>
  `<button class="filter-btn${c === "todos" ? " active" : ""}" data-filter="${c}">${c === "todos" ? "Todos" : c}</button>`
).join("");

const imageSvg = '<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 15l-5-5-9 9"/></svg>';

function renderProducts(list) {
  grid.innerHTML = list.map((p) => {
    const media = p.image
      ? `<img class="product-img" src="${p.image}" alt="${p.name}">`
      : `<div class="product-placeholder">${imageSvg}<span>Imagen por agregar</span></div>`;
    const desc = p.desc ? `<p class="product-desc">${p.desc}</p>` : "";
    return `
      <article class="product-card" data-category="${p.cat}">
        <div class="product-media">${media}</div>
        <div class="product-body">
          <span class="product-tag">${p.cat}</span>
          <h3>${p.name}</h3>
          ${desc}
          <ul class="product-meta">
            <li>Marca: <b>${p.marca}</b></li>
            <li>Modelo: <b>${p.modelo}</b></li>
          </ul>
          <div class="product-foot">
            <a class="product-link" href="#contacto">Consultar →</a>
          </div>
        </div>
      </article>`;
  }).join("");
}

filterBar.addEventListener("click", (event) => {
  const btn = event.target.closest(".filter-btn");
  if (!btn) return;

  filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  const filter = btn.dataset.filter;
  document.querySelectorAll(".product-card").forEach((card) => {
    const show = filter === "todos" || card.dataset.category === filter;
    card.classList.toggle("hidden", !show);
  });
});

const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("menu-open"));
});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  message.textContent = "Enviando...";
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });
    if (response.ok) {
      message.textContent = "¡Gracias! Tu consulta fue enviada. Te contactaremos pronto.";
      form.reset();
    } else {
      message.textContent = "Hubo un error. Intentá nuevamente o escribinos por WhatsApp.";
    }
  } catch {
    message.textContent = "Error de conexión. Intentá nuevamente.";
  }
});

renderProducts(products);