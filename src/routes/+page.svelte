<script>
	import { onMount, getContext, onDestroy } from "svelte";
	import Landing from "./components/Landing.svelte";
	import AboutMe from "./components/AboutMe.svelte";
	import Skills from "./components/Skills.svelte";

	const menu = getContext("menu");
	onMount(() => {
		$menu.icons = true;
	});
	onDestroy(() => {
		$menu.icons = false;
	});
</script>

<div class="flex flex-col">
	<Landing />
	<AboutMe />
	<Skills />
</div>

<style>
</style>
