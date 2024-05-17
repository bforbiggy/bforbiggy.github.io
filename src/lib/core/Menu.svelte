<script>
	import { base } from "$app/paths";
	import { getContext } from "svelte";
	import Music from "./Music.svelte";
	import IconMenu from "$lib/assets/icons/icon-menu.svelte";
	import IconLink from "$lib/assets/icons/icon-link.svelte";
	import IconMusic from "$lib/assets/icons/icon-music.svelte";
	import IconNoMusic from "$lib/assets/icons/icon-no-music.svelte";

	const menu = getContext("menu");
	const bgm = getContext("bgm");

	const BUTTON_STYLES = "w-9 h-auto stroke-neutral-200 fill-neutral-200";
</script>

<!-- Menu icons -->
<div class="absolute z-50 top-2 left-2 h-4">
	<button on:click={() => ($menu = !$menu)}>
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
	class="fixed bg-slate-500 bg-opacity-80 backdrop-blur-md h-screen w-screen max-w-[800px] flex flex-col {!$menu &&
		'hidden'}"
>
	<a class="text-white" href="{base}/">Home</a>
	<p class="text-white">WIP</p>
</nav>
<Music></Music>
