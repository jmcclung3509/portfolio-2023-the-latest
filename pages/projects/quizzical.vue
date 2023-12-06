

<template>
		<NuxtLayout name="project">
			<template #header>
				<HeaderProjectNav
					projectLinkNext="/projects/portfolio"
					projectTitleNext="Portfolio"
					projectLinkPrev="/projects/sticky-notes-app"
					projectTitlePrev="Sticky notes app"></HeaderProjectNav>
			</template>
			<div
				class="container mx-auto space-y-14 flex flex-col mt-36 space-y-14">
				<h2 class="text-orange text-2xl flex justify-center">
				Quizzical trivia game
				</h2>
				<SingleImageText
					:isVideo="true"
					src="/static/images/pages/project-pages/quizzical-recording.mp4"
					alt="Sticky notes recording">
					<template #text>
						<p>
							Quizzical is a fun and interactive trivia game that fetches data from an open source trivia API and displays the results.  Players are provided with five comic-book trivia question and a choice of answers.  Guesses are selected by clicking on the answer.  The check score button will  display the results and then ask if the player would like to play again. Confetti is displayed if the player guess all five questions correctly.


						</p>

						<p>
							The quizzical game  was built using an API, React, React Hooks, styled components, Git/GitHub.
						</p>

						<div class="button-container flex flex-row gap-7 pt-7">
							<SvgButton
								label="Website"
								link="https://my-quizzical-app.vercel.app/" />

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


