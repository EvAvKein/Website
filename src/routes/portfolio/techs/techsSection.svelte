<section id="techs">
	<section id="languages">
		<h4>
			<Tooltip text={"Languages"} tooltip={"...and frameworks, libraries, etc"} />
		</h4>
		<TechsBox
			bind:selectedTech
			techsByNameAndSrc={[
				["HTML", "/techs/html.svg"],
				["CSS", "/techs/css.svg"],
				["JavaScript", "/techs/javascript.svg"],
				["JSDoc", "/techs/jsdoc.svg"],
				["TypeScript", "/techs/typescript.svg"],
				["Vue", "/techs/vue.svg"],
				["React", "/techs/react.svg"],
				["Svelte & SvelteKit", "/techs/svelte.svg"],
				["MongoDB", "/techs/mongoDb.svg"],
				["PostgreSQL", "/techs/postgres.svg"],
				["Express", "/techs/express.svg"],
				["Jest", "/techs/jest.svg"],
				["Playwright", "/techs/playwright.svg"],
			]}
		/>
	</section>
	<hr />
	<section id="tools">
		<h4>Tools</h4>
		<TechsBox
			bind:selectedTech
			techsByNameAndSrc={[
				["Visual Studio Code", "/techs/vsCode.svg"],
				["Chrome DevTools", "/techs/chromeDevtools.svg"],
				["GitHub", "/techs/github.svg"],
				["Git", "/techs/git.svg"],
				["Docker", "/techs/docker.svg"],
				["Node.js", "/techs/nodeJs.svg"],
				["Linux", "/techs/linux.svg"],
			]}
		/>
	</section>
</section>
{#if selectedTech}
	<hr transition:slide />
	{#key selectedTech}
		<div transition:slide>
			<p out:fly={{y: -100, opacity: 0}} in:fly={{y: -100, opacity: 0}}>{selectedTech}</p>
		</div>
	{/key}
{/if}

<script lang="ts">
	import {slide, fly} from "svelte/transition";
	import TechsBox from "./techsBox.svelte";
	import Tooltip from "../../../lib/tooltip.svelte";

	let selectedTech: string | null = null;
</script>

<style>
	#techs {
		display: flex;
	}

	#languages,
	#tools {
		display: flex;
		flex-direction: column;
		/* TechsBox component has flex-grow which relies on these */
	}

	h4 {
		font-size: 2em;
		width: fit-content;
		margin: auto;
	}

	hr {
		margin: 0.2em 0;
	}

	p {
		font-size: 1.1em;
		text-align: center;
		padding-top: 0.4em;
	}
</style>
