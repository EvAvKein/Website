<span class="tooltipSubject" class:activated
  on:mouseenter={() => hovered = true}
  on:mouseleave={() => hovered = false}
  on:focus={() => focused = true}
  on:blur={() => focused = false}
  tabindex="0"
  bind:this={subject}
>
  <slot name="subject"></slot>

  {#if activated}
    <div class="tooltipContent"
      in:fade={{duration: 200}}
      out:fade={{duration: 150}}
      bind:this={tooltip}
    >
      <slot name="content"></slot>
    </div>
  {/if}
</span>

<script lang="ts">
  import {fade} from "svelte/transition";

  let subject:HTMLElement;
  let tooltip:HTMLElement;
  let hovered = false;
  let focused = false;
  $: activated = hovered || focused;

  $: if (activated && tooltip) {
    const mainElem = document.querySelector("main")!; // not querying the body because (in the default layout) it doesn't accurately reflect the page's scrollHeight; the <main> takes the remainder height & width the header doesn't occupy, and it handles all (page-content) overflow within itself
    const tooltipState = tooltip.getBoundingClientRect();

    tooltip.style.top = `${tooltipState.top - mainElem.scrollTop}px`;

    if (tooltipState.width > mainElem.clientWidth) {
      tooltip.style.maxWidth = (mainElem.clientWidth + "px");
      tooltipState.width = mainElem.clientWidth;
    };

    const xOverflowing = (tooltipState.x + tooltipState.width) > mainElem.clientWidth;
    if (xOverflowing) {
      const xOverflow = (tooltipState.x + tooltipState.width) - mainElem.clientWidth;
      tooltip.style.transform = `translateX(-${xOverflow}px)`;
    };

    const yOverflowing = (tooltipState.y + tooltipState.height) > mainElem.scrollHeight;
    if (yOverflowing) {
      const subjectState = subject.getBoundingClientRect();
      tooltip.style.top = `${subjectState.top - tooltipState.height}px`;
    };
  };
</script>

<style global> /* global for the ".tooltipSubject.activated img" selector to work */
  .tooltipSubject {
    display: inline-block;
    cursor: help;
    outline: none;
    border-bottom: 0.15em dashed var(--highlightSubColor);
  }

  .tooltipSubject.activated {color: var(--highlightSubColor)}
  .tooltipSubject.activated img {filter: var(--filterToHighlightSubColor)}

  .tooltipContent {
    position: fixed;
    height: max-content;
    width: max-content;
    font-size: 0.8em;
    color: var(--textColor);
    background-color: var(--backgroundSubColor);
    z-index: 999999999;
    padding: 0.55em;
    border-radius: 0.5em;
    box-shadow: 0 0 0.5em 0.25em black;
    
    font-weight: initial;
    text-decoration: initial;
    white-space: normal;
  } 
</style>