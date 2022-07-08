<main>
  <h2>
    <div id="greeting">Hello, I'm Eve Aviv Keinan ^^</div>
    <div id="greetingParentheses">(Refer as Eve/Aviv, up to you!)</div>
  </h2>
  <section>
    <div id="who"><Who/></div>
    <div id="what"><What/></div>
    <div id="how"><How/></div>
    <div id="where"><Where/></div>
  </section>
</main>

<script lang="ts">
  import Who from "./QnAs/who.svelte";
  import What from "./QnAs/what.svelte";
  import How from "./QnAs/how.svelte";
  import Where from "./QnAs/where.svelte";
</script>

<style>
  main {
    max-width: 70em;
    font-size: clamp(0.8em, 2vw, 1.1em);
    padding: 0 1em 0.5em;
    margin: 0 auto;
  }

  h2 {text-align: center}
  #greeting {font-size: 2.5em}
  #greetingParentheses {
    font-size: 1.5em;
    color: var(--textSubColor);
  }

  section {
    margin-top: 2em;
    font-size: 1.25em;
  }

  @media (min-width: 50rem) {
    section {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      grid-template-areas:
        "who how"
        "what where"
      ;
      gap: 1em;
    }

    #who {grid-area: who}
    #what {grid-area: what}
    #how {grid-area: how}
    #where {grid-area: where}
  }
</style>