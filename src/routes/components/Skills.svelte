<script>
	import WavesTopDark from "$lib/assets/WavesTopDark.svelte";
	import WavesBottomDark from "$lib/assets/WavesBottomDark.svelte";

	const SKILLS = [
		{
			name: "Git",
			icon: "devicon-git-plain colored",
			link: "https://git-scm.com",
		},
		{
			name: "Python",
			icon: "devicon-python-plain colored",
			link: "https://www.python.org",
		},
		{
			name: "C#",
			icon: "devicon-csharp-plain colored",
			link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
		},
		{
			name: ".NET",
			icon: "devicon-dot-net-plain colored",
			link: "https://docs.microsoft.com/en-us/dotnet/",
		},
		{
			name: "Java",
			icon: "devicon-java-plain colored",
			link: "https://www.oracle.com/java/",
		},

		{
			name: "HTML",
			icon: "devicon-html5-plain colored",
			link: "https://html.com",
		},
		{
			name: "CSS",
			icon: "devicon-css3-plain colored",
			link: "https://www.w3.org/TR/CSS/#css",
		},
		{
			name: "React",
			icon: "devicon-react-original colored",
			link: "https://reactjs.org",
		},
		{
			name: "JavaScript",
			icon: "devicon-javascript-plain colored",
			link: "https://www.javascript.com",
		},
		{
			name: "NodeJS",
			icon: "devicon-nodejs-plain colored",
			link: "https://nodejs.org/en/",
		},
	];
</script>

<svelte:head>
	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
	/>
</svelte:head>

<div
	class="max-w-[100vw] overflow-x-hidden bg-slate-950 flex flex-col items-center"
>
	<WavesTopDark classStyles="z-20 min-w-[2000px] w-screen" />
	<div class="flex flex-col items-center">
		<div class="flex flex-col items-center gap-3 peer">
			<span
				class="w-14 h-14 icon-[ri--fire-fill]"
				style="color: rgb(244 63 94);"
			/>
			<h1 class="text-5xl text-white text-middle">Skills</h1>
			<div class="w-[800px] max-w-[100vw] h-[1px] border border-rose-500"></div>
		</div>

		<div class="flex flex-row flex-wrap justify-center max-w-[1000px] py-5">
			{#each SKILLS as skill, i}
				{@const isEven = i % 2 === 0}
				<div class="group flex flex-col items-center m-4 bg-inherit">
					<i
						href={skill.link}
						class="text-6xl {skill.icon} rounded p-5 mx-5 mt-5 border border-opacity-0 group-hover:border-opacity-100
						{isEven ? 'border-emerald-500' : 'border-rose-500'} duration-150"
					></i>
					<div
						class="w-[1px] h-4 border
						{isEven ? 'border-emerald-500' : 'border-rose-500'} 
							opacity-0 group-hover:opacity-100 duration-150"
					/>
					<div
						class="text-xl text-white border-2 rounded-md
						{isEven ? 'border-emerald-500' : 'border-rose-500'} 
						px-3 py-2 opacity-0 group-hover:opacity-100 duration-150"
					>
						{skill.name}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<WavesBottomDark classStyles="z-20 min-w-[2000px] w-screen" />
</div>
