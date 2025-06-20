<template>
	<div class="space-y-8">
		<SongCard
			:image="oldSoulJointsCover"
			:image-mobile="oldSoulJointsCoverMobile"
			image-alt="Old Soul Joints"
			title="Old Soul Joints"
			:release-date="{
				month: 6,
				day: 20,
				year: 2025,
			}"
			:links="{
				apple: 'https://music.apple.com/us/album/old-soul-joints/1819913860?i=1819913861',
				spotify:
					'https://open.spotify.com/track/49iYqpKai2iYPHrkYfrYd8?si=41de13f7ce1a40a5',
				youtube: 'https://youtu.be/EgFy80yAwtc?si=LOHJiZZ5b2PXmQbi',
				soundcloud: 'https://soundcloud.com/ishhhhhh/old-soul-joints',
				bandcamp: 'https://ishhhh.bandcamp.com/track/old-soul-joints',
			}"
			class="mx-auto"
		/>
		<p class="text-center text-lg text-stone-100">Just getting started... more to come soon.</p>
	</div>
</template>

<script setup lang="ts">
import SongCard from '~/components/song/SongCard.vue';
import oldSoulJointsCover from '~/public/images/covers/old-soul-joints-ishh-cover.jpg';
import oldSoulJointsCoverMobile from '~/public/images/covers/old-soul-joints-ishh-cover-mobile.jpg';

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
