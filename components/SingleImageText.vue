<template>
	<div
		class="flex flex-col-reverse lg:flex-row lg:items-start justify-center w-full space-y-14 lg:space-y-0 lg:space-x-14">
		<div class="image-container lg:w-[33%] mx-auto relative rounded-2xl pt-14 lg:pt-0">
			<template v-if="props.isVideo">
				<video
					class="video rounded-2xl"
					autoplay="autoplay"
					loop="loop"
					muted="muted">
					<source
						class=""
						:src="props.src"
						type="video/mp4" />
				</video>
			</template>
			<template v-else>
				<img
					:src="props.src"
					:alt="props.alt" />
			</template>
		</div>
		<div class="text-container flex w-full lg:w-1/2 items-start">
			<div class="text-left space-y-4 lg:w-[80%] lg:mr-auto">
				<slot name="text"></slot>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	src: String,
	alt: String,
	isVideo: Boolean,
});
</script>
