<nav class:vertical>
  <NavItem
    href={"/"}
    imgSrc={"./about.svg"}
    imgAlt={"Nondescript person icon"}
    pageName={"Home"}
    {currentPagePath}
    nameAlwaysVisible={namesAlwaysVisible}
  />
  <NavItem
    href={"/portfolio"}
    imgSrc={"./code.svg"}
    imgAlt={"Computer code icon"}
    pageName={"Portfolio"}
    {currentPagePath}
    nameAlwaysVisible={namesAlwaysVisible}
  />
  <NavItem
    href={"/contact"}
    imgSrc={"./contact.svg"}
    imgAlt={"Envelope icon"}
    pageName={"Contact"}
    {currentPagePath}
    nameAlwaysVisible={namesAlwaysVisible}
  />
</nav>

<script lang="ts">
  import {onMount} from "svelte/internal";
  import NavItem from "./navItem.svelte";

  export let namesAlwaysVisible = false;
  export let vertical = false;

  let currentPagePath = "";
  onMount(() => {
    currentPagePath = window.location.pathname;
  });
</script>

<style>
  nav {
    padding: 0.25em 0.25em 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 0.75em;
  }

  nav.vertical {flex-direction: column}
</style>