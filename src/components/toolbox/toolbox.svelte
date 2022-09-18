<section id="toolbox">
  <h2>Toolbox</h2>
  <h3>Utilities I found useful</h3>
  <section id="tools">
    <nav>
      <NavButton 
        text="Debug Snippets"
        id="debugSnippets"
        bind:current={current}
      />
      <NavButton 
        text="CSS Filter Generator"
        id="cssHexToFilter"
        bind:current={current}
      />
      <NavButton 
        text="Percent-RGB-Hex Converter"
        id="percentRgbHexConverter"
        bind:current={current}
      />
    </nav>
    <section id="currentTool">
      {#if current === "debugSnippets"}
        <TransWrapper>
          <DebugSnippets/>
        </TransWrapper>
      {:else if current === "cssHexToFilter"}
        <TransWrapper>
          <FilterGenerator/>
        </TransWrapper>
      {:else if current === "percentRgbHexConverter"}
        <TransWrapper>
          <PercentRgbHexConverter/>
        </TransWrapper>
      {:else}
        <TransWrapper>
          <div id="default">
            <img src="./arrow.svg" alt="Arrow pointing at the navigation buttons">
            <p>Check out any of these!</p>

          </div>
        </TransWrapper>
      {/if}
    </section>
  </section>
</section>

<script lang="ts">
  import NavButton from "./navButton.svelte";
  import TransWrapper from "./transitionsWrapper.svelte";
  import DebugSnippets from "./tools/debugSnippets.svelte";
  import FilterGenerator from "./tools/cssHexToFilter/cssHexToFilter.svelte";
  import PercentRgbHexConverter from "./tools/percentRgbHexConverter.svelte";

  type toolID = ""|"debugSnippets"|"cssHexToFilter"|"percentRgbHexConverter";
  let current = "" as toolID;
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

  #default {
    font-size: 1.5em;
    padding: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25em;
  }

  #default img {
    transform: rotate(270deg);
    height: 1.25em;
  }

  @media (min-width: 50em) {
    #tools {
      flex-direction: row;
      flex-grow: 1;
    }

    nav {
      flex-direction: column;
      justify-content: flex-start;
      gap: 0.75em;
      border-radius: var(--borderWidth) 0 0 var(--borderWidth);
    }

    #currentTool {
      border-left: none;
      border-top: var(--border);
      border-radius: 0 var(--borderWidth) var(--borderWidth) 0;
    }

    #default img {
      transform: rotate(180deg);
    }
  }
</style>