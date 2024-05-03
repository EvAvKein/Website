<ToolWrapper>
	<section id="tool">
		<section id="inputSection">
			<div id="inputWrapper">
				<LabelledInput label="Hex Value" id="hexInput" bind:value={inputText} />
			</div>
			<button class="core_borderButton" on:click={execute}>Generate Filter</button>
		</section>
		{#if errorText}
			<div id="notifWrapper">
				<Notification bind:text={errorText} desirablityStyle={false} />
			</div>
		{/if}

		<div id="sampleWrapper">
			<div>
				<h3>Target Color</h3>
				<div class="sample" style={"background-color: " + hexTargetAsRgb} />
			</div>
			<div>
				<h3>Generated Filter</h3>
				<div class="sample" style={"filter: " + filterAttempt} />
			</div>
		</div>

		{#if filterAttempt}
			<div in:slide={{duration: 500}}>
				<code id="filter">{filterAttempt}</code>
				<p id="lossInfo">Loss {lossScore}: {lossDescription}</p>
			</div>
		{/if}
		<p id="initialColorDisclaimer">
			<strong
				>The generated filter assumes a black subject. If the subject isn't pure black, prepend <code
					>brightness(0) saturate(100%)</code
				> to the filter (which will firstly make it so)</strong
			>
		</p>
		<hr />
		<p id="filterCodeCredit">
			Without <a href="https://codepen.io/sosuke/pen/Pjoqqp" class="core_contentButton"
				>this CodePen post by Barrett Sonntag</a
			>
			and
			<a href="https://stackoverflow.com/a/43960991/604861" class="core_contentButton"
				>this StackOverflow post by MultiplyByZer0</a
			>
			(which Sonntag cites), this wouldn't be here.<br />
			All I've done is adapt Sonntag's code for Svelte & Typescript, and style & refactor a bit per my own preferences
		</p>
	</section>
</ToolWrapper>

<script lang="ts">
	import ToolWrapper from "../../../lib/swappableContentWrapper.svelte";
	import {slide} from "svelte/transition";
	import {Color, Solver, hexToRgb} from "./cssFilterGenerator_formulas";
	import LabelledInput from "../../../lib/labelledInput.svelte";
	import Notification from "../../../lib/notification.svelte";

	let inputText = "#888888";
	let errorText = "";

	let hexTargetAsRgb = "#000000";
	let filterAttempt = "";

	let lossScore: string;
	let lossDescription: string;

	function execute() {
		const rgb = hexToRgb(inputText);
		if (!rgb || rgb.length !== 3) {
			errorText = "Invalid hex value";
			return;
		}

		const color = new Color(rgb[0], rgb[1], rgb[2]);
		const solver = new Solver(color);
		const result = solver.solve();

		let lossMsg;
		switch (true) {
			case result.loss < 1:
				lossMsg = "A perfect result!";
				break;
			case result.loss < 5:
				lossMsg = "...Close enough?";
				break;
			case result.loss < 15:
				lossMsg = "Somewhat off, retry?";
				break;
			default:
				lossMsg = "Extremely off, retry!";
				break;
		}

		hexTargetAsRgb = color.toString();
		filterAttempt = result.filter;

		lossScore = result.loss.toFixed(1);
		lossDescription = lossMsg;
	}
</script>

<style>
	#tool {
		padding: 1rem;
	}

	#tool > * {
		font-size: 1.5rem;
		text-align: center;
		margin: auto;
	}

	#inputSection {
		display: flex;
		font-size: 1.5rem;
		align-items: flex-end;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	#inputWrapper {
		max-width: 10rem;
	}

	#inputWrapper + button {
		height: fit-content;
	}

	#notifWrapper {
		font-size: 1.25rem;
	}

	h3 {
		text-align: center;
		margin-bottom: 0.25rem;
	}

	#sampleWrapper {
		color: black;
		display: flex;
		width: fit-content;
		background-color: white;
		padding: 0.5rem clamp(0.5rem, 2.5vw, 1rem) 1rem;
		margin-block: 1rem 0.25rem;
		border-radius: 0.5rem;
		gap: clamp(0.75rem, 2vw, 1.5rem);
	}

	.sample {
		display: block;
		background-color: #000;
		height: 3rem;
		margin: auto;
		border-radius: 0.5rem;
	}

	code {
		color: var(--textSubColor);
		user-select: all;
	}

	#initialColorDisclaimer {
		font-size: 1.1rem;
		margin-top: 0.5rem;
	}

	#tool > hr {
		margin: 1rem;
	}

	#filterCodeCredit {
		font-size: 1.25rem;
		line-height: 1.4rem;
	}

	#filterCodeCredit a {
		text-decoration: underline;
	}
</style>
