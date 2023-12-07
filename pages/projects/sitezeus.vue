<template>
	<NuxtLayout name="project">
		<template #header>
			<HeaderProjectNav
				projectLinkNext="/projects/insites"
				projectTitleNext="Insites"></HeaderProjectNav>
		</template>
		<div class="container mx-auto lg:space-y-14 flex flex-col mt-48  ">
			<div class="flex flex-col space-y-7  justify-start lg:justify-center">
				<h2 class="text-orange text-2xl flex justify-center">
					SiteZeus
				</h2>
				<p class="w-full lg:w-[60%]  mx-auto lg:text-center ">
					The SiteZeus website has been built using Vue 3, Nuxt 3, and
					Tailwind CSS. As part of this development effort, I
					transformed several legacy WordPress pages into the Vue
					framework. Additionally, I created over half a dozen new
					pages and revamped the site's navigation to enhance the
					website's content and functionality.
				</p>
			</div>

			<div class="carousel-container ">
				<CarouselImageText
					:images="sitezeusImages"
					v-slot="slotProps">
					<div
						class="text-left space-y-4 lg:w-[80%] lg:mr-auto"
						v-if="slotProps.realIndex === 0">
						<p>
							The SiteZeus homepage marked one of my earliest
							projects with a significant level of ownership. I
							took the initiative to convert the static vector
							wheel image into a Vue component, complete with
							clickable navigation for individual wheel sections
							and the animation of twinkling stars in the
							background.
						</p>

						<p>
							Another aspect of the page I am particullarly proud
							of is the gradient hover effect for the logo carousel. To achieve this, I developed a Vue composable that seamlessly adds a linear gradient
							effect to SVG logos upon hover. This composable not
							only allows for customized gradient color stops but
							also offers functions for easy addition and removal
							of the gradient effect from the SVG logos. The
							gradient is generated in the user space and applied
							to the logos by modifying their fill attribute.
						</p>
						<div class="pt-7 button-container flex flex-row gap-7">
							<SvgButton label="Website" link="https://sitezeus.com" cssClass="bg-orange" />
						</div>
					</div>
					<div
					class="text-left space-y-4 lg:w-[80%] lg:mr-auto"
						v-if="slotProps.realIndex === 1">
						<p>
							I leveraged Swiper.js to craft a dynamic image
							carousel that enhances user engagement. Every slide
							within the carousel showcases a gif accompanied by
							relevant text. Clicking on the play button
							overlaying the gif triggers a background overlay and
							automatic playback of a YouTube video pertinent to
							the slide's content.Furthermore, the "Locate"
							carousel boasts two buttons, enabling seamless
							content transition and ensuring that the user can
							access a wealth of information within a confined
							space
						</p>
						<div class="button-container flex flex-row gap-7">
							<SvgButton label="Website" link="https://sitezeus.com#locate"   />

						</div>
					</div>

					<div
					class="text-left space-y-4 lg:w-[80%] lg:mr-auto"
						v-if="slotProps.realIndex === 2">
						<p>
							The 'SiteZeus Under 60-Second' page is a dynamic
							video gallery webpage that seamlessly interacts with
							the YouTube API for video data retrieval and
							parsing, resulting in the display of videos. Users
							have the flexibility to filter and select videos
							based on categories and solutions, while also having
							the option to expand video descriptions for more
							information.
						</p>
						<p>
							In addition, the webpage automatically adjusts URL
							parameters as users select categories or solutions.
							This feature empowers team members to guide
							customers to specific video content by generating
							custom URLs with predefined category and solution
							parameters. These tailored links enable a focused
							video viewing experience, catering to individual
							customer needs and interests.
						</p>
						<div class="button-container flex flex-row gap-7 pt-7">
							<SvgButton label="Website" link="https://sitezeus.com/under-60-seconds"  />

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

const sitezeusImages = [
	{
		src: "/static/images/pages/project-pages/sitezeus-homepage-recording.mp4",
		type: "video/mp4",
		alt: "SiteZeus homepage",
	},
	{
		src: "/static/images/pages/project-pages/sitezeus-video-carousel.mp4",
		type: "video/mp4",
		alt: "SiteZeus video carousel",
	},
	{
		src: "/static/images/pages/project-pages/under-60-recording.mp4",
		type: "video/mp4",
		alt: "Under 60 second page",
	},
];
</script>
