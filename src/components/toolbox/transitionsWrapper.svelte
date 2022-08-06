<div in:slide={inTiming} out:slide={outTiming}>
  <div in:fade={inTiming} out:fade={outTiming}>
    <slot/>
  </div>
</div>

<script lang="ts">
  import {slide, fade} from "svelte/transition";

  const inTiming = {delay: 400, duration: 500};
  const outTiming = {duration: 400};
</script>