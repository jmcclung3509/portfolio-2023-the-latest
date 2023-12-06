<template>
	<NuxtLayout name="project">
		<template #header>
			<HeaderProjectNav
				projectLinkNext="/projects/quizzical"
				projectTitleNext="Quizzical"
				projectLinkPrev="/projects/nicks"
				projectTitlePrev="Nick's restaurant"></HeaderProjectNav>
		</template>
		<div class="container mx-auto flex flex-col mt-36">
			<h2 class="text-orange text-2xl flex justify-center pb-14">
				Sticky notes application
			</h2>
			<SingleImageText
				:isVideo="true"
				src="/static/images/pages/project-pages/sticky-notes-recording.mp4"
				alt="Sticky notes recording">
				<template #text>
					<p>
						Sticky Notes is a CRUD note organizing application with
						a fun UI. Each note resembles a "post-it" and users can
						click into the "post-it" to add the title and
						description. Users can edit, search and delete
						individual notes from the page.
					</p>

					<p>
						The sticky notes app was built using local storage, JSX,
						React, Git/GitHub
					</p>

					<div class="button-container flex flex-row gap-7 pt-7">
						<SvgButton
							label="Website"
							link="https://super-sticky-notes.vercel.app" />
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
