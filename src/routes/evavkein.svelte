<h1 bind:this={wrapper}
  class={layout}
  aria-label="Eve Aviv Keinan"
>
  <span aria-hidden="true" id="eve" >Ev<span class="extra">e</span></span>
  <span aria-hidden="true" id="aviv">Av<span class="extra">iv</span></span>
  <span aria-hidden="true" id="keinan">Kein<span class="extra">an</span></span>
</h1>

<script lang="ts">
  import {onMount} from "svelte";

  let wrapper:HTMLElement;
  let layout:"tight"|"moderate"|"spacious";

  let wrapperObserver:ResizeObserver;

  $: if (wrapper) {
    wrapperObserver = new ResizeObserver(() => {
      const computedStyles = window.getComputedStyle(wrapper);
      const fontSize = Number.parseFloat(computedStyles.fontSize);
      const width = Number.parseFloat(computedStyles.width);
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
    font-size: clamp(3.5em, 11vw, 5.5em);
    color: var(--highlightColor);
    user-select: none;
    gap: 0 0.3em;
    transition: gap 750ms ease-in-out;
  }
  .extra {
    display: inline-block;
    max-width: 2.5em;
    opacity: 1;
    transition: max-width 750ms ease-in,
                opacity 500ms ease-out 250ms;
  }

  h1 > span {white-space: nowrap}

  h1:hover {gap: 0}
  h1:hover .extra {
    max-width: 0;
    opacity: 0;
    transition: max-width 550ms ease-out 100ms,
                opacity 400ms ease-out;
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