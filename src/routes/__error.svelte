<Core headTitle="EvAvKein: 404"
  header={false}
>
  <main>
    <h1>404: Page not found!</h1>
    <p>Were you trying to visit one of these pages?</p>
    <Nav namesAlwaysVisible={true}/>
  </main>
</Core>

<script lang="ts">
  import Core from "./_core.svelte";
  import Nav from "../components/nav/nav.svelte";
</script>


<style>
  main {
    font-size: clamp(0.85em, 4vw, 2.5em);
    height: calc(100vh - 2em);
    width: calc(100vw - 2em);
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h1 {text-decoration: underline}
  p {margin: 1em 0 0.5em}
</style>