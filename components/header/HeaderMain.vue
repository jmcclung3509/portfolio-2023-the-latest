<template>


		<header
			class="main flex h-20"

			:class="[
				{
					'sticky-header': isHeaderSticky,
					'mobile-menu-open': data.mobileMenuOpen,
				},
			]">
			<div
				class="container m-auto flex justify-between items-center container mx-auto">
				<div
					class="left flex items-center justify-center gap-2 lg:gap-4">
					<template v-if="isMobile">
						<Nuxt-Link
						to="/"
						>
						<img  class="h-[50px]" src="@/assets/images/logos/JT-logo-purple.svg" alt="Jessica Turner logo"/>
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

				<template v-if="!['sm', 'md'].includes(size)">
					<nav
						class="middle main flex justify-center gap-4 items-center pt-2">
						<ul class="flex z-10 items-center">
							<li class="relative p-2">
								<a
									href="/about"
									class="animate-underline text-dark-purple font-light orange"
									>About</a
								>
							</li>

							<li class="relative p-2">
								<a
									href="/projects/sitezeus"
									class="animate-underline orange text-dark-purple font-light"
									>Projects</a
								>
							</li>
							<li class="relative p-2">
								<a
									href="/resume"
									class="animate-underline orange text-dark-purple font-light"
									target="_blank"
									>Resume</a
								>
							</li>

							<li class="relative p-2">
								<a
									href="/contact"
									class="animate-underline text-dark-purple font-light orange"
									>Contact</a
								>
							</li>
						</ul>
					</nav>
					<div class="right flex items-center justify-end gap-4 pt-2">
						<a
							href="https://github.com/jmcclung3509"
							target="_blank">
							<font-awesome-icon
								class="social-icon text-1.5xl text-dark-purple  hover:text-orange transition-all"
								:icon="['fab', 'github']"
						/></a>
						<a
							href="https://www.linkedin.com/in/jessica-turner-94b549229/"
							target="_blank">
							<font-awesome-icon
								class="social-icon text-1.5xl text-dark-purple hover:text-orange transition-all"
								:icon="['fab', 'linkedin']" />
						</a>
					</div>
				</template>

				<template v-else>
					<div
						class="mobile-nav-trigger ml-auto cursor-pointer fixed  right-10"
						@click="
							(data.mobileMenuOpen = !data.mobileMenuOpen),
								$emit('mobileMenuClick', data.mobileMenuOpen)
						">
						<font-awesome-icon
							class="icon text-1.5xl"
							:class="
								data.mobileMenuOpen
									? 'text-light-peach hover:text-orange transition-all'
									: 'text-dark-purple hover:text-orange transition-all'
							"
							:icon="
								data.mobileMenuOpen
									? ['fas', 'x']
									: ['fas', 'bars']
							" />
					</div>
				</template>
			</div>
		</header>

</template>
<script setup>

const scrollPosition = useScroll().scrollPosition;
const scrollDirectionUp = useScroll().scrollDirectionUp;
const size = useScreenSize().size;
const isMobile =useScreenSize().isMobile
console.log(isMobile)

const emits = defineEmits('mobileMenuClick');

const data = reactive({
	mobileMenuOpen: false,
});

const isHeaderSticky = computed(() => {
	if (scrollDirectionUp.value && scrollPosition.value != 0) {
		return true;
	}
	return false;
});


</script>
