<main>
  <h2>Contact</h2>
  <form>
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
    <Notification text={notifText} desirablityStyle={notifDesirability}/>
    {#if title || body || email} <!-- TODO: change condition to "body && email" once submission actually works -->
      <button transition:slide
        class="core_backgroundButton"
        type="button"
        on:click={fetchCoinflip}
      >Submit (I haven't finished migrating to Vercel functionality yet, press to coinflip though!)</button>
    {/if}
  </form>

  <h3>...or find me at:</h3>
  <address>
    <a href="https://mstdn.social/@EvAvKein" class="core_contentButton">
      <img src="./mastodon.svg" alt="Mastodon icon">
      <div>mstdn.social/@EvAvKein</div>
    </a>
    <a href="https://github.com/EvAvKein" class="core_contentButton">
      <img src="./github.svg" alt="GitHub icon">
      <div>/EvAvKein</div>
    </a>
    <a href="mailto:contact@evavkein.com" class="core_contentButton">
      <img src="./email.svg" alt="Email icon">
      <div>contact@evavkein.com</div>
    </a>
  </address>
</main>

<script lang="ts">
  import {slide} from "svelte/transition";
  import LabelledInput from "../labelledInput.svelte";
  import Notification from "../notification.svelte";
  import {apiFetch} from "../../helpers/apiFetch";

  let title = "";
  let body = "";
  let email = "";

  let notifText = "";
  let notifDesirability = undefined as boolean|undefined;

  function fetchCoinflip() {
    notifText = "Flipping... Suspense...";
    notifDesirability = undefined;

    apiFetch("GET", "/coinflip")
      .then((response:{outcome:boolean}) => {
        setTimeout(() => {
          notifText = response.outcome ? "Success :D" : "Failure :c";
          notifDesirability = response.outcome;
        }, 1000);
      });
  };
</script>

<style>
  main {
    padding: 0 1em 0.5em;
    font-size: clamp(0.8em, 3vw, 1.1em);
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
    gap: clamp(1.5rem, 3vw, 3em);
  }
  address a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5em;
  }
  address img {
    height: 1.5em;
    width: auto;
  }
</style>