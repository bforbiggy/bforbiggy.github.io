<script>
	import { base } from "$app/paths";
	import { getContext } from "svelte";

	const menu = getContext("menu");
</script>

<nav class={`${$menu.active || "hidden"}`}>
	<a href="{base}/">Home</a>
</nav>
