<h1 bind:this={element}
  class={(expandable ? "expandable" : "undefined") + " " + (expanded ? "expanded": "")}
>
  <span>Ev<span class="extra">e</span></span>
  <span>Av<span class="extra">iv</span></span>
  <span>Kein<span class="extra">an</span></span>
</h1>

<svelte:window bind:innerWidth={windowInnerPxWidth}/>

<script lang="ts">
  import {onMount} from "svelte";
  export let minEmWidthExpandable:number;
  export let expanded = false;

  let element:HTMLElement;
  let windowInnerPxWidth:number;

  let fontPxSize = Infinity;
  onMount(() => {
    fontPxSize = Number.parseInt(window.getComputedStyle(element).fontSize);
  });

  $: currentWidthByElemEm = windowInnerPxWidth / fontPxSize;
  $: expandable = currentWidthByElemEm > minEmWidthExpandable;
</script>

<style>
  h1 {
    color: inherit;
    font-size: inherit;
    cursor: default;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    width: fit-content;
    margin: 0;
    gap: 0;
    transition: gap 1000ms,
                font-size 250ms,
                transform 550ms 550ms;
  }
  .extra {
    display: inline-block;
    text-align: left;
    visibility: hidden;
    max-width: 0;
    opacity: 0;
    transition: max-width 750ms ease-out,
                opacity 250ms ease-out 250ms,
                visibility 0ms 500ms;
  }

  h1.expandable:hover, h1.expandable.expanded {
    gap: 0 0.3em;
    transition: gap 750ms ease-in-out;
  }
  h1.expandable:hover .extra, h1.expandable.expanded .extra {
    visibility: visible;
    max-width: 2.5em;
    opacity: 1;
    transition: max-width 1250ms ease-in-out,
                opacity 500ms ease-out 250ms;
  }
</style>