import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';
import { blogs } from '../src/data/blogData.js';

// Setup for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://heartstringsbraces.com';
const PAGES_DIR = path.join(__dirname, '../src/pages');
const PUBLIC_DIR = path.join(__dirname, '../public');

async function generateSitemap() {
    console.log('🗺️  Generating Sitemap...');

    // 1. Static Pages from src/pages
    // Exclude special files like 404, internal components if any
    const pageFiles = await glob('**/*.jsx', { cwd: PAGES_DIR });

    // Convert filenames to routes
    const staticRoutes = pageFiles
        .map(file => {
            const name = path.basename(file, '.jsx');
            if (name === 'Home') return '/';
            if (name === 'NotFound' || name === 'BlogPost') return null; // Exclude special pages
            return `/${name.toLowerCase()}`;
        })
        .filter(Boolean);

    // 2. Dynamic Blog Routes
    const blogRoutes = blogs.map(post => `/blog/${post.id}`);

    // Combine all routes
    const allRoutes = [...staticRoutes, ...blogRoutes];

    // Generate XML structure
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Ensure public dir exists
    if (!fs.existsSync(PUBLIC_DIR)) {
        fs.mkdirSync(PUBLIC_DIR);
    }

    // Write file
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapContent);
    console.log(`✅ Sitemap generated with ${allRoutes.length} URLs at public/sitemap.xml`);
}

generateSitemap().catch(console.error);
