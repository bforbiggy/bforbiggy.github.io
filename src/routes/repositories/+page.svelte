<script>
	import { onMount } from "svelte";

	let repos = null;
	let user = null;

	onMount(async () => {
		console.log("WTF");
		let response, data;

		response = await fetch("https://api.github.com/users/bforbiggy/repos");
		data = await response.json();
		repos = data
			.filter((item) => !item.fork)
			.sort(
				(a, b) => b.stargazers_count - a.stargazers_count || b.size - a.size
			);

		response = await fetch("https://api.github.com/users/bforbiggy");
		data = await response.json();
		user = data;
	});
</script>

<div
	class="h-screen min-w-[100vw] max-w-[100vw] bg-slate-950
			flex justify-center p-28"
>
	{#if !user}
		<p>Waiting....</p>
	{:else}
		<div
			class="w-min h-min bg-slate-900 rounded-md border-2 border-slate-800
				p-3 flex flex-col gap-2 text-center text-amber-50"
		>
			<img
				class="min-w-64 max-w-64 h-auto rounded-full
					border-4 border-teal-800"
				src={user.avatar_url}
				alt=""
			/>
			<div class="flex justify-between text-3xl py-1">
				<span>🎴</span>
				<p>{user.login}</p>
				<span>🎴</span>
			</div>
			<p>{user.bio}</p>
			<div class="w-full flex justify-between text-md">
				<p>
					<span class="icon-[carbon--cics-program] text-red-500" />
					Repositories
				</p>
				<p class="text-red-500">{user.public_repos}</p>
			</div>
			<div class="w-full flex justify-between text-md">
				<p>
					<span class="icon-[carbon--user-profile] text-red-500" />
					Followers
				</p>
				<p class="text-red-500">{user.followers}</p>
			</div>
		</div>
	{/if}
</div>
