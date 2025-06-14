<template>
	<AppHeader />
	<main class="min-h-screen bg-stone-900 p-4">
		<NuxtPage />
	</main>
	<AppFooter />
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
</script>
