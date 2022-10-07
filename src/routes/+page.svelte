<Core
  headTitle="EvAvKein"
  headDescription="The home page for Eve Aviv Keinan's website"
> 
  <EvAvKein expanded={evavkeinExpanded}/>

  <section class="core_blueprint">
    <p>Hello ^^</p>

    <p>
      I'm Eve, a <a href="/portfolio">fullstack web programmer</a>, currently jobseeking for my first position in the field!
    </p>

    <p id="disclaimer">I've only just had my eureka moment for my site's design (on October 7th), so I ask that you don't judge its completeness/coherence just yet. I have many changes and design ideas I've yet to implement, and I'm also working on my "Distillogue" project</p>
  </section>

  <QnA/>
</Core>

<script lang="ts">
  import Core from "./_core.svelte";
  import {onMount} from "svelte";
  import EvAvKein from "./evavkein.svelte";
  import QnA from "./QnA.svelte";
  
  let evavkeinExpanded = true;

  onMount(() => {
    setTimeout(() => {evavkeinExpanded = false}, 3000)
  });
</script>

<style>
  section {
    background-color: var(--backgroundSubColor);
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

  a {
    color: inherit;
    transition: color 200ms ease-in-out;
  }
  a:hover, a:focus {color: var(--highlightSubColor)}
  a:active {color: var(--highlightColor)}
</style>