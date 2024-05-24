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
			class="w-min h-min border-2 border-red-500
			flex flex-col text-red-500"
		>
			<img class="max-w-[300px] rounded-full" src={user.avatar_url} alt="" />
			<p>{user.login}</p>
			<p>{user.bio}</p>
			<p>$ Repositories ~{user.public_repos}</p>
			<p>$ Followers ~{user.followers}</p>
		</div>
	{/if}
</div>
