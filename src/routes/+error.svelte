<Core headTitle="EvAvKein: 404" headDescription="Eve Aviv Keinan's error page; including the site's navigation list">
	<main>
		{#if offline}
			<h1>Error: No connection!</h1>
			<hr />
			<p>Looks like your device is offline, check your connection and refresh once it's back up? ¯\_(ツ)_/¯</p>
		{:else}
			<h1>404: Page not found!</h1>
			<hr />
			<p>Maybe you'll find your destination in the navigation menu? ¯\_(ツ)_/¯</p>
		{/if}
	</main>
</Core>

<script lang="ts">
	import Core from "./_core.svelte";
	import {onMount} from "svelte";

	let offline: boolean;
	onMount(() => {
		offline = !window.navigator.onLine;
	});
</script>

<style>
	main {
		margin-top: 0.5rem;
		text-align: center;
	}

	hr {
		border-color: var(--textSubColor);
		margin: 0.5rem 0.5rem 1.25rem;
	}
</style>
