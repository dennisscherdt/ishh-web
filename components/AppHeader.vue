<template>
	<header class="sticky top-0 z-50 flex h-24 bg-stone-950/60 p-4 backdrop-blur-sm" role="banner">
		<div class="mx-auto flex w-full max-w-7xl items-center justify-between">
			<NuxtLink to="/" aria-label="Go to homepage" class="rounded">
				<HeaderLogo class="size-14 text-stone-100" />
			</NuxtLink>
			<HeaderHamburger
				:is-open="isNavOpen"
				@click="toggleNav"
				@keydown.esc="isNavOpen = false"
			/>
			<HeaderNavMobile v-model:is-open="isNavOpen" />
		</div>
	</header>
</template>

<script setup lang="ts">
import HeaderLogo from '~/components/header/HeaderLogo.vue';
import HeaderHamburger from '~/components/header/HeaderHamburger.vue';
import HeaderNavMobile from '~/components/header/HeaderNavMobile.vue';

defineEmits<{ (e: 'toggleNav'): void }>();

const isNavOpen = ref(false);

// Close menu when escape key is pressed
onMounted(() => {
	const handleEscape = (e: KeyboardEvent) => {
		if (e.key === 'Escape' && isNavOpen.value) {
			isNavOpen.value = false;
		}
	};
	window.addEventListener('keydown', handleEscape);
	onUnmounted(() => window.removeEventListener('keydown', handleEscape));
});

function toggleNav() {
	isNavOpen.value = !isNavOpen.value;
}
</script>
