import assert from 'node:assert/strict';
import fs from 'node:fs';
import '../public/catalog-core.js';
const raw=JSON.parse(fs.readFileSync(new URL('../data/catalog.json',import.meta.url)));
const products=raw.products || raw;
const {filterProducts,inCategory,matchesText,categories}=globalThis.YardStopCatalog;
assert.equal(filterProducts(products,{category:'Mowers'}).length,350);
assert.equal(filterProducts(products,{category:'Zero-Turn Mowers'}).length,217);
assert.equal(filterProducts(products,{category:'Zero-Turn'}).length,217,'Existing category links must keep working');
assert.equal(filterProducts(products,{category:'Riding'}).length,11);
assert.equal(filterProducts(products,{category:'Walk-Behind'}).length,39,'Includes push mowers');
assert.equal(filterProducts(products,{category:'Ground'}).length,22);
assert.equal(filterProducts(products,{category:'Tractors'}).length,27);
assert.equal(filterProducts(products,{q:'944470'}).length,1);
assert.ok(filterProducts(products,{q:'lawn mowers'}).length>300,'Everyday plural search finds lawn mowers');
assert.equal(filterProducts(products,{q:'zero turn mowers'}).length,filterProducts(products,{q:'zero-turn mower'}).length);
assert.ok(filterProducts(products,{category:'Mowers',brand:'Hustler'}).every(p=>p.brand==='Hustler'&&inCategory(p,'Mowers')));
assert.ok(matchesText({title:'Hustler Raptor X 42″ Kawasaki Zero Turn Mower'},'raptor 42'));
assert.ok(!matchesText({title:'Bagged red mulch'},'lawn mowers'));
const fixtures=[{title:'Mower A',category:'Zero-Turn Mowers',specs:{'Deck Size':'54 inches',Horsepower:'25'}},{title:'Mower B',category:'Zero-Turn Mowers',specs:{'Deck Size':'54.5 inches',Horsepower:'125'}}];
assert.deepEqual(filterProducts(fixtures,{deck:'54',hp:'25'}).map(p=>p.title),['Mower A'],'Numeric filters must not match partial numbers');
assert.equal(filterProducts(products,{category:'Tractors',brand:'Hustler'}).length,0);
for(const category of categories){const html=fs.readFileSync(new URL(`../dist${category.path}index.html`,import.meta.url),'utf8');assert.ok(html.includes(`data-default-category="${category.key.replaceAll('&','&amp;')}"`));assert.ok(html.includes('class="product-card"'),'Category must include products before JavaScript loads');}
const oldRoutes=JSON.parse(fs.readFileSync(new URL('../data/catalog.json',import.meta.url)));
for(const product of oldRoutes.products || oldRoutes)assert.ok(fs.existsSync(new URL(`../dist${product.path}index.html`,import.meta.url)));
for(const product of products.filter(p=>inCategory(p,'Ground')||p.category==='UTVs')){
  const html=fs.readFileSync(new URL(`../dist${product.path}index.html`,import.meta.url),'utf8');
  const breadcrumb=html.match(/<nav class="breadcrumbs[\s\S]*?<\/nav>/)?.[0]||'';
  assert.ok(!breadcrumb.includes('>Lawn mowers<'),'Materials and utility vehicles must not be labeled lawn mowers');
  if(inCategory(product,'Ground'))assert.ok(breadcrumb.includes('/shop/mulch-soil-stone/'));
}
console.log('Catalog checks passed: category routes, legacy links, natural-language search, combined filters, exact numeric matching, and all 405 product routes.');
