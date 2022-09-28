<Core
  headTitle="EvAvKein"
  headDescription="The home page of Eve Aviv Keinan's personal and portfolio website"
>
  <section id="about">
    <section>
      <h2>Who?</h2>
      <h3>(Demographics)</h3>
      <ul>
        <li>Progressive leftie (deriving from Utilitarianism)</li>
        <li>Neuroatypical (HFASD & GAD & ADD)</li>
        <li>Cis/agender guy (he/they)</li>
        <li>Senior Gen-Z</li>
      </ul>
    </section>

    <section>
      <h2>What?</h2>
      <h3>(Activities)</h3>
      <ul>
        <li>Web programming (fullstack, but primarily frontend)</li>
        <li>Video-games (e.g RPGs, team-based/co-op shooters, platformers, narrative-centric, MMOs (very rarely), misc indie)</li>
        <li>Online media (e.g news, explainers, fandoms)</li>
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
  import Core from "../core.svelte";
  import Tooltip from "../../lib/tooltip.svelte";
</script>

<style>
  #about {
    font-size: 1.25em;
    max-width: 65em;
    padding: 1em 0.5em 0.5em;
    margin: 0 auto;
  }

  section + section {margin-top: 2em}

  h2 {font-size: 2em}
  h3 {
    font-size: 1em;
    color: var(--textSubColor);
  }

  li + li {margin-top: 0.25em}

  p {margin: 1em 0 0 1em}
</style>