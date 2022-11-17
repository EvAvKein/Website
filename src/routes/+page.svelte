<Core
  headTitle="EvAvKein"
  headDescription="The home page for Eve Aviv Keinan's website"
> 
  <EvAvKein expanded={evavkeinExpanded}/>

  <section class="core_blueprint">
    <p>Hello ^^</p>

    <p>
      I'm Eve, a <a href="/portfolio" class="core_contentButton">fullstack web programmer</a>, currently jobseeking for my first position in the field!
    </p>

    <p id="disclaimer">I only recently settled on my site's theme and am currently working on some related features and design improvements, so I ask that you don't judge this site's design completeness/coherence just yet</p>
    
    <p id="disclaimer">
      Following 6.5 months of uninterrupted full-time
      <Tooltip
        text="project work"
        tooltip="(programming, design, self-marketing, the latter two unfortunately taking a disproportionate amount of time compared to their commit output)"
      />
      with
      <Tooltip
        text="daily commits"
        tooltip="(some admittedly being a (few) minor fix/adjustment(s) during an entire day, but it's always because I'm working on some big/complex commit which is taking more than a day. I'm too motivated by integrity/decency to coast on performative work)"
      />,
      the majority of it including weekends, I'm taking a few weeks vacation from that routine (starting 18.11). Mind that I'll nevertheless spend a decent amount of that time working on some particular big/intricate commits, because they've been piling up and I seriously need to get them out of the way before returning to the daily commits schedule
    </p>
  </section>

  <QnA/>
</Core>

<script lang="ts">
  import Core from "./_core.svelte";
  import EvAvKein from "./evavkein.svelte";
  import QnA from "./QnA.svelte";
  import Tooltip from "../lib/tooltip.svelte";
  
  let evavkeinExpanded = true;
</script>

<style>
  section {
    background-color: var(--backgroundMidColor);
    width: fit-content;
    margin: auto;
    font-size: clamp(1.5em, 3vw, 1.5em);
    margin-bottom: 1em;
    padding: 0.75em;
    box-shadow: inset 0 0 0.5em 0.1em black;
  }

  p {
    max-width: 70em;
    margin-top: 0;
  }
  
  p + p {margin-top: 0.75em}

  #disclaimer {
    font-size: 0.7em;
    color: var(--textSubColor);
  }

  a {text-decoration: underline}
</style>