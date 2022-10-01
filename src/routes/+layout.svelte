<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>

<header>
  <a href="/" class="core_contentButton">
    <img src="/eak.svg" alt="The initials E.A.K, with E & K aligned and rotated to neatly overlap with the A inbetween">
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
  import NavSvg from "./_layout/navSvg.svelte"
  import Nav from "./_layout/nav.svelte";

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
    flex-grow: 1;
    overflow: auto;
    scroll-behavior: smooth;
    scrollbar-gutter: stable;
    padding-left: 1em; /* mirrors for the scrollbar width (in _core.svelte). not using "scrollbar-gutter: both edges" because it caused some problems with taking up more space than it should and clipping/covering text there */
  }

  @media (orientation: landscape) and (min-height: 40em) {
    :global(body) {
      flex-direction: row;
    }

    header {
      flex-direction: column;
      flex-wrap: nowrap;
      min-width: 4.5em; /* there used to small page-dependent changes that caused this element to change width a bit, and i failed to figure out what was actually causing the problem or to come up with a better page-independent solution, so here these two delcarations are (because setting a static width value didn't work, for whatever wacky reason) */
      max-width: 4.5em; /* when images requests fail (e.g connection issues), without this declaration the alt text causes the (now-vertical) header to take up an obscene amount of space */
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
      padding-top: 2.5em; /* not a long-term solution due to potential conflicts with full-page elements, but aligning main contents via flexbox breaks on transitions (and also just doesn't position it to my taste) and i'm not eager to add an intermediate element just to transform-translateY it ... so i'll cross the full-page element bridge if/when i get there */
    }
  }
</style>