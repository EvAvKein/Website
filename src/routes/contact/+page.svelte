<Core
	headTitle="EvAvKein: Contact"
	headDescription="Eve Aviv Keinan's contact page; including a contact form and his email address"
>
	<section id="contact">
		<span>Email</span>
		<a href={`mailto:${myEmail}`}><address>{myEmail}</address></a>
		<hr />
		<span>LinkedIn</span>
		<a href={myLinkedIn} target="_blank">{myLinkedIn}</a>
	</section>
</Core>

<script lang="ts">
	import Core from "../_core.svelte";
	import {onMount} from "svelte";

	let myEmail = "";
	let myLinkedIn = "";
	onMount(() => {
		myEmail = "evavkein@gmail.com";
		myLinkedIn = "https://linkedin.com/in/evavkein";
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
