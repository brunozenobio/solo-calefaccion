// ============================================================
//  CATÁLOGO DE PRODUCTOS (script.js)
//  ------------------------------------------------------------
//  Datos tomados de productos.xlsx (hoja "Producto").
//  Para agregar o editar un producto, copiá una línea y cambiá
//  los valores:
//
//  - name      : nombre del producto
//  - cat       : categoría (ej: "Calderas", "Radiadores")
//  - marca     : marca del producto
//  - modelo    : modelo del producto
//  - stock     : cantidad en stock
//  - proveedor : de quién se compra
//  - image     : (opcional) ruta de una foto, ej: "img/producto.jpg".
//                Si no la ponés, la tarjeta muestra "Imagen por agregar".
//  Eliminá la coma del último producto de la lista si agregás uno nuevo.
// ============================================================

const products = [
    { name: 'Caldera mural a gas 24 kW', cat: 'Calderas', marca: 'Peisa', modelo: 'Duo 24', stock: 3, proveedor: 'Peisa Distribuidor', image: '' }
  , { name: 'Caldera mural a gas 32 kW', cat: 'Calderas', marca: 'Peisa', modelo: 'Duo 32', stock: 2, proveedor: 'Orbis Distribuidor', image: '' }
  , { name: 'Caldera mural a gas 24 kW', cat: 'Calderas', marca: 'Orbis', modelo: 'Eurotwin 24', stock: 2, proveedor: 'Orbis Distribuidor', image: '' }
  , { name: 'Radiador de aluminio 500 mm', cat: 'Radiadores', marca: 'Peisa', modelo: 'Tropical 500', stock: 10, proveedor: 'Peisa Distribuidor', image: '' }
  , { name: 'Radiador de aluminio 600 mm', cat: 'Radiadores', marca: 'Peisa', modelo: 'Tropical 600', stock: 8, proveedor: 'Peisa Distribuidor', image: '' }
  , { name: 'Radiador de aluminio 500 mm', cat: 'Radiadores', marca: 'Euterma', modelo: '500', stock: 6, proveedor: 'Euterma Distribuidor', image: '' }
  , { name: 'Calefactor tiro balanceado 5000 kcal', cat: 'Calefactores', marca: 'Eskabe', modelo: 'Titanio 5000', stock: 4, proveedor: 'Eskabe Distribuidor', image: '' }
  , { name: 'Calefactor tiro balanceado 3000 kcal', cat: 'Calefactores', marca: 'Orbis', modelo: 'Calorama 3000', stock: 5, proveedor: 'Orbis Distribuidor', image: '' }
  , { name: 'Estufa de tiro balanceado 5000 kcal', cat: 'Estufas', marca: 'Longvie', modelo: 'EBA5', stock: 3, proveedor: 'Longvie Distribuidor', image: '' }
  , { name: 'Termotanque eléctrico 80 L', cat: 'Termotanques', marca: 'Señorial', modelo: 'TS80', stock: 5, proveedor: 'Proveedor Mayorista General', image: '' }
  , { name: 'Termotanque eléctrico 120 L', cat: 'Termotanques', marca: 'Señorial', modelo: 'TS120', stock: 3, proveedor: 'Proveedor Mayorista General', image: '' }
  , { name: 'Bomba circuladora', cat: 'Bombas', marca: 'Grundfos', modelo: 'UPS 25-60', stock: 3, proveedor: 'Proveedor Mayorista General', image: '' }
  , { name: 'Bomba circuladora', cat: 'Bombas', marca: 'Wilo', modelo: 'Star-Z 25/6', stock: 2, proveedor: 'Proveedor Mayorista General', image: '' }
  , { name: 'Termostato ambiente digital', cat: 'Control', marca: 'Honeywell', modelo: 'T3', stock: 7, proveedor: 'Proveedor Mayorista General', image: '' }
  , { name: 'Termostato ambiente programable', cat: 'Control', marca: 'Baxi', modelo: 'Mago', stock: 4, proveedor: 'Proveedor Mayorista General', image: '' }
  , { name: 'Válvula de seguridad 3 bar', cat: 'Accesorios', marca: 'Genérica', modelo: '1/2 pulgada', stock: 15, proveedor: 'Proveedor Mayorista General', image: '' }
  , { name: 'Vaso de expansión 8 L', cat: 'Accesorios', marca: 'Caleffi', modelo: '8 L', stock: 6, proveedor: 'Caleffi Argentina', image: '' }
  , { name: 'Vaso de expansión 12 L', cat: 'Accesorios', marca: 'Caleffi', modelo: '12 L', stock: 4, proveedor: 'Caleffi Argentina', image: '' }
  , { name: 'Kit de salida de humos', cat: 'Accesorios', marca: 'Peisa', modelo: 'Kit estándar', stock: 5, proveedor: 'Peisa Distribuidor', image: '' }
  , { name: 'Llave de paso para radiador', cat: 'Accesorios', marca: 'Genérica', modelo: '1/2 pulgada', stock: 20, proveedor: 'Proveedor Mayorista General', image: '' }
  , { name: 'Purgador automático', cat: 'Accesorios', marca: 'Caleffi', modelo: '1/2 pulgada', stock: 12, proveedor: 'Caleffi Argentina', image: '' }
  , { name: 'Válvula termostática', cat: 'Accesorios', marca: 'Danfoss', modelo: 'RA-N 15', stock: 10, proveedor: 'Danfoss Distribuidor', image: '' }
  , { name: 'Caño multicapa 16 mm', cat: 'Instalación', marca: 'Genérica', modelo: 'Rollo 100 m', stock: 4, proveedor: 'Proveedor Mayorista General', image: '' }
  , { name: 'Caño multicapa 20 mm', cat: 'Instalación', marca: 'Genérica', modelo: 'Rollo 100 m', stock: 3, proveedor: 'Proveedor Mayorista General', image: '' }
  , { name: 'Aislante para cañería 16 mm', cat: 'Instalación', marca: 'Genérica', modelo: 'Rollo 25 m', stock: 10, proveedor: 'Proveedor Mayorista General', image: '' }
  , { name: 'Kit de instalación para caldera', cat: 'Accesorios', marca: 'Peisa', modelo: 'Kit completo', stock: 4, proveedor: 'Peisa Distribuidor', image: '' }
  , { name: 'Detector de monóxido de carbono', cat: 'Seguridad', marca: 'Honeywell', modelo: 'XC70', stock: 6, proveedor: 'Danfoss Distribuidor', image: '' }
  , { name: 'Rejilla de ventilación', cat: 'Instalación', marca: 'Genérica', modelo: '20 x 20 cm', stock: 15, proveedor: 'Proveedor Mayorista General', image: '' }
  , { name: 'Calefón a gas', cat: 'Calefones', marca: 'Orbis', modelo: '315BHO', stock: 3, proveedor: 'Orbis Distribuidor', image: '' }
  , { name: 'Calefón a gas', cat: 'Calefones', marca: 'Longvie', modelo: 'C3210', stock: 2, proveedor: 'Longvie Distribuidor', image: '' }
  , { name: 'Caldera', cat: 'Calderas', marca: 'Baxi', modelo: 'HHH', stock: 3, proveedor: 'Danfoss Distribuidor', image: '' }
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

function formatStock(n) {
  return n > 0 ? `${n} unidad(es)` : "SIN STOCK";
}

function renderProducts(list) {
  grid.innerHTML = list.map((p) => {
    const media = p.image
      ? `<img class="product-img" src="${p.image}" alt="${p.name}">`
      : `<div class="product-placeholder">${imageSvg}<span>Imagen por agregar</span></div>`;
    return `
      <article class="product-card" data-category="${p.cat}">
        <div class="product-media">${media}</div>
        <div class="product-body">
          <span class="product-tag">${p.cat}</span>
          <h3>${p.name}</h3>
          <ul class="product-meta">
            <li>Marca: <b>${p.marca}</b></li>
            <li>Modelo: <b>${p.modelo}</b></li>
            <li>Stock: <b>${formatStock(p.stock)}</b></li>
            <li>Proveedor: <b>${p.proveedor}</b></li>
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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "¡Gracias! Tu consulta fue preparada para enviar. Conectá este formulario a tu email/WhatsApp.";
  form.reset();
});

renderProducts(products);