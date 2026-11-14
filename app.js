/* STORE DAKHLA - منطق الكتالوج (يعتمد على Scripte.js: games, genres, genreLabels, gameLanguages) */
const WA = "212777497771", PHONE = "0777497771";

const T = {
 ar: {ph:"ابحث عن لعبة، كود CUSA، أو سنة...", all:"الكل", arOnly:"ألعاب بالعربية فقط", print:"🖨️ PDF",
  tag:"كتالوج ألعاب PS4 المعدّلة", h2:"🎮 مرحباً بك في عالم ألعاب PS4!",
  h3:"هل تمتلك جهاز PS4 معدّلاً وتبحث عن ألعاب جديدة؟ أنت في المكان المناسب!",
  p1:"اكتشف أكثر من {n} لعبة متنوعة، واختر ألعابك المفضلة واستفد من خدمة تثبيت الألعاب بسرعة واحترافية.",
  p2:"لم تجد اللعبة التي تبحث عنها؟ راسلنا وسنعمل على توفيرها لك.",
  f:["🎮 ألعاب متنوعة","⚡ تثبيت سريع","🚚 توصيل مجاني داخل الداخلة"],
  qr:"امسح الرمز للتواصل معنا عبر واتساب", wa:"واتساب", browse:"استعرض الألعاب الآن",
  n1:"✨ اختر ألعابك المفضلة واستمتع بتجربة لعب رائعة!", n2:"📍 STORE DAKHLA - مدينة الداخلة",
  info:"{n} ألعاب • صفحة {p} من {t}", code:"الكود", year:"الإصدار", size:"الحجم", lang:"اللغة",
  la:"العربية", le:"الإنجليزية", gb:"جيغا", mb:"ميغا", order:"🛒 اطلب عبر واتساب", cart:"الألعاب المحددة",
  send:"إرسال عبر واتساب 💬", clear:"إفراغ السلة", total:"المجموع", none:"لا توجد نتائج مطابقة لبحثك",
  req:"اطلب هذه اللعبة عبر واتساب", reqMsg:"سلام، أبحث عن اللعبة:", head:"أريد طلب الألعاب التالية:",
  hello:"سلام Store Dakhla، أريد الاستفسار عن ألعاب PS4", pick:"حدد لإضافة السلة"},
 fr: {ph:"Cherchez un jeu, un code CUSA, une année...", all:"Tout", arOnly:"Jeux en arabe seulement", print:"🖨️ PDF",
  tag:"CATALOGUE DE JEUX PS4 DÉBLOQUÉE", h2:"🎮 Bienvenue dans l'univers des jeux PS4 !",
  h3:"Vous avez une PS4 débloquée et cherchez de nouveaux jeux ? Vous êtes au bon endroit !",
  p1:"Découvrez plus de {n} jeux variés, choisissez vos favoris et profitez d'une installation rapide et professionnelle.",
  p2:"Vous ne trouvez pas votre jeu ? Écrivez-nous, nous le trouverons pour vous.",
  f:["🎮 Jeux variés","⚡ Installation rapide","🚚 Livraison gratuite à Dakhla"],
  qr:"Scannez le code pour nous contacter sur WhatsApp", wa:"WhatsApp", browse:"Voir les jeux",
  n1:"✨ Choisissez vos jeux préférés et profitez !", n2:"📍 STORE DAKHLA - Ville de Dakhla",
  info:"{n} jeux • page {p} sur {t}", code:"Code", year:"Année", size:"Taille", lang:"Langue",
  la:"Arabe", le:"Anglais", gb:"Go", mb:"Mo", order:"🛒 Commander sur WhatsApp", cart:"Jeux sélectionnés",
  send:"Envoyer sur WhatsApp 💬", clear:"Vider le panier", total:"Total", none:"Aucun résultat pour votre recherche",
  req:"Demander ce jeu sur WhatsApp", reqMsg:"Bonjour, je cherche le jeu :", head:"Je souhaite commander les jeux suivants :",
  hello:"Bonjour Store Dakhla, je voudrais des infos sur les jeux PS4", pick:"Cochez pour ajouter au panier"},
 en: {ph:"Search a game, CUSA code, or year...", all:"All", arOnly:"Arabic-language games only", print:"🖨️ PDF",
  tag:"MODDED PS4 GAMES CATALOGUE", h2:"🎮 Welcome to the world of PS4 games!",
  h3:"Do you own a modded PS4 and want new games? You're in the right place!",
  p1:"Discover {n}+ different games, pick your favourites and enjoy fast, professional installation.",
  p2:"Can't find your game? Message us and we'll get it for you.",
  f:["🎮 Wide selection","⚡ Fast installation","🚚 Free delivery in Dakhla"],
  qr:"Scan the code to chat with us on WhatsApp", wa:"WhatsApp", browse:"Browse games",
  n1:"✨ Pick your favourite games and enjoy!", n2:"📍 STORE DAKHLA - Dakhla City",
  info:"{n} games • page {p} of {t}", code:"Code", year:"Year", size:"Size", lang:"Language",
  la:"Arabic", le:"English", gb:"GB", mb:"MB", order:"🛒 Order on WhatsApp", cart:"Selected games",
  send:"Send via WhatsApp 💬", clear:"Clear cart", total:"Total", none:"No games match your search",
  req:"Request this game on WhatsApp", reqMsg:"Hi, I'm looking for the game:", head:"I'd like to order these games:",
  hello:"Hi Store Dakhla, I'd like info about PS4 games", pick:"Tick to add to cart"}
};
const GL = {
 fr:{HORREUR:"Horreur",GUERRE:"Guerre & tir","MONDE OUVERT":"Monde ouvert",AVENTURE:"Aventure",COMBAT:"Combat",SPORT:"Sport",COURSE:"Course",RPG:"RPG",FAMILLE:"Famille & coop",SIMULATION:"Simulation",ACTION:"Action",tools:"Outils"},
 en:{HORREUR:"Horror",GUERRE:"War & shooters","MONDE OUVERT":"Open world",AVENTURE:"Adventure",COMBAT:"Fighting",SPORT:"Sports",COURSE:"Racing",RPG:"RPG",FAMILLE:"Family & co-op",SIMULATION:"Simulation",ACTION:"Action",tools:"Tools"}
};

/* بحث بالعربية: كلمة عربية -> ما يقابلها في أسماء الألعاب */
const norm = s => String(s).toLowerCase().normalize("NFD")
 .replace(/[\u0300-\u036f\u064b-\u065f]/g,"").replace(/[أإآ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/\s+/g," ").trim();
const ALIASES = [["فيفا","fifa"],["جي تي اي","gta"],["جي تي ايه","gta"],["سبايدر مان","spider"],["سبايدرمان","spider"],
 ["كول اوف ديوتي","call of duty"],["ريزدنت ايفل","resident evil"],["ويتشر","witcher"],["غود اوف وور","god of war"],
 ["اله الحرب","god of war"],["ريد ديد","red dead"],["بيس","pes"],["ايفوتبول","efootball"],["ماينكرافت","minecraft"],
 ["ناروتو","naruto"],["اساسنز","assassin"],["فار كراي","far cry"],["دراغون بول","dragon ball"],["ون بيس","one piece"],
 ["مورتال كومبات","mortal kombat"],["تيكن","tekken"],["كراش","crash"],["هيتمان","hitman"],["بيتلفيلد","battlefield"]]
 .map(([a,b]) => [norm(a), b]);

games.forEach(g => {
 g._h = norm([g.name,g.cusa,g.size,g.source,g.year,g.genre,genreLabels[g.genre]||"",
  GL.fr[g.genre]||"",GL.en[g.genre]||"",g.number].join(" "));
});

let lang = "ar", genre = "";
try { lang = localStorage.getItem("sd_lang") || "ar"; } catch(e) {}
const t = () => T[lang];
const genreName = g => lang === "ar" ? (genreLabels[g] || g) : ((GL[lang] || {})[g] || g);
const isAr = g => gameLanguages[g.name] === "العربية";
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const $ = id => document.getElementById(id);

function fmtSize(sz) { return sz.replace(/Go/i, t().gb).replace(/Mo/i, t().mb); }
function sizeGB(sz) {
 const m = sz.match(/([\d.,]+)\s*(Go|Mo)/i);
 if (!m) return 0;
 const v = parseFloat(m[1].replace(",", "."));
 return /mo/i.test(m[2]) ? v / 1024 : v;
}

/* ===== السلة (محفوظة في المتصفح) ===== */
let cart = [];
try { cart = JSON.parse(localStorage.getItem("sd_cart") || "[]"); } catch(e) {}
const saveCart = () => { try { localStorage.setItem("sd_cart", JSON.stringify(cart)); } catch(e) {} };
const cartGames = () => cart.map(n => games.find(g => g.name === n)).filter(Boolean);

function toggleCart(num) {
 const g = games.find(x => x.number === num);
 if (!g) return;
 cart = cart.includes(g.name) ? cart.filter(n => n !== g.name) : [...cart, g.name];
 saveCart(); updateCartUI();
}
function removeFromCart(num) { toggleCart(num); render(); }
function clearCart() { cart = []; saveCart(); updateCartUI(); render(); }
function toggleCartPanel() {
 const p = $("cartPanel");
 p.style.display = p.style.display === "none" ? "block" : "none";
 updateCartUI();
}
function updateCartUI() {
 const list = cartGames(), bar = $("floatingCart"), p = $("cartPanel");
 $("cartCount").textContent = list.length;
 bar.style.display = list.length ? "flex" : "none";
 if (!list.length) p.style.display = "none";
 if (p.style.display !== "none") {
  const total = list.reduce((s, g) => s + sizeGB(g.size), 0).toFixed(1);
  p.innerHTML = list.map(g => `<div class="cart-row"><span dir="ltr">${esc(g.name)}</span>
   <button onclick="removeFromCart(${g.number})">✕</button></div>`).join("") +
   `<div class="cart-total"><span>${t().total}</span><span dir="ltr">${total} ${t().gb}</span></div>
   <button class="clear-btn" onclick="clearCart()">${t().clear}</button>`;
 }
}
function sendCartToWhatsApp() {
 const list = cartGames();
 if (!list.length) return;
 let text = t().head + "\n";
 list.forEach((g, i) => { text += `${i + 1}. *${g.name}* (${g.source || "—"}) _ ${g.size}\n`; });
 text += `\n${t().total}: ${list.reduce((s, g) => s + sizeGB(g.size), 0).toFixed(1)} GB`;
 window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank");
}

/* ===== البطاقات والصفحات ===== */
function coverFail(img) {
 const d = document.createElement("div");
 d.className = "cover-placeholder";
 d.innerHTML = "<strong>PS4</strong><small>STORE DAKHLA</small>";
 img.replaceWith(d);
}
function coverHTML(g) {
 const url = covers[g.cusa];
 if (url && url.startsWith("http"))
  return `<img src="${esc(url)}" alt="${esc(g.name)}" loading="lazy" decoding="async" onerror="coverFail(this)">`;
 return `<div class="cover-placeholder"><strong>PS4</strong><small>STORE DAKHLA</small></div>`;
}
function makeCard(g) {
 const msg = encodeURIComponent(`${g.name} (${g.source || "—"}) _ ${g.size}`);
 return `<div class="game-card">
  <input type="checkbox" class="game-checkbox" ${cart.includes(g.name) ? "checked" : ""} onchange="toggleCart(${g.number})" title="${t().pick}">
  ${coverHTML(g)}
  <div class="game-name">${esc(g.name)}</div>
  <div class="genre-tag">${esc(genreName(g.genre))}</div>
  <div class="game-meta">${t().code}: <span dir="ltr">${esc(g.cusa || "—")}</span> | ${t().year}: <span dir="ltr">${esc(g.year)}</span><br>
   ${t().size}: ${esc(fmtSize(g.size))}<br>
   🌐 ${t().lang}: <strong style="color:#0756a5">${isAr(g) ? t().la : t().le}</strong></div>
  <a href="https://wa.me/${WA}?text=${msg}" target="_blank" rel="noopener" class="card-wa-btn">${t().order}</a>
 </div>`;
}
function makePage(title, items, p, total, first) {
 return `<section class="page" ${first ? 'id="first"' : ""}>
  <h2 class="section-title">${esc(title)}</h2>
  <div class="page-info">${t().info.replace("{n}", items.length).replace("{p}", p).replace("{t}", total)}</div>
  <div class="games-grid">${items.map(makeCard).join("")}</div>
  <div class="footer"><span>• STORE DAKHLA •</span><span>• ${t().wa}: ${PHONE} •</span></div>
 </section>`;
}
function coverPage() {
 const x = t(), link = `https://wa.me/${WA}?text=${encodeURIComponent(x.hello)}`;
 const qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link)}`;
 return `<section class="page store-cover"><div class="cover-glow"></div>
  <div class="store-logo-area"><span class="cover-tag">${x.tag}</span><h1>STORE DAKHLA</h1><div class="logo-line"></div></div>
  <div class="store-badge">
   <h2>${x.h2}</h2><h3>${x.h3}</h3>
   <p>${x.p1.replace("{n}", Math.floor(games.length / 10) * 10)}</p><p>${x.p2}</p>
   <div class="cover-features">${x.f.map(f => `<div>${f}</div>`).join("")}</div>
   <div class="qr-container"><p>${x.qr}</p><img src="${qr}" alt="QR WhatsApp"></div>
   <a href="${link}" target="_blank" rel="noopener noreferrer" class="cover-wa-btn"><span>${x.wa} ${PHONE}</span><span>💬</span></a>
   <a href="#first" class="cover-games-btn"><span>${x.browse}</span><span>⬇️</span></a>
  </div>
  <div class="store-footer-note"><p>${x.n1}</p><p>${x.n2}</p></div>
 </section>`;
}

/* ===== العرض والتصفية ===== */
function render() {
 const raw = $("search").value, q0 = norm(raw), onlyAr = $("arOnly").checked;
 let q = q0;
 ALIASES.forEach(([a, b]) => { if (q.includes(a)) q = q.replace(a, b); });
 const list = games.filter(g => (!genre || g.genre === genre) && (!onlyAr || isAr(g)) && g._h.includes(q));
 let html = "", first = true;
 if (!q0 && !genre && !onlyAr) html += coverPage();
 (genre ? [genre] : genres).forEach(c => {
  const l = list.filter(g => g.genre === c);
  for (let i = 0; i < l.length; i += 12) {
   html += makePage(genreName(c), l.slice(i, i + 12), i / 12 + 1, Math.ceil(l.length / 12), first);
   first = false;
  }
 });
 if (!list.length) {
  const m = encodeURIComponent(`${t().reqMsg} ${raw}`);
  html = `<section class="page"><div class="empty-box"><h2>${t().none}</h2>
   <a class="cover-wa-btn" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${m}">💬 ${t().req}</a></div></section>`;
 }
 $("catalogue").innerHTML = html;
}
let timer;
function debounceRender() { clearTimeout(timer); timer = setTimeout(render, 250); }
function setGenre(g) { genre = g; buildChips(); render(); window.scrollTo(0, 0); }
function resetFilters() { $("search").value = ""; $("arOnly").checked = false; genre = ""; buildChips(); render(); }
function buildChips() {
 $("chips").innerHTML = [["", t().all], ...genres.map(g => [g, genreName(g)])]
  .map(([v, n]) => `<button class="chip ${v === genre ? "on" : ""}" onclick="setGenre('${v}')">${esc(n)}</button>`).join("");
}

/* ===== اللغة ===== */
function setLang(l) { lang = l; try { localStorage.setItem("sd_lang", l); } catch(e) {} applyLang(); }
function applyLang() {
 const x = t();
 document.documentElement.lang = lang;
 document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
 document.title = "STORE DAKHLA | " + x.tag;
 $("search").placeholder = x.ph;
 $("arLbl").textContent = x.arOnly;
 $("printBtn").textContent = x.print;
 $("cartLabel").textContent = "🛒 " + x.cart;
 $("sendBtn").textContent = x.send;
 document.querySelectorAll(".lang-sw button").forEach(b => b.classList.toggle("on", b.dataset.l === lang));
 buildChips(); render(); updateCartUI();
}
applyLang();
