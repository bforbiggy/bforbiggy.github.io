<script>
	import { onMount, onDestroy, getContext } from "svelte";
	import { shuffle } from "lodash-es";
	import CardLink from "./CardLink.svelte";

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

	let links = [
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
	];

	const menu = getContext("menu");
	onMount(() => {
		$menu.icons = true;
	});
	onDestroy(() => {
		$menu.icons = false;
	});
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
	class="w-screen max-w-screen min-h-screen h-min-content gap-3 overflow-x-hidden font-[roboto-slab]"
>
	<div
		class="fixed min-w-[4000px] w-screen h-screen bg-[url('$lib/assets/DarkStackedSteps.svg')]"
	/>

	<div
		class="w-screen max-w-screen min-h-screen flex flex-wrap justify-center items-center py-16 gap-3"
	>
		{#each links as data, i}
			<CardLink
				isRed={i % 2 === 0}
				url={data.url}
				name={data.name}
				icon={data.icon}
				card={CARDS[i]}
			/>
		{/each}
	</div>
</div>
