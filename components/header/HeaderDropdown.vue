<template >

	 <transition name="showHeader" @before-enter="beforeEnter" @enter="enter" @leave="leave">

		<header
			class="main flex justify-center   h-20  "
			v-if="isMouseNearTop"
			:class="[
				{
					'sticky-header': isHeaderSticky,
					'mobile-menu-open': data.mobileMenuOpen,
				},
			]">
			<div
				class="flex justify-between items-center container mx-auto">
				<div
					class="left flex items-center justify-center gap-2 lg:gap-4">
					<Nuxt-Link
						to="/"
						class="text-extra-light-purple font-thin hover:text-medium-purple">
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
									class="animate-underline text-extra-light-purple font-thin purple"
									>About</a
								>
							</li>

							<li class="relative p-2">
								<a
									href="/projects/sitezeus"
									class="animate-underline purple text-extra-light-purple font-thin"
									>Projects</a
								>
							</li>
							<li class="relative p-2">
								<a
									href="/resume"
									class="animate-underline purple text-extra-light-purple font-thin"
									target="_blank"
									>Resume</a
								>
							</li>

							<li class="relative p-2">
								<a
									href="/contact"
									class="animate-underline text-extra-light-purple font-thin purple"
									>Contact</a
								>
							</li>
						</ul>
					</nav>
					<div
						class="right flex items-center justify-end gap-4 pt-2">
						<a
							href="https://github.com/jmcclung3509"
							target="_blank">
							<font-awesome-icon
								class="social-icon text-1.5xl text-extra-light-purple font-thin hover:text-medium-purple"
								:icon="['fab', 'github']"
						/></a>
						<a
							href="https://www.linkedin.com/in/jessica-turner-94b549229/"
							target="_blank">
							<font-awesome-icon
								class="social-icon text-1.5xl text-extra-light-purple font-thin hover:text-medium-purple"
								:icon="['fab', 'linkedin']" />
						</a>
					</div>
				</template>

				<template v-else>
					<div
						class="mobile-nav-trigger ml-auto cursor-pointer fixed  right-10"
						@click="
							(data.mobileMenuOpen = !data.mobileMenuOpen),
								$emit(
									'mobileMenuClick',
									data.mobileMenuOpen
								)
						">
						<font-awesome-icon
							class="icon text-1.5xl mt[-10px]"
							:class="
								data.mobileMenuOpen
									? 'text-light-peach hover:text-orange'
									: 'text-extra-light-purple hover:text-light-purple'
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
	</transition>

</template>
<script setup>

const scrollPosition = useScroll().scrollPosition;
const scrollDirectionUp = useScroll().scrollDirectionUp;
const size = useScreenSize().size;


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
const isMouseNearTop = ref(false);

const handleMouseMove = (event) => {
	// Get the vertical position of the mouse
	const mouseY = event.clientY;

	// Define the threshold for "near the top"
	const threshold = 100;

	// Update isMouseNearTop based on mouse position
	isMouseNearTop.value = mouseY < threshold;
};

const beforeEnter = (el) => {
  el.style.transition = "all 0.5s ease";
  el.style.opacity = 0;
  el.style.transform = "translateY(-100%)";
};

const enter = (el, done) => {
  void el.offsetWidth; // Trigger reflow to make sure the transition is applied

  el.style.opacity = 1;
  el.style.transform = "translateY(0)";

  done();
};

const leave = (el, done) => {
  el.style.transition = "all 0.5s ease";
  el.style.opacity = 0;
  el.style.transform = "translateY(-100%)";

  // Set a small delay to ensure the transition has time to start before removing the element
  setTimeout(() => {
    done();
  }, 500); // Adjust the delay to match the transition duration
};
// console.log(isHomepage)

onMounted(() => {
	document.addEventListener("mousemove", handleMouseMove);
});
</script>
