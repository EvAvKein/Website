{#if type !== "none"}
  <nav class:vertical>
    {#if type === "main" || type === "all"}
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
    {/if}
    {#if vertical && type === "all"}
      <hr>
    {/if}
    {#if type === "misc" || type === "all"}
      <NavItem
        href={"/toolbox"}
        imgSrc={"./toolbox.svg"}
        imgAlt={"Toolbox icon"}
        pageName={"Toolbox"}
        {currentPagePath}
        nameAlwaysVisible={namesAlwaysVisible}
      />
    {/if}
  </nav>
{/if}

<script lang="ts">
  import {page} from "$app/stores";
  import NavItem from "./navItem.svelte";

  export let type:"all"|"main"|"misc"|"none";
  export let namesAlwaysVisible = false;
  export let vertical = false;

  $: currentPagePath = $page.url.pathname;
</script>

<style>
  nav {
    padding: 0.25em;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 0.75em;
  }

  nav.vertical {
    flex-direction: column;
    gap: 1.25em;
  }

  hr {
    border-color: var(--textSubColor);
    width: 100%;
    margin: 0;
  }
</style>