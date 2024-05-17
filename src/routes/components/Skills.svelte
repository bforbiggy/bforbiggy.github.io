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
	<div class="flex flex-row flex-wrap justify-center max-w-[1000px] p-2">
		{#each SKILLS as skill}
			<div class="group flex flex-col m-4">
				<i href={skill.link} class="text-6xl rounded {skill.icon}"></i>
				<div class="invisible group-hover:visible text-white text-center">
					{skill.name}
				</div>
				<div class="" />
			</div>
		{/each}
	</div>

	<WavesBottomDark classStyles="z-20 min-w-[2000px] w-screen" />
</div>
