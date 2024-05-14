<script>
	import BGMAudio from "$lib/assets/bgm.mp3";
	import { getContext } from "svelte";

	let paused = true;

	const bgm = getContext("bgm");
	bgm.subscribe((value) => {
		paused = !value;
	});
</script>

<audio src={BGMAudio} bind:paused autoplay loop></audio>
