<script>
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import { getContext } from "svelte";
	import Music from "./Music.svelte";
	import {
		IconMenu,
		IconLink,
		IconMusic,
		IconNoMusic,
		IconClose,
	} from "$lib/assets/icons/icons.js";

	const menu = getContext("menu");
	const bgm = getContext("bgm");

	const BUTTON_STYLES = "w-9 h-auto stroke-neutral-200 fill-neutral-200";
</script>

<!-- Menu icons -->
<div class="absolute z-50 top-2 left-2 h-4">
	<button on:click={() => ($menu = true)}>
		<IconMenu classStyles={BUTTON_STYLES} />
	</button>
	<button>
		<IconLink classStyles={BUTTON_STYLES} />
	</button>
	<button on:click={() => ($bgm = !$bgm)}>
		{#if $bgm}
			<IconMusic classStyles={BUTTON_STYLES} />
		{:else}
			<IconNoMusic classStyles={BUTTON_STYLES} />
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
		<IconClose></IconClose>
	</button>
	{#each [{ url: "/", name: "Home" }, { url: "/links", name: "Links" }] as button}
		<a
			class="rounded-md {button.url == $page.route.id && 'bg-black'} p-2"
			href="{base}	{button.url}">{button.name}</a
		>
	{/each}
</nav>
<Music></Music>
