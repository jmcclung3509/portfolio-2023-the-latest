<template>

		<section class="  pb-24 lg:h-[100vh]">
			<div class="flex justify-center items-center flex-col space-y-14 mt-48 container mx-auto">
				<div class="flex justify-center items-center flex-col space-y-4 w-full lg:w-1/2 mx-auto">
					<h2 class="text-extra-dark-purple text-2xl">Let's connect!</h2>
					<p class="text-center text-dark-purple  lg:w-2/3">
						My virtual door is always open for a friendly chat or to
						answer any questions. Feel free to drop me a line.
					</p>
				</div>
				<form class="w-full lg:w-2/3 mx-auto" action="https://usebasin.com/f/8babbc19d473" method="POST">
					<div class="flex flex-col lg:flex-row flex-nowrap justify-between items-center space-y-7 lg:space-y-0">
						<div class="flex flex-col items-start justify-center w-full lg:w-[45%] space-y-2">
							<label class=" font-light text-extra-dark-purple" for="name"> Name: </label>
							<input class="small-label w-full px-2 py-4 rounded-lg bg-default-light" type="name" id="name"
								name="name" required />
						</div>
						<div class="flex flex-col items-start justify-center w-full lg:w-[45%] space-y-2">
							<label class=" font-light text-extra-dark-purple" for="email"> Email: </label>
							<input class="small-box w-full px-2 py-4 rounded-lg bg-default-light" type="email" id="email"
								name="email" required />
						</div>
					</div>
					<div class="flex flex-col items-start justify-center space-y-2 w-full my-10 space-y-1">
						<label class=" font-light text-extra-dark-purple" for="message"> Message: </label>
						<textarea rows="5" cols="25" class="w-full px-2 py-4 large-box rounded-lg bg-default-light"
							id="message" name="message" required />
					</div>

					<input class="submit flex justify-center button   mx-auto font-light" type="submit"
						value="Submit" />
				</form>
			</div>
		</section>

</template>

<script setup>

</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.textarea[rows] {
	height: initial;
}

.button {
	&.submit {
		padding: 10px 20px;
		background: linear-gradient(120deg, $medium-purple, $dark-purple);
		border: 2px solid $dark-purple;
		color: $light-peach;
		font-size: 1.2rem;
		font-weight: 300;
		&:hover{
			background: linear-gradient(120deg, $medium-purple, $dark-purple) padding-box, linear-gradient(45deg,  $orange, $dark-purple) border-box;
		}
	}
}

input {
	font-size: 1.2rem;
	border: 1px solid $medium-purple;
}
textarea{
	border: 1px solid $medium-purple;
}
</style>
