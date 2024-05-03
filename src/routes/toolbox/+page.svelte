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
		font-size: 1.5rem;
		padding: 1rem 0.5rem;
		text-align: center;
		gap: 0.25rem;
	}
</style>
