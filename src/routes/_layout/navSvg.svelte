<svg class:activated viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
	<desc>A sidebar icon</desc>
	<g id="top">
		<circle cx="5" cy="10" r="5" fill="white" />
		<rect x="5" y="5" width="50" height="10" fill="white" />
		<circle cx="55" cy="10" r="5" fill="white" />
	</g>
	<g id="middle">
		<circle cx="5" cy="30" r="5" fill="white" />
		<rect x="5" y="25" width="50" height="10" fill="white" />
		<circle cx="55" cy="30" r="5" fill="white" />
	</g>
	<g id="bottom">
		<circle cx="5" cy="50" r="5" fill="white" />
		<rect x="5" y="45" width="50" height="10" fill="white" />
		<circle cx="55" cy="50" r="5" fill="white" />
	</g>
</svg>

<script lang="ts">
	export let activated = false;
</script>

<style>
	svg {
		height: 2.75rem;
		width: inherit;
		overflow: visible;
		transition: transform 250ms;
	}
	#top,
	#bottom {
		transition: transform 250ms;
	}
	#middle {
		transition: opacity 200ms;
	}
	#bottom {
		transform-origin: bottom left;
	}

	svg.activated {
		transform: translateX(10%);
	}
	.activated #top {
		transform: rotate(21deg);
	}
	.activated #middle {
		opacity: 0;
	}
	.activated #bottom {
		transform: rotate(-21deg);
	}
</style>
