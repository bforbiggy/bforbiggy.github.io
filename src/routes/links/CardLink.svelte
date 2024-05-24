<script>
	import tarot from "./tarot.webp";

	export let name;
	export let url;
	export let icon;

	export let card;
	export let isRed;

	let active = false;
	let playing = false;

	let faceClass = "scale-x-0";
	let backClass = "scale-x-100";
	$: {
		if (!playing) {
			faceClass = active ? "scale-x-100 delay-300" : "scale-x-0 delay-0";
			backClass = active ? "scale-x-0 delay-0" : "scale-x-100 delay-300";
		}
	}

	$: textColor = isRed ? "text-red-500" : "text-white";
</script>

<a
	href={url}
	target="_blank"
	class="relative min-w-[250px] max-w-[250px] min-h-[400px] max-h-[400px] group"
	on:focus={() => (active = true)}
	on:mouseover={() => (active = true)}
	on:mouseleave={() => (active = false)}
	on:touchstart={() => (active = true)}
	on:touchend={() => (active = false)}
>
	<!-- Card Face -->
	<div
		class="absolute inset-x-0 inset-y-0 bg-slate-950 rounded-lg
			flex flex-col justify-between
			{faceClass} transition-all duration-300"
		on:transitionrun={() => (playing = true)}
		on:transitionend={() => (playing = false)}
	>
		<p class="p-2 mr-auto text-3xl {textColor}">
			{card.suit}<br />{card.num}
		</p>
		<div class="inset-x-0 inset-y-0 w-full h-full">
			<span class="w-full h-full {icon} {textColor}" />
		</div>
		<p class="p-2 ml-auto text-3xl {textColor}">
			{card.suit}<br />{card.num}
		</p>
	</div>

	<!-- Card Back -->
	<div
		class="absolute inset-x-0 inset-y-0 m-auto flex justify-center items-center
						{backClass} transition-all duration-300"
	>
		<img class="w-full h-full rounded-lg" src={tarot} alt="" />
		<p
			class="absolute inset-x-0 my-auto z-10
			text-3xl text-center text-amber-200 text-bold select-none"
		>
			{name}
		</p>
	</div>
</a>
