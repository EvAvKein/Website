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
	#portfolio > section + section {
		margin-top: 1.5rem;
	}


	@media (min-width: 70rem) {
		#portfolio > section + section {
			margin-top: 0;
		}

		#portfolio {
			display: grid;
			grid-template-areas:
				"projs techs";
			grid-template-columns: auto clamp(30rem, 45%, 55rem);
		}
		
		#projects {
			overflow-y: scroll;
			padding-right: 1.5rem;
		}

		#technologies {
			padding-left: 1.5rem;
		}

		#projects > :nth-child(2) {
			flex-grow: 1;
		}
	}
</style>
