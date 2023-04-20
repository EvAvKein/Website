<ToolWrapper maintainParentHeight={true}>
	<div>
		<p>[No tool selected]</p>
	</div>
</ToolWrapper>

<script lang="ts">
	import ToolWrapper from "../../lib/swappableContentWrapper.svelte";
</script>

<style>
	div {
		height: inherit;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	p {
		font-size: 1.5em;
		padding: 1em 0.5em;
		text-align: center;
		gap: 0.25em;
	}
</style>
