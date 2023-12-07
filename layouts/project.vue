<template>
	<div>
		<Html lang="en">
			<Body :class="`page-${props.projectLabel}`">
				<HeaderMain></HeaderMain>
				<slot name="header" ></slot>

				<div class="wrap flex flex-wrap pb-48">
					<div class="wrap-inner w-full overflow-hidden">
						<slot />
					</div>
				</div>
			</Body>
		</Html>
	</div>
</template>
<script setup>



const props = defineProps({
	projectLink: String,
	projectLabel: String,
});
</script>
