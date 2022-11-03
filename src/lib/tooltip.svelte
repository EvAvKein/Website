<div class="tooltipSubject" class:activated
  on:mouseenter={() => hovered = true}
  on:mouseleave={() => hovered = false}
  on:focus={() => focused = true}
  on:blur={() => focused = false}
  tabindex="0"
  bind:this={wrapperElem}
>{text}<!--
  comment prevents extra space character
-->{#if activated}
    <div class="tooltip"
      in:fade={{duration: 200}}
      out:fade={{duration: 150}}
      bind:this={tooltipElem}
    >{tooltip}</div>
  {/if}
</div>

<script lang="ts">
  import {fade} from "svelte/transition";
  
  export let text:string;
  export let tooltip:string;

  let wrapperElem:HTMLElement;
  let tooltipElem:HTMLElement;
  let hovered = false;
  let focused = false;
  $: activated = hovered || focused;

  $: if (activated && tooltipElem) {
    const mainElem = document.querySelector("main")!; // not querying the body because (in the default layout) it doesn't accurately reflect the page's scrollHeight; the <main> takes the remainder height & width the header doesn't occupy, and it handles all (page-content) overflow within itself

    tooltipElem.style.top = `${tooltipElem.offsetTop - mainElem.scrollTop}px`;

    if (tooltipElem.offsetWidth > mainElem.clientWidth) {
      tooltipElem.style.maxWidth = (mainElem.clientWidth + "px");
    };

    const wrapperX = wrapperElem.getBoundingClientRect().left; // because offsetLeft can get weird (for a lack of a proper understanding) in some cases (found in portfolio's techs section)
    const xForCenteringAboveText = (wrapperX + (wrapperElem.offsetWidth / 2)) - (tooltipElem.offsetWidth / 2);
    tooltipElem.style.left = `${xForCenteringAboveText}px`;

    const xOverflowing = (tooltipElem.offsetLeft + tooltipElem.offsetWidth) > mainElem.clientWidth;
    if (xOverflowing) {
      const xOverflow = (tooltipElem.offsetLeft + tooltipElem.offsetWidth) - mainElem.clientWidth;
      tooltipElem.style.transform = `translateX(-${xOverflow}px)`;
    };

    const xUnderflowing = tooltipElem.offsetLeft < 0;
    if (xUnderflowing) {
      tooltipElem.style.left = "0";
    };

    const yOverflowing = (tooltipElem.offsetTop + tooltipElem.offsetHeight) > mainElem.scrollHeight;
    if (yOverflowing) {
      tooltipElem.style.top = `${wrapperElem.offsetTop - tooltipElem.offsetTop}px`;
    };
  };
</script>

<style>
  .tooltipSubject {
    display: inline;
    cursor: help;
    outline: none;
    text-decoration: underline 0.1em dashed var(--highlightSubColor);
    transition: color 350ms;
  }
  .tooltipSubject.activated {color: var(--highlightColor)}

  .tooltip {
    position: fixed;
    height: max-content;
    width: max-content;
    font-size: 0.9rem;
    color: var(--textColor);
    background-color: var(--backgroundSubColor);
    z-index: 999999999;
    padding: 0.55rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0.25rem black;
    
    font-weight: initial;
    text-decoration: initial;
    white-space: normal;
    line-height: initial;
  } 
</style>