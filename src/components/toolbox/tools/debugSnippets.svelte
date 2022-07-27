<h4>Log Every Focus</h4>
<code>{
`document.querySelector("body")
  .addEventListener("focusin", (event) =>
    {console.log(event.target)}
  );`
}</code>
<!-- <hr> -->


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

  /* hr {border-color: var(--textSubColor)} */
</style>
