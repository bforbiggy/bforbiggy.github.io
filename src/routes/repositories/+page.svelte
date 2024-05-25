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
	class="min-h-[100vh] min-w-[100vw] max-w-[100vw] bg-slate-950
			flex justify-center gap-32 p-28"
>
	<div
		class="z-10 fixed inset-0 m-auto w-full h-full bg-[url('$lib/assets/Sprinkle.svg')] opacity-30"
	/>

	{#if !user}
		<p class="z-20 text-middle text-4xl text-amber-50">Loading....</p>
	{:else}
		<div
			class="z-20 w-min h-min bg-slate-900 rounded-md border-2 border-slate-800
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
					Repositories:
				</p>
				<p class="text-red-500">{user.public_repos}</p>
			</div>
			<div class="w-full flex justify-between text-md">
				<p>
					<span class="icon-[carbon--user-profile] text-red-500" />
					Followers:
				</p>
				<p class="text-red-500">{user.followers}</p>
			</div>
		</div>

		<div class="z-20 flex flex-col gap-6 text-center">
			{#each repos as repo}
				<a
					class="max-w-[500px] flex flex-col gap-3 rounded-xl
						border-2 border-neutral-800 p-4 bg-slate-950
						hover:scale-110 hover:border-rose-400 transition-all
						text-wrap text-emerald-50"
					href={repo.html_url}
					target="_blank"
				>
					<div class="text-left text-2xl text-white">
						<span class="icon-[carbon--branch] text-green-500" />
						{repo.name}
					</div>

					<div class="min-h-20 text-left">
						{repo.description ?? "No description!"}
					</div>
					<div class="flex justify-around">
						<div class="flex flex-col">
							<div>Main Language</div>
							<div>
								{repo.language ?? "Unknown"}
							</div>
						</div>

						<div class="flex flex-col">
							<div>Created On</div>
							<div>
								{new Date(repo.created_at).toLocaleDateString()}
							</div>
						</div>

						<div class="flex flex-col">
							<span class="icon-[carbon--star-filled]" />
							<div>{repo.stargazers_count}</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
