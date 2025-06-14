<template>
	<header class="flex h-24 items-center justify-between bg-stone-950/60 p-4 backdrop-blur-sm">
		<HeaderLogo class="size-14 text-stone-200" />
		<HeaderHamburger @click="$emit('toggleNav')" />
	</header>
</template>

<script setup lang="ts">
import HeaderLogo from '~/components/header/HeaderLogo.vue';
import HeaderHamburger from '~/components/header/HeaderHamburger.vue';

defineEmits<{ (e: 'toggleNav'): void }>();
</script>
