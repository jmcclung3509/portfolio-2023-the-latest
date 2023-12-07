<template>
	<div class="space-y-14">
	<section class="section info  pt-36 space-y-4 lg:h-[100vh]">

		<div class="container mx-auto flex flex-col items-start space-y-14">
		<h2 class="text-2xl text-dark-purple">Experience & Skills</h2>
		<div class="menu flex justify-start gap-7 lg:gap-14 pb-7">
			<h3
				class="text-1.2xl font-normal text-dark-purple"
				:class="{ active: data.selectedSection === 'about' }"
				@click="showSection('about')">
				About
			</h3>
			<h3
				class="text-1.2xl font-normal text-dark-purple"
				:class="{ active: data.selectedSection === 'skills' }"
				@click="showSection('skills')">
				Skills
			</h3>
			<h3
				class="text-1.2xl font-normal text-dark-purple"
				:class="{ active: data.selectedSection === 'experience' }"
				@click="showSection('experience')">
				Experience
			</h3>
		</div>
		<div class="contents w-full">
			<template v-if="data.selectedSection === 'about'">


						<div id="about" class="flex items-start flex-col lg:flex-row justify-center space-y-14 lg:space-y-0 ">
							<div
								class="flex flex-col w-full lg:w-1/2 items-start space-y-7">
								<div class="content space-y-7 pb-7">
								<p class="text-extra-dark-purple font-light ">
									Hey there! I'm Jessica Turner, a developer
									based in the Bay Area, and I absolutely love
									what I do. Lucky, right!? I find immense
									satisfaction in the interplay between
									analytical development and creative design,
									blending technical knowledge with a strong
									design sensibility to craft beautiful,
									dynamic, and user-centric products.
								</p>

								<p class="text-extra-dark-purple font-light ">
									With over two years of professional
									experience, I've honed my skills in Vue,
									Nuxt, and WordPress to create high-quality
									websites and applications. I relish tackling
									technical challenges with creative
									problem-solving and staying up-to-date with
									the latest web technologies.
								</p>
								</div>
								<div class="bullet-section">
									<ul class="flex flex-row flex-wrap items-start w-[110%] custom">
										<li class="w-1/2 pb-14 ">
											<h3 class="text-dark-purple  font-normal text-1.2xl">Experience</h3>
											<p class="text-extra-dark-purple ml-[40px] font-light"> 2+ years</p>
										</li>
										<li class="pb-14 ">
											<h3 class="text-dark-purple font-normal text-1.2xl">Location</h3>
												<p class="text-extra-dark-purple ml-[40px] font-light"> Bay Area, CA</p>
										</li>
										<li class="w-1/2 ">
											<h3 class="text-dark-purple font-normal text-1.2xl">Hobbies</h3>
												<p class="text-extra-dark-purple ml-[40px] font-light">			Reading, baking, crafting, card games (esp. UNO)</p>
										</li>
									</ul>
								</div>

						</div>

							<div class="lg:w-1/2 w-full ml-[-20px] lg:ml-0">
								<div class="image-container lg:w-3/4 pb-[75%] mx-auto">
								<img
									class="w-full "
									src="@/assets/images/home/headshot.png"
									alt="Jessica Turner headshot" />
							</div>
						</div>
						</div>


			</template>
			<template v-if="data.selectedSection === 'skills'">
				<div id="skills"
								class="flex flex-col w-full lg:w-3/4  items-start space-y-7">
								<div class="content space-y-7">
								<p class="text-extra-dark-purple font-light text pb-7">
									For the last year I have been wroking primarily in Vue, Nuxt and WordPress. I enjoy designing layouts in Figma, and creating vector images in Adobe Illustrator.   I also have experience developing webpages and simple applications in React and Node.
								</p>

								</div>
								<div class="bullet-section">
									<ul class="flex tems-start flex-col lg:flex-row flex-wrap w-[120%] custom ">
										<li class=" w-full lg:w-1/2 pb-14 pr-7">
											<h3 class=" text-1.2xl text-dark-purple">html/css</h3>
											<p class="text-extra-dark-purple font-light ml-[40px]"> SCSS, Sass, Flex, Grid, Bootstrap, Tailwind</p>
										</li>
										<li class=" w-full lg:w-1/2 pb-14 pr-7">
											<h3 class="text-dark-purple text-1.2xl">design</h3>
											<p class="text-extra-dark-purple font-light ml-[40px]"> Wireframing, prototyping, Adobe Creative Suite, Figma</p>
										</li>
										<li class=" w-full lg:w-1/2 pb-14 pr-7">
											<h3 class="text-dark-purple text-1.2xl">Development</h3>
											<p class="text-extra-dark-purple font-light ml-[40px]"> JavaScript(ES6+), API, Vue, Nuxt, WordPress</p>
										</li>
										<li class=" w-full lg:w-1/2 pb-14 pr-7">
											<h3 class="text-dark-purple text-1.2xl">Tools</h3>
											<p class="text-extra-dark-purple font-light ml-[40px]"> Git/GitHub, Sourcetree, Azure, Chrome DevTools, FTP Client, Postman, MongoDB</p>
										</li>
										<li class=" w-full lg:w-1/2 pb-14 pr-7">
											<h3 class="text-dark-purple text-1.2xl">Soft skills</h3>
											<p class="text-extra-dark-purple font-light ml-[40px]">Creative problem solver, growth-mindset, can-do attitude, skilled communicator, self-starter, excellent time-management.</p>
										</li>
									</ul>
								</div>
							</div>
			</template>	<template v-if="data.selectedSection === 'experience'">
				<div
								class="flex flex-col lg:w-3/4 w-full items-start space-y-7">
								<div class="content space-y-7">
								<p class="text-extra-dark-purple font-light pb-7">
									My journey into development began in early 2021, learning HTML, CSS, vanilla JavaScript, and React. As a freelance developer, I embarked on various small projects for friends and family, steadily building my skills. In 2022, SiteZeus saw my potential and hired me, despite my limited experience with Vue, Nuxt, or WordPress. Swiftly, I adapted and became proficient in crafting high-quality web pages using this tech stack. I'm a quick learner, naturally inquisitive, and fortunate to love what I do.
								</p>

								</div>
								<div class="bullet-section">
									<ul class="flex items-start flex-row flex-wrap w-[110%] custom">
										<li class=" w-4/5 pb-14 space-y-1">
											<h3 class="text-dark-purple text-1.2xl font-normal">Sitezeus</h3>
											<p class="text-dark-purple font-light  ml-[40px]"> Junior Frontend Developer, September 2022-Present</p>
											<p class="text-orange text-[.85rem] caps font-light ml-[40px]"> Vue | Nuxt | WordPress</p>
											<div class="flex flex-col space-y-4 pt-4">

											<p class="text-extra-dark-purple font-light text-xs ml-[40px]">I've successfully transformed over a dozen legacy WordPress webpages into Vue/Nuxt and created more than 10 new pages for <a href ="https://sitezeus.com." target="_blank"> SiteZeus</a> . In close collaboration with our visual designer, I breathe life into designs with creative user-interaction features and captivating animations.</p>
											<p class="text-extra-dark-purple  font-light ml-[40px] text-xs"> In addition, I oversee the maintenance and expansion of our company's WordPress website  <a href="https://insites.sitezeus.com/" target="_blank" > Insights.</a> I've played a significant role in enhancing our SEO score and core web vitals, contributing to a  20% improvement. I'm continually dedicated to enhancing the overall website experience.
											</p>
										</div>
										</li>
										<li class="w-4/5 pb-14 space-y-1">

											<h3 class="text-dark-purple font-normal text-1.2xl">Freelance</h3>
											<p class="text-dark-purple font-light ml-[40px]">Frontend Developer, UI/UX Designer, April 2021 - Present</p>

											<p class="text-orange text-[.85rem] caps font-light ml-[40px]">React | Vue | Nuxt | Adobe Creative Suite | Figma | Node</p>
											<p class="text-dark-purple pt-4 ml-[40px]  font-light text-xs"> Design, develop and maintain websites for various clients. </p>
										</li>


									</ul>
								</div>
							</div>
			</template>
		</div>
	</div>

	</section>
	<section class="">
		<div class="flex justify-center pt-4 container mx-auto">
			<p class="text-[12px] caps text-dark-purple font-light text-center">
				Designed & developed by me using Adobe Illustrator,
				Figma, Vue, Nuxt and Tailwind 💜 2023
			</p>
		</div>
	</section>
</div>

</template>



<script setup>
const route = useRoute();
const size = useScreenSize().size;
const { isMobile } = useScreenSize();
const data = reactive({
	selectedSection: "about",
});
const showSection = (section) => {
	data.selectedSection = section;
	console.log(section);
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";


</style>