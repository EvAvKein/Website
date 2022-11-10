<div id="toolWrapper"
  in:slide={{
    duration: resizeDuration,
    delay: swipeDuration
  }}
  out:slide={{
    duration: resizeDuration,
    delay: swipeDuration
  }}
>
  <div class="core_blueprint"
    in:fly={{
      duration: swipeDuration,
      x: 0 - swipeDistance,
      delay: swipeDuration + resizeDuration
    }}
    out:fly={{
      duration: swipeDuration,
      x: swipeDistance
    }}
  >
    <slot/>
  </div>
</div>

<script lang="ts">
  import {slide, fly} from "svelte/transition";

  const swipeDuration = 250;
  const swipeDistance = 750;
  const resizeDuration = 250;
</script>

<style>
  .core_blueprint {
    padding: 1em;
    box-shadow: 0 0 0.25em 0.1em black;
    overflow: auto;
  }
</style>