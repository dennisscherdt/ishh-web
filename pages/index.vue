<template>
	<div class="space-y-8">
		<SongCard
			:image="oldSoulJointsCover"
			image-alt="Old Soul Joints"
			title="Old Soul Joints"
			release-date="June 20th, 2025"
			:links="{
				apple: '#',
				spotify: '#',
				youtube: '#',
				soundcloud: '#',
				bandcamp: '#',
			}"
			class="mx-auto"
		/>
		<p class="text-center text-lg text-stone-100">Just getting started... more to come soon.</p>
	</div>
</template>

<script setup lang="ts">
import SongCard from '~/components/song/SongCard.vue';
import oldSoulJointsCover from '~/public/images/covers/old-soul-joints-ishh-cover.jpg';

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
