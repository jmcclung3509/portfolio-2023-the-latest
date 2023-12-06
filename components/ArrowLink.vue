<template>
	<a :href="props.link" class="animate-arrow"  :class="[{'animate-underline': props.underlineLink}, props.underlineColor ? props.underlineColor : 'default']">{{props.label}}</a>
</template>

<script setup>

const props=defineProps({
	link: String,
	label: String,
	underlineLink: {
		type: Boolean,
		default: false
	},
	underlineColor:{
		type: String,
		default: 'purple'
	}
})
</script>