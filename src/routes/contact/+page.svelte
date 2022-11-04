<Core
  headTitle="EvAvKein: Contact"
  headDescription="Eve Aviv Keinan's contact page; including a contact form and his email address"
>
  <section id="contact">
    <h2>Contact</h2>
    <form>
      {#if typeof notifDesirability !== "boolean"}
        <LabelledInput
          id={"contactFormTitle"}
          label={"Title (optional)"}
          bind:value={title}
        />
        <hr>
        <LabelledInput
          id={"contactFormBody"}
          type={"textarea"}
          label={"Body"}
          bind:value={body}
          textareaMinLineHeight={10}
        />
        <hr>
        <LabelledInput
          id={"contactFormEmail"}
          label={"Email"}
          bind:value={email}
        />
      {/if}
      <Notification bind:text={notifText} desirablityStyle={notifDesirability} baseDuration={null}/>
      {#if body && email && typeof notifDesirability !== "boolean"}
      <div id="submitWrapper"
        transition:slide
      >
        <button
          transition:fly={{y: -100}}
          class="core_backgroundButton"
          type="button"
          on:click={submitForm}
        >Submit</button>
      </div>
      {/if}
    </form>

    <span>...or email me at
      <button
        class="core_contentButton"
        on:click={copyEmail}
      >
        <address>{myEmailAddress}</address>
      </button>
    </span> 
    <Notification bind:text={emailCopyNotice} desirablityStyle={true}/>
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
  onMount(() => myEmailAddress = "evavkein@gmail.com"); // adding via JS to mitigate scraping
  let emailCopyNotice = "";
  function copyEmail() {
    navigator.clipboard.writeText(myEmailAddress)
      .then(() => {emailCopyNotice = "Address copied to clipboard!"});
  };

  let title = "";
  let body = "";
  let email = "";

  let notifText = "" as ""|typeof notifTexts[keyof typeof notifTexts];
  const notifTexts = {
    pending: "Processing...",
    success: "Message sent! I usually reply within a day",
    failure: "Message submission failed, you'll have to email me instead",
  } as const;
  let notifDesirability = undefined as boolean|undefined;

  function submitForm() {
    notifText = notifTexts.pending;
    notifDesirability = undefined;

    apiFetch("POST", "/submitContactForm", {title: title, body: body, email: email})
      .then((response:{outcome:boolean}) => {
        notifText = response.outcome ? notifTexts.success : notifTexts.failure;
        notifDesirability = response.outcome;
      })
      .catch(() => {
        notifText = notifTexts.failure;
        notifDesirability = false;
      });
  };
</script>

<style>
  #contact {
    width: clamp(20em, 85vw, 50em);
    text-align: center;
    padding: 0 0.75em 0.25em;
  }

  #contact > * {margin-inline: auto}

  h2 {font-size: 4em}
  form {font-size: 1.5em}
  hr {
    margin: 0.2em;
    border-color: transparent;
  }

  form #submitWrapper {padding-top: 1em}

  span {
    display: inline-block;
    margin-top: 1em;
    font-size: 1.25em;
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