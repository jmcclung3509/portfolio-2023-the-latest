<template>
	<main class="relative">
		<section
			class="section fold hero flex justify-center items-center relative  bg-[#160e1e] dark" >


			<div class="flex items-center video-container"  >
				<video
					autoplay
					muted
					loop
					playsinline
					id="myVideo">
					<source
						src="@/assets/videos/purple-smoke.mp4"
						type="video/mp4" />
				</video>
				<div
					class="text-box flex justify-center text-contianer items-center flex-col space-y-7">
					<h3 class="text-2xl caps bold">Jessica Turner</h3>
					<h1 class="text-3xl lg:text-7xl xl:text-8xl text-center caps bold">
						Web Developer
					</h1>
				</div>
			</div>

</section>



	</main>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const size = useScreenSize().size;
const { isMobile } = useScreenSize();
const host = config.BASE_API_BROWSER_URL;
const title = "Jessica Turner | 2023";
const desc = " Personal website of Jessica Turner";

const image = host + "/static/images/featured-image.png";
const url = host + route.fullPath;

useHead({
	titleTemplate: title,
	meta: [
		{ name: "title", content: "title" },
		{ name: "description", content: "desc" },
		{ hid: "og:type", property: "og:type", content: "website" },
		{ hid: "og:title", property: "og:title", content: title },
		{ hid: "og:url", property: "og:url", content: url },
		{ hid: "og:description", property: "og:description", content: desc },
		{ hid: "og:image", property: "og:image", content: image },
	],
});

import "@/assets/css/tailwind.css";

const { bubbleLifeTime } = useBubbles();


const data = reactive({
	mobileMenuOpen: false,
});


</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.letter {
	animation-name: slideDownAnimation;
	animation-duration: 0.8s;
	animation-fill-mode: both;
	opacity: 0;
}
.video-container {
	width: 100%;
	height: 100vh;
	position: relative;
	video {
		max-width: unset;
	}
	.text-box {
		color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		background: $default-dark;
		mix-blend-mode: multiply;
		width: 100%;
		height: 100%;
		font-family: "Roboto", sans-serif;
	}
	&:after {
		content: "";
		background: $default-dark;
	}
}
</style>
