<section id="QnA">
  <section id="who" class="core_blueprint">
    <h2>Who?</h2>
    <h3>(Demographics)</h3>
    <ul>
      <li>Progressive leftie <span>(deriving from Utilitarianism)</span></li>
      <li>Neuroatypical <span>(HFASD & GAD & ADD)</span></li>
      <li>Cis/agender guy <span>(he/they)</span></li>
      <li>Senior Gen-Z</li>
    </ul>
  </section>

  <section id="how" class="core_blueprint">
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

  <section id="what" class="core_blueprint">
    <h2>What?</h2>
    <h3>(Activities)</h3>
    <ul>
      <li>Web programming <span>(fullstack, but primarily frontend)</span></li>
      <li>Video-games <span>(e.g RPGs, adventure, shooters, misc indie)</span></li>
      <li>Online media <span>(e.g news, explainers, fandoms)</span></li>
    </ul>
  </section>

  <section id="where" class="core_blueprint">
    <h2>Where?</h2>
    <h3>(Residence)</h3>
    <p>Currently in Israel. Thanks to my French citizenship, I'll relocate to the EU 
      <Tooltip
        text={"(likely Finland/Sweden)"}
        tooltip={"(for interpersonal & politics reasons)"}
      />
      once I'm employed remotely/there</p>
  </section>
</section>

<script lang="ts">
  import Tooltip from "../lib/tooltip.svelte";
</script>

<style>
  #QnA {
    max-width: 80em;
    margin: 0 auto;
    padding: 1em;
  }

  #QnA > section {
    background-color: var(--backgroundMidColor);
    height: min-content;
    padding: 1em;
    box-shadow: 0 0 1em 0.15em black;
  }

  #QnA section + section {margin-top: 2em}
  
  h2 {font-size: 2.25em}
  h3 {
    font-size: 1.5em;
    color: var(--textSubColor);
  }

  ul {margin-bottom: 0}

  li, p {font-size: 1.25em}

  li span {
    color: var(--textSubColor);
    font-size: 65%;
  }

  li + li {margin-top: 0.25em}

  p {
    margin: 1em 0 0 1em;
    max-width: 50em;
  }

  @media (min-width: 40em) {
    #QnA {
      display: flex;
      flex-wrap: wrap;
      gap: 2em;
      justify-content: space-around;
    }

    #QnA section + section {margin-top: 0}
  }
</style>