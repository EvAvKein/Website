{#if text}
	<p transition:slide class={"notification " + styleClass} aria-live="polite">
		{text}
	</p>
{/if}

<script setup lang="ts">
	import {slide} from "svelte/transition";
	import {debounce} from "../helpers/debounce";

	export let text: string;
	export let desirablityStyle = undefined as boolean | undefined;
	export let baseDuration = 3000 as number | null | undefined;

	let styleClass = "" as "" | "positive" | "negative";

	$: if (text !== "" && baseDuration !== null) {
		debounce(() => {
			text = "";
		}, baseDuration || 5000 + text.length * 150);
	}

	function updateStyleClass(desirablityValue: typeof desirablityStyle) {
		switch (desirablityValue) {
			case true: {
				styleClass = "positive";
				break;
			}
			case false: {
				styleClass = "negative";
				break;
			}
			default: {
				styleClass = "";
			}
		}
	}

	$: updateStyleClass(desirablityStyle);
</script>

<style>
	.notification {
		width: fit-content;
		text-align: center;
		font-size: 1rem;
		padding: 0.3rem;
		color: var(--textColor);
		background-color: #797979;
		border-inline: 0.2rem solid #505050;
		margin: 0.75rem auto 0.75rem;
	}
	.notification.negative {
		border-color: #ff0000;
		background-color: #ff000088;
	}
	.notification.positive {
		border-color: #00ff00;
		background-color: #00ff0088;
	}
</style>
