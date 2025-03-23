import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

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
			base: dev ? '' : '/nft-gallery'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore missing images, favicon, and apple touch icon
				if (path.includes('/images/') || 
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
