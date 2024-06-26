<button
	class="tooltipSubject core_contentButton"
	class:activated
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
	on:focus={() => (focused = true)}
	on:blur={() => (focused = false)}
	tabindex="0"
	aria-live="polite"
	bind:this={wrapperElem}
	>{text}<!--
  comment prevents extra space character
-->{#if activated}
		<div class="tooltip" in:slide={{duration: 300}} out:slide={{duration: 250}} bind:this={tooltipElem}>
			{tooltip}
		</div>
	{/if}
</button>

<script lang="ts">
	import {onMount} from "svelte";
	import {slide} from "svelte/transition";

	export let text: string;
	export let tooltip: string;

	let mainElem: HTMLElement; // not querying the body because (in the default layout) it doesn't accurately reflect the page's scrollHeight; the <main> takes the remainder height & width the header doesn't occupy, and it handles all (page-content) overflow within itself
	let wrapperElem: HTMLElement;
	let tooltipElem: HTMLElement;
	let hovered = false;
	let focused = false;
	$: activated = hovered || focused;

	function disable() {
		activated = false;
	}
	onMount(() => {
		mainElem = document.querySelector("main")!; // declared on mount because it otherwise executes when the document is undefined
		mainElem.addEventListener("scroll", disable); // an imperfect solution long-term because tooltips are liable to be added inside other overflowing elements. writing a script to find the nearest overflowing parent is trivial, but it'd currently be of no use and an unnecessary performance cost

		return () => {
			mainElem.removeEventListener("scroll", disable);
		};
	});

	$: if (activated && tooltipElem) {
		tooltipElem.style.top = `${wrapperElem.offsetTop + wrapperElem.offsetHeight - mainElem.scrollTop}px`;

		if (tooltipElem.offsetWidth > mainElem.clientWidth) {
			tooltipElem.style.maxWidth = mainElem.clientWidth + "px";
		}

		const wrapperX = wrapperElem.getBoundingClientRect().left; // because offsetLeft can get weird (for a lack of a proper understanding) in some cases (found in portfolio's techs section)
		const xForCenteringAboveText = wrapperX + wrapperElem.offsetWidth / 2 - tooltipElem.offsetWidth / 2;
		tooltipElem.style.left = `${xForCenteringAboveText}px`;

		const xOverflowing = tooltipElem.offsetLeft + tooltipElem.offsetWidth > mainElem.clientWidth;
		if (xOverflowing) {
			const xOverflow = tooltipElem.offsetLeft + tooltipElem.offsetWidth - mainElem.clientWidth;
			tooltipElem.style.transform = `translateX(-${xOverflow}px)`;
		}

		const xUnderflowing = tooltipElem.offsetLeft < 0;
		if (xUnderflowing) {
			tooltipElem.style.left = "0";
		}

		const yOverflowing = tooltipElem.offsetTop + tooltipElem.offsetHeight > mainElem.scrollHeight;
		if (yOverflowing) {
			tooltipElem.style.top = `${wrapperElem.offsetTop - tooltipElem.offsetTop}px`;
		}
	}
</script>

<style>
	.tooltipSubject {
		display: inline;
		cursor: help;
		outline: none;
		user-select: text;
		font-weight: inherit;
		background-color: transparent;
		text-decoration: underline 0.1rem dashed var(--textSubColor);
		transition: background-color 350ms;
	}
	.tooltipSubject.activated {
		background-color: color-mix(in srgb, var(--textSubColor), transparent 85%);
	}

	.tooltip {
		position: fixed;
		height: max-content;
		width: max-content;
		cursor: text;
		font-size: 0.9rem;
		color: var(--textColor);
		background-color: var(--backgroundSubColor);
		border: 0.05rem solid color-mix(in srgb, var(--textSubColor), transparent 66%);
		z-index: 999999999;
		padding: 0.4rem;
		border-radius: 0.1rem;
		box-shadow: 0 0 0.1rem 0.1rem black;

		font-weight: initial;
		text-decoration: initial;
		white-space: normal;
		line-height: initial;
	}
</style>
