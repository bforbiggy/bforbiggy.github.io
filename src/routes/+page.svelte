<script>
	import WavesTop from "$lib/assets/waves-top.svg";
	import WavesBottom from "$lib/assets/waves-bottom.svg";

	let slammed = false;
</script>

<div
	class="w-screen h-screen flex justify-center items-center
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
	<button
		class="z-50 shadow-[0px_1rem_2rem_theme('colors.red.600')] rounded-full bg-red-600"
		on:click={() => (slammed = true)}
	>
		<img
			class="w-[500px] h-auto max-w-[90vw] rounded-full drop-shadow-md border-4 border-red-600
			{!slammed && 'hover:-translate-y-14 transition-all'}
			{slammed && 'transition-all duration-75'}"
			src="https://i.imgur.com/fV9s2su.jpg"
			alt="Profile"
		/>
	</button>
</div>

<style>
	:root {
		--max-radius: max(100vw, 100vh);
	}

	:global(body) {
		background-color: theme("colors.slate.800");
	}
</style>
