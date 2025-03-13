import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postcss from 'rollup-plugin-postcss';
import purgecss from '@fullhuman/postcss-purgecss';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        dead_code: true,
        unused: true,
      },
      mangle: {
        properties: {
          regex: /^_/,
        },
      },
      format: {
        beautify: false,
        comments: false,
      },
    },
  },
});

