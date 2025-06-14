<template>
	<div id="app">
		<AppHeader />
		<main class="min-h-screen p-4">
			<NuxtPage />
		</main>
		<AppFooter />
	</div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
</script>

<style scoped>
#app {
	position: relative;
}

#app::before {
	content: '';
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url('~/public/images/abstract-bg-1.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	filter: brightness(20%) grayscale(100%);
	z-index: -1;
}
</style>
