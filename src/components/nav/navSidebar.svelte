<section id="sidebar"
  class:open
>
  <Nav vertical={true}/>
</section>

<script lang="ts">
  import Nav from "./nav.svelte";

  export let open = false;
</script>

<style>
  #sidebar {
    position: fixed;
    right: 0;
    transform: translateX(100%);
  }

  #sidebar.open {transform: translateX(0)}
</style>