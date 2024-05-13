<script>
	import "./global.css";
	import Menu from "./components/Menu.svelte";
	import { setContext } from "svelte";
	import { writable } from "svelte/store";

	setContext(
		"menu",
		writable({
			active: false,
			animated: false,
		})
	);
</script>

<Menu></Menu>
<slot />
