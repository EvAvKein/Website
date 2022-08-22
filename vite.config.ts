import {sveltekit} from '@sveltejs/kit/vite';

const config:import('vite').UserConfig = {
  plugins: [sveltekit()],
  server: {port: 3000},
  define: {"process.env": {}},
};

export default config;