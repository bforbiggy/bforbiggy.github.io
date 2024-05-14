<script>
	import "./global.css";
	import Menu from "$lib/core/Menu.svelte";
	import { setContext } from "svelte";
	import { writable } from "svelte/store";

	const menu = writable(false);
	setContext("menu", menu);

	const bgm = writable(false);
	setContext("bgm", bgm);
</script>

<Menu></Menu>
<slot />

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	:global(*::-webkit-scrollbar) {
		display: none;
	}

	/* Hide scrollbar for IE/Edge and Firefox */
	:global(*) {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
