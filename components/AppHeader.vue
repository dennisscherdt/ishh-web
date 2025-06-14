<template>
	<header class="flex h-24 items-center justify-between bg-stone-900 p-4">
		<HeaderLogo class="size-14 text-stone-200" />
		<HeaderHamburger @click="isNavOpen = true" />
		<HeaderNavMobile v-model:is-open="isNavOpen" />
	</header>
</template>

<script setup lang="ts">
import HeaderLogo from '~/components/header/HeaderLogo.vue';
import HeaderHamburger from '~/components/header/HeaderHamburger.vue';
import HeaderNavMobile from '~/components/header/HeaderNavMobile.vue';

const isNavOpen = ref(false);
</script>
