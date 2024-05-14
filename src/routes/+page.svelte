<script>
	import WavesTop from "$lib/waves-top.svg";
	import WavesBottom from "$lib/waves-bottom.svg";

	let slammed = false;
</script>

<div class="bg-slate-800 w-screen h-screen flex justify-center items-center">
	<!-- Waves -->
	<div class="z-10 absolute top-0 left-0 w-screen bg-cover">
		<img class="block w-full h-full" src={WavesTop} alt="" />
	</div>
	<div class="z-10 absolute bottom-0 left-0 w-screen bg-cover">
		<img class="block w-full h-full" src={WavesBottom} alt="" />
	</div>

	<!-- Rings -->
	<div class="absolute w-screen h-screen overflow-hidden">
		{#each ["bg-red-300", "bg-yellow-300", "bg-green-300", "bg-blue-300", "bg-purple-300", "bg-pink-300", "bg-orange-300", "bg-slate-800"] as color, i}
			<div
				class="absolute top-1/2 left-1/2 rounded-full w-[1vw] h-[1vh]
			{slammed && 'scale-[150]'} 
			transition-all duration-700 {color}"
				style="transition-delay: {i * 0.3}s;"
			></div>
		{/each}
	</div>

	<!-- Centerpiece -->
	<button
		class="z-50 w-auto h-auto shadow-[0px_1rem_2rem_theme('colors.red.600')] rounded-full bg-red-600"
		on:click={() => (slammed = true)}
	>
		<img
			class="rounded-full drop-shadow-md border-4 border-red-600
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
</style>
