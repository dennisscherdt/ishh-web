<template>
	<Transition name="slide" mode="out-in">
		<div v-if="isOpen" class="fixed top-0 right-0 z-50 h-screen w-80 bg-stone-900 shadow-lg">
			<div class="flex h-24 items-center justify-end p-4">
				<button class="text-stone-200 hover:text-stone-400" @click="closeMenu">
					<span class="sr-only">Close menu</span>
					<svg
						class="size-8"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<nav class="p-4">
				<ul class="flex flex-col gap-4">
					<li v-for="item in navItems" :key="item.label">
						<NuxtLink
							:to="item.to"
							class="block text-lg text-stone-200 hover:text-stone-400"
							:class="{ 'text-stone-400': $route.path === item.to }"
							@click="closeMenu"
						>
							{{ item.label }}
						</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
	</Transition>
</template>

<script setup lang="ts">
interface NavItem {
	label: string;
	to: string;
}

const isOpen = defineModel<boolean>('isOpen', { required: true });

function closeMenu() {
	isOpen.value = false;
}

const navItems: NavItem[] = [
	{
		label: 'Home',
		to: '/',
	},
	{
		label: 'Contact',
		to: '/contact',
	},
];
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
	transition: transform 200ms ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
	transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
	transform: translateX(0);
}
</style>
