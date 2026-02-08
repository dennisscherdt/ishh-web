<template>
	<div class="space-y-8">
		<SongCard
			v-for="song in songs"
			:key="song.title"
			:image="song.image"
			:image-mobile="song.imageMobile"
			:image-alt="song.title"
			:title="song.title"
			:release-date="song.releaseDate"
			:links="song.links"
			class="mx-auto"
		/>
		<p class="text-center text-lg text-stone-100">Just getting started... more to come soon.</p>
	</div>
</template>

<script setup lang="ts">
import SongCard from '~/components/song/SongCard.vue';
import type { Song } from '~/components/song/SongCard.vue';
import oldSoulJointsCover from '~/public/images/covers/old-soul-joints-ishh-cover.jpg';
import oldSoulJointsCoverMobile from '~/public/images/covers/old-soul-joints-ishh-cover-mobile.jpg';
import swimCover from '~/public/images/covers/swim-ishh-cover.jpg';
import swimCoverMobile from '~/public/images/covers/swim-ishh-cover-mobile.jpg';

const songs: Song[] = [
	{
		title: 'Swim',
		image: swimCover,
		imageMobile: swimCoverMobile,
		imageAlt: 'Swim cover',
		releaseDate: {
			month: 11,
			day: 28,
			year: 2025,
		},
		links: {
			apple: 'https://music.apple.com/us/album/swim-single/1852876810',
			spotify: 'https://open.spotify.com/album/2QbdWn3Xf4vPM1NCmkj5cV',
			youtube: 'https://youtu.be/_p24n7-UnV8?si=eWpdGG7HNNVokeGe',
			soundcloud: 'https://soundcloud.com/ishhhhhh/swim',
			bandcamp: 'https://ishhhh.bandcamp.com/track/swim',
		},
	},
	{
		title: 'Old Soul Joints',
		image: oldSoulJointsCover,
		imageMobile: oldSoulJointsCoverMobile,
		imageAlt: 'Old Soul Joints cover',
		releaseDate: {
			month: 6,
			day: 20,
			year: 2025,
		},
		links: {
			apple: 'https://music.apple.com/us/album/old-soul-joints/1819913860?i=1819913861',
			spotify: 'https://open.spotify.com/track/49iYqpKai2iYPHrkYfrYd8?si=41de13f7ce1a40a5',
			youtube: 'https://youtu.be/EgFy80yAwtc?si=LOHJiZZ5b2PXmQbi',
			soundcloud: 'https://soundcloud.com/ishhhhhh/old-soul-joints',
			bandcamp: 'https://ishhhh.bandcamp.com/track/old-soul-joints',
		},
	},
];

useHead({
	title: 'Ishh Music',
	meta: [
		{
			name: 'description',
			content: 'Electronic bass music',
		},
	],
});
</script>
