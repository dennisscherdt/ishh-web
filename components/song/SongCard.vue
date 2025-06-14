<template>
	<section
		:class="[
			'flex flex-col items-center justify-center gap-4 rounded-xl p-4',
			'bg-stone-600/40 backdrop-blur-xs',
		]"
	>
		<img :src="image" :alt="imageAlt" width="900" height="900" class="rounded-lg" />
		<div>
			<p class="text-2xl font-bold text-stone-200">{{ title }}</p>
			<p class="text-xs text-stone-400">Release date: {{ releaseDate }}</p>
		</div>
		<SongLinks :links />
	</section>
</template>

<script setup lang="ts">
import SongLinks from './SongLinks.vue';
import type { SongLinks as SongLinksProps } from './SongLinks.vue';

interface Song {
	image: string;
	imageAlt: string;
	title: string;
	releaseDate: string;
	links: SongLinksProps;
}
defineProps<Song>();
</script>
