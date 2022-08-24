<header bind:this={header}>
  <div id="evavkeinWrapper">
    <Evavkein expandable={headerEmWidth > 29} expanded={evavkeinExpanded}/>
  </div>

  <div id="headerNav">
    <Nav type={headerEmWidth < 45 ? "none" : "main"}/>

    <button id="navButton"
      class={"core_contentButton" + (sidebarOpen ? " buttonOfOpenNav" : "")}
      on:click={() => sidebarOpen = !sidebarOpen}
    >
      <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <g id="top">
            <circle cx="5" cy="10" r="5" fill="white"/>
            <rect x="5" y="5" width="50" height="10" fill="white"/>
            <circle cx="55" cy="10" r="5" fill="white"/>
          </g>
          <g id="middle">
            <circle cx="5" cy="30" r="5" fill="white"/>
            <rect x="5" y="25" width="50" height="10" fill="white"/>
            <circle cx="55" cy="30" r="5" fill="white"/>
          </g>
          <g id="bottom">
            <circle cx="5" cy="50" r="5" fill="white"/>
            <rect x="5" y="45" width="50" height="10" fill="white"/>
            <circle cx="55" cy="50" r="5" fill="white"/>
          </g>
      </svg>
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
  import Evavkein from "../components/evavkein.svelte";
  import Nav from "../components/nav/nav.svelte";

  let sidebarOpen = false;

  let header:HTMLElement;
  let headerEmWidth:number;
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
  :global(body) {
    --layoutFontSize: clamp(0.9em, 3vw, 1.25em);
  }

  header {
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    font-size: var(--layoutFontSize);
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
    box-shadow: 0 0 0.75em 0.5em var(--backgroundColor);
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
  #navButton svg {
    overflow: visible;
    padding-inline: 0.3em;
  }
  #navButton #top, #navButton #bottom {transition: transform 250ms}
  #navButton #middle {transition: opacity 200ms}
  #navButton #bottom {transform-origin: bottom left}
  .buttonOfOpenNav #top {transform: rotate(21deg)}
  .buttonOfOpenNav #middle {opacity: 0}
  .buttonOfOpenNav #bottom {transform: rotate(-21deg)}

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
    transform: translateX(125%);
    transition: transform 250ms;
    box-shadow: -0.25em 0 0.5em 0.5em var(--backgroundColor);
  }
  #sidebar.sidebarOpen {transform: translateX(0)}

  main { /* prevents viewport overflow caused by main's content from creating a scrollbar across the whole body, which was causing the header to jump/snap when navigating to and from pages with overflow */
    position: fixed; 
    overflow: auto;
    top: 4.5em;
    bottom: 0;
    right: 0;
    left: 0;
  }
</style>