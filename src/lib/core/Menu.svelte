<script>
	import { base } from "$app/paths";
	import { getContext } from "svelte";
	import Music from "./Music.svelte";
	import IconHome from "$lib/assets/icon-home.svelte";
	import IconLink from "$lib/assets/icon-link.svelte";
	import IconMusic from "$lib/assets/icon-music.svelte";
	import IconNoMusic from "$lib/assets/icon-no-music.svelte";

	const menu = getContext("menu");
	const bgm = getContext("bgm");
</script>

<!-- Menu icons -->
<div class="absolute z-50 top-2 w-screen flex justify-center">
	<button on:click={() => ($menu = !$menu)}>
		<IconHome classStyles="w-11 h-auto fill-neutral-950" />
	</button>
	<button>
		<IconLink classStyles="w-11 h-auto stroke-neutral-950" />
	</button>
	<button on:click={() => ($bgm = !$bgm)}>
		{#if $bgm}
			<IconMusic classStyles="w-11 h-auto stroke-neutral-950" />
		{:else}
			<IconNoMusic classStyles="w-11 h-auto stroke-neutral-950" />
		{/if}
	</button>
</div>

<!-- Actual Menu -->
<nav
	class="fixed bg-slate-500 bg-opacity-80 backdrop-blur-md h-screen w-screen max-w-[800px] flex flex-col {!$menu &&
		'hidden'}"
>
	<a class="text-white" href="{base}/">Home</a>
</nav>
<Music></Music>
