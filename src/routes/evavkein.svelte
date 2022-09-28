<h1 class={layout + (expanded ? " expanded": "")}
  bind:this={wrapper}
>
  <span id="eve" >Ev<span class="extra">e</span></span>
  <span id="aviv">Av<span class="extra">iv</span></span>
  <span id="keinan">Kein<span class="extra">an</span></span>
</h1>

<script lang="ts">
  import {onMount} from "svelte";

  export let expanded = false;

  let wrapper:HTMLElement;
  let layout:"tight"|"moderate"|"spacious";

  let wrapperObserver:ResizeObserver;

  $: if (wrapper) {
    wrapperObserver = new ResizeObserver(() => {
      const styles = window.getComputedStyle(wrapper);
      const fontSize = Number.parseFloat(styles.fontSize);
      const width = Number.parseFloat(styles.width);
      const emWidth = width / fontSize;
      
      if (emWidth > 7.9) {layout = "spacious"}
      else if (emWidth > 4.25) {layout = "moderate"}
      else {layout = "tight"}
    });

    wrapperObserver.observe(wrapper);
  };

  onMount(() => {return () => {wrapperObserver.disconnect()}});
</script>

<style>
  h1 {
    font-size: 3.5em;
    color: var(--highlightColor);
    cursor: default;
    user-select: none;
    gap: 0;
    margin: 0;
    transition: gap 750ms ease-in-out;
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

  h1 > span {white-space: nowrap}

  h1:hover, h1.expanded {gap: 0 0.3em}
  h1:hover .extra, h1.expanded .extra {
    visibility: visible;
    max-width: 2.5em;
    opacity: 1;
    transition: max-width 750ms ease-in-out,
                opacity 500ms ease-in-out 250ms;
  }

  .tight > span {
    display: block;
    text-align: center;
  }

  .moderate {
    display: grid;
    grid-template-areas: "eve aviv"
                         "keinan keinan";
  }
  .moderate #eve {
    grid-area: eve;
    justify-self: right;
  }
  .moderate #aviv {
    grid-area: aviv;
    justify-self: left;
  }
  .moderate #keinan {
    grid-area: keinan;
    justify-self: center;
  }

  .spacious {
    display: flex;
    justify-content: center;
  }
</style>