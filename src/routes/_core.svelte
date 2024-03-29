<svelte:head>
	<link rel="icon" href={headFavicon} />
	<title>{headTitle}</title>
	<meta name="description" content={headDescription} />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Fira+Code" />
</svelte:head>

<div id="pageWrapper">
	<div
		id="page"
		class="core_blueprint"
		in:fly={{x: 0 - window.innerWidth, duration: transitionDuration, delay: transitionDuration}}
		out:fly={{x: window.innerWidth, duration: transitionDuration}}
		on:introstart={noScrollWhilePageTransitions}
	>
		<slot />
	</div>
</div>

<script lang="ts">
	import {onMount} from "svelte";
	import {fly} from "svelte/transition";

	export let headFavicon = "/eak.svg";
	export let headTitle: string;
	export let headDescription: string;

	const transitionDuration = 500;

	let main: HTMLElement;
	onMount(() => (main = document.querySelector("main")!));

	function noScrollWhilePageTransitions() {
		main.style.overflow = "hidden";
		setTimeout(() => {
			main.style.overflow = "";
		}, transitionDuration);
	}
</script>

<style global>
	#pageWrapper {
		min-height: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	#page {
		background-color: var(--backgroundColor);
		padding: clamp(0.75em, 1vw, 1.5em);
		max-width: 67.5em;
		border-radius: 0.25em;
		box-shadow: 0 0 0.5em 0.1em black;
	}

	/*~~~~~~~~~~~~\
    CORE STYLES
  \~~~~~~~~~~~~*/
	:root {
		/* filters created via https://evavkein.com/toolbox/cssFilterGenerator */
		--textColor: #ececec;
		--filterToTextColor: brightness(0) saturate(100%) invert(99%) sepia(2%) saturate(442%) hue-rotate(213deg)
			brightness(115%) contrast(85%);
		--textSubColor: #bebebe;
		--filterToTextSubColor: brightness(0) saturate(100%) invert(81%) sepia(1%) saturate(0%) hue-rotate(18deg)
			brightness(94%) contrast(93%);
		--backgroundColor: #042657;
		--filterToBackgroundColor: brightness(0) saturate(100%) invert(13%) sepia(46%) saturate(2420%) hue-rotate(198deg)
			brightness(92%) contrast(105%);
		--backgroundSubColor: #042e68;
		--filterTobackgroundSubColor: brightness(0) saturate(100%) invert(14%) sepia(40%) saturate(3859%) hue-rotate(204deg)
			brightness(88%) contrast(101%);
		--highlightColor: #f5cb32;
		--filterToHighlightColor: brightness(0) saturate(100%) invert(91%) sepia(83%) saturate(7499%) hue-rotate(325deg)
			brightness(101%) contrast(98%);
		--highlightSubColor: #d8b434;
		--filterToHighlightSubColor: brightness(0) saturate(100%) invert(62%) sepia(76%) saturate(412%) hue-rotate(9deg)
			brightness(102%) contrast(84%);
	}

	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		min-height: 100%;
		color: var(--textColor);
		font-family: "Fira Code", monospace;
		letter-spacing: 0.03em;
		text-underline-offset: 0.1em;
		font-size: clamp(0.9em, 2.5vw, 1.1em);
	}

	:focus {
		outline: none;
	}

	img {
		pointer-events: none;
		user-select: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}

	button,
	a,
	summary {
		cursor: pointer;
	}
	button,
	a,
	summary,
	input,
	textarea {
		font-size: inherit;
		font-family: inherit;
		border: none;
	}

	::-webkit-scrollbar {
		width: 1em;
		height: 1em;
	}
	::-webkit-scrollbar-track {
		background: transparent;
		margin: 0.2em;
	}
	::-webkit-scrollbar-corner {
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--textColor);
		border: 0.25em solid transparent;
		background-clip: content-box;
		border-radius: 3em;
	}
	::-webkit-scrollbar-thumb:hover {
		background-color: var(--textSubColor);
	}
	::-webkit-scrollbar-thumb:active {
		border-width: 0.2em;
	}

	/*~~~~~~~~~~~~~~~~~~~~~\
    CORE STYLING CLASSES
  \~~~~~~~~~~~~~~~~~~~~~*/
	.core_blueprint {
		background-size: 1.5rem 1.5rem;
		background-position: center;
		background-image: linear-gradient(to right, #ffffff06 0.15rem, transparent 0),
			linear-gradient(to bottom, #ffffff06 0.15rem, transparent 0);
	}

	.core_backgroundButton {
		color: var(--backgroundColor);
		text-align: center;
		background-color: var(--textColor);
		border-radius: 0.2em;
		text-decoration: none;
		padding: 0.25em 0.5em;
		border-radius: 0.5em;
		transition: background-color 350ms;
	}
	.core_backgroundButton:focus,
	.core_backgroundButton:hover {
		background-color: var(--highlightSubColor);
	}
	.core_backgroundButton:active {
		background-color: var(--highlightColor);
	}
	.core_backgroundButton[inert="true"] {
		background-color: var(--textSubColor);
	}

	.core_contentButton {
		color: var(--textColor);
		text-decoration: none;
		background-color: transparent;
		padding: 0;
	}
	.core_contentButton img {
		height: inherit;
		filter: var(--filterToTextColor);
	}
	.core_contentButton:focus,
	.core_contentButton:hover {
		color: var(--highlightSubColor);
	}
	.core_contentButton:active {
		color: var(--highlightColor);
	}
	.core_contentButton:focus img,
	.core_contentButton:hover img {
		filter: var(--filterToHighlightSubColor);
	}
	.core_contentButton:active img {
		filter: var(--filterToHighlightColor);
	}
	.core_contentButton[inert="true"] {
		color: var(--textSubColor);
	}
	.core_contentButton[inert="true"] img {
		filter: var(--filterToTextSubColor);
	}

	.core_contentButton svg {
		height: inherit;
		width: min-content;
	}
	.core_contentButton svg path,
	.core_contentButton svg rect,
	.core_contentButton svg circle {
		transition: fill 350ms;
		fill: var(--textColor);
	}
	.core_contentButton:focus svg path,
	.core_contentButton:hover svg path,
	.core_contentButton:focus svg rect,
	.core_contentButton:hover svg rect,
	.core_contentButton:focus svg circle,
	.core_contentButton:hover svg circle {
		fill: var(--highlightSubColor);
	}
	.core_contentButton:active svg path,
	.core_contentButton:active svg rect,
	.core_contentButton:active svg circle {
		fill: var(--highlightColor);
	}
</style>
