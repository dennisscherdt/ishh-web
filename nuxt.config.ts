// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	css: ['~/assets/css/main.css'],
	devtools: { enabled: true },

	modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/scripts', '@nuxt/test-utils'],

	typescript: {
		typeCheck: true,
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
