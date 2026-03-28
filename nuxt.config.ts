// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					name: 'og:site_name',
					content: 'Ishh Music',
					tagPriority: 11,
				},
				{
					name: 'og:image',
					content: '/og-image.jpg',
					tagPriority: 11,
				},
				{
					name: 'apple-mobile-web-app-title',
					content: 'Ishh',
				},
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
				{ rel: 'manifest', href: '/site.webmanifest' },
			],
		},
	},

	compatibilityDate: '2026-03-27',
	css: ['~/assets/css/main.css'],
	devtools: { enabled: true },

	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/scripts',
		'@nuxt/test-utils',
		'@nuxtjs/sitemap',
	],

	nitro: {
		routeRules: { '/**': { prerender: true } },
	},

	site: {
		url: 'https://ishhmusic.com',
		name: 'Ishh Music',
	},

	typescript: {
		typeCheck: true,
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
