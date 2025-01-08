import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

const staticRoutes = [
  '/ourstory',
  '/contact',
  '/terms',
];

const types = ["candle", "tealight", "giftset"];

const dynamicRoutes = types.map(type => `/shop/${type}`);


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://yourwebsite.com', // Replace with your actual domain
      dynamicRoutes: [...staticRoutes, ...dynamicRoutes], // Add the dynamic routes function here
      exclude: ['/cart', '/cancel', '/success'], // Add any routes you want to exclude
      generateRobotsTxt: true, // Automatically generates robots.txt
      readable: true,
      robots: [
        {
          userAgent: '*',
          allow: staticRoutes,
          disallow: ['/cart', '/cancel', '/success'], // Customize your disallowed paths
        },
      ],
    }),
  ],
});
