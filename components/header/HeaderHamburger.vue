<template>
	<button
		class="flex flex-col items-center gap-2"
		aria-label="Toggle menu"
		:aria-expanded="isOpen"
		aria-controls="main-menu"
		type="button"
		@click="$emit('click')"
	>
		<span v-for="i in 2" :key="i" class="h-1 w-8 rounded-full bg-stone-200 lg:h-0.5"></span>
	</button>
</template>

<script setup lang="ts">
defineEmits<{ (e: 'click'): void }>();
defineProps<{
	isOpen: boolean;
}>();
</script>
