<template>
	<div class="box p-4 space-y-4 w-full md:w-1/2 lg:w-1/3">
		<div
			class="inner-box"
			:class="props.slug">
			<div
				class="front-box border-box flex flex-col justify-center items-cener space-y-4"
				:class="props.slug"
				>
				<div
					class="text-container flex flex-col space-y-2 absolute z-100 top-0 bottom-0 left-0 right-0 flex justify-center items-center">
					<h2 class="text-light-peach text-1.5xl xl:text-2xl">
						{{ props.title }}
					</h2>
				</div>
			</div>
			<div
				class="back-box border-box text-center p-4 flex justify-center itmes-center bg-default-dark flex flex-col space-y-7"
				:style="{ height: backBoxHeight }">
				<div class="flex flex-col space-y-2 lg:space-y-0 lg:flex-row justify-center items-center">
					<div
						class="flex flex-row flex-wrap justify-center items-center gap-4"
						v-for="(tag, i) in props.tagArray"
						:key="i">
						<p class="text-light-peach mx-2">{{ tag }}</p>
					</div>
				</div>
				<nuxt-link
					class="text-medium-purple caps animate-underline mx-auto"
					:to="props.link">
					Learn more
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	title: String,
	link: String,
	tagArray: Array,
	slug: String,
	imageSrc: String,
});

const backBoxHeight = ref("auto");
const frontBox = ref(null);

const updateBackBoxHeight = () => {
	if (frontBox.value) {
		// Access the ref using frontBox.value
		const frontBoxHeight = frontBox.value.clientHeight + "px";

		backBoxHeight.value = frontBoxHeight;

	}
};

onMounted(() => {
	frontBox.value = document.querySelector(".front-box");
	updateBackBoxHeight();
	window.addEventListener("resize", updateBackBoxHeight);
});
</script>
<style lang="scss">
@import "@/assets/scss/variables.scss";

.box {
	background: transparent;

	perspective: 1000px;
	box-sizing: border-box;

	border-radius: 12px;
	position: relative;
	width: 500px;
	height: 300px;

	transition: transform 0.8s;
	border-radius: 12px;
	transform-style: preserve-3d;
	.inner-box {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 0.8s;
		border-radius: 12px;
		transform-style: preserve-3d;
		box-shadow: 0 10px 10px 4px rgba($default-dark, .15);

		.front-box,
		.back-box {
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: 12px;
			text-align: center;
			-webkit-backface-visibility: hidden;
			backface-visibility: hidden;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			&.front-box {
				background-size: cover, cover;
				background-position: center center;
				background-repeat: no-repeat;
			}
		}
	}

	&:hover {
		.inner-box {
			transform: rotateY(180deg);
		}
	}
	.back-box {
		transform: rotateY(180deg);
	}
}
</style>
