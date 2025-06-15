<template>
	<article
		:class="[
			'flex max-w-sm flex-col items-center justify-center gap-4 rounded-xl p-4',
			'bg-stone-600/40 backdrop-blur-xs',
		]"
		role="article"
	>
		<img
			:src="image"
			:alt="imageAlt"
			width="900"
			height="900"
			fetchpriority="high"
			class="rounded-lg"
			:aria-labelledby="titleId"
		/>
		<div>
			<h2 :id="titleId" class="text-2xl font-bold text-stone-100">{{ title }}</h2>
			<p class="text-xs text-stone-400">
				<span class="sr-only">Release date:</span>
				<time :datetime="formatDateForDateTime(releaseDate)">{{ releaseDate }}</time>
			</p>
		</div>
		<SongLinks :links="links" :title="title" />
	</article>
</template>

<script setup lang="ts">
import SongLinks from './SongLinks.vue';
import type { SongLinks as SongLinksProps } from './SongLinks.vue';
import { computed } from 'vue';

interface Song {
	image: string;
	imageAlt: string;
	title: string;
	releaseDate: string;
	links: SongLinksProps;
}

const props = defineProps<Song>();

// Generate a unique ID for the title
const titleId = computed(() => `song-title-${props.title.toLowerCase().replace(/\s+/g, '-')}`);

// Format the date for the datetime attribute
function formatDateForDateTime(dateStr: string) {
	// Convert date like "June 20th, 2025" to "2025-06-20"
	const months: Record<string, string> = {
		January: '01',
		February: '02',
		March: '03',
		April: '04',
		May: '05',
		June: '06',
		July: '07',
		August: '08',
		September: '09',
		October: '10',
		November: '11',
		December: '12',
	};

	const parts = dateStr.match(/(\w+)\s+(\d+)\w+,\s+(\d{4})/);
	if (!parts) return '';

	const [, month, day, year] = parts;
	const monthNum = months[month as keyof typeof months];
	const dayPadded = day.padStart(2, '0');

	return `${year}-${monthNum}-${dayPadded}`;
}
</script>
