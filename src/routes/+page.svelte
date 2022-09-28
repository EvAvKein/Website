<Core
  headTitle="EvAvKein"
  headDescription="The home page for Eve Aviv Keinan's website"
>
  <section>
    <EvAvKein expanded={evavkeinExpanded}/>

    <p>Hello! ^^</p>

    <div>
      <p>
        I'm Eve, a <a href="/portfolio">web programmer</a> and 
          <Tooltip>
            <a slot="subject" href="/about">a kinda neat person</a>
            <span slot="content">
              ...as brash as it is to say about oneself.<br>
              Independent assessments are encouraged.
            </span>
          </Tooltip>.
      </p>
      <p>
        This website is under active renovation, so I hope you're able and willing to reserve judgement on my design capabilities until this disclaimer is gone
      </p>
    </div>
  </section>
</Core>

<script lang="ts">
  import Core from "./core.svelte";
  import {onMount} from "svelte";
  import EvAvKein from "./evavkein.svelte";
  import Tooltip from "../lib/tooltip.svelte";
  
  let evavkeinExpanded = true;

  onMount(() => {
    setTimeout(() => evavkeinExpanded = false, 3000)
  });
</script>

<style>
  section {
    padding-top: 2em;
    font-size: clamp(1em, 3vw, 1.5em);
  }

  p {
    font-size: 1.15em;
    max-width: clamp(25em, 90%, 35em);
    margin: 1.5em auto 0;
  }
  
  div {margin-top: 1em}
  div > p {margin-top: 0.5em}

  a {
    color: inherit;
    transition: color 200ms ease-in-out;
  }
  a:hover, a:focus {color: var(--highlightSubColor)}
  a:active {color: var(--highlightColor)}
</style>