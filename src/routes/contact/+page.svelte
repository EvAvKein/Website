<Core
  headTitle="EvAvKein: Contact"
  headDescription="Eve Aviv Keinan's contact page; including a contact form and a list of other contact methods"
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
      <Notification text={notifText} desirablityStyle={notifDesirability} baseDuration={null}/>
      {#if body && email && typeof notifDesirability !== "boolean"}
        <button transition:slide
          class="core_backgroundButton"
          type="button"
          on:click={submitForm}
        >Submit</button>
      {/if}
    </form>

    <h3>...or find me at:</h3>
    <address>
      <Tooltip>
        <a slot="subject"
          href="https://mstdn.social/@EvAvKein" class="core_contentButton"
        >
          <img src="./mastodon.svg" alt="Mastodon icon">
          <div>mstdn.social/@EvAvKein</div>
        </a>
        <span slot="content">I'm completely inactive on Mastodon and will delete that profile once I've set up blogging here</span>
      </Tooltip>
      <a href="https://github.com/EvAvKein" class="core_contentButton">
        <img src="./github.svg" alt="GitHub icon">
        <div>/EvAvKein</div>
      </a>
      <a href="mailto:contact@evavkein.com" class="core_contentButton">
        <img src="./email.svg" alt="Email icon">
        <div>contact@evavkein.com</div>
      </a>
    </address>
  </section>
</Core>

<script lang="ts">
  import Core from "../core.svelte";
  import {slide} from "svelte/transition";
  import {apiFetch} from "../../helpers/apiFetch";
  import LabelledInput from "../../lib/labelledInput.svelte";
  import Notification from "../../lib/notification.svelte";
  import Tooltip from "../../lib/tooltip.svelte";

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
    display: block;
    margin: auto;
    max-width: 60em;
    text-align: center;
    padding: 0 0.5em 0.5em;
  }

  #contact > * {margin-inline: auto}

  h2 {font-size: 4em}
  form {font-size: 1.5em}
  hr {
    margin: 0.2em;
    border-color: transparent;
  }
  button {
    display: block;
    margin: 0.5em auto 1em;
  }

  h3 {font-size: 1.75em}
  address {
    margin-top: 1.5em;
    font-style: normal;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: clamp(1.5em, 3vw, 3em);
  }
  address a {
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-size: 1.5em;
  }
  address img {
    height: 1.5em;
    width: auto;
  }
</style>