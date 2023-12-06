<template>
	<NuxtLayout name="nonav">
		<section class="dark bg-default-dark pb-24 lg:h-[100vh]">
			<div class="flex justify-center items-center flex-col space-y-14 mt-48 container mx-auto">
				<div class="flex justify-center items-center flex-col space-y-4 w-full lg:w-1/2 mx-auto">
					<h2 class="text-light-peach text-2xl">Let's connect!</h2>
					<p class="text-center text-light-peach lg:w-2/3">
						My virtual door is always open for a friendly chat or to
						answer any questions. Feel free to drop me a line.
					</p>
				</div>
				<form class="w-full lg:w-2/3 mx-auto" action="https://usebasin.com/f/8babbc19d473" method="POST">
					<div class="flex flex-col lg:flex-row flex-nowrap justify-between items-center space-y-7 lg:space-y-0">
						<div class="flex flex-col items-start justify-center w-full lg:w-[45%] space-y-2">
							<label class="text-light-peach" for="name"> Name: </label>
							<input class="small-label w-full px-2 py-4 rounded-2xl bg-light-peach" type="name" id="name"
								name="name" required />
						</div>
						<div class="flex flex-col items-start justify-center w-full lg:w-[45%] space-y-2">
							<label class="text-light-peach" for="email"> Email: </label>
							<input class="small-box w-full px-2 py-4 rounded-2xl bg-light-peach" type="email" id="email"
								name="email" required />
						</div>
					</div>
					<div class="flex flex-col items-start justify-center space-y-2 w-full my-10 space-y-1">
						<label class="text-light-peach" for="message"> Message: </label>
						<textarea rows="5" cols="25" class="w-full px-2 py-4 large-box rounded-2xl bg-light-peach"
							id="message" name="message" required />
					</div>

					<input class="submit flex justify-center button   mx-auto font-light" type="submit"
						value="Submit" />
				</form>
			</div>
		</section>
	</NuxtLayout>
</template>

<script setup>
definePageMeta({
	layout: false,
});
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.textarea[rows] {
	height: initial;
}

.button {
	&.submit {
		padding: 10px 16px;
		background: linear-gradient($default-dark, $default-dark) padding-box, linear-gradient(45deg, $dark-purple, $orange) border-box;
		border: 2px solid transparent;
		color: $light-peach;
		font-size: 1.2rem;
		&:hover{
			background: linear-gradient($default-dark, $default-dark) padding-box, linear-gradient(45deg,  $orange, $dark-purple) border-box;
		}
	}
}

input {
	font-size: 1.2rem;
}
</style>
