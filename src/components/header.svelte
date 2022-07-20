<header>
  <div id="evavkeinWrapper">
    <Evavkein minEmWidthExpandable={14} expanded={evavkeinExpanded}/>
  </div>

  <div id="headerNavWrapper">
    <Nav/>
  </div>

  <button id="navButton"
    class="core_contentButton"
    on:click={() => sidebarOpen = !sidebarOpen}
  >
    <img src="./menu.svg" alt="Navigation buttons icons"/>
  </button>
</header>
<section id="sidebar"
  class:sidebarOpen
>
  <Nav vertical={true}/>
</section>

<script lang="ts">
  import {afterNavigate} from "$app/navigation";
  import Evavkein from "./evavkein.svelte";
  import Nav from "./nav/nav.svelte";

  let evavkeinExpanded = false;
  afterNavigate((navData) => {
    if (navData.from === null) {
      evavkeinExpanded = true;
      setTimeout(() => {evavkeinExpanded = false}, 2000);
    };
  });

  let sidebarOpen = false;
</script>

<style>
  :global(body) {
    --layoutFontSize: clamp(0.9em, 3vw, 1.25em);
  }

  header {
    position: sticky;
    font-size: var(--layoutFontSize);
    top: 0;
    left: 0;
    width: calc(100% - 1em);
    background-color: var(--backgroundColor);
    padding: 0.25em 0.5em;
    margin: 0 0 1em;
    z-index: 1000;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.5em;
    box-shadow: 0 0 1em 0.75em var(--backgroundColor);
  }
  
  #evavkeinWrapper {
    color: var(--highlightColor);
    font-size: 3em;
    line-height: 0.9em;
  }

  #headerNavWrapper {display: none}

  #navButton {
    height: 2.5em;
    margin: 0.5em 0.65em 0.5em 0.5em;
  }
  #sidebar {
    direction: rtl; /* for the scrollbar */
    overflow: auto;
    font-size: var(--layoutFontSize);
    background-color: var(--backgroundColor);
    position: fixed;
    top: 0;
    right: 0;
    max-height: calc(100% - 6em);
    margin-top: 4em;
    padding: 1em 0 1em;
    z-index: 999;
    transform: translateX(100%);
    transition: transform 250ms;
    box-shadow: -0.25em 0 0.5em 0.5em var(--backgroundColor);
  }
  #sidebar.sidebarOpen {transform: translateX(0)}

  @media (min-width: 50em) {
    #headerNavWrapper {display: initial}
    #navButton, #sidebar {display: none}
  }
</style>