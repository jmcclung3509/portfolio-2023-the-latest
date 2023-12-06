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
					<Nuxt-Link
						to="/"
						class="text-dark-purple font-thin hover:text-orange">
						Jessica Turner
					</Nuxt-Link>
				</div>

				<template v-if="!['sm', 'md'].includes(size)">
					<nav
						class="middle main flex justify-center gap-4 items-center pt-2">
						<ul class="flex z-10 items-center">
							<li class="relative p-2">
								<a
									href="/about"
									class="animate-underline text-dark-purple font-thin orange"
									>About</a
								>
							</li>

							<li class="relative p-2">
								<a
									href="/projects/sitezeus"
									class="animate-underline orange text-dark-purple font-thin"
									>Projects</a
								>
							</li>
							<li class="relative p-2">
								<a
									href="/resume"
									class="animate-underline orange text-dark-purple font-thin"
									target="_blank"
									>Resume</a
								>
							</li>

							<li class="relative p-2">
								<a
									href="/contact"
									class="animate-underline text-dark-purple font-thin orange"
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
								class="social-icon text-1.5xl text-dark-purple font-thin hover:text-orange"
								:icon="['fab', 'github']"
						/></a>
						<a
							href="https://www.linkedin.com/in/jessica-turner-94b549229/"
							target="_blank">
							<font-awesome-icon
								class="social-icon text-1.5xl text-dark-purple font-thin hover:text-orange"
								:icon="['fab', 'linkedin']" />
						</a>
					</div>
				</template>

				<template v-else>
					<div
						class="mobile-nav-trigger ml-auto cursor-pointer fixed top-10 right-10"
						@click="
							(data.mobileMenuOpen = !data.mobileMenuOpen),
								$emit('mobileMenuClick', data.mobileMenuOpen)
						">
						<font-awesome-icon
							class="icon text-1.5xl"
							:class="
								data.mobileMenuOpen
									? 'text-light-peach hover:text-orange'
									: 'text-default-dark hover:text-dark-purple'
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
const route = useRoute()

const data = reactive({
	mobileMenuOpen: false,
});

const isHeaderSticky = computed(() => {
	if (scrollDirectionUp.value && scrollPosition.value != 0) {
		return true;
	}
	return false;
});
const onMobileMenuClick = (payload) => {
	data.mobileMenuOpen = payload;
};





</script>
