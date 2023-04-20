<div
	class:maintainParentHeight
	role="presentation"
	in:slide={{
		duration: resizeDuration,
		delay: swipeDuration,
	}}
	out:slide={{
		duration: resizeDuration,
		delay: swipeDuration,
	}}
>
	<div
		class="innerWrapper core_blueprint"
		role="presentation"
		in:fly={{
			duration: swipeDuration,
			x: 0 - swipeDistance,
			delay: swipeDuration + resizeDuration,
		}}
		out:fly={{
			duration: swipeDuration,
			x: swipeDistance,
		}}
	>
		<slot />
	</div>
</div>

<script lang="ts">
	import {slide, fly} from "svelte/transition";

	export let maintainParentHeight = false;

	const swipeDuration = 250;
	const swipeDistance = 750;
	const resizeDuration = 250;
</script>

<style>
	.maintainParentHeight {
		height: 100%;
	}
	.maintainParentHeight > .innerWrapper {
		height: 100%;
	}

	.innerWrapper {
		box-shadow: 0 0 0.25em 0.1em black;
		overflow: auto;
	}
</style>
