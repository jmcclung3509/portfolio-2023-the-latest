<template>
	<transition name="fade">
	<div v-if="globalState.overlay.showing" class="h-screen w-screen bg-default-dark/80 fixed z-20 flex justify-center items-center"></div>
</transition>
</template>