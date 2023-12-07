<template>
	<NuxtLayout name="project">
		<template #header>
			<HeaderProjectNav
				projectLinkNext="/projects/sticky-notes-app"
				projectTitleNext="Sticky notes app"
				projectLinkPrev="/projects/insites"
				projectTitlePrev="Insites"></HeaderProjectNav>
		</template>
		<div
			class="container mx-auto  flex flex-col mt-48 lg:space-y-14">
			<h2 class="text-orange text-2xl flex justify-start lg:justify-center">
			Nick's Restaurant
			</h2>
			<SingleImageText
			:isVideo="true"
				src="/static/images/pages/project-pages/nicks-recording.mp4"
				alt="Nick's page recording">
				<template #text>
					<p>
						Nick's Restaurant Website is a fully-responsive,
						intuitive, multi-page website that tells the unique
						story of a beloved family-owned business and welcomes
						customers to dine, dance and romance while providing
						essential information such as the menu items and hours
						of business.
					</p>
					<p>
					One of my favorite parts is hero background that semlessly transitions between various background images, showcasing the beautiful views from the restaurant.
					</p>
					<p>
						The Nick's Website was built using Vue3, Nuxt3, Tailwind
						CSS and Git/GitHub
					</p>
					<div class="button-container flex flex-row gap-7 pt-7">
						<SvgButton
								label="Website"
								link="https://deft-gingersnap-b9df5d.netlify.app/" />
					</div>

				</template>
			</SingleImageText>
		</div>
	</NuxtLayout>
</template>

<script setup>
definePageMeta({
	layout: false,
});

</script>
