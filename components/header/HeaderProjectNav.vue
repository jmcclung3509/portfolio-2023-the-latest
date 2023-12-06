<template>
	<header class="main flex w-full h-28 bg-light-peach">
		<div
			class="container mx-auto flex justify-between items-center z-10">
			<div class="left flex items-center justify-center gap-4">
				<Nuxt-Link
					to="/"
					class="font-thin pt-4 hover:text-orange">
					Jessica Turner
				</Nuxt-Link>
			</div>
			<template v-if="!['sm', 'md'].includes(size)">
				<div class="right flex items-center justify-center gap-20">
					<Nuxt-link
						:to="props.projectLinkPrev"
						v-show="props.projectTitlePrev"
						class="prev text-default-dark font-thin animate-arrow-prev hover:text-orange orange">
						{{ props.projectTitlePrev }}
					</Nuxt-link>
					<Nuxt-link
						:to="props.projectLinkNext"
						v-show="props.projectTitleNext"
						class="next text-default-dark hover:text-orange orange font-thin animate-arrow">
						{{ props.projectTitleNext }}
					</Nuxt-link>
				</div>
			</template>
			<template v-else>
				<div class="right flex items-center justify-center gap-4">
					<Nuxt-link
						:to="props.projectLinkPrev"
						v-show="props.projectTitlePrev"
						class="prev text-default-dark font-thin animate-arrow-prev">
					</Nuxt-link>
					<Nuxt-link
						:to="props.projectLinkNext"
						v-show="props.projectTitleNext"
						class="next text-default-dark font-thin animate-arrow">
					</Nuxt-link>
				</div>
			</template>
		</div>
	</header>
</template>
<script setup>
const size = useScreenSize().size;
console.log(size);

const props = defineProps({
	projectLinkNext: String,
	projectTitleNext: String,
	projectLinkPrev: String,
	projectTitlePrev: String,
});
</script>
