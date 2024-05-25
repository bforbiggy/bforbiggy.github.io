<script>
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import { getContext } from "svelte";
	import Music from "./Music.svelte";

	const menu = getContext("menu");
	const bgm = getContext("bgm");

	const BUTTON_CLASSES = "w-9 h-9 stroke-neutral-200 fill-neutral-200";
	const BUTTON_STYLES = "color: white;";

	let volume = $bgm.volume;
	$: bgm.set({ ...$bgm, volume });
</script>

{#if $menu.icons}
	<!-- Menu icons -->
	<div class="fixed z-50 top-2 left-2 h-4">
		<button on:click={() => ($menu.sidebar = true)}>
			<span
				class="icon-[tabler--menu-2] {BUTTON_CLASSES}"
				style={BUTTON_STYLES}
			/>
		</button>
		<button on:click={() => ($bgm.paused = !$bgm.paused)}>
			{#if $bgm.paused}
				<span
					class="icon-[tabler--music-off] {BUTTON_CLASSES}"
					style={BUTTON_STYLES}
				/>
			{:else}
				<span
					class="icon-[tabler--music] {BUTTON_CLASSES}"
					style={BUTTON_STYLES}
				/>
			{/if}
		</button>
	</div>
{/if}

<!-- Actual Menu -->
<nav
	class="z-50 fixed bg-slate-900 bg-opacity-80 backdrop-blur-md h-screen w-screen max-w-[600px]
	flex flex-col p-6 text-white text-2xl font-semibold
	{$menu.sidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform"
>
	<button class="ml-auto w-12 h-auto" on:click={() => ($menu.sidebar = false)}>
		<span
			class="icon-[ri--close-fill] {BUTTON_CLASSES}"
			style={BUTTON_STYLES}
		/>
	</button>

	{#each [{ url: "/", name: "Home" }, { url: "/links", name: "Links" }, { url: "/repositories", name: "Repositories" }] as button}
		{@const active = button.url == $page.route.id}
		<a
			class="text-center rounded-md
				{active && 'bg-gradient-to-r from-transparent via-pink-700 to-transparent'} 
				p-2 mr-16"
			href="{base}	{button.url}"
		>
			{button.name}
		</a>
	{/each}

	<div class="my-auto"></div>
	<div class="flex w-full items-center">
		<span class="w-12 h-12 icon-[tabler--volume-2]"></span>
		<input
			class="w-full h-1 text-green-500"
			type="range"
			step="0.01"
			min="0"
			max="1"
			bind:value={volume}
		/>
		<span class="w-12 h-12 icon-[tabler--volume]"></span>
	</div>
</nav>
<Music></Music>
