<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>

<header>
  <a href="/" class="core_contentButton">
    <img src="./eak.svg" alt="The initials E.A.K, with E & K aligned and rotated to neatly overlap with the A inbetween">
  </a>

  <button id="navButton" aria-label="Open (extra) navigation"
      class={"core_contentButton" + (sidebarToggled ? " buttonOfOpenNav" : "")}
      on:click={() => sidebarToggled = !sidebarToggled}
    >
      <NavSvg activated={sidebarToggled}/>
    </button>

  <section id="sidebar"
    class:sidebarToggled
    inert={!sidebarInteractable || null}
  >
    <Nav/>
  </section>
</header>

<main>
  <slot/>
</main>

<script lang="ts">
  import NavSvg from "../components/nav/navSvg.svelte"
  import Nav from "../components/nav/nav.svelte";

  let windowWidth:number;
  let windowHeight:number;

  let sidebarToggled = false;
  $: landscapeMode = windowWidth > windowHeight;
  $: sidebarInteractable = sidebarToggled || landscapeMode;
</script>

<style>
  :global(body) {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  header {
    padding: 0.5em;
    background-color: var(--backgroundColor);
    z-index: 1000;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 0.5em 0.5em var(--backgroundColor);
  }

  a img, #navButton {height: 2.5em}
  #navButton {margin-right: 0.5em}

  #sidebar {
    direction: rtl; /* for the scrollbar */
    background-color: var(--backgroundColor);
    position: fixed;
    top: 0;
    right: 0;
    padding: 1em 0.25em;
    margin-top: 4em;
    max-height: calc(100% - 6em);
    transform: translateX(125%);
    transition: transform 250ms;
    box-shadow: -0.25em 0 0.5em 0.5em var(--backgroundColor);
  }
  #sidebar.sidebarToggled {transform: translateX(0)}

  main {
    overflow: auto;
    scrollbar-gutter: stable both-edges;
  }

  @media (orientation: landscape) {
    :global(body) {
      flex-direction: row;
    }

    header {
      flex-direction: column;
      flex-wrap: nowrap;
      min-width: 4em;
      padding: 1em 0.5em 1em;
      box-shadow: 0 0 0.5em 0.1em var(--backgroundColor);
      overflow-x: hidden;
    }

    #navButton {display: none}

    #sidebar {
      position: relative;
      transform: translateX(0);
      box-shadow: none;
      direction: ltr;
      left: 0;
      right: none;
      padding: 0;
    }

    main {
      flex-grow: 1;
      padding-top: 2.5em; /* not a long-term solution due to potential conflicts with full-page elements, but aligning main contents via flexbox breaks on transitions (and also just doesn't position it to my taste) and i'm not eager to add an intermediate element just to transform-translateY it ... so i'll cross the full-page element bridge if/when i get there */
    }
  }
</style>