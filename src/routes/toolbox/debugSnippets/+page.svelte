<TransitionWrapper>
  <h4>Log Every Focus</h4>
  <code>{
  `document.querySelector("body")
    .addEventListener("focusin", (event) =>
      {console.log(event.target)}
    );`
  }</code>
  <hr>
  <h4>Highlight Element Boxes</h4>
  <code>{"* {box-shadow: 0 0 0 0.1em rgb(255 0 0 / 40%) !important}"}</code>
</TransitionWrapper>

<script lang="ts">
  import TransitionWrapper from "../transitionWrapper.svelte";
</script>

<style>
  h4 {
    font-size: 1.1em;
    text-decoration: underline;
  }

  code {
    display: block;
    color: var(--textSubColor);
    white-space: pre;
    margin: 0.5em 0 1em;
  }

  hr {border-color: var(--textSubColor)}
</style>
