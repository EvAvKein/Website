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
  {#if header}
    <Header/>
  {/if}
  <slot/>
</div>


<script lang="ts">
  import Header from "../components/header.svelte";
  import {blur, fade} from "svelte/transition";
  import {onMount} from "svelte";

  export let headFavicon = "./eak.svg";
  export let headTitle:string;
  export let headDescription:string;

  export let header = true;
  
  let body:HTMLElement;
  onMount(() => {
    body = document.getElementsByTagName("html")[0];
  });
  function noScrollWhilePageTransitions() {
    body.style.overflow = "hidden";
    setTimeout(() => {
      body.style.overflow = "auto";
    }, 500);
  };
</script>

<style>
  :global(:root) { /* filters created via https://codepen.io/sosuke/pen/Pjoqqp */
    --textColor: #e9e9e9;
    --filterToTextColor: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(244%) hue-rotate(180deg) brightness(115%) contrast(83%);
    --textSubColor: #bebebe;
    --filterToTextSubColor: brightness(0) saturate(100%) invert(85%) sepia(6%) saturate(0%) hue-rotate(252deg) brightness(89%) contrast(92%); 
    --backgroundColor: #0a1018;
    --filterToBackgroundColor: brightness(0) saturate(100%) invert(5%) sepia(10%) saturate(2898%) hue-rotate(175deg) brightness(87%) contrast(97%);
    --backgroundSubColor: #042b43;
    --filterToBackgroundSubColor: brightness(0) saturate(100%) invert(11%) sepia(28%) saturate(3585%) hue-rotate(178deg) brightness(102%) contrast(97%);
    --highlightColor: #f5cb32;
    --filterToHighlightColor: brightness(0) saturate(100%) invert(91%) sepia(83%) saturate(7499%) hue-rotate(325deg) brightness(101%) contrast(98%);
    --highlightSubColor: #d8b434;
    --filterToHighlightSubColor: brightness(0) saturate(100%) invert(62%) sepia(76%) saturate(412%) hue-rotate(9deg) brightness(102%) contrast(84%);
  }

  :global(body) {
    margin: 0;
    min-height: 100%;
    box-sizing: border-box;
    color: var(--textColor);
    font-family: sans-serif;
    letter-spacing: 0.03em;
    background-color: var(--backgroundColor);
    text-underline-offset: 0.1em;
  }

  :global(img) {
    pointer-events: none;
    user-select: none;
  }

  :global(h1), :global(h2), :global(h3), :global(h4), :global(h5), :global(h6), :global(p) {margin: 0}

  :global(a) {
    color: var(--textColor);
    text-decoration: none;
  }

  :global(button) {font-size: inherit}
  :global(button), :global(a), :global(summary) {
    cursor: pointer;
    border: none;
    outline: none;
  }

  :global(::-webkit-scrollbar) {
    width: 1rem;
    height: 1rem;
  }
  :global(::-webkit-scrollbar-track) {
    background-color: var(--backgroundColor);
    margin: 0.2rem;
  }
  :global(::-webkit-scrollbar-corner) {
    background-color: var(--backgroundColor)
  }
  :global(::-webkit-scrollbar-thumb) {
    background-color: var(--textColor);
    border: 0.25rem solid var(--backgroundColor);
    border-radius: 3rem;
  }
  :global(::-webkit-scrollbar-thumb:hover) {
    background-color: var(--textSubColor);
  }

  /*~~~~~~~~~~~~~~~~~~~~~\
    CORE STYLING CLASSES
  \~~~~~~~~~~~~~~~~~~~~~*/
  :global(.core_backgroundButton) {
    color: var(--backgroundColor);
    background-color: var(--textColor);
    border-radius: 0.2em;
    text-decoration: none;
    padding: 0.25em 0.5em;
    border-radius: 0.5em;
  }
  :global(.core_backgroundButton:focus), :global(.core_backgroundButton:hover) {
    background-color: var(--highlightSubColor);
  }
  :global(.core_backgroundButton:active) {
    background-color: var(--highlightColor);
  }

  :global(.core_contentButton) {
    color: inherit;
    background-color: transparent;
    padding: 0;
  }
  :global(.core_contentButton img, .core_contentButton svg) {
    height: inherit;
    filter: var(--filterToTextColor);
  }
  :global(.core_contentButton:focus), :global(.core_contentButton:hover) {
    color: var(--highlightSubColor);
  }
  :global(.core_contentButton:active) {
    color: var(--highlightColor);
  }
  :global(.core_contentButton:focus img, .core_contentButton:focus svg),
  :global(.core_contentButton:hover img, .core_contentButton:hover svg) {
    filter: var(--filterToHighlightSubColor);
  }
  :global(.core_contentButton:active img, .core_contentButton:active svg) {
    filter: var(--filterToHighlightColor);
  }
</style>