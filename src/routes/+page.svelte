<Core
  headTitle="EvAvKein"
  headDescription="The home page for Eve Aviv Keinan's website"
>
  <div id="rootPageWrapper">

    <EvAvKein/>

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

  </div>
</Core>

<script lang="ts">
  import Core from "./_core.svelte";
  import EvAvKein from "./evavkein.svelte";
  import ValuesDiagram from "./valuesDiagram.svelte";
</script>

<style>
  #rootPageWrapper {
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