<Core
  headTitle="EvAvKein"
  headDescription="The home page of Eve Aviv Keinan's personal and portfolio website"
>
  <section id="about">
    <section>
      <h2>Who?</h2>
      <h3>(Demographics)</h3>
      <ul>
        <li>Progressive leftie <span>(deriving from Utilitarianism)</span></li>
        <li>Neuroatypical <span>(HFASD & GAD & ADD)</span></li>
        <li>Cis/agender guy <span>(he/they)</span></li>
        <li>Senior Gen-Z</li>
      </ul>
    </section>

    <section>
      <h2>What?</h2>
      <h3>(Activities)</h3>
      <ul>
        <li>Web programming <span>(fullstack, but primarily frontend)</span></li>
        <li>Video-games <span>(e.g RPGs, adventure, shooters, misc indie)</span></li>
        <li>Online media <span>(e.g news, explainers, fandoms)</span></li>
      </ul>
    </section>

    <section>

      <h2>How?</h2>
      <h3>(Values)</h3>
      <ul>
        <li>Transparency</li>
        <li>Introspection</li>
        <li>Prudence</li>
        <li>Dicipline</li>
        <li>Compassion</li>
      </ul>
    </section>

    <section>
      <h2>Where?</h2>
      <h3>(Residence)</h3>
      <p>Currently in Israel. Thanks to my French citizenship, I'll immigrate to the EU 
        <Tooltip>
          <span slot="subject">(likely Finland/Sweden)</span>
          <span slot="content">(for interpersonal & politics reasons)</span>
        </Tooltip>
        once I'm employed remotely/there</p>
    </section>
  </section>
</Core>

<script lang="ts">
  import Core from "../_core.svelte";
  import Tooltip from "../../lib/tooltip.svelte";
</script>

<style>
  #about {
    font-size: clamp(1.25em, 3vw, 1.5em);
    max-width: 30em;
    padding: 1em 0.5em 0.5em;
    margin: 0 auto;
  }

  section + section {margin-top: 2em}

  h2 {font-size: 2em}
  h3 {
    font-size: 1em;
    color: var(--textSubColor);
  }

  li span {
    color: var(--textSubColor);
    font-size: 65%;
  }

  li + li {margin-top: 0.25em}

  p {margin: 1em 0 0 1em}
</style>