<script>
	import WavesTop from "$lib/assets/waves-top.svg";
	import WavesBottom from "$lib/assets/waves-bottom.svg";

	let slammed = false;
</script>

<div
	class="min-w-screen min-h-screen flex justify-center items-center
	{slammed && 'animate-[rumble_0.4s]'}"
>
	<!-- Waves -->
	<img
		class="-z-40 absolute top-0 left-0 min-w-[2000px] w-screen bg-contain md:bg-cover"
		src={WavesTop}
		alt=""
	/>
	<img
		class="-z-40 absolute bottom-0 left-0 min-w-[2000px] w-screen bg-contain md:bg-cover"
		src={WavesBottom}
		alt=""
	/>

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
	<div class="absolute flex-col transition-all">
		<button
			class="z-50 shadow-[0px_1rem_2rem_theme('colors.red.600')] rounded-full bg-red-600"
			on:click={() => (slammed = true)}
		>
			<img
				class="w-[var(--max-radius)] h-[var(--max-radius)] rounded-full drop-shadow-md border-4 border-red-600
			{!slammed && 'hover:-translate-y-14 transition-all'}
			{slammed && 'transition-all duration-75'}"
				src="https://i.imgur.com/fV9s2su.jpg"
				alt="Profile"
			/>
		</button>

		{#if slammed}
			<div
				class="-z-10 flex-col w-[var(--max-radius)] -translate-y-[var(--max-radius)] text-center break-words rounded-full py-12 bg-slate-600 border-4 border-white text-white"
			>
				<div class="w-full h-[500px] max-h-[90vw]" />
				<p class="text-4xl">About Me</p>
				<p class="px-[75px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
					turpis eu nisl imperdiet imperdiet ut sed nulla. Etiam ante enim,
					pretium vel cursus et, accumsan vitae mi. Suspendisse potenti. Proin
					vestibulum eros et nulla convallis consectetur. Quisque eget suscipit
					turpis. Maecenas ut ipsum nec neque vestibulum consequat non nec orci.
					Etiam sed elit eu felis vehicula sagittis. Cras porttitor diam mauris,
					sit amet pellentesque tellus suscipit eget. Aliquam id magna
					fermentum, ornare nisl in, consequat purus.
				</p>
			</div>
		{/if}
	</div>
</div>

<style>
	:root {
		--max-radius: min(500px, 90vh);
	}

	:global(body) {
		background-color: theme("colors.slate.800");
	}
</style>
