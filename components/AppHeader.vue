<template>
	<header class="relative z-50 flex h-24 bg-stone-950/60 p-4 backdrop-blur-sm">
		<div class="mx-auto flex w-full max-w-7xl items-center justify-between">
			<NuxtLink to="/" aria-label="Go to homepage">
				<HeaderLogo class="size-14 text-stone-200" />
			</NuxtLink>
			<HeaderHamburger :is-open="isNavOpen" @click="toggleNav" />
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

function toggleNav() {
	isNavOpen.value = !isNavOpen.value;
}
</script>
