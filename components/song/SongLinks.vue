<template>
	<div>
		<a :href="links.appleMusic">Apple Music</a>
		<a :href="links.spotify">Spotify</a>
		<a :href="links.youtube">YouTube</a>
		<a :href="links.soundcloud">SoundCloud</a>
		<a :href="links.bandcamp">Bandcamp</a>
	</div>
</template>

<script setup lang="ts">
export interface SongLinks {
	appleMusic: string;
	spotify: string;
	youtube: string;
	soundcloud: string;
	bandcamp: string;
}
defineProps<{ links: SongLinks }>();
</script>
