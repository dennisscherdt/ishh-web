<template>
	<AppHeader />
	<main class="min-h-screen">
		<NuxtPage />
	</main>
	<AppFooter />
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
</script>
