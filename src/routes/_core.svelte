<svelte:head>
  <link rel="icon" href={headFavicon}/>
  <title>{headTitle}</title>
  <meta name="description" content={headDescription}>
</svelte:head>
<div id="pageTransitionsWrapper"
  in:fade={{delay: 500, duration: 500}}
  out:blur={{duration: 500}}
  on:introstart={noScrollWhilePageTransitions}
  >
  <Header/>
  <slot/>
</div>


<script lang="ts">
  import Header from "../components/header.svelte";
  import {blur, fade} from "svelte/transition";
  import {onMount} from "svelte";

  export let headFavicon = "./eak.svg";
  export let headTitle = "EvAvKein";
  export let headDescription = "Eve Aviv Keinan's personal and portfolio website";
  
  let body:HTMLElement;
  onMount(() => {
    body = document.getElementsByTagName("html")[0];
  });
  function noScrollWhilePageTransitions() {
    body.style.scrollbarGutter = "stable";
    body.style.overflow = "hidden";
    setTimeout(() => {
      body.style.overflow = "auto";
      body.style.scrollbarGutter = "auto";
    }, 500);
  };
</script>

<!-- global/core styles in static/_core.css -->