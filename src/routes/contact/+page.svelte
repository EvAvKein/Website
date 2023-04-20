<Core
	headTitle="EvAvKein: Contact"
	headDescription="Eve Aviv Keinan's contact page; including a contact form and his email address"
>
	<section id="contact">
		<h2>Contact</h2>
		{#if typeof notifDesirability !== "boolean"}
			<form>
				<LabelledInput id={"contactFormTitle"} label={"Title (optional)"} bind:value={title} />
				<LabelledInput
					id={"contactFormBody"}
					type={"textarea"}
					label={"Body"}
					bind:value={body}
					textareaMinLineHeight={10}
				/>
				<LabelledInput id={"contactFormEmail"} label={"Email"} bind:value={email} />

				{#if body && email}
					<div id="submitWrapper" transition:slide>
						<button transition:fly={{y: -100}} class="core_backgroundButton" type="button" on:click={submitForm}
							>Send</button
						>
					</div>
				{/if}
			</form>
		{/if}

		<Notification bind:text={notifText} desirablityStyle={notifDesirability} baseDuration={null} />

		<span>
			{#if notifDesirability !== false}
				...or email me at
			{/if}
			<button class="core_contentButton" on:click={copyEmail}>
				<address>{myEmailAddress}</address>
			</button>
		</span>
		<Notification bind:text={emailCopyNotice} desirablityStyle={true} />
	</section>
</Core>

<script lang="ts">
	import Core from "../_core.svelte";
	import {onMount} from "svelte";
	import {slide, fly} from "svelte/transition";
	import {apiFetch} from "../../helpers/apiFetch";
	import LabelledInput from "../../lib/labelledInput.svelte";
	import Notification from "../../lib/notification.svelte";

	let myEmailAddress = "";
	onMount(() => (myEmailAddress = "evavkein@gmail.com")); // adding via JS to mitigate scraping
	let emailCopyNotice = "";
	function copyEmail() {
		navigator.clipboard.writeText(myEmailAddress).then(() => {
			emailCopyNotice = "Address copied to clipboard!";
		});
	}

	let title = "";
	let body = "";
	let email = "";

	let notifText = "";
	let notifDesirability = undefined as boolean | undefined;

	function submitForm() {
		notifText = "Processing...";
		notifDesirability = undefined;

		apiFetch("POST", "/submitContactForm", {title: title, body: body, email: email})
			.then((response: {outcome: boolean}) => {
				if (response.outcome) throw response;

				notifText = "Message sent! I usually reply within a day";
				notifDesirability = true;
			})
			.catch(() => {
				notifText = "Message submission failed, you'll have to email me instead";
				notifDesirability = false;
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

	form button {
		margin-top: 1em;
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
