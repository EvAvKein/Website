<header bind:this={header}>
  <div id="evavkeinWrapper">
    <Evavkein expandable={headerEmWidth > 29} expanded={evavkeinExpanded}/>
  </div>

  <div id="headerNav">
    <Nav type={headerEmWidth < 45 ? "none" : "main"}/>

    <button id="navButton" aria-label="Open (extra) navigation"
      class={"core_contentButton" + (sidebarOpen ? " buttonOfOpenNav" : "")}
      on:click={() => sidebarOpen = !sidebarOpen}
    >
      <NavSvg activated={sidebarOpen}/>
    </button>
  </div>
</header>

<section id="sidebar"
  class:sidebarOpen
  inert={!sidebarOpen || null}
>
  <Nav type={headerEmWidth < 45 ? "all" : "misc"} vertical={true}/>
</section>

<main>
  <slot/>
</main>

<script lang="ts">
  import {onMount} from "svelte";
  import {afterNavigate} from "$app/navigation";
  import NavSvg from "../components/nav/navSvg.svelte"
  import Evavkein from "../components/evavkein.svelte";
  import Nav from "../components/nav/nav.svelte";

  let sidebarOpen = false;

  let header:HTMLElement;
  let headerEmWidth = 0;
  onMount(() => {
    const headerObserver = new ResizeObserver((entries) => {
      const containerPxWidth = entries[0].contentRect.width;
      const fontPxSize = Number.parseInt(window.getComputedStyle(header).fontSize);
      headerEmWidth = containerPxWidth / fontPxSize;
    });
    headerObserver.observe(header);

    return () => {headerObserver.disconnect()};
  });

  let evavkeinExpanded = false;
  afterNavigate((navData) => {
    if (navData.from === null) {
      evavkeinExpanded = true;
      setTimeout(() => {evavkeinExpanded = false}, 2000);
    };
  });
</script>

<style>
  header {
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    box-sizing: border-box;
    height: 4em;
    padding: 0.25em 0.5em;
    background-color: var(--backgroundColor);
    z-index: 1000;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 0.5em 0.5em var(--backgroundColor);
  }
  
  #evavkeinWrapper {
    color: var(--highlightColor);
    font-size: 3em;
    line-height: 0.9em;
  }

  #headerNav {
    display: flex;
    gap: 0.75em;
  }

  #navButton {
    height: 2.5em;
    margin: 0.5em 0;
  }

  #sidebar {
    direction: rtl; /* for the scrollbar */
    overflow: auto;
    background-color: var(--backgroundColor);
    position: fixed;
    top: 0;
    right: 0;
    max-height: calc(100% - 6em);
    margin-top: 4em;
    padding: 1em 0 1em;
    z-index: 999;
    transform: translateX(125%);
    transition: transform 250ms;
    box-shadow: -0.25em 0 0.5em 0.5em var(--backgroundColor);
  }
  #sidebar.sidebarOpen {transform: translateX(0)}

  main { /* prevents viewport overflow caused by main's content from creating a scrollbar across the whole body, which was causing the header to jump/snap when navigating to and from pages with overflow */
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    top: 4em;
    bottom: 0;
    right: 0;
    left: 0;
  }
</style>