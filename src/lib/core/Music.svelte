<script>
	import BGMAudio from "$lib/assets/bgm.mp3";
	import { getContext } from "svelte";

	const bgm = getContext("bgm");
	let paused = $bgm.paused;
	let volume = $bgm.volume;
	bgm.subscribe((value) => {
		paused = value.paused;
		volume = value.volume;
	});
</script>

<audio src={BGMAudio} bind:paused bind:volume loop></audio>
