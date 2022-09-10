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

<script lang="ts">
  import {slide} from "svelte/transition";
  import {apiFetch} from "../../helpers/apiFetch";
  import LabelledInput from "../labelledInput.svelte";
  import Notification from "../notification.svelte";
  import Tooltip from "../tooltip.svelte";

  let title = "";
  let body = "";
  let email = "";

  let notifText = "" as ""|typeof pendingNotif|typeof successNotif|typeof failureNotif;
  const pendingNotif = "Processing...";
  const successNotif = "Message sent! I usually reply within a day";
  const failureNotif = "Message submission failed, you'll have to email me instead";
  let notifDesirability = undefined as boolean|undefined;

  function submitForm() {
    notifText = pendingNotif;
    notifDesirability = undefined;

    apiFetch("POST", "/submitContactForm", {title: title, body: body, email: email})
      .then((response:{outcome:boolean}) => {
        notifText = response.outcome ? successNotif : failureNotif;
        notifDesirability = response.outcome;
      })
      .catch(() => {
        notifText = failureNotif;
        notifDesirability = false;
      });
  };
</script>

<style>
  #contact {
    padding: 0 1em 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {font-size: 4em}
  form {
    width: clamp(10em, 95vw, 40em);
    font-size: 1.5em;
  }
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