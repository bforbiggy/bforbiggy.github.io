<script>
	import WavesBottomLight from "$lib/assets/WavesBottomLight.svelte";

	let slammed = false;
</script>

<div
	class="min-w-screen max-w-[100vw] min-h-screen max-h-[100vh] overflow-x-hidden flex flex-col justify-between items-center bg-[linear-gradient(theme('colors.slate.900'),theme('colors.slate.900'),theme('colors.amber.800'))]
	{slammed && 'animate-[rumble_0.4s]'}"
>
	<!-- Rings -->
	<div class="z-10 absolute w-screen h-screen overflow-hidden">
		{#each ["bg-red-300", "bg-yellow-300", "bg-green-300", "bg-blue-300", "bg-purple-300", "bg-pink-300", "bg-[linear-gradient(theme('colors.slate.900'),theme('colors.slate.900'),theme('colors.amber.800'))]"] as color, i}
			<div
				class="absolute top-1/2 left-1/2 rounded-full w-[1vw] h-[1vh]
					{slammed ? 'opacity-100' : 'opacity-0'}
					{slammed && 'scale-[150] transition-slide duration-700'}  {color}"
				style="transition-delay: {i * 0.25}s;"
			></div>
		{/each}
	</div>

	<!-- Centerpiece -->
	<div
		class="z-20 my-auto flex flex-col transition-all rounded-full drop-shadow-md bg-slate-800 border-4 border-red-600"
	>
		<!-- Profile -->
		<button
			class="w-min shadow-[0px_1rem_2rem_theme('colors.red.600')] rounded-full bg-red-600"
			on:click={() => (slammed = true)}
		>
			<img
				class="min-w-[var(--max-radius)] h-[var(--max-radius)] rounded-full
			{!slammed && 'hover:-translate-y-14 transition-transform'}
			{slammed && 'transition-transform duration-75'}"
				src="https://i.imgur.com/fV9s2su.jpg"
				alt="Profile"
			/>
		</button>

		<!-- About Me -->
		<div
			class="w-[var(--max-radius)] flex flex-col gap-4 text-center break-words overflow-hidden rounded-full
			px-12 {slammed ? 'h-auto pt-6 pb-16' : 'h-0 p-0'} transition-all"
		>
			<p class="text-4xl text-white">[PERSONAL.md]</p>
			<p class="text-white">
				My goal is to be a jack of no trades, master of all! There is nothing I
				enjoy more than realizing the innate potential that we all have as
				humans and seeing where it takes me. Scroll to see more about me or
				check the menu!
			</p>
		</div>
	</div>

	<!-- Bottom Waves -->
	<WavesBottomLight classStyles="z-20 min-w-[2000px] w-screen rotate-180" />
</div>

<style>
	:root {
		--max-radius: min(400px, 90vw, 90vh);
	}
</style>
