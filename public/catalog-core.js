/* Shared catalog matching for the browser and build-time category pages. */
(() => {
  const normalize = value => String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const words = value => String(value || '').toLowerCase().replace(/zero[ -]?turns?/g, 'zeroturn').replace(/stand[ -]?on/g, 'standon').replace(/mowers/g, 'mower').replace(/tractors/g, 'tractor').replace(/\blawn\s+(?=mower)/g, '').replace(/[^a-z0-9.]+/g, ' ').trim().split(/\s+/).filter(Boolean);
  const categories = [
    { key: 'Mowers', slug: 'mowers', label: 'Lawn mowers', description: 'Zero-turn, riding, stand-on and walk-behind mowers. Find a machine for the way you work.' },
    { key: 'Zero-Turn Mowers', slug: 'zero-turn-mowers', label: 'Zero-turn mowers', description: 'Explore zero-turn mowers by brand, deck size and residential or commercial use.' },
    { key: 'Riding Mowers', slug: 'riding-mowers', label: 'Riding mowers', description: 'Browse riding mowers and lawn tractors, with specifications and original model photography.' },
    { key: 'Stand On Mowers', slug: 'stand-on-mowers', label: 'Stand-on mowers', description: 'Explore stand-on equipment for your next workday. Compare models side by side.' },
    { key: 'Walk-Behind', slug: 'walk-behind-mowers', label: 'Walk-behind mowers', description: 'Walk-behind and push mowers, with details to help you narrow your choice.' },
    { key: 'Tractors', slug: 'tractors', label: 'Tractors', description: 'Explore compact tractors and available configurations. Confirm attachments and availability with our team.' },
    { key: 'Ground', slug: 'mulch-soil-stone', label: 'Mulch, soil & stone', description: 'The finishing touches for your garden, from bagged mulch to bulk landscape materials.' }
  ].map(c => ({...c, path: `/shop/${c.slug}/`}));
  function inCategory(product, category) {
    const key = normalize(category), actual = normalize(product.category);
    if (!key) return true;
    if (['mowers', 'mower', 'lawnmowers', 'lawnmower'].includes(key)) return /mower|walkbehind/.test(actual);
    if (key === 'ground') return /mulch|soil|rock/.test(actual);
    if (key === 'walkbehind') return actual === 'walkbehind' || actual === 'pushmowers';
    const matched = categories.find(c => [normalize(c.key), normalize(c.slug), normalize(c.label)].some(x => x === key || (key.length > 3 && x.startsWith(key))));
    return actual === normalize(matched?.key || category);
  }
  function matchesText(product, query) {
    const searchable = words([product.title, product.brand, product.category, ...Object.values(product.specs || {})].join(' '));
    return words(query).every(word => searchable.some(candidate => candidate.includes(word)));
  }
  function filterProducts(products, values = {}) {
    const spec = (p, pattern) => Object.entries(p.specs || {}).filter(([key]) => pattern.test(key)).map(([,value]) => String(value));
    const numericSpec = (p, pattern, query) => !query || spec(p, pattern).some(value => (value.match(/\d+(?:\.\d+)?/g) || []).some(number => Number(number) === Number(query)));
    return products.filter(p => matchesText(p, values.q) && inCategory(p, values.category)
      && (!values.brand || normalize(p.brand) === normalize(values.brand))
      && (!values.use || spec(p, /commercial|residential|use/i).some(value => normalize(value).includes(normalize(values.use))))
      && numericSpec(p, /deck|cutting width/i, values.deck)
      && numericSpec(p, /horsepower|^hp$/i, values.hp)
      && (!values.series || spec(p, /series/i).some(value => normalize(value).includes(normalize(values.series)))));
  }
  function keySpecs(p) {
    const specs = p.specs || {};
    return [
      specs['Deck Size'] ? ['Deck', specs['Deck Size']] : null,
      specs['Engine Brand'] ? ['Engine', specs['Engine Brand']] : null,
      specs.Horsepower ? ['Power', `${specs.Horsepower} HP`] : null
    ].filter(Boolean);
  }
  globalThis.YardStopCatalog = { categories, normalize, inCategory, matchesText, filterProducts, keySpecs };
})();
