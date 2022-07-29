<Core
  headTitle="EvAvKein: 404"
  headDescription="Eve Aviv Keinan's website's error/404 page; including the site's navigation list"
  header={false}
>
  <main>
    <h1>404: Page not found!</h1>
    <p>Were you trying to visit one of these pages?</p>
    <Nav type={"main"} namesAlwaysVisible={true}/>
    <hr>
    <p>...Or maybe even one of these?</p>
    <Nav type={"misc"} namesAlwaysVisible={true}/>
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

  h1 {
    text-decoration: underline;
    margin-bottom: 0.75em;
  }
  p {margin-bottom: 0.5em}

  hr {
    width: 100%;
    margin: 0.5em;
  }
</style>