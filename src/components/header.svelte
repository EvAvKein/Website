<header>
  <div id="evavkeinWrapper">
    <Evavkein minEmWidthExpandable={14}/>
  </div>

  <nav>
    <HeaderNavItem
      href={"/"}
      imgSrc={"./about.svg"}
      imgAlt={"Nondescript person icon"}
      pageName={"Home"}
      {currentPagePath}
    />
    <HeaderNavItem
      href={"/portfolio"}
      imgSrc={"./code.svg"}
      imgAlt={"Computer code icon"}
      pageName={"Portfolio"}
      {currentPagePath}
    />
    <HeaderNavItem
      href={"/contact"}
      imgSrc={"./contact.svg"}
      imgAlt={"Envelope icon"}
      pageName={"Contact"}
      {currentPagePath}
    />
  </nav>
</header>

<script lang="ts">
  import {onMount} from "svelte/internal";
  import Evavkein from "./evavkein.svelte";
  import HeaderNavItem from "./headerNavItem.svelte";

  let currentPagePath = "";
  onMount(() => {
    currentPagePath = window.location.pathname;
  });
</script>

<style>
  header {
    position: sticky;
    font-size: clamp(0.65em, 3vw, 1.25em);
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
  }
  header:after {
    z-index: 1000;
    content: "";
    position: absolute;
    left: 0;
    display: block;
    bottom: -1em;
    width: 100%;
    height: 1em;
    background-image: linear-gradient(to top, #00000000, var(--backgroundColor));
  }
  
  #evavkeinWrapper {
    color: var(--highlightColor);
    font-size: 3em;
    line-height: 0.9em;
  }

  nav {
    font-size: 1em;
    padding: 0.25em 0.25em 0;
    display: flex;
    flex-wrap: nowrap;
    gap: 0.75em;
  }
</style>