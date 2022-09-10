<div class="tooltipSubject" class:activated
  on:mouseenter={() => hovered = true}
  on:mouseleave={() => hovered = false}
  on:focus={() => focused = true}
  on:blur={() => focused = false}
  tabindex="0"
>
  <slot name="subject"></slot>
  {#if activated}
    <div class="tooltipWrapper"
      bind:this={tooltip}
      in:fade={{duration: 200}}
      out:fade={{duration: 150}}
    >
      <span class="tooltipContent">
        <slot name="content"></slot>
      </span>
    </div>
  {/if}
</div>

<script lang="ts">
  import {fade} from "svelte/transition";

  let tooltip:HTMLElement;
  let hovered = false;
  let focused = false;
  $: activated = hovered || focused;

  $: if (activated && tooltip) {
    const mainState = document.querySelector("main")!; // not querying body because the function "clientWidth" property to do corrections for its exclusion of an element's scrollbar, and (in the main layout) the scrollbar comes from main rather than body
    const tooltipState = tooltip.getBoundingClientRect();

    // i'd declare a variable here for (tooltipState.x + tooltipState.width), to be used in the following line and the xOverflowing condition block... but i failed to come up with a variable name more readable than the code itself
    const xOverflowing = (tooltipState.x + tooltipState.width) > mainState.clientWidth;

    if (tooltipState.width > mainState.clientWidth) {
      tooltip.style.maxWidth = (mainState.clientWidth + "px");
      tooltipState.width = mainState.clientWidth;
    };

    if (xOverflowing) {
      const xOverflow = (tooltipState.x + tooltipState.width) - mainState.clientWidth;
      tooltip.style.transform = `translateX(-${xOverflow}px)`;
    };
  };
</script>

<style global> /* global for the ".tooltipSubject.activated img" selector to work */
  .tooltipSubject {
    display: inline-block; /* inline-blocking a div instead of using a span because the latter creates an extra space in some cases */
    cursor: help;
    outline: none;
    position: relative;
    border-bottom: 0.15em dashed var(--highlightSubColor);
  }

  .tooltipSubject.activated {color: var(--highlightColor)}
  .tooltipSubject.activated img {filter: var(--filterToHighlightColor)}

  .tooltipWrapper { /* wrapping to allow the tooltip to have a (functional) margin */
    cursor: default;
    position: absolute;
    width: max-content;
    left: 0;
    top: 100%;
  }

  .tooltipContent {
    font-size: 0.8em;
    display: block;
    margin: 0.1em;
    color: var(--textColor);
    font-weight: initial;
    text-decoration: initial;
    background-color: var(--backgroundSubColor);
    padding: 0.5em;
    border-radius: 0.5em;
    box-shadow: 0 0 0.2em 0.1em black;
  } 
</style>