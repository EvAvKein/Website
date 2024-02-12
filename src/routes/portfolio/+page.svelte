<Core
	headTitle="EvAvKein: Portfolio"
	headDescription="Eve Aviv Keinan's programming portfolio page; including summaries with links to his projects, lists of the techs he has experience with, and information regarding his CV"
>
	<section id="portfolio">
		<h2>Portfolio</h2>
		<section id="technologies" class="core_blueprint">
			<h3>Technologies</h3>
			<Techs />
		</section>

		<section id="projects" class="core_blueprint">
			<h3>Projects</h3>
			<Projects />
		</section>

		<section id="cv" class="core_blueprint">
			<h3>CV</h3>
			<p>
				The summary is that I've led a community management team and volunteered for civil service at a library, you're
				welcome to contact me for the full CV document!
			</p>
		</section>
	</section>
</Core>

<script lang="ts">
	import Core from "../_core.svelte";
	import Techs from "./techs/techsSection.svelte";
	import Projects from "./projects/projectsSection.svelte";
</script>

<style>
	h2 {
		font-size: 3.5em;
	}
	h3 {
		font-size: 3em;
	}
	h2,
	h3 {
		text-align: center;
		margin-bottom: 0.25em;
	}

	#portfolio > section {
		background-color: var(--backgroundSubColor);
		border-radius: 0.25em;
		padding: 0.5em 1em 0.5em;
		box-shadow: 0 0 0.5em 0.1em black;
	}
	#portfolio > section + section {
		margin-top: 1.5em;
	}

	#cv h3 {
		margin-bottom: 0;
	}
</style>
