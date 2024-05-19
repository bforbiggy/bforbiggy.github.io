<script>
	import WavesTopDark from "$lib/assets/WavesTopDark.svelte";
	import WavesBottomDark from "$lib/assets/WavesBottomDark.svelte";
	import { onMount } from "svelte";

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

	let isMobile = false;
	onMount(() => {
		isMobile =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			);
	});
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

		<div
			class="flex flex-row flex-wrap justify-center max-w-[1000px] py-5

			[&>a:nth-child(even):hover>*]:border-emerald-500
			[&>a:nth-child(even)>*]:peer-hover:border-emerald-500
				[&>a:nth-child(even)>i:hover]:shadow-[15px_-15px_theme('colors.emerald.500')]
				[&>a:nth-child(even)>i]:peer-hover:shadow-[15px_-15px_theme('colors.emerald.500')]

			[&>a:nth-child(odd):hover>*]:border-rose-500
			[&>a:nth-child(odd)>*]:peer-hover:border-rose-500
				[&>a:nth-child(odd)>i:hover]:shadow-[15px_-15px_theme('colors.rose.500')]
				[&>a:nth-child(odd)>i]:peer-hover:shadow-[15px_-15px_theme('colors.rose.500')]

				[&>a:hover>.skillName]:opacity-100
				[&>a>.skillName]:peer-hover:opacity-100
				[&>a:hover]:scale-110
				[&>a]:peer-hover:scale-110"
		>
			{#each SKILLS as skill}
				<a
					href={skill.link}
					class="pointer-events-none {!isMobile && 'md:pointer-events-auto'} 
						group flex flex-col items-center m-4 bg-inherit transition-all"
				>
					<i
						class="text-6xl {skill.icon} rounded p-5 mx-5 mt-5 border border-transparent duration-150"
					/>
					<div class="w-[1px] h-4 border border-transparent duration-150" />
					<div
						class="skillName text-xl text-white rounded-md px-3 py-2 opacity-0 border-2 border-transparent duration-150"
					>
						{skill.name}
					</div>
				</a>
			{/each}
		</div>
	</div>

	<WavesBottomDark classStyles="z-20 min-w-[2000px] w-screen" />
</div>
