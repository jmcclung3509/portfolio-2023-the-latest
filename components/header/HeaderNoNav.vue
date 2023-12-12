<template>
	<header class="main flex w-full h-20">
		<div class="container mx-auto flex justify-between items-center z-10">
			<div class="left flex items-center justify-center gap-2 lg:gap-4">
				<template v-if="isMobile">
					<Nuxt-Link to="/">
						<img
							class="h-[50px]"
							src="@/assets/images/logos/JT-logo-purple.svg"
							alt="Jessica Turner logo" />
					</Nuxt-Link>
				</template>
				<template v-else>
					<Nuxt-Link
						to="/"
						class="text-dark-purple font-light hover:text-orange">
						Jessica Turner
					</Nuxt-Link>
				</template>
			</div>

			<div class="right flex items center justify-center gap-4">
				<Nuxt-link to="/">
					<font-awesome-icon
						class="text-1.5xl text-light-peach hover:text-medium-purple"
						:icon="['fas', 'fa-close']" />
				</Nuxt-link>
			</div>
		</div>
	</header>
</template>
<script setup>
const size = useScreenSize().size;
const isMobile = useScreenSize().isMobile
</script>
<style lang="scss">
@import "@/assets/scss/variables.scss";
header.main {
	box-shadow: 0px 4px 4px 0px rgba(#000, 0.1);
}
</style>
