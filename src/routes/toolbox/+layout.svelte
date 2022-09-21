<Core
  headTitle="EvAvKein: Toolbox"
  headDescription="Eve Aviv Keinan's toolbox page; including a variety of utilities he found useful"
>
  <section id="toolbox">
    <h2>Toolbox</h2>
    <h3>Utilities I found useful</h3>
    <section id="tools">
      <nav>
        {#each tools as tool}
          <a href={"/toolbox/" + tool.id}
            class="core_backgroundButton"
            inert={tool.id === currentToolId || null}
          >{tool.name}</a>
        {/each}
      </nav>
      <section id="currentTool">
        <slot/>
      </section>
    </section>
  </section>
</Core>

<script lang="ts">
  import Core from "../core.svelte";
  import {page} from "$app/stores";
  import {Tool} from "./toolClass";

  const tools = [
    new Tool("Debug Snippets", "debugSnippets"),
    new Tool("CSS Filter Generator", "cssFilterGenerator"),
    new Tool("Percent-RGB-Hex Converter", "percentRgbHexConverter"),
  ];

  $: currentToolId = $page.url.pathname.replace("/toolbox/", "");
</script>

<style>
  #toolbox {
    max-width: 70em;
    padding: 0 1em 0.5em;
    margin: 0 auto;
  }

  h2 {font-size: 3.5em}
  h3 {
    font-size: 2em;
    color: var(--textSubColor);
  }
  h2, h3 {text-align: center}

  #tools {
    --borderWidth: 0.75em;
    min-height: 20em;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
  }

  nav {
    font-size: 1.35em;
    padding: var(--borderWidth);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 0.5em;
    border-radius: var(--borderWidth) var(--borderWidth) 0 0;
    background-color: var(--backgroundSubColor);
  }

  a[inert] {background-color: var(--textSubColor)}

  #currentTool {
    --border: var(--borderWidth) solid var(--backgroundSubColor);
    flex-grow: 1;
    padding: 0.5em;
    border-left: var(--border);
    border-right: var(--border);
    border-bottom: var(--border);
    border-radius: 0 0 var(--borderWidth) var(--borderWidth);
    overflow: auto;
  }

  @media (min-width: 70em) {
    #tools {
      flex-direction: row;
      flex-grow: 1;
    }

    nav {
      flex-basis: 25%;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0.75em;
      border-radius: var(--borderWidth) 0 0 var(--borderWidth);
    }

    #currentTool {
      flex-basis: 75%;
      border-left: none;
      border-top: var(--border);
      border-radius: 0 var(--borderWidth) var(--borderWidth) 0;
    }
  }
</style>