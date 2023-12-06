<template>
	<section class="section info bg-default-dark dark py-36 space-y-4 h-[100vh]">

		<SkillMain />

	</section>
	<section class="absolute bottom-0 left-0 right-0">
		<div class="flex justify-center pt-4 container mx-auto">
			<p class="text-[12px] caps text-extra-light-purple font-light text-center">
				Designed & developed by me using Adobe Illustrator,
				Figma, Vue, Nuxt and Tailwind 💜 2023
			</p>
		</div>
	</section>

</template>

<script setup>
const route = useRoute();
const size = useScreenSize().size;
const { isMobile } = useScreenSize();
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";


</style>