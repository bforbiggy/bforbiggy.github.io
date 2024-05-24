<script>
	import { onMount, onDestroy } from "svelte";
	import { getContext } from "svelte";

	const menu = getContext("menu");

	onMount(() => {
		menu.set({
			...menu,
			icons: false,
		});
	});
	onDestroy(() => {
		menu.set({
			...menu,
			icons: true,
		});
	});
</script>

<div
	class="w-screen h-screen bg-slate-950 flex justify-center items-center p-16"
>
	<img
		class="w-full h-full object-contain"
		src="https://media.tenor.com/KZehPg9LxGgAAAAM/valeedd7.gif"
		alt="Minion is sus of you"
	/>
</div>
