<button class="core_backgroundButton"
  inert={current === id || null}
  on:click={() => current = id}
>{text}</button>

<script lang="ts">
  export let current:string;
  export let id:string;
  export let text:string;
</script>

<style>
  button {
    font-size: inherit;
    height: min-content;
    white-space: nowrap;
  }

  button[inert] {
    background-color: var(--textSubColor);
    cursor: initial;
  }
</style>