<script>
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import { getContext } from "svelte";
	import Music from "./Music.svelte";

	const menu = getContext("menu");
	const bgm = getContext("bgm");

	const BUTTON_CLASSES = "w-9 h-9 stroke-neutral-200 fill-neutral-200";
	const BUTTON_STYLES = "color: white;";
</script>

<!-- Menu icons -->
<div class="fixed z-50 top-2 left-2 h-4">
	<button on:click={() => ($menu = true)}>
		<span
			class="icon-[tabler--menu-2] {BUTTON_CLASSES}"
			style={BUTTON_STYLES}
		/>
	</button>
	<button on:click={() => ($bgm = !$bgm)}>
		{#if $bgm}
			<span
				class="icon-[tabler--music] {BUTTON_CLASSES}"
				style={BUTTON_STYLES}
			/>
		{:else}
			<span
				class="icon-[tabler--music-off] {BUTTON_CLASSES}"
				style={BUTTON_STYLES}
			/>
		{/if}
	</button>
</div>

<!-- Actual Menu -->
<nav
	class="z-50 fixed bg-slate-500 bg-opacity-80 backdrop-blur-md h-screen w-screen max-w-[600px]
	flex flex-col p-6 text-white text-2xl font-semibold
	{$menu ? 'translate-x-0' : '-translate-x-full'} transition-transform"
>
	<button class="ml-auto w-12 h-auto" on:click={() => ($menu = false)}>
		<span
			class="icon-[ri--close-fill] {BUTTON_CLASSES}"
			style={BUTTON_STYLES}
		/>
	</button>
	{#each [{ url: "/", name: "Home" }, { url: "/links", name: "Links" }] as button}
		<a
			class="rounded-md {button.url == $page.route.id && 'bg-black'} p-2"
			href="{base}	{button.url}">{button.name}</a
		>
	{/each}
</nav>
<Music></Music>
