<button
	on:click={() => (selectedTechs = techs)}
	on:blur={() => {
		setTimeout(() => {
			if (selectedTechs.length === techs.length && selectedTechs.every((tech, index) => tech === techs[index])) {
				selectedTechs = [];
			}
		}, 100);
	}}
>
	<slot />
</button>

<script lang="ts">
	import type {techsList} from "./techs";

	export let techs: techsList; // structured like that because it's concise and readable when passed as prop
	export let selectedTechs: techsList;
</script>

<style>
	button {
		display: inline;
		font-size: inherit;
		color: inherit;
		text-align: inherit;
		padding: 0;
		text-decoration: inherit;
		background-color: transparent;
	}
</style>
