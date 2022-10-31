<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>

<header class="core_blueprint">
  <a href="/" class="core_contentButton">
    <svg width="138.41" height="84" viewBox="0 0 138.41 84" xmlns="http://www.w3.org/2000/svg"> <!-- inlining to enable color transitions, since img imports can only be colored with filters and color-transitioning those (at least the auto-generated ones e.g https://evavkein.com/toolbox/cssFilterGenerator) without unwanted intermediate colors is prohibitively complex -->
      <title>The initials E.A.K, with E and K rotated and aligned to neatly overlap with the A inbetween</title>
      <g>
      <path d="M67.4284 15.7297L45.3337 83.7302L-1.18376e-06 69.0004L3.98932 56.7225L36.1007 67.1561L41.3175 51.1004L10.1506 40.9737L13.833 29.6403L45 39.767L50.307 23.4336L18.1956 12.9999L22.0947 0.999846L67.4284 15.7297Z"/>
      <path d="M46.5 83.9998H30L55 10.9998H75L100 83.9998H84L66 27.9998H64L46.5 83.9998ZM46.5 55.1405H84V66.9998H46.5V55.1405Z"/>
      <path d="M84.0495 83.9004L63.0001 17.1402L75.3984 13.2311L84.7203 42.7963L85.674 42.4956L101.149 5.112L117.362 9.23297e-07L101.887 37.3836L138.411 66.7602L123.152 71.5715L95.3571 49.9278L90.4337 60.9169L96.4478 79.9913L84.0495 83.9004Z"/>
      </g>
    </svg>
  </a>

  <button id="navButton" aria-label="Open (extra) navigation"
      class={"core_contentButton" + (sidebarToggled ? " buttonOfOpenNav" : "")}
      on:click={() => sidebarToggled = !sidebarToggled}
    >
      <NavSvg activated={sidebarToggled}/>
    </button>

  <section id="sidebar"
    class="core_blueprint"
    class:sidebarToggled
    inert={!sidebarInteractable || null}
  >
    <Nav/>
  </section>
</header>

<main class="core_blueprint">
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
    box-shadow: 0 0 0.25em 0.1em black;
  }

  a svg, #navButton {height: 2.5em}
  #navButton {margin-right: 0.5em}

  a svg {vertical-align: bottom} /* removes unduely-added space (see https://stackoverflow.com/a/27999850) */

  #sidebar {
    direction: rtl; /* for the scrollbar */
    background-color: inherit;
    position: fixed;
    top: 0;
    right: 0;
    overflow-y: auto;
    margin-top: 3.9em;
    border-radius: 0.25em 0 0 0.25em;
    max-height: calc(100% - 5em);
    transform: translateX(125%);
    transition: transform 250ms;
    box-shadow: 0 0 0.5em 0.1em black;
  }
  #sidebar.sidebarToggled {transform: translateX(0)}

  main {
    background-color: #402b22; /* otherwise the background is a glaring white until the background image loads */
    background-image: url("/wooden.svg");
    background-size: 50vh;
    flex-grow: 1;
    overflow: auto;
    scroll-behavior: smooth;
    padding: 0.75em 0.5em 0.5em;
  }

  @media (orientation: landscape) and (min-height: 40em) {
    :global(body) {
      flex-direction: row;
    }

    header {
      flex-direction: column;
      flex-wrap: nowrap;
      min-width: 5em; /* there used to small page-dependent changes that caused this element to change width a bit, and i failed to figure out what was actually causing the problem or to come up with a better page-independent solution, so here these two delcarations are (because setting a static width value didn't work, for whatever wacky reason) */
      max-width: 5em; /* when images requests fail (e.g connection issues), without this declaration the alt text causes the (now-vertical) header to take up an obscene amount of space */
      padding: 1em 0.5em 0;
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
      background: unset;
    }

    main {
      padding: 0.5em;
      padding-left: 0.75em;
    }
  }
</style>