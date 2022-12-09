<Core
  headTitle="EvAvKein"
  headDescription="The home page for Eve Aviv Keinan's website"
> 
  <section id="introduction">
    <EvAvKein/>

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
      the majority of it including weekends, I'm taking a break from that routine starting 18.11 for the remainder of the year. Mind that I'll nevertheless spend a decent amount of that time working on some particular big/intricate commits, because they've been piling up and I seriously need to get them out of the way before returning to the daily commits schedule
    </p>
  </section>

  <section id="contentGrid">
    <section id="why" class="core_blueprint">
      <h2>Why?</h2>
      <h3>(Values)</h3>
      <ValuesDiagram/>
      <p>(Select any value or connection)</p>
    </section>
  
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
      <p>Currently in Israel. Thanks to my French citizenship, I'll relocate to the EU once I'm employed remotely/there</p>
    </section>
  </section>
</Core>

<script lang="ts">
  import Core from "./_core.svelte";
  import EvAvKein from "./evavkein.svelte";
  import Tooltip from "../lib/tooltip.svelte";
  import ValuesDiagram from "./valuesDiagram.svelte";
</script>

<style>
  #introduction {
    font-size: clamp(1.25em, 2vw, 1.4em);
    max-width: 50em;
  }

  section.core_blueprint {
    background-color: var(--backgroundMidColor);
    width: fit-content;
    margin: auto;
    padding: 0.75em 1em;
    box-shadow: 0 0 0.5em 0.1em black;
  }
  section.core_blueprint + section.core_blueprint {margin-top: 1em}

  #introduction p + p {margin-top: 0.5em}

  #disclaimer {
    font-size: 0.8em;
    color: var(--textSubColor);
  }

  a {text-decoration: underline}

  h2 {font-size: 2em}
  h3 {
    font-size: 1.25em;
    color: var(--textSubColor);
    margin-bottom: 0.5em;
  }
  
  ul {margin: 0}

  li + li {margin-top: 0.25em}

  li span {
    color: var(--textSubColor);
    font-size: 65%;
  }

  #why {width: clamp(15em, 100%, 27.5em)}
  #why p {
    color: var(--textSubColor);
    font-size: 0.9em;
    text-align: center;
  }

  #why {grid-area: why}
  #who {grid-area: who}
  #what {grid-area: what}
  #where {grid-area: where}
  #contentGrid {margin-top: 1em}

  @media (min-width: 40em) {
    section.core_blueprint {margin: unset}

    section.core_blueprint + section.core_blueprint {margin-top: 0}

    #contentGrid {
      display: grid;
      align-items: center;
      justify-items: center;
      gap: 1em;
      grid-template-areas: "why why"
                           "who what"
                           "where where";
    }
  }

  @media (min-width: 67.5em) {
    #contentGrid {
      grid-template-areas: "why who"
                           "why what"
                           "where where";
      grid-template-columns: 1.25fr 1fr;
    }
  }
</style>