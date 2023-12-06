<template>
	<header class="main flex w-full h-20">
		<div class="container mx-auto flex justify-between items-center z-10 ">
			<div class="left flex items-center justify-center gap-4">

				<Nuxt-Link to="/"

					class=" font-thin text-extra-light-purple hover:text-medium-purple"> Jessica Turner
				</Nuxt-Link>
			</div>

<div class="right flex items center justify-center gap-4">
				<Nuxt-link to="/">
					<font-awesome-icon
				class=" text-1.5xl text-extra-light-purple hover:text-medium-purple"
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
