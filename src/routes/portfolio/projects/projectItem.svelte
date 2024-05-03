<article>
	<img class="projImg" src={logoSrc} alt={logoAlt} />
	<h3>{name}</h3>
	<div class="projectTechs core_contentButton">
		<TechSelectionButton techs={techsList} bind:selectedTechs>{technologies}</TechSelectionButton>
	</div>

	<p>{description}</p>
	{#if links}
		<section class="projectLinks">
			{#each links as link}
				<a href={link.url} target="_blank" class="core_contentButton">
					{#if link.type === "github"}
						<img src="/techs/github.svg" alt="GitHub" />
					{:else if link.type === "browser"}
						<img src="/browser.svg" alt="Browser window" />
					{:else if link.type === "chrome"}
						<img src="/chrome.svg" alt="Google Chrome" />
					{:else if link.type === "firefox"}
						<img src="/firefox.svg" alt="Firefox" />
					{/if}
				</a>
			{/each}
		</section>
	{/if}
</article>

<script lang="ts">
	import TechSelectionButton from "../techs/TechSelectionButton.svelte";
	import type {techsList} from "../techs/techs";

	export let logoSrc: string;
	export let logoAlt: string;
	export let name: string;
	export let technologies: string;
	export let techsList: techsList;
	export let selectedTechs: techsList;
	export let description: string;
	export let links: {type: "github" | "browser" | "chrome" | "firefox"; url: string}[] | undefined;
</script>

<style>
	article {
		border-radius: 0.25rem;
		display: grid;
		grid-template-columns: min-content 1fr min-content;
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

	.projectLinks {
		grid-area: links;
		border-left: 0.1rem solid color-mix(in srgb, var(--textSubColor), transparent 75%);
		padding-left: 0.25rem;
		margin-left: 1rem;
		height: inherit;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.projectLinks a {
		box-sizing: content-box;
		height: 1.5rem;
		width: 1.5rem;
		padding: 0.5rem;
	}
	.projectLinks a img {
		height: inherit;
		width: inherit;
	}
</style>
