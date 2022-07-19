<nav>
  <NavItem
    href={"/"}
    imgSrc={"./about.svg"}
    imgAlt={"Nondescript person icon"}
    pageName={"Home"}
    {currentPagePath}
  />
  <NavItem
    href={"/portfolio"}
    imgSrc={"./code.svg"}
    imgAlt={"Computer code icon"}
    pageName={"Portfolio"}
    {currentPagePath}
  />
  <NavItem
    href={"/contact"}
    imgSrc={"./contact.svg"}
    imgAlt={"Envelope icon"}
    pageName={"Contact"}
    {currentPagePath}
  />
</nav>

<script lang="ts">
  import {onMount} from "svelte/internal";
  import NavItem from "./navItem.svelte";

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
    gap: 0.75em;
  }
</style>