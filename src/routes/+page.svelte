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

    <p id="disclaimer">I've only recently had my eureka moment for the site's design. I have many changes and design ideas I've yet to implement, and I'm also working on my "Distillogue" project, so I ask that you don't judge this site's design completeness/coherence just yet</p>
  </section>

  <QnA/>
</Core>

<script lang="ts">
  import Core from "./_core.svelte";
  import EvAvKein from "./evavkein.svelte";
  import QnA from "./QnA.svelte";
  
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