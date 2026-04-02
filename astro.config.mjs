// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mysterystore1.github.io',
  base: '/kuwara-dental/',
  vite: {
    plugins: [tailwindcss()]
  }
});