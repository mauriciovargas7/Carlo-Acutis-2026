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
        <article class="group-card" data-group data-search="${escapeHtml(
          [group.title, group.countLabel, ...group.items].join(" "),
        )}">
          <header>
            <div>
              <p class="section-kicker">${group.title}</p>
              <h3>${group.title}</h3>
            </div>
            <span class="group-meta">${group.countLabel}</span>
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
    visibleItems += visible ? groupMatches : 0;
  });

  miraclesStat.textContent = term ? String(visibleItems || 0) : "136";
}

renderSupporting();
renderDirectory();
searchInput.addEventListener("input", applySearch);
