const supportingPages = [
  {
    title: "Prefácio",
    label: "Cardeal Angelo Comastri",
    href: "pref_AC.html",
    summary:
      "Meditação sobre a fé, o testemunho e a centralidade da Eucaristia na vida cristã.",
  },
  {
    title: "Apresentação",
    label: "S. Em.ª Rev.mo Mons. Raffaello Martinelli",
    href: "pref_RM.html",
    summary:
      "Limitações, prudência e valor catequético dos milagres eucarísticos.",
  },
  {
    title: "Os Milagres Eucarísticos",
    label: "Padre Roberto Coggi, O.P.",
    href: "pref_RC.html",
    summary:
      "Síntese doutrinal sobre a presença real, a transubstanciação e a finalidade dos milagres.",
  },
];

const directory = [
  {
    title: "PAINÉIS INTRODUTÓRIOS",
    countLabel: "2 itens",
    items: ["Painel A", "Painel B"],
  },
  {
    title: "Argentina",
    countLabel: "1 item",
    items: ["Buenos Aires, 1922-1994-1996"],
  },
  {
    title: "Brasil",
    countLabel: "2 itens",
    items: ["Piedade do Paraopeba, 2020", "Lola de Rio Pomba, 1913-1999"],
  },
  {
    title: "Áustria",
    countLabel: "3 itens",
    items: ["Fiecht, 1310", "Seefeld, 1384", "Weiten-Raxendorf, 1411"],
  },
  {
    title: "Bélgica",
    countLabel: "7 itens",
    items: [
      "Bois-Seigneur-Isaac, 1405",
      "Bruges, 1203",
      "Bruxelas, 1370",
      "Herentals, 1412",
      "Herkenrode-Hasselt, 1317",
      "Liège, 1374",
      "Middleburg-Lovanio, 1374",
    ],
  },
  {
    title: "Colômbia",
    countLabel: "1 item",
    items: ["Tumaco, 1906"],
  },
  {
    title: "Croácia",
    countLabel: "1 item",
    items: ["Ludbreg, 1411"],
  },
  {
    title: "Egito",
    countLabel: "2 itens",
    items: ["S. Maria Egiziaca, IV-V sec.", "Scete, III-V sec."],
  },
  {
    title: "França",
    countLabel: "12 itens",
    items: [
      "Avignone, 1433",
      "Blanot, 1331",
      "Bordeaux, 1822",
      "Dijon, 1430",
      "Douai, 1254",
      "Faverney, 1608",
      "La Rochelle, 1461",
      "Neuvy Saint Sepulcre, 1257",
      "Les Ulmes, 1668",
      "Marseille-En-Beauvais, 1533",
      "Paris, 1290",
      "Pressac, 1643",
    ],
  },
  {
    title: "Alemanha",
    countLabel: "9 itens",
    items: [
      "Augsburg, 1194",
      "Benningen, 1216",
      "Bettbrunn, 1125",
      "Erding, 1417",
      "Kranenburg, 1280",
      "Regensburg, 1255",
      "Walldürn, 1330",
      "Weingarten",
      "Wilsnack, 1383",
    ],
  },
  {
    title: "Índia",
    countLabel: "1 item",
    items: ["Chirattakonam, 2001"],
  },
  {
    title: "Ilha de Martinica",
    countLabel: "1 item",
    items: ["Morne-Rouge, 1902"],
  },
  {
    title: "Ilha Reunião",
    countLabel: "1 item",
    items: ["Saint-André da Reunião, 1902"],
  },
  {
    title: "Itália",
    countLabel: "31 itens",
    items: [
      "Alatri, 1228",
      "Santa Clara de Assis, 1240",
      "Asti, 1535",
      "Bagno di Romagna, 1412",
      "Bolsena, 1264",
      "Canosio, 1630",
      "Cascia, 1330",
      "Cava dei Tirreni, 1656",
      "Dronero, 1631",
      "São Mauro La Bruca, 1969",
      "Ferrara, 1171",
      "Florença, 1230-1595",
      "Gruaro (Valvasone), 1294",
      "Lanciano, 750 D.C.",
      "Macerata, 1356",
      "Mogoro, 1604",
      "Morrovalle, 1560",
      "Offida, 1273-1280",
      "Patierno (Nàpoles), 1772",
      "Rimini, 1227",
      "Roma, VI-VII sec.",
      "Roma, 1610",
      "Rosano, 1948",
      "São Pedro Damião, XI sec.",
      "Salzano, 1517",
      "Scala, 1732",
      "Siena, 1730",
      "Trani, XI sec.",
      "Turim, 1453",
      "Turim, 1640",
      "Veroli, 1570",
      "Volterra, 1472",
    ],
  },
  {
    title: "México",
    countLabel: "1 item",
    items: ["Tixtla, 2006"],
  },
  {
    title: "Holanda",
    countLabel: "8 itens",
    items: [
      "Alkmaar, 1429",
      "Amsterdam, 1345",
      "Bergen, 1421",
      "Boxmeer, 1400",
      "Boxtel-Hoogstraten, 1380",
      "Breda-Niervaart, 1300",
      "Meerssen, 1222-1465",
      "Stiphout, 1342",
    ],
  },
  {
    title: "Peru",
    countLabel: "1 item",
    items: ["Eten, 1649"],
  },
  {
    title: "Polônia",
    countLabel: "5 itens",
    items: ["Cracòvia, 1345", "Glotowo, 1290", "Legnica, 2013", "Poznan, 1399", "Sokółka 2008"],
  },
  {
    title: "Portugal",
    countLabel: "1 item",
    items: ["Santarém, 1247"],
  },
  {
    title: "Espanha",
    countLabel: "18 itens",
    items: [
      "Alboraya-Almacéra, 1348",
      "Alcalà, 1597",
      "Alcoy, 1568",
      "Caravaca de la Cruz, 1231",
      "Cimballa, 1370",
      "Daroca, 1239",
      "Gerona, 1297",
      "Gorkum-El Escorial, 1572",
      "Guadalupe, 1420",
      "Ivorra, 1010",
      "Moncada, 1392",
      "Montserrat, 1657",
      "O'Cebreiro, 1300",
      "Onil, 1824",
      "Ponferrada, 1533",
      "S. Juan de las Abadesas , 1251",
      "Silla, 1907",
      "Valença",
      "Zaragoza, 1427",
    ],
  },
  {
    title: "Suíça",
    countLabel: "1 item",
    items: ["Ettiswil, 1447"],
  },
  {
    title: "Venezuela",
    countLabel: "1 item",
    items: ["Betania, 1991"],
  },
  {
    title: "OS SANTOS, MÍSTICOS E A EUCARÍSTIA",
    countLabel: "18 itens",
    items: [
      "Santa Margarida Maria de Alacoque - Sagrado Coração de Jesus, séc. XVII",
      "São Tomás de Aquino, 1224-1274",
      "São Francisco de Assis, séc. XIII",
      "São Bernardo de Claraval, séc. XII",
      "São João Bosco, 1848",
      "Santa Germana Cousin (Pibrac), 1589",
      "Santo Egídio",
      "São Stanislaus Kostka, 1550-1568",
      "Santa Faustina Kowalska, séc. XX",
      "São Sátiro, séc. IV",
      "Santa Catarina da Siena, 1347-1380",
      "Beata Alexandrina Maria Da Costa, 1904-1955",
      "Beata Anna Katherina Emmerick, 1774-1824",
      "Beato Nicolau Stenon (Niels Steensen) , 1638-1686",
      "São Nicolau de Flue, 1417",
      "Serva de Deus Anne-Louise Lateau, 1850",
      "Venerável Marthe Robin, 1902-1981",
      "André de Frossard, séc. XX",
      "Teresa Neumann, 1898-1962",
    ],
  },
  {
    title: "A NOSSA SENHORA E A EUCARÍSTIA",
    countLabel: "5 itens",
    items: [
      "Calanda, Espanha, Miguel-Juan Pellicer, 1640",
      "Guadalupe, México, Juan Diego, 1531",
      "Lourdes, França, Santa Bernardete, 1888",
      "Parisi, França, Santa Catarina Labouré, 1830",
      "Fátima, Portugal, O Anjo da Paz, 1916",
    ],
  },
  {
    title: "COMUNHÕES PRODIGIOSAS",
    countLabel: "2 partes",
    items: [
      "Comunhões Prodigiosas (primeira parte)",
      "• A Beata Emilia Bicchieri",
      "• A Beata Imelda Lambertini",
      "• O Beato Giacomo da Montieri",
      "• O Beato Tomás da Cori",
      "• São Bernardo",
      "• São Bonaventura",
      "• São Geraldo de Maiella",
      "• São Jerónimo",
      "• Santa Juliana Falconieri",
      "• Santa Lúcia Filippini",
      "• Santa Maria Francisca das Cinco Chagas",
      "• São Segundo",
      "Comunhões Prodigiosas (segunda parte)",
      "• A Beata Ângela de Foligno",
      "• Santa Agnese Segni",
      "• Santa Clara de Montefalco",
      "• Santa Francisca Romana",
      "• São Gregório Magno",
      "• Santa Teresa d’Avila",
    ],
  },
];

const directoryRoot = document.querySelector("#directory");
const supportingRoot = document.querySelector("#supporting");
const searchInput = document.querySelector("#search");
const miraclesStat = document.querySelector("#stat-miracles");

function renderSupporting() {
  supportingRoot.innerHTML = supportingPages
    .map(
      (page) => `
        <a class="support-card" href="${page.href}">
          <span class="feature-tag">${page.title}</span>
          <h3>${page.label}</h3>
          <p>${page.summary}</p>
        </a>
      `,
    )
    .join("");
}

function renderDirectory() {
  directoryRoot.innerHTML = directory
    .map(
      (group) => `
        <article class="group-card is-collapsed" data-group data-search="${escapeHtml(
          [group.title, group.countLabel, ...group.items].join(" "),
        )}">
          <header>
            <div>
              <p class="section-kicker">${group.title}</p>
              <h3>${group.title}</h3>
            </div>
            <div class="group-card-actions">
              <span class="group-meta">${group.countLabel}</span>
              <button class="group-toggle" type="button" data-group-toggle aria-expanded="false" aria-label="Exibir itens de ${escapeHtml(group.title)}" title="Exibir itens">
                <span class="group-toggle__icon" aria-hidden="true"></span>
              </button>
            </div>
          </header>
          <ul class="entry-list">
            ${group.items
              .map((item) => `<li class="entry" data-entry>${escapeHtml(item)}</li>`)
              .join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function applySearch() {
  const term = searchInput.value.trim().toLowerCase();
  const groups = [...document.querySelectorAll("[data-group]")];
  let visibleItems = 0;

  groups.forEach((group) => {
    const entries = [...group.querySelectorAll("[data-entry]")];
    const kicker = group.querySelector(".section-kicker")?.textContent?.toLowerCase() ?? "";
    const titleMatch = Boolean(term) && kicker.includes(term);
    let groupMatches = 0;

    entries.forEach((entry) => {
      const match = entry.textContent.toLowerCase().includes(term);
      const showEntry = !term || titleMatch || match;
      entry.classList.toggle("is-hidden", !showEntry);
      if (showEntry) {
        groupMatches += 1;
      }
    });

    const visible = !term || groupMatches > 0 || titleMatch;
    group.classList.toggle("is-hidden", !visible);
    if (term && visible) {
      group.classList.remove("is-collapsed");
      const toggle = group.querySelector("[data-group-toggle]");
      if (toggle) {
        const title = group.querySelector("h3")?.textContent ?? "este grupo";
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", `Ocultar itens de ${title}`);
        toggle.title = "Ocultar itens";
      }
    }
    visibleItems += visible ? groupMatches : 0;
  });

  miraclesStat.textContent = term ? String(visibleItems || 0) : "136";
}


const atlasPoints = [
  { title: "Argentina", coords: [-34.6, -58.4], region: "americas", positions: { americas: [56, 86] } },
  { title: "Brasil", coords: [-14.2, -51.9], region: "americas", positions: { americas: [60, 69] } },
  { title: "Áustria", coords: [47.6, 14.1], region: "europa", positions: { europa: [58, 56] } },
  { title: "Bélgica", coords: [50.8, 4.5], region: "europa", positions: { europa: [43, 49] } },
  { title: "Colômbia", coords: [4.6, -74.1], region: "americas", positions: { americas: [45, 60] } },
  { title: "Croácia", coords: [45.2, 15.4], region: "europa", positions: { europa: [62, 62] } },
  { title: "Egito", coords: [26.8, 30.8], region: "africa", positions: { africa: [57, 27] } },
  { title: "França", coords: [46.5, 2.4], region: "europa", positions: { europa: [39, 59] } },
  { title: "Alemanha", coords: [51.0, 10.3], region: "europa", positions: { europa: [52, 49] } },
  { title: "Índia", coords: [21.0, 78.0], region: "asia", positions: { asia: [52, 62] } },
  { title: "Ilha de Martinica", coords: [14.6, -61.0], region: "americas", positions: { americas: [53, 54] } },
  { title: "Ilha Reunião", coords: [-21.1, 55.5], region: "africa", positions: { africa: [77, 84] } },
  { title: "Itália", coords: [42.8, 12.5], region: "europa", positions: { europa: [55, 68] } },
  { title: "México", coords: [23.6, -102.5], region: "americas", positions: { americas: [29, 43] } },
  { title: "Holanda", coords: [52.2, 5.3], region: "europa", positions: { europa: [46, 44] } },
  { title: "Peru", coords: [-9.2, -75.0], region: "americas", positions: { americas: [43, 73] } },
  { title: "Polônia", coords: [52.1, 19.4], region: "europa", positions: { europa: [61, 43] } },
  { title: "Portugal", coords: [39.5, -8.0], region: "europa", positions: { europa: [22, 64] } },
  { title: "Espanha", coords: [40.3, -3.7], region: "europa", positions: { europa: [30, 67] } },
  { title: "Suíça", coords: [46.8, 8.2], region: "europa", positions: { europa: [49, 59] } },
  { title: "Venezuela", coords: [7.0, -66.0], region: "americas", positions: { americas: [55, 58] } },
];

const atlasViews = {
  mundo: { label: "O mundo reunido em um mapa", bounds: [[-160, -55], [160, 72]] },
  americas: { label: "Milagres nas Américas", bounds: [[-125, -56], [-30, 65]] },
  europa: { label: "Milagres na Europa", bounds: [[-16, 34], [40, 65]] },
  africa: { label: "Milagres na África", bounds: [[-20, -35], [55, 38]] },
  asia: { label: "Milagres na Ásia", bounds: [[40, 0], [145, 65]] },
};

const atlasCityCoordinates = {
  "Argentina|Buenos Aires": [-34.6037, -58.3816],
  "Brasil|Piedade do Paraopeba": [-20.125, -44.41], "Brasil|Lola de Rio Pomba": [-21.274, -43.18],
  "Áustria|Fiecht": [47.35, 11.69], "Áustria|Seefeld": [47.33, 11.19], "Áustria|Weiten-Raxendorf": [48.29, 15.08],
  "Bélgica|Bois-Seigneur-Isaac": [50.63, 4.26], "Bélgica|Bruges": [51.21, 3.22], "Bélgica|Bruxelas": [50.85, 4.35], "Bélgica|Herentals": [51.18, 4.83], "Bélgica|Herkenrode-Hasselt": [50.96, 5.29], "Bélgica|Liège": [50.63, 5.57], "Bélgica|Middleburg-Lovanio": [50.88, 4.7],
  "Colômbia|Tumaco": [1.81, -78.76], "Croácia|Ludbreg": [46.25, 16.61],
  "Egito|S. Maria Egiziaca": [30.04, 31.24], "Egito|Scete": [30.65, 29.75],
  "França|Avignone": [43.95, 4.81], "França|Blanot": [46.56, 4.72], "França|Bordeaux": [44.84, -0.58], "França|Dijon": [47.32, 5.04], "França|Douai": [50.37, 3.08], "França|Faverney": [47.77, 6.1], "França|La Rochelle": [46.16, -1.15], "França|Neuvy Saint Sepulcre": [46.6, 1.81], "França|Les Ulmes": [47.22, -0.18], "França|Marseille-En-Beauvais": [49.6, 2.35], "França|Paris": [48.86, 2.35], "França|Pressac": [46.1, 0.57],
  "Alemanha|Augsburg": [48.37, 10.9], "Alemanha|Benningen": [48.03, 10.22], "Alemanha|Bettbrunn": [48.89, 11.72], "Alemanha|Erding": [48.3, 11.91], "Alemanha|Kranenburg": [51.79, 6.01], "Alemanha|Regensburg": [49.02, 12.1], "Alemanha|Walldürn": [49.58, 9.37], "Alemanha|Weingarten": [47.81, 9.64], "Alemanha|Wilsnack": [52.96, 11.95],
  "Índia|Chirattakonam": [8.5, 76.9], "Ilha de Martinica|Morne-Rouge": [14.78, -61.13], "Ilha Reunião|Saint-André da Reunião": [-20.96, 55.65],
  "Itália|Alatri": [41.73, 13.34], "Itália|Santa Clara de Assis": [43.07, 12.62], "Itália|Asti": [44.9, 8.21], "Itália|Bagno di Romagna": [43.84, 11.96], "Itália|Bolsena": [42.64, 11.99], "Itália|Canosio": [44.46, 7.28], "Itália|Cascia": [42.72, 13.01], "Itália|Cava dei Tirreni": [40.7, 14.71], "Itália|Dronero": [44.47, 7.36], "Itália|São Mauro La Bruca": [40.12, 15.29], "Itália|Ferrara": [44.84, 11.62], "Itália|Florença": [43.77, 11.26], "Itália|Gruaro (Valvasone)": [45.83, 12.84], "Itália|Lanciano": [42.23, 14.39], "Itália|Macerata": [43.3, 13.45], "Itália|Mogoro": [39.68, 8.78], "Itália|Morrovalle": [43.32, 13.59], "Itália|Offida": [42.94, 13.69], "Itália|Patierno (Nàpoles)": [40.88, 14.29], "Itália|Rimini": [44.07, 12.57], "Itália|Roma": [41.9, 12.5], "Itália|Rosano": [43.73, 11.38], "Itália|São Pedro Damião": [41.9, 12.5], "Itália|Salzano": [45.52, 12.1], "Itália|Scala": [40.66, 14.61], "Itália|Siena": [43.32, 11.33], "Itália|Trani": [41.28, 16.42], "Itália|Turim": [45.07, 7.69], "Itália|Veroli": [41.69, 13.42], "Itália|Volterra": [43.4, 10.86],
  "México|Tixtla": [17.57, -99.4],
  "Holanda|Alkmaar": [52.63, 4.75], "Holanda|Amsterdam": [52.37, 4.89], "Holanda|Bergen": [52.67, 4.7], "Holanda|Boxmeer": [51.65, 5.95], "Holanda|Boxtel-Hoogstraten": [51.59, 5.33], "Holanda|Breda-Niervaart": [51.57, 4.77], "Holanda|Meerssen": [50.89, 5.75], "Holanda|Stiphout": [51.53, 5.57],
  "Peru|Eten": [-6.92, -79.86], "Polônia|Cracòvia": [50.06, 19.94], "Polônia|Glotowo": [54.12, 20.29], "Polônia|Legnica": [51.21, 16.16], "Polônia|Poznan": [52.41, 16.93], "Polônia|Sokółka 2008": [53.41, 23.5],
  "Portugal|Santarém": [39.24, -8.69],
  "Espanha|Alboraya-Almacéra": [39.5, -0.35], "Espanha|Alcalà": [40.48, -3.36], "Espanha|Alcoy": [38.7, -0.47], "Espanha|Caravaca de la Cruz": [38.11, -1.86], "Espanha|Cimballa": [41.1, -1.78], "Espanha|Daroca": [41.11, -1.41], "Espanha|Gerona": [41.98, 2.82], "Espanha|Gorkum-El Escorial": [40.59, -4.15], "Espanha|Guadalupe": [39.45, -5.33], "Espanha|Ivorra": [41.77, 1.39], "Espanha|Moncada": [39.55, -0.4], "Espanha|Montserrat": [41.59, 1.83], "Espanha|O'Cebreiro": [42.71, -7.04], "Espanha|Onil": [38.63, -0.67], "Espanha|Ponferrada": [42.55, -6.6], "Espanha|S. Juan de las Abadesas": [42.23, 2.28], "Espanha|Silla": [39.36, -0.41], "Espanha|Valença": [39.47, -0.38], "Espanha|Zaragoza": [41.65, -0.89],
  "Suíça|Ettiswil": [47.15, 8.02], "Venezuela|Betania": [10.16, -67.72],
};

const atlasRegions = {
  "Argentina": "americas", "Brasil": "americas", "Colômbia": "americas", "Ilha de Martinica": "americas", "México": "americas", "Peru": "americas", "Venezuela": "americas",
  "Áustria": "europa", "Bélgica": "europa", "Croácia": "europa", "França": "europa", "Alemanha": "europa", "Itália": "europa", "Holanda": "europa", "Polônia": "europa", "Portugal": "europa", "Espanha": "europa", "Suíça": "europa",
  "Egito": "africa", "Ilha Reunião": "africa", "Índia": "asia",
};

const atlasCityPoints = Object.entries(atlasCityCoordinates).map(([key, coords]) => {
  const [country, city] = key.split("|");
  const group = directory.find((item) => item.title === country);
  const records = group?.items.filter((item) => item.split(",")[0].trim() === city) ?? [];
  return { country, city, coords, region: atlasRegions[country], records };
}).filter((point) => point.records.length > 0);
function openDirectoryGroup(title) {
  const group = [...document.querySelectorAll("[data-group]")].find(
    (item) => item.querySelector("h3")?.textContent.trim() === title,
  );
  if (!group) return;

  group.classList.remove("is-collapsed");
  const toggle = group.querySelector("[data-group-toggle]");
  if (toggle) {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", `Ocultar itens de ${title}`);
    toggle.title = "Ocultar itens";
  }
  group.scrollIntoView({ behavior: "smooth", block: "center" });
}

function initializeAtlas() {
  const container = document.querySelector("#world-map");
  if (!container) return;
  if (!window.maplibregl) {
    container.innerHTML = '<div class="atlas-unavailable">O mapa real não pôde ser carregado. Verifique sua conexão e recarregue a página.</div>';
    return;
  }

  container.innerHTML = '<div id="maplibre-map" aria-label="Mapa interativo dos milagres eucarísticos"></div>';
  const atlasTitle = document.querySelector("#mapa-titulo");
  const viewButtons = [...document.querySelectorAll("[data-atlas-view]")];
  const map = new maplibregl.Map({ container: "maplibre-map", style: "https://tiles.openfreemap.org/styles/liberty", center: [10, 18], zoom: 1.15, minZoom: 1, maxZoom: 10, attributionControl: true });
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

  let markers = [];
  let activeView = "mundo";
  document.addEventListener("click", (event) => {
    const clickedMarker = markers.some(({ element }) => element.contains(event.target));
    const clickedPopup = markers.some(({ popup }) => popup.isOpen() && popup.getElement().contains(event.target));
    if (clickedMarker || clickedPopup) return;
    markers.forEach(({ element, popup }) => {
      element.classList.remove("is-selected", "is-focused");
      popup.remove();
    });
  });
  const clearMarkers = () => { markers.forEach(({ marker, popup }) => { marker.remove(); popup.remove(); }); markers = []; };
  const selectMarker = (entry) => {
    markers.forEach(({ element, popup }) => { if (element !== entry.element) { element.classList.remove("is-selected", "is-focused"); popup.remove(); } });
    entry.element.classList.add("is-selected");
    entry.popup.addTo(map);
  };
  const addMarker = (point) => {
    const element = document.createElement("button");
    const total = point.records.length;
    element.type = "button";
    element.className = "atlas-city-pin";
    element.textContent = String(total);
    element.title = `${point.city}, ${point.country}`;
    element.setAttribute("aria-label", `${point.city}, ${point.country}: ${total} registro${total === 1 ? "" : "s"}`);
    const label = `${point.city}, ${point.country}`;
    const popup = new maplibregl.Popup({ closeButton: false, closeOnClick: false, offset: 23, className: "atlas-country-popup" }).setLngLat([point.coords[1], point.coords[0]]).setText(label);
    const marker = new maplibregl.Marker({ element, anchor: "center" }).setLngLat([point.coords[1], point.coords[0]]).addTo(map);
    const entry = { point, element, marker, popup };
    element.addEventListener("click", () => {
      if (!element.classList.contains("is-selected")) { selectMarker(entry); return; }
      if (!element.classList.contains("is-focused")) { element.classList.add("is-focused"); map.flyTo({ center: [point.coords[1], point.coords[0]], zoom: Math.max(map.getZoom(), 6.2), essential: true }); return; }
      openDirectoryGroup(point.country);
    });
    markers.push(entry);
  };
  const selectAtlasView = (viewName) => {
    const view = atlasViews[viewName] ?? atlasViews.mundo;
    activeView = viewName;
    clearMarkers();
    if (atlasTitle) atlasTitle.textContent = view.label;
    map.fitBounds(view.bounds, { padding: 44, duration: 650, maxZoom: viewName === "mundo" ? 1.7 : 4.2 });
    atlasCityPoints.filter((point) => viewName === "mundo" || point.region === viewName).forEach(addMarker);
    viewButtons.forEach((button) => { const active = button.dataset.atlasView === viewName; button.classList.toggle("is-active", active); button.setAttribute("aria-pressed", String(active)); });
  };
  viewButtons.forEach((button) => button.addEventListener("click", () => selectAtlasView(button.dataset.atlasView)));
  map.on("load", () => selectAtlasView(activeView));
}renderSupporting();
renderDirectory();
initializeAtlas();
searchInput.addEventListener("input", applySearch);
directoryRoot.addEventListener("click", (event) => {
  const button = event.target.closest("[data-group-toggle]");
  if (!button) return;

  const group = button.closest("[data-group]");
  const collapsed = group.classList.toggle("is-collapsed");
  const title = group.querySelector("h3")?.textContent ?? "este grupo";
  button.setAttribute("aria-expanded", String(!collapsed));
  button.setAttribute("aria-label", `${collapsed ? "Exibir" : "Ocultar"} itens de ${title}`);
  button.title = collapsed ? "Exibir itens" : "Ocultar itens";
});
