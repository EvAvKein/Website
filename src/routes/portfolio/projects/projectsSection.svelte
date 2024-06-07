<section id="projectsSection">
	<section id="categoryButtons">
		<button
			on:click={() => (selectedCategory = "current")}
			class={"core_borderButton" + (selectedCategory === "current" ? " inert" : "")}
			inert={selectedCategory === "current"}>Current</button
		>
		<button
			on:click={() => (selectedCategory = "archive")}
			class={"core_borderButton" + (selectedCategory === "archive" ? " inert" : "")}
			inert={selectedCategory === "archive"}>Archive</button
		>
	</section>
	<div id="projectsList">
		{#if selectedCategory === "current"}
			<ToolWrapper>
				<div class="projectsCategory">
					<Project
						logoSrc={"/work-in-progress.svg"}
						logoAlt={"Construction area cone icon"}
						name={"[NOT YET PUBLIC]"}
						description={"Developing an app, website, and shared backend (as the Founding Engineer/CTO of pre-seed startup). We'll publicly advertise the concept closer to launch, techs list incomplete"}
						bind:selectedTechs
						technologies={"React Native, TypeScript, Express, MongoDB, Jest & Playwright, Docker"}
						techsList={[
							"HTML",
							"CSS",
							"JavaScript",
							"TypeScript",
							"JSDoc",
							"React",
							"NodeJS",
							"Express",
							"MongoDB",
							"Jest",
							"Playwright",
							"Docker",
						]}
						links={undefined}
					/>
					<hr />
					<Project
						logoSrc={"/dialplan.svg"}
						logoAlt={"The words Dial Plan, in an old-tech font"}
						name={"Dialplan"}
						description={"Scheduling invitations service for call centers"}
						bind:selectedTechs
						technologies={"React, TypeScript, Express, PostgreSQL, Jest & Playwright, Docker"}
						techsList={[
							"HTML",
							"CSS",
							"JavaScript",
							"TypeScript",
							"React",
							"NodeJS",
							"Express",
							"PostgreSQL",
							"Jest",
							"Playwright",
							"Docker",
							"Bash",
						]}
						links={[
							{
								type: "github",
								url: "https://github.com/EvAvKein/dialplan",
							},
						]}
					/>
					<hr />
					<Project
						logoSrc={"/eak.svg"}
						logoAlt={"The initials E.A.K, with E & K aligned and rotated to neatly overlap with the A inbetween"}
						name={"This Website"}
						description={"My personal & portfolio website"}
						bind:selectedTechs
						technologies={"SvelteKit, TypeScript, Vercel"}
						techsList={["HTML", "CSS", "JavaScript", "TypeScript", "Svelte"]}
						links={[
							{
								type: "github",
								url: "https://github.com/EvAvKein/website",
							},
						]}
					/>
				</div>
			</ToolWrapper>
		{:else}
			<ToolWrapper>
				<div class="projectsCategory">
					<Project
						logoSrc={"/filterJobsFeeds.svg"}
						logoAlt={"Icon of papers titled 'Job' dropped inside a filter"}
						name={"Filter Jobs Feeds"}
						description={"Browser extension for filtering jobs feeds through blacklisting text"}
						bind:selectedTechs
						technologies={"HTML, CSS, JavaScript, JSDoc"}
						techsList={["HTML", "CSS", "JavaScript", "JSDoc"]}
						links={[
							{
								type: "github",
								url: "https://github.com/EvAvKein/FilterJobsFeeds",
							},
							{
								type: "chrome",
								url: "https://chrome.google.com/webstore/detail/filter-jobs-feeds/edebgnaafidhaiepkjknfmdonoagkjhe",
							},
							{
								type: "firefox",
								url: "https://addons.mozilla.org/en-CA/firefox/addon/filter-jobs-feeds",
							},
						]}
					/>
					<hr />
					<Project
						logoSrc={"/distillogue.svg"}
						logoAlt={"Icon of chemistry flask, with bubbling liquids, hung on a stand"}
						name={"Distillogue"}
						description={"Forum platform with configurable interactions"}
						bind:selectedTechs
						technologies={"Vue, TypeScript, Express, MongoDB, Playwright, Docker"}
						techsList={[
							"HTML",
							"CSS",
							"JavaScript",
							"TypeScript",
							"Vue",
							"NodeJS",
							"Express",
							"MongoDB",
							"Playwright",
							"Docker",
							"Bash",
						]}
						links={[
							{
								type: "github",
								url: "https://github.com/EvAvKein/distillogue",
							},
						]}
					/>
					<hr />
					<Project
						logoSrc={"/warehouse.svg"}
						logoAlt={"Crate icon"}
						name={"Warehouse"}
						description={'A slot-based inventory management interface, inspired by those of various "sandbox" video-games'}
						bind:selectedTechs
						technologies={"HTML, CSS, JavaScript"}
						techsList={["HTML", "CSS", "JavaScript"]}
						links={[
							{type: "github", url: "https://github.com/EvAvKein/Warehouse"},
							{type: "browser", url: "https://warehouse.evavkein.com"},
						]}
					/>
				</div>
			</ToolWrapper>
		{/if}
	</div>
</section>

<script lang="ts">
	import ToolWrapper from "../../../lib/swappableContentWrapper.svelte";
	import Project from "./projectItem.svelte";
	import type {techsList} from "../techs/techs";

	export let selectedTechs: techsList;
	let selectedCategory: "current" | "archive" = "current";
</script>

<style>
	#projectsSection {
		flex-grow: 1; /* for interaction with parent component */
		display: flex;
		flex-direction: column;
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
		flex-grow: 1;
		background-color: var(--backgroundColor);
		overflow: hidden;
		box-shadow: inset 0 0 0.5rem 0.1rem black;
	}

	.projectsCategory {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		padding: 0.75rem 0.5rem;
		gap: 0.25rem;
	}

	.projectsCategory hr {
		border: 0.1rem solid color-mix(in srgb, var(--textSubColor), transparent 50%);
		width: 100%;
	}
</style>
