<svelte:head>
	<link rel="icon" href={headFavicon} />
	<title>{headTitle}</title>
	<meta name="description" content={headDescription} />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Fira+Code&family=Noto+Color+Emoji&display=swap" />
</svelte:head>

<SwappableContentWrapper maintainParentHeight={true}>
	<div id="page">
		<slot />
	</div>
</SwappableContentWrapper>

<script lang="ts">
	import SwappableContentWrapper from "../lib/swappableContentWrapper.svelte";

	export let headFavicon = "/eak.svg";
	export let headTitle: string;
	export let headDescription: string;
</script>

<style global>
	#page {
		height: 100%;
		padding: clamp(0.75rem, 1vw, 1.5rem);
		background-color: var(--backgroundColor);
	}

	/*~~~~~~~~~~~~\
    CORE STYLES
  \~~~~~~~~~~~~*/
	:root {
		color-scheme: dark;
		/* filters created via https://evavkein.com/toolbox/cssFilterGenerator */
		--textColor: #d4d4d4;
		--filterToTextColor: brightness(0) saturate(100%) invert(92%) sepia(0%) saturate(1234%) hue-rotate(198deg)
			brightness(96%) contrast(87%);
		--textSubColor: #a8a8a8;
		--filterToTextSubColor: brightness(0) saturate(100%) invert(43%) sepia(0%) saturate(1102%) hue-rotate(190deg)
			brightness(100%) contrast(82%);
		--backgroundColor: #1e1e1e;
		--filterToBackgroundColor: brightness(0) saturate(100%) invert(9%) sepia(0%) saturate(0%) hue-rotate(266deg)
			brightness(99%) contrast(94%);
		--backgroundSubColor: #333333;
		--filterToBackgroundSubColor: brightness(0) saturate(100%) invert(14%) sepia(0%) saturate(1271%) hue-rotate(135deg)
			brightness(98%) contrast(84%);
		--accentColor: #006ace;
		--filterToAccentColor: brightness(0) saturate(100%) invert(23%) sepia(76%) saturate(2677%) hue-rotate(196deg)
			brightness(98%) contrast(101%);
		--highlightColor: #f5cb32;
		--filterToHighlightColor: brightness(0) saturate(100%) invert(80%) sepia(40%) saturate(769%) hue-rotate(356deg)
			brightness(97%) contrast(97%);
	}

	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		min-height: 100%;
		color: var(--textColor);
		font-family: "Fira Code", "Noto Color Emoji", monospace;
		letter-spacing: 0.03rem;
		text-underline-offset: 0.1rem;
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
		width: 1rem;
		height: 1rem;
	}
	::-webkit-scrollbar-track {
		border: 0.05rem solid color-mix(in srgb, var(--textColor), transparent 80%);
		background: transparent;
	}
	::-webkit-scrollbar-corner {
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background-color: transparent;
		transition: background-color 350ms;
		/* TODO: implement custom scrollbar component, transitions on default one don't work */
	}
	:hover::-webkit-scrollbar-thumb {
		background-color: color-mix(in srgb, var(--textColor), transparent 82.5%);
	}
	::-webkit-scrollbar-thumb:hover {
		background-color: color-mix(in srgb, var(--textColor), transparent 77.5%);
	}
	::-webkit-scrollbar-thumb:active {
		background-color: color-mix(in srgb, var(--textColor), transparent 65%);
	}

	/*~~~~~~~~~~~~~~~~~~~~~\
    CORE STYLING CLASSES
  \~~~~~~~~~~~~~~~~~~~~~*/
	.core_contentButton {
		color: var(--textColor);
		text-decoration: none;
		background-color: color-mix(in srgb, var(--textSubColor), transparent 100%);
		padding: 0;
		transition: background-color 350ms;
	}
	.core_contentButton img {
		height: inherit;
		filter: var(--filterToTextColor);
	}
	.core_contentButton svg {
		height: inherit;
		width: min-content;
	}
	.core_contentButton:not([inert="true"]):hover,
	.core_contentButton:not([inert="true"]):focus,
	.core_contentButton:not([inert="true"]):focus-within {
		background-color: color-mix(in srgb, var(--textSubColor), transparent 75%);
	}

	.core_borderButton {
		display: inline-block;
		color: var(--textColor);
		text-decoration: none;
		border: 0.1rem solid var(--textColor);
		padding: 0.25rem 0.5rem;
		background-color: transparent;
		transition: all 200ms ease-in-out;
	}
	.core_borderButton:hover,
	.core_borderButton:focus,
	.core_borderButton:focus-within,
	.core_borderButton.inert, /* workaround for toolbox's layout buttons, they somehow only toggle between "inert" (no attribute value) or no attribute */
	.core_borderButton[inert="true"] {
		color: var(--backgroundColor) !important;
		background-color: var(--textColor);
	}
</style>
