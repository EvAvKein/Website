<section>
  <section id="categoryButtons">
    <button on:click={() => selectedCategory = "current"}
      class={`core_blueprint ${selectedCategory === "current" ? "active" : ""}`}
    >Current</button>
    <button on:click={() => selectedCategory = "archive"}
      class={`core_blueprint ${selectedCategory === "archive" ? "active" : ""}`}
    >Archive</button>
  </section>
  <div id="projectsList" class="core_blueprint">
    {#if selectedCategory === "current"}
      <ToolWrapper>
        <div class="projectsCategory">
          <Distillogue/>
          <Website/>
          <FilterJobsFeeds/>
        </div>
      </ToolWrapper>
    {:else}
      <ToolWrapper>
        <div class="projectsCategory">
          <Warehouse/>
        </div>
      </ToolWrapper>
    {/if}
  </div>
</section>

<script lang="ts">
  import ToolWrapper from "../../../lib/swappableContentWrapper.svelte";

  import Distillogue from "./items/distillogue.svelte";
  import Website from "./items/website.svelte";
  import FilterJobsFeeds from "./items/filterJobsFeeds.svelte";
  import Warehouse from "./items/warehouse.svelte";

  let selectedCategory:"current"|"archive" = "current";
</script>

<style>
  #categoryButtons {
    display: flex;
    gap: 0.5em;
  }
  button {
    --shadow: 0 0 0.25em 0.1em;
    flex-grow: 0.1;
    align-self: flex-end;
    color: var(--textColor);
    background-color: var(--backgroundMidColor);
    padding: 0.5em;
    box-shadow: var(--shadow) black;
    scale: 0.925;
    transition: all 400ms;
  }
  button:hover, button:focus {
    color: var(--highlightSubColor);
    box-shadow: var(--shadow) var(--highlightSubColor);
  }
  button:active {
    color: var(--highlightColor);
    box-shadow: var(--shadow) var(--highlightColor);
  }
  button.active {
    flex-grow: 1;
    scale: 1;
  }

  #projectsList {
    background-color: var(--backgroundColor);
    overflow: hidden;
    box-shadow: inset 0 0 0.5em 0.1em black;
  }

  .projectsCategory {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1em;
    gap: 1.25em;
  }
</style>