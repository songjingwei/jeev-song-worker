import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import ssrHotReload from 'vite-plugin-ssr-hot-reload'
import path from 'path'

export default defineConfig({
  plugins: [ssrHotReload(), cloudflare()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	}
})
