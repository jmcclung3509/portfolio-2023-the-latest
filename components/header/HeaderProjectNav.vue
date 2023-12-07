<template>
	<header class="project main flex  w-full h-10 bg-transparent ">


				<div class=" flex justify-between w-full  px-10 lg:px-64">
<div class="">
					<Nuxt-link
						:to="props.projectLinkPrev"
						v-show="props.projectTitlePrev"
						class="prev  text-dark-purple font-light animate-arrow-prev hover:text-orange orange">
						{{ props.projectTitlePrev }}
					</Nuxt-link>
					</div>
					<div>
					<Nuxt-link
						:to="props.projectLinkNext"
						v-show="props.projectTitleNext"
						class="next text-dark-purple hover:text-orange orange font-light animate-arrow"
					>
						{{ props.projectTitleNext }}
					</Nuxt-link>
				</div>
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
