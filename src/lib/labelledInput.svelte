<div>
  {#if type === "textarea"}
    <textarea style={`min-height: ${(textareaMinLineHeight || 1) * 1.15}em`}
      {id}
      bind:value={value}
      placeholder=" "
    ></textarea>
  {:else if type === "text"}
    <input
      type="text"
      {id}
      bind:value={value}
      placeholder=" "
    />
  {/if}
  <label for={id}>{label}</label>
</div>

<script lang="ts">
  export let id:string;
  export let label:string;
  export let value:string;
  export let type = "text" as "text"|"textarea"|undefined;

  export let textareaMinLineHeight = undefined as number|undefined;
</script>

<style>
  div {position: relative}

  label {
    position: absolute;
    top: 1.35em;
    left: 0;
    color: var(--textSubColor);
    margin-left: 0.5em;
    cursor: text;
    transition: transform 250ms;
    white-space: nowrap;
  }

  input, textarea {
    color: var(--textColor);
    background-color: var(--backgroundSubColor);
    width: 100%;
    box-sizing: border-box;
    border-left: 0.225em solid var(--textSubColor);
    margin-top: 1.3em;
    padding-left: 0.2em;
    box-shadow: 0 0 0.25em 0.1em black;
  }
  textarea {resize: vertical}

  input:focus + label, textarea:focus + label {color: var(--highlightColor)}
  input:focus, textarea:focus {
    border-color: var(--highlightColor);
    outline: none;
  }

  label::first-letter {text-transform: capitalize}
  
  input:focus + label, input:not(:placeholder-shown) + label,
  textarea:focus + label, textarea:not(:placeholder-shown) + label {
    cursor: default;
    text-decoration: underline;
    transform: translateY(-1.2em);
    transition: transform 150ms;
  }
</style>