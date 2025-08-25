<article>
	<img class="projImg" src={logoSrc} alt={logoAlt} />
	<h3><a href={link}>{name}</a></h3>
	<div class="projectTechs core_contentButton">
		<TechSelectionButton techs={techsList} bind:selectedTechs>{technologies}</TechSelectionButton>
	</div>

	<p>{description}</p>
</article>

<script lang="ts">
	import TechSelectionButton from "../techs/TechSelectionButton.svelte";
	import type {techsList} from "../techs/techs";

	export let logoSrc: string;
	export let logoAlt: string;
	export let name: string;
	export let description: string;
	export let technologies: string;
	export let techsList: techsList;
	export let link: string | null;

	export let selectedTechs: techsList;
</script>

<style>
	article {
		border-radius: 0.25rem;
		display: grid;
		grid-template-columns: min-content 1fr max-content;
		grid-template-rows: min-content min-content 1fr;
		grid-template-areas:
			"logo name links"
			"logo techs links"
			"description description links";
	}

	.projImg {
		grid-area: logo;
		height: 3rem;
		width: auto;
		margin-right: 0.35rem;
		align-self: center;
	}

	h3 {
		grid-area: name;
		font-size: 1.75rem;
	}

	.projectTechs {
		grid-area: techs;
		width: fit-content;
		font-size: 0.9rem;
		color: var(--textColor);
		text-decoration: underline dashed var(--textSubColor) 0.05em;
		text-underline-offset: 0.3rem;
	}

	p {
		grid-area: description;
		align-self: center;
		margin-top: 0.5rem;
		white-space: pre-wrap;
	}
</style>
