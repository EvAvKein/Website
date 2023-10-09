<Core
	headTitle="EvAvKein: Contact"
	headDescription="Eve Aviv Keinan's contact page; including a contact form and his email address"
>
	<section id="contact">
		<h2>Contact</h2>
		<span>
			Email me at
			<button class="core_contentButton" on:click={copyEmail}>
				<address>{myEmailAddress}</address>
			</button>!
		</span>
		<Notification bind:text={emailCopyNotice} desirablityStyle={true} />
	</section>
</Core>

<script lang="ts">
	import Core from "../_core.svelte";
	import {onMount} from "svelte";
	import Notification from "../../lib/notification.svelte";

	let myEmailAddress = "";
	let emailCopyNotice = "";
	onMount(() => (myEmailAddress = "evavkein@gmail.com")); // adding via JS to mitigate scraping
	function copyEmail() {
		navigator.clipboard.writeText(myEmailAddress).then(() => {
			emailCopyNotice = "Address copied to clipboard!";
		});
	}
</script>

<style>
	#contact {
		font-size: 1.5em;
		width: clamp(12.5em, 85vw, 35em);
		text-align: center;
		padding: 0 0.5em 0.2em;
	}

	#contact > * {
		margin-inline: auto;
	}

	h2 {
		font-size: 2.5em;
	}

	span {
		font-size: 0.9em;
		display: inline-block;
		margin-top: 1em;
	}
	address {
		display: inline;
		font-weight: 500;
		font-style: unset;
		text-underline-offset: 0.2em;
		text-decoration: underline dotted var(--textSubColor);
		cursor: copy;
		user-select: all;
	}
</style>
