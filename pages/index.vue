<template>
	<div>
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
		/>
	</div>
</template>

<script setup lang="ts">
import SongCard from '~/components/song/SongCard.vue';
import oldSoulJointsCover from '~/public/images/covers/old-soul-joints-ishh-cover.jpg';

useHead({
	title: 'Ishh Music',
});
</script>
