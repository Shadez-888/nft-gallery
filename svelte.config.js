import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
// Check if using custom domain via environment variable
const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: false
		}),
		paths: {
			// Use empty base for custom domain or development, '/nft-gallery' for GitHub Pages
			base: dev || useCustomDomain ? '' : '/nft-gallery'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Updated to match the correct image path
				if (path.includes('/nft/image/') || 
					path.includes('favicon.') || 
					path.includes('apple-touch-icon')) {
					return;
				}
				// Otherwise, fail the build
				throw new Error(message);
			}
		}
	},
	preprocess: vitePreprocess()
};

export default config;
