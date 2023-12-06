<template>
	<NuxtLayout name="project">
		<template #header>
			<HeaderProjectNav
				projectLinkPrev="/projects/quizzical"
				projectTitlePrev="Quizzical"></HeaderProjectNav>
		</template>
		<div class="container mx-auto space-y-4 flex flex-col mt-36">
			<div class="flex flex-col space-y-4 items-center justify-center pb-14">
				<h2 class="text-orange text-2xl flex justify-center">
					Portfolio
				</h2>
				<p class="w-full lg:w-[80%] mx-auto">
				I strive to unleash my creativity when designing and developing my personal
					website, which provides me with the opportunity to explore
					new ideas. Sometimes they succeed, and sometimes they don't,
					but it always a valuable learning experience.
				</p>
			</div>

			<div class="carousel-container pt-14 lg:pt-0">
				<CarouselImageText
					:images="portfolioImages"
					v-slot="slotProps">
					<div
					class="text-left space-y-4 lg:w-[80%] lg:mr-auto"
						v-if="slotProps.realIndex === 0">
						<p>
							The previous version of my portfolio was constructed using Vue, Nuxt,
							and Tailwind. I reused many of the elements of my previous website, but updated the hero image with new animation, and restructured the layout for a more user-friendly experience.
						</p>
					</div>
					<div
					class="text-left space-y-4 lg:w-[80%] lg:mr-auto"
						v-if="slotProps.realIndex === 1">
						<p>
							The portfolio I created in early 2023, was constructed using Vue, Nuxt,
							and Tailwind. The design process began in Figma, and
							I crafted vector images using Adobe Illustrator.
							Building this portfolio was  enjoyable and educational experience.
							It marked my first venture into vector image
							creation. To infuse life into these vector images,
							I converted them into Vue components, enabling
							animations. My primary goal was to achieve a clean
							and user-friendly design, presenting information in
							an organized, easily navigable format.
						</p>
						<div class="button-container flex flex-row gap-7 pt-7">
							<SvgButton
								label="Website"
								link="https://portfolio-2023-v3.vercel.app/" />

						</div>
					</div>
					<div
						class="text-left space-y-4 lg:w-[80%] lg:mr-auto"
						v-if="slotProps.realIndex === 2">
						<p>
							My first website, dated 2022, was designed in
							Figma and constructed with Vanilla JavaScript and
							Bootstrap. I embraced a clean and minimalist design
							approach. This project represented one of my initial
							explorations into animation and advanced CSS
							techniques, which involved employing different
							keyframes to animate the hero text upon page load
							and creating captivating hover effects for the
							buttons.
						</p>
						<div class="button-container flex flex-row gap-7 pt-7">
							<SvgButton
								label="Website"
								link="https://portfolio-main-blond.vercel.app/" />

						</div>
					</div>
				</CarouselImageText>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
definePageMeta({
	layout: false,
});

const portfolioImages = [
{
		src: "/static/images/pages/project-pages/portfolio-v3-recording.mp4",
		type: "video/mp4",
		alt: "Portfolio v2",
	},
	{
		src: "/static/images/pages/project-pages/portfolio-v2-recording.mp4",
		type: "video/mp4",
		alt: "Portfolio v2",
	},

	{
		src: "/static/images/pages/project-pages/portfolio-v1-recording.mp4",
		type: "video/mp4",
		alt: "Portfolio v1",
	},
];
</script>
<style lang="scss">
h3{

}
</style>