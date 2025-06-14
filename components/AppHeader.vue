<template>
	<header
		class="relative z-50 flex h-24 items-center justify-between bg-stone-950/60 p-4 backdrop-blur-sm"
	>
		<HeaderLogo class="size-14 text-stone-200" />
		<HeaderHamburger @click="toggleNav" />
		<HeaderNavMobile v-model:is-open="isNavOpen" />
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
