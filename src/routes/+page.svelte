<script>
	import Waves from "$lib/assets/waves.svg";

	let slammed = false;
</script>

<div
	class="min-w-screen max-w-[100vw] min-h-screen max-h-[100vh] overflow-x-hidden flex flex-col justify-between items-center
	{slammed && 'animate-[rumble_0.4s]'}"
>
	<!-- Top Waves -->
	<img class="-z-40 min-w-[2000px] w-screen" src={Waves} alt="" />

	<!-- Rings -->
	<div class="-z-50 absolute w-screen h-screen overflow-hidden">
		{#each ["bg-red-300", "bg-yellow-300", "bg-green-300", "bg-blue-300", "bg-purple-300", "bg-pink-300", "bg-slate-900"] as color, i}
			<div
				class="absolute top-1/2 left-1/2 rounded-full w-[1vw] h-[1vh]
			{slammed && 'scale-[150]'} transition-all duration-700 {color}"
				style="transition-delay: {i * 0.25}s;"
			></div>
		{/each}
	</div>

	<!-- Centerpiece -->
	<div
		class="flex flex-col transition-all rounded-full drop-shadow-md bg-slate-800 border-4 border-red-600"
	>
		<!-- Profile -->
		<button
			class="z-50 shadow-[0px_1rem_2rem_theme('colors.red.600')] rounded-full bg-red-600"
			on:click={() => (slammed = true)}
		>
			<img
				class="w-[var(--max-radius)] h-[var(--max-radius)] rounded-full
			{!slammed && 'hover:-translate-y-14 transition-transform'}
			{slammed && 'transition-transform duration-75'}"
				src="https://i.imgur.com/fV9s2su.jpg"
				alt="Profile"
			/>
		</button>

		<!-- About Me -->
		<div
			class="-z-50 w-[var(--max-radius)] flex flex-col gap-4 text-center break-words overflow-hidden rounded-full
			px-12 {slammed ? 'h-auto pt-6 pb-16' : 'h-0 p-0'} transition-all"
		>
			<p class="text-4xl text-white">[ABOUTME.md]</p>
			<p class="text-white">
				I'm a 21 year old developer looking to build the next big thing! My full
				stack experience and passion for learning makes me a well-rounded and
				valuable asset to any team, large or small.
			</p>
			<p class="text-sm text-white opacity-50">
				Hobbies Include: Art, Piano, Boxing
			</p>
		</div>
	</div>

	<!-- Bottom Waves -->
	<img class="-z-40 min-w-[2000px] w-screen rotate-180" src={Waves} alt="" />
</div>

<style>
	:root {
		--max-radius: min(500px, 90vw, 90vh);
	}

	:global(body) {
		background-color: theme("colors.slate.800");
	}
</style>
