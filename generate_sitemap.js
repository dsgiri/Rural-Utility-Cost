import fs from 'fs';
import path from 'path';

// Current directory context in modern ESM environments / commonjs compat
const rootDir = process.cwd();
const appPath = path.join(rootDir, 'src', 'App.tsx');
const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');

const appContent = fs.readFileSync(appPath, 'utf8');

const regex = /<Route\s+path="(\/[^"]*)"\s+element=/g;
let match;
const routes = [];

while ((match = regex.exec(appContent)) !== null) {
  routes.push(match[1]);
}

let sitemapStr = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemapStr += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

const BASE_URL = 'https://ruralutilitycost.com';

for (const route of routes) {
  let url = BASE_URL + route;
  if (url.endsWith('/')) {
    url = url.slice(0, -1);
    if (!url) url = BASE_URL + '/'; // root
  }
  if (url === BASE_URL) url = BASE_URL + '/';
  
  let changefreq = 'monthly';
  let priority = '0.8';
  
  if (route === '/') {
    changefreq = 'weekly';
    priority = '1.0';
  } else if (['/privacy-policy', '/terms-of-use', '/disclaimer', '/cookie-policy', '/contact', '/about'].includes(route)) {
    changefreq = 'yearly';
    priority = '0.5';
  }

  sitemapStr += '  <url>\n';
  sitemapStr += `    <loc>${url}</loc>\n`;
  sitemapStr += `    <changefreq>${changefreq}</changefreq>\n`;
  sitemapStr += `    <priority>${priority}</priority>\n`;
  sitemapStr += '  </url>\n';
}

sitemapStr += '</urlset>\n';

fs.writeFileSync(sitemapPath, sitemapStr);
console.log('Sitemap generated!');
