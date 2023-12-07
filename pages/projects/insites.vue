<template>
	<NuxtLayout name="project">
		<template #header>
			<HeaderProjectNav
				projectLinkNext="/projects/nicks"
				projectTitleNext="Nicks Restaurant"
				projectLinkPrev="/projects/sitezeus"
				projectTitlePrev="SiteZeus"></HeaderProjectNav>
		</template>
		<div
			class="container mx-auto flex flex-col space-y-7 mt-48" >
			<h2 class="text-orange text-2xl flex justify-start lg:justify-center ">Insites</h2>
			<p class="lg:w-[60%] w-full mx-auto pb-10 lg:text-center">
				The Insites website, serving as SiteZeus.com's blog, is built on
				the WordPress platform using PHP, vanilla JavaScript, and Sass.
				My responsibilities include the ongoing maintenance of WordPress
				pages on SiteZeus that have not been transitioned to Vue/Nuxt.
				Additionally, I am actively involved in updating and expanding
				the content of the blog, with webinar landing pages and blog
				posts.
			</p>

			<div class="carousel-container ">
				<CarouselImageText
					:images="insitesImages"
					v-slot="slotProps">
					<div
						class="text-left space-y-4"
						v-if="slotProps.realIndex === 0">
						<p>
							I have developed multiple landing pages dedicated to
							showcasing information about the company's webinars.
							These pages feature a HubSpot form that enables
							visitors to register for the webinars, a carousel
							that presents static images or GIFs along with
							corresponding text, and testimonial sliders to
							provide additional insights and credibility.
						</p>

						<div class="button-container flex flex-row gap-7">
							<SvgButton
								label="Website"
								link="https://insites.sitezeus.com/webinars/streamline-franchise-sales-development-and-operations"
							 />
						</div>
					</div>
					<div
						class="text-left space-y-4 "
						v-if="slotProps.realIndex === 1">
						<p>
							In this blog post, I introduced a sticky sidebar
							table of contents to enhance user experience. As a
							section becomes visible during scrolling, the table
							of contents dynamically changes color to indicate
							that the section is currently in view. Furthermore,
							users have the option to click on the table of
							contents to be seamlessly directed to the
							corresponding section.
						</p>
						<div class="button-container flex flex-row gap-7">
							<SvgButton
								label="Website"
								link="https://insites.sitezeus.com/market/5-proven-strategies-for-driving-sales-to-existing-stores/" />
						</div>
					</div>

					<div
						class="text-left space-y-4"
						v-if="slotProps.realIndex === 2">
						<p>
							In this blog post, I implemented gated content to
							boost user conversions. After a specific section
							within the post, the text intentionally blurs,
							requiring users to sign up in order to access the
							remaining content. This project was both engaging
							and fruitful, resulting in a notable increase in new
							leads.
						</p>

						<div class="button-container flex flex-row gap-7">
							<SvgButton
								label="Website"
								link="https://insites.sitezeus.com/market/harnessing-behavioral-and-geosocial-segmentation-for-high-converting-campaigns/" />
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
const insitesImages = [
	{
		src: "/static/images/pages/project-pages/insites-webinar-landing-page.mp4",
		type: "video/mp4",
		alt: "Insites webinar landing page",
	},
	{
		src: "/static/images/pages/project-pages/insites-blog.mp4",
		type: "video/mp4",
		alt: "Insites blog post with table of contents",
	},
	{
		src: "/static/images/pages/project-pages/insites-gated-blog.mp4",
		type: "video/mp4",
		alt: "Insites blog post with gated content",
	},
];
</script>

