<a class="core_contentButton" href={urlMounted} target="_blank">
	<img src={logoSrc} alt={logoAlt}/>
	<span>{textMounted}</span>
</a>

<script lang="ts">
	import {onMount} from "svelte";

  export let logoSrc:string;
	export let logoAlt:string;
	export let text:string;
	export let url:string;
	
	let textMounted = "";
	let urlMounted = "";

	onMount(() => {
		// adding via JS to mitigate scraping
		textMounted = text;
		urlMounted = url;
	});
</script>

<style>
	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: min-content;
		padding: 0.5rem;
	}

	img {
		height: 1.75rem;
		width: 1.75rem;
	}

	span {
		font-size: 1.1rem;
		color: var(--textColor);
		text-decoration: underline dashed color-mix(in srgb, var(--textSubColor), transparent 50%);
	}
</style>
