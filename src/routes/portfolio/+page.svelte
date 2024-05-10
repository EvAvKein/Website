<Core
	headTitle="EvAvKein: Portfolio"
	headDescription="Eve Aviv Keinan's programming portfolio page; including project summaries with links, categorized lists of tech experience, and information regarding the CV"
>
	<section id="portfolio">
		<section id="technologies">
			<h2>Technologies</h2>
			<TechStack bind:selectedTechs />
		</section>

		<section id="projects">
			<h2>Projects</h2>
			<Projects bind:selectedTechs />
		</section>

		<section id="cv">
			<h2>CV</h2>
			<p>
				The summary is that - programming aside - I've led a community management team and volunteered for civil service
				at a library.<br />
				You're welcome to contact me for the proper CV document!
			</p>
		</section>
	</section>
</Core>

<script lang="ts">
	import Core from "../_core.svelte";
	import TechStack from "./techs/techsSection.svelte";
	import Projects from "./projects/projectsSection.svelte";
	import type {techsList} from "./techs/techs.ts";

	let selectedTechs: techsList = [];
</script>

<style>
	#portfolio {
		height: 100%;
		max-width: 120rem;
		margin: auto;
	}

	h2 {
		font-size: 2.75rem;
	}
	h2 {
		text-align: center;
		margin-bottom: 0.25rem;
	}

	#technologies {
		grid-area: techs;
	}
	#projects {
		grid-area: projs;
	}
	#cv {
		grid-area: cv;
	}
	#portfolio > section + section {
		margin-top: 1.5rem;
	}

	#cv h2 {
		margin-bottom: 0;
	}

	#cv p {
		max-width: 45rem;
		margin-inline: auto;
		padding-block: 0.5rem 1rem;
	}

	@media (min-width: 70rem) {
		#portfolio > section + section {
			margin-top: 0;
		}

		#portfolio {
			display: grid;
			grid-template-areas:
				"projs techs"
				"cv cv";
			grid-template-columns: auto clamp(27.5rem, 42.5%, 50rem);
			gap: 1rem;
		}

		#projects {
			display: flex;
			flex-direction: column;
		}

		#projects > :nth-child(2) {
			flex-grow: 1;
		}
	}
</style>
