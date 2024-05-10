<Core
	headTitle="EvAvKein: Contact"
	headDescription="Eve Aviv Keinan's contact page; including email address and a link to a LinkedIn profile"
>
	<section id="contact">
		<span>Email</span>
		<a href={`mailto:${myEmail}`}><address>{myEmail}</address></a>
		<hr />
		<span>LinkedIn</span>
		<a href={myLinkedInLink} target="_blank">{myLinkedInText}</a>
	</section>
</Core>

<script lang="ts">
	import Core from "../_core.svelte";
	import {onMount} from "svelte";

	let myEmail = "";

	// split into two instead of `replace`ing in the template because latter caused mobile-only page-rendering error
	let myLinkedInLink = "";
	let myLinkedInText = "";
	onMount(() => {
		myEmail = "evavkein@gmail.com";

		myLinkedInLink = "https://linkedin.com/in/evavkein";
		myLinkedInText = myLinkedInLink.replace("https://", "");
	}); // adding via JS to mitigate scraping
</script>

<style>
	#contact {
		font-size: 1.25rem;
		text-align: center;
		max-width: 25rem;
		margin-inline: auto;
		text-underline-offset: 0.3rem;
	}

	hr {
		border-color: color-mix(in srgb, var(--textSubColor), transparent 75%);
	}

	a,
	address {
		display: block;
		color: var(--textColor);
		text-decoration: underline solid color-mix(in srgb, var(--textSubColor), transparent 50%);
		user-select: all;
		font-style: unset;
	}
</style>
