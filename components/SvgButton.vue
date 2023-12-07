<template>
	<div class="btn">
		<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 60.3">
			<defs>
				<linearGradient id="mix-color">
					<stop offset="0%" :stop-color="startColor" />
					<stop offset="100%" :stop-color="endColor" />
				</linearGradient>
			</defs>
			<rect x="4" y="-5" width="200" height="70" rx="12" stroke="url(#mix-color)">
				<animate attributeName="stroke-dasharray" values="0 0;130 350" dur="0.8s" fill="freeze" begin="mouseenter"
					end="mouseleave" />
				<animate attributeName="stroke-dashoffset" values="500;0" dur="0.8s" fill="freeze" begin="mouseenter"
					end="mouseleave" />
			</rect>
		</svg>
		<a :class="props.cssClass" target="_blank" :href="props.link" data-go-to="props.goTo">{{ props.label }}</a>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	link: String,
	label: String,
	goTo: String,
	//cssClas=text-color
	cssClass: {
		type: String,
		default: 'gradient-text'
	},
	startColor: {
		type: String,
		default: "#ff7442"
	},
	endColor: {
		type: String,
		default: '#7f4ec3'
	}
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.btn {
	width: 150px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	position: relative;
	border: none;

	svg {
		fill: none;
		stroke: $dark-purple;
		stroke-width: 2px;
		transition: all 800ms ease;
		position: relative;
		height: 100%;

	}

	a {
		position: absolute;
		left: 20%;
		text-decoration: none;
		white-space: nowrap;
		font-weight: 300;
		user-select: none;

		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	&:hover {
		svg {
			stroke-dasharray: 130 350;
			stroke-dashoffset: 500;
		}
	}
}
</style>