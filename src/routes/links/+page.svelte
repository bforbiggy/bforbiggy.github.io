<script>
	import { onMount } from "svelte";
	import { shuffle } from "lodash-es";
	import tarot from "$lib/assets/tarot.webp";

	onMount(() => {});

	const CARDS = shuffle(
		Array(52)
			.fill()
			.map((_, i) => {
				const NUMS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
				const SUITS = ["♦️", "♣️", "♥️", "♠️"];
				return {
					suit: SUITS[i % 4],
					num: NUMS[i % 13],
				};
			})
	);

	let LINKS = [
		{
			name: "Email",
			url: "mailto:andyhecsp@gmail.com",
			icon: "icon-[tabler--mail-filled]",
		},
		{
			name: "GitHub",
			url: "https://github.com/bforbiggy",
			icon: "icon-[tabler--brand-github]",
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/andy-hecsp/",
			icon: "icon-[tabler--brand-linkedin]",
		},
		{
			name: "LeetCode",
			url: "https://leetcode.com/u/bforbiggy/",
			icon: "icon-[tabler--brand-leetcode]",
		},
		{
			name: "Discord",
			url: "https://discord.com/users/187003715302064128",
			icon: "icon-[tabler--brand-discord]",
		},
	].map((data) => ({
		...data,
		active: false,
		face: "scale-x-0",
		back: "scale-x-100",
	}));
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
	class="w-screen max-w-screen h-screen gap-3 overflow-x-hidden font-[roboto-slab]"
>
	<div
		class="fixed min-w-[4000px] w-full h-full bg-[url('$lib/assets/DarkStackedSteps.svg')]"
	/>

	<div
		class="w-screen max-w-screen min-h-screen flex flex-wrap justify-center items-center py-16 gap-3"
	>
		{#each LINKS as data, i}
			{@const card = CARDS[i]}
			{@const isRed = i % 2 === 0}
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<a
				href={data.url}
				target="_blank"
				class="relative min-w-[250px] max-w-[250px] min-h-[400px] max-h-[400px]"
				on:mouseover={async () => {
					data.face = "scale-x-100";
					data.back = "scale-x-0";
					data.active = true;
					data.finished = new Promise((resolve) => setTimeout(resolve, 600));
				}}
				on:mouseleave={async () => {
					await data.finished;
					data.face = "scale-x-0";
					data.back = "scale-x-100";
					data.active = false;
				}}
			>
				<!-- Card Face -->
				<div
					class="absolute inset-x-0 inset-y-0 bg-slate-950 rounded-lg
						{data.face} transition-all delay-300 duration-300"
				>
					<p
						class="absolute top-2 left-2 text-3xl
							{isRed ? 'text-red-500' : 'text-white'}"
					>
						{card.suit}<br />{card.num}
					</p>
					<p
						class="absolute bottom-2 right-2 text-3xl
							{isRed ? 'text-red-500' : 'text-white'}"
					>
						{card.suit}<br />{card.num}
					</p>
					<div class="absolute inset-x-0 inset-y-0 w-full h-full">
						<span
							class="w-full h-full {data.icon} 
								{isRed ? 'text-red-500' : 'text-white'}"
						/>
					</div>
				</div>

				<!-- Card Back -->
				<div
					class="absolute inset-x-0 inset-y-0 m-auto flex justify-center items-center
						{data.back} {!data.active && 'delay-[600ms]'} transition-all duration-300"
				>
					<img
						class="absolute inset-x-0 inset-y-0 w-full h-full rounded-lg"
						src={tarot}
						alt=""
					/>
					<p
						class="z-10 text-3xl text-center text-amber-200 text-bold select-none"
					>
						{data.name}
					</p>
				</div>
			</a>
		{/each}
	</div>
</div>
