<Core
  headTitle="EvAvKein"
  headDescription="The home page for Eve Aviv Keinan's website"
>
  <section>
    <EvAvKein expanded={evavkeinExpanded}/>

    <p>Hello ^^</p>

    <p>
      I'm Eve, a <a href="/portfolio">fullstack web programmer</a>, currently jobseeking for my first position in the field!
    </p>
  </section>

  <hr/>

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
    padding-top: 2em;
    font-size: clamp(1em, 3vw, 1.5em);
  }

  p {
    font-size: 1.15em;
    max-width: clamp(25em, 90%, 35em);
    margin: 1em auto 0;
  }
  
  p + p {margin-top: 0.75em}

  a {
    color: inherit;
    transition: color 200ms ease-in-out;
  }
  a:hover, a:focus {color: var(--highlightSubColor)}
  a:active {color: var(--highlightColor)}

  hr {
    border: none;
    background-color: var(--textSubColor);
    height: 0.25em;
    margin-block: 2.5em;
    border-radius: 1em;
  }
</style>