import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mrswadhinhowlader.github.io',
  base: '/swadhin-digital-hub',
  integrations: [
    react(), 
    tailwind()
  ],
});
