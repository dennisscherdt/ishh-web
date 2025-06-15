<template>
	<Transition name="slide" mode="out-in">
		<nav
			v-show="isOpen"
			id="main-menu"
			class="fixed top-0 right-0 h-screen w-80 bg-stone-900 shadow-lg"
			aria-label="Mobile navigation"
			role="navigation"
			:aria-hidden="!isOpen"
		>
			<div class="flex h-24 items-center justify-end p-4">
				<button
					ref="closeButton"
					class="cursor-pointer rounded p-2 text-stone-100 hover:text-stone-400 focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-stone-900 focus:outline-none"
					aria-label="Close navigation menu"
					@click="closeMenu"
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="size-8"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
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
			<ul class="flex flex-col gap-2 p-4" role="menu">
				<li v-for="item in navItems" :key="item.label" role="none">
					<NuxtLink
						:to="item.to"
						class="block rounded px-2 py-3 text-lg text-stone-100 hover:text-stone-400 focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-stone-900 focus:outline-none"
						:class="{ 'underline underline-offset-8': $route.path === item.to }"
						role="menuitem"
						:aria-current="$route.path === item.to ? 'page' : undefined"
						@click="closeMenu"
					>
						{{ item.label }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</Transition>
</template>

<script setup lang="ts">
interface NavItem {
	label: string;
	to: string;
}

const isOpen = defineModel<boolean>('isOpen', { required: true });
const closeButton = ref<HTMLButtonElement | null>(null);

// Focus management
watch(isOpen, (value) => {
	if (value) {
		document.body.style.overflow = 'hidden';
		// Focus the close button when menu opens
		nextTick(() => {
			closeButton.value?.focus();
		});
	} else {
		document.body.style.overflow = '';
	}
});

onUnmounted(() => {
	document.body.style.overflow = '';
});

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
