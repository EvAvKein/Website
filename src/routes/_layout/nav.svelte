<nav>
  <NavItem
    href={"/"}
    imgSrc={"/about.svg"}
    imgAlt={"Nondescript person icon"}
    pageName={"Home"}
    {currentPagePath}
    nameAlwaysVisible={namesAlwaysVisible}
  />
  <NavItem
    href={"/portfolio"}
    imgSrc={"/code.svg"}
    imgAlt={"Computer code icon"}
    pageName={"Portfolio"}
    {currentPagePath}
    nameAlwaysVisible={namesAlwaysVisible}
  />
  <NavItem
    href={"/contact"}
    imgSrc={"/contact.svg"}
    imgAlt={"Envelope icon"}
    pageName={"Contact"}
    {currentPagePath}
    nameAlwaysVisible={namesAlwaysVisible}
  />
  <hr/>
  <NavItem
    href={"/toolbox"}
    imgSrc={"/toolbox.svg"}
    imgAlt={"Toolbox icon"}
    pageName={"Toolbox"}
    {currentPagePath}
    nameAlwaysVisible={namesAlwaysVisible}
  />
</nav>

<script lang="ts">
  import {page} from "$app/stores";
  import NavItem from "./navItem.svelte";

  export let namesAlwaysVisible = false;

  $: currentPagePath = $page.url.pathname;
</script>

<style>
  nav {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 1.25em;
  }

  hr {
    border-color: var(--textSubColor);
    width: 100%;
    margin: 0;
  }
</style>