<ToolWrapper>
	<section>
		<h3>Log Every Focus</h3>
		<code
			>{`document.querySelector("body")
      .addEventListener("focusin", (event) => {
        console.log(event.target)
      });`}</code
		>
		<hr />
		<h3>Highlight Element Boxes</h3>
		<code>{"* {box-shadow: 0 0 0 0.1rem rgb(255 0 0 / 40%) !important}"}</code>
		<hr />
		<h3>Delayed debugging freeze</h3>
		<code>{"setTimeout(() => {debugger}, 5000)"}</code>
	</section>
</ToolWrapper>

<script lang="ts">
	import ToolWrapper from "../../../lib/swappableContentWrapper.svelte";
</script>

<style>
	section {
		padding: 1rem;
	}

	h3 {
		font-size: 1.1rem;
		text-decoration: underline;
	}

	code {
		display: block;
		color: var(--textSubColor);
		white-space: pre;
		margin-top: 0.5rem;
		user-select: all;
	}

	hr {
		border-color: var(--textSubColor);
		margin: 1rem 0 0.5rem;
	}
</style>
