<template>
	<div class="flex gap-4">
		<a
			v-for="(link, key) in links"
			:key="key"
			:href="link"
			:aria-label="`Listen on ${key.charAt(0).toUpperCase() + key.slice(1)}`"
			target="_blank"
		>
			<component
				:is="iconMap[key]"
				class="size-12 rounded-full border border-stone-200 p-1.5 text-stone-100"
			/>
		</a>
	</div>
</template>

<script setup lang="ts">
import IconApple from '~/components/icons/IconApple.vue';
import IconSpotify from '~/components/icons/IconSpotify.vue';
import IconBandcamp from '~/components/icons/IconBandcamp.vue';
import IconYoutube from '~/components/icons/IconYoutube.vue';
import IconSoundcloud from '~/components/icons/IconSoundcloud.vue';

export interface SongLinks {
	apple: string;
	spotify: string;
	youtube: string;
	soundcloud: string;
	bandcamp: string;
}

const iconMap: Record<string, Component> = {
	apple: IconApple,
	spotify: IconSpotify,
	youtube: IconYoutube,
	soundcloud: IconSoundcloud,
	bandcamp: IconBandcamp,
};
defineProps<{ links: SongLinks }>();
</script>
