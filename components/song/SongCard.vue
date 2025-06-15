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
			<p class="text-center text-xs text-stone-400">
				<span class="sr-only">Release date:</span>
				<time :datetime="formatDateForDateTime(releaseDate)">{{
					formatDateForDisplay(releaseDate)
				}}</time>
			</p>
		</div>
		<SongLinks :links="links" :title="title" />
	</article>
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import SongLinks from './SongLinks.vue';
import type { SongLinks as SongLinksProps } from './SongLinks.vue';
import { computed } from 'vue';

interface ReleaseDate {
	month: number;
	day: number;
	year: number;
}

interface Song {
	image: string;
	imageAlt: string;
	title: string;
	releaseDate: ReleaseDate;
	links: SongLinksProps;
}

const props = defineProps<Song>();

const titleId = computed(() => `song-title-${props.title.toLowerCase().replace(/\s+/g, '-')}`);

function formatDateForDateTime(date: ReleaseDate): string {
	const month = date.month.toString().padStart(2, '0');
	const day = date.day.toString().padStart(2, '0');
	return `${date.year}-${month}-${day}`;
}

function formatDateForDisplay(date: ReleaseDate): string {
	const dateObj = new Date(date.year, date.month - 1, date.day);
	return format(dateObj, 'MMMM do, yyyy');
}
</script>
