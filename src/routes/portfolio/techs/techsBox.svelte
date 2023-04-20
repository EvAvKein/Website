<section>
	{#each techsByNameAndSrc as tech}
		<button
			on:click={() => {
				selectedTech = tech[0];
			}}
			on:blur={() => {
				setTimeout(() => {
					if (selectedTech === tech[0]) selectedTech = null;
				}, 100);
			}}
		>
			<img src={tech[1]} alt={tech[0] + "'s logo"} />
		</button>
	{/each}
</section>

<script lang="ts">
	export let techsByNameAndSrc: [string, string][]; // structured like that because it's concise and readable when passed as prop (but i'm open to alternatives that don't sacrifice this component's readability for it)
	export let selectedTech: string | null = null;
</script>

<style>
	section {
		padding: 0.5em;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 0.5em;
	}

	button {
		background-color: transparent;
		padding: 0.4em;
		height: 2.5em;
		width: 3em;
		box-sizing: content-box;
	}
	img {
		height: inherit;
		width: inherit;
		object-fit: contain;
		filter: drop-shadow(0 0 0.35em black);
		transition: all 250ms ease;
	}
	button:hover img,
	button:focus img {
		transform: scale(1.25);
		filter: drop-shadow(0 0 0.35em var(--highlightColor));
	}
</style>
