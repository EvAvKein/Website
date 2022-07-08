<section>
  <h2>{question}</h2>
  <h3>{undertitle}</h3>
  {#if answersList}
    <ul>
      {#each answersList as answer}
        <li>{answer}</li>
      {/each}
    </ul>
  {:else if answerParagraph} 
    <p>
      {answerParagraph}
    </p>
  {/if}
</section>


<script lang="ts">
  export let question:string;
  export let undertitle:string;
  export let answerParagraph = undefined as string|undefined;
  export let answersList = undefined as string[]|undefined;
</script>

<style>
  h2 {font-size: 2em}
  h3 {
    font-size: 1em;
    color: var(--textSubColor);
  }

  li + li {margin-top: 0.25em}

  p {margin: 1em 0 0 1em}
</style>