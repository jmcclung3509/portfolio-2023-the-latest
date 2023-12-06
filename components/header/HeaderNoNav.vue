<template>
	<header class="main flex w-full h-20">
		<div class="container mx-auto flex justify-between items-center z-10 ">
			<div class="left flex items-center justify-center gap-4">

				<Nuxt-Link to="/"

					class=" font-thin text-light-peach hover:text-light-purple"> Jessica Turner
				</Nuxt-Link>
			</div>

<div class="right flex items center justify-center gap-4">
				<Nuxt-link to="/">
					<font-awesome-icon
				class=" text-1.5xl text-light-peach hover:text-medium-purple"
				:icon="['fas', 'fa-close']"

				 />
				</Nuxt-Link>
			</div>

		</div>
	</header>
</template>
<script setup>

const size = useScreenSize().size

</script>
<style lang="scss">
@import "@/assets/scss/variables.scss";
header.main {
	box-shadow: 0px 4px 4px 0px rgba(#000, 0.3);
}
</style>
