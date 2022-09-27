<Core
  headTitle="EvAvKein"
  headDescription="The home page of Eve Aviv Keinan's personal and portfolio website"
>
  <section>
    <div id="who"><Who/></div>
    <div id="what"><What/></div>
    <div id="how"><How/></div>
    <div id="where"><Where/></div>
  </section>
</Core>

<script lang="ts">
  import Core from "../core.svelte";
  import Who from "./_QnAs/who.svelte";
  import What from "./_QnAs/what.svelte";
  import How from "./_QnAs/how.svelte";
  import Where from "./_QnAs/where.svelte";
</script>

<style>
  section {
    font-size: 1.25em;
    max-width: 65em;
    padding: 1em 0.5em 0.5em;
    margin: 0 auto;
  }

  div + div {margin-top: 2em}
</style>