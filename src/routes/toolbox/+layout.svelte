<Core
  headTitle="EvAvKein: Toolbox"
  headDescription="Eve Aviv Keinan's toolbox page; including a variety of utilities he found useful"
>
  <section id="toolbox">
    <h2>Toolbox</h2>
    <h3>Utilities I found useful</h3>
    <section id="tools" class="core_blueprint">
      <nav>
        {#each tools as tool}
          <a href={"/toolbox/" + tool.id}
            class="core_backgroundButton"
            inert={tool.id === currentToolId || null}
          >{tool.name}</a>
        {/each}
      </nav>
      <section id="currentTool" class="core_blueprint">
        <slot/>
      </section>
    </section>
  </section>
</Core>

<script lang="ts">
  import Core from "../_core.svelte";
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
    margin-top: 1em;
    --wrapperPadding: 1em;
    padding: var(--wrapperPadding);
    background-color: var(--backgroundColor);
    box-shadow: 0 0 1em 0 black;
    padding-bottom: 1em;
    display: flex;
    flex-direction: column;
  }

  nav {
    padding-bottom: var(--wrapperPadding);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 0.75em;
  }

  a {font-size: 1.3em}
  a[inert] {background-color: var(--textSubColor)}

  #currentTool {
    background-color: var(--backgroundMidColor);
    min-height: 20em;
    flex-grow: 1;
    padding: 0.75em;
    overflow: auto;
    box-shadow: inset 0 0 0.5em 0 black;
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
      padding-bottom: unset;
      padding-right: var(--wrapperPadding);
    }

    #currentTool {
      flex-basis: 75%;
    }
  }
</style>