<section>
	<h3 class="core_contentButton">
		<TechSelectionButton {techs} bind:selectedTechs>{title}</TechSelectionButton>
	</h3>

	<section class="techsBox">
		{#each techs as techName}
			<TechItem {techName} techSrc={`/techs/${techName.replaceAll(" ", "").toLowerCase()}.svg`} bind:selectedTechs />
		{/each}
	</section>
</section>

<script lang="ts">
	import TechSelectionButton from "./TechSelectionButton.svelte";
	import TechItem from "./techItem.svelte";
	import type {techsList} from "./techs";

	export let title: string;
	export let techs: techsList; // structured like that because it's concise and readable when passed as prop
	export let selectedTechs: techsList;
</script>

<style>
	h3 {
		color: var(--textColor);
		width: fit-content;
		padding: 0;
		margin: 0;
		border-bottom: 0.1rem dashed var(--textSubColor);
	}

	.techsBox {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		gap: 0.5rem;
	}
</style>
