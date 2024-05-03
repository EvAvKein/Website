<div class={"techItem" + (selected ? " selected" : "")}>
	<TechSelectionButton techs={[techName]} {selectedTechs}>
		<img src={techSrc} alt={techName + "'s logo"} />
		<div>{techName}</div>
	</TechSelectionButton>
</div>

<script lang="ts">
	import TechSelectionButton from "./TechSelectionButton.svelte";
	import type {tech, techsList} from "./techs";

	export let techName: tech;
	export let techSrc: string;
	export let selectedTechs: techsList;

	$: selected = selectedTechs && selectedTechs.includes(techName);
</script>

<style>
	.techItem {
		position: relative;
		background-color: transparent;
		padding: 0.75rem;
	}

	.techItem img {
		height: 2.75rem;
		width: 2.75rem;
		filter: drop-shadow(0 0 0.3rem black);
		transition: all 250ms ease-in-out;
		vertical-align: bottom; /* removes unduely-added space (see https://stackoverflow.com/a/27999850) */
	}
	.techItem.selected img,
	.techItem:hover img,
	.techItem:focus-within img {
		transform: scale(0.8) translateY(-0.35rem);
		filter: drop-shadow(0 0 0.35rem var(--highlightColor));
	}

	.techItem div {
		position: absolute;
		font-size: 0.9rem;
		top: 70%;
		left: 50%;
		transform: translateX(-50%);
		color: var(--textColor);
		background-color: var(--backgroundColor);
		border: 0.05rem solid color-mix(in srgb, var(--textSubColor), transparent 66%);
		font-weight: bold;
		padding: 0.25rem;
		opacity: 0;
		transition: all 250ms ease-in-out;
	}

	.techItem.selected div,
	.techItem:hover div,
	.techItem:focus-within div {
		opacity: 1;
	}
</style>
