<section id="projectsSection">
	<section id="categoryButtons">
		{#each filters as filter}
			<button 
				on:click={() => (currentFilter = filter)}
				class={"core_borderButton" + (currentFilter === filter ? " inert" : "")}
				inert={currentFilter === filter}>{filter}</button
			>
		{/each}
	</section>
	{#key currentFilter}
		<SwapWrapper shadowless={true}>
			<div id="projectsList">
				{#each filteredProjects as project, index}
								{#if index}
									<hr />
								{/if}
								{#if currentFilter === "All" || project.categories.includes(currentFilter)}
									<ProjectItem
										logoSrc={project.logoSrc}
										logoAlt={project.logoAlt}
										name={project.name}
										description={project.description}
										technologies={project.technologies}
										techsList={project.techsList}
										link={project.link}
										bind:selectedTechs
									/>
								{/if}
				{/each}
			</div>
		</SwapWrapper>
	{/key}
</section>

<script lang="ts">
	import ProjectItem from "./projectItem.svelte";
	import {projects, projectCategories} from "./projects";
	import type {techsList} from "../techs/techs";
	import SwapWrapper from "$lib/swappableContentWrapper.svelte";

	export let selectedTechs: techsList;

	const filters = ["All", ...projectCategories] as const;
	let currentFilter: (typeof filters)[number] = "All";

	$: filteredProjects =
		currentFilter === "All"
			? projects
			: projects.filter((project) => 
					project.categories.includes(currentFilter as typeof projectCategories[number])
				);
</script>

<style>
	#projectsSection {
		flex-grow: 1; /* for interaction with parent component */
	}

	#categoryButtons {
		display: flex;
		gap: 0.5rem;
	}
	button {
		--shadow: 0 0 0.25rem 0.1rem;
		flex-grow: 0.1;
		align-self: flex-end;
		padding: 0.5rem;
		box-shadow: var(--shadow) black;
		scale: 0.925;
		transition: all 400ms;
	}
	button[inert] {
		font-weight: bold;
		border-color: var(--textSubColor);
		background-color: var(--textSubColor);
		flex-grow: 1;
		scale: 1;
	}

	#projectsList {
		margin-top: 0.5rem;
		display: flex;
		flex-direction: column;
		padding: 0.75rem 0.5rem;
		gap: 0.25rem;
		flex-grow: 1;
		background-color: var(--backgroundColor);
	}

	hr {
		border: 0.1rem solid color-mix(in srgb, var(--textSubColor), transparent 50%);
		width: 100%;
	}
</style>
