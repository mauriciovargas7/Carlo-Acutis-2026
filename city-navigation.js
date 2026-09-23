(() => {
  'use strict';
  const root = new URL('.', document.currentScript.src);
  const countries = window.cityNavigationData || [];
  const key = url => decodeURIComponent(url.pathname).toLowerCase();
  const current = key(new URL(location.href));
  const ci = countries.findIndex(c => c.cities.some(city => key(new URL(city.path, root)) === current));
  if (ci < 0) return;
  const country = countries[ci];
  const si = country.cities.findIndex(city => key(new URL(city.path, root)) === current);
  const nav = document.createElement('nav');
  nav.className = 'city-navigation';
  nav.setAttribute('aria-label', 'Navegar entre cidades e pa\u00edses');
  function group(label, name, previous, next) {
    const block = document.createElement('div');
    block.className = 'city-navigation-group';
    const heading = document.createElement('div');
    heading.className = 'city-navigation-heading';
    const caption = document.createElement('span');
    caption.textContent = label;
    const title = document.createElement('strong');
    title.textContent = name;
    heading.append(caption, title);
    block.append(heading);
    [previous, next].forEach((destination, i) => {
      const link = document.createElement(destination ? 'a' : 'span');
      link.className = 'city-navigation-arrow';
      link.textContent = i ? '\u2192' : '\u2190';
      if (destination) {
        link.href = new URL(destination.path, root).href;
        link.title = (i ? 'Pr\u00f3ximo: ' : 'Anterior: ') + destination.name;
        link.setAttribute('aria-label', link.title);
      } else {
        link.setAttribute('aria-disabled', 'true');
        link.setAttribute('aria-label', 'Sem destino nesta dire\u00e7\u00e3o');
      }
      block.append(link);
    });
    return block;
  }
  const destination = i => countries[i] ? {name: countries[i].name, path: countries[i].cities[0].path} : null;
  nav.append(group('Cidade', country.cities[si].name, country.cities[si-1], country.cities[si+1]), group('Pa\u00eds', country.name, destination(ci-1), destination(ci+1)));
  const hero = document.querySelector('.hero');
  if (hero) hero.after(nav);
})();