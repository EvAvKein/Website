<Core
	headTitle="EvAvKein: Toolbox"
	headDescription="Eve Aviv Keinan's toolbox page; including a variety of programming-related utilities"
>
	<section id="toolbox">
		<section id="tools">
			<nav>
				{#each tools as tool}
					<a
						href={"/toolbox/" + tool.id}
						class={"core_borderButton" +
							(tool.id === currentToolId
								? " inert" /* < class is a workaround, the actual attribute somehow only toggles between "inert" (no attribute value) or no attribute */
								: "")}
						inert={tool.id === currentToolId}>{tool.name}</a
					>
				{/each}
			</nav>
			<section id="currentTool">
				<slot />
			</section>
		</section>
	</section>
</Core>

<script lang="ts">
	import Core from "../_core.svelte";
	import {page} from "$app/stores";
	import {Tool} from "./toolClass";

	const tools = [
		new Tool("Debug Snippets", "debugSnippets"),
		new Tool("CSS Filter Generator", "cssFilterGenerator"),
		new Tool("Percent-RGB-Hex Converter", "percentRgbHexConverter"),
	];

	$: currentToolId = $page.url.pathname.replace("/toolbox/", "").replace("/", "");
</script>

<style>
	#tools {
		margin: 1rem auto 0;
		--wrapperPadding: 1rem;
		padding: var(--wrapperPadding);
		background-color: var(--backgroundSubColor);
		width: clamp(21rem, 85vw, 58.5rem);
		box-shadow: 0 0 1rem 0 black;
		display: flex;
		flex-direction: column;
	}

	nav {
		padding-bottom: var(--wrapperPadding);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 0.75rem;
	}

	a {
		font-size: 1.3rem;
		text-align: center;
	}
	a[inert] {
		background-color: var(--textSubColor);
	}

	#currentTool {
		background-color: var(--backgroundColor);
		flex-grow: 1;
		overflow: auto;
		box-shadow: inset 0 0 0.5rem 0 black;
		transition: all 350ms;
	}

	@media (min-width: 70rem) {
		#tools {
			flex-direction: row;
			flex-grow: 1;
		}

		nav {
			flex-basis: 25%;
			flex-direction: column;
			justify-content: flex-start;
			gap: 0.75rem;
			padding-bottom: unset;
			padding-right: var(--wrapperPadding);
		}

		#currentTool {
			flex-basis: 75%;
		}
	}
</style>
