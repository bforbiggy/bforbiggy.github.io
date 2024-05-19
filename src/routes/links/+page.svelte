<script>
	import { onMount } from "svelte";

	onMount(() => {});

	const NUMS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
	const SUITS = "♥️♣️♠️♦️";
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="w-screen h-screen flex justify-center items-center overflow-x-hidden font-[roboto-slab]"
>
	<div
		class="absolute min-w-[2000px] w-screen h-screen bg-[url('$lib/assets/DarkStackedSteps.svg')]"
	/>

	<a
		href="https://leetcode.com/u/bforbiggy/"
		target="_blank"
		class="relative w-[250px] h-[400px] group"
	>
		<!-- Card Face -->
		<div
			class="absolute inset-x-0 inset-y-0 bg-slate-950 rounded-lg
				group-hover:blur-sm group-hover:-scale-x-100 transition-all delay-75 duration-500"
		>
			<p class="absolute top-2 left-2 text-3xl text-white">
				{SUITS[0]}<br />{NUMS[5]}
			</p>
			<p class="absolute bottom-2 right-2 text-3xl text-white">
				{SUITS[0]}<br />{NUMS[5]}
			</p>
			<div
				class="absolute inset-x-0 inset-y-0 w-full h-full
				group-hover:blur-md group-hover:-scale-x-100 transition-all delay-75 duration-500"
			>
				<span
					class="w-full h-full icon-[tabler--brand-leetcode]
					group-hover:-scale-x-100 transition-all delay-75 duration-500"
					style="color: white;"
				/>
			</div>
		</div>

		<!-- Card Back -->
		<div
			class="absolute inset-x-0 inset-y-0 m-auto flex justify-center items-center"
		>
			<p
				class="
				text-5xl text-center text-white text-bold select-none
				scale-x-0 group-hover:scale-x-100 group-hover:delay-[325ms] transition-all"
			>
				Leetcode
			</p>
		</div>
	</a>
</div>
