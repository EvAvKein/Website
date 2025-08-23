<section>
	<Category title="Frontend" techs={["HTML", "CSS", "React", "React Native", "Vue", "Svelte"]} bind:selectedTechs />
	<hr />
	<Category title="Fullstack" techs={["JavaScript", "JSDoc", "TypeScript"]} bind:selectedTechs />
	<hr />
	<Category title="Backend" techs={["NodeJS", "Express", "MongoDB", "PostgreSQL"]} bind:selectedTechs />
	<hr />
	<Category title="Systems" techs={["C", "C++"]} bind:selectedTechs />
	<hr />
	<Category title="Testing" techs={["Jest", "Playwright", "GDB"]} bind:selectedTechs />
	<hr />
	<Category title="Deployment" techs={["Bash", "Docker", "Expo"]} bind:selectedTechs />
	<hr />
	<Category
		title="Development"
		techs={["NeoVim", "Visual Studio Code", "GitHub", "Git", "Linux", "Figma", "Chrome Devtools"]}
		bind:selectedTechs
	/>
</section>

<script lang="ts">
	import Category from "./techCategory.svelte";
	import type {techsList} from "./techs";

	export let selectedTechs: techsList;
</script>

<style>
	hr {
		margin: 0.2rem 0;
		border-color: var(--textSubColor);
	}
</style>
