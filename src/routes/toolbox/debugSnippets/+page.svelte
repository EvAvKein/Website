<ToolWrapper>
  <section>
    <h4>Log Every Focus</h4>
    <code>{
    `document.querySelector("body")
      .addEventListener("focusin", (event) => {
        console.log(event.target)
      });`
    }</code>
    <hr>
    <h4>Highlight Element Boxes</h4>
    <code>{"* {box-shadow: 0 0 0 0.1em rgb(255 0 0 / 40%) !important}"}</code>
    <hr>
    <h4>Delayed debugger freeze (Chromium/Firefox)</h4>
    <code>{"setTimeout(() => {debugger}, 5000)"}</code>
  </section>
</ToolWrapper>

<script lang="ts">
  import ToolWrapper from "../../../lib/swappableContentWrapper.svelte";
</script>

<style>
  section {padding: 1em}

  h4 {
    font-size: 1.1em;
    text-decoration: underline;
  }

  code {
    display: block;
    color: var(--textSubColor);
    white-space: pre;
    margin-top: 0.5em;
  }

  hr {
    border-color: var(--textSubColor);
    margin: 1em 0 0.5em;
  }
</style>
