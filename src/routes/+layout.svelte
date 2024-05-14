<script>
	import "./global.css";
	import Menu from "./components/Menu.svelte";
	import { setContext } from "svelte";
	import { writable } from "svelte/store";

	setContext(
		"menu",
		writable({
			active: false,
			animated: false,
		})
	);
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
