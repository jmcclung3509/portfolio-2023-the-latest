<template>
	<div class="hidden lg:block sidebar-container w-[100px]">
		<div class="flex flex-col items-center gap-2">


			<div class="flex flex-col space-y-2 items-center">
				<a href="https://github.com/jmcclung3509" targe="_blank">
					<font-awesome-icon class="social-icon text-1xl text-light-peach hover:text-orange"
						:icon="['fab', 'github']" /></a>
				<a href="https://www.linkedin.com/in/jessica-turner-94b549229/" target="_blank">
					<font-awesome-icon class="social-icon text-1xl text-light-peach hover:text-orange"
						:icon="['fab', 'linkedin']" />
				</a>
			</div>
			<div class="sidebar-line social-icon w-[2px] h-[40px]"></div>
		</div>
	</div>
</template>
<script setup>

</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";


.sidebar-container {

	position: fixed;
	bottom: 0px;
	right: 0px;
	z-index: 10;

	.social-icon {
		color: $light-peach;

		&:hover {
			color: $default-dark;
		}


		&.light {
			color: $default-dark;

			&:hover {
				color: $orange;
			}
		}
	}

	.sidebar-line {
		background-color: $light-peach;


		&.light {
			background-color: $default-dark;
		}
	}

}
</style>
